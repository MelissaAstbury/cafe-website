import React from "react";

import "./Home.scss";
import mainCoffeeImage from "../../assets/coffee-image.jpg";
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
          <h2 className="description-title">
            Start your day off great with a cup of coffee!
          </h2>
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
          src={foodImage}
          alt="Sliced Hamon Serrano on black slate"
          className="description-image order-last"
        />
        <div className="description order-first">
          <h2 className="description-title">The best coffee around</h2>
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
          <h2 className="description-title">Take a look at our menu!</h2>
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
          className="description-image"
        />
      </div>
    </div>
  );
};

export default Home;
