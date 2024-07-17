import React from "react";
import "./Image.css";
import image1 from "../../../assets/images/Services/Images/1.png";
import image2 from "../../../assets/images/Services/Images/2.png";
import image3 from "../../../assets/images/Services/Images/3.png";
import image4 from "../../../assets/images/Services/Images/4.png";

const Image = () => {
  return (
    <div className="image-gallery">
      <div className="image-item">
        <img src={image1} alt="Service 1" />
      </div>
      <div className="image-item">
        <img src={image2} alt="Service 2" />
      </div>
      <div className="image-item">
        <img src={image3} alt="Service 3" />
      </div>
      <div className="image-item">
        <img src={image4} alt="Service 4" />
      </div>
    </div>
  );
};

export default Image;
