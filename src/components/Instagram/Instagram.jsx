import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./Instagram.css";

const Instagram = () => {
  const images = [
    "Rachel_Usher_Interior_Design_Tickhill_061_web_ready.jpg",
    "interior-designer-high-end-luxury-minimal-masculine-2.png",
    "Rachel_Usher_Interior_Design_The_Barn_Theatre_Room_02_web_ready.jpg",
    "interior-designer-high-end-luxury-minimal-masculine-5.png",
    "interior-designer-high-end-luxury-minimal-masculine-6.png",
    "Rachel_Usher_Interior_Design_Tickhill_021_web_ready.jpg",
  ];

  return (
    <div className="instagram-container">
      <div className="instagram-box">
        <h2>Instagram</h2>
        <p>
          <i>Follow us @rachelusherinteriordesign</i>
        </p>
        <div className="instagram-images">
          {images.map((image, index) => (
            <div key={index} className="instagram-image-box">
              <a href={`#${image}`} target="_blank" rel="noopener noreferrer">
                <img
                  src={require(`../../assets/images/Instagram/${image}`)}
                  alt={`Instagram ${index + 1}`}
                  className="instagram-image"
                />
              </a>
            </div>
          ))}
        </div>
        <div className="social-icons">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faPinterest} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
