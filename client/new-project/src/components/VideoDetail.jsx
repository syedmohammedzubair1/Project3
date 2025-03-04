// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";

// const videos = [
//     // Technology Category
//     {
//       id: 1,
//       title: "Latest AI Innovations",
//       description: "Explore recent advancements in AI technology.",
//       category: "Technology",
//       videoUrl: "https://www.youtube.com/embed/2ePf9rue1Ao",
//       price: "$29.99",
//       ispremium: true,
//       learn: ["AI basics", "Latest AI trends", "Future of AI"]
//     },
//     {
//       id: 2,
//       title: "Quantum Computing Explained",
//       description: "An introduction to quantum computing.",
//       category: "Technology",
//       videoUrl: "https://www.youtube.com/embed/QuR969uMICM",
//       price: "$19.99",
//       ispremium: false,
//       learn: ["Quantum Mechanics", "Qubits & Superposition", "Quantum Gates"]
//     },
//     {
//       id: 3,
//       title: "The Future of AI: Innovations in 2025",
//       description: "Latest advancements in AI.",
//       category: "Technology",
//       videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
//       price: "$34.99",
//       ispremium: true,
//       learn: ["AI-driven automation", "Ethical AI", "Neural Networks"]
//     },
  
//     // Entertainment Category
//     {
//       id: 4,
//       title: "Mahanadhi – Vijay TV Promo",
//       description: "A promotional video for the Tamil television series.",
//       category: "Entertainment",
//       videoUrl: "https://www.youtube.com/embed/oYBIKPUvYZos",
//       price: "$9.99",
//       ispremium: false,
//       learn: ["Drama Insights", "Storyline & Characters", "Upcoming Episodes"]
//     },
//     {
//       id: 5,
//       title: "Behind the Scenes of Marvel Movies",
//       description: "Exclusive insights into Marvel’s productions.",
//       category: "Entertainment",
//       videoUrl: "https://www.youtube.com/embed/hA6hldpSTF8",
//       price: "$14.99",
//       ispremium: true,
//       learn: ["Marvel Cinematic Universe", "VFX & CGI", "Character Development"]
//     },
//     {
//       id: 6,
//       title: "Stand-up Comedy Special",
//       description: "Enjoy the best stand-up comedy moments.",
//       category: "Entertainment",
//       videoUrl: "https://www.youtube.com/embed/5m6lymJy57E",
//       price: "$7.99",
//       ispremium: false,
//       learn: ["Comedy Techniques", "Humor Timing", "Engaging the Audience"]
//     },
  
//     // Courses Category
//     {
//       id: 7,
//       title: "Complete JavaScript Course",
//       description: "Learn JavaScript from scratch.",
//       category: "Courses",
//       videoUrl: "https://www.youtube.com/embed/Qqx_wzMmFeA",
//       price: "$39.99",
//       ispremium: true,
//       learn: ["JS Basics", "DOM Manipulation", "Asynchronous Programming"]
//     },
//     {
//       id: 8,
//       title: "Python for Beginners",
//       description: "A complete Python programming tutorial.",
//       category: "Courses",
//       videoUrl: "https://www.youtube.com/embed/_uQrJ0TkZlc",
//       price: "$34.99",
//       ispremium: true,
//       learn: ["Python Basics", "OOP in Python", "Working with Libraries"]
//     },
//     {
//       id: 9,
//       title: "Machine Learning Explained",
//       description: "An in-depth guide to get machine learning concepts.",
//       category: "Courses",
//       videoUrl: "https://www.youtube.com/embed/GwIo3gDZCVQ",
//       price: "$49.99",
//       ispremium: true,
//       learn: ["Supervised vs. Unsupervised ML", "Neural Networks", "Model Optimization"]
//     },
  
//     // News Category
//     {
//       id: 10,
//       title: "Toronto Plane Crash: Delta Flight Overturns on Landing",
//       description: "Footage shows a Delta Air Lines jet flipping.",
//       category: "News",
//       videoUrl: "https://www.theguardian.com/world/2025/feb/18/toronto-plane-crash-video",
//       price: "Free",
//       ispremium: false,
//       learn: ["Aviation Safety", "Emergency Landings", "Crash Investigation"]
//     },
//     {
//       id: 11,
//       title: "New Delhi Railway Station Stampede: 18 Dead",
//       description: "A tragic stampede at New Delhi railway station.",
//       category: "News",
//       videoUrl: "https://en.wikipedia.org/wiki/2025_New_Delhi_railway_station_stampede",
//       price: "Free",
//       ispremium: false,
//       learn: ["Crowd Management", "Disaster Response", "Public Safety"]
//     },
//     {
//       id: 12,
//       title: "Measles Outbreak Worsens in Texas",
//       description: "Health officials report a significant rise in measles cases among children.",
//       category: "News",
//       videoUrl: "https://www.foxnews.com/health/measles-outbreak-continues-worsen-among-kids-us-state",
//       price: "Free",
//       ispremium: false,
//       learn: ["Measles Symptoms", "Vaccination Importance", "Outbreak Prevention"]
//     },
  
