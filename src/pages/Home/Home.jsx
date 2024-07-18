import React from "react";
import Footer from "../../components/Footer/Footer";
import logo from "../../assets/images/Logo/RachelUsher_Logo_white_cmyk.png";
import thumbnailImage from "../../assets/images/icons/thumbnail.jpg";
import OurProjects from "../../components/Our Projects/our-projects";
import "./Home.css";
import AboutUs from "../../components/About/About";
import Instagram from "../../components/Instagram/Instagram";
import ContactUs from "../../components/Contact/Home/Contact";
import Subscription from "../../components/Subscription/Subscription";
import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import Slideshow from "../../components/Slideshow/Slideshow";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Rachel Usher Interior Design | Luxury Interior Designer working in
          Yorkshire, London, Cheshire and Internationally
        </title>
        <meta
          name="description"
          content="A luxury multi-award winning British interior design studio that delivers high end bespoke interiors and interior architecture to discerning clients across the UK and Internationally."
        />
      </Helmet>
      <Slideshow />
      <Header />
      <div className="home">
        <img src={logo} alt="Logo" />
        <div className="thumbnail">
          <img src={thumbnailImage} alt="Rachel Usher Interior Design" />
        </div>
      </div>
      <OurProjects />
      <AboutUs />
      <Instagram />
      <ContactUs />
      <Subscription />
      <Footer />
    </>
  );
};

export default Home;
