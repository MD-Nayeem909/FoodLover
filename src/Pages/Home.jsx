import React from "react";
import Container from "../Utility/Container";
import Hero from "../Components/Hero";
import RecentReviews from "../Components/RecentReviews";
import DiscoverFlavors from "../Components/DiscoverFlavors";

const Home = () => {
  
  return (
    <div>
      <Container>
        <Hero></Hero>
        <RecentReviews></RecentReviews>
        <DiscoverFlavors></DiscoverFlavors>
      </Container>
    </div>
  );
};

export default Home;
