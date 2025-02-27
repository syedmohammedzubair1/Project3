import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext"; // Ensure correct import path
import App from "./App";
import { SearchProvider } from "./components/Webinar/SearchContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
      <CartProvider>
      <SearchProvider>
      <App />
      </SearchProvider>
      </CartProvider>
    </BrowserRouter>
);
