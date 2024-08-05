import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted"

const Home = () => {
  const data = {
    name: "Shahzad Store"
  }
  return <>
    <HeroSection myData={data} />;
    <Trusted />
    <Services />
  </>
};

export default Home;
