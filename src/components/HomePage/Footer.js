import React from "react";
import { Image, List, ListItem } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import logo from "../../assets/images/logo.png";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsTiktok,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { Link } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Divider, Box, AbsoluteCenter } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <div className="footer-banner-container">
      <div>
        <div className="logo-text">
          <Image
            boxSize="100px"
            objectFit="cover"
            src={logo}
            alt="Swiftmeal logo"
          />
          <Text
            fontSize="4xl"
            color="#b503a6"
            fontFamily={("Tangerine", "cursive")}
            marginTop={6}
          >
            Swiftmeal
          </Text>
        </div>
        <Text fontSize="2xl">Reach out to us on our socials</Text>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Link href="https://chakra-ui.com" isExternal>
            <BsFacebook color="black" size={30} />
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            <BsTwitter color="black" size={30} />
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            <BsInstagram color="black" size={30} />
          </Link>
          <Link href="https://chakra-ui.com" isExternal>
            <BsTiktok color="black" size={30} />
          </Link>
        </div>
        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg="white" px="4">
            OR
          </AbsoluteCenter>
        </Box>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <BsFillTelephoneFill size={23} />
          <Text>+000 000 000 0000</Text>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <MdEmail size={25} />
          <Text>Loremipsum@email.com</Text>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <MdLocationPin size={25} />
          <Text textAlign="right">
            123 Lorem Street,
            <br /> City Ipsum, <br />
            Lorem County, <br />
            12345 Ipsum.
          </Text>
        </div>
      </div>
      <div>
        <Text fontSize="xl">Any compliants enquiries or suggestions.</Text>
        <Text>Kindly send us a message</Text>
        <div className="footer-message-container">
          <Input
            variant="outline"
            placeholder="Your email address"
            color="black"
            backgroundColor="white"
          />
          <Textarea
            placeholder="Enter your message here..."
            rows={4}
            resize="vertical"
            color="black"
            backgroundColor="white"
          />
          <Button color="#b503a6">Send Message</Button>
        </div>
      </div>
      <div>
        <Text fontSize={20}>Links</Text>
        <List fontSize={20} color="#b503a6">
          <ListItem>
            <Link>Careers</Link>
          </ListItem>
          <ListItem>
            <Link>Support Us</Link>
          </ListItem>
          <ListItem>
            <Link>Work with us</Link>
          </ListItem>
          <ListItem>
            <Link>FAQ</Link>
          </ListItem>
        </List>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};
