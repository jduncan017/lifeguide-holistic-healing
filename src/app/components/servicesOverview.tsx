import Image from "next/image";
// import SiteButton from "./ui-components/siteButton";
// import { useModal } from "~/contexts/ModalContext";
// import ConstructionModal from "./modals/constructionModal";

export default function ServicesOverview() {
  // const { showModal } = useModal();

  return (
    <div className="Container flex h-fit w-full flex-col-reverse items-center text-center lg:flex-col lg:items-start lg:justify-between lg:text-start">
      <div className="Transform font-sans text-xl font-semibold uppercase text-primaryDark">
        Let Us Be Your Guide
      </div>
      <div className="Title mt-2 font-sans text-4xl font-extrabold uppercase leading-tight text-gray-800">
        Read More About Our Services
      </div>
      <div className="BottomContainer flex h-fit w-full items-center justify-between gap-20 lg:items-start">
        <div className="LeftContainer flex h-fit w-full flex-col items-center lg:max-w-[50%] lg:items-start">
          <div className="ButtonContainer flex w-fit justify-between gap-4 py-5 font-sans font-medium text-white">
            <button className="rounded-md bg-gray-900 px-4 py-4 hover:bg-secondaryBlue">
              Energy Medicine
            </button>
            <button className="rounded-md bg-gray-900 px-4 py-4 hover:bg-tertiaryYellow hover:text-gray-900">
              Brain Spotting
            </button>
            <button className="rounded-md bg-gray-900 px-4 py-4 hover:bg-primary">
              Life Guidance
            </button>
          </div>
          <div className="Title mt-2 font-sans text-3xl font-bold capitalize leading-tight text-gray-800">
            Unlock Your Full Potential With Energy Medicine
          </div>
          <div className="Description mt-5 text-xl capitalize text-slate-800">
            {`Our Energy Medicine service utilizes the powerful Energy Matrix
            Clearing System to help clients release energetic blockages, restore
            balance, and achieve optimal well-being. By working with the body's
            energy field, we address the root causes of physical, emotional, and
            spiritual imbalances, promoting deep healing and transformation.`}
          </div>
          <ul className="ItemNotes">
            <li className="ListItem mt-4 flex gap-2 text-xl">
              <Image
                className="Lead"
                src="/leaf.png"
                alt="accent leaf"
                width={24}
                height={24}
              />
              <p className="ListText">Release Energy Blockages</p>
            </li>
            <li className="ListItem mt-4 flex gap-2 text-xl">
              <Image
                className="Lead"
                src="/leaf.png"
                alt="accent leaf"
                width={24}
                height={24}
              />
              <p className="ListText">Restore Balance and Harmony</p>
            </li>
            <li className="ListItem mt-4 flex gap-2 text-xl">
              <Image
                className="Lead"
                src="/leaf.png"
                alt="accent leaf"
                width={24}
                height={24}
              />
              <p className="ListText">Find Mental Clarity</p>
            </li>
          </ul>
        </div>
        <div className="ImageContainer h-[500px] w-[500px] overflow-hidden rounded-md">
          <Image
            className="ZenImage h-full w-full object-cover"
            src="/blue-ocean.jpg"
            alt="Zen image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
