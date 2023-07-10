import React from "react";
import { RestaurantList } from "../components/ListPage/RestaurantList";
import { MealList } from "../components/ListPage/MealList";
import { Navbar } from "../components/utils/Navbar";
import { DrinkList } from "../components/ListPage/DrinkList";
import { SweetList } from "../components/ListPage/SweetList";

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

export const DrinkListPage = () => {
  return (
    <div>
      <Navbar />
      <DrinkList />
    </div>
  );
};

export const SweetListPage = () => {
  return (
    <div>
      <Navbar />
      <SweetList />
    </div>
  );
};
