export default function HowItWorks() {
  return (
    <div className="flex flex-col items-center text-[#fff] px-[100px] py-[50px] bg-gradient-to-r from-customBlue to-customPink">
      <h2 className="font-bold text-3xl ">Why Choose Us</h2>
      <div className="p-[25px] flex flex-col gap-[70px] w-[100%]">
        <div className="flex flex-col gap-[20px]">
          <div className="text-customBlue font-bold text-[23px] bg-[#fff] w-[50px] h-[50px] rounded-[10px] flex items-center justify-center">
            <span className="bg-gradient-to-b from-[#5998EB] to-[#ADEFFF] text-transparent bg-clip-text">
              1
            </span>
          </div>
          <h3 className="font-bold text-[20px]">Apply</h3>
          <p className="font-medium text-[16px]">
            Submit your application online with your resume and portfolio.
          </p>
        </div>
        {/* ---------------- */}
        <div className="flex flex-col gap-[20px] items-end">
          <div className="font-bold text-[23px] bg-[#fff] w-[50px] h-[50px] rounded-[10px] flex items-center justify-center">
            <span className="bg-gradient-to-b from-[#4F277B] to-[#B04E91] text-transparent bg-clip-text">
              2
            </span>
          </div>
          <h3 className="font-bold text-[20px]">Interview</h3>
          <p className="font-medium text-[16px]">
            Attend our rigorous interview process to showcase your skills.
          </p>
        </div>
        {/* ---------------- */}
        <div className="flex flex-col gap-[20px]">
          <div className="text-customBlue font-bold text-[23px] bg-[#fff] w-[50px] h-[50px] rounded-[10px] flex items-center justify-center">
            <span className="bg-gradient-to-b from-[#5998EB] to-[#ADEFFF] text-transparent bg-clip-text">
              3
            </span>
          </div>
          <h3 className="font-bold text-[20px]">Get Hired</h3>
          <p className="font-medium text-[16px]">
            Join our team and start your journey with Emerging Experts.
          </p>
        </div>
      </div>
    </div>
  );
}
