import { useState } from "react";
import { Services } from "../lib/services";
import ItemList from "./smallComponents/itemList";
import ImageWithOverlay from "./smallComponents/imageWithOverlay";

type ServiceKey = keyof typeof Services;

const selectedButtonStyles = {
  energyMedicine: "bg-secondaryBlue text-white shadow-md",
  lifeGuidance: "bg-tertiaryYellow text-gray-900 shadow-md",
  brainSpotting: "bg-primary text-white shadow-md",
};

export default function ServicesOverview() {
  const [selectedButton, setSelectedButton] =
    useState<ServiceKey>("energyMedicine");

  return (
    <div className="Container flex h-fit w-full flex-col rounded-md border border-gray-800 bg-neutral px-6 py-6 text-start shadow-themeShadow sm:px-12 sm:py-8 md:items-start md:p-8 lg:flex-col lg:justify-between">
      <h3 className="SectionTitle font-sans text-primaryDark">
        Let Us Be Your Guide
      </h3>
      <h2 className="Title mt-2 font-sans text-gray-800">
        Read More About Our Services
      </h2>
      <div className="BottomContainer mt-3 flex h-fit w-full flex-col justify-between md:flex-row md:items-start md:gap-6 lg:mt-5 lg:gap-10">
        <div className="LeftContainer flex h-fit w-full flex-col md:max-w-[50%] md:items-start lg:max-w-[55%] xl:max-w-[50%]">
          <div className="ImageContainer mb-4 flex justify-start md:hidden">
            {ImageWithOverlay(Services[selectedButton])}
          </div>
          <div className="ButtonContainer lg:w-fi mb-3 flex w-full flex-wrap justify-start gap-3 font-sans font-semibold text-white sm:flex-row sm:flex-nowrap md:flex-wrap md:justify-between lg:mb-5 lg:flex-nowrap lg:gap-4">
            {Object.keys(Services).map((key) => (
              <button
                key={key}
                className={`min-h-[45px] w-full rounded-md px-2 py-2 leading-5 shadow-sm transition-all duration-200 hover:scale-105 md:min-h-[60px] md:px-4 ${
                  selectedButton === key
                    ? selectedButtonStyles[key]
                    : "border-2 border-black bg-none text-black transition-transform duration-200"
                }`}
                onClick={() => setSelectedButton(key as ServiceKey)}
              >
                {Services[key as ServiceKey].button}
              </button>
            ))}
          </div>
          <h4 className="Title mt-2 font-sans text-gray-800">
            {Services[selectedButton].sectionTitle}
          </h4>
          <p className="Description mt-2 text-slate-800 lg:mt-5">
            {Services[selectedButton].description}
          </p>
          <div className="ListContainer hidden lg:block">
            <ItemList list={Services[selectedButton].bulletpoints} />
          </div>
        </div>
        <div className="RightContainer flex h-full flex-col">
          <div className="ImageContainer hidden justify-start md:flex">
            {ImageWithOverlay(Services[selectedButton])}
          </div>
        </div>
      </div>
    </div>
  );
}
