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
      "https://img.freepik.com/premium-photo/remote-classes-concept-with-webinar-sign-white-graphic-laptop-screen-with-user-icons-dark-green-background-with-social-media-icons-around-space-your-logo-text-3d-rendering-mockup_670147-17064.jpg?semt=ais_hybrid",
    heading: "Our  services",
    text: "Dive into a world of knowledge with our rich articles, featuring captivating text, stunning images, and embedded media that bring insights to life!",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    heading: "modern ",

    text: "Experience our dynamic video content, expertly hosted with adaptive streaming for flawless viewing on any device—watch anytime, anywhere!",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/remote-classes-concept-with-webinar-sign-white-graphic-laptop-screen-with-user-icons-dark-green-background-with-social-media-icons-around-space-your-logo-text-3d-rendering-mockup_670147-17064.jpg?semt=ais_hybrid",
    text: "Unlock your potential with our interactive guides! Step-by-step tutorials designed to engage and empower you with hands-on learning.",
    heading: "modern ",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    heading: "Transform ",
    text: "with cutting-edge technology and tailored IT services.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    heading: "modern ",

    text: "Secure, scalable, and cost-effective cloud solutions .",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    text: "Keep your data safe with advanced security measures and proactive monitoring.",
    heading: "modern ",
  },
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
          slidesPerView={5}
          threshold={8}
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
