import React from "react";
import SearchBar from "./SearchBar/searchBar";
import GradientCircle from "./GradientCircle/gradientCircle";
import NavBar from "./NavBar/navBar";

const App = () => {
  const names = ["Aremu", "Oluwaseyi", "Sharon", "Kiki"];
  return (
    <div>
      {/* <SearchBar names={names} /> */}
      {/* <GradientCircle /> */}
      <NavBar />
    </div>
  );
};

export default App;
