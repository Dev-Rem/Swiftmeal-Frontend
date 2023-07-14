import React from "react";
import { Account } from "../components/AccountPage/Account";
import { Navbar } from "../components/utils/Navbar";
import { Footer } from "../components/utils/Footer";
import { OrderHistory } from "../components/AccountPage/OrderHistory";

export const AccountPage = () => {
  return (
    <div>
      <Navbar />
      <Account />
      <Footer />
    </div>
  );
};

export const OrderHistoryPage = () => {
  return (
    <div>
      <Navbar />
      <OrderHistory />
      <Footer />
    </div>
  );
};
