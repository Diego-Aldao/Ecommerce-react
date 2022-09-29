import React from "react";
import styled from "styled-components";

const Contenedor = styled.section`
  width: 100%;
  padding: 20px 0px 0px;
  min-height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;

  h1 {
    text-align: center;
    padding: 0px 16px 8px;
    text-transform: capitalize;
    font-size: clamp(24px, 32px, 3vw);
  }
`;

const Banner = ({ categoria }) => {
  const nombreCategoria = categoria.replaceAll("-", " ");
  return (
    <Contenedor>
      <h1>{nombreCategoria}</h1>
    </Contenedor>
  );
};

export default Banner;
