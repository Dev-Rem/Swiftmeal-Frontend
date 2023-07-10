import React from "react";
import {
  Image,
  Text,
  Input,
  Stack,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const AuthForm = (props) => {
  const [show, setShow] = React.useState(false);
  const [use, setUse] = React.useState(props.use);
  const handleClick = () => setShow(!show);
  return (
    <div className="auth-page-container">
      <div className="form-container">
        <Text fontSize="3xl" fontWeight={"bold"}>
          {use === "signin" ? "Sign In" : "Sign Up"}
        </Text>
        <Text fontSize="lg">
          {use === "signin"
            ? "Kindly provide email and password used to Sign Up."
            : "Kindly provide all required Information."}
        </Text>
        <Text fontSize="sm">
          All field marked with asterisk (*) are required.
        </Text>
        {use === "signin" ? (
          <Stack spacing={5}>
            <div>
              <Text fontWeight={"bold"} mb="5px">
                Email *
              </Text>
              <Input placeholder="Email" backgroundColor={"white"} />
            </div>

            <div>
              <Text fontWeight={"bold"} mb="5px">
                Password *
              </Text>
              <InputGroup size="md">
                <Input
                  placeholder="Password"
                  backgroundColor={"white"}
                  type={show ? "text" : "password"}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </div>

            <Button
              backgroundColor="#b503a6"
              color="white"
              variant="outline"
              _hover={{ bg: "white", color: "#b503a6" }}
            >
              Sign In
            </Button>
          </Stack>
        ) : (
          <Stack>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "100%" }}>
                <Text fontWeight={"bold"} mb="5px">
                  Firstname *
                </Text>
                <Input placeholder="Firstname" backgroundColor={"white"} />
              </div>
              <div style={{ width: "100%" }}>
                <Text fontWeight={"bold"} mb="5px">
                  Lastname *
                </Text>
                <Input placeholder="Lastname" backgroundColor={"white"} />
              </div>
            </div>
            <div>
              <Text fontWeight={"bold"} mb="5px">
                Email Address *
              </Text>
              <Input placeholder="Email Address" backgroundColor={"white"} />
            </div>
            <div>
              <Text fontWeight={"bold"} mb="5px">
                Password *
              </Text>
              <InputGroup size="md">
                <Input
                  placeholder="Password"
                  backgroundColor={"white"}
                  type={show ? "text" : "password"}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </div>

            <div>
              <Text fontWeight={"bold"} mb="5px">
                Confirm Password *
              </Text>
              <InputGroup size="md">
                <Input
                  placeholder="Confirm Password"
                  backgroundColor={"white"}
                  type={show ? "text" : "password"}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </div>

            <Button
              backgroundColor="#b503a6"
              color="white"
              variant="outline"
              _hover={{ bg: "white", color: "#b503a6" }}
            >
              Sign Up
            </Button>
          </Stack>
        )}
        <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          <Text fontSize="md">
            {use === "signin"
              ? "Don't have an account?"
              : "Already have an account?"}
          </Text>
          {use === "signin" ? (
            <Link to={"/signup"} style={{ textDecoration: "none" }}>
              <Text fontSize="md" color={"#b503a6"} marginLeft={3}>
                Sign Up
              </Text>
            </Link>
          ) : (
            <Link to={"/signin"} style={{ textDecoration: "none" }}>
              <Text fontSize="md" color={"#b503a6"} marginLeft={3}>
                Sign In
              </Text>
            </Link>
          )}
        </div>
      </div>
      <div>
        <Image
          src={require("../../assets/images/sweets.jpeg")}
          alt="Green double couch with wooden legs"
        />
      </div>
    </div>
  );
};
