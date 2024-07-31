import Image from "next/image";
import button1 from "@/public/buttons/ButtonCTA-top.svg";
import button2 from "@/public/buttons/ButtonCTA-bottom.svg";
interface ButtonProps {
  x: boolean;
}

export const Button: React.FC<ButtonProps> = ({ x }) => {
  const buttom = x ? button1 : button2;
  return <Image src={buttom} alt="Check circle icon" width={310} />;
};
