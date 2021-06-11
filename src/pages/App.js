import React from "react";
import "../assets/scss/style.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
const App = () => {
  return (
    <Router basename={"/"}>
      <Switch>
        <Route exact path={"/"} component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
