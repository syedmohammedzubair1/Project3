import React, { useEffect } from "react";
import Navbar from './components/Navbar';
import Footer from "./components/Footer/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Carousel2 from "./components/Carousel2";

import Routing from "./components/Routing";
import Carousel from "./components/Carousel";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
{/*   
      <header>
        <Navbar />
      </header>

      <Routing/>
    
      <Footer /> */}
      <Carousel2/>
    </div>
  );
};
  
export default App;
