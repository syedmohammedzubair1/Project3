import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Webinar.css";
import { SearchContext } from "./SearchContext" // ✅ Import the context

export const Webinar = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const { searchTerm } = useContext(SearchContext); // ✅ Use global search term

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterData();
  }, [searchTerm, data]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/posts");
      setData(response.data);
      setFilteredData(response.data); // ✅ Initially show all data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filterData = () => {
    if (!searchTerm) {
      setFilteredData(data); // ✅ Show all data if input is empty
      return;
    }

    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(filtered);
  };

  return (
    <div className="main-div">
      <div className="card-container">
        {filteredData.length > 0 ? (
          filteredData.map((k, index) => (
            <Card key={index} className="video-card">
              <Card.Img
                variant="top"
                src={k.image_url}
                alt="Thumbnail"
                className="card-img"
              />
              <Card.Body>
                <Card.Title className="card-title">{k.title}</Card.Title>
                <Card.Text className="card-body">{k.body}</Card.Text>
                <Card.Text className="card-date">
                  {new Date(k.publish_date).toDateString()}
                </Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>No videos found.</p>
        )}
      </div>
    </div>
  );
};
