import React from "react";
import DataJson from "../../../data/VestidosSkater.json";
import styled from "styled-components";
import Productos from "./Productos";

const Contenedor = styled.main`
  width: 100%;
  max-width: 512px;
  margin: 0 auto;
  padding: 0px 12px;
  background: white;

  @media (min-width: 768px) {
    max-width: 1366px;
    padding: 0px 24px;
  }
  @media (min-width: 1024px) {
    padding: 0px 32px;
  }
`;

const Info = styled.p`
  width: 100%;
  text-align: center;
  padding: 20px 0px 0px;
  margin-bottom: 5px;
  font-size: 14px;
  color: #666;
`;

const Grid = styled.div`
  padding: 20px 0px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px;
  background: white;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
  p {
    color: #666;
    font-size: 14px;
  }
  span {
    width: 70%;
    height: 2px;
    background: #d4d4d4c5;
    margin-top: 15px;
    position: relative;
    &::after {
      content: "";
      width: 10%;
      height: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      background: var(--gradiente2);
    }
  }
  button {
    width: 100%;
    padding: 15px;
    max-width: 300px;
    background: none;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 20px;
    border: 1px solid #d4d4d4c5;
    letter-spacing: 1px;
  }
`;

const Main = ({ idCategoria }) => {
  const data = DataJson;
  return (
    <Contenedor>
      <Info>{data.itemCount} estilos encontrados</Info>
      <Grid>
        <Productos productos={data.products}></Productos>
      </Grid>
      <Footer>
        <p>Has visto 71 de 400 productos</p>
        <span></span>
        <button>cargar mas</button>
      </Footer>
    </Contenedor>
  );
};

export default Main;
