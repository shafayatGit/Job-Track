import React from "react";
import Hero from "../Components/Hero";
import CardContainer from "../Components/CardContainer";
import Carousel from "../Components/Carousel";
import TopCatagory from "../Components/TopCatagory";
import Platform from "../Components/Platform";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <CardContainer></CardContainer>
      <TopCatagory></TopCatagory>
      <Platform></Platform>
    </div>
  );
};

export default Home;
