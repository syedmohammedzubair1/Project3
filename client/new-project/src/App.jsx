import React, { useEffect } from "react";
import Navbar from './components/Navbar';
import Footer from "./components/Footer/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";

import Routing from "./components/Routing";
import SubscribePanel from "./components/SubscribePanel";
import LandingPage from "./components/LandingPage1";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
   {/* <div>
  
      <header>
        <Navbar />
      </header>

      <SubscribePanel/>
      

      {/* <Routing/> 
    
      <Footer />
      
      
    </div> */}
    <section>
      <LandingPage />
    </section>
    </>
  );
};
  
export default App;
