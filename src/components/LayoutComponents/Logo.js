import React from "react";
import logo from "../../assets/images/logo.png";

function Logo(props) {
  const position = props.position;
  return (
    <div className="logo" id="logo" href="#">
      <img src={logo} alt="logo" />
      {position === "navbar" && <h3>Swift Meal</h3>}
    </div>
  );
}

export default Logo;
