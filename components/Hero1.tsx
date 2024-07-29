import Image from "next/image";
import Background from "@/public/Background.jpg";

const Hero = () => {
  return (
    <div
      className="bg-contain bg-center w-full "
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundRepeat: "no-repeat",
        marginTop: -100,
      }}
    >
      <div className=" p-96 text-black text-center text-4xl font-bold">
        Hello
      </div>
    </div>
  );
};

export default Hero;
