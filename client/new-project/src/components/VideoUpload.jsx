import React, { useState } from "react";
import axios from "axios";

const VideoUpload = ({ type }) => {
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [premium, setPremium] = useState(false);

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
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Failed to upload video");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">Upload {type === "trending" ? "Trending" : "Liked"} Video</h2>
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
    </div>
  );
};

export default VideoUpload;
