import React from "react";
import {
  IdeasLogo,
  Logo,
  OverviewLogo,
  TicketsLogo,
  AgentsLogo,
  ArticlesLogo,
  ContactLogo,
  SettingsLogo,
  SubscriptionLogo,
} from "../Icons";
import { NavLink } from "react-router-dom";

function Navbar({ extraStyle }) {
  return (
    <nav
      className={`min-w-[255px] max-w-[255px] bg-navBg h-screen  ${extraStyle}`}
    >
      <a href="/" className="flex items-center pt-[37px] pl-[32px]  mb-[69px] gap-3">
        <Logo />
        <p className="text-gray font-bold text-[19px]">Dashboard Kit</p>
      </a>

      <div className="flex flex-col">
        <NavLink
          className={
            "flex py-5 pl-[32px] border-l-4 border-transparent text-gray items-center gap-6"
          }
          to={"/"}
        >
          <OverviewLogo />
          Overview
        </NavLink>
        <NavLink
          className={
            "flex text-[16px] py-5 pl-[32px] border-l-4 border-transparent text-gray items-center gap-6"
          }
          to={"/tickets"}
        >
          <TicketsLogo />
          Tickets
        </NavLink>
        <NavLink
          className={
            "flex text-[16px] py-5 pl-[32px] border-l-4 border-transparent text-gray items-center gap-6"
          }
          to={"/ideas"}
        >
          <IdeasLogo />
          Ideas
        </NavLink>
        <NavLink
          className={
            "flex text-[16px] py-5 pl-[32px] border-l-4 border-transparent text-gray items-center gap-6"
          }
          to={"/contact"}
        >
          <ContactLogo />
          Contact
        </NavLink>
        <NavLink
          className={
            "flex text-[16px] py-5 pl-[32px] border-l-4 border-transparent text-gray items-center gap-6"
          }
          to={"/agents"}
        >
          <AgentsLogo />
          Agents
        </NavLink>
        <NavLink
          className={
            "flex text-[16px] py-5 pl-[32px] border-l-4 border-transparent text-gray items-center gap-6"
          }
          to={"/articles"}
        >
          <ArticlesLogo />
          Articles
        </NavLink>

        <hr className="my-4 text-[#DFE0EB]/50" />

        <NavLink
          className={
            "flex text-[16px] py-5 pl-[32px] border-l-4 border-transparent text-gray items-center gap-6"
          }
          to={"/settings"}
        >
          <SettingsLogo />
          Settings
        </NavLink>
        <NavLink
          className={
            "flex text-[16px] py-5 pl-[32px] border-l-4 border-transparent text-gray items-center gap-6"
          }
          to={"/subscription"}
        >
          <SubscriptionLogo />
          Subscription
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
