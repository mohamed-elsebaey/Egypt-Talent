import icon1 from "@/public/icons/icon-1.svg";
import icon2 from "@/public/icons/icon-2.svg";
import icon3 from "@/public/icons/icon-3.svg";
import icon4 from "@/public/icons/icon-4.svg";

import { IconCard } from "./iconCard";

export const WhyChooseUs = () => {
  return (
    <div className="md:px-[100px] ssm:px-[30px] px-[25px] flex flex-col items-center sm:py-[50px] py-[30px] gap-[60px]">
      <h2 className="font-bold text-3xl text-center">Why Choose Us</h2>
      <div className="px-[10px] flex gap-[30px] flex-col md:flex-row ">
        <IconCard
          icon={icon1}
          title="Top Salaries"
          dis="Earn the highest salaries in Egypt, designed to attract the best talent."
        />
        <IconCard
          icon={icon2}
          title="Job Security"
          dis="Enjoy long-term contracts and a stable career."
        />
        <IconCard
          icon={icon3}
          title="Health Insurance"
          dis="Comprehensive health insurance to keep you and your family protected."
        />
        <IconCard
          icon={icon4}
          title="Professional Growth"
          dis="Continuous learning and development opportunities."
        />
      </div>
    </div>
  );
};
