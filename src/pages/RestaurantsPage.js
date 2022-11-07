import React, { Fragment, useEffect } from "react";
import Restaurants from "../components/Restaurants";
import { NavBar } from "../components";
import Footer from "../components/Footer";
function RestaurantsPage() {
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
      <Restaurants />
      <Footer />
    </Fragment>
  );
}

export default RestaurantsPage;
