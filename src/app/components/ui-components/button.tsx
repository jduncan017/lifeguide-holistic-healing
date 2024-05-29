"use client";
type ButtonProps = {
  text: string;
  rounded: boolean;
  colorFill: boolean;
  addClasses?: string;
  size?: "sm" | "md" | "lg";
  onSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  text,
  rounded,
  colorFill,
  addClasses,
  size,
  onSubmit,
}: ButtonProps) => {
  let buttonSize: string;

  switch (size) {
    case "sm":
      buttonSize = "w-fit h-fit";
      break;
    case "md":
      buttonSize = "sm:px-6 sm:py-3 px-4 py-3";
      break;
    case "lg":
      buttonSize = "w-full h-[52px]";
      break;
    default:
      buttonSize = "sm:py-2 sm:px-4 py-1 px-2";
  }

  return (
    <button
      className={`Button duration-400 font-sans text-sm shadow-sm transition-all hover:scale-105 hover:bg-gray-600 hover:text-primaryLight sm:text-base ${buttonSize} ${addClasses} ${rounded ? "rounded-full" : "rounded-sm"} ${colorFill ? "bg-primary text-white" : "border border-gray-800 text-gray-800"}`}
      type="button"
      onClick={onSubmit}
    >
      {text}
    </button>
  );
};

export default Button;
