"use client";
import React, { forwardRef } from "react";
import Image from "next/image";
import SiteButton from "./ui-components/siteButton";
import { useModal } from "~/contexts/ModalContext";
// import ContactModal from "./modals/contactModal";
// import ConstructionModal from "./modals/constructionModal";

const FinalCTA = forwardRef<HTMLDivElement>((props, ref) => {
  const { showModal } = useModal();

  return (
    <div ref={ref} className="finalCTA">
      <div className="CtaSection m-auto flex h-fit w-full flex-col-reverse gap-4 overflow-hidden rounded border border-gray-800 bg-neutral p-6 shadow-themeShadow sm:gap-4 sm:p-8 md:p-12 lg:h-[420px] lg:flex-row lg:p-0">
        <div className="LeftColumn flex h-full w-full flex-col items-start justify-center lg:w-[700px] lg:p-10">
          <div className="Content flex h-fit flex-col items-start justify-start gap-2 self-stretch lg:gap-6">
            <div className="Heading self-stretch font-sans text-2xl font-bold leading-tight text-gray-800 sm:text-4xl">
              Discover Personalized Healing Solutions
            </div>
            <div className="Text self-stretch font-normal leading-tight text-gray-700 sm:text-xl md:leading-relaxed">
              Experience the Power of Holistic Healing Methods for Your
              Well-being
            </div>
          </div>
          <div className="Actions inline-flex items-start justify-start gap-4 pt-8">
            <SiteButton
              text="Start Healing"
              rounded={false}
              colorFill={true}
              size="sm"
              onSubmit={() => showModal(<ContactModal />)}
            />
            <SiteButton
              text="About Us"
              rounded={false}
              colorFill={false}
              size="sm"
              onSubmit={() => showModal(<ConstructionModal />)}
            />
          </div>
        </div>
        <div className="ImageContainer relative flex h-full flex-grow lg:p-0">
          <Image
            className="Image inset-0 m-auto self-center rounded-lg object-cover lg:h-full lg:w-full lg:rounded-none"
            src="/final-cta-image.jpg"
            width={720}
            height={480}
            alt="Girl stares into canyon"
          />
        </div>
      </div>
    </div>
  );
});

FinalCTA.displayName = "finalCTA";

export default FinalCTA;
