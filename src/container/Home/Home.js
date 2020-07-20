import React from "react";

import "./Home.scss";
import mainCoffeeImage from "../../assets/coffee-image.jpg";

import LocationMap from "../../components/Map/Map";

const Home = () => {
  return (
    <div>
      <div className="main-image-container">
        <img
          src={mainCoffeeImage}
          alt="Multiple Coffee Cups"
          className="main-image"
        />
        <h1 className="sub-title">Espresso yourself!</h1>
      </div>
      <LocationMap />
    </div>
  );
};

export default Home;
