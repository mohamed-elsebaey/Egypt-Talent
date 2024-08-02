import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    // <div className="fixed top-0 left-0 right-0 my-5 mx-[100px] rounded-full text-[#FFFFFF] bg-gradient-to-r from-customBlue to-customPink max-w-[1600px] z-30">
    <div className="my-5 ssm:mx-[100px] mx-[50px] rounded-full text-[#FFFFFF] bg-gradient-to-r from-customBlue to-customPink max-w-[1600px] z-30">
      <div className="sm:mx-[100px]">
        <div className="p-[10px] flex justify-between text-base font-semibold items-center">
          <ul className="lg:flex  justify-between items-center xl:w-[40%] w-[56%] hidden ">
            <li>
              <Link href="/#">
                <Image
                  src={logo}
                  alt="Check circle icon"
                  width={22}
                  height={45}
                />
              </Link>
            </li>
            <li>
              <Link href="/#Why-Us">Why Us</Link>
            </li>
            <li>
              <Link href="/#how-it-Works">How it Works</Link>
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
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSd1wJdFS7O-FKUQuuMpi7H9bzHFQtC9gQTQew1HSin0xE1Bkg/viewform?usp=sf_link"
            target="_blank"
          >
            <button className="px-[50px] py-2 bg-white/20 rounded-full whitespace-nowrap">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
