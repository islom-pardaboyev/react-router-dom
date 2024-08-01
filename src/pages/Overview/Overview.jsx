import React from "react";
import AccountAbout from "../../components/AccountAbout";
import Card from "../../components/Card";

function Overview() {
  return (
    <section className="h-screen">
      <div className="flex items-center justify-between">
        <p className="leading-[30.12px] font-bold text-[24px]">Overview</p>
        <AccountAbout />
      </div>
      <div className="flex items-center mb-[30px] justify-between">
        <Card title={"Unresolved"} count={60} />
        <Card title={"Overdue"} count={16} />
        <Card title={"Open"} count={43} />
        <Card title={"On hold"} count={64} />
      </div>
      <div className="w-full flex h-[546px] bg-white">
        <div className="w-full p-8">
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-2">
              <h1 className="leading-[23.85px] tracking-[0.4px] text-[19px] font-bold">Today’s trends</h1>
              <p className="text-gray-30 font-normal text-[12px] leading-[16px] tracking-[0.1px]">as of 25 May 2019, 09:41 PM</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex gap-2 items-center">
                <span className="w-[16px] h-[2px] block bg-purple"></span>
                <p className="leading-[15.06px] font-semibold tracking-[0.1px] text-[12px] text-gray-30">Today</p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="w-[16px] h-[2px] block bg-gray-10"></span>
                <p className="leading-[15.06px] font-semibold tracking-[0.1px] text-[12px] text-gray-30">Yesterday</p>
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-[342px] border-l max-h-full border-gray-10 flex flex-col gap-0 max-w-full">
          <Card
            title={"Resolved"}
            count={"449"}
            extraStyle={
              "!mt-0 pt-[32px] !min-h-[85.5px] !w-full !rounded-none !border-b !border-gray-10"
            }
            textStyle={"!leading-[22px] !font-semibold"}
            countStyle={
              "!trackig-[0.3px] leading-[30.12px] !font-bold !text-[24px]"
            }
          />
          <Card
            title={"Received"}
            count={"426"}
            extraStyle={
              "!mt-0 pt-[32px] !min-h-[85.5px] !w-full !rounded-none !border-b !border-gray-10"
            }
            textStyle={"!leading-[22px] !font-semibold"}
            countStyle={
              "!trackig-[0.3px] leading-[30.12px] !font-bold !text-[24px]"
            }
          />
          <Card
            title={"Average first response time"}
            count={"33m"}
            extraStyle={
              "!mt-0 pt-[32px] !min-h-[85.5px] !w-full !rounded-none !border-b !border-gray-10"
            }
            textStyle={"!leading-[22px] !font-semibold"}
            countStyle={
              "!trackig-[0.3px] leading-[30.12px] !font-bold !text-[24px]"
            }
          />
          <Card
            title={"Average response time"}
            count={"3h 8m"}
            extraStyle={
              "!mt-0 pt-[32px] !min-h-[85.5px] !w-full !rounded-none !border-b !border-gray-10"
            }
            textStyle={"!leading-[22px] !font-semibold"}
            countStyle={
              "!trackig-[0.3px] leading-[30.12px] !font-bold !text-[24px]"
            }
          />
          <Card
            title={"Resolution within SLA"}
            count={"94%"}
            extraStyle={
              "!mt-0 pt-[32px] !min-h-[85.5px] !w-full !rounded-none !border-b !border-gray-10"
            }
            textStyle={"!leading-[22px] !font-semibold"}
            countStyle={
              "!trackig-[0.3px] leading-[30.12px] !font-bold !text-[24px]"
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Overview;
