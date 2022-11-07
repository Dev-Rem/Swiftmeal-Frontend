import React from "react";
import "../assets/scss/style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import { LoginPage } from "./LoginPage";
import RestaurantsPage from "./RestaurantsPage";

const App = () => {
  return (
    <Router basename={"/"}>
      <Routes>
        <Route exact path={"/home"} element={<HomePage />} />
        <Route exact path={"/auth"} element={<LoginPage />} />
        <Route exact path={"/restaurants"} element={<RestaurantsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
