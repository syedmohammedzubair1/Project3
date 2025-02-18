import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isSignupOpen, setIsSignupOpen] = useState(false);

    const handleLoginClick = () => {
        setIsLoginOpen(true);
        setIsSignupOpen(false);
        document.querySelector('.navbar-right button').style.backgroundColor = '#333';
        document.querySelector('.navbar-right button').style.color = 'white';
    };

    const handleSignupClick = () => {
        setIsSignupOpen(true);
        setIsLoginOpen(false);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-left">
                    <span>Company Name</span>
                </div>
                <div className="navbar-right">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <button onClick={handleLoginClick}>Login</button>
                </div>
            </nav>
            {isLoginOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Login</h2>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <button className="popup-button">Login</button>
                        <p>Don't have an account? <a href="#signup" onClick={handleSignupClick}>Click here</a></p>
                    </div>
                </div>
            )}
            {isSignupOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Signup</h2>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                        <button className="popup-button">Signup</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
