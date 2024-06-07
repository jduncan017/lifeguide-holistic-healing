import Image from "next/image";
import { useModal } from "~/contexts/ModalContext";
import ConstructionModal from "../modals/constructionModal";
import SiteButton from "./siteButton";
import type { ServiceItem } from "~/app/lib/services";

export default function ImageWithOverlay(contentInfo: ServiceItem) {
  const { showModal } = useModal();

  return (
    <div className="ImageWithOverlay relative aspect-square w-full justify-center overflow-hidden rounded-md border shadow-md md:max-w-[450px]">
      <div className="ImageOverlay absolute bottom-[8%] right-0 flex w-[90%] flex-col items-start gap-6 xl:w-[80%] xl:gap-10">
        <div className="ImageTitle flex w-full items-center rounded-l-sm bg-neutralLight px-4 py-2 sm:py-3 lg:px-6 lg:py-4">
          <p className="ImageTitleText text-start capitalize">
            {contentInfo.imageTitle}
          </p>
        </div>
        <SiteButton
          text="Learn More"
          size="sm"
          addClasses="font-medium"
          colorFill={"variable"}
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
