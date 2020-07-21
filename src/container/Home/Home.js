import React from "react";

import "./Home.scss";
import mainCoffeeImage from "../../assets/coffee-image.jpg";
import coffeeBeanImage from "../../assets/coffee-beans.jpeg";
import foodImage from "../../assets/food-image.jpeg";

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
      <div className="description-container">
        <div className="description">
          <h3 className="description-title">
            Start your day off great with a cup of coffee!
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            lacinia, lorem eu dignissim cursus, massa lacus tincidunt dui, a
            sagittis dolor urna quis quam. Suspendisse pharetra ligula vitae
            tellus tempus gravida. Curabitur sollicitudin eget metus at aliquam.
            Sed iaculis accumsan erat a ornare. Ut pellentesque posuere dui sit
            amet consequat. Morbi sed justo est.
          </p>
        </div>
        <LocationMap className="map" />
      </div>
      <div className="description-container">
        <img
          src={coffeeBeanImage}
          alt="Coffee cup with spilled coffee beans"
          className="coffee-image"
        />
        <div className="description">
          <h3 className="description-title">The best coffee around</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            lacinia, lorem eu dignissim cursus, massa lacus tincidunt dui, a
            sagittis dolor urna quis quam. Suspendisse pharetra ligula vitae
            tellus tempus gravida. Curabitur sollicitudin eget metus at aliquam.
            Sed iaculis accumsan erat a ornare. Ut pellentesque posuere dui sit
            amet consequat. Morbi sed justo est.
          </p>
        </div>
      </div>
      <div className="description-container">
        <div className="description">
          <h3 className="description-title">Take a look at our menu!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            lacinia, lorem eu dignissim cursus, massa lacus tincidunt dui, a
            sagittis dolor urna quis quam. Suspendisse pharetra ligula vitae
            tellus tempus gravida. Curabitur sollicitudin eget metus at aliquam.
            Sed iaculis accumsan erat a ornare. Ut pellentesque posuere dui sit
            amet consequat. Morbi sed justo est.
          </p>
        </div>
        <img
          src={foodImage}
          alt="Sliced Hamon Serrano on black slate"
          className="coffee-image"
        />
      </div>
    </div>
  );
};

export default Home;
