import icon1 from "@/public/icons/Icon-1.png";
import icon2 from "@/public/icons/Icon-2.png";
import icon3 from "@/public/icons/Icon-3.png";
import icon4 from "@/public/icons/Icon-4.png";
import { IconCard } from "./iconCard";

export const WhyChooseUs = () => {
  return (
    <div className="md:px-[100px] ssm:px-[30px] px-[25px] flex flex-col items-center sm:py-[50px] py-[30px] gap-[60px]">
      <h2 className="font-bold text-3xl text-center">Why Choose Us</h2>
      <div className="px-[10px] flex gap-[30px] flex-col md:flex-row ">
        <IconCard
          icon={icon1.src}
          title="Top Salaries"
          dis="Earn the highest salaries in Egypt, designed to attract the best talent."
        />
        <IconCard
          icon={icon2.src}
          title="Job Security"
          dis="Enjoy long-term contracts and a stable career."
        />
        <IconCard
          icon={icon3.src}
          title="Health Insurance"
          dis="Comprehensive health insurance to keep you and your family protected."
        />
        <IconCard
          icon={icon4.src}
          title="Professional Growth"
          dis="Continuous learning and development opportunities."
        />
      </div>
    </div>
  );
};
