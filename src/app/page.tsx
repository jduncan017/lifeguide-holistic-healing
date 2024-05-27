import React from "react";
import HeroSection from "./components/hero";
import FinalCTA from "./components/final-cta";

const home = () => {
  return (
    <div className="Page m-auto max-w-[1728px]">
      <HeroSection />
      <div className="PageContent px-[144px]">
        <FinalCTA />
      </div>
    </div>
  );
};

export default home;
