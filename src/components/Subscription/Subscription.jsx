import React, { useState } from "react";
import "./Subscription.css";
import subscribeImage from "../../assets/images/Subscription/SBID+LOGOS+FOR+WEBSITE.png";

const Subscription = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Replace with your logic for handling subscription
    console.log(`Subscribing email: ${email}`);
    // Clear the email input after submission
    setEmail("");
  };

  return (
    <div className="subscription-container">
      <div className="subscription-content">
        <h2>Subscribe to our studio newsletter.</h2>
        <p>
          Sign up to be on the Rachel Usher Interior Design mailing list to be
          kept up to date with the latest studio news, updates and interiors
          insights.
        </p>
        <form onSubmit={handleSubmit} className="subscription-form">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={handleInputChange}
            required
            className="email-input"
          />
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </form>
      </div>
      <img src={subscribeImage} alt="Subscribe" className="subscribe-image" />
    </div>
  );
};

export default Subscription;
