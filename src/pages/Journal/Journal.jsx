import React from "react";
import "./Journal.css";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/Footer";
import sunsetSkiesImage from "../../assets/images/Journal/sunsetskies_33507_hyperrealistic_image_top_down_view_contempo_b223c62c-ba63-4bc2-8f2d-1267f401a0ee_0.png";
import hamptonImage from "../../assets/images/Journal/Rachel_Usher_Interior_Design_Hampton_17_web_ready.jpg";
import eastfieldImage from "../../assets/images/Journal/Rachel_Usher_Design_Eastfield_Cropped_16.jpg";
import bedroomAutumnImage from "../../assets/images/Journal/Rachel-Usher-Interior-Design-Master-Bedroom-Bath-02_web_ready.jpg";
import review2019Image from "../../assets/images/Journal/RUI+image.jpg";
import blog2019Image from "../../assets/images/Journal/image-asset.jpeg";
import techFutureImage from "../../assets/images/Journal/image-asset (1).jpeg";
import reflect2018Image from "../../assets/images/Journal/image-asset (2).jpeg";
import questionsImage from "../../assets/images/Journal/image-asset (3).jpeg";
import instagramAccountsImage from "../../assets/images/Journal/image-asset (4).jpeg";
import exuberanceImage from "../../assets/images/Journal/image-asset (5).jpeg";
import sustainablePaintImage from "../../assets/images/Journal/image-asset (6).jpeg";
import indoorJungleImage from "../../assets/images/Journal/image-asset (7).jpeg";
import simpleLifeImage from "../../assets/images/Journal/image-asset (8).jpeg";
import coalOfficeImage from "../../assets/images/Journal/image-asset (9).jpeg";
import scentsImage from "../../assets/images/Journal/image-asset (10).jpeg";
import differenceImage from "../../assets/images/Journal/image-asset (11).jpeg";
import sanctuaryImage from "../../assets/images/Journal/image-asset (12).jpeg";
import eportaImage from "../../assets/images/Journal/image-asset (13).jpeg";
import stockholmFairImage from "../../assets/images/Journal/image-asset (14).jpeg";
import luxuryInvestImage from "../../assets/images/Journal/image-asset (15).jpeg";
import mistakesImage from "../../assets/images/Journal/image-asset (16).jpeg";
import bathroomAdviceImage from "../../assets/images/Journal/image-asset (17).jpeg";
import bathingImage from "../../assets/images/Journal/image-asset (18).jpeg";
import ibaNominatedImage from "../../assets/images/Journal/image-asset (19).jpeg";
import emotionallyInspiredImage from "../../assets/images/Journal/image-asset (20).jpeg";
import reflect2018Image1 from "../../assets/images/Journal/image-asset (21).jpeg";
import hiringDesignerImage from "../../assets/images/Journal/image-asset (22).jpeg";
import instagramTop10Image from "../../assets/images/Journal/image-asset (23).jpeg";
import personalityImage from "../../assets/images/Journal/image-asset (24).jpeg";
import Navbar from "../../components/NavBar/Navbar";

const journalEntries = [
  {
    image: sunsetSkiesImage,
    title: "A Guide to Preparing Your Home for the Festive Season",
  },
  {
    image: hamptonImage,
    title:
      "Elevate Your Living Space: The Value of Hiring a Professional Interior Designer",
  },
  {
    image: eastfieldImage,
    title: "How to create a cosy bedroom using colour",
  },
  {
    image: bedroomAutumnImage,
    title: "Ways to refresh your home this autumn to engage all five senses",
  },
  {
    image: review2019Image,
    title: "Reflecting upon a pivotal year - 2019 in review",
  },
  {
    image: blog2019Image,
    title:
      "Best Interior Designer Blog 2019; Rachel Usher Interior Design Nominated For Amara's Annual Interior Blog Awards #IBA19",
  },
  {
    image: techFutureImage,
    title:
      "Is emotionally inspired home technology the future of interior design?",
  },
  {
    image: reflect2018Image,
    title: "Taking time to reflect; 2018 in review",
  },
  {
    image: questionsImage,
    title:
      "Hiring an Interior Designer; 10 key questions to ask a designer and yourself",
  },
  {
    image: instagramAccountsImage,
    title:
      "Rachel Usher Follows - Our top 10 interior Instagram accounts to follow",
  },
  {
    image: exuberanceImage,
    title:
      "A new mood of exuberance; why spaces with punch and personality are the future of interior design",
  },
  {
    image: sustainablePaintImage,
    title: "Sustainable Paint; Where creativity and responsibility unite",
  },
  {
    image: indoorJungleImage,
    title: "An indoor jungle that thrives",
  },
  {
    image: simpleLifeImage,
    title: "The Simple Life; soothe your senses",
  },
  {
    image: coalOfficeImage,
    title: "The Coal Office; a holistic experience",
  },
  {
    image: scentsImage,
    title:
      "Successful scents; why you should trust your feelings, not obey the rules",
  },
  {
    image: differenceImage,
    title:
      "The Importance of Understanding the Difference between an interior designer and a home stager.",
  },
  {
    image: sanctuaryImage,
    title: "A Sanctuary For Sleep",
  },
  {
    image: eportaImage,
    title: "Rachel Usher Interior Design x Eporta: How design defines mood.",
  },
  {
    image: stockholmFairImage,
    title: "Stockholm Furniture and Light Fair 2019",
  },
  {
    image: luxuryInvestImage,
    title:
      "Investing in luxury; Where quality, personal expression and longevity collide",
  },
  {
    image: mistakesImage,
    title:
      "Considered choices rather than expensive mistakes; Why you should appoint an Interior Designer",
  },
  {
    image: bathroomAdviceImage,
    title: "Bathroom styling advice from an interior designer",
  },
  {
    image: bathingImage,
    title: "Bathing - An opportunity to reconnect mind with body.",
  },
  {
    image: ibaNominatedImage,
    title:
      "Rachel Usher Interior Design Nominated For Amara's Annual Interior Blog Awards #IBA19",
  },
  {
    image: emotionallyInspiredImage,
    title: "Emotionally inspired home technology",
  },
  {
    image: reflect2018Image1,
    title: "Reflecting on 2018",
  },
  {
    image: hiringDesignerImage,
    title: "Hiring an Interior Designer",
  },
  {
    image: instagramTop10Image,
    title: "Top 10 interior Instagram accounts",
  },
  {
    image: personalityImage,
    title: "Spaces with punch and personality",
  },
];

const Journal = () => {
  return (
    <>
      <Helmet>
        <title>Luxury Interior Design Blog</title>
        <meta
          name="description"
          content="Our journal entries focus on our mission; providing a memorable interior experience by solving interior design conundrums with an emotionally considered approach. Rachel Usher Interior Design is a high-end interior design studio based in Yorkshire, UK and Los Angeles, CA."
        />
      </Helmet>
      <Navbar />
      <div className="journal-container">
        {journalEntries.map((entry, index) => (
          <div className="journal-entry" key={index}>
            {entry.image && (
              <div className="journal-image">
                <img src={entry.image} alt={entry.title} />
              </div>
            )}
            <div className="journal-content">
              <h2>{entry.title}</h2>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Journal;
