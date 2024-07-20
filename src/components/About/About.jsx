import React from "react";
import aboutUsImage from "../../assets/images/About Us/Rachel-Usher-Portrait-Interior-Designer.jpg";
import "./About.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-box">
        <p>
          <b>About Us</b>
        </p>
        <p>
          Rachel Usher Interior Design is a multi-award winning high-end
          interior design practice specialising in providing our clients with
          outstanding luxury interiors across the UK and worldwide.
        </p>
        <img src={aboutUsImage} alt="About Us" className="about-us-image" />
        <Link to='/about-us'>About Us</Link>
      </div>
    </div>
  );
};

export default AboutUs;
