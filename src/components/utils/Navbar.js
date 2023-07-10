import React from "react";
import logo from "../../assets/images/logo.png";
import { Image } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-options-container">
        <div className="logo-text">
          <Image
            boxSize="80px"
            objectFit="cover"
            src={logo}
            alt="Swiftmeal logo"
          />
          <Text
            fontSize="3xl"
            color="#b503a6"
            fontFamily={("Tangerine", "cursive")}
            marginTop={4}
          >
            Swiftmeal
          </Text>
        </div>

        <ButtonGroup paddingTop={15}>
          <Link to={"/signin"}>
            <Button backgroundColor="white" color="#b503a6" variant="ghost">
              Sign In
            </Button>
          </Link>

          <Link to={"/signup"}>
            <Button
              backgroundColor="#b503a6"
              color="white"
              variant="outline"
              _hover={{ bg: "white", color: "#b503a6" }}
            >
              Sign Up
            </Button>
          </Link>
        </ButtonGroup>
      </div>
    </div>
  );
};
