import React from "react";
import Navegacion from "../components/Nav/Nav";

const Layout = ({ children, genero }) => {
  return (
    <>
      <Navegacion genero={genero} />
      {children}
    </>
  );
};

export default Layout;
