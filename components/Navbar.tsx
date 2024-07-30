import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    // <div className="fixed top-0 left-0 right-0 my-5 mx-[100px] rounded-full text-[#FFFFFF] bg-gradient-to-r from-customBlue to-customPink max-w-[1600px] z-30">
    <div className="my-5 ssm:mx-[100px] mx-[50px] rounded-full text-[#FFFFFF] bg-gradient-to-r from-customBlue to-customPink max-w-[1600px] z-30">
      <div className="sm:mx-[100px]">
        <div className="p-[10px] flex justify-between text-base font-semibold items-center">
          <ul className="lg:flex  justify-between xl:w-[40%] w-[56%] hidden">
            <li>
              <Link href="/#Why-Us">Why Us</Link>
            </li>
            <li>
              <Link href="/#its-Works">How its Works</Link>
            </li>
            <li>
              <Link href="/#About-Us">About Us</Link>
            </li>
            <li>
              <Link href="/#Ready">Ready?</Link>
            </li>
          </ul>
          <div className="lg:hidden">
            <Menu className="cursor-pointer" />
          </div>
          <button className="px-[50px] py-2 bg-white/20 rounded-full whitespace-nowrap">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
