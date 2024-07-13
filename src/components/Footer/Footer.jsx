import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-section">
          <Link to="/get-in-touch" className="footer-link">
            Get In Touch
          </Link>
        </div>
        <div className="footer-section">
          <Link to="/journal-entries" className="footer-link">
            Journal
          </Link>
        </div>
        <div className="footer-section">
          <Link to="/careers" className="footer-link">
            Career
          </Link>
        </div>
        <div className="footer-section">
          <Link to="/privacy" className="footer-link">
            Privacy
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Rachel Usher | Web Design: Patrick Musaza</p>
      </div>
    </footer>
  );
};

export default Footer;
