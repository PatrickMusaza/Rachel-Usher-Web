import React, { useState, useEffect } from "react";
import "./Slideshow.css";
import image1 from "../../assets/images/Home/2019-04-01_Rachel+Usher_Eastfield+Bedroom_3103.jpg";
import image2 from "../../assets/images/Home/Rachel-Usher-Interior-Design-Master-Bedroom-Bath-01_high_res+copy.jpg";

const images = [
  image1,
  image2,
  // add all images here...
];

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentImageIndex ? "active" : ""}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}
    </div>
  );
};

export default Slideshow;
