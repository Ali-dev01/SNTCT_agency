"use client"
import React from "react";
import FaqSection from "../faq";
import LogosScroller from "./animated-logos";
import ExploreServices from "./explore-services";
import Growth from "./growth";
import HeroSection from "./hero-section";

const HomeSection = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <LogosScroller />
      <ExploreServices />
      <Growth />
      <FaqSection />
    </React.Fragment>
  );
};
export default HomeSection;
