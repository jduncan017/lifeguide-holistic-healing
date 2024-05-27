import React from "react";
import Image from "next/image";

const FinalCTA = () => {
  return (
    <div>
      <div className="CtaSection shadow-themeShadow m-auto my-20 inline-flex h-fit w-full flex-col items-center justify-start gap-20 rounded border border-black bg-orange-50">
        <div className="Card inline-flex items-center justify-start self-stretch border border-black">
          <div className="Column inline-flex shrink grow basis-0 flex-col items-start justify-center gap-6 p-12">
            <div className="Content flex h-40 flex-col items-start justify-start gap-6 self-stretch">
              <div className="Heading self-stretch font-['Montserrat'] text-5xl font-bold leading-10 text-slate-950">
                Discover Personalized Healing Solutions
              </div>
              <div className="Text font-['Playfair Display'] self-stretch text-lg font-normal leading-relaxed text-black">
                Experience the Power of Holistic Healing Methods for Your
                Well-being
              </div>
            </div>
            <div className="Actions inline-flex items-start justify-start gap-4 pt-4">
              <div className="StylePrimarySmallFalseDarkModeFalseIconPositionNoIcon flex items-center justify-center gap-2 bg-pink-700 px-6 py-3">
                <div className="Button font-['Roboto'] text-base font-normal leading-normal text-stone-50">
                  Inquire
                </div>
              </div>
              <div className="StyleSecondarySmallFalseDarkModeFalseIconPositionNoIcon flex items-center justify-center gap-2 border border-slate-950 px-6 py-3">
                <div className="Button font-['Roboto'] text-base font-normal leading-normal text-slate-950">
                  Learn More
                </div>
              </div>
            </div>
          </div>
          <Image
            className="Image"
            src="/final-cta-image.jpg"
            width={720}
            height={480}
            alt="Girl stares into canyon"
          />
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;
