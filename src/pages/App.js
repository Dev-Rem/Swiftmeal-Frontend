import React from "react";
import "../assets/scss/style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { HomePage } from "./HomePage";

const App = () => {
  return (
    <ChakraProvider>
      <Router basename={"/"}>
        <Routes>
          <Route exact path={"/"} element={<HomePage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
