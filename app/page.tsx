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

// Footer
export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      {/* <div className="border-2 border-red-400">
      </div> */}
        <AboutUs />
      <Footer />
    </>
  );
}
