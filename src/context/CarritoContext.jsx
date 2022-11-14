import React from "react";
import { useState } from "react";

const Context = React.createContext({});

export const CarritoContextProvider = ({ children }) => {
  const carritoStorage = JSON.parse(localStorage.getItem("Carrito"));
  const [carrito, setCarrito] = useState(carritoStorage ? carritoStorage : []);

  return (
    <Context.Provider value={{ carrito, setCarrito }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
