import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Navegacion from "../components/Nav/Nav";
import { LinksContextProvider } from "../context/LinksContext";
import jsonData from "../data/categoriasEsp.json";

const Layout = ({ children, genero }) => {
  const { navigation } = jsonData;
  const [navegacion, setNavegacion] = useState(navigation);

  return (
    <LinksContextProvider>
      <Navegacion genero={genero} navegacion={navegacion} />
      {children}
      <Footer />
    </LinksContextProvider>
  );
};

export default Layout;
