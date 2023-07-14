import React from "react";
import { Heading, Text, Checkbox } from "@chakra-ui/react";

export const OrderHistory = () => {
  return (
    <div className="order-history-page-container">
      <div>
        <Heading
          as="h1"
          size="2xl"
          fontFamily={("Tangerine", "cursive")}
          color="#b503a6"
          mb={10}
        >
          Order History
        </Heading>
      </div>
      <div className="order-history-container">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Text>2023/07/14</Text>
          </div>
          <div>
            <Text>Restaurant name</Text>
          </div>
          <div>
            <Text>Szigeti ut 31</Text>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Text>Chicken burger</Text>
          </div>
          <div>
            <Text> &#8358;1,500</Text>
          </div>

          <div>
            <Checkbox defaultChecked>Delivered</Checkbox>
          </div>
        </div>
      </div>
    </div>
  );
};
