import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white"><FontAwesomeIcon icon={faFacebook} /> Facebook</a></li>
              <li><a href="#" className="text-white"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></li>
              <li><a href="#" className="text-white"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
              <li><a href="#" className="text-white"><FontAwesomeIcon icon={faLinkedinIn} /> LinkedIn</a></li>
              <li><a href="#" className="text-white"><FontAwesomeIcon icon={faYoutube} /> YouTube</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">About Us</a></li>
              <li><a href="#" className="text-white">Services</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
              <li><a href="#" className="text-white">Blog</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Contact Us</h5>
            <p>Email: <a href="mailto:info@example.com" className="text-white">info@example.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="text-white">+1 (234) 567-890</a></p>
            <p>Address: 1234 Street Name, City, State, 56789</p>
          </div>
          <div className="col-md-3 mb-3">
            <h5>Additional Information</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Terms & Conditions</a></li>
              <li><a href="#" className="text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-white">Cookie Policy</a></li>
              <li><a href="#" className="text-white">FAQ</a></li>
              <li><a href="#" className="text-white">Careers</a></li>
            </ul>
          </div>
        </div>
        <hr className="bg-white" />
        <div className="row">
          <div className="col text-center">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
            <p>Designed by <a href="#" className="text-white">Your Design Team</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
