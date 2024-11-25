import Image from "next/image";
import backgroundImage from "../../../public/about.webp";
import logoImage from "../../../public/logo.webp";

const AboutTitle = () => {
  return (
    <div className="relative mb-[10%] mt-[8%] flex w-full flex-col items-center md:mb-0 md:mt-0">
      <Image
        src={backgroundImage}
        alt="Background"
        className="w-full scale-125 object-contain md:scale-100"
      />
      <div className="absolute top-[-20%] mt-[15%] flex flex-col items-center md:top-0 md:mt-[10%]">
        <Image
          src={logoImage}
          alt="Logo"
          className="w-[35vw] rounded-full border-2 border-hearts-blue object-contain shadow-hearts md:mt-[4%] md:w-[23vw]"
        />
        <p className="mt-[2%] font-title text-[7vw] font-extralight text-hearts-light-brown md:text-[3.5vw]">
          About Us
        </p>
        <div className="h-[2px] w-[20%] bg-hearts-light-brown md:h-[3px] md:w-[8%]" />
      </div>
    </div>
  );
};

export default AboutTitle;
