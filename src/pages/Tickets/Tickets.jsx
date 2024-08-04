import React, { useContext } from "react";
import AccountAbout from "../../components/AccountAbout";
import { FilterIcon, SortIcon } from "../../Icons";
import TicketCard from "../../components/TicketCard";
import { Context } from "../../context/context";
import AddTicketsData from "../../components/AddTicketsData";

function Tickets() {
  const { usersData, sortedArray, isOpenModal, setIsOpenModal } =
    useContext(Context);

  function openModal() {
    setIsOpenModal(!isOpenModal);
  }

  return (
    <>
      <div className="flex items-center mb-[54px] justify-between">
        <p className="leading-[30.12px] font-bold text-[24px]">Tickets</p>
        <AccountAbout />
      </div>
      <div className="flex items-center justify-end">
        <button
          className="py-2 px-4 text-white bg-sky-500 rounded-md mb-2"
          onClick={openModal}
        >
          Add Tickets
        </button>
      </div>
      <div className="bg-white border-y rounded-[8px]">
        <div className="px-[36px] pt-[32px] mb-[48px] flex items-center justify-between">
          <h1 className="text-[19px] font-bold leading-[23.85px] tracking-[0.4px] text-dark">
            All tickets
          </h1>
          <div className="flex items-center gap-6">
            <button onClick={sortedArray} className="flex items-center gap-2">
              <SortIcon />
              <p className="leading-[20px] font-semibold text-[14px] text-dark-100">
                Sort
              </p>
            </button>
            <div className="flex items-center gap-2">
              <FilterIcon />
              <p className="leading-[20px] font-semibold text-[14px] text-dark-100">
                Filter
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-start pl-[31px] border-b border-gray-10 pb-3 font-bold text-[14px] leading-[17.57px] tracking-[0.2px] text-gray-30">
          <p className="min-w-[48%] max-w-full">Ticket details</p>
          <p className="min-w-[27%] max-w-full">Customer name</p>
          <p className="min-w-[16%] max-w-full">Date</p>
          <p className="min-w-[104px] max-w-full">Priority</p>
        </div>
        <div className="flex flex-col justify-around">
          {usersData.length ? (
            usersData.map((ticket, index) => (
              <TicketCard
                key={index + 1}
                customerName={ticket.customerName}
                date={ticket.date}
                status={ticket.status}
                ticketName={ticket.ticketName}
                img={ticket.img}
              />
            ))
          ) : (
            <p className="text-xl text-neutral-400 font-bold text-center py-4">Not yet Tickets</p>
          )}
        </div>
      </div>
      <AddTicketsData />
    </>
  );
}

export default Tickets;
