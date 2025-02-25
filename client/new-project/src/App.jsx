import React, { useEffect } from "react";
// import Navbar from './components/Navbar';
import Footer from "./components/Footer/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "bootstrap-icons/font/bootstrap-icons.css";
import { useLocation } from "react-router-dom";
import NicheFlare from "./components/NicheFlare";
import SubscribePanel from "./components/SubscribePanel";
import { CartProvider } from "./context/CartContext";
import { HomeWebinar } from "./components/Webinar/HomeWebinar";
import { Webinar } from "./components/Webinar/Webinar";
import { Purchase } from "./components/Purchase/Purchase";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Carousel2 from "./components/Carousel2";

import Routing from "./components/Routing";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar.jsx";
// import { Webinar } from './components/Webinar/Webinar';
// import { HomeWebinar } from './components/Webinar/HomeWebinar';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {

  const location = useLocation();
  const isSubscribePanel = location.pathname.startsWith("/subscribe");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      {/* <header>
        <Navbar />
      </header> */}
        {/* Show NicheFlare navbar for Subscribe Panel, otherwise show the default Navbar */}
      {isSubscribePanel ? <NicheFlare/> : <header><Navbar /></header>}

      <Routing />

      {/* Hide Footer on Subscribe Panel */}
      {!isSubscribePanel && <Footer />}
            {/* <h2>welcome</h2> */}
        </div>
    );

};

export default App;
