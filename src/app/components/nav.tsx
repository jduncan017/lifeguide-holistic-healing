import Image from "next/image";
import Link from "next/link";
import Button from "./ui-components/button";

const NavBar = () => {
  return (
    <nav className="NavBar bg-neutral absolute z-10 w-full max-w-[1728px] font-sans shadow-md">
      <div className="Container mx-auto flex h-[74px] items-center justify-between px-5">
        <Link
          href="/"
          className="transition-all duration-300 hover:scale-105 hover:contrast-125"
        >
          <Image
            src="/nav-logo.png"
            alt="LifeGuide Holistic Healing Logo"
            width={190}
            height={50}
          />
        </Link>
        <div className="LinksContainer flex items-center gap-6 text-lg">
          <Link href="/about">
            <p className="AboutText text-primaryDark hover:text-offBlack uppercase transition-all duration-300 hover:underline">
              About Us
            </p>
          </Link>
          <Link href="/services">
            <p className="ServicesText text-primaryDark hover:text-offBlack uppercase transition-all duration-300 hover:underline">
              Services
            </p>
          </Link>
          <Link href="/articles">
            <p className="ArticlesText text-primaryDark hover:text-offBlack uppercase transition-all duration-300 hover:underline">
              Articles
            </p>
          </Link>
          <Link href="/contact">
            <Button colorFill={true} rounded={false} text="Contact" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
