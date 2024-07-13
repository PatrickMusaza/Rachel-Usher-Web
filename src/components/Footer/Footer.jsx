import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4 className="footer-title">Get In Touch</h4>
          {/* Add your contact information here */}
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Journal</h4>
          {/* Add a link to your journal section */}
          <a href="/journal" className="footer-link">
            Visit Journal
          </a>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Careers</h4>
          {/* Add a link to your careers section */}
          <a href="/careers" className="footer-link">
            View Openings
          </a>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Privacy</h4>
          {/* Add a link to your privacy policy */}
          <a href="/privacy" className="footer-link">
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">
          © Rachel Usher | Web Design: Kayleigh Noele
        </p>
      </div>
    </footer>
  );
};

export default Footer;
