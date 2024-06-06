"use client";

import ModalWrapper from "./modalWrapper";
import SiteButton from "../smallComponents/siteButton";
import { useModal } from "~/contexts/ModalContext";
import ContactModal from "./contactModal";

const ConstructionModal = () => {
  const { hideModal, showModal } = useModal();

  return (
    <ModalWrapper>
      <div className="404Container flex h-fit max-w-[500px] flex-col items-center gap-4 rounded-2xl text-center font-serif">
        <h2 className="Header text-3xl font-bold uppercase text-gray-800">
          {"Coming Soon!"}
        </h2>
        <p className="Description text-xl text-gray-600">
          {
            "This site is still under construction. For any questions, please reach out via our contact form!"
          }
        </p>
        <div className="ButtonContainer mt-4 flex h-fit w-fit flex-col gap-2 sm:flex-row sm:gap-4">
          <SiteButton
            text="Contact Us"
            onSubmit={() => showModal(<ContactModal />)}
            colorFill={true}
            rounded={false}
            size="md"
          ></SiteButton>
          <SiteButton
            text="Close"
            onSubmit={() => hideModal()}
            colorFill={true}
            rounded={false}
            size="md"
          ></SiteButton>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ConstructionModal;
