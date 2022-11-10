import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer/Footer";
import Nav from "./Nav";
import Panel from "./Panel";

const Contenedor = styled.div`
  background: var(--gradiente-principal);
  width: 100%;
  min-height: 100vh;
`;

const Main = () => {
  return (
    <>
      <Contenedor>
        <Nav />
        <Panel />
      </Contenedor>
      <Footer />
    </>
  );
};

export default Main;
