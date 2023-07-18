import React from "react";
import { Avatar, Text, Button, Switch } from "@chakra-ui/react";
import AvatarImage from "../../assets/images/restaurantCard.png";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { Divider } from "@chakra-ui/react";
import { AddPaymentForm } from "../utils/Forms/AddPaymentForm";
import { AddAddressForm } from "../utils/Forms/AddAddressForm";
import { Card, CardBody, CardFooter, Icon } from "@chakra-ui/react";
import { MdDelete, MdEdit, MdOutlineLogout } from "react-icons/md";
import { PersonalInfoEditForm } from "../utils/Forms/PersonalInfoEditForm";
import { CountryDropdown } from "react-country-region-selector";
import { axiosInstance } from "../utils/AxiosInstance";

export const Account = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [use, setUse] = React.useState("");
  const [havePayment, setHavePayment] = React.useState(true);
  const [haveAddress, setHaveAddress] = React.useState(true);
  const [country, setCountry] = React.useState("");
  const [data, setData] = React.useState({});
  const [modalData, setModelData] = React.useState({});

  const openModal = (use, data) => {
    setUse(use);
    setShowModal(true);
    setModelData(data);
  };

  const getUserInfo = async () => {
    const res = await axiosInstance.get("/auth/user");
    setData(res.data);
  };

  const handleCountryChange = (val) => {
    setCountry(val);
  };

  React.useEffect(() => {
    getUserInfo();
  }, []);

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
          <Button
            rightIcon={<MdEdit />}
            backgroundColor="#b503a6"
            color="white"
            variant="outline"
            _hover={{ bg: "white", color: "#b503a6" }}
            onClick={() => openModal("edit-personal-info", data)}
          >
            Edit
          </Button>
        </div>
        <div className="user-info">
          <Text fontSize="xl" color="#6c6d6d">
            Full Name
          </Text>
          <Text fontSize="xl">
            {data.firstName} {data.lastName}
          </Text>
        </div>
        <div className="user-info">
          <Text fontSize="xl" color="#6c6d6d">
            Email
          </Text>
          <Text fontSize="xl">{data.email}</Text>
        </div>
        <div className="user-info">
          <Text fontSize="xl" color="#6c6d6d">
            Phone Number
          </Text>
          <Text fontSize="xl">{data.phoneNumber}</Text>
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
            onClick={() => openModal("add-payment")}
          >
            Add
          </Button>
        </div>
        {!havePayment ? (
          <Text fontSize="md" color="#6c6d6d">
            No Payment details provided yet.
          </Text>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Card width={250} m={5}>
              <CardBody pb={0} pr={5} pl={5} pt={3}>
                <Text fontSize="xs" m={0}>
                  Card Number
                </Text>

                <Text fontSize="xs" m={0}>
                  {"**** **** **** 3423"}
                </Text>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 5,
                  }}
                >
                  <div>
                    <Text fontSize="xs" m={0}>
                      Valid Thru
                    </Text>
                    <Text fontSize="xs" m={0}>
                      {"02/23"}
                    </Text>
                  </div>
                  <div>
                    <Text fontSize="xs" m={0}>
                      CVV
                    </Text>
                    <Text fontSize="xs" m={0}>
                      {"***"}
                    </Text>
                  </div>
                </div>
              </CardBody>
              <CardFooter pb={3} pr={5} pl={5} pt={5}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Button onClick={() => openModal("edit-payment")}>
                    <Icon as={MdEdit} boxSize={5} color="#b503a6" />
                  </Button>
                  <Button>
                    <Icon as={MdDelete} boxSize={5} color="red" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        )}
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
            onClick={() => openModal("add-address")}
          >
            Add
          </Button>
        </div>
        {!haveAddress ? (
          <Text fontSize="md" color="#6c6d6d">
            No Address provided yet.
          </Text>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              width: "100%",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Card width={250} m={5}>
              <CardBody pb={0} pr={5} pl={5} pt={3}>
                <Text fontSize="xs" m={0}>
                  Street
                </Text>

                <Text fontSize="xs" m={0}>
                  {"skd skdhkwhw wkehhwke"}
                </Text>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 5,
                  }}
                >
                  <div>
                    <Text fontSize="xs" m={0}>
                      City
                    </Text>
                    <Text fontSize="xs" m={0}>
                      {"jshdsd"}
                    </Text>
                  </div>
                  <div>
                    <Text fontSize="xs" m={0}>
                      Postal Code
                    </Text>
                    <Text fontSize="xs" m={0}>
                      {"2323"}
                    </Text>
                  </div>
                </div>
                <Text fontSize="xs" m={0} mt={3}>
                  Country
                </Text>

                <Text fontSize="xs" m={0}>
                  {"sdfsd"}
                </Text>
              </CardBody>
              <CardFooter pb={3} pr={5} pl={5} pt={5}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Button onClick={() => openModal("edit-address")}>
                    <Icon as={MdEdit} boxSize={5} color="#b503a6" />
                  </Button>
                  <Button>
                    <Icon as={MdDelete} boxSize={5} color="red" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        )}
        <Divider />

        <div className="user-info">
          <Text fontSize="3xl" fontWeight={"bold"}>
            Settings
          </Text>
        </div>
        <div className="user-info">
          <Text fontSize="xl" color="#6c6d6d">
            Country
          </Text>
          <CountryDropdown
            value={country}
            onChange={(val) => handleCountryChange(val)}
            style={{
              width: "150px",
              backgroundColor: "#b503a6",
              color: "white",
              _hover: { bg: "white", color: "#b503a6" },
              height: "40px",
              borderRadius: "5px",
              padding: "10px",
            }}
          />
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
              rightIcon={<MdDelete />}
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
              rightIcon={<MdOutlineLogout />}
            >
              Sign out
            </Button>
          </Link>
        </div>
      </div>
      {showModal && (use === "add-payment" || use === "edit-payment") ? (
        <AddPaymentForm
          use={use}
          onClose={() => setShowModal(false)}
          isOpen={showModal}
        />
      ) : (
        <></>
      )}
      {showModal && (use === "add-address" || use === "edit-address") ? (
        <AddAddressForm
          use={use}
          onClose={() => setShowModal(false)}
          isOpen={showModal}
        />
      ) : (
        <></>
      )}
      {showModal && use === "edit-personal-info" ? (
        <PersonalInfoEditForm
          onClose={() => setShowModal(false)}
          isOpen={showModal}
          data={modalData}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
