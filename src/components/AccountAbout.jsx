import React from "react";
import { SearchIcon, NotificationIcon } from "../Icons";
import AvatarImg from "../assets/images/photo.png";

function AccountAbout() {
  return (
    <div className="flex items-center gap-6">
      <div className="flex items-center gap-6">
        <SearchIcon />
        <NotificationIcon />
      </div>
      <span className="inline-block h-5 w-px bg-gray-10"></span>
      <div className="flex items-center gap-[14px]">
        <h1 className="leading-[20px] font-semibold text-[14px] tracking-[.2px]">Jones Ferdinand</h1>
        <img src={AvatarImg} alt="" />
      </div>
    </div>
  );
}

export default AccountAbout;
