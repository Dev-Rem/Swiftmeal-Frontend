import React from "react";
import logo from "../assets/images/logo.png";

const NavBar = () => {
  return (
    <div className="navbar-container">
      {/* Navbar logo */}
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="navbar-options">
        <ul>
          <li>
            <button className="button">Log in</button>
          </li>
          <li>
            <button className="button">Sign up</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
