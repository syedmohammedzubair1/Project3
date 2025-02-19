import React from "react";
import { NavLink } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css"; 

const Footer = () => {
  return (


    <>
      <footer className="container-fluid bg-warning text-black py-5">
        <div className="container-fluid w-100">
          <div className="row">
            <div className="col-md-4">
              <h5 className="fw-bold">Contact</h5>
              <p>500 Terry Francine Street</p>
              <p>San Francisco, CA 94158</p>
              <p><strong>General Inquiries:</strong> 123-456-7890</p>
              <p><strong>Sales:</strong> info@mysite.com</p>
              <p><strong>Customer Care:</strong> info@mysite.com</p>
            </div>


            <div className="col-md-4">
              <h5 className="fw-bold">Quick Links</h5>
              <p><NavLink to="/terms" className="text-dark fw-bold text-decoration-none">Terms & Conditions</NavLink></p>
              <p><NavLink to="/privacy" className="text-dark fw-bold text-decoration-none">Privacy Policy</NavLink></p>
            </div>

            {/* Right Section - Follow & Subscribe */}
            <div className="col-md-4">
              <h5 className="fw-bold">Follow</h5>
              <p>Sign up to get the latest news on our product.</p>
              <input type="email" className="form-control border-dark mb-2" placeholder="Email *" />
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="subscribe" />
                <label className="form-check-label" htmlFor="subscribe">
                  Yes, subscribe me to your newsletter.
                </label>
              </div>
              <button className="btn btn-dark w-100 mt-2 fw-bold">Subscribe</button>
              <div className="mt-3">
                <p><NavLink to="/linkedin" className="text-dark fw-bold text-decoration-none">LinkedIn</NavLink></p>
                <p><NavLink to="/youtube" className="text-dark fw-bold text-decoration-none">YouTube</NavLink></p>
                <p><NavLink to="/facebook" className="text-dark fw-bold text-decoration-none">Facebook</NavLink></p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="container-fluid bg-black text-white text-center py-3">
        &copy; 2035 by WeDu. Powered and secured by{" "}
        <NavLink to="/wix" className="text-white fw-bold text-decoration-none">Wix</NavLink>
      </div>
    </>
  );
};

export default Footer;