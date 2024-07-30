import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";

import blueLight from "@/public/blue-light.png";
import pinkLight from "@/public/pink-light.png";

export const NavAndHero = () => {
  return (
    <div className="w-[100%] xl:bg-bg-1 md:bg-bg-2 bg-bg-3 bg-cover bg-right bg-no-repeat gap-24 flex flex-col relative">
      <Navbar />
      <Hero />

      <img
        src={pinkLight.src}
        alt="blueLight"
        className="w-[500px] absolute top-[0px]"
      />
      <img
        src={blueLight.src}
        alt="pinkLight"
        className="w-[500px] absolute lg:-bottom-[500px] -bottom-[550px]  right-0 "
      />
    </div>
  );
};
