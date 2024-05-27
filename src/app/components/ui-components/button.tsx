type ButtonProps = {
  text: string;
  rounded: boolean;
  colorFill: boolean;
  addClasses?: string;
  size?: "sm" | "md" | "lg";
};

const Button = ({
  text,
  rounded,
  colorFill,
  addClasses,
  size,
}: ButtonProps) => {
  let buttonSize: string;

  switch (size) {
    case "sm":
      buttonSize = "w-fit h-fit";
      break;
    case "md":
      buttonSize = "w-52 h-[52px]";
      break;
    case "lg":
      buttonSize = "w-full h-[52px]";
      break;
    default:
      buttonSize = "py-2 px-4";
  }

  return (
    <button
      className={`Button font-sans uppercase hover:bg-white ${buttonSize} ${addClasses} ${rounded ? "rounded-full" : "rounded-sm"} ${colorFill ? "bg-primary text-white" : "border-offBlack text-offBlack border"}`}
    >
      {text}
    </button>
  );
};

export default Button;
