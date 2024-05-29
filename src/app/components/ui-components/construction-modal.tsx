"use client";

import ModalWrapper from "./modal-wrapper";
import Button from "./button";
import { useModal } from "~/contexts/ModalContext";

const ConstructionModal = () => {
  const { hideModal } = useModal();

  return (
    <ModalWrapper>
      <div className="404Container flex h-fit w-[500px] flex-col items-center gap-4 rounded-2xl p-5 px-8 py-8 text-center font-sans">
        <h1 className="Header text-3xl font-bold uppercase text-gray-800">
          {"Whoops!"}
        </h1>
        <h1 className="Header text-2xl font-bold uppercase text-gray-700">
          {"This page doesn't exist yet."}
        </h1>
        <p className="Description text-xl text-gray-600">
          {
            "The site is currently under construction, we'll get this working soon!"
          }
        </p>
        <Button
          text="Okay!"
          onSubmit={() => hideModal()}
          colorFill={true}
          rounded={true}
          size="md"
          addClasses="mt-4"
        ></Button>
      </div>
    </ModalWrapper>
  );
};

export default ConstructionModal;