//     // Health Category
//     {
//       id: 13,
//       title: "Healthy Eating Habits For Kids",
//       description: "Learn about good habits and foods to avoid for a healthy lifestyle.",
//       category: "Health",
//       videoUrl: "https://www.youtube.com/watch?v=lZp6Ntomljc",
//       price: "$14.99",
//       ispremium: false,
//       learn: ["Balanced Diet", "Nutritional Needs", "Healthy Lifestyle"]
//     },
//     {
//       id: 14,
//       title: "10 Healthy Eating Habits for 2022",
//       description: "Discover ten habits to improve your diet and well-being.",
//       category: "Health",
//       videoUrl: "https://www.youtube.com/watch?v=KofJESkYGLE",
//       price: "$12.99",
//       ispremium: false,
//       learn: ["Hydration", "Portion Control", "Nutrient-Rich Foods"]
//     },
//     {
//       id: 15,
//       title: "Healthy Eating Habits: The 20 Minute Rule",
//       description: "Understand how taking time to eat can help with digestion and weight control.",
//       category: "Health",
//       videoUrl: "https://www.youtube.com/watch?v=Tp35JRidKKE",
//       price: "$9.99",
//       ispremium: false,
//       learn: ["Mindful Eating", "Slow Chewing", "Reducing Overeating"]
//     }
//   ];

  
//   const VideoDetail = () => {
//     const { id } = useParams();
//     const video = videos.find((video) => video.id === parseInt(id));

//     useEffect(() => {
//         window.scrollTo(0, 0);
//       }, [id]);
  
//     if (!video) {
//       return <h2 className="text-center mt-5">Video not found</h2>;
//     }
  
//     return (
//       <div className="container mt-5">
//         <div className="row g-4">
//           {/* Left Section - Description */}
//           <div className="col-md-6 mt-5"><br /><br /><br /><br /><br />
//             <h2 className="mb-3">{video.title}</h2>
//             <h4 className="fw-semibold">What You Will Learn</h4>
//             <ul className="list-group list-group-flush">
//               {video.learn.map((point, index) => (
//                 <li key={index} className="list-group-item">{point}</li>
//               ))}
//             </ul>
//           </div>
  
//           {/* Right Section - Video & Price */}
//           <div className="col-md-6 text-center mt-5"><br />
//             <div className="border rounded shadow p-3 bg-light">
//               <iframe
//                 className="w-100 rounded"
//                 height="350"
//                 src={video.videoUrl}
//                 title={video.title}
//                 allowFullScreen
//               ></iframe>
//               <div className="mt-3">
//                 <p className="fw-bold fs-5 mb-1">Price: {video.price}</p>
//                 {video.isPremium && (
//                   <span className="badge bg-warning text-dark mb-3">Premium Content</span>
//                 )}
//                 <div>
//                   <button className="btn btn-success me-2">Add to Cart</button>
//                   <button className="btn btn-primary">Buy Now</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   export default VideoDetail;
  


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const VideoDetail = () => {
//   const { id } = useParams();
//   const [video, setVideo] = useState(null);

//   useEffect(() => {
//     const fetchVideo = async () => {
//       try {
//         const { data } = await axios.get(`http://localhost:4000/api/trending-videos/${id}`);
//         setVideo(data);
//       } catch (error) {
//         console.error("Error fetching video:", error);
//       }
//     };
//     fetchVideo();
//   }, [id]);

//   if (!video) return<h2 className="mt-5">Loading...</h2>;

//   return (
//     <div className="container">
//       <h2>{video.title}</h2>
//       <video src={`http://localhost:4000${video.videoUrl}`} width="100%" controls />
//       <p>{video.description}</p>
//     </div>
//   );
// };

// export default VideoDetail;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Video ID:", id); // Debugging Step 1

    const fetchVideo = async () => {
      try {
        const { data } = await axios.get(`http://localhost:4000/api/trending-videos/${id}`);
        console.log("Fetched video:", data); // Debugging Step 2
        setVideo(data);
      } catch (error) {
        console.error("Error fetching video:", error);
      } finally {
        setLoading(false); // Ensure loading state updates
      }
    };

    fetchVideo();
  }, [id]);

  if (loading) return <h2 className="mt-5">Loading...</h2>;
  if (!video) return <h2 className="mt-5 text-danger">Video not found!</h2>;

  return (
    <div className="container">
      <h2 className="mt-3 text-primary">{video.title}</h2>
      <video width="100%" controls>
        <source src={`http://localhost:4000${video.videoUrl}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="mt-3">{video.description}</p>
    </div>
  );
};

export default VideoDetail;
