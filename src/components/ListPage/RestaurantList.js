import React from "react";
import { Card, Heading, Image, Text } from "@chakra-ui/react";

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

      <div className="category-container"></div>

      <div className="restaurant-list">
        <Card maxW="sm" height="100%" borderRadius={20}>
          <Image
            src={require("../../assets/images/sweets.jpeg")}
            alt="Green double couch with wooden legs"
            borderTopRadius="lg"
            height={200}
          />
          <div style={{ padding: 15 }}>
            <Heading
              size="md"
              color="#b503a6"
              fontFamily={("Tangerine", "cursive")}
            >
              Pizza Hut
            </Heading>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div>
                <p>Address:</p>
                <p>Min order:</p>
              </div>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#f4f4f4",
                  borderRadius: 10,
                  borderWidth: "2px",
                  borderColor: "#b503a6",
                }}
              ></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
