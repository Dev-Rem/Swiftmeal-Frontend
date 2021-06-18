/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <Logo position="navbar" />
      <div className="navbar-options">
        <ul>
          <li>
            <button className="login" href="#">
              Log in
            </button>
          </li>
          <li>
            <button className="button-small" href="#">
              Sign up
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
