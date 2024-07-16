import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import Contact from "../../components/Contact/Get In Touch/Contact";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";
import Form from "../../components/Form/Get In Touch/Form";

const GetInTouch = () => {
  return (
    <div>
    <Helmet>
    <title>Get in Touch</title>
      <meta
        name="description"
        content="Our relationships are lasting and so is our service which transcends the completion of a project but they start here. Get in touch to discuss your project."
      />
    </Helmet>
      <Navbar />
      <Contact/>
      <Form/>
      <Footer/>
    </div>
  );
};

export default GetInTouch;
