import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

export const dummyData1 = [
  {
    title: "Mastering React: Live Q&A Session",
    body: "Join us for a live Q&A session with React experts. Get your questions answered in real time!",
    publish_date: "2025-02-25T14:00:00Z",
    video_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image_url: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
  },
  {
    title: "Building Scalable Web Apps with Node.js",
    body: "Learn how to build high-performance and scalable web applications using Node.js.",
    publish_date: "2025-03-05T16:30:00Z",
    video_url: "https://www.youtube.com/watch?v=Oe421EPjeBE",
    image_url: "https://img.youtube.com/vi/Oe421EPjeBE/maxresdefault.jpg",
  },
  {
    title: "State Management in React: Redux vs Context API",
    body: "A deep dive into managing state in React applications with Redux and Context API.",
    publish_date: "2025-03-12T18:00:00Z",
    video_url: "https://www.youtube.com/watch?v=9KJxaFHotqI",
    image_url: "https://img.youtube.com/vi/9KJxaFHotqI/maxresdefault.jpg",
  },
];

export const HomeWebinar = () => {
    // const [data,setData]=useState([])

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        const response =await axios.get("http://localhost:4000/posts")
        console.log(response,'res')
    }
  return (
    <div className="text-center p-4">
      {/* Heading */}
      <h2 className="mb-4 fw-bold">Webinar</h2>

      {/* Webinar Grid Layout */}
      <div className="container">
        <div className="row g-4">
          {dummyData1.map((k, index) => (
            <div key={index} className="col-md-4">
              <Card className="shadow-lg border-0">
                <Card.Img variant="top" src={k.image_url} style={{ height: "180px", objectFit: "cover" }} />
                <Card.Body>
                  <Card.Title className="fw-bold">{k.title}</Card.Title>
                  <Card.Text className="text-muted">{k.body}</Card.Text>
                  <Card.Text className="text-secondary small">
                    {new Date(k.publish_date).toDateString()}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
      <Link to={"/webinar"}>
        <button
          className="btn btn-primary mt-4 px-4 py-2 rounded-pill fw-bold shadow"
          style={{ transition: "0.3s ease-in-out" }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          View More
        </button>
      </Link>
    </div>
  );
};
