import React, { useState } from "react";
import styled from "styled-components";
import DetalleNavMovil from "./DetalleNavMovil";
import ListaNavMovil from "./ListaNavMovil";
import { useLocation } from "wouter";

const Contenido = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  background: #0000005a;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  z-index: ${({ visible }) => (visible ? "1" : "-10")};
  transition: all 0.3s ease-in-out;
  display: flex;
  @media (min-width: 1024px) {
    display: none;
  }
`;

const Navegacion = styled.nav`
  width: calc(100% - 50px);
  max-width: 320px;
  position: relative;
  left: ${({ visible }) => (visible ? "0" : "-100%")};
  background: white;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
`;

const ContenedorNav = styled.div`
  width: 200%;
  display: flex;
  overflow-y: scroll;
  position: relative;
  left: ${({ posicion }) => (posicion ? "-100%" : "0px")};
  transition: all 0.3s ease-in-out;
`;

const ContenidoSimple = styled.div`
  width: 50%;
  min-width: 50%;
`;
const ContenedorBotones = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #0000002d;
  position: relative;
  button {
    flex: 1 1 auto;
    height: 50px;
    background: none;
    border: none;
    text-transform: uppercase;
    font-weight: 700;
    font-family: "Josefin Sans", sans-serif;
    letter-spacing: 1px;
  }
  &:after {
    content: "";
    top: 50%;
    right: 50%;
    margin-top: -10px;
    position: absolute;
    height: 20px;
    width: 1px;
    background-color: #2d2d2d1a;
  }
`;
const BotonCerrar = styled.div`
  background: black;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  transition: all 0.5s ease-in-out;
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

const ContenidoDetallado = styled.div`
  width: 50%;
  min-width: 50%;
  height: 100%;
  position: relative;
`;

const NavMovil = ({ visible, setvisible, contenido, genero }) => {
  const [categoria, setCategoria] = useState();
  const [posicion, setPosicion] = useState(false);
  const [location, setLocation] = useLocation();

  const handleClick = () => {
    setvisible(!visible);
  };

  const handleClickGenero = (genero) => {
    setvisible(!visible);
    setLocation(genero);
    window.location.reload();
  };

  return (
    <Contenido visible={visible}>
      <Navegacion visible={visible}>
        <ContenedorNav posicion={posicion}>
          <ContenidoSimple>
            <ContenedorBotones>
              <button
                onClick={() => {
                  handleClickGenero("mujer");
                }}
              >
                mujer
              </button>
              <button
                onClick={() => {
                  handleClickGenero("hombre");
                }}
              >
                hombre
              </button>
            </ContenedorBotones>
            <ListaNavMovil
              contenido={contenido}
              setPosicion={setPosicion}
              setCategoria={setCategoria}
              genero={genero}
              setvisible={setvisible}
            />
          </ContenidoSimple>
          <ContenidoDetallado>
            <DetalleNavMovil categoria={categoria} setPosicion={setPosicion} />
          </ContenidoDetallado>
        </ContenedorNav>
      </Navegacion>
      <BotonCerrar onClick={handleClick}>
        <span></span>
        <span></span>
      </BotonCerrar>
    </Contenido>
  );
};

export default NavMovil;
