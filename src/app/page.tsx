"use client";
import React, { useRef } from "react";
import HeroSection from "./components/hero";
// import FinalCTA from "./components/finalCTA";
// import ServicesIntro from "./components/servicesIntro";
// import ServicesOverview from "./components/servicesOverview";

const Home = () => {
  const heroRef = useRef(null);

  function scrollToRef(ref: React.RefObject<HTMLDivElement>) {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="Page m-auto max-w-[1728px]">
      <HeroSection scrollToRef={() => scrollToRef(heroRef)} />
      <div className="PageContent flex h-fit flex-col gap-10 px-4 py-8 sm:px-10 sm:py-20 lg:gap-20 xl:px-[144px]">
        {/* <ServicesIntro /> */}
        {/* <ServicesOverview /> */}
        {/* <FinalCTA ref={heroRef} /> */}
      </div>
    </div>
  );
};

export default Home;
