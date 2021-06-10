import React from "react";
import "./navBar.css";
import logo from "./logo.png";

const NavBar = (props) => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-options">
        <ul>
          <li>Log in</li>
          <li>Sign up</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
