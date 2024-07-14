import React, { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
  const [isLondonOpen, setIsLondonOpen] = useState(false);
  const [isYorkshireOpen, setIsYorkshireOpen] = useState(false);
  const [isLosAngelesOpen, setIsLosAngelesOpen] = useState(false);

  const toggleLondon = () => {
    setIsLondonOpen(!isLondonOpen);
  };

  const toggleYorkshire = () => {
    setIsYorkshireOpen(!isYorkshireOpen);
  };

  const toggleLosAngeles = () => {
    setIsLosAngelesOpen(!isLosAngelesOpen);
  };

  return (
    <div className="contact-us-container">
      <div className="contact-us-content">
        <h2><center>Contact Us</center></h2>

        <div className="contact-location">
          <hr className="contact-divider" />
          <h3 onClick={toggleLondon} className="location-header">
            London
            <FontAwesomeIcon
              icon={isLondonOpen ? faAngleUp : faAngleDown}
              className="arrow-icon"
            />
          </h3>
          {isLondonOpen && (
            <>
              <p>
                02033 266 266
                <br />
                13 Hanover Square,
                <br />
                Mayfair,
                <br />
                London,
                <br />
                W1S 1HN
              </p>
            </>
          )}
        </div>

        <hr className="contact-divider" />
        <div className="contact-location">
          <h3 onClick={toggleYorkshire} className="location-header">
            Yorkshire
            <FontAwesomeIcon
              icon={isYorkshireOpen ? faAngleUp : faAngleDown}
              className="arrow-icon"
            />
          </h3>
          {isYorkshireOpen && (
            <>
              <p>
                01302 215 975
                <br />
                First Floor, 11 Swan Street,
                <br />
                Bawtry,
                <br />
                South Yorkshire,
                <br />
                DN10 6JQ
              </p>
            </>
          )}
        </div>

        <hr className="contact-divider" />
        <div className="contact-location">
          <h3 onClick={toggleLosAngeles} className="location-header">
            Los Angeles
            <FontAwesomeIcon
              icon={isLosAngelesOpen ? faAngleUp : faAngleDown}
              className="arrow-icon"
            />
          </h3>
          {isLosAngelesOpen && (
            <>
              <p>
                Studio@rachelusher.uk
                <br />
                1050 N Cahuenga Blvd,
                <br />
                Los Angeles,
                <br />
                CA 90038
              </p>
            </>
          )}
        </div>
        <hr className="contact-divider" />
      </div>
    </div>
  );
};

export default ContactUs;
