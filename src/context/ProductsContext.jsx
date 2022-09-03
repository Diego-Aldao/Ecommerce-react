import React from "react";
import { useState } from "react";

const Context = React.createContext({});

export const ProductsContextProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  return (
    <Context.Provider value={{ productos, setProductos }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
