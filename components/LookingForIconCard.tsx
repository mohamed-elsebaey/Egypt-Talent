interface IconCardProps {
  icon: string;
  dis: string;
}

export const LookingForIconCard: React.FC<IconCardProps> = ({ icon, dis }) => {
  return (
    <div className="p-[10px] flex gap-[50px] items-center min-h-16">
      <img src={icon} alt="icon" className="w-[30px] h-[30px] " />
      <h3 className="font-bold text-xl">{dis}</h3>
    </div>
  );
};
