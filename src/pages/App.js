import React from "react";
import "../assets/scss/style.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { HomePage } from "./HomePage";
import {
  RestaurantListPage,
  MealListPage,
  DrinkListPage,
  SweetListPage,
} from "./ListPage";

import { AccountPage, OrderHistoryPage } from "./AccountPage";

const App = () => {
  return (
    <ChakraProvider>
      <Router basename={"/"}>
        <Routes>
          <Route exact path={"/"} element={<HomePage />} />
          <Route exact path={"/restaurants"} element={<RestaurantListPage />} />
          <Route exact path={"/meals"} element={<MealListPage />} />
          <Route exact path={"/drinks"} element={<DrinkListPage />} />
          <Route exact path={"/sweets"} element={<SweetListPage />} />
          <Route exact path={"/account"} element={<AccountPage />} />
          <Route exact path={"/order-history"} element={<OrderHistoryPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
