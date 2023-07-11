import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export const Account = () => {
  return (
    <div>
      <Tabs isFitted>
        <TabList>
          <Tab _selected={{ bg: "#E2E8F0" }}>Personal Info</Tab>
          <Tab _selected={{ bg: "#E2E8F0" }}>Addresses</Tab>
          <Tab _selected={{ bg: "#E2E8F0" }}>Payment</Tab>
          <Tab _selected={{ bg: "#E2E8F0" }}>Order history</Tab>
          <Tab _selected={{ bg: "#E2E8F0" }}>Settings</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <div></div>
          </TabPanel>
          <TabPanel>
            <div></div>
          </TabPanel>
          <TabPanel>
            <div></div>
          </TabPanel>
          <TabPanel>
            <div></div>
          </TabPanel>
          <TabPanel>
            <div></div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
