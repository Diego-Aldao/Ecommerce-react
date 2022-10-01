import React from "react";
import Footer from "../components/Footer/Footer";
import Navegacion from "../components/Nav/Nav";
import { LinksContextProvider } from "../context/LinksContext";

const Layout = ({ children, genero }) => {
  return (
    <LinksContextProvider>
      <Navegacion genero={genero} />
      {children}
      <Footer />
    </LinksContextProvider>
  );
};

export default Layout;
