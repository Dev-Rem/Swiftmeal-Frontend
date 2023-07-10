import React from "react";
import "../assets/scss/style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { HomePage } from "./HomePage";
import { RestaurantListPage } from "./RestaurantListPage";
import { SignInPage, SignUpPage } from "./AuthPages";

const App = () => {
  return (
    <ChakraProvider>
      <Router basename={"/"}>
        <Routes>
          <Route exact path={"/"} element={<HomePage />} />
          <Route exact path={"/restaurants"} element={<RestaurantListPage />} />
          <Route exact path={"/signin"} element={<SignInPage />} />
          <Route exact path={"/signup"} element={<SignUpPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
