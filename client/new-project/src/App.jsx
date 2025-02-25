// import React, { useEffect } from "react";
// import Navbar from './components/Navbar';
// import Footer from "./components/Footer/Footer";

// import { useLocation } from "react-router-dom";

// import NicheFlare from "./components/NicheFlare";
// import SubscribePanel from "./components/SubscribePanel";
// import { CartProvider } from "./context/CartContext";
// import { HomeWebinar } from "./components/Webinar/HomeWebinar";
// import { Webinar } from "./components/Webinar/Webinar";
// import { Purchase } from "./components/Purchase/Purchase";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
// import Carousel2 from "./components/Carousel2";

// import Routing from "./components/Routing";
// import Carousel from "./components/Carousel";

// import 'bootstrap/dist/css/bootstrap.min.css';


// const App = () => {

//   const location = useLocation();
//   const isSubscribePanel = location.pathname.startsWith("/subscribe");

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (

//     <div className="App">
//           <CartProvider>

//       {isSubscribePanel ? <NicheFlare /> : <header><Navbar /></header>}

//       <Routing />


//       {!isSubscribePanel && <Footer />}
//             <h2>welcome</h2>
//             </CartProvider>
//         </div>
//     );

// };

// export default App;
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import Routing from "./components/Routing";
import NicheFlare from "./components/NicheFlare";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

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
     
    </div>
  );
};

export default App;
