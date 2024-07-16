import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <div className="contact-details">
            <p>
              <FontAwesomeIcon icon={faPhone} /> 02033 266 266
              <br />
              <FontAwesomeIcon icon={faEnvelope} /> studio@rachelusher.uk
              <br />
              <br />
              13 Hanover Square,
              <br />
              Mayfair, London,
              <br />
              W1S 1HN
              <br />
              *Please only send post to our Yorkshire address.
            </p>
          </div>
          <div className="contact-details">
            <p>
              <FontAwesomeIcon icon={faPhone} /> 01302 215 975
              <br />
              <FontAwesomeIcon icon={faEnvelope} /> studio@rachelusher.uk
              <br />
              <br />
              11 Swan Street,
              <br />
              Bawtry, Yorkshire,
              <br />
              DN10 6JQ
            </p>
          </div>
          <p className="enquiry-link">
            <Link to="/">
              Click here to enquire about a project outside of the UK.
            </Link>
          </p>
        </div>
        <div className="service-description">
          <p>
            Our interior design services are crafted to offer us the opportunity
            to work with a diverse range of clients. No two clients are the same
            and our service structure is reflective of this where we mindfully
            balance our time between projects of various sizes and locations;
            providing a high-end, luxury service we’re extremely proud of. If
            you would like to discuss your project further please get in touch.
          </p>
          <div className="social-icons">
            <Link to="/" className="social-link">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link to="/" className="social-link">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
            <Link to="/" className="social-link">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link to="/" className="social-link">
              <FontAwesomeIcon icon={faPinterest} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
