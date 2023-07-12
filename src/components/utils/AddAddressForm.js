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
import {
  Text,
  Input,
  Stack,
  Button,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
export const AddAddressForm = (props) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text fontSize="3xl" fontWeight={"bold"}>
              Add New Address
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="form-container">
              <Text fontSize="lg">
                Kindly provide the necessary address details
              </Text>
              <Text fontSize="sm">
                All field marked with asterisk (*) are required.
              </Text>
              <Stack spacing={5}>
                <div>
                  <Text fontWeight={"bold"} mb="5px">
                    Street *
                  </Text>
                  <Input placeholder="Street" backgroundColor={"white"} />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ marginRight: 10 }}>
                    <Text fontWeight={"bold"} mb="5px">
                      City *
                    </Text>
                    <Input placeholder="City" backgroundColor={"white"} />
                  </div>
                  <div style={{ marginLeft: 10 }}>
                    <Text fontWeight={"bold"} mb="5px">
                      Postal Code *
                    </Text>
                    <Input
                      placeholder="Postal Code"
                      backgroundColor={"white"}
                    />
                  </div>
                </div>

                <div>
                  <Text fontWeight={"bold"} mb="5px">
                    Country *
                  </Text>
                  <Input placeholder="Country" backgroundColor={"white"} />
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
              Add Address
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
