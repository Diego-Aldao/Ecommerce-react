import React from "react";
import CardInicio from "../components/CardInicio";

import styled from "styled-components";

const Contenedor = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
`;

const Inicio = () => {
  return (
    <Contenedor>
      <CardInicio />
    </Contenedor>
  );
};

export default Inicio;
