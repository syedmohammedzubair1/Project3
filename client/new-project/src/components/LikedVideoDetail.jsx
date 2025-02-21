import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const likedVideos = [
    {
      id:1,
      title: "Behind the Scenes of Marvel Movies",
      description: "Exclusive insights into Marvel’s productions.",
      category: "Entertainment",
      videoUrl: "https://www.youtube.com/embed/hA6hldpSTF8",
      likes: 1500,
      price:"$32",
      isPremium: true
    },
    {
      id:2,
      title: "Latest AI Innovations",
      description: "Explore recent advancements in AI technology.",
      category: "Technology",
      videoUrl: "https://www.youtube.com/embed/2ePf9rue1Ao",
      likes: 1200,
      price:"$29",
      isPremium: true
    },
    {
      id:3,
      title: "Complete JavaScript Course",
      description: "Learn JavaScript from scratch.",
      category: "Courses",
      videoUrl: "https://www.youtube.com/embed/Qqx_wzMmFeA",
      likes: 980,
      price:"$27",
      isPremium: true
    },
    {
      id:4,
      title: "Python for Beginners",
      description: "A complete Python programming tutorial.",
      category: "Courses",
      videoUrl: "https://www.youtube.com/embed/_uQrJ0TkZlc",
      likes: 900,
      price:"$25",
      isPremium: true
    },
    {
      id:5,
      title: "Machine Learning Explained",
      description: "An in-depth guide to machine learning concepts.",
      category: "Courses",
      videoUrl: "https://www.youtube.com/embed/GwIo3gDZCVQ",
      likes: 870,
      price:"$23",
      isPremium: true
    },
    {
      id:6,
      title: "Healthy Eating Habits",
      description: "Learn about good habits for a healthy lifestyle.",
      category: "Health",
      videoUrl: "https://www.youtube.com/watch?v=lZp6Ntomljc",
      likes: 850,
      price:"$21",
      isPremium: true
    },
    {
      id:7,
      title: "Quantum Computing Explained",
      description: "An introduction to quantum computing.",
      category: "Technology",
      videoUrl: "https://www.youtube.com/embed/QuR969uMICM",
      likes: 820,
      price:"$19",
      isPremium: true
    },
    {
      id:8,
      title: "Artificial Intelligence in 2025",
      description: "How AI is shaping the future of industries.",
      category: "Technology",
      videoUrl: "https://www.youtube.com/embed/2ePf9rue1Ao",
      likes: 800,
      price:"$16",
      isPremium: true
    },
    {
      id:9,
      title: "Stand-up Comedy Special",
      description: "Enjoy the best stand-up comedy moments.",
      category: "Entertainment",
      videoUrl: "https://www.youtube.com/embed/5m6lymJy57E",
      likes: 780,
      price:"$12",
      isPremium: true
    },
    {
      id:10,
      title: "New Delhi Railway Station Stampede: 18 Dead",
      description: "A tragic stampede at New Delhi railway station.",
      category: "News",
      videoUrl: "https://en.wikipedia.org/wiki/2025_New_Delhi_railway_station_stampede",
      likes: 750,
      price:"$7",
      isPremium: true
    }
  ];


const LikedVideoDetail = () => {
  const { id } = useParams();
  const video = likedVideos.find((vid) => vid.id === parseInt(id));

   useEffect(() => {
          window.scrollTo(0, 0);
        }, [id]);

  if (!video) {
    return <h2 className="text-center mt-4">Video not found!</h2>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">{video.title}</h2>

      <div className="row shadow-lg p-4 rounded">
        {/* Left Side: Video */}
        <div className="col-md-6">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item w-100 rounded"
              src={video.videoUrl}
              title={video.title}
              allowFullScreen
              style={{ height: "300px" }}
            ></iframe>
          </div>
        </div>

        {/* Right Side: Details */}
        <div className="col-md-6 d-flex flex-column justify-content-center mt-4">
          <h5 className="card-title">{video.title}</h5>
          <h6 className="text-muted">{video.category}</h6>
          <p className="card-text">{video.description}</p>
          <p className="text-danger">❤️ {video.likes} Likes</p>

          {/* Price and Premium Tag */}
          <div className="d-flex justify-content-start align-items-center gap-3 mt-2">
            <span className="badge bg-success fs-5">{video.price}</span>
            {video.isPremium && <span className="badge bg-warning text-dark fs-5">Premium</span>}
          </div>

          {/* Action Buttons */}
          <div className="d-flex mt-4">
            <button className="btn btn-outline-primary w-50 me-2">Add to Cart</button>
            <button className="btn btn-success w-50">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikedVideoDetail;
