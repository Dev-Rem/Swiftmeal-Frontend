import React from "react";
import { Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export const AboutUs = () => {
  return (
    <div className="aboutus-banner-container">
      <Wrap className="aboutus-text-container">
        <WrapItem style={{ padding: 30, width: "48%" }}>
          <div>
            <div className="banner-heading">
              <Heading
                as="h1"
                size="3xl"
                fontFamily={("Tangerine", "cursive")}
                color="white"
              >
                Who we are
              </Heading>
            </div>
            <Text fontSize={["xs", "md", "lg"]} textAlign="left" color="white">
              Swiftmeal is an innovative online platform that revolutionizes the
              way people order food from various restaurants. With a wide
              selection of culinary options, Swiftmeal brings convenience and
              variety to customers' fingertips.
            </Text>
            <Text fontSize={["xs", "md", "lg"]} textAlign="left" color="white">
              Whether craving Italian, Asian, or American cuisine, users can
              browse through a diverse range of restaurants, explore their
              menus, and place orders effortlessly.
            </Text>
            <Text fontSize={["xs", "md", "lg"]} textAlign="left" color="white">
              The platform's user-friendly interface ensures a seamless
              experience, allowing customers to customize their meals, track
              deliveries in real-time, and make secure online payments.
              Swiftmeal strives to enhance the overall food ordering process,
              making it more efficient, enjoyable, and accessible to everyone.
            </Text>
          </div>
        </WrapItem>
        <WrapItem style={{ padding: 30, width: "48%" }}>
          <div>
            <div className="banner-heading">
              <Heading
                as="h1"
                size="3xl"
                fontFamily={("Tangerine", "cursive")}
                color="white"
              >
                What we do
              </Heading>
            </div>
            <Text fontSize={["xs", "md", "lg"]} textAlign="left" color="white">
              By connecting hungry individuals with their favorite local
              eateries, Swiftmeal facilitates a dynamic and vibrant food
              culture. The platform promotes local businesses and empowers
              restaurants to reach a broader customer base.
            </Text>
            <Text fontSize={["xs", "md", "lg"]} textAlign="left" color="white">
              With Swiftmeal, users can discover hidden culinary gems, try new
              flavors, and indulge in their favorite dishes from the comfort of
              their homes or offices. The platform's dedication to quality,
              reliability, and exceptional customer service ensures that every
              meal is a delightful experience.
            </Text>
            <Text fontSize={["xs", "md", "lg"]} textAlign="left" color="white">
              Whether it's a quick lunch break, a cozy dinner at home, or
              catering for a special event, Swiftmeal is the go-to destination
              for satisfying cravings, supporting local businesses, and
              embracing the diverse world of gastronomy.
            </Text>
          </div>
        </WrapItem>
      </Wrap>
    </div>
  );
};
