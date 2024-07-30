interface ButtonProps {
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return (
    <button className=" ssm:px-[100px] px-[70px] py-[20px] border-[#4F277B] border-4 rounded-[10px] font-bold text-[18px] bg-gradient-to-b from-[#4F277B] to-[#B04E91] text-transparent bg-clip-text whitespace-nowrap">
      {text}
    </button>
  );
};
