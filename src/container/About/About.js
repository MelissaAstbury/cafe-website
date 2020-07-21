import React from "react";

import "./About.scss";

const About = () => {
  return (
    <div className="container">
      <div className="about-and-hours">
        <div className="about-container">
          <h1>About Us:</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            lacinia, lorem eu dignissim cursus, massa lacus tincidunt dui, a
            sagittis dolor urna quis quam. Suspendisse pharetra ligula vitae
            tellus tempus gravida. Curabitur sollicitudin eget metus at aliquam.
            Sed iaculis accumsan erat a ornare. Ut pellentesque posuere dui sit
            amet consequat. Morbi sed justo est.
          </p>
          <p className="about-message">We hope to see you soon!</p>
        </div>
        <div className="hours-container">
          <h1>Opening Times:</h1>
          <p>SUN: 08:30 - 14:00</p>
          <p>MON: 08:30 - 18:00</p>
          <p>TUE: 08:30 - 18:00</p>
          <p>WED: 08:30 - 14:00</p>
          <p>THUR: 08:30 - 18:00</p>
          <p>FRI: 08:30 - 18:00</p>
          <p>SAT: 08:30 - 18:00</p>
        </div>
      </div>
    </div>
  );
};

export default About;
