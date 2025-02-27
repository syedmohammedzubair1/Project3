import React, { useEffect } from 'react';
import About from './Footer/About';
import TrendingVideos from './TrendingVideos';
import LikedVideos from './LikedVideos';
import LandingPage from './LandingPage';
import FAQ from './FAQ';
import { HomeWebinar } from './Webinar/HomeWebinar';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      
      <section>
        <LandingPage />
      </section>
      <div>
        <section>
          <HomeWebinar />
        </section>
        <section>
          <TrendingVideos />
        </section>
        <section>
          <LikedVideos />
        </section>

        <FAQ />
        <section className="my-5">
          <About />
        </section>
      </div>
    </div>
  );
};

export default Home;
