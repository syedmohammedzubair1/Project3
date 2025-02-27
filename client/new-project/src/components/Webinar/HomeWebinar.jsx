import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./HomeWebinar.css";

export const HomeWebinar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:4000/posts");

    setData(response.data.slice(0,3));
  };
  return (
    <div className="text-center p-4">
      <h2 className="mb-4 fw-bold">Webinar</h2>

      <div className="container">
        <div className="row g-4">
          {data.map((k, index) => (
            <div key={index} className="col-md-4">
              <Card className="shadow-lg border-0 card">
                <Card.Img
                  variant="top"
                  src={k.image_url}
                  style={{ height: "180px", objectFit: "cover" }}
                />
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

      <Link to={"/subscribe/webinar"}>
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
