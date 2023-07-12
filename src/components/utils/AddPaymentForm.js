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
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { NumberInput, NumberInputField } from "@chakra-ui/react";

export const AddPaymentForm = (props) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const format = (val) => {
    if (val) {
      // Remove all non-digit characters
      const cleanValue = val.replace(/\D/g, "");

      // Split the value into groups of four characters
      const groups = cleanValue.match(/.{1,4}/g);

      // Join the groups with spaces between them
      return groups ? groups.join("  ") : "";
    }

    return "";
  };

  const parse = (val) => val.replace(/\s/g, "");

  const [value, setValue] = React.useState("");

  return (
    <div>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text fontSize="3xl" fontWeight={"bold"}>
              Payment Details
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="form-container">
              <Text fontSize="lg">
                Kindly provide the necessary card details
              </Text>
              <Text fontSize="sm">
                All field marked with asterisk (*) are required.
              </Text>
              <Stack spacing={5}>
                <div>
                  <Text fontWeight={"bold"} mb="5px">
                    Card Name *
                  </Text>
                  <Input placeholder="Card Name" backgroundColor={"white"} />
                </div>
                <div>
                  <Text fontWeight={"bold"} mb="5px">
                    Card Number *
                  </Text>
                  <NumberInput
                    value={format(value)}
                    onChange={(valueString) => setValue(parse(valueString))}
                  >
                    <NumberInputField
                      placeholder="0000 0000 0000 0000"
                      backgroundColor={"white"}
                      max={16}
                    />
                  </NumberInput>
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
                      Valid Thru *
                    </Text>
                    <Input placeholder="MM/YY" backgroundColor={"white"} />
                  </div>

                  <div style={{ marginLeft: 10 }}>
                    <Text fontWeight={"bold"} mb="5px">
                      CVV *
                    </Text>
                    <InputGroup size="md">
                      <Input
                        placeholder="CVV"
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
              Add Payment Method
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
