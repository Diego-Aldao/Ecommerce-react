import React from "react";
import Footer from "../components/Footer/Footer";
import Navegacion from "../components/Nav/Nav";

const Layout = ({ children, genero }) => {
  return (
    <>
      <Navegacion genero={genero} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
