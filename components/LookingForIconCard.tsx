import Image from "next/image";
import checkCirclePink from "@/public/icons/check-circle-pink.svg";
import checkCircleblue from "@/public/icons/check-circle-blue.svg";
interface IconCardProps {
  number: boolean;
  dis: string;
}

export const LookingForIconCard: React.FC<IconCardProps> = ({
  number,
  dis,
}) => {
  const icon = number ? checkCircleblue : checkCirclePink;
  return (
    <div className="p-[10px] flex gap-[50px] items-center min-h-16">
      <div className="bg-[#fff] min-w-[35px] min-h-[35px] rounded-[5px] flex items-center justify-center">
        <Image src={icon} alt="Check circle icon" width={24} />
      </div>
      <h3 className="font-bold text-xl">{dis}</h3>
    </div>
  );
};
