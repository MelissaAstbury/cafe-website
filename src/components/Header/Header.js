import React, { useState } from "react";
import NavItem from "./NavItem/NavItem";

import "./Header.scss";

const Header = () => {
  const [burgerMenuToggled, setBurgerMenuToggled] = useState(false);

  return (
    <header>
      <div className="wrapper">
        <nav>
          <h3>Aqui Misimo</h3>
          <div
            className="hamburger"
            onClick={() => {
              setBurgerMenuToggled(!burgerMenuToggled);
            }}
          >
            <div
              className={burgerMenuToggled ? "line modified-line-01" : "line"}
            ></div>
            <div
              className={burgerMenuToggled ? "line modified-line-02" : "line"}
            ></div>
            <div
              className={burgerMenuToggled ? "line modified-line-03" : "line"}
            ></div>
          </div>
          <ul
            className={burgerMenuToggled ? "nav-list open" : "nav-list"}
            onClick={() => {
              setBurgerMenuToggled(false);
            }}
          >
            <NavItem link="/" exact>
              Home
            </NavItem>
            <NavItem link="/experience" exact>
              About
            </NavItem>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
