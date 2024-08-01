import React from "react";
import AccountAbout from "../../components/AccountAbout";
import Card from "../../components/Card";
import Text from "../../components/Text";
import Input from '../../components/Input'
import Todo from "../../components/Todo";

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
      <div className="w-full rounded-[8px] overflow-hidden flex h-[546px] bg-white">
        <div className="w-full p-8">
          <div className="flex justify-between items-end">
            <div className="flex flex-col gap-2">
              <h1 className="leading-[23.85px] tracking-[0.4px] text-[19px] font-bold">
                Today’s trends
              </h1>
              <p className="text-gray-30 font-normal text-[12px] leading-[16px] tracking-[0.1px]">
                as of 25 May 2019, 09:41 PM
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex gap-2 items-center">
                <span className="w-[16px] h-[2px] block bg-purple"></span>
                <p className="leading-[15.06px] font-semibold tracking-[0.1px] text-[12px] text-gray-30">
                  Today
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="w-[16px] h-[2px] block bg-gray-10"></span>
                <p className="leading-[15.06px] font-semibold tracking-[0.1px] text-[12px] text-gray-30">
                  Yesterday
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-[342px] max-h-full border-gray-10 flex flex-col gap-0 max-w-full">
          <Card
            title={"Resolved"}
            count={"449"}
            extraStyle={
              "!mt-0 pt-[32px] !min-h-[85.5px] !w-full !rounded-none !border-b-transparent !border-gray-10"
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
              "!mt-0 pt-[32px] !min-h-[85.5px] !w-full !rounded-none !border-b-transparent !border-gray-10"
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
              "!mt-0 pt-[32px] !min-h-[85.5px] !w-full !rounded-none !border-b-transparent !border-gray-10"
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
              "!mt-0 pt-[32px] !min-h-[85.5px] !w-full !rounded-none !border-b-transparent !border-gray-10"
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
              "!mt-0 pt-[32px] !min-h-[85.5px] !w-full !rounded-none !border-b-transparent !border-gray-10"
            }
            textStyle={"!leading-[22px] !font-semibold"}
            countStyle={
              "!trackig-[0.3px] leading-[30.12px] !font-bold !text-[24px]"
            }
          />
        </div>
      </div>

      <div className="flex my-[30px] items-center gap-6 pb-[30px]">
        <div className="w-full flex flex-col rounded-[8px] bg-white">
          <div className="flex items-start justify-between px-[32px] pt-[32px]">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-[19px] tracking-[0.4px] leading-[23.85px]">
                Unresolved tickets
              </h1>
              <p className="flex text-gray-30 gap-1 leading-[15.06px] text-[12px] tracking-[0.1px]">
                Group: <span className="text-black">Support</span>
              </p>
            </div>
            <a
              href="/"
              className="font-semibold text-purple text-[14px] leading-[20px] tracking-[0.2px]"
            >
              View details
            </a>
          </div>
          <div className="mt-4 flex flex-col">
            <Text title={"Waiting on Feature Request"} number={4238} />
            <Text title={"Awaiting Customer Response"} number={1005} />
            <Text title={"Awaiting Developer Fix"} number={914} />
            <Text title={"Pending"} number={281} />
          </div>
        </div>
        <div className="w-full flex flex-col rounded-[8px] bg-white">
          <div className="flex items-start justify-between px-[32px] pt-[32px]">
            <div className="flex flex-col gap-2">
              <h1 className="font-bold text-[19px] tracking-[0.4px] leading-[23.85px]">
                Tasks
              </h1>
              <p className="flex text-gray-30 gap-1 leading-[15.06px] text-[12px] tracking-[0.1px]">
                Today
              </p>
            </div>
            <a
              href="/"
              className="font-semibold text-purple text-[14px] leading-[20px] tracking-[0.2px]"
            >
              View all
            </a>
          </div>
          <div className="mt-4 flex flex-col">
            <Input/>
            <Todo title={"Finish ticket update"} status={'urgent'}/>
            <Todo title={"Create new ticket example"} status={'new'}/>
            <Todo title={"Update ticket report"} status={'default'}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
