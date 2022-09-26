import React from "react";
import styled from "styled-components";
import useWindowSize from "../../hooks/useWindowSize";
import Detalles from "./Detalles";
import Galeria from "./Galeria";
import Info from "./Info";

const Contenedor = styled.main`
  width: 100%;
  display: flex;
  max-width: 960px;
  margin: 0 auto;
  flex-direction: column;
  @media (min-width: 720px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const Main = ({ media, producto }) => {
  const size = useWindowSize();
  return (
    <Contenedor>
      <Galeria media={media} />
      <Info producto={producto} />
      {size.width >= 720 ? <Detalles producto={producto} /> : null}
    </Contenedor>
  );
};

export default Main;
