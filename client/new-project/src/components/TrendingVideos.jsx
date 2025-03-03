// import React, { useEffect, useState } from "react";
// import { getTrendingVideos } from "../api";
// import { useNavigate } from "react-router-dom";
// import { Pagination } from "react-bootstrap";

// const TrendingVideos = () => {
//   const [videos, setVideos] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const videosPerPage = 3; // Only 3 videos per row
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const { data } = await getTrendingVideos();
//         setVideos(data);
//       } catch (error) {
//         console.error("Error fetching trending videos:", error);
//       }
//     };
//     fetchVideos();
//   }, []);

//   // Pagination Logic
//   const totalPages = Math.ceil(videos.length / videosPerPage);
//   const indexOfLastVideo = currentPage * videosPerPage;
//   const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
//   const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center mb-4 fw-bold text-primary">🔥 Trending Videos</h2>
      
//       <div className="row g-4">
//         {currentVideos.map((video) => (
//           <div key={video._id} className="col-md-4">
//             <div
//               className="card shadow-lg border-0 rounded-4 overflow-hidden"
//               onClick={() => navigate(`/video/${video._id}`)}
//               style={{ cursor: "pointer", transition: "transform 0.3s", minHeight: "400px" }}
//               onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
//               onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//             >
//               <video className="card-img-top" src={`http://localhost:4000${video.videoUrl}`} controls />
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title text-dark fw-bold">{video.title}</h5>
//                 <p className="card-text text-muted flex-grow-1">{video.description}</p>
//                 <p className="mb-1"><strong>Category:</strong> {video.category}</p>
//                 <div className="d-flex justify-content-between align-items-center">
//                   <span className="fw-bold text-success">💰 {video.price ? `$${video.price}` : "Free"}</span>
//                   {video.premium && <span className="badge bg-warning text-dark">⭐ Premium</span>}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       {totalPages > 1 && (
//         <div className="d-flex justify-content-center align-items-center mt-4">
//           <button
//             className="btn btn-outline-primary me-3"
//             disabled={currentPage === 1}
//             onClick={() => handlePageChange(currentPage - 1)}
//           >
//             &laquo; Previous
//           </button>

//           {[...Array(totalPages).keys()].slice(
//             Math.max(0, currentPage - 2),
//             Math.min(totalPages, currentPage + 1)
//           ).map((number) => (
//             <button
//               key={number + 1}
//               className={`btn mx-1 ${currentPage === number + 1 ? "btn-primary" : "btn-outline-primary"}`}
//               onClick={() => handlePageChange(number + 1)}
//             >
//               {number + 1}
//             </button>
//           ))}

//           <button
//             className="btn btn-outline-primary ms-3"
//             disabled={currentPage === totalPages}
//             onClick={() => handlePageChange(currentPage + 1)}
//           >
//             Next &raquo;
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TrendingVideos;
import React, { useEffect, useState } from "react";
import { getTrendingVideos } from "../api";
import { useNavigate } from "react-router-dom";

const TrendingVideos = () => {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const videosPerPage = 3; // 3 videos per row
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data } = await getTrendingVideos();
        console.log("Fetched Trending Videos:", data);
        setVideos(data);
      } catch (error) {
        console.error("Error fetching trending videos:", error);
      }
    };
    fetchVideos();
  }, []);

  // Pagination Logic
  const totalPages = Math.ceil(videos.length / videosPerPage);
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleToggleDescription = (id) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const truncateDescription = (description) => {
    const words = description.split(" ");
    return words.length > 20 ? words.slice(0, 20).join(" ") + "..." : description;
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 fw-bold text-primary">🔥 Trending Videos</h2>

      <div className="row g-4">
        {currentVideos.length === 0 ? (
          <p className="text-center text-muted">No trending videos available.</p>
        ) : (
          currentVideos.map((video) => {
            const isExpanded = expandedDescriptions[video._id];
            const descriptionPreview = truncateDescription(video.description);

            return (
              <div key={video._id} className="col-md-4">
                <div
                  className="card shadow-lg border-0 rounded-4 overflow-hidden"
                  style={{
                    cursor: "pointer",
                    transition: "transform 0.3s",
                    minHeight: "200px",
                    height: "475px", // Fixed height for consistency
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <video className="card-img-top" controls>
                    <source src={video.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-dark fw-bold">{video.title}</h5>
                    <p className={`card-text text-muted flex-grow-1 ${isExpanded ? "overflow-auto" : ""}`} style={{ maxHeight: isExpanded ? "auto" : "60px" }}>
                      {isExpanded ? video.description : descriptionPreview}
                      {video.description.split(" ").length > 20 && (
                        <span
                          className="text-primary ms-2 fw-bold"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleToggleDescription(video._id)}
                        >
                          {isExpanded ? "Show Less" : "Show More"}
                        </span>
                      )}
                    </p>
                    <p className="mb-1"><strong>Category:</strong> {video.category}</p>
                  
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="fw-bold text-success">💰 {video.price ? `$${video.price}` : "Free"}</span>
                    
                      {/* Premium Badge at Right End */}
                      {video.premium && (
                        <span className="badge bg-warning text-dark ms-auto" style={{ fontSize: "14px" }}>
                          ⭐ Premium
                        </span>
                      )}
                    </div>

                    {/* Buttons Inside the Card at the Bottom */}
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-secondary w-50 fw-bold">🛒 Add to Cart</button>
                      <button className="btn btn-success w-50 fw-bold ms-2">💳 Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center align-items-center mt-4">
          <button
            className="btn btn-outline-primary me-3"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            &laquo; Previous
          </button>

          {[...Array(totalPages).keys()].slice(
            Math.max(0, currentPage - 2),
            Math.min(totalPages, currentPage + 1)
          ).map((number) => (
            <button
              key={number + 1}
              className={`btn mx-1 ${currentPage === number + 1 ? "btn-primary" : "btn-outline-primary"}`}
              onClick={() => handlePageChange(number + 1)}
            >
              {number + 1}
            </button>
          ))}

          <button
            className="btn btn-outline-primary ms-3"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next &raquo;
          </button>
        </div>
      )}
    </div>
  );
};

export default TrendingVideos;


