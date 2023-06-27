import React from "react";
import { Card } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Sections = () => {
  return (
    <div className="sections-banner-container">
      <div className="banner-heading">
        <Heading
          as="h1"
          size="3xl"
          fontFamily={("Tangerine", "cursive")}
          color="#b503a6"
        >
          What would you like to do today?
        </Heading>
      </div>
      <Wrap spacing="50px" justify="center" pt={10} pl={10}>
        <WrapItem>
          <Link to={"/list"} style={{ textDecoration: "none" }}>
            <div className="options-container">
              <Card maxW="sm" height="100%" borderRadius={20}>
                <Image
                  src={require("../../assets/images/restaurantCard.png")}
                  alt="Green double couch with wooden legs"
                  borderTopRadius="lg"
                />
                <div className="card-text">
                  <Heading
                    size="lg"
                    color="#b503a6"
                    fontFamily={("Tangerine", "cursive")}
                  >
                    Restaurants
                  </Heading>
                  <p>
                    Make a researvation at your favorite restaurant. Make your
                    next date a special one.
                  </p>
                </div>
              </Card>
            </div>
          </Link>
        </WrapItem>
        <WrapItem>
          <Link to={"#"} style={{ textDecoration: "none" }}>
            <div className="options-container">
              <Card maxW="sm" height="100%" borderRadius={20}>
                <Image
                  src={require("../../assets/images/meals.jpeg")}
                  alt="Green double couch with wooden legs"
                  borderTopRadius="lg"
                  height={250}
                />
                <div className="card-text">
                  <Heading
                    size="lg"
                    color="#b503a6"
                    fontFamily={("Tangerine", "cursive")}
                  >
                    Meals
                  </Heading>
                  <p>
                    Take a look at some of the awesome meals offered by our
                    restaurants. Italian, French, Mexican we got it all.
                  </p>
                </div>
              </Card>
            </div>
          </Link>
        </WrapItem>
        <WrapItem>
          <Link to={"#"} style={{ textDecoration: "none" }}>
            <div className="options-container">
              <Card maxW="sm" height="100%" borderRadius={20}>
                <Image
                  src={require("../../assets/images/drinks2.jpeg")}
                  alt="Green double couch with wooden legs"
                  borderTopRadius="lg"
                  height={250}
                />
                <div className="card-text">
                  <Heading
                    size="lg"
                    color="#b503a6"
                    fontFamily={("Tangerine", "cursive")}
                  >
                    Drinks
                  </Heading>
                  <p>
                    Looking for something to drink, something light or something
                    strong we gat you.
                  </p>
                </div>
              </Card>
            </div>
          </Link>
        </WrapItem>
        <WrapItem>
          <Link to={"#"} style={{ textDecoration: "none" }}>
            <div className="options-container">
              <Card maxW="sm" height="100%" borderRadius={20}>
                <Image
                  src={require("../../assets/images/sweets.jpeg")}
                  alt="Green double couch with wooden legs"
                  borderTopRadius="lg"
                  height={250}
                />
                <div className="card-text">
                  <Heading
                    size="lg"
                    color="#b503a6"
                    fontFamily={("Tangerine", "cursive")}
                  >
                    Sweets
                  </Heading>
                  <p>
                    Sweets and snacks are one of the best part of the day. GET
                    ONE NOW!!!
                  </p>
                </div>
              </Card>
            </div>
          </Link>
        </WrapItem>
      </Wrap>
    </div>
  );
};
