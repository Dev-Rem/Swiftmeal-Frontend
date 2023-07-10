import React from "react";
import { RestaurantList } from "../components/ListPage/RestaurantList";
import { MealList } from "../components/ListPage/MealList";
import { Navbar } from "../components/utils/Navbar";

export const RestaurantListPage = () => {
  return (
    <div>
      <Navbar />
      <RestaurantList />
    </div>
  );
};

export const MealListPage = () => {
  return (
    <div>
      <Navbar />
      <MealList />
    </div>
  );
};
