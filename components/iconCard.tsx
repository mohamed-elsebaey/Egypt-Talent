interface IconCardProps {
  icon: string;
  title: string;
  dis: string;
}

export const IconCard: React.FC<IconCardProps> = ({ icon, title, dis }) => {
  return (
    <>
      <div className="flex flex-col items-center text-center p-[10px] gap-[20px]">
        <img src={icon} alt="icon" className="w-[50px] " />
        <h3 className="font-bold text-[23px]">{title}</h3>
        <p className="font-medium text-[16px]">{dis}</p>
      </div>
    </>
  );
};
