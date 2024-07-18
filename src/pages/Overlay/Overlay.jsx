import React from "react";
import "./Overlay.css";
import overlayImage from "../../assets/images/Services/Rachel_Usher_Design_Eastfield_08.jpg";
import logoImage from "../../assets/images/Logo/RachelUsher_Logo_black_rgb.png"; // Path to your logo image

const Overlay = () => {
  return (
    <div className="overlays">
      <div className="overlay-left">
        <img src={overlayImage} alt="Overlay" />
      </div>
      <div className="overlay-right">
        <div className="overlay-right-1">
          <div className="overlay-links">
            <ul>
              <li>About Us</li>
              <li>UK Projects</li>
              <li>International Projects</li>
              <li>In Progress</li>
              <li>Our Services</li>
              <li>Press</li>
              <li>Get In Touch</li>
              <li>More</li>
            </ul>
          </div>
        </div>
        <div className="overlay-right-2">
          <div className="divider"></div>
          <p>
            Rachel Usher Interior Design is a multi-award winning high-end
            interior design practice specialising in providing clients with
            outstanding luxury interiors across the UK and internationally.
          </p>
          <p>Yorkshire: 01302 215 975</p>
          <p>London: 02033 266 266</p>
          <p>studio@rachelusher.uk</p>
          <img src={logoImage} alt="Logo" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
