// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const videos = [
//   // Technology Category
//   {
//     id: 1,
//     title: "Latest AI Innovations",
//     description: "Explore recent advancements in AI technology.",
//     category: "Technology",
//     videoUrl: "https://www.youtube.com/embed/2ePf9rue1Ao",
//     price: "$29.99",
//     premium: true,
//     learnPoints: ["AI basics", "Latest AI trends", "Future of AI"]
//   },
//   {
//     id: 2,
//     title: "Quantum Computing Explained",
//     description: "An introduction to quantum computing.",
//     category: "Technology",
//     videoUrl: "https://www.youtube.com/embed/QuR969uMICM",
//     price: "$19.99",
//     premium: false,
//     learnPoints: ["Quantum Mechanics", "Qubits & Superposition", "Quantum Gates"]
//   },
//   {
//     id: 3,
//     title: "The Future of AI: Innovations in 2025",
//     description: "Latest advancements in AI.",
//     category: "Technology",
//     videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//     price: "$34.99",
//     premium: true,
//     learnPoints: ["AI-driven automation", "Ethical AI", "Neural Networks"]
//   },

//   // Entertainment Category
//   {
//     id: 4,
//     title: "Mahanadhi – Vijay TV Promo",
//     description: "A promotional video for the Tamil television series.",
//     category: "Entertainment",
//     videoUrl: "https://www.youtube.com/embed/oYBIKPUvYZos",
//     price: "$9.99",
//     premium: false,
//     learnPoints: ["Drama Insights", "Storyline & Characters", "Upcoming Episodes"]
//   },
//   {
//     id: 5,
//     title: "Behind the Scenes of Marvel Movies",
//     description: "Exclusive insights into Marvel’s productions.",
//     category: "Entertainment",
//     videoUrl: "https://www.youtube.com/embed/hA6hldpSTF8",
//     price: "$14.99",
//     premium: true,
//     learnPoints: ["Marvel Cinematic Universe", "VFX & CGI", "Character Development"]
//   },
//   {
//     id: 6,
//     title: "Stand-up Comedy Special",
//     description: "Enjoy the best stand-up comedy moments.",
//     category: "Entertainment",
//     videoUrl: "https://www.youtube.com/embed/5m6lymJy57E",
//     price: "$7.99",
//     premium: false,
//     learnPoints: ["Comedy Techniques", "Humor Timing", "Engaging the Audience"]
//   },

//   // Courses Category
//   {
//     id: 7,
//     title: "Complete JavaScript Course",
//     description: "Learn JavaScript from scratch.",
//     category: "Courses",
//     videoUrl: "https://www.youtube.com/embed/Qqx_wzMmFeA",
//     price: "$39.99",
//     premium: true,
//     learnPoints: ["JS Basics", "DOM Manipulation", "Asynchronous Programming"]
//   },
//   {
//     id: 8,
//     title: "Python for Beginners",
//     description: "A complete Python programming tutorial.",
//     category: "Courses",
//     videoUrl: "https://www.youtube.com/embed/_uQrJ0TkZlc",
//     price: "$34.99",
//     premium: true,
//     learnPoints: ["Python Basics", "OOP in Python", "Working with Libraries"]
//   },
//   {
//     id: 9,
//     title: "Machine Learning Explained",
//     description: "An in-depth guide to get machine learning concepts.",
//     category: "Courses",
//     videoUrl: "https://www.youtube.com/embed/GwIo3gDZCVQ",
//     price: "$49.99",
//     premium: true,
//     learnPoints: ["Supervised vs. Unsupervised ML", "Neural Networks", "Model Optimization"]
//   },

//   // News Category
//   {
//     id: 10,
//     title: "Toronto Plane Crash: Delta Flight Overturns on Landing",
//     description: "Footage shows a Delta Air Lines jet flipping.",
//     category: "News",
//     videoUrl: "https://www.theguardian.com/world/2025/feb/18/toronto-plane-crash-video",
//     price: "Free",
//     premium: false,
//     learnPoints: ["Aviation Safety", "Emergency Landings", "Crash Investigation"]
//   },
//   {
//     id: 11,
//     title: "New Delhi Railway Station Stampede: 18 Dead",
//     description: "A tragic stampede at New Delhi railway station.",
//     category: "News",
//     videoUrl: "https://en.wikipedia.org/wiki/2025_New_Delhi_railway_station_stampede",
//     price: "Free",
//     premium: false,
//     learnPoints: ["Crowd Management", "Disaster Response", "Public Safety"]
//   },
//   {
//     id: 12,
//     title: "Measles Outbreak Worsens in Texas",
//     description: "Health officials report a significant rise in measles cases among children.",
//     category: "News",
//     videoUrl: "https://www.foxnews.com/health/measles-outbreak-continues-worsen-among-kids-us-state",
//     price: "Free",
//     premium: false,
//     learnPoints: ["Measles Symptoms", "Vaccination Importance", "Outbreak Prevention"]
//   },

