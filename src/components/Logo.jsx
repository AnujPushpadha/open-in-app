import React from "react";
import logo from "../assets/subtract.svg";
const Logo = () => {
  return (
    <div className="relative sm:w-[111px] sm:h-[42px] w-[16]  ">
      <div className=" w-[113px] h-[42px] ">
        <div className="w-[42px] h-[42px] top-0 left-0 bg-[url(/subtract.svg)] bg-[100%_100%]">
          <img
            className=" w-[42px] h-[42px] top-0 left-0"
            alt="Subtract"
            src={logo}
          />
        </div>
        <div className="absolute top-[5px] left-[57px] [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-[#030229] text-[24px] tracking-[0] leading-[normal]">
          Base
        </div>
      </div>
    </div>
  );
};

export default Logo;
