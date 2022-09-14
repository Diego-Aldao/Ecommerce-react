import styled from "styled-components";

export const Contenido = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  left: 0;
  background: #0000005a;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  z-index: 1;
  transition: all 0.3s ease-in-out;
  display: flex;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const Navegacion = styled.nav`
  width: calc(100% - 50px);
  max-width: 320px;
  position: relative;
  left: ${({ visible, left }) =>
    visible && left ? "0" : !left ? "unset" : "-100%"};
  right: ${({ visible, left }) =>
    visible && !left ? "0" : left ? "unset" : "-100%"};
  background: white;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
`;

export const ContenedorNav = styled.div`
  width: 200%;
  display: flex;
  overflow-y: scroll;
  position: relative;
  left: ${({ posicion }) => (posicion ? "-100%" : "0px")};
  transition: all 0.3s ease-in-out;
`;

export const ContenidoSimple = styled.div`
  width: 50%;
  min-width: 50%;
`;
export const ContenedorBotones = styled.div`
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
export const BotonCerrar = styled.div`
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

export const ContenidoDetallado = styled.div`
  width: 50%;
  min-width: 50%;
  height: 100%;
  position: relative;
`;
