import { NavAndHero } from "@/components/NavAndHero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import { AboutUs } from "@/components/AboutUs";
import { LookingFor } from "@/components/LookingFor";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <NavAndHero/>
      <WhyChooseUs />
      <HowItWorks />
      <AboutUs />
      <LookingFor />
      <Footer />
    </div>
  );
}
