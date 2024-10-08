import { Button } from "./Button";
export const Hero = () => {
  return (
    <div className="ssm:mx-[100px] mx-[50px] sm:py-[90px] py-[60px] px-2 flex flex-col items-center gap-5 text-center z-1 ">
      <h1 className="font-bold text-[50px] text-shadow-bottom">
        Join the Top{" "}
        <span className="bg-gradient-to-b from-[#4F277B] to-[#B04E91] text-transparent bg-clip-text">
          1% of Talent in{" "}
        </span>
        Egypt
      </h1>
      <p className="font-medium text-base">
        Unlock your potential with the best salaries, job security, and
        comprehensive benefits.
      </p>
      <Button x={true} />
    </div>
  );
};
