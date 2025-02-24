import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import Routing from "./components/Routing";
import SubscribePanel from "./components/SubscribePanel";
import { CartProvider } from "./context/CartContext";
import { HomeWebinar } from "./components/Webinar/HomeWebinar";
import { Webinar } from "./components/Webinar/Webinar";
import { Purchase } from "./components/Purchase/Purchase";

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <Routing />

      <Footer />


    </div>
  );
};

export default App;
