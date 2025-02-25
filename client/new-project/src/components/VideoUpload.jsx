// import React, { useState } from "react";
// import axios from "axios";

// const VideoUpload = ({ type }) => {
//   const [video, setVideo] = useState(null);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [category, setCategory] = useState("");
//   const [price, setPrice] = useState("");
//   const [premium, setPremium] = useState(false);

//   const handleFileChange = (e) => setVideo(e.target.files[0]);

//   const handleUpload = async () => {
//     if (!video) return alert("Please select a video");

//     const formData = new FormData();
//     formData.append("video", video);
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("category", category);
//     formData.append("price", price);
//     formData.append("premium", premium);

//     try {
//       const endpoint =
//         type === "trending"
//           ? "http://localhost:4000/api/trending-videos/upload"
//           : "http://localhost:4000/api/liked-videos/upload";

//       await axios.post(endpoint, formData);
//       alert("Video uploaded successfully!");
//     } catch (error) {
//       console.error("Upload Error:", error);
//       alert("Failed to upload video");
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="card shadow-lg p-4">
//         <h2 className="text-center mb-4">Upload {type === "trending" ? "Trending" : "Liked"} Video</h2>
//         <div className="mb-3">
//           <label className="form-label fw-bold">Select Video</label>
//           <input type="file" className="form-control" onChange={handleFileChange} accept="video/*" />
//         </div>
//         <div className="mb-3">
//           <label className="form-label fw-bold">Title</label>
//           <input type="text" className="form-control" placeholder="Enter video title" onChange={(e) => setTitle(e.target.value)} />
//         </div>
//         <div className="mb-3">
//           <label className="form-label fw-bold">Description</label>
//           <textarea className="form-control" rows="3" placeholder="Enter video description" onChange={(e) => setDescription(e.target.value)}></textarea>
//         </div>
//         <div className="mb-3">
//           <label className="form-label fw-bold">Category</label>
//           <input type="text" className="form-control" placeholder="Enter category" onChange={(e) => setCategory(e.target.value)} />
//         </div>
//         <div className="mb-3">
//           <label className="form-label fw-bold">Price</label>
//           <input type="text" className="form-control" placeholder="Enter price (optional)" onChange={(e) => setPrice(e.target.value)} />
//         </div>
//         <div className="form-check mb-3">
//           <input type="checkbox" className="form-check-input" checked={premium} onChange={(e) => setPremium(e.target.checked)} />
//           <label className="form-check-label">Premium Video</label>
//         </div>
//         <button className="btn btn-primary w-100 fw-bold" onClick={handleUpload}>Upload Video</button>
//       </div>
//     </div>
//   );
// };

// export default VideoUpload;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Form } from "react-bootstrap";

const VideoUpload = ({ type }) => {
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [premium, setPremium] = useState(false);
  const [videos, setVideos] = useState([]);
  const [editVideo, setEditVideo] = useState(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleFileChange = (e) => setVideo(e.target.files[0]);

  const handleUpload = async () => {
    if (!video) return alert("Please select a video");

    const formData = new FormData();
    formData.append("video", video);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("premium", premium);

    try {
      const endpoint =
        type === "trending"
          ? "http://localhost:4000/api/trending-videos/upload"
          : "http://localhost:4000/api/liked-videos/upload";

      await axios.post(endpoint, formData);
      alert("Video uploaded successfully!");
      fetchVideos();
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Failed to upload video");
    }
  };

  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        type === "trending"
          ? "http://localhost:4000/api/trending-videos"
          : "http://localhost:4000/api/liked-videos"
      );
      setVideos(response.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this video?");
    if (!confirmDelete) return;

    try {
      const endpoint =
        type === "trending"
          ? `http://localhost:4000/api/trending-videos/${id}`
          : `http://localhost:4000/api/liked-videos/${id}`;

      await axios.delete(endpoint);
      alert("Video deleted successfully!");
      fetchVideos();
    } catch (error) {
      console.error("Delete Error:", error);
      alert("Failed to delete video");
    }
  };

  const handleEdit = (video) => {
    setEditVideo(video);
    setTitle(video.title);
    setDescription(video.description);
    setCategory(video.category);
    setPrice(video.price);
    setPremium(video.premium);
  };

  const handleUpdate = async () => {
    if (!editVideo) return;

    try {
      const endpoint =
        type === "trending"
          ? `http://localhost:4000/api/trending-videos/${editVideo._id}`
          : `http://localhost:4000/api/liked-videos/${editVideo._id}`;

      await axios.put(endpoint, { title, description, category, price, premium });
      alert("Video updated successfully!");
      setEditVideo(null);
      fetchVideos();
    } catch (error) {
      console.error("Update Error:", error);
      alert("Failed to update video");
    }
  };

  return (
    <div className="container mt-5">
      {/* Upload Form */}
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">
          Upload {type === "trending" ? "Trending" : "Liked"} Video
        </h2>
        <div className="mb-3">
          <label className="form-label fw-bold">Select Video</label>
          <input type="file" className="form-control" onChange={handleFileChange} accept="video/*" />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Title</label>
          <input type="text" className="form-control" placeholder="Enter video title" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Description</label>
          <textarea className="form-control" rows="3" placeholder="Enter video description" onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Category</label>
          <input type="text" className="form-control" placeholder="Enter category" onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label fw-bold">Price</label>
          <input type="text" className="form-control" placeholder="Enter price (optional)" onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="form-check mb-3">
          <input type="checkbox" className="form-check-input" checked={premium} onChange={(e) => setPremium(e.target.checked)} />
          <label className="form-check-label">Premium Video</label>
        </div>
        <button className="btn btn-primary w-100 fw-bold" onClick={handleUpload}>Upload Video</button>
      </div>

      {/* Video List */}
      <h3 className="text-center mt-5">Uploaded Videos</h3>
      <div className="row mt-3">
        {videos.length === 0 ? (
          <p className="text-center">No videos uploaded yet.</p>
        ) : (
          videos.map((video) => (
            <div key={video._id} className="col-md-4 mb-4">
              <div className="card shadow">
                <video className="card-img-top" controls>
                  <source src={video.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="card-body">
                  <h5 className="card-title">{video.title}</h5>
                  <p className="card-text">{video.description}</p>
                  <span className="badge bg-secondary">{video.category}</span>
                  <span className="badge bg-info ms-2">${video.price}</span>
                  {video.premium && <span className="badge bg-warning ms-2">Premium</span>}
                  <div className="d-flex justify-content-between mt-3">
                    <button className="btn btn-warning btn-sm" onClick={() => handleEdit(video)}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(video._id)}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Edit Modal */}
      {editVideo && (
        <Modal show={true} onHide={() => setEditVideo(null)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Video</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setEditVideo(null)}>Close</Button>
            <Button variant="primary" onClick={handleUpdate}>Update</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default VideoUpload;
