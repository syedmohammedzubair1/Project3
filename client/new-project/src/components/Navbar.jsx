import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({setInput }) => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    window.scrollTo(0, 0); // Scroll to top
  };

 
// console.log(input)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid" style={{ zIndex: 1000 }}>
        <NavLink
          className="navbar-brand"
          to="/"
          onClick={() => handleLinkClick("home")}
        >
          NICHE-FLARE
        </NavLink>
{/* <input  type="text" onChange={(e) => setInput(e.target.value)}/> */}
<input type="text" onChange={(e) => setInput(e.target.value)} />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                className={`nav-link ${activeLink === "home" ? "active" : ""}`}
                to="/"
                onClick={() => handleLinkClick("home")}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${activeLink === "about" ? "active" : ""}`}
                to="/about"
                onClick={() => handleLinkClick("about")}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link ${
                  activeLink === "contact" ? "active" : ""
                }`}
                to="/contact"
                onClick={() => handleLinkClick("contact")}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/purchase">
                <FaShoppingCart />
                {cart.length > 0 && (
                  <span className="badge bg-danger ms-1">{cart.length}</span>
                )}
              </NavLink>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-light ms-2"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
