// src/Carousel2.js
import React from 'react';
import './Carousel2.css';

const carousel2 = () => {
    return ( 
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="https://img.freepik.com/free-vector/blurred-sky-background_23-2147503959.jpg?ga=GA1.1.486447082.1726573236&semt=ais_hybrid" className="d-block w-100" alt="Blurred sky background" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="https://img.freepik.com/free-photo/sun-sunrise-illuminates-mountains-early-morning-mountains-mediterranean-coast-vacation-advertising-idea-background-splash-screen-with-free-space_166373-3129.jpg?ga=GA1.1.486447082.1726573236&semt=ais_hybrid" className="d-block w-100" alt="Sunrise illuminating mountains" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://img.freepik.com/premium-photo/dramatic-monsoon-cloud-formation-blue-sky_530563-438.jpg?ga=GA1.1.486447082.1726573236&semt=ais_hybrid" className="d-block w-100" alt="Dramatic monsoon cloud formation" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
}

export default carousel2;
