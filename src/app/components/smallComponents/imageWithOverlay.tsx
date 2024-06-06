import Image from "next/image";
import { useModal } from "~/contexts/ModalContext";
import ConstructionModal from "../modals/constructionModal";
import SiteButton from "./siteButton";
import type { ServiceItem } from "~/app/lib/services";

export default function ImageWithOverlay(contentInfo: ServiceItem) {
  const { showModal } = useModal();

  return (
    <div className="ImageWithOverlay relative aspect-square w-[90%] justify-center overflow-hidden rounded-md md:max-w-[450px]">
      <div className="ImageOverlay absolute bottom-[8%] right-0 flex w-[90%] flex-col items-start gap-6 xl:w-[80%] xl:gap-10">
        <div className="ImageTitle flex h-20 items-center bg-neutralLight px-6">
          <p className="ImageTitleText text-start text-xl capitalize xl:text-2xl">
            {contentInfo.imageTitle}
          </p>
        </div>
        <SiteButton
          text="Learn More"
          size="md"
          addClasses="border-white text-white"
          colorFill={false}
          rounded={false}
          onSubmit={() => showModal(<ConstructionModal />)}
        />
      </div>
      <Image
        className="ZenImage h-full w-full object-cover"
        src={contentInfo.image}
        alt="Zen image"
        width={500}
        height={500}
      />
    </div>
  );
}
