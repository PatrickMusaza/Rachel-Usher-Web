import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo/RachelUsher_Logo_white_cmyk.png?format=1500w";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="header-title-nav-wrapper">
      {/* Logo and Title */}
      <div className="header-title">
        <div className="header-title-logo">
          <Link to="/">
            <img
              src={logo}
              alt="Rachel Usher Interior Design"
              style={{ display: "block" }}
            />
          </Link>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="header-nav">
        <div className="header-nav-wrapper">
          <nav className="header-nav-list">
            {/* Projects Dropdown */}
            <div className="header-nav-item header-nav-item--folder">
              <Link
                className="header-nav-folder-title"
                to="/projects-1"
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

            {/* Other Navigation Links */}
            <div className="header-nav-item header-nav-item--collection">
              <Link to="/get-in-touch">Get In Touch</Link>
            </div>
            <div className="header-nav-item header-nav-item--collection">
              <Link to="/our-services">Our Services</Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="header-actions header-actions--right">
        <div className="language-picker language-picker-desktop">
          <div className="current-language">
            <span className="current-language-name">English</span>
            <span className="chevron chevron--down" />
          </div>
          {/* Language Picker Content */}
          <div className="language-picker-content"></div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div>
          <div className="topnav" id="myTopnav">
            <a href="javascript:void(0);" style={{ fontSize: "15px" }} className="icon">
              &#9776;
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
