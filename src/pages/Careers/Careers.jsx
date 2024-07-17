import React from "react";
import "./Careers.css";
import image from "../../assets/images/Careers/Luxury+High+End+Interior+Design+Careers+Vacancies.jpg";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/Navbar";

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Interior Design Careers and Vacancies</title>
        <meta
          name="description"
          content="Rachel Usher Interior Design is a South Yorkshire based design studio that specialises in luxury, bespoke residential interiors schemes for both private clients and developers."
        />
      </Helmet>
      <Navbar />
      <div className="careers">
        <h1>CAREERS</h1>
        <p>
          At Rachel Usher Interior Design we don't view our work as simply a
          9-5. To us it's a mission - a career where you are part of a diverse
          team who are passionate about each and every aspect of the interior
          design process; from concept, scheme, detail design and installation
          to the not-so-glamorous phases of transforming a clients space.
        </p>

        <div className="image-container">
          <img
            src={image}
            alt="Desk with table lamp focusing on material and fabric swatches"
          />
        </div>

        <p>
          We don't see ourselves as just 'an interior design studio' - our team
          understands that our work within the practice is worth more than that.
          We create experiences and enhance lifestyles, thinking past the notion
          that design relates to aesthetics only.
        </p>

        <p>
          We embrace individuality within a relaxed, collaborative work
          environment and our small, but perfectly formed team are dedicated,
          committed and loyal - not only to their individual role or duties but
          to each other too.
        </p>

        <h2>CURRENT OPPORTUNITIES</h2>
        <p>
          We don't have any vacancies at present. However speculative enquiries
          are always welcome from experienced Interior Designers.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
