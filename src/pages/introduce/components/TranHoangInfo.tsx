import React from "react";
import TranHoang from "../../../assets/images/introduces/introduce_homepage.jpg";

const TranHoangInfo = () => {
  return (
    <div className="w-full lg:w-[55%] flex items-end gap-x-6 ">
      <div className="relative">
        <img
          src={TranHoang}
          alt="Tran Hoang"
          className="w-full h-[659px] object-cover"
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <CircleTextSVG />
        </div>
      </div>

      <div className="bg-secondary text-light py-8 px-8  space-y-4 h-[80%] text-lg">
        <img
          src={TranHoang}
          alt="Tran Hoang"
          className="w-[150px] h-[150px] rounded-full object-cover border-4 border-white"
        />
        <div>
          <p className="text-xl font-bold">Trần Hoàng</p>
          <p className="text-sm opacity-70">CEO & Founder</p>
        </div>
        <p className="max-w-xl mx-auto">
          We pride ourselves on providing the best transport services available
          all over the world.
        </p>
      </div>
    </div>
  );
};

export default TranHoangInfo;

const CircleTextSVG: React.FC = () => {
  const text = "Kargo Transportation Logistic Business From 1999 • ";

  return (
    <div className="relative w-[210px] h-[210px]">
      {/* Icon và nền */}
      <div className="absolute inset-0 flex items-center justify-center bg-[#0a2d32] rounded-full z-10">
        <img
          src="https://cdn-icons-png.flaticon.com/512/69/69881.png"
          alt="warehouse"
          className="w-12 h-12"
        />
      </div>

      {/* SVG chữ vòng tròn với animation */}
      <div className="absolute inset-0 z-0 animate-spin-slow">
        <svg viewBox="0 0 210 210" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M105,105 m -90,0 a90,90 0 1,1 180,0 a90,90 0 1,1 -180,0"
              fill="none"
            />
          </defs>
          <text
            fill="white"
            fontSize="12"
            fontFamily="Arial, sans-serif"
            letterSpacing="1.5"
          >
            <textPath href="#circlePath" startOffset="0">
              {text.repeat(3)}
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};
