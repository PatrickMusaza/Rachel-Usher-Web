import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/images/Logo/RachelUsher_Logo_white_cmyk.png";
import "./Home.css";
import thumbnailImage from "../../assets/images/icons/thumbnail.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <img src={logo} alt="Logo" />
        <div className="thumbnail">
          <img src={thumbnailImage} alt="Rachel Usher Interior Design" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
