import React, { useEffect } from 'react';
import Carousel from './Carousel';
import About from './Footer/About';
import TrendingVideos from './TrendingVideos';
import LikedVideos from './LikedVideos';
import LandingPage from './LandingPage';
import Contact from './Contact';
import FAQ from './FAQ';

const Home = () => {
  useEffect(() => {
    // Scroll to the top whenever the component is rendered or updated
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section>
        <LandingPage/>
      </section>
    <div> 
      <section>
        <TrendingVideos/>
      </section>
      <section>
        <LikedVideos/>
      </section>
     
      <FAQ/>
      <section className="my-5">
        <About />
      </section>
      <Contact/>
    </div>
    </div>
  );
};

export default Home;
