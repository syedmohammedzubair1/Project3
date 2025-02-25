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
import React, { useEffect, useState } from "react";
import { getLikedVideos } from "../api";
import { useNavigate } from "react-router-dom";

const LikedVideos = () => {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data } = await getLikedVideos();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching liked videos:", error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div className="container">
      <h2>Liked Videos</h2>
      <div className="row">
        {videos.map((video) => (
          <div key={video._id} className="col-md-4" onClick={() => navigate(`/video/${video._id}`)}>
            <video src={`http://localhost:5000${video.videoUrl}`} width="100%" controls />
            <h5>{video.title}</h5>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedVideos;

