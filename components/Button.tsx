import Image from "next/image";
import button1 from "@/public/buttons/ButtonCTA-top.svg";
import button2 from "@/public/buttons/ButtonCTA-bottom.svg";
import Link from "next/link";
interface ButtonProps {
  x: boolean;
}

export const Button: React.FC<ButtonProps> = ({ x }) => {
  const buttom = x ? button1 : button2;
  return (
    <Link
      href="https://docs.google.com/forms/d/e/1FAIpQLSd1wJdFS7O-FKUQuuMpi7H9bzHFQtC9gQTQew1HSin0xE1Bkg/viewform?usp=sf_link"
      target="_blank"
    >
      <Image src={buttom} alt="Check circle icon" width={310} />
    </Link>
  );
};
