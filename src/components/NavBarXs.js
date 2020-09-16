import React from "react";
import { NavLink } from "react-router-dom";

const NavBarXs = () => {
  return (
    <div className="navbar-xs">
      <div className="navigation-xs">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/notreclub" activeClassName="navActive">
              <i className="fas fa-fist-raised"></i>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/nosentraineurs" activeClassName="navActive">
              <i className="fas fa-users"></i>
            </NavLink>
          </li>

          <li>
            <NavLink exact to="/noshoraires" activeClassName="navActive">
              <i className="fas fa-clock"></i>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-phone"></i>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarXs;
