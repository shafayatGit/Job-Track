import React from "react";
import Hero from "../Components/Hero";
import CardContainer from "../Components/CardContainer";
import Carousel from "../Components/Carousel";
import TopCatagory from "../Components/TopCatagory";
import Platform from "../Components/Platform";
import { useLoaderData } from "react-router";
import Reviews from "../Components/Reviews";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>JobTrack | Home</title>
      </Helmet>
      <Hero></Hero>
      <CardContainer data={data}></CardContainer>
      <Reviews></Reviews>
      <TopCatagory></TopCatagory>
      <Platform></Platform>
    </div>
  );
};

export default Home;
