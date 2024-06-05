"use client";
type ButtonProps = {
  text: string;
  rounded: boolean;
  colorFill: boolean;
  addClasses?: string;
  size?: "sm" | "md" | "lg";
  onSubmit?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
};

const SiteButton = ({
  text,
  rounded,
  colorFill,
  addClasses,
  size,
  onSubmit,
  disabled,
  type,
}: ButtonProps) => {
  let buttonSize: string;

  switch (size) {
    case "sm":
      buttonSize = "sm:px-6 sm:py-3 px-4 py-3";
      break;
    case "md":
      buttonSize = "sm:w-40 sm:py-3 w-52 py-3";
      break;
    case "lg":
      buttonSize = "w-full h-[52px]";
      break;
    default:
      buttonSize = "sm:py-2 sm:px-4 py-1 px-2";
  }

  return (
    <button
      className={`SiteButton duration-400 font-sans text-sm shadow-sm transition-all hover:scale-105 hover:bg-gray-600 hover:text-primaryLight disabled:bg-gray-500 disabled:hover:cursor-not-allowed disabled:hover:text-white sm:text-base ${buttonSize} ${addClasses} ${rounded ? "rounded-full" : "rounded-sm"} ${colorFill ? "bg-primary text-white" : "border border-gray-800 text-gray-800"}`}
      type={type ?? "button"}
      onClick={onSubmit}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default SiteButton;