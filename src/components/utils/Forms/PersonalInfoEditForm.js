import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Text, Input, Stack, Button } from "@chakra-ui/react";
import { axiosInstance } from "../AxiosInstance";

export const PersonalInfoEditForm = (props) => {
  const [data, setData] = React.useState(props.data);

  const handleChange = (event) => {
    const val = event.target.value;
    const key = event.target.name;
    setData((prevState) => {
      return { ...prevState, [key]: val };
    });
  };
  const editPersonalInfo = async () => {
    const res = await axiosInstance.put("/auth/user", data);
    window.location.reload();
  };

  return (
    <div>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text fontSize="3xl" fontWeight={"bold"}>
              Edit Personal Info
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="form-container">
              <Text fontSize="lg">
                Kindly provide the necessary personal details
              </Text>
              <Text fontSize="sm">
                All field marked with asterisk (*) are required.
              </Text>
              <Stack spacing={5}>
                <div>
                  <Text fontWeight={"bold"} mb="5px">
                    Profile Photo *
                  </Text>
                  <input type="file" />
                </div>

                <div>
                  <Text fontWeight={"bold"} mb="5px">
                    First Name *
                  </Text>
                  <Input
                    placeholder="Full Name"
                    backgroundColor={"white"}
                    value={data.firstName}
                    name="firstName"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Text fontWeight={"bold"} mb="5px">
                    Last Name *
                  </Text>
                  <Input
                    placeholder="Full Name"
                    backgroundColor={"white"}
                    value={data.lastName}
                    name="lastName"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Text fontWeight={"bold"} mb="5px">
                    Email *
                  </Text>
                  <Input
                    placeholder="Email"
                    backgroundColor={"white"}
                    value={data.email}
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Text fontWeight={"bold"} mb="5px">
                    Phone Number *
                  </Text>
                  <Input
                    placeholder="Phone Number"
                    backgroundColor={"white"}
                    value={data.phoneNumber}
                    name="phoneNumber"
                    onChange={handleChange}
                  />
                </div>
              </Stack>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button
              backgroundColor="#b503a6"
              color="white"
              variant="outline"
              _hover={{ bg: "white", color: "#b503a6" }}
              onClick={() => editPersonalInfo()}
            >
              Edit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
