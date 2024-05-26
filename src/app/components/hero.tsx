import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="HeroSection relative min-h-screen">
      <div className="BackgroundImage absolute inset-0">
        <Image
          src="/hero-background.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="TitleSection from-heroPink via-heroOrange to-heroStone m-auto h-fit w-[705px] rounded-bl-2xl rounded-br-2xl bg-gradient-to-b text-center shadow backdrop-blur-md">
        <Image
          className="Logo mx-auto pt-16"
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
          <button className="CTA bg-primary hover:bg-primaryDark mb-20 mt-10 h-[52px] w-52 rounded-full font-sans uppercase text-white">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
