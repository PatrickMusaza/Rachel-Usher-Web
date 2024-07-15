import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Studio@rachelusher.uk</p>
        <p>1050 N Cahuenga Blvd</p>
        <p>Los Angeles</p>
        <p>CA 90038</p>
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
            <p>
              Name <span className="required">(required)</span>
            </p>
            <div className="form-group horizontal">
              <div className="form-field">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="form-field">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" />
              </div>
            </div>
          </div>
          <div className="form-section email-section">
            <div className="form-group">
              <label htmlFor="email">
                Email <span className="required">(required)</span>
              </label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div className="form-section message-section">
            <div className="form-group">
              <label htmlFor="message">
                Message <span className="required">(required)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
