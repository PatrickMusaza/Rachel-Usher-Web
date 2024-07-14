import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Studio@rachelusher.uk</p>
          <p>1050 N Cahuenga Blvd</p>
          <p>Los Angeles, CA 90038</p>
          <div className="social-links">
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.pinterest.com/">
              <FontAwesomeIcon icon={faPinterest} />
            </a>
            <a href="https://twitter.com/">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-section names-section">
              <div className="form-group">
                <label htmlFor="firstName">First Name <span className="required">*</span></label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" />
              </div>
            </div>
            <div className="form-section email-section">
              <div className="form-group">
                <label htmlFor="email">Email <span className="required">*</span></label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>
            <div className="form-section message-section">
              <div className="form-group">
                <label htmlFor="message">Message <span className="required">*</span></label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
