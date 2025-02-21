// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Carousel.css";

const CarouselData = [
  {
    image:
      "https://img.freepik.com/free-vector/press-pause-concept-illustration_114360-5948.jpg?t=st=1740032142~exp=1740035742~hmac=6bd0aeea812d2e612a4cbb65e34390cebe0edf4d1faca7f8138b3826d9896d77&w=740",

    heading: "Articles",
    text: "Discover in-depth insights with rich text and visuals.Engaging content designed to inform and inspire.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    heading: "Videos",

    text: "Stream high-quality videos with adaptive playback.Learn anytime, anywhere with expert-led content",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/remote-classes-concept-with-webinar-sign-white-graphic-laptop-screen-with-user-icons-dark-green-background-with-social-media-icons-around-space-your-logo-text-3d-rendering-mockup_670147-17064.jpg?semt=ais_hybrid",
    heading: "Interactive Guides",

    text: "Master skills with step-by-step, hands-on tutorials.Engage with interactive elements for better learning.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    heading: "Webinars & Live Sessions",
    text: "Join live discussions and ask real-time questions.Connect with experts and enhance your knowledge",
  },
  // {
  //   image:
  //     "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  //   heading: "modern ",

  //   text: "Secure, scalable, and cost-effective cloud solutions .",
  // },
  // {
  //   image:
  //     "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  //   text: "Keep your data safe with advanced security measures and proactive monitoring.",
  //   heading: "modern ",
  // },
];
export default function Carousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-minicontainer">
        <Swiper
          modules={[EffectCoverflow, Pagination, Autoplay]}
          effect="coverflow"
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          // slidesPerView={5}
          slidesPerView={5}
          // threshold={8}
          threshold={5}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150,
            modifier: 2,
            slideShadows: false,
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="custom-swiper"
        >
          {CarouselData.map((item, index) => (
            <SwiperSlide key={index} className="carousel-slide">
              <div className="carousel-div">
                <div className={`carousel-colorvidiv color-${index + 1}`}>
                  <div className="imgdiv">
                    <img
                      src={item.image}
                      alt={`Slide ${index + 1}`}
                      className="carousel-image"
                    />
                  </div>
                  <div className="textdiv">
                    <h5 className="carousel-heading">{item.heading}</h5>
                    <p className="carousel-text">{item.text}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
