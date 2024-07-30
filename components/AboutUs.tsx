import Image from "next/image";
import img from "@/public/images/founder.JPG";

export const AboutUs = () => {
  return (
    <div className="mx-[100px] my-[50px]">
      <div className="flex flex-col gap-[50px]">
        <div className="flex flex-row gap-[70px]">
          <h2 className="font-bold text-3xl whitespace-nowrap">Our Mission</h2>
          <p className="font-medium text-[16px]">
            At Emerging Experts, our mission is to identify and nurture the top
            1% of software developers and graphic designers in Egypt, providing
            them with unparalleled career opportunities and benefits.
          </p>
        </div>
        <div className="flex flex-row gap-[50px] items-center">
          {/* <img src={img.src} alt="photo" /> */}
          <Image src={img} alt="our-founder" width={700}/>
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-3xl whitespace-nowrap">Our Founder</h2>
            <p className="font-medium text-[16px]">
              Meet our founder, Belal Massoud, who is dedicated to matching top
              talent with top opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
