import React from "react";
import { RestaurantList } from "../components/ListPage/RestaurantList";
import { Navbar } from "../components/utils/Navbar";

export const RestaurantListPage = () => {
  return (
    <div>
      <Navbar />
      <RestaurantList />
    </div>
  );
};
