<<<<<<< HEAD
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Routing from "./components/Routing";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar";
import { InputData } from "./components/Webinar/InputData";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routing />
      <Footer />
      {/* <InputData/> */}

=======
import React, { useEffect } from "react";
// import Navbar from './components/Navbar';
import Footer from "./components/Footer/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import "bootstrap-icons/font/bootstrap-icons.css";
import { useLocation } from "react-router-dom";
import NicheFlare from "./components/NicheFlare";
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

      {isSubscribePanel ? <NicheFlare /> : <header><Navbar /></header>}

      <Routing />
      {!isSubscribePanel && <Footer />}



     
>>>>>>> 82ce77e620d138022c4f5a4fc772642eead856a7
    </div>
  );
};

export default App;
