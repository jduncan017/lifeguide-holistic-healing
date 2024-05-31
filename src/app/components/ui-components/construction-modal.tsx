"use client";

import ModalWrapper from "./modal-wrapper";
import Button from "./button";
import { useModal } from "~/contexts/ModalContext";
import ContactModal from "../contact-modal";

const ConstructionModal = () => {
  const { hideModal, showModal } = useModal();

  return (
    <ModalWrapper>
      <div className="404Container flex h-fit w-[500px] flex-col items-center gap-4 rounded-2xl p-5 px-8 py-8 text-center font-serif">
        <h2 className="Header text-3xl font-bold uppercase text-gray-800">
          {"Coming Soon!"}
        </h2>
        <p className="Description text-xl text-gray-600">
          {
            "This site is still under construction. For any questions, please reach out via our contact form!"
          }
        </p>
        <div className="ButtonContainer flex h-fit w-fit gap-4">
          <Button
            text="Contact Us"
            onSubmit={() => showModal(<ContactModal />)}
            colorFill={true}
            rounded={false}
            size="md"
            addClasses="mt-4"
          ></Button>
          <Button
            text="Close"
            onSubmit={() => hideModal()}
            colorFill={true}
            rounded={false}
            size="md"
            addClasses="mt-4"
          ></Button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ConstructionModal;
