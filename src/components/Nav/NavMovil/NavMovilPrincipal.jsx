import React, { useState } from "react";
import styled from "styled-components";
import DetalleNavMovil from "./DetalleNavMovil";
import ListaNavMovil from "./ListaNavMovil";
import { useLocation } from "wouter";
import {
  Contenido,
  Navegacion,
  BotonCerrar,
  ContenedorNav,
  ContenidoSimple,
  ContenidoDetallado,
} from "../../NavMovil";

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

const NavMovilPrincipal = ({ visible, setvisible, contenido, genero }) => {
  const [categoria, setCategoria] = useState();
  const [posicion, setPosicion] = useState(false);
  const [location, setLocation] = useLocation();

  const handleClick = () => {
    setvisible(!visible);
  };

  const handleClickGenero = (genero) => {
    setLocation(`/${genero}`);
  };

  return (
    <Contenido visible={visible} left={true} media={"1024px"}>
      <Navegacion visible={visible} left={true}>
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

export default NavMovilPrincipal;
