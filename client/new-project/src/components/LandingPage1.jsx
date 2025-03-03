import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { articles } from "./articlesData";
import NicheFlare from "./NicheFlare";

const CustomPrevArrow = ({ onClick }) => <button className="slick-prev" onClick={onClick}>❮</button>;
const CustomNextArrow = ({ onClick }) => <button className="slick-next" onClick={onClick}>❯</button>;

const LandingPage = () => {
  const [filteredTags, setFilteredTags] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");

  const allTags = ["ALL", ...new Set(articles.map(article => article.tags))];

  const filteredArticles = articles.filter(article => 
    (filteredTags === "ALL" || article.tags === filteredTags) &&
    article.tags.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const likedArticles = [...articles]
    .filter(article => 
      article.tags.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => b.likes - a.likes);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div>
      <NicheFlare searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <div className="container text-center my-6" style={{ marginTop: '100px' }}>
        <h4>Filter by Tags</h4>
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`btn mx-2 ${filteredTags === tag ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setFilteredTags(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="container mt-5">
        <h2 className="text-start mb-4">Trending Articles</h2>
        <Slider {...sliderSettings}>
          {filteredArticles.map((article) => (
            <div key={article.id} className="d-flex justify-content-center px-2">
              <div className="card p-3 shadow-sm text-center article-card" style={{ width: '100%' }}>
                <img src={article.image} alt={article.title} className="img-fluid mb-3" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <h5 className="card-title">{article.title}</h5>
                <span className="badge bg-info">{article.tags}</span>
                <p className="mt-2 text-center " style={{ fontSize: "0.8rem" }}>{article.description}</p>
                <span className="text-muted">Likes: {article.likes}</span>
                <div className="d-flex justify-content-between">
                  <div className="mx-3">
                    <button className="btn btn-primary mt-2 buy-now-btn">BuyNow</button>
                  </div>
                  <div className="mx-3">
                    <button className="btn btn-success mt-2 add-now-btn ">AddToCart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="container mt-5">
        <h2 className="text-start mb-4">Most Liked Articles</h2>
        <Slider {...sliderSettings}>
          {likedArticles.slice(0, 5).map((article) => (
            <div key={article.id} className="d-flex justify-content-center px-2">
              <div className="card p-3 shadow-sm text-center article-card" style={{ width: '100%' }}>
                <img src={article.image} alt={article.title} className="img-fluid mb-3" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <h5 className="card-title">{article.title}</h5>
                <span className="badge bg-info">{article.tags}</span>
                <p className="mt-2 text-center" style={{ fontSize: "0.8rem" }}>{article.description}</p>
                <span className="text-muted">Likes: {article.likes}</span>
                <div className="d-flex justify-content-between">
                  <div className="mx-3">
                    <button className="btn btn-primary mt-2 buy-now-btn">BuyNow</button>
                  </div>
                  <div className="mx-3">
                    <button className="btn btn-success mt-2 add-now-btn">AddToCart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LandingPage;