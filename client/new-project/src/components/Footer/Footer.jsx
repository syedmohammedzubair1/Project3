import React from "react";
import { NavLink } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css"; 

const Footer = () => {
  return (


    <>
      <footer className="container-fluid bg-warning text-black py-5 ">
        <div className="container-fluid w-100">
          <div className="row">
            <div className="col-md-4">
              <h5 className="fw-bold">Contact</h5>
              <p>500 Terry Francine Street</p>
              <p>San Francisco, CA 94158</p>
              <p><strong>General Inquiries:</strong> 123-456-7890</p>
              <p><strong>Sales:</strong> info@Nicheflare.com</p>
              <p><strong>Customer Care:</strong> support@Nicheflare.com</p>
            </div>


            <div className="col-md-4">
              <h5 className="fw-bold">Quick Links</h5>
              <p><NavLink to="/terms" className="text-dark fw-bold text-decoration-none">Terms & Conditions</NavLink></p>
              <p><NavLink to="/privacy" className="text-dark fw-bold text-decoration-none">Privacy Policy</NavLink></p>
            </div>

            {/* Right Section - Follow & Subscribe */}
            <div className="col-md-4">
            
              
                <h1 className="ms-5 mb-5 display-6 fw-bold"> Get us on </h1>
              <div className="mt-3 d-flex ">
  <p className="display-6 mx-3 ms-5">
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-dark fw-bold text-decoration-none">
    <i className="bi bi-linkedin"></i>
    </a>
  </p>
  <p className="display-6 mx-3 ms-5">
    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-dark fw-bold text-decoration-none">
    <i className="bi bi-youtube"></i>
    </a>
  </p>
  <p className="display-6 mx-3 ms-5">
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark fw-bold text-decoration-none">
    <i className="bi bi-facebook"></i>
    </a>
  </p>
</div>

            </div> 
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="container-fluid bg-black text-white text-center py-3">
        &copy; 2025 by NicheFlare.
      </div>
    </>
  );
};

export default Footer;