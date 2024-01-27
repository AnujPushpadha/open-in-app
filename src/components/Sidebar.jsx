import React, { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import plus from "../assets/plus.svg";
import subtract from "../assets/subtract.svg";
const Sidebar = (props) => {
  console.log(props.isNavbarOpen);
  return (
    <>
      <div
        className={`top-0 left-0  w-[218px] h-[1047px]  z-10 sm:block ${
          props.isNavbarOpen ? "" : "hidden"
        } w-[218px] h-[1047px]`}
      >
        <div className="flex  w-[218px] justify-center">
          <div className="mt-14 ml-14  sm:block ">
            <Logo></Logo>
          </div>
          <div className={`${props.isNavbarOpen ? "" : "hidden"} `}>
            <img
              className={` mt-14 ml-14  sm:block w-[18px] h-[23px] cursor-pointer`}
              alt="plus"
              src={plus}
              onClick={props.toggleNavbar}
            />
          </div>
        </div>

        <Menu></Menu>
      </div>
    </>
  );
};

export default Sidebar;
