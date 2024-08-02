import { AvatarImg } from "../Icons";

function TicketCard() {
  return (
    <div className="py-6 px-[31px]">
      <div className="flex items-center gap-6">
        <AvatarImg />
        <div className="flex flex-col gap-2 min-w-[372px] max-w-full">
            <h1 className="font-semibold text-[14px] leading-[20px] tracking-[0.2px] text-dark">Contact Email not Linked</h1>
            <p className="font-normal text-[12px] leading-[16px] tracking-[0.1px] text-gray-50">Updated 1 day ago</p>
        </div>
      </div>
    </div>
  );
}

export default TicketCard;
