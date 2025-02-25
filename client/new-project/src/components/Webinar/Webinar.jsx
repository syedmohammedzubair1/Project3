import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Webinar.css";

export const Webinar = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isLatest, setIsLatest] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterData();
  }, [searchText, isLatest, data]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/posts");
      setData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const inputHandler = (e) => {
    setSearchText(e.target.value);
  };

  const latestHandler = () => {
    setIsLatest(true);
  };

  const resetHandler = () => {
    setIsLatest(false);
  };

  const filterData = () => {
    let filtered = [...data];

    if (isLatest) {
      const tenDaysAgo = new Date();
      tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);
      filtered = filtered.filter(
        (item) => new Date(item.publish_date) >= tenDaysAgo
      );
    }

    if (searchText) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    setFilteredData(filtered);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          onChange={inputHandler}
          className="search-input"
          placeholder="Search videos..."
          value={searchText}
        />
        <button onClick={latestHandler}>Latest</button>
        <button onClick={resetHandler}>Reset</button>
      </div>

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
    </>
  );
};
