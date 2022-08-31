import React from "react";
import CardInicio from "./CardInicio";
import { useState } from "react";

import styled from "styled-components";

const Contenedor = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
`;

const Inicio = ({ data, setProducto }) => {
  return (
    <Contenedor>
      <CardInicio data={data} setProducto={setProducto} />
    </Contenedor>
  );
};

export default Inicio;
