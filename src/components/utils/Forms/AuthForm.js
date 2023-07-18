import React from "react";
import {
  Text,
  Input,
  Stack,
  Button,
  InputGroup,
  InputRightElement,
  InputLeftAddon,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { axiosInstance } from "../AxiosInstance";

export const AuthForm = (props) => {
  const [show, setShow] = React.useState(false);
  const [use, setUse] = React.useState(props.use);
  const [data, setData] = React.useState({});

  const handleClick = () => setShow(!show);

  const handleChange = (event) => {
    const val = event.target.value;
    const key = event.target.name;
    setData((prevState) => {
      return { ...prevState, [key]: val };
    });
  };

  const signinUser = async () => {
    const res = await axios.post("http://localhost:4000/api/auth/signin", data);
    localStorage.setItem("authorization", res.data.token);
    localStorage.setItem("signedIn", true);
    window.location.reload();
  };

  const signupUser = async () => {
    const res = await axiosInstance.post(
      "http://localhost:4000/api/auth/signup",
      data
    );
    window.location.reload();
  };

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text fontSize="3xl" fontWeight={"bold"}>
              {use === "signin" ? "Sign In" : "Sign Up"}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="form-container">
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
                    <Input
                      placeholder="Email"
                      backgroundColor={"white"}
                      onChange={handleChange}
                      name="email"
                      value={data.email}
                    />
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
                        onChange={handleChange}
                        name="password"
                        value={data.password}
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </div>
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
                    <div>
                      <Text fontWeight={"bold"} mb="5px">
                        Firstname *
                      </Text>
                      <Input
                        placeholder="Firstname"
                        backgroundColor={"white"}
                        onChange={handleChange}
                        name="firstname"
                      />
                    </div>
                    <div>
                      <Text fontWeight={"bold"} mb="5px">
                        Lastname *
                      </Text>
                      <Input
                        placeholder="Lastname"
                        backgroundColor={"white"}
                        onChange={handleChange}
                        name="lastname"
                      />
                    </div>
                  </div>
                  <div>
                    <Text fontWeight={"bold"} mb="5px">
                      Email Address *
                    </Text>
                    <Input
                      placeholder="Email Address"
                      backgroundColor={"white"}
                      onChange={handleChange}
                      name="email"
                    />
                  </div>
                  <div>
                    <Text fontWeight={"bold"} mb="5px">
                      Phone Number *
                    </Text>
                    <InputGroup>
                      <InputLeftAddon children="+234" />
                      <Input
                        type="tel"
                        placeholder="Phone Number"
                        backgroundColor={"white"}
                        onChange={handleChange}
                        name="phoneNumber"
                      />
                    </InputGroup>
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
                        onChange={handleChange}
                        name="password"
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
                        onChange={handleChange}
                        name="confirm-password"
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </div>
                </Stack>
              )}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >
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
          </ModalBody>

          <ModalFooter>
            {use === "signin" ? (
              <Button
                backgroundColor="#b503a6"
                color="white"
                variant="outline"
                _hover={{ bg: "white", color: "#b503a6" }}
                onClick={signinUser}
              >
                Sign In
              </Button>
            ) : (
              <Button
                backgroundColor="#b503a6"
                color="white"
                variant="outline"
                _hover={{ bg: "white", color: "#b503a6" }}
                onClick={signupUser}
              >
                Sign Up
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
