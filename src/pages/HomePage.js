import React from "react";
import { Navbar } from "../components/utils/Navbar";
import { Searchbar } from "../components/HomePage/Searchbar";
import { Sections } from "../components/HomePage/Sections";
import { CitySearch } from "../components/HomePage/CitySearch";
import { AboutUs } from "../components/HomePage/AboutUs";
import { Footer } from "../components/HomePage/Footer";
export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <Sections />
      <CitySearch />
      <AboutUs />
      <Footer />
    </div>
  );
};
