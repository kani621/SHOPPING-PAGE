import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

function Contact() {
    const [mapVisible, setMapVisible] = useState(false);
  
    const toggleMap = () => {
      setMapVisible(!mapVisible);
    };
  
  return (
    <>
    <div className="container contact-container">
    <div className="row">
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <img 
          src="https://img.freepik.com/free-vector/limited-discount-sale-fashion-landing-page_23-2148576463.jpg" 
          alt="Contact" 
          className="img-fluid"
        />
      </div>
      <div className="col-md-6">
        <h1>Get in Touch</h1>
        <br>
        </br>
        <p>
          <strong>Email:</strong> 
          <a href="mailto:contact@example.com">contact@example.com</a>
          <button className="btn btn-primary contact-button" onClick={() => window.location.href='mailto:contact@example.com'}>
            Email Us
          </button>
        </p>
        <p>
          <strong>Phone:</strong> 
          <a href="tel:+12345678901">(+91) 341-567-8901</a>
          <button className="btn btn-warning contact-button" onClick={() => window.location.href='tel:+12345678901'}>
            Call Us
          </button>
        </p>
        <p>
          <strong>Address:</strong> 
          1234 Street Name, City, State, 56789
          <button className="btn btn-secondary contact-button" onClick={toggleMap}>
            View on Map
          </button>
        </p>
        {mapVisible && (
          <div id="mapDiv" className="map-div">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.1602802684192!2d77.39638073968018!3d28.504825075835775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks%20%7C%20Coding%20Classes!5e0!3m2!1sen!2sin!4v1702963476861!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        )}
        <p>
          <strong>Office Hours:</strong> Mon - Fri, 9:00 AM - 5:00 PM
        </p>
      </div>
    </div>
    
  </div>
  <Footer/>
  </>
);
};
export default Contact;

export default Contact;
