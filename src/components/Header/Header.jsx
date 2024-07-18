import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"; 
import logoWhite from "../../assets/images/Logo/RachelUsher_Logo_white_cmyk.png";
import logoBlack from "../../assets/images/Logo/RachelUsher_Logo_black_rgb.png";
import overlayImage from "../../assets/images/Instagram/interior-designer-high-end-luxury-minimal-masculine-2.png";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-title-nav-wrapper">
      <div className="header-title">
        <div className="header-title-logo">
          <Link to="/">
            <img src={logoWhite} alt="Rachel Usher Interior Design" />
          </Link>
        </div>
        <div className="header-nav-default">
          <div className="header-nav-item header-nav-item--folder">
            <Link
              className="header-nav-folder-title"
              to="/projects"
              tabIndex="0"
            >
              Projects
            </Link>
            <div className="header-nav-folder-content">
              <div className="header-nav-folder-item">
                <Link to="/projects">
                  <span className="header-nav-folder-item-content">UK</span>
                </Link>
              </div>
              <div className="header-nav-folder-item">
                <Link to="/international">
                  <span className="header-nav-folder-item-content">
                    International
                  </span>
                </Link>
              </div>
              <div className="header-nav-folder-item">
                <Link to="/in-progress">
                  <span className="header-nav-folder-item-content">
                    In Progress
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="header-nav-item">
            <Link to="/get-in-touch">Get In Touch</Link>
          </div>
          <div className="header-nav-item">
            <Link to="/our-services">Our Services</Link>
          </div>
        </div>
      </div>

      {/* Language Picker */}
      <div className="header-actions header-actions--right">
        <div className="language-picker language-picker-desktop">
          <div className="current-language">
            <span className="current-language-name">English</span>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="topnav">
          <div className="icon" onClick={handleToggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </div>
        </div>
      </div>

      {/* Overlay Menu */}
      {isMenuOpen && (
        <div className="overlay">
          <div className="overlay-content">
            {/* Desktop View */}
            <div className="overlay-image">
              <img src={overlayImage} alt="Overlay" />
            </div>
            <div className="overlay-links">
              <div className="overlay-link">
                <Link to="/about-us">About Us</Link>
              </div>
              <div className="overlay-link">
                <Link to="/projects">UK Projects</Link>
              </div>
              <div className="overlay-link">
                <Link to="/international">International Projects</Link>
              </div>
              <div className="overlay-link">
                <Link to="/in-progress">In Progress</Link>
              </div>
              <div className="overlay-link">
                <Link to="/our-services">Our Services</Link>
              </div>
              <div className="overlay-link">
                <Link to="/press">Press</Link>
              </div>
              <div className="overlay-link">
                <Link to="/get-in-touch">Get In Touch</Link>
              </div>
              <div className="overlay-divider">MORE</div>
              <div className="overlay-social-links">
                <a href="https://www.instagram.com">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.twitter.com">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.facebook.com">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.pinterest.com">
                  <FontAwesomeIcon icon={faPinterest} />
                </a>
              </div>
            </div>
            <div className="overlay-info">
              <p>
                Rachel Usher Interior Design is a multi-award winning high-end
                interior design practice specialising in providing clients with
                outstanding luxury interiors across the UK and internationally.
              </p>
              <p>
                Yorkshire: 01302 215 975
                <br />
                London: 02033 266 266
                <br />
                studio@rachelusher.uk
              </p>
              <img src={logoBlack} alt="Rachel Usher Interior Design" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
