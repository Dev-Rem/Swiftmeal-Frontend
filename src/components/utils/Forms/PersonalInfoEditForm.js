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

export const PersonalInfoEditForm = (props) => {
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
                    Full Name *
                  </Text>
                  <Input placeholder="Full Name" backgroundColor={"white"} />
                </div>
                <div>
                  <Text fontWeight={"bold"} mb="5px">
                    Email *
                  </Text>
                  <Input placeholder="Email" backgroundColor={"white"} />
                </div>
                <div>
                  <Text fontWeight={"bold"} mb="5px">
                    Phone Number *
                  </Text>
                  <Input placeholder="Phone Number" backgroundColor={"white"} />
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
            >
              Edit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
