import { useState } from "react";
import { Services } from "../lib/services";
import ItemList from "./smallComponents/itemList";
import ImageWithOverlay from "./smallComponents/imageWithOverlay";

type ServiceKey = keyof typeof Services;

const selectedButtonStyles = {
  energyMedicine: "bg-secondaryBlue text-white scale-105",
  lifeGuidance: "bg-tertiaryYellow text-gray-900 scale-105",
  brainSpotting: "bg-primary text-white scale-105",
};

export default function ServicesOverview() {
  const [selectedButton, setSelectedButton] =
    useState<ServiceKey>("energyMedicine");

  return (
    <div className="Container flex h-fit w-full flex-col items-center text-center md:items-start md:text-start lg:flex-col lg:justify-between">
      <div className="SectionTitle font-sans text-xl font-semibold uppercase text-primaryDark">
        Let Us Be Your Guide
      </div>
      <div className="Title mt-2 font-sans text-4xl font-extrabold uppercase leading-tight text-gray-800">
        Read More About Our Services
      </div>
      <div className="BottomContainer mt-3 flex h-fit w-full flex-col items-center justify-between gap-6 md:flex-row md:items-start lg:mt-5 lg:items-start lg:gap-10">
        <div className="LeftContainer flex h-fit w-full flex-col items-center md:max-w-[50%] md:items-start lg:max-w-[55%] xl:max-w-[50%]">
          <div className="ButtonContainer mb-3 flex w-full flex-wrap items-center justify-center gap-3 font-sans font-semibold text-white sm:flex-row sm:flex-nowrap md:justify-between lg:mb-5 lg:w-fit lg:gap-4">
            {Object.keys(Services).map((key) => (
              <button
                key={key}
                className={`min-h-[60px] rounded-md px-4 py-2 leading-5 ${
                  selectedButton === key
                    ? selectedButtonStyles[key]
                    : "border-2 border-black bg-none text-black transition-transform duration-200 hover:scale-105"
                }`}
                onClick={() => setSelectedButton(key as ServiceKey)}
              >
                {Services[key as ServiceKey].button}
              </button>
            ))}
          </div>
          <div className="ImageContainer flex justify-center md:hidden">
            {ImageWithOverlay(Services[selectedButton])}
          </div>
          <div className="Title mt-2 font-sans text-2xl font-bold capitalize leading-tight text-gray-800 lg:text-3xl">
            {Services[selectedButton].sectionTitle}
          </div>
          <div className="Description mt-2 text-xl font-normal capitalize leading-6 text-slate-800 lg:mt-5 lg:leading-7">
            {Services[selectedButton].description}
          </div>
          <div className="ListContainer hidden lg:block">
            <ItemList list={Services[selectedButton].bulletpoints} />
          </div>
        </div>
        <div className="RightContainer flex h-fit flex-col">
          <div className="ImageContainer hidden justify-center md:flex">
            {ImageWithOverlay(Services[selectedButton])}
          </div>
        </div>
      </div>
    </div>
  );
}
