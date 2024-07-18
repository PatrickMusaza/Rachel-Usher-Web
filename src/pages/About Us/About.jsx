import React, { useState } from "react";
import "./About.css";
import { Helmet } from "react-helmet";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
import Rachel from "../../assets/images/About Us/Rachel-Usher-Portrait-Interior-Designer.jpg";

const About = () => {
  // State to track which team member's details are open
  const [openMember, setOpenMember] = useState(null);

  // Function to toggle open/close state of team member details
  const toggleMember = (index) => {
    if (openMember === index) {
      setOpenMember(null);
    } else {
      setOpenMember(index);
    }
  };

  // Sample team data
  const teamMembers = [
    {
      name: "Iona Davies",
      role: "Senior Interior Designer",
      bio: "Bio coming soon...",
    },
    {
      name: "Colette Lowe",
      role: "Interior Designer",
      bio: "Colette made the bold decision to transition careers and follow her passion for interior design, graduating from KLC school of design.Colette's background in International Sales provides her with a solid foundation in customer communication and problem-solving, enhancing her ability to connect with clients and address their needs effectively. With a keen eye for detail to ensure that every aspect of the FF&E design, from furniture selection to fixture finishes, aligns with the design concept and client requirements.Away from the studio, Colette enjoys travelling, spending quality time with family and unwinding with gripping psychological dramas.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us- Luxury Interior Design Studio</title>
        <meta
          name="description"
          content="Rachel Usher Interior Design is a multi award winning, high-end interior design practice serving clients across the UK and internationally, from Yorkshire, UK and Los Angeles, CA."
        />
      </Helmet>
      <Navbar />
      <div className="about-container">
        <section className="about-section">
          <div className="header-about">
            <h2>About Us</h2>
            <p>
              Rachel Usher Interior Design is a multi-award winning luxury
              interior design practice specializing in providing clients with
              outstanding bespoke interiors across the UK and internationally.
            </p>
          </div>
          <img src={Rachel} alt="Racher" />
          <div className="CEO">
            <h3>Rachel Usher, Founder & Creative Director</h3>
            <hr />
          </div>
          <p>
            Creative Director, Rachel founded her design practice in 2012 and is
            a multi award winning Interior Designer, recognised within her field
            and holds full SBID (Society of British and International Interior
            Design) accreditation.
          </p>
          <p>
            The success of the studio so far is undeniably related to Rachel's
            strong design perspective and creative direction, where her approach
            to design goes far deeper than aesthetics, unravelling the
            intangible emotional benefits of a space, and how a space should
            improve the way in which you live within it, is her primary pursuit.
          </p>
          <p>
            Rachel and the wider studio team take the important time needed to
            truly understand all clients, their personalities and individual
            lifestyles, viewing this time as an integral element within the
            interior design journey. Getting to know clients is a key focus for
            the RU studio, we believe that the success of any interior design is
            how the space transforms the clients' relationship and interaction
            with their built environment, a profound understanding that the
            spaces we occupy have a direct impact upon our emotional wellbeing.
          </p>
          <p>
            Rachel has a strong affinity with Southern California and enjoys
            spending time in her second home there. Rachel has a design presence
            both in the UK and Los Angeles, allowing her to take on projects on
            both sides of the Atlantic.
          </p>
          <p>
            On a personal level, Rachel is married, a mother of two children and
            is fuelled by Yorkshire Tea. Rachel is often accompanied by Sox, a
            Cavapoo who also spends much of her time as an extended part of the
            studio team.
          </p>
          <p>
            As a team we’re devoted to our practice, Rachels approachable
            leadership style has successfully led to a collaborative approach to
            all of the studios work, ensuring that each design is enhanced at
            all stages of the process.
          </p>
          <p>
            Our diverse collective experience, passion and aptitude for design
            has allowed us to create schemes which genuinely acknowledge and
            embrace the delicate balance needed between timeless luxury and
            intelligent design.
          </p>
          <p>
            Our team members have attained experience working for some of the
            most illustrious design-houses within the UK and as a result, we’re
            a well-informed studio practice encompassing a wealth of skills and
            knowledge within the interior design sector.
          </p>
          <p>
            Rachel is also the founder of{" "}
            <a href="https://www.thebusinessofinteriors.co.uk/">
              {" "}
              The Business of Interiors
            </a>{" "}
            and hosts a podcast{" "}
            <a href="https://www.thebusinessofinteriors.co.uk/podcast">
              ‘If These Walls Could Talk’
            </a>{" "}
            that is designed for the design professional, lifting the lid on
            what it means to be in The Business of Interiors.
          </p>
        </section>

        <section className="team-section">
          <h6>TEAM</h6>

          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <hr />
              <div className="team-header" onClick={() => toggleMember(index)}>
                <button className="toggle-btn">
                  <p>
                    {member.name}, {member.role}
                  </p>
                  {openMember === index ? "Close" : "View"}
                </button>
              </div>
              {openMember === index && (
                <div className="member-details">
                  <p>{member.bio}</p>
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
