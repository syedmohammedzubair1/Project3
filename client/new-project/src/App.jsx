// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ContentList from "./components/ContentList";
// import ContentDetail from "./components/ContentDetail";
// import LandingPage from "./components/LandingPage";

// function App() {
//   return (
//     <>
//     <Router>
//       <Routes>
//         <Route path="/" element={<ContentList />} />  {/* Home page shows all articles */}
//         <Route path="/content/:id" element={<ContentDetail />} />  {/* Detailed view */}
//       </Routes>
//     </Router>
//    <LandingPage />
//     </>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
// import ItemList from "./pages/ItemList";
// import { ItemList } from "./pages/ItemList";  // ✅ Correct way for named export
import { ItemList } from "./data/ItemList";

import CartPage from "./pages/CartPage";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<ItemList />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
