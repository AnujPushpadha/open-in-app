import React from "react";
import setting from "../assets/Setting.svg";
import notification from "../assets/Notification.svg";
import document from "../assets/Document.svg";
import ticket from "../assets/Ticket.svg";
import category from "../assets/Category.svg";
import chart from "../assets/Chart.svg";
import calender from "../assets/Calendar.svg";
const Menu = () => {
  return (
    <div className="relative w-[200px] h-[425px] mt-12">
      <div className=" w-[200px] h-[425px]  ">
        {/* a */}
        <div className="w-[200px] h-[48px] flex align-middle">
          {/* <div className=" w-[53px] h-[48px] " /> */}
          <div className="ml-8">
            <img
              className="h-[24px]   w-[24px]"
              alt="Iconly bold category"
              src={category}
            />
          </div>
          <div className="ml-4 top-px [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-[#9a9aa9] text-[16px] tracking-[0] leading-[normal]">
            Dashboard
          </div>
        </div>

        <div className="mt-2 w-[200px] h-[48px]  flex align-middle">
          {/* <div className=" w-[53px] h-[48px] " /> */}
          <div className="ml-8">
            <img
              className="h-[24px]   w-[24px]"
              alt="Iconly bold category"
              src={chart}
            />
          </div>
          <div className="ml-4 top-px [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-[#9a9aa9] text-[16px] tracking-[0] leading-[normal]">
            Upload
          </div>
        </div>

        <div className="mt-2 w-[200px] h-[48px]  flex align-middle">
          {/* <div className=" w-[53px] h-[48px] " /> */}
          <div className="ml-8">
            <img
              className="h-[24px]   w-[24px]"
              alt="Iconly bold category"
              src={ticket}
            />
          </div>
          <div className="ml-4 top-px [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-[#9a9aa9] text-[16px] tracking-[0] leading-[normal]">
            Invoice
          </div>
        </div>

        <div className="mt-2 w-[200px] h-[48px]  flex align-middle">
          {/* <div className=" w-[53px] h-[48px] " /> */}
          <div className="ml-8">
            <img
              className="h-[24px]   w-[24px]"
              alt="Iconly bold category"
              src={document}
            />
          </div>
          <div className="ml-4 top-px [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-[#9a9aa9] text-[16px] tracking-[0] leading-[normal]">
            Schedule
          </div>
        </div>

        <div className="mt-2 w-[200px] h-[48px]  flex align-middle">
          {/* <div className=" w-[53px] h-[48px] " /> */}
          <div className="ml-8">
            <img
              className="h-[24px]   w-[24px]"
              alt="Iconly bold category"
              src={calender}
            />
          </div>
          <div className="ml-4 top-px [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-[#9a9aa9] text-[16px] tracking-[0] leading-[normal]">
            Calender
          </div>
        </div>

        <div className="mt-2 w-[200px] h-[48px]  flex align-middle">
          {/* <div className=" w-[53px] h-[48px] " /> */}
          <div className="ml-8">
            <img
              className="h-[24px]   w-[24px]"
              alt="Iconly bold category"
              src={notification}
            />
          </div>
          <div className="ml-4 top-px [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-[#9a9aa9] text-[16px] tracking-[0] leading-[normal]">
            Notification
          </div>
        </div>

        <div className="mt-2 w-[200px] h-[48px]  flex align-middle">
          {/* <div className=" w-[53px] h-[48px] " /> */}
          <div className="ml-8">
            <img
              className="h-[24px]   w-[24px]"
              alt="Iconly bold category"
              src={setting}
            />
          </div>
          <div className="ml-4 top-px [font-family:'Nunito-SemiBold',Helvetica] font-semibold text-[#9a9aa9] text-[16px] tracking-[0] leading-[normal]">
            Setting
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
