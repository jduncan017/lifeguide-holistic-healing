"use client";
import React, { useRef } from "react";
import HeroSection from "./components/hero";
import FinalCTA from "./components/final-cta";

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
      <div className="PageContent flex h-fit flex-col gap-20 p-4 sm:px-10 sm:py-20 xl:px-[144px]">
        <FinalCTA ref={heroRef} />
      </div>
    </div>
  );
};

export default Home;
