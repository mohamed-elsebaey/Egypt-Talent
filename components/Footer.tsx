import React from "react";

export const Footer = () => {
  return (
    <div className="w-[100%] flex flex-col bg-gradient-to-r text-[#FFFFFF] text-sm from-customBlue to-customPink max-w-[1600px] items-center font-medium ">
      <div className="flex gap-[10px] py-[25px]">
        <p>Datenschutz</p>
        <p>Datenschutz</p>
      </div>
      <div className="py-[10px]">
        <p>© 2024 Emerging Experts</p>
      </div>
    </div>
  );
};
