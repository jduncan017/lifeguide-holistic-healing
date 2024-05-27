import Image from "next/image";
import Link from "next/link";
import Button from "./ui-components/button";

const HeroSection = () => {
  return (
    <div className="HeroSection relative min-h-screen">
      <div className="ImageContainer shadow-themeShadow absolute inset-0 h-dvh overflow-hidden">
        <Image
          className="BackgroundImage h-full w-full"
          src="/hero-background.png"
          alt="Background"
          width={1728}
          height={1138}
          priority
        />
      </div>
      <div className="TitleSection shadow-themeShadow from-heroPink via-heroOrange to-heroStone m-auto h-fit w-[705px] rounded-bl-2xl rounded-br-2xl bg-gradient-to-b text-center backdrop-blur-md">
        <Image
          className="Logo mx-auto w-auto pt-16"
          src="/logo-with-glow.png"
          alt="LifeGuide Logo"
          width={595}
          height={407}
        />
        <p className="Description text-offBlack m-auto w-[515px] text-3xl uppercase">
          A path to find a greater you. Clear your mind and let go of
          subconscious stress.
        </p>
        <Link href="/about">
          <Button
            rounded={true}
            text="Learn More"
            colorFill={false}
            addClasses="mb-20 mt-10"
            size="md"
          />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
