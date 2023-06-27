import React from "react";
import { Heading } from "@chakra-ui/react";

export const RestaurantList = () => {
  return (
    <div className="restaurant-listpage-container">
      <Heading
        as="h1"
        size="2xl"
        fontFamily={("Tangerine", "cursive")}
        color="#b503a6"
      >
        Restaurants - {"Nigeria"}
      </Heading>

      <div className="category-container">

      </div>

      <div className="restaurant-list">
        
      </div>
    </div>
  );
};
