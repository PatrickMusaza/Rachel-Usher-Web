import React from "react";
import { Helmet } from "react-helmet";
import "./International.css";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/NavBar/Navbar";
import Contact from "../../../components/Contact/Projects/Contact";
import { Link } from "react-router-dom";

const International = () => {
  const projects = [
    { image: "International/Rachel+Usher+Moderne+Villa+View+1+High+Res+3.jpg" },
    { image: "International/Rachel+Usher+Moderne+Villa+View+2+High+Res.jpg" },
    { image: "International/Rachel+Usher+Moderne+Villa+View+3+High+Res.jpg" },
    { image: "International/Rachel+Usher+Moderne+Villa+View+9+High+Res.jpg" },
    { image: "International/Rachel+Usher+Moderne+Villa+View+10+High+Res.jpg" },
    { image: "International/Rachel+Usher+Moderne+Villa+View+11+High+Res.jpg" },
    { image: "International/Rachel+Usher+Moderne+Villa+View+12+High+Res.jpg" },
  ];

  return (
    <div>
      <Navbar />
      <div className="international-projects-container">
        <Helmet>
          <title>Our International Projects</title>
        </Helmet>
        <div className="intro-text">
          <h3>Rachel Usher Interior Design, International</h3>
          <p>
            Our multi-disciplinary Interior Design and Architecture team are
            often invited to work upon projects outside of the UK, delivering
            notable projects to a discerning client base from the USA to the
            Middle East.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <img
                src={require(`../../../assets/images/${project.image}`)}
                alt={`International Project ${index + 1}`}
                className="project-image"
              />
            </div>
          ))}
        </div>
      </div>
      <Contact />
      <div className="Discover">
        <p>
          <Link to="/projects">Discover our UK Projects.</Link>
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default International;
