"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui-components/button";
import { useModal } from "~/contexts/ModalContext";
import ContactModal from "~/app/components/contact-modal";
import ConstructionModal from "./ui-components/construction-modal";

const NavBar = () => {
  const { showModal } = useModal();

  return (
    <nav className="NavBar fixed z-10 w-full max-w-[1728px] bg-blurWhite  font-sans shadow-md backdrop-blur-lg sm:absolute">
      <div className="Container mx-auto flex h-[74px] items-center justify-between px-3 sm:px-5">
        <Link
          href="/"
          className="transition-all duration-300 hover:scale-105 hover:contrast-125"
        >
          <div className="ImageWrapper rounded-md bg-white bg-opacity-50 px-4 py-2">
            <Image
              src="/nav-logo.png"
              alt="LifeGuide Holistic Healing Logo"
              width={190}
              height={50}
            />
          </div>
        </Link>
        <div className="LinksContainer hidden items-center gap-6 text-lg font-medium sm:flex">
          <button onClick={() => showModal(<ConstructionModal />)}>
            <p className="AboutText text-sm uppercase text-primaryDark transition-all duration-300 hover:text-gray-700 hover:underline md:text-base">
              About Us
            </p>
          </button>
          <button onClick={() => showModal(<ConstructionModal />)}>
            <p className="ServicesText text-sm uppercase text-primaryDark transition-all duration-300 hover:text-gray-700 hover:underline md:text-base">
              Services
            </p>
          </button>
          <button onClick={() => showModal(<ConstructionModal />)}>
            <p className="ArticlesText text-sm uppercase text-primaryDark transition-all duration-300 hover:text-gray-700 hover:underline md:text-base">
              Articles
            </p>
          </button>
          <Button
            colorFill={true}
            rounded={false}
            text="CONTACT"
            onSubmit={() => showModal(<ContactModal />)}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
