import React, { Fragment, useEffect } from "react";
import { NavBar, Footer, HomePageComponent } from "../components/index";

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
      <HomePageComponent />
      <Footer />
    </Fragment>
  );
}

export default HomePage;
