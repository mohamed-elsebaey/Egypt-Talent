import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";

export const NavAndHero = () => {
  return (
    <div
      className="w-[100%] xl:bg-bg-1 md:bg-bg-2 bg-bg-3 bg-cover bg-right bg-no-repeat gap-24 flex flex-col relative"
    >
      <Navbar />
      <Hero />
    </div>
  );
};
