import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./our-projects.css";

const OurProjects = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const totalImages = 10;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % totalImages);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalImages]);

  const handlePrevClick = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + totalImages) % totalImages);
  };

  const handleNextClick = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % totalImages);
  };

  return (
    <div className="projects-container">
      <div className="projects-box">
        <div className="projects-link">
          <Link to="/projects">Our Projects</Link>
        </div>
        <div className="reviews-container">
          <img
            src={require(`../../assets/images/Reviews/${currentImage + 1}.png`)}
            alt={`Review ${currentImage + 1}`}
            className="review-image"
          />
          <div className="arrow-buttons">
            <FontAwesomeIcon
              icon={faArrowLeft}
              onClick={handlePrevClick}
              className="arrow-left"
            />
            <FontAwesomeIcon
              icon={faArrowRight}
              onClick={handleNextClick}
              className="arrow-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
