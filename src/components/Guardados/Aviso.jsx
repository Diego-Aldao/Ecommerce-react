import React from "react";
import styled from "styled-components";
import { FiHeart } from "react-icons/fi";
import { Link } from "wouter";

const Main = styled.div`
  width: 100%;
  height: calc(100vh - 137px);
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  span {
    margin: 0px auto 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 24px;
    }
  }
  h2 {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }
  h2:first-letter,
  p:first-letter {
    text-transform: capitalize;
  }
  p {
    margin: 20px 0px;
    text-align: center;
  }
`;
const Boton = styled(Link)`
  padding: 15px 30px;
  font-size: 16px;
  background: black;
  border: none;
  color: white;
  text-transform: uppercase;
`;

const Aviso = () => {
  return (
    <Main>
      <span>
        <FiHeart></FiHeart>
      </span>
      <h2>no tienes ningun artículo guardado</h2>
      <p>
        guarda mientras compras seleccionando el corazon en el articulo que
        desees guardar
      </p>
      <Boton to="/">empezar a comprar</Boton>
    </Main>
  );
};

export default Aviso;
