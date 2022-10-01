import React from "react";
import { useState } from "react";

const Context = React.createContext({});

export const LinksContextProvider = ({ children }) => {
  const [links, setLinks] = useState([]);

  return (
    <Context.Provider value={{ links, setLinks }}>{children}</Context.Provider>
  );
};

export default Context;
