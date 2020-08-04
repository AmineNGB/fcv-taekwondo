import React from "react";
import { NavLink } from "react-router-dom";

// import Css files and pictures
import "../assets/App.css";
import Logo from "../assets/images/square_logo.jpg";

const NavBar = () => {
  return (
    <div className="navbar couleur">
      <div className="logo-content">
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <h3>FCV Taekwondo</h3>
        </div>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/leclub" activeClassName="navActive">
              <span>Le club</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/entraineurs" activeClassName="navActive">
              <span>Entraineurs</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/gallery" activeClassName="navActive">
              <span>Galerie</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/tarifs" activeClassName="navActive">
              <span>tarifs</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/horaires" activeClassName="navActive">
              <span>Horaires</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
