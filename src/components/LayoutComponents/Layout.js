import React, { Fragment, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = (props) => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Fragment>
      <NavBar />
      <Footer />
    </Fragment>
  );
};

export default Layout;
