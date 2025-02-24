
import React, { useEffect } from "react";
import Navbar from './components/Navbar';
import Footer from "./components/Footer/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import Routing from "./components/Routing";
// export default App;
import { CartProvider } from "./context/CartContext";
// import ItemList from "./pages/ItemList";
// import { ItemList } from "./pages/ItemList";  // ✅ Correct way for named export
// import { ItemList } from "./data/ItemList";

// import CartPage from "./pages/CartPage";
// import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { HomeWebinar } from "./components/Webinar/HomeWebinar";
import { Webinar } from "./components/Webinar/Webinar";
import { Purchase } from "./components/Purchase/Purchase";

function App() {
  return (

    <div className="App">
{/*   
      <header>
        <Navbar />
      </header>

      <Routing/>
    
      <Footer /> */}
    
    </div>
  );
}

export default App;
