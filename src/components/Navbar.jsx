import React from "react";
import ellipse from "../assets/Ellipse-1.png";
import image from "../assets/image.png";
import bell from "../assets/bell.svg";
import Logo from "./Logo";
import burger from "../assets/burger.svg";
const Navbar = (props) => {
  return (
    <>
      <div className=" w-full h-[32px]  mt-14 flex justify-between   ">
        <div className="  sm:hidden  flex justify-between items-center ">
          <div className="sm:hidden ">
            {" "}
            <img
              className=" ml-6 mr-6 w-[18px] h-[23px] cursor-pointer"
              alt="Vector"
              src={burger}
              onClick={props.toggleNavbar}
            />
          </div>
          <div className="ml-0 ">
            <Logo></Logo>
          </div>
        </div>
        <div className="sm:block hidden ml-20 h-[32px]  [font-family:'Figtree-SemiBold',Helvetica] font-semibold text-black text-[24px] tracking-[0] leading-[32px] whitespace-nowrap">
          Upload CSV
        </div>

        <div className="ml-16 flex justify-between items-center w-20  mr-28">
          <div className="mr-6 w-[18px] h-[23px]">
            <img className="w-[18px] h-[23px] " alt="Vector" src={bell} />
          </div>
          <div className="relative w-[30px] h-[30px] ">
            <img
              className=" rounded-2xl absolute w-[30px] h-[30px] top-[165px] left-[-1388px]"
              alt="Ellipse"
              src={ellipse}
            />
            <img
              className="rounded-2xl absolute w-[30px] h-[30px] top-0 left-0"
              alt="Image"
              src={image}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
