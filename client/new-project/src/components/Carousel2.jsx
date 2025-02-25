import React from 'react';
import { Carousel } from 'react-responsive-carousel';
// requires a loader
import './ContentCarousel.css';

const ContentCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        <div className="carousel-slide">
          <img src="https://media.istockphoto.com/id/813136942/photo/selective-focus-of-stacking-magazine-place-on-table-in-living-room.jpg?s=612x612&w=0&k=20&c=6nRlgDo9ecsb1vCPlN8G4cmq4vf8lW4YkSMhoU-jSqE=" alt="Article Content" />
          <div className="overlay">
            <h1>Articles</h1>
            <p>Rich text, images, embedded media.
            What television shows or series do you watch? Reflect on what are your personal reasons for watching these shows? What deeper needs are satisfied when you watch these shows? What information do you gain and what messages about life do you receive?
            </p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src="https://d2k0gkbwm0z9hv.cloudfront.net/wp-content/uploads/2012/10/return-of-video-to-elearning.jpg" alt="Video Content" />
          <div className="overlay">
            <h1>Videos</h1>
            <p>Hosted content with adaptive streaming.
            A YouTube video description in English can include a description of the video, information about the channel, and a call to action. 
Video description
Use keywords to help viewers find your video 
Put the most important keywords at the beginning of your description 
Use relevant hashtags to provide context to users 
Identify 1-2 main words that describe your video and feature them prominently in both your description and title 
Keep the text relevant to your video 
            </p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src="https://cdn.prod.website-files.com/65e7297194523c404b923b44/6633c40219582e0c54ae516c_interactive-guides.webp" alt="Interactive Guide" />
          <div className="overlay">
            <h1>Interactive Guides</h1>
            <p>Step-by-step tutorials with interactive elements.
            An interactive guide is a user or employee onboarding method that makes sure to actively include the user/employee in the process of learning on a website,
             app, or product. By getting users to actually interact with the website/app interface itself, the learning experience becomes more memorable and effective.
            </p>
          </div>
        </div>
        <div className="carousel-slide">
          <img src="https://cdn.prod.website-files.com/639e11e4bf9aaf17a3ee899c/65b1cfb9cdfa6b0df3700025_Demio%20what-is-a-live-webinar%20(1)%20(1).webp" alt="Webinars & Live Sessions" />
          <div className="overlay">
            <h1>Webinars & Live Sessions</h1>
            <p>Scheduled live video sessions with chat/Q&A.online seminar held live where a presenter delivers information to a virtual audience, 
              often including interactive elements like Q&A, polls, and chat, while a "live section" specifically indicates a real-time part of a webinarwhere the presenter is actively interacting with the audience, as opposed to pre-recorded segments; essentially, 
              the live section is the core interactive part of a webinar where direct engagement happens. </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default ContentCarousel;
