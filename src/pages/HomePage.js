import React, { Fragment, useEffect } from "react";
import { NavBar, Footer } from "../components/LayoutComponents/index";
import { HomePageSearch } from "../components/HomPageComponents/index";

function HomePage() {
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
      <HomePageSearch />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
