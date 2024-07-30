import icon from "@/public/icons/rightIcon.png";

import { Button } from "./Button";
import { LookingForIconCard } from "./LookingForIconCard";

export const LookingFor = () => {
  return (
    <div className="md:mx-[100px] ssm:mx-[30px] mx-[25px] my-[10px]">
      <div className="flex flex-col items-center gap-[25px]">
        <h2 className="font-bold text-[47px] leading-10">Overview</h2>
        <p className="text-center font-medium text-base">
          Emerging Experts is looking for the top 1% of software developers and
          graphic designers in Egypt. We seek individuals who are highly
          skilled, experienced, and have a proven track record of excellence.
        </p>
        <div className="flex gap-[10px] text-[#fff] flex-col lg:flex-row">
          <div className="p-[20px] flex flex-col items-center gap-[10px] bg-gradient-to-r from-[#5998EB] to-[#ADEFFF] lg:w-[50%] w-[100%]">
            <h2 className="font-bold text-3xl">Software Developers</h2>
            <p className="text-center font-medium text-base">
              We are looking for software developers who have:
            </p>
            <div className="flex flex-col items-start ">
              <LookingForIconCard
                number={true}
                dis="Extensive experience in software development"
              />
              <LookingForIconCard
                number={true}
                dis="Proficiency in multiple programming languages"
              />
              <LookingForIconCard
                number={true}
                dis="A strong portfolio of successful projects"
              />
              <LookingForIconCard
                number={true}
                dis="Excellent problem-solving skills"
              />
              <LookingForIconCard
                number={true}
                dis="Strong written and spoken English communication skills"
              />
            </div>
          </div>
          {/* ********************* */}
          <div className="p-[20px] flex flex-col items-center gap-[10px] bg-gradient-to-l from-[#4F277B] to-[#B04E91] lg:w-[50%] w-[100%] ">
            <h2 className="font-bold text-3xl">Graphic Designers</h2>
            <p className="text-center font-medium text-base">
              We are looking for graphic designers who have:
            </p>
            <div className="flex flex-col items-start ">
              <LookingForIconCard
                number={false}
                dis="Extensive experience in graphic design"
              />
              <LookingForIconCard
                number={false}
                dis="Proficiency in design software such as Adobe Creative Suite"
              />
              <LookingForIconCard
                number={false}
                dis="A strong portfolio of creative and impactful designs"
              />
              <LookingForIconCard
                number={false}
                dis="Excellent attention to detail"
              />
              <LookingForIconCard
                number={false}
                dis="Strong written and spoken English communication skills"
              />
            </div>
          </div>
        </div>
        <Button text="Apply Now" />
      </div>
    </div>
  );
};
