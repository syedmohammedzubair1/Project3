import React, { useEffect } from "react";
import Navbar from './components/Navbar';
import Footer from "./components/Footer/Footer";
import Home from './components/Home'; // Import the Home component
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import LoginForm from "./components/Login/LoginForm";
import Routing from "./components/Routing";

const App = () => {
  useEffect(() => {
    // Scroll to the top whenever the component is rendered or updated
    window.scrollTo(0, 0);
  }, []); // Empty dependency array means it runs only once when the component is mounted

  return (
    <div>
  
      <header>
        <Navbar />
      </header>

      <Routing/>
      <Footer />
    </div>
  );
};

export default App;
