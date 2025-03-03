// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const LikedVideoDetail = () => {
//   const { id } = useParams();
//   const [video, setVideo] = useState(null);

//   useEffect(() => {
//     const fetchVideoDetail = async () => {
//       try {
//         const { data } = await axios.get(`http://localhost:4000/api/liked-videos/${id}`);

//         setVideo(data);
//       } catch (error) {
//         console.error("Error fetching video details:", error);
//       }
//     };
//     fetchVideoDetail();
//   }, [id]);

//   if (!video) return <h2 className="text-center mt-5">Loading...</h2>;

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center text-danger fw-bold">{video.title}</h2>
//       <div className="row justify-content-center">
//         <div className="col-md-8">
//           <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
//             <video className="card-img-top" src={`http://localhost:4000${video.videoUrl}`} controls />
//             <div className="card-body">
//               <h5 className="fw-bold">{video.title}</h5>
//               <p className="text-muted">{video.description}</p>
//               <p><strong>Category:</strong> {video.category}</p>
//               <p><strong>Price:</strong> {video.price ? `$${video.price}` : "Free"}</p>

//               <div className="d-flex justify-content-between mt-3">
//                 <button className="btn btn-warning fw-bold">🛒 Add to Cart</button>
//                 <button className="btn btn-success fw-bold">💳 Buy Now</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LikedVideoDetail;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const LikedVideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVideoDetail = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/api/liked-videos/${id}`);
        setVideo(data);
      } catch (err) {
        console.error("Error fetching video details:", err);
        setError("Failed to load video. It may have been removed.");
      } finally {
        setLoading(false);
      }
    };

    fetchVideoDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="danger" />
      </div>
    );
  }

  if (error) {
    return <h2 className="text-center text-danger mt-5">{error}</h2>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center text-danger fw-bold">{video.title}</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
            <video className="card-img-top" src={`${import.meta.env.VITE_API_URL}${video.videoUrl}`} controls />
            <div className="card-body">
              <h5 className="fw-bold">{video.title}</h5>
              <p className="text-muted">{video.description}</p>
              <p><strong>Category:</strong> {video.category || "Uncategorized"}</p>
              <p><strong>Price:</strong> {video.price ? `$${video.price}` : "Free"}</p>

              <div className="d-flex justify-content-between mt-3">
                <button className="btn btn-warning fw-bold">🛒 Add to Cart</button>
                <button className="btn btn-success fw-bold">💳 Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikedVideoDetail;
