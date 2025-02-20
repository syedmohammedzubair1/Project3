<<<<<<< HEAD
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
=======
import React, { useEffect } from "react";
import Navbar from './components/Navbar';
import Footer from "./components/Footer/Footer";
import Home from './components/Home'; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
>>>>>>> a9deab101876dd88daf39b517362a13e98bb125a
import LandingPage from "./components/LandingPage";
import FAQ from "./components/FAQ";

<<<<<<< HEAD
function App() {
  return (
    <div>
  
   <LandingPage />
   <FAQ />
=======
import VideosCards from "./components/VideosCards";

import LoginForm from "./components/Login/LoginForm";
import Routing from "./components/Routing";


const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
  
      <header>
        <Navbar />
      </header>

  

      <Routing/>
      <Footer />
    
>>>>>>> a9deab101876dd88daf39b517362a13e98bb125a
    </div>
  );
}

export default App;