//   // Health Category
//   {
//     id: 13,
//     title: "Healthy Eating Habits For Kids",
//     description: "Learn about good habits and foods to avoid for a healthy lifestyle.",
//     category: "Health",
//     videoUrl: "https://www.youtube.com/watch?v=lZp6Ntomljc",
//     price: "$14.99",
//     premium: false,
//     learnPoints: ["Balanced Diet", "Nutritional Needs", "Healthy Lifestyle"]
//   },
//   {
//     id: 14,
//     title: "10 Healthy Eating Habits for 2022",
//     description: "Discover ten habits to improve your diet and well-being.",
//     category: "Health",
//     videoUrl: "https://www.youtube.com/watch?v=KofJESkYGLE",
//     price: "$12.99",
//     premium: false,
//     learnPoints: ["Hydration", "Portion Control", "Nutrient-Rich Foods"]
//   },
//   {
//     id: 15,
//     title: "Healthy Eating Habits: The 20 Minute Rule",
//     description: "Understand how taking time to eat can help with digestion and weight control.",
//     category: "Health",
//     videoUrl: "https://www.youtube.com/watch?v=Tp35JRidKKE",
//     price: "$9.99",
//     premium: false,
//     learnPoints: ["Mindful Eating", "Slow Chewing", "Reducing Overeating"]
//   }
// ];

// const categories = ["All", "Technology", "Entertainment", "Courses", "News", "Health"];
// const ITEMS_PER_PAGE = 3;

// const VideosCard = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [currentPage, setCurrentPage] = useState(1);

//   const filteredVideos = selectedCategory === "All"
//     ? videos
//     : videos.filter(video => video.category === selectedCategory);

//   const totalPages = Math.ceil(filteredVideos.length / ITEMS_PER_PAGE);
//   const currentVideos = filteredVideos.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center mb-4">Trending Videos</h2>
//       <div className="mb-4">
//         <label className="form-label">Select Category:</label>
//         <select className="form-select" onChange={(e) => { setSelectedCategory(e.target.value); setCurrentPage(1); }} value={selectedCategory}>
//           {categories.map((category, index) => (
//             <option key={index} value={category}>{category}</option>
//           ))}
//         </select>
//       </div>
//       <div className="row">
//         {currentVideos.map((video) => (
//           <div key={video.id} className="col-md-4 mb-4">
//             <Link to={`/video/${video.id}`} style={{ textDecoration: "none", color: "inherit" }}>
//               <div className="card shadow-lg" style={{ height: '100%', border: '3px solid #ccc', transform: 'scale(1)', transition: 'transform 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}>
//                 <div className="card-body d-flex flex-column">
//                   <div className="embed-responsive embed-responsive-16by9" style={{ overflow: 'hidden' }}>
//                     <iframe
//                       className="embed-responsive-item w-100"
//                       src={video.videoUrl}
//                       title={video.title}
//                       style={{ transform: 'scale(1)', transition: 'transform 0.3s' }}
//                       allowFullScreen
//                     ></iframe>
//                   </div>
//                   <h5 className="card-title mt-3">{video.title}</h5>
//                   <h6 className="text-muted">{video.category}</h6>
//                   <p className="card-text">{video.description}</p>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <p className="fw-bold mb-2">Price: {video.price}</p>
//                     {video.premium && <span className="badge bg-warning text-dark">Premium</span>}
//                   </div>
//                   <button className="btn btn-primary mt-auto">View Details</button>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//       <div className="d-flex justify-content-center mt-3">
//         <button
//           className="btn btn-secondary me-2"
//           onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}>
//           ←
//         </button>
//         <span className="align-self-center">Page {currentPage} of {totalPages}</span>
//         <button
//           className="btn btn-secondary ms-2"
//           onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//           disabled={currentPage === totalPages}>
//           →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default VideosCard;

import React, { useEffect, useState } from "react";
import { getTrendingVideos } from "../api";
import { useNavigate } from "react-router-dom";

const TrendingVideos = () => {
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const { data } = await getTrendingVideos();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching trending videos:", error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div className="container">
      <h2>Trending Videos</h2>
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

export default TrendingVideos;
