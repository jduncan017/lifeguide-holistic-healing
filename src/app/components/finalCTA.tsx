"use client";
import React, { forwardRef } from "react";
import Image from "next/image";
import SiteButton from "./smallComponents/siteButton";
import { useModal } from "~/contexts/ModalContext";
import ContactModal from "./modals/contactModal";
import ConstructionModal from "./modals/constructionModal";

const FinalCTA = forwardRef<HTMLDivElement>((props, ref) => {
  const { showModal } = useModal();

  return (
    <div ref={ref} className="finalCTA">
      <div className="CtaSection m-auto flex h-fit w-full flex-col-reverse gap-4 overflow-hidden rounded border border-gray-800 bg-neutral p-6 shadow-themeShadow sm:gap-2 sm:p-8 md:p-12 lg:h-[420px] lg:flex-row lg:p-0 xl:h-[380px]">
        <div className="LeftColumn flex h-full w-full flex-col items-start lg:w-[700px] lg:p-10">
          <div className="Content flex h-fit flex-col items-start justify-start gap-2 self-stretch lg:gap-4">
            <h3 className="SectionHeader font-sans text-xl font-semibold uppercase text-primaryDark">
              Begin Your Journey
            </h3>
            <h2 className="Heading font-sans text-gray-800">
              Discover Personalized Healing Solutions
            </h2>
            <p className="Text text-gray-800">
              Experience the Power of Holistic Healing Methods for Your
              Well-being
            </p>
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
            className="Image inset-0 h-full w-full self-center rounded-lg object-cover lg:rounded-none"
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
