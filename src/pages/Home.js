import React from "react";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Cards routeName="posts" />
    </>
  );
};

export default Home;
