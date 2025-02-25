import React, { useEffect } from "react";
import Navbar from './components/Navbar';
import Footer from "./components/Footer/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Carousel2 from "./components/Carousel2";

import Routing from "./components/Routing";
import Carousel from "./components/Carousel";
// import { Webinar } from './components/Webinar/Webinar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { HomeWebinar } from './components/Webinar/HomeWebinar';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
    return (
        <div>
        <header>
            <Navbar/>
        </header>
      <Routing/>
    
      <Footer /> 
    </div>
  );

};

export default App;
