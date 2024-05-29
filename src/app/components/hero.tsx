"use client";
import Image from "next/image";
import Button from "./ui-components/button";

interface HeroSectionProps {
  scrollToRef: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToRef }) => {
  return (
    <div className="HeroSection relative flex flex-col items-center p-2 pt-[85px] sm:min-h-screen sm:p-0">
      <div className="ImageContainer absolute inset-0 hidden overflow-hidden shadow-themeShadow sm:block sm:h-dvh">
        <Image
          className="BackgroundImage h-full w-full"
          src="/hero3.jpg"
          alt="Background"
          width={1728}
          height={1138}
          priority
        />
      </div>
      <div className="TitleSection h-fit max-w-[705px] rounded bg-gradient-to-b from-heroPink via-heroOrange to-heroStone p-4 text-center shadow-themeShadow backdrop-blur-md sm:m-auto sm:w-[60%] sm:rounded-2xl sm:p-10 lg:w-1/2">
        <Image
          className="Logo mx-auto w-auto"
          src="/logo-with-glow.png"
          alt="LifeGuide Logo"
          width={595}
          height={407}
        />
        <p className="Description m-auto w-full max-w-[450px] text-lg font-light uppercase leading-6 text-gray-800 sm:text-xl lg:text-3xl">
          A path to find a greater you. Clear your mind and let go of
          subconscious stress.
        </p>
        <Button
          rounded={true}
          text="LEARN MORE"
          colorFill={true}
          addClasses="mb-4 mt-10"
          size="md"
          onSubmit={() => scrollToRef()}
        />
      </div>
      <div className="BackgroundLighting bottom-0 -z-10 h-full w-full rounded-lg bg-tertiaryYellow blur-[50px] sm:absolute sm:h-[340px]"></div>
    </div>
  );
};

export default HeroSection;
