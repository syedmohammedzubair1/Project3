import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProgressBar } from "react-bootstrap";
import { FaTh, FaList } from "react-icons/fa";

const VideoUpload = ({ type }) => {
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [premium, setPremium] = useState(false);
  const [videos, setVideos] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [view, setView] = useState("grid");
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const API_BASE_URL = "http://localhost:4000/api";
  const UPLOAD_ENDPOINT = type === "trending" ? `${API_BASE_URL}/trending-videos/upload` : `${API_BASE_URL}/liked-videos/upload`;
  const GET_VIDEOS_ENDPOINT = type === "trending" ? `${API_BASE_URL}/trending-videos` : `${API_BASE_URL}/liked-videos`;
  const DELETE_VIDEO_ENDPOINT = (id) => type === "trending" ? `${API_BASE_URL}/trending-videos/${id}` : `${API_BASE_URL}/liked-videos/${id}`;

  useEffect(() => {
    fetchVideos();
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("video/")) {
      setVideo(selectedFile);
    } else {
      alert("Please select a valid video file!");
      setVideo(null);
    }
  };

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
      await axios.post(UPLOAD_ENDPOINT, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentCompleted);
        },
      });

      alert("Video uploaded successfully!");
      fetchVideos();
      setUploadProgress(0);
      setTitle("");
      setDescription("");
      setCategory("");
      setPrice("");
      setPremium(false);
      setVideo(null);
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Failed to upload video");
    }
  };

  const fetchVideos = async () => {
    try {
      const { data } = await axios.get(GET_VIDEOS_ENDPOINT);
      setVideos(data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this video?")) return;

    try {
      await axios.delete(DELETE_VIDEO_ENDPOINT(id));
      alert("Video deleted successfully!");
      fetchVideos();
    } catch (error) {
      console.error("Delete Error:", error);
      alert("Failed to delete video");
    }
  };

  const handleToggleDescription = (id) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="container mt-5"><br /><br />
      <h2 className="text-center mb-4 text-primary fw-bold">
        Upload {type === "trending" ? "Trending" : "Liked"} Video
      </h2>

      {/* Upload Section */}
      <div className="card shadow-lg p-4 border-0">
        <div className="row">
          <div className="col-md-6">
            <label className="form-label fw-bold">Select Video</label>
            <input type="file" className="form-control" onChange={handleFileChange} accept="video/*" />
            <div className="mt-2 text-muted">{video ? `Selected: ${video.name}` : "No file chosen"}</div>
          </div>
          <div className="col-md-6">
            <label className="form-label fw-bold">Title</label>
            <input type="text" className="form-control" placeholder="Enter video title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <label className="form-label fw-bold">Category</label>
            <input type="text" className="form-control" placeholder="Enter category" value={category} onChange={(e) => setCategory(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label className="form-label fw-bold">Price</label>
            <input type="text" className="form-control" placeholder="Enter price (optional)" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
        </div>

        <div className="mt-3">
          <label className="form-label fw-bold">Description</label>
          <textarea className="form-control" rows="3" placeholder="Enter video description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>

        <div className="form-check mt-3">
          <input type="checkbox" className="form-check-input" checked={premium} onChange={(e) => setPremium(e.target.checked)} />
          <label className="form-check-label fw-bold">Premium Video</label>
        </div>

        {uploadProgress > 0 && <ProgressBar now={uploadProgress} label={`${uploadProgress}%`} className="mt-3" />}

        <button className="btn btn-primary w-100 fw-bold mt-4" onClick={handleUpload}>
          Upload Video
        </button>
      </div>

      {/* Video List */}
      <div className="d-flex justify-content-end mt-5">
        <FaTh className={`mx-2 ${view === "grid" ? "text-primary" : "text-secondary"}`} size={24} onClick={() => setView("grid")} />
        <FaList className={`mx-2 ${view === "list" ? "text-primary" : "text-secondary"}`} size={24} onClick={() => setView("list")} />
      </div>

      <h3 className="text-center mt-3 text-secondary fw-bold">Uploaded Videos - {videos.length}</h3>

      {view === "grid" ? (
        <div className="row mt-3">
          {videos.length === 0 ? (
            <p className="text-center text-muted">No videos uploaded yet.</p>
          ) : (
            videos.map((video) => (
              <div key={video._id} className="col-md-4 mb-4">
                <div className="card shadow-lg border-0" style={{ height: "420px" }}>
                  <video className="card-img-top rounded" style={{ height: "200px" }} controls>
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{video.title}</h5>
                    <div className="overflow-auto" style={{ maxHeight: "90px" }}>
                      {video.description}
                    </div>

                    <div className="mt-auto d-flex justify-content-between align-items-center">
                      <span className="badge bg-primary">{video.category}</span>
                      {video.premium && <span className="badge bg-warning text-dark">⭐ Premium</span>}
                      <span className="badge bg-info">{video.price ? `$${video.price}` : "Free"}</span>
                    </div>

                    <button className="btn btn-outline-danger btn-sm fw-bold w-90 mt-3" onClick={() => handleDelete(video._id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="list-group mt-3">
          {videos.length === 0 ? (
            <p className="text-center text-muted">No videos uploaded yet.</p>
          ) : (
            videos.map((video) => {
              const isExpanded = expandedDescriptions[video._id];
              const descriptionPreview = video.description.split(" ").slice(0, 10).join(" ");

              return (
                <div key={video._id} className="list-group-item list-group-item-action d-flex align-items-center">
                  <video style={{ height: "100px" }} controls>
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <div className="ms-3 flex-grow-1">
                    <h5 className="fw-bold">{video.title}</h5>
                    <p className="mb-1">
                      {isExpanded ? video.description : descriptionPreview}
                      {video.description.split(" ").length > 10 && (
                        <span
                          className="text-primary ms-2 fw-bold"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleToggleDescription(video._id)}
                        >
                          {isExpanded ? "Show Less" : "Show More"}
                        </span>
                      )}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-primary me-3">{video.category}</span>
                      {video.premium && <span className="badge bg-warning text-dark me-3">⭐ Premium</span>}
                      <span className="badge bg-info me-2">{video.price ? `$${video.price}` : "Free"}</span>
                      <button className="btn btn-outline-danger btn-sm fw-bold ms-auto" onClick={() => handleDelete(video._id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default VideoUpload;
