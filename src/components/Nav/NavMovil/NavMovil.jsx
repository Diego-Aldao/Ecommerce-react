import React from "react";
import styled from "styled-components";
import ListaNavMovil from "./ListaNavMovil";

const Contenido = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #0000005a;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  @media (min-width: 1024px) {
    display: none;
  }
`;

const Navegacion = styled.nav`
  width: calc(100% - 50px);
  max-width: 320px;
  height: 100%;
  position: relative;
  left: ${({ visible }) => (visible ? "0" : "-100%")};
`;
const ContenedorBotones = styled.div`
  width: calc(100% + 50px);
  display: flex;
  button {
    flex: 1 1 auto;
    height: 50px;
  }
`;
const BotonCerrar = styled.div`
  background: black;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    position: absolute;
    width: 30px;
    height: 3px;
    background: white;
    transform: rotate(45deg);
  }
  span:nth-child(2) {
    transform: rotate(-45deg);
  }
`;

const NavMovil = ({ visible, setvisible, contenido }) => {
  const handleClick = () => {
    setvisible(!visible);
  };

  return (
    <Contenido visible={visible}>
      <Navegacion visible={visible}>
        <ContenedorBotones>
          <button>mujer</button>
          <button>hombre</button>
          <BotonCerrar onClick={handleClick}>
            <span></span>
            <span></span>
          </BotonCerrar>
        </ContenedorBotones>
        <ListaNavMovil contenido={contenido} />
      </Navegacion>
    </Contenido>
  );
};

export default NavMovil;
