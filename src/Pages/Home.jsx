import React from "react";
import Container from "../Utility/Container";
import Hero from "../Components/Hero";
import RecentReviews from "../Components/RecentReviews";

const Home = () => {
  return (
    <div>
      <Container>
        <Hero></Hero>
        <RecentReviews></RecentReviews>
      </Container>
    </div>
  );
};

export default Home;
