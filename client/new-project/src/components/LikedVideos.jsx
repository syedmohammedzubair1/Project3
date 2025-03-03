// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const likedVideos = [
//     {
//       id:1,
//       title: "Behind the Scenes of Marvel Movies",
//       description: "Exclusive insights into Marvel’s productions.",
//       category: "Entertainment",
//       videoUrl: "https://www.youtube.com/embed/hA6hldpSTF8",
//       likes: 1500,
//       price:"$32",
//       isPremium: true
//     },
//     {
//       id:2,
//       title: "Latest AI Innovations",
//       description: "Explore recent advancements in AI technology.",
//       category: "Technology",
//       videoUrl: "https://www.youtube.com/embed/2ePf9rue1Ao",
//       likes: 1200,
//       price:"$29",
//       isPremium: true
//     },
//     {
//       id:3,
//       title: "Complete JavaScript Course",
//       description: "Learn JavaScript from scratch.",
//       category: "Courses",
//       videoUrl: "https://www.youtube.com/embed/Qqx_wzMmFeA",
//       likes: 980,
//       price:"$27",
//       isPremium: true
//     },
//     {
//       id:4,
//       title: "Python for Beginners",
//       description: "A complete Python programming tutorial.",
//       category: "Courses",
//       videoUrl: "https://www.youtube.com/embed/_uQrJ0TkZlc",
//       likes: 900,
//       price:"$25",
//       isPremium: true
//     },
//     {
//       id:5,
//       title: "Machine Learning Explained",
//       description: "An in-depth guide to machine learning concepts.",
//       category: "Courses",
//       videoUrl: "https://www.youtube.com/embed/GwIo3gDZCVQ",
//       likes: 870,
//       price:"$23",
//       isPremium: true
//     },
//     {
//       id:6,
//       title: "Healthy Eating Habits",
//       description: "Learn about good habits for a healthy lifestyle.",
//       category: "Health",
//       videoUrl: "https://www.youtube.com/watch?v=lZp6Ntomljc",
//       likes: 850,
//       price:"$21",
//       isPremium: true
//     },
//     {
//       id:7,
//       title: "Quantum Computing Explained",
//       description: "An introduction to quantum computing.",
//       category: "Technology",
//       videoUrl: "https://www.youtube.com/embed/QuR969uMICM",
//       likes: 820,
//       price:"$19",
//       isPremium: true
//     },
//     {
//       id:8,
//       title: "Artificial Intelligence in 2025",
//       description: "How AI is shaping the future of industries.",
//       category: "Technology",
//       videoUrl: "https://www.youtube.com/embed/2ePf9rue1Ao",
//       likes: 800,
//       price:"$16",
//       isPremium: true
//     },
//     {
//       id:9,
//       title: "Stand-up Comedy Special",
//       description: "Enjoy the best stand-up comedy moments.",
//       category: "Entertainment",
//       videoUrl: "https://www.youtube.com/embed/5m6lymJy57E",
//       likes: 780,
//       price:"$12",
//       isPremium: true
//     },
//     {
//       id:10,
//       title: "New Delhi Railway Station Stampede: 18 Dead",
//       description: "A tragic stampede at New Delhi railway station.",
//       category: "News",
//       videoUrl: "https://en.wikipedia.org/wiki/2025_New_Delhi_railway_station_stampede",
//       likes: 750,
//       price:"$7",
//       isPremium: true
//     }
//   ];

// const ITEMS_PER_PAGE = 3;

// const LikedVideos = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const navigate = useNavigate();
//   const totalPages = Math.ceil(likedVideos.length / ITEMS_PER_PAGE);
//   const currentVideos = likedVideos.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center mb-4">Most Liked Videos</h2>
//       <div className="row">
//         {currentVideos.map((video) => (
//           <div key={video.id} className="col-md-4 mb-4">
//             <div
//               className="card shadow-lg d-flex flex-column"
//               style={{ cursor: "pointer", border: "3px solid #ccc", transition: "transform 0.3s" }}
//               onClick={() => navigate(`/liked-videos/${video.id}`)}
//               onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
//               onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
//             >
//               <div className="card-body position-relative">
//                 <div className="embed-responsive embed-responsive-16by9">
//                   <iframe
//                     className="embed-responsive-item w-100"
//                     src={video.videoUrl}
//                     title={video.title}
//                     allowFullScreen
//                   ></iframe>
//                 </div>
//                 <h5 className="card-title mt-3">{video.title}</h5>
//                 <h6 className="text-muted">{video.category}</h6>
//                 <p className="card-text">{video.description}</p>
//                 <p className="text-danger">❤️ {video.likes} Likes</p>
                
//                 {/* Price and Premium Tag */}
//                 <div className="d-flex justify-content-between align-items-center mt-2">
//                   <span className="badge bg-success fs-6">{video.price}</span>
//                   {video.isPremium && <span className="badge bg-warning text-dark fs-6">Premium</span>}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="d-flex justify-content-center mt-3">
//         <button 
//           className="btn btn-secondary me-2" 
//           onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
//           disabled={currentPage === 1}
//         >
//           ←
//         </button>
//         <span className="align-self-center">Page {currentPage} of {totalPages}</span>
//         <button 
//           className="btn btn-secondary ms-2" 
//           onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
//           disabled={currentPage === totalPages}
//         >
//           →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LikedVideos;
// import React, { useEffect, useState } from "react";
// import { getLikedVideos } from "../api";
// import { useNavigate } from "react-router-dom";
// import { Pagination } from "react-bootstrap";

// const LikedVideos = () => {
//   const [videos, setVideos] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const videosPerPage = 3; // Only 3 videos per row
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const { data } = await getLikedVideos();
//         setVideos(data);
//       } catch (error) {
//         console.error("Error fetching liked videos:", error);
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
//     <div className="container mt-5"><br />
//       <h2 className="text-center mb-4 fw-bold text-danger">❤️ Liked Videos</h2>

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
//             className="btn btn-outline-danger me-3"
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
//               className={`btn mx-1 ${currentPage === number + 1 ? "btn-danger" : "btn-outline-danger"}`}
//               onClick={() => handlePageChange(number + 1)}
//             >
//               {number + 1}
//             </button>
//           ))}

//           <button
//             className="btn btn-outline-danger ms-3"
//             disabled={currentPage === totalPages}
//             onClick={() => handlePageChange(currentPage + 1)}
//           >
//             Next &raquo;
//           </button><br /><br /><br />
//         </div>
//       )}
//     </div>
//   );
// };

// export default LikedVideos;


import React, { useEffect, useState } from "react";
import { getLikedVideos } from "../api";
import { useNavigate } from "react-router-dom";

const LikedVideos = () => {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const videosPerPage = 3; // 3 videos per row
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data } = await getLikedVideos();
        console.log("Fetched Liked Videos:", data);
        setVideos(data);
      } catch (error) {
        console.error("Error fetching liked videos:", error);
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
      <h2 className="text-center mb-4 fw-bold text-danger">❤️ Liked Videos</h2>

      <div className="row g-4">
        {currentVideos.length === 0 ? (
          <p className="text-center text-muted">No liked videos available.</p>
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
                    height: "455px", // Fixed height for consistency
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
            className="btn btn-outline-danger me-3"
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
              className={`btn mx-1 ${currentPage === number + 1 ? "btn-danger" : "btn-outline-danger"}`}
              onClick={() => handlePageChange(number + 1)}
            >
              {number + 1}
            </button>
          ))}

          <button
            className="btn btn-outline-danger ms-3"
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

export default LikedVideos;
