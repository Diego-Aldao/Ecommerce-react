import React from "react";
import styled from "styled-components";
import Galeria from "./Galeria";
import Info from "./Info";

const Contenedor = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = ({ media, producto }) => {
  return (
    <Contenedor>
      <Galeria media={media} />
      <Info producto={producto} />
    </Contenedor>
  );
};

export default Main;
