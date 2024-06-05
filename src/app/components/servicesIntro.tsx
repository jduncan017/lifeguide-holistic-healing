import Image from "next/image";
import SiteButton from "./ui-components/siteButton";
import { useModal } from "~/contexts/ModalContext";
import ConstructionModal from "./modals/constructionModal";

export default function ServicesIntro() {
  const { showModal } = useModal();

  return (
    <div className="ServicesContainer flex h-fit w-full flex-col-reverse items-center gap-4 text-center lg:h-[380px] lg:flex-row lg:items-start lg:justify-between lg:text-start xl:gap-32">
      <div className="LeftContainer flex h-fit w-full flex-col items-center lg:max-w-[50%] lg:items-start">
        <div className="Transform font-sans text-xl font-semibold uppercase text-primaryDark">
          Transform
        </div>
        <div className="Title mt-2 font-sans text-4xl font-extrabold uppercase leading-tight text-gray-800">
          Discover the power of holistic healing
        </div>
        <div className="Description mt-5 text-xl capitalize text-slate-800">
          Experience the transformative power of Brainspotting, Energy Medicine,
          and Life Guidance. Our holistic approach helps you achieve balance,
          clarity, and personal growth.
        </div>
        <SiteButton
          text="View Servies"
          rounded={false}
          colorFill={true}
          size="md"
          addClasses="mt-4 lg:mt-12 xl:mt-16"
          onSubmit={() => showModal(<ConstructionModal />)}
        />
      </div>
      <Image
        className="ZenImage h-auto w-2/3 max-w-[350px] lg:h-full lg:w-auto"
        src="/zen-photo.png"
        alt="Zen image"
        width={300}
        height={369}
      />
    </div>
  );
}
