import React from "react";
import { NavLink } from "react-router-dom";

// import Css files and pictures
import "../assets/App.css";
import Fist from "../assets/images/fist.svg";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <div className="logo-content">
          <img src={Fist} alt="Logo" />
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <span>Accueil </span>
            </NavLink>
            <i className="fas fa-home"></i>
          </li>
          <li>
            <NavLink exact to="/notreclub" activeClassName="navActive">
              <span>Notre club</span>
            </NavLink>
            <i class="fas fa-fist-raised"></i>
          </li>
          <li>
            <NavLink exact to="/nosentraineurs" activeClassName="navActive">
              <span>Nos entraineurs </span>
            </NavLink>
            <i class="fas fa-users"></i>
          </li>

          <li>
            <NavLink exact to="/noshoraires" activeClassName="navActive">
              <span>Nos horaires</span>
            </NavLink>
            <i class="fas fa-clock"></i>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <span>Nous contacter</span>
            </NavLink>
            <i class="fas fa-phone"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
