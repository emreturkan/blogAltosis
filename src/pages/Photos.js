import React from "react";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
const Photos = () => {
  return (
    <>
      <Navbar />
      <Cards routeName="photos?_start=0&_limit=18" />
    </>
  );
};

export default Photos;
