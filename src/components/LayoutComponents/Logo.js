import React from "react";
import logo from "../../assets/images/logo.png";

function Logo(props) {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
      {props.position === "navbar" && <h3>Swift Meal</h3>}
    </div>
  );
}

export default Logo;
