import React from "react";
import SearchIcon from "../../assets/images/searchIcon.png";
const HomePageSearch = () => {
  return (
    <div className="search-banner">
      <div className="search-bar">
        <input className="search-input" placeholder="Search" />
        <img src={SearchIcon} alt="search-icon" />
      </div>
    </div>
  );
};

export default HomePageSearch;
