import React, { useContext } from "react";
import uploadImg from "../assets/images/uploadImg.png";
import { Context } from "../context/context";

function AddTicketsData() {
  const {handleFormSubmit, isOpenModal, showImg, handleChangeImg, setIsOpenModal} = useContext(Context)
  function formSubmit(e){
    e.preventDefault();
    handleFormSubmit(e)
    showImg.current.src = uploadImg
  } 
  return (
    <div onClick={(e) => e.target.id === 'wrapper' ? setIsOpenModal(false) : setIsOpenModal(true)} id="wrapper" className={`fixed w-full h-full bg-black/40 backdrop-blur-md duration-300 cursor-pointer top-[50%] flex items-center justify-center left-[50%] -translate-x-1/2 -translate-y-1/2 ${isOpenModal ? "scale-100" : "scale-0"}`}>
      <form onSubmit={formSubmit} className="max-w-[500px] p-7 bg-white rounded-2xl shadow-lg">
        <h1 className="font-bold mb-5 text-2xl text-center">
          Add Tickets Data
        </h1>
        <label>
          <input onChange={handleChangeImg} type="file" hidden />
          <img ref={showImg} className="cursor-pointer" src={uploadImg} alt="" />
        </label>
        <div className="flex items-center mt-5 gap-6">
          <div className="w-full flex flex-col gap-3">
            <label className="flex flex-col">
              <span>Ticket Name</span>
              <input name="ticketName" required className="border-[1.5px] px-2 py-1 border-black rounded-md outline-none" type="text" placeholder="Ticket Name" />
            </label>
            <label className="flex flex-col">
              <span>Customer Name</span>
              <input name="customerName" required className="border-[1.5px] px-2 py-1 border-black rounded-md outline-none" type="text" placeholder="Customer Name" />
            </label>
          </div>
          <div className="w-full flex flex-col gap-3">
            <label className="flex flex-col">
              <span>Date</span>
              <input name="date" required className="border-[1.5px] px-2 py-1 border-black rounded-md outline-none" type="date" />
            </label>
            <label className="flex flex-col">
              <span>Priority</span>
              <select name="priority" className="border-[1.5px] px-2 py-1 border-black rounded-md outline-none">
                 <option value="hight">Hight</option>
                 <option value="normal">Normal</option>
                 <option value="low">Low</option>
              </select>
            </label>
          </div>
        </div>
        <button className="py-2 w-full text-center bg-sky-500 hover:opacity-80 text-white mt-4 rounded-md">Add Tickets</button>
      </form>
    </div>
  );
}

export default AddTicketsData;
