"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteButton from "./smallComponents/siteButton";
import { useModal } from "~/contexts/ModalContext";
import ContactModal from "./modals/contactModal";
import ConstructionModal from "./modals/constructionModal";
import HamburgerIcon from "./smallComponents/hamburgerMenu/hamburgerIcon";

const NavBar = () => {
  const [mobileActive, setMobileActive] = useState(false);

  const { showModal } = useModal();

  function toggleMenu() {
    setMobileActive(!mobileActive);
  }

  const links = [
    { text: "About Us" },
    { text: "Services" },
    { text: "Articles" },
  ];

  const renderMenu = () => {
    return (
      <div className="LinksContainer flex flex-col gap-6 px-16 pt-8 sm:flex-row sm:items-center sm:gap-3 sm:p-0 md:gap-6">
        {links.map((link, index) => (
          <button
            key={index}
            onClick={() => {
              showModal(<ConstructionModal />);
              setMobileActive(false);
            }}
          >
            <p className="AboutText text-2xl uppercase text-primaryDark transition-all duration-300 hover:text-gray-700 hover:underline sm:text-base sm:text-white md:text-xl">
              {link.text}
            </p>
          </button>
        ))}

        {/* Contact SiteButton */}
        <SiteButton
          colorFill={true}
          rounded={mobileActive}
          text="CONTACT"
          onSubmit={() => {
            setMobileActive(false);
            showModal(<ContactModal />);
          }}
          size="sm"
        />
      </div>
    );
  };

  return (
    <nav className="NavContainer">
      <div className="NavBar fixed z-30 hidden w-full max-w-[1728px] overflow-hidden bg-blurWhite font-sans shadow-md backdrop-blur-lg backdrop-filter sm:absolute sm:block">
        <div className="Container mx-auto flex h-[74px] items-center justify-between px-3 md:px-5">
          <Link
            href="/"
            className="transition-all duration-300 hover:scale-105 hover:contrast-125"
          >
            <Image
              src="/logo-wide-black.webp"
              alt="LifeGuide Holistic Healing Logo"
              width={190}
              height={50}
            />
          </Link>
          {renderMenu()}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          ${mobileActive ? "h-[360px] rounded-xl" : "h-[74px]"} ${"MobileNav fixed z-30 flex w-full flex-col overflow-hidden bg-blurWhite px-6 py-3 font-sans shadow-md backdrop-blur-lg backdrop-filter transition-all duration-500 sm:hidden"}
        `}
      >
        <div className="NavBar flex w-full items-center justify-between">
          <Link
            href="/"
            className="transition-all duration-300 hover:scale-105 hover:contrast-125"
          >
            <Image
              src="/logo-wide-black.webp"
              alt="LifeGuide Holistic Healing Logo"
              width={190}
              height={50}
            />
          </Link>
          <HamburgerIcon onToggleMenu={toggleMenu} menuOpen={mobileActive} />
        </div>
        {mobileActive && renderMenu()}
      </div>
    </nav>
  );
};

export default NavBar;
