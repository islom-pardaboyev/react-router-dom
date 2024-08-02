import { AvatarImg } from "../Icons";

function TicketCard({ status }) {
  const bgColor =
    status === "high"
      ? "bg-red"
      : status === "low"
      ? "bg-yellow"
      : status === "normal"
      ? "bg-green"
      : "";

  return (
    <div className={`py-6 min-h-[92px] max-h-full ${bgColor}`}>
      <div className="flex items-center px-[32px] gap-6">
        <AvatarImg />
        <div className="flex flex-col gap-2 min-w-[372px] max-w-full">
          <h1 className="font-semibold text-[14px] leading-[20px] tracking-[0.2px] text-dark">
            Contact Email not Linked
          </h1>
          <p className="font-normal text-[12px] leading-[16px] tracking-[0.1px] text-gray-50">
            Updated 1 day ago
          </p>
        </div>
        <div className="min-w-[208px] max-w-full flex flex-col gap-2">
          <p className="font-semibold text-[14px] leading-[20px] tracking-[0.2px] text-dark">
            Tom Cruise
          </p>
          <p className="font-normal text-[12px] leading-[16px] tracking-[0.1px] text-gray-50">
            6:30 PM
          </p>
        </div>
        <div className="min-w-[104px] max-w-full flex flex-col gap-2">
          <p className="font-semibold text-[14px] leading-[20px] tracking-[0.2px] text-dark">
            May 26, 2019
          </p>
          <p className="font-normal text-[12px] leading-[16px] tracking-[0.1px] text-gray-50">
            6:30 PM
          </p>
        </div>
        <div className="min-w-[104px] max-w-full flex flex-col gap-2">
          <p className="font-semibold text-[14px] leading-[20px] tracking-[0.2px] text-dark">
            May 26, 2019
          </p>
          <p className="font-normal text-[12px] leading-[16px] tracking-[0.1px] text-gray-50">
            6:30 PM
          </p>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;