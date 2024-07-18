import React from "react";
import { Helmet } from "react-helmet";
import "./Press.css";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";

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
    {
      image: livingETCWebFile,
      link: "https://www.livingetc.com/ideas/thanksgiving-table-decor-ideas",
    },
    {
      image: homesAndGardens,
      link: "https://www.homesandgardens.com/interior-design/living-room-drape-ideas",
    },
    {
      image: loveHappensMagazine,
      link: "https://www.lovehappensmag.com/blog/2022/05/19/the-design-questionnaire-with-rachel-usher/",
    },
    {
      image: theListMagazine,
      link: "https://thelist.houseandgarden.com/united-kingdom/bawtry-south-yorkshire/service/rachel-usher-interior-design",
    },
    {
      image: img2,
      link: "https://www.samuel-heath.com/inspiration/samuel-heath-x-rachel-usher-small-bathroom",
    },
    {
      image: untitledDesign12,
      link: "https://homesandinteriorsscotland.com/2023/renovating-your-bathroom-heres-what-you-need-to-know/",
    },
    {
      image: portaire,
      link: "https://www.portaire.com/journal/creme-de-la-creme-the-best-interior-design-projects-of-2022",
    },
    {
      image: interiorDesignerMagazine,
      link: "https://interiordesignermagazine.co.uk/2022/09/06/confident-grace-by-rachel-usher-interior-design/",
    },
    {
      image: img3,
      link: "https://edition.pagesuite-professional.co.uk/html5/reader/production/default.aspx?edid=cbc2d26e-12f3-488f-8178-4fd6f2191514&pubname=",
    },
    {
      image: img1,
      link: "https://www.thelifemagazines.com/magazines/london-south/",
    },
    {
      image: untitledDesign29,
      link: "https://www.nest.co.uk/nest-x-rachel-usher-interior-design-autumn-edit",
    },
    {
      image: eveningStandard,
      link: "https://www.standard.co.uk/homesandproperty/interiors/amara-interior-blog-awards-2019-the-best-interiors-blogs-to-follow-for-home-design-inspiration-a134851.html",
    },
    {
      image: untitledDesign12_1,
      link: "https://ctolighting.co.uk/blogs/project-presentation/confident-grace-project-by-rachel-usher-interior-design",
    },
  ];

  return (
    <>
      <Helmet>
        <title>In the Press</title>
        <meta
          name="description"
          content="Explore our press features and articles to know more about Rachel Usher Interior Design."
        />
      </Helmet>
      <Navbar />
      <div className="press-page">
        <p>
          For press or media enquiries please contact{" "}
          <a href="mailto:chloe@rachelusher.uk">chloe@rachelusher.uk </a>
        </p>
        <div className="press-gallery">
          {pressData.map((item, index) => (
            <a key={index} href={item.link} className="press-image-link">
              <img
                src={item.image}
                alt={`Press ${index + 1}`}
                className="press-image"
              />
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Press;
