import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdAccountCircle, MdOutlineLogout } from "react-icons/md";
import { GiHouse } from "react-icons/gi";
import { FaQuestion } from "react-icons/fa";
import { BsBagCheckFill } from "react-icons/bs";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { AuthForm } from "./AuthForm";
export const Navbar = () => {
  const [signedIn, setSignedIn] = React.useState(true);
  const [showModal, setShowModal] = React.useState(false);
  const [use, setUse] = React.useState("");

  const openModal = (use) => {
    setShowModal(true);
    setUse(use);
  };
  return (
    <div className="navbar-container">
      <div className="navbar-options-container">
        <Link to={"/"} style={{ textDecoration: "none" }}>
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
        </Link>

        {signedIn ? (
          <>
            <Menu>
              <MenuButton aria-label="Options" variant="outline">
                <Icon
                  as={RxHamburgerMenu}
                  color="#b503a6"
                  boxSize={10}
                  marginTop={3}
                />
              </MenuButton>
              <MenuList>
                <Link to={"/account"} style={{ textDecoration: "none" }}>
                  <MenuItem icon={<MdAccountCircle size={30} />}>
                    Account
                  </MenuItem>
                </Link>

                <MenuDivider />
                <MenuItem icon={<GiHouse size={20} />}>
                  Delivery Address
                </MenuItem>
                <MenuDivider />

                <MenuItem icon={<BsBagCheckFill size={20} />}>
                  Order History
                </MenuItem>
                <MenuDivider />

                <MenuItem icon={<FaQuestion size={20} />}>FAQs</MenuItem>
                <MenuDivider />
                <MenuItem icon={<MdOutlineLogout size={30} color="red" />}>
                  Sign Out
                </MenuItem>
              </MenuList>
            </Menu>
          </>
        ) : (
          <ButtonGroup paddingTop={15}>
            <Button
              backgroundColor="white"
              color="#b503a6"
              variant="ghost"
              onClick={() => openModal("signin")}
            >
              Sign In
            </Button>

            <Button
              backgroundColor="#b503a6"
              color="white"
              variant="outline"
              _hover={{ bg: "white", color: "#b503a6" }}
              onClick={() => openModal("signup")}
            >
              Sign Up
            </Button>
          </ButtonGroup>
        )}
      </div>

      {showModal && (
        <AuthForm
          use={use}
          onClose={() => setShowModal(false)}
          isOpen={showModal}
        />
      )}
    </div>
  );
};
