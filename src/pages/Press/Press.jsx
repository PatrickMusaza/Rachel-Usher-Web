import React from 'react';
import { Helmet } from 'react-helmet';
import './Press.css';
import Navbar from '../../components/NavBar/Navbar';
import Footer from '../../components/Footer/Footer';

import img1 from "../../assets/images/Press/1.png";
import img2 from "../../assets/images/Press/2.png";
import img3 from "../../assets/images/Press/3.png";
import eveningStandard from "../../assets/images/Press/evening+standard+.png";
import homesAndGardens from "../../assets/images/Press/homes&gardens.png";
import interiorDesignerMagazine from "../../assets/images/Press/interiordesignermagazine.png";
import livingETCWebFile from "../../assets/images/Press/Living+ETc+web+file.jpg";
import loveHappensMagazine from "../../assets/images/Press/love-happens-magazine.png";
import portaire from "../../assets/images/Press/portaire.png";
import theListMagazine from "../../assets/images/Press/thelistmagazine.png";
import untitledDesign12_1 from "../../assets/images/Press/Untitled+design+(12) (1).png";
import untitledDesign12 from "../../assets/images/Press/Untitled+design+(12).png";
import untitledDesign29 from "../../assets/images/Press/Untitled+design+29.jpg";

const Press = () => {
  const pressData = [
    { image: img1, link: '/press/article1' },
    { image: img2, link: '/press/article2' },
    { image: img3, link: '/press/article3' },
    { image: eveningStandard, link: 'https://www.example.com/eveningstandard' },
    { image: homesAndGardens, link: 'https://www.example.com/homesandgardens' },
    { image: interiorDesignerMagazine, link: 'https://www.example.com/interiordesignermagazine' },
  ];

  return (
    <>
      <Helmet>
        <title>In the Press - Rachel Usher Interior Design</title>
        <meta
          name="description"
          content="Explore our press features and articles to know more about Rachel Usher Interior Design."
        />
      </Helmet>
      <Navbar />
      <div className="press-page">
        <h1>Press</h1>
        <div className="press-gallery">
          {pressData.map((item, index) => (
            <a key={index} href={item.link} className="press-image-link">
              <img src={item.image} alt={`Press ${index + 1}`} className="press-image" />
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Press;
