import Image from "next/image";
import SiteButton from "./smallComponents/siteButton";
import { useModal } from "~/contexts/ModalContext";
import ConstructionModal from "./modals/constructionModal";

export default function ServicesIntro() {
  const { showModal } = useModal();

  return (
    <div className="ServicesContainer flex h-fit w-full max-w-[700px] flex-col-reverse items-center gap-4 self-center text-center lg:h-[380px] lg:max-w-none lg:flex-row lg:items-start lg:justify-between lg:text-start xl:gap-32">
      <div className="LeftContainer flex h-fit w-full flex-col items-center md:gap-0 lg:max-w-[50%] lg:items-start">
        <h3 className="SectionHeader font-sans text-xl font-semibold uppercase text-primaryDark">
          Transform
        </h3>
        <h2 className="Title mt-2 font-sans text-gray-800">
          Discover the power of holistic healing
        </h2>
        <p className="Description mt-3 text-slate-800">
          Experience the transformative power of Brainspotting, Energy Medicine,
          and Life Guidance. Our holistic approach helps you achieve balance,
          clarity, and personal growth.
        </p>
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
