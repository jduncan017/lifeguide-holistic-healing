import Image from "next/image";

const NotFound = () => {
  return (
    <div className="NotFound flex h-dvh w-full flex-col items-center justify-center">
      <div className="ImageContainer absolute inset-0 -z-10 h-dvh overflow-hidden bg-gray-400 shadow-themeShadow">
        <Image
          className="BackgroundImage h-full w-full"
          src="/underwater.webp"
          alt="Background"
          width={1728}
          height={1138}
          priority
        />
      </div>
      <div className="404Container m-auto flex h-fit w-1/2 flex-col rounded-2xl bg-blurWhite p-5 px-8 py-8 text-center shadow-themeShadow backdrop-blur-md">
        <h1 className="Header text-3xl font-bold uppercase">
          {"Oops! This page doesn't seem to exist yet!"}
        </h1>
        <p className="Description text-xl">
          {
            "The site is currently under construction, we'll get this working soon!"
          }
        </p>
      </div>
    </div>
  );
};

export default NotFound;
