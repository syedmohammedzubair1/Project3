import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import './Navbar.css'; // Optional custom styling
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const navigate = useNavigate();
    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
        <div>
            {/* Navbar Section */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <NavLink
                        className="navbar-brand"
                        to="/"
                        onClick={() => {
                            handleLinkClick("home");
                            window.scrollTo(0, 0); // Scroll to top
                        }}
                    >
                        NICHE-FLARE
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink
                                    className={`nav-link ${activeLink === "home" ? "active" : ""}`}
                                    to="/"
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
                                    className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
                                    to="/contact"
                                    onClick={() => handleLinkClick("contact")}
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-light" onClick={() => navigate(`/login`)}>Login</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
