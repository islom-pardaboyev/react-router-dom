import { AvatarImg } from "../Icons";

export default function TicketCard({
  ticketName,
  customerName,
  date,
  status,
}) {
  const bgColor = {
    high: "bg-red",
    low: "bg-yellow",
    normal: "bg-green",
  }[status] || "";

  return (
    <div className="py-6 min-h-[92px] px-[31px] border max-h-full">
      <div className="flex items-center gap-6">
        <AvatarImg />
        <div className="min-w-[42%] flex flex-col gap-2 max-w-full">
          <h1 className="font-semibold text-[14px] leading-[20px] tracking-[0.2px] text-dark">
            {ticketName}
          </h1>
          <p className="font-normal text-[12px] leading-[16px] tracking-[0.1px] text-gray-50">
            Updated 1 day ago
          </p>
        </div>
        <div className="min-w-[25%] flex flex-col gap-2 max-w-full">
          <p className="font-semibold text-[14px] leading-[20px] tracking-[0.2px] text-dark">
            {customerName}
          </p>
          <p className="font-normal text-[12px] leading-[16px] tracking-[0.1px] text-gray-50">
            6:30 PM
          </p>
        </div>
        <div className="min-w-[14.5%] flex flex-col gap-2 max-w-full">
          <p className="font-semibold text-[14px] leading-[20px] tracking-[0.2px] text-dark">
            {date}
          </p>
          <p className="font-normal text-[12px] leading-[16px] tracking-[0.1px] text-gray-50">
            6:30 PM
          </p>
        </div>
        <p
          className={`min-w-fit text-white rounded-[100px] uppercase flex flex-col gap-2 max-w-full py-[5px] px-3 font-bold text-[11px] leading-[13.81px] tracking-[0.5px] ${bgColor}`}
        >
          {status}
        </p>
      </div>
    </div>
  );
}

