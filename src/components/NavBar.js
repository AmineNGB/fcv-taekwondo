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
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/leclub" activeClassName="navActive">
              <i class="fas fa-fist-raised"></i>
              <span>Notre club</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/entraineurs" activeClassName="navActive">
              <i class="fas fa-users"></i>
              <span>Nos entraineurs</span>
            </NavLink>
          </li>

          <li>
            <NavLink exact to="/horaires" activeClassName="navActive">
              <i class="fas fa-clock"></i>
              <span>Nos horaires</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i class="fas fa-phone"></i>
              <span>Nous contacter</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
