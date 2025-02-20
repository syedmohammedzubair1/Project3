import React, { useEffect } from 'react';
import Carousel from './Carousel';
import About from './Footer/About';

const Home = () => {
  useEffect(() => {
    // Scroll to the top whenever the component is rendered or updated
    window.scrollTo(0, 0);
  }, []);

  return (
    <div> 
      <section className="my-5">
        <Carousel />
      </section>

      <section className="my-5">
        <About />
      </section>
    </div>
  );
};

export default Home;
