import React, { useContext } from "react";
import HeroSection from "./components/HeroSection";
import { AppContext, useProductContext } from "./context/productcontex";

const About = () => {

  const nickName = useProductContext()

  const data = {
    name: "Shahzad Ecommerce About Page"
  }
  return <><HeroSection myData={data} />
    {nickName}
  </>
  
};

//Costom Hooks




export default About;
