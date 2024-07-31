import React from "react";
import AccountAbout from "../../components/AccountAbout";
import Card from "../../components/Card";

function Overview() {
  return (
    <section className="h-screen overflow-y-auto">
      <div className="flex items-center justify-between">
        <p className="leading-[30.12px] font-bold text-[24px]">Overview</p>
        <AccountAbout />
      </div>
      <div className="flex items-center mb-[30px] justify-between">
        <Card title={"Unresolved"} count={60}/>
        <Card title={"Overdue"} count={16}/>
        <Card title={"Open"} count={43}/>
        <Card title={"On hold"} count={64}/>
      </div>
      <div className="w-full h-[700px] bg-white"></div>
    </section>
  );
}

export default Overview;
