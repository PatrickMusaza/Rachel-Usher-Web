import React from "react";
import { Helmet } from "react-helmet";
import "./UkProjects.css";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/NavBar/Navbar";

const UkProjects = () => {
  const projects = [
    {
      name: "Ted's House",
      image: "UK/2018-11-28_Rachel+Usher_Stonebridge_Tickhill_08.jpg",
    },
    {
      name: "Oakley Street",
      image: "UK/2019-02-12_Rachel+Usher_Sheffield_01-min.jpg",
    },
    {
      name: "Mack's Place",
      image: "UK/2019-07-07_Stonebridge+Rachel+Usher_Study_Tickhill_03.jpg",
    },
    {
      name: "Henderson's House",
      image: "UK/Berkley_House_Rachel_Usher_Design_02.jpg",
    },
    { name: "Settle Down", image: "UK/Rachel_Usher_Design_Eastfield_02.jpg" },
    {
      name: "Reunion",
      image: "UK/Rachel_Usher_Design_Old_+Denaby_Light_05.jpg",
    },
    {
      name: "Welcome Home",
      image: "UK/Rachel_Usher_Interior_Design_Cinema_Room_18_Web_Ready.jpg",
    },
    {
      name: "Confident Grace",
      image: "UK/Rachel_Usher_Interior_Design_Hampton_15_web_ready.jpg",
    },
    {
      name: "Consciously Connected",
      image: "UK/Rachel_Usher_Interior_Design_London_Oakley_18_web_ready.jpg",
    },
    {
      name: "Berkley House",
      image:
        "UK/Rachel_Usher_Interior_Design_The_Barn_Theatre_Room_28_web_ready.jpg",
    },
    {
      name: "The Viners",
      image: "UK/Rachel_Usher_Interior_Design_Tickhill_061_web_ready.jpg",
    },
    {
      name: "United by Design",
      image: "UK/rachel_usher-interior-design-cinema-room-10-web.jpg",
    },
    {
      name: "A Space Redefined",
      image: "UK/RACHELUSHER_EASTFIELD_JUNE_207.jpg",
    },
    { name: "Relaxed Luxe", image: "UK/RachUsher_Reshoot_2.jpg" },
  ];

  return (
    <div>
      <Navbar />
      <div className="uk-projects-container">
        <Helmet>
          <title>Our UK Projects - Luxury Interior Design Portfolio</title>
        </Helmet>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-item">
              <img
                src={require(`../../../assets/images/${project.image}`)}
                alt={project.name}
              />
              <div className="project-name">{project.name}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UkProjects;
