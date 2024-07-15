import React from "react";
import { Helmet } from "react-helmet";
import "./Progress.css";
import { Link } from "react-router-dom";
import video1 from "../../../assets/videos/1.mp4";
import video2 from "../../../assets/videos/2.mp4";
import video3 from "../../../assets/videos/3.mp4";
import video4 from "../../../assets/videos/4.mp4";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/NavBar/Navbar";

const Progress = () => {
  return (
    <div>
      <Navbar />
      <div className="progress-container">
        <Helmet>
          <title>Our upcoming private residential projects </title>
          <meta
            name="description"
            content="Our design team are currently working upon a range of projects that are in various stages of design development from a Chelsea Pied-à-terre to a strong architectural refurbishment in Richmond and a high-end Harrogate apartment."
          />
        </Helmet>
        <h2>In Progress.</h2>
        <p className="progress-description">
          Our design team are currently working upon a range of projects that
          are in various stages of design development. We are looking forward to
          sharing these projects with you in the coming months.
        </p>
        <div className="video-grid">
          <div className="video-item">
            <video src={video1} autoPlay muted loop controls={false}></video>
            <div className="video-overlay">
              <p>Windermere</p>
            </div>
            <p>
              A whole scheme design of a prime 10,000 square foot home occupying
              a lake front position on Windermere. Maximising commanding lake
              views and designed with a luxury timeless interior aesthetic.
            </p>
          </div>
          <div className="video-item">
            <video src={video2} autoPlay muted loop controls={false}></video>
            <div className="video-overlay">
              <p>Chelsea</p>
            </div>
            <p>
              A two bedroom pied-à-terre occupying the first floor of a mid 19th
              century town house in the heart of Chelsea, a colourful and
              English aesthetic with an abundance of personality.
            </p>
          </div>
          <div className="video-item">
            <video src={video3} autoPlay muted loop controls={false}></video>
            <div className="video-overlay">
              <p>Richmond</p>
            </div>
            <p>
              A strong architectural refurbishment of a 4,500 square foot family
              home in the London Borough of Richmond Upon Thames with a
              contemporary interior that enhances the vernacular of the space
              and enhances the way our client and their young family live.
            </p>
          </div>
          <div className="video-item">
            <video src={video4} autoPlay muted loop controls={false}></video>
            <div className="video-overlay">
              <p>Harrogate</p>
            </div>
            <p>
              A large double height space used for entertainment, socialising
              and fitness, including architectural changes and a whole interior
              design fit out of this luxury addition to an existing premium
              Harrogate home.
            </p>
          </div>
        </div>
        <div className="contact-info">
          <Link to="/get-in-touch">Contact our studio about your project.</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Progress;
