import React from "react";
import { NavLink } from "react-router-dom";

// import Css files and pictures
import "../assets/App.css";
import Fist from "../assets/images/fist.svg";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Fist} alt="Logo" />
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <span>Accueil </span>
              <i className="fas fa-home"></i>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/notreclub" activeClassName="navActive">
              <span>Notre club</span>
              <i class="fas fa-fist-raised"></i>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/nosentraineurs" activeClassName="navActive">
              <span>Nos entraineurs </span>
              <i class="fas fa-users"></i>
            </NavLink>
          </li>

          <li>
            <NavLink exact to="/noshoraires" activeClassName="navActive">
              <span>Nos horaires</span>
              <i class="fas fa-clock"></i>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <span>Nous contacter</span>
              <i class="fas fa-phone"></i>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
