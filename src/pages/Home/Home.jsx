import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/images/Logo/RachelUsher_Logo_white_cmyk.png";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <img src={logo} alt="Logo" />
      </div>
      <Footer />
    </>
  );
};

export default Home;
