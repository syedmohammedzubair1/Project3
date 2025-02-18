import React from "react";
import './Contact.css';  // Import the CSS file

const Contact = () => {
  return (
    <div>
      {/* Contact Section */}
      <div className="contact-section">
  <h2>Contact Us</h2>
  <p>
    We would love to hear from you! If you have any questions, comments, or just want to get in touch, feel free to reach out. Our team is ready to assist you. 
    <br /><br />
    We offer a range of services to meet your needs, including:
    <ul>
      <li>Web Development and Design</li>
      <li>SEO Optimization</li>
      <li>Graphic Design and Branding</li>
      <li>Content Writing and Copywriting</li>
      <li>Social Media Management</li>
      <li>Consulting and Strategy Planning</li>
    </ul>
    If you are interested in any of these services or have a custom request, don't hesitate to contact us!
  </p>
</div>


      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-links">
          <div className="link-column">
            <h4>Services</h4>
            <ul>
              <li><a href="#">Service 1</a></li>
              <li><a href="#">Service 2</a></li>
              <li><a href="#">Service 3</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h4>Features</h4>
            <ul>
              <li><a href="#">Feature 1</a></li>
              <li><a href="#">Feature 2</a></li>
              <li><a href="#">Feature 3</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h4>Demo</h4>
            <ul>
              <li><a href="#">Live Demo</a></li>
              <li><a href="#">Watch Video</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
