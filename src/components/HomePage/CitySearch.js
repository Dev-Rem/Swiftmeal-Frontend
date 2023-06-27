import React from "react";
import { Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { ListItem, List } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

export const CitySearch = () => {
  return (
    <div className="citysearch-banner-container">
      <div className="banner-heading">
        <Heading
          as="h1"
          size="3xl"
          fontFamily={("Tangerine", "cursive")}
          color="#b503a6"
        >
          Look for a restaurant near you?
        </Heading>
      </div>
      <Wrap backgroundColor="white">
        <WrapItem>
          <div className="citysearch-left">
            <Text fontSize="2xl">Your current location is: {"Nigeria"}</Text>
            <div>
              <Text>Search the name of your location</Text>
              <div className="search-bar-container">
                <Input
                  placeholder="Search country name, city name, street name"
                  backgroundColor="white"
                  width="100%"
                  height={50}
                  borderStartRadius={20}
                  borderEndRadius={0}
                />
                <IconButton
                  aria-label="Search database"
                  borderEndRadius={20}
                  borderStartRadius={0}
                  height={50}
                  backgroundColor="#b503a6"
                  icon={<BsSearch color="white" />}
                />
              </div>
            </div>
          </div>
        </WrapItem>
        <WrapItem>
          <div className="citysearch-right">
            <Text fontSize="2xl">
              Based on your country here are some suggested cities/states.
            </Text>
            <Text fontSize="lg">
              Click on your city to view restaurants close to you.
            </Text>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <List fontSize="2xl" marginTop={20}>
                <ListItem color="#b503a6">
                  <Link>Abuja</Link>
                </ListItem>
                <ListItem color="#b503a6">
                  <Link>Abuja</Link>
                </ListItem>
                <ListItem color="#b503a6">
                  <Link>Abuja</Link>
                </ListItem>
                <ListItem color="#b503a6">
                  <Link>Abuja</Link>
                </ListItem>
                <ListItem color="#b503a6">
                  <Link>Abuja</Link>
                </ListItem>
              </List>
              <List fontSize="2xl" marginTop={20}>
                <ListItem color="#b503a6">
                  <Link>Abuja</Link>
                </ListItem>
                <ListItem color="#b503a6">
                  <Link>Abuja</Link>
                </ListItem>
                <ListItem color="#b503a6">
                  <Link>Abuja</Link>
                </ListItem>
                <ListItem color="#b503a6">
                  <Link>Abuja</Link>
                </ListItem>
                <ListItem color="#b503a6">
                  <Link>Abuja</Link>
                </ListItem>
              </List>
            </div>
          </div>
        </WrapItem>
      </Wrap>
    </div>
  );
};
