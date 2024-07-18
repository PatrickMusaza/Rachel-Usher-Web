import React from "react";
import "./Services.css";
import Subscription from "../../components/Subscription/Subscription";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";
import Image from "../../components/Services/Image Section/Image";
import Projects from "../../components/Services/Projects/Projects";
import Header from "../../components/Header/Header";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Luxury Interior Design Portfolio</title>
        <meta
          name="description"
          content="Rachel Usher Interior Design serves discerning clients, designing luxury residential spaces in across the UK and internationally. Recent projects included spaces in Yorkshire, Cheshire, London and Los Angeles."
        />
      </Helmet>
      <Header />
      <Image />
      <Projects />
      <Subscription />
      <Footer />
    </>
  );
};

export default Services;
