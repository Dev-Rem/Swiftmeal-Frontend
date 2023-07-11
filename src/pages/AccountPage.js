import React from "react";
import { Account } from "../components/AccountPage/Account";
import { Navbar } from "../components/utils/Navbar";
import { Footer } from "../components/utils/Footer";
export const AccountPage = () => {
  return (
    <div>
      <Navbar />
      <Account />
      <Footer />
    </div>
  );
};
