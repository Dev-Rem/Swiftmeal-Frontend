import React, { Fragment, useEffect } from "react";
import { NavBar, Footer } from "../components/LayoutComponents/index";
import {
  Categories,
  Cities,
  Motivation,
  HomePageSearch,
} from "../components/HomPageComponents/index";

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
      <Categories />
      <Cities />
      <Motivation />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
