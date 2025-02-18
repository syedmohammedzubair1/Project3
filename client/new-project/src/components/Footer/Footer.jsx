// Footer Component in React

import React from 'react';

const Footer = () => {
  return (
    // Footer
    <footer className="bg-dark text-white py-4">
      <div className="container-fluid w-100">
        <div className="row">
          {/* Footer Column 1: Company Info */}
          <div className="col-md-4 mb-3">
            <h5>Company Name</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis quam a nunc vehicula, non ullamcorper orci auctor.</p>
          </div>

          {/* Footer Column 2: Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-white">Home</a></li>
              <li><a href="#about" className="text-white">About</a></li>
              <li><a href="#services" className="text-white">Services</a></li>
              <li><a href="#contact" className="text-white">Contact</a></li>
            </ul>
          </div>

          {/* Footer Column 3: Social Media */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i> Facebook</a>
            <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i> Twitter</a>
            <a href="#" className="text-white me-3"><i className="bi bi-instagram"></i> Instagram</a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-4">
          <p>&copy; 2025 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
