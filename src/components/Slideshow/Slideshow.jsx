import React, { useState, useEffect } from "react";
import "./Slideshow.css";
import image1 from "../../assets/images/Home/2019-04-01_Rachel+Usher_Eastfield+Bedroom_3103.jpg";
import image2 from "../../assets/images/Home/Rachel-Usher-Interior-Design-Master-Bedroom-Bath-01_high_res+copy.jpg";
import image3 from "../../assets/images/Home/Rachel_Usher_Design_Eastfield_17.jpg";
import image4 from "../../assets/images/Home/Rachel_Usher_Interior_Design_Hampton_17_web_ready.jpg";
import image5 from "../../assets/images/Home/Rachel_Usher_Interior_Design_Hampton_26_web_ready.jpg";
import image6 from "../../assets/images/Home/Rachel_Usher_Interior_Design_Hampton_32_web_ready.jpg";
import image7 from "../../assets/images/Home/Rachel_Usher_Interior_Design_Hampton_38_web_ready.jpg";
import image8 from "../../assets/images/Home/Rachel_Usher_Interior_Design_London_Oakley_17_web_ready.jpg";
import image9 from "../../assets/images/Home/Rachel_Usher_Interior_Design_London_Oakley_21_web_ready.jpg";
import image10 from "../../assets/images/Home/Rachel_Usher_Interior_Design_The_Barn_Theatre_Room_15_web_ready.jpg";
import image11 from "../../assets/images/Home/Rachel_Usher_Interior_Design_Tickhill_017_web_ready.jpg";
import image12 from "../../assets/images/Home/Rachel_Usher_Interior_Design_Tickhill_019_web_ready.jpg";
import image13 from "../../assets/images/Home/Rachel_Usher_Interior_Design_Tickhill_036_web_ready.jpg";
import image14 from "../../assets/images/Home/Rachel_Usher_Interior_Design_Tickhill_046_web_ready.jpg";
import image15 from "../../assets/images/Home/Rachel_Usher_Interior_Design_Tickhill_046_web_ready.jpg";
import image16 from "../../assets/images/Home/luxury-high-end-minimal-masculine-interior-design-1.jpg";
import image17 from "../../assets/images/Home/luxury-high-end-minimal-masculine-interior-design-5.jpg";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
  image17,
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
