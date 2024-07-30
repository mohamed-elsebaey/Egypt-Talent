import Image from "next/image";
import img from "@/public/founder.jpg";

export const AboutUs = () => {
  return (
    <div className="md:mx-[100px] ssm:mx-[30px] mx-[25px]">
      <div className="flex flex-col gap-[50px]">
        <div className="flex lg:flex-row flex-col lg:gap-[70px] gap-[30px] s480:text-left text-center">
          <h2 className="font-bold text-3xl whitespace-nowrap">Our Mission</h2>
          <p className="font-medium text-[16px]">
            At Emerging Experts, our mission is to identify and nurture the top
            1% of software developers and graphic designers in Egypt, providing
            them with unparalleled career opportunities and benefits.
          </p>
        </div>
        <div className="flex s480:flex-row s480:text-left text-center flex-col-reverse md:gap-[50px]  gap-[20px] items-center ">
          {/* <img src={img.src} alt="photo" /> */}
          <Image src={img} alt="our-founder" className="lg:w-[60%] md:w-[80%] w-[250px]"/>
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-3xl whitespace-nowrap ">
              Our Founder
            </h2>
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
