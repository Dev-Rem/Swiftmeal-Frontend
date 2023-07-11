import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Avatar, Text, Button, Switch } from "@chakra-ui/react";
import AvatarImage from "../../assets/images/restaurantCard.png";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { Divider } from "@chakra-ui/react";

export const Account = () => {
  return (
    <div className="account-page-container">
      <div className="account-info-container">
        <div className="user-info">
          <Avatar
            size="xl"
            name={"Aremu Festus"}
            src={AvatarImage}
            marginBottom={10}
          />
        </div>
        <div className="user-info">
          <Text fontSize="xl" color="#6c6d6d">
            Name
          </Text>
          <Text fontSize="xl">Aremu Oluwaseyi Festus</Text>
        </div>
        <div className="user-info">
          <Text fontSize="xl" color="#6c6d6d">
            Email
          </Text>
          <Text fontSize="xl">swiftmeal@gmail.com</Text>
        </div>
        <div className="user-info">
          <Text fontSize="xl" color="#6c6d6d">
            Phone number
          </Text>
          <Text fontSize="xl">+234302939230</Text>
        </div>
        <Divider />

        <div className="user-info">
          <Text fontSize="3xl" fontWeight={"bold"}>
            Payment
          </Text>
          <Button
            rightIcon={<AiOutlinePlus />}
            backgroundColor="#b503a6"
            color="white"
            variant="outline"
            _hover={{ bg: "white", color: "#b503a6" }}
          >
            Add
          </Button>
        </div>
        <Text fontSize="md" color="#6c6d6d">
          No Payment details provided yet.
        </Text>
        <Divider />
        <div className="user-info">
          <Text fontSize="3xl" fontWeight={"bold"}>
            Address
          </Text>
          <Button
            rightIcon={<AiOutlinePlus />}
            backgroundColor="#b503a6"
            color="white"
            variant="outline"
            _hover={{ bg: "white", color: "#b503a6" }}
          >
            Add
          </Button>
        </div>
        <Text fontSize="md" color="#6c6d6d">
          No Address provided yet.
        </Text>
        <Divider />

        <div className="user-info">
          <Text fontSize="3xl" fontWeight={"bold"}>
            Settings
          </Text>
        </div>
        <div className="user-info">
          <Text fontSize="xl" color="#6c6d6d">
            Name
          </Text>
          <Link>
            <Text fontSize="xl" color="#b503a6">
              Aremu Oluwaseyi Festus
            </Text>
          </Link>
        </div>
        <div className="user-info">
          <Text fontSize="xl" color="#6c6d6d">
            Email
          </Text>
          <Link>
            <Text fontSize="xl" color="#b503a6">
              swiftmeal@gmaiil.com
            </Text>
          </Link>
        </div>
        <div className="user-info">
          <Text fontSize="xl" color="#6c6d6d">
            Phone Number
          </Text>
          <Link>
            <Text fontSize="xl" color="#b503a6">
              +2340889797987
            </Text>
          </Link>
        </div>
        <div className="user-info">
          <Text fontSize="xl" color="#6c6d6d">
            Country
          </Text>
          <Link>
            <Text fontSize="xl" color="#b503a6">
              +2340889797987
            </Text>
          </Link>
        </div>
        <div className="user-info">
          <Text fontSize="xl" color="#6c6d6d">
            Get Order Invoice via email
          </Text>
          <Switch size="lg" />
        </div>
        <div className="user-info">
          <Text fontSize="xl" color="#6c6d6d">
            Get our Newsletter and promotions
          </Text>
          <Switch size="lg" />
        </div>
        <div className="user-info">
          <Text fontSize="xl" color="#6c6d6d">
            Delete your account
          </Text>
          <Link to={"#"}>
            <Button
              backgroundColor="#b503a6"
              color="white"
              variant="outline"
              _hover={{ bg: "white", color: "#b503a6" }}
            >
              Delete
            </Button>
          </Link>
        </div>
        <div className="user-info">
          <Text fontSize="xl" color="#6c6d6d">
            Sign Out
          </Text>
          <Link to={"#"}>
            <Button
              backgroundColor="#b503a6"
              color="white"
              variant="outline"
              _hover={{ bg: "white", color: "#b503a6" }}
            >
              Sign out
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
