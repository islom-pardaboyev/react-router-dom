import React, { createContext, useState } from "react";

const Context = createContext();

function CustomContext({ children }) {
  const [usersData, setUsersData] = useState([
    {
      id: 1,
      ticketName: "Contact Email not Linked",
      customerName: "Tom Cruise",
      date: new Date().toDateString(),
      status: "normal",
    },
    {
      id: 2,
      ticketName: "Salom what's up",
      customerName: "Tom Cruise",
      date: new Date().toDateString(),
      status: "low",
    },
    {
      id: 3,
      ticketName: "B",
      customerName: "Tom Cruise",
      date: new Date().toDateString(),
      status: "low",
    },
    {
      id: 4,
      ticketName: "A",
      customerName: "Tom Cruise",
      date: new Date().toDateString(),
      status: "normal",
    },
  ]);
  function sortedArray() {
    setUsersData((prevUsersData) =>
      [...prevUsersData].sort((a, b) =>
        a.ticketName.localeCompare(b.ticketName)
      )
    );
  }

  return (
    <Context.Provider value={{ usersData, setUsersData, sortedArray }}>
      {children}
    </Context.Provider>
  );
}

export { Context, CustomContext };


