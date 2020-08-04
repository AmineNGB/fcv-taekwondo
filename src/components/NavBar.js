import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return(
    <div className="navbar"> 

      <div className="id">
        <div className="idContent">
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQE-yOt0XIGJUA/profile-displayphoto-shrink_200_200/0?e=1596067200&v=beta&t=JSuq9FXzXvu8jpCPT1EtO-a7ziLawfz5u0iA6qBxdlk" alt="profil-pic"/>
          <h3>FCV Taekwondo</h3>
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
            <NavLink exact to="/apropos" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>A propos</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/entraineurs" activeClassName="navActive">
              <i className="fas fa-images"></i>
              <span>Entraineurs</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar;