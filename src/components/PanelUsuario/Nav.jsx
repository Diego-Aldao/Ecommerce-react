import React from "react";
import styled from "styled-components";
import { FiHome } from "react-icons/fi";

const Logo = styled.p`
  height: 100%;
  display: flex;
  align-items: center;
  letter-spacing: -2px;
  font-weight: 600;
  font-size: clamp(32px, 5vw, 54px);
  flex: 1 0 20%;
`;

const Navegacion = styled.nav`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  padding: 15px 20px;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    padding: 20px;
  }
`;
const Titulo = styled.span`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  flex: 1 1 60%;
  text-align: center;
  font-size: clamp(16px, 3vw, 24px);
`;

const Icono = styled.span`
  flex: 1 0 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
    stroke-width: 2;
  }
`;

const Nav = () => {
  return (
    <Navegacion>
      <Logo>asos</Logo>
      <Titulo>mi cuenta</Titulo>
      <Icono>
        <FiHome></FiHome>
      </Icono>
    </Navegacion>
  );
};

export default Nav;
