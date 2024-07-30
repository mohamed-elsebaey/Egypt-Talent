// Nav / Footer

// Hero
// WhyChooseUs
// HowItWorks
// AboutUs

// LookingFor

import { Hero } from "@/components/Hero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Footer } from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import { AboutUs } from "@/components/AboutUs";
import { LookingFor } from "@/components/LookingFor";

// Footer
export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <AboutUs />
      {/* <div className="border-2 border-red-400">
      </div> */}
        <LookingFor />
      <Footer />
    </>
  );
}
