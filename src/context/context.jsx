import { data } from "autoprefixer";
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
  ]);

  return <Context.Provider value={{usersData}}>{children}</Context.Provider>;
}

export { Context, CustomContext };
