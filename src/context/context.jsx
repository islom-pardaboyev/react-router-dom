import React, { createContext, useRef, useState } from "react";

const Context = createContext();

function CustomContext({ children }) {
  const [usersData, setUsersData] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const showImg = useRef();
  function sortedArray() {
    setUsersData((prevUsersData) =>
      [...prevUsersData].sort((a, b) =>
        a.ticketName.localeCompare(b.ticketName)
      )
    );
  }

  function handleFormSubmit(e) {
    const newTicket = {
      id: usersData.length ? usersData[usersData.length - 1].id + 1 : 1,
      ticketName: e.target.ticketName.value,
      img: showImg.current.src,
      customerName: e.target.customerName.value,
      date: e.target.date.value,
      status: e.target.priority.value,
    };
    setUsersData([...usersData, newTicket]);
    setIsOpenModal(!isOpenModal);
    showImg.current.src = null;
    e.target.reset();
  }

  function handleChangeImg(e) {
    showImg.current.src = URL.createObjectURL(e.target.files[0]);
  }

  return (
    <Context.Provider
      value={{
        usersData,
        setUsersData,
        sortedArray,
        handleFormSubmit,
        isOpenModal,
        setIsOpenModal,
        showImg,
        handleChangeImg,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, CustomContext };
