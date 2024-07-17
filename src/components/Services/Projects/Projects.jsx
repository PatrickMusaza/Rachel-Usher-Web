import React from "react";
import "./Projects.css";
import image1 from "../../../assets/images/Services/Projects/Rachel_Usher_Interior_Design_The_Barn_Theatre_Room_01_web_ready.jpg";
import image2 from "../../../assets/images/Services/Projects/Rachel_Usher_Interior_Design_Tickhill_005_web_ready.jpg";
import image3 from "../../../assets/images/Services/Projects/Rachel_Usher_Interior_Design_Tickhill_019_web_ready.jpg";
import award from "../../../assets/images/Services/Awards+Banner++(1).jpg";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Discover Our Projects</h1>
      <div className="projects">
        <Link to="/projects" className="project">
          Design Portfolio
        </Link>
      </div>
      <div className="image-gallery">
        <div className="image-items">
          <img src={image1} alt="Project 1" />
        </div>
        <div className="image-items">
          <img src={image2} alt="Project 2" />
        </div>
        <div className="image-items">
          <img src={image3} alt="Project 3" />
        </div>
      </div>
      <div className="reference-award">
        <p>
          For business coaching and podcast enquiries Please head to{" "}
          <a
            href="https://www.thebusinessofinteriors.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Business of Interiors
          </a>
          .
        </p>
        <img src={award} alt="Award" />
      </div>
    </div>
  );
};

export default Projects;
