import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FiSearch, FiUser, FiShoppingBag, FiHeart } from "react-icons/fi";
import NavMovilPrincipal from "./NavMovil/NavMovilPrincipal";
import NavDeskPrincipal from "./NavDesk/NavDeskPrincipal";
import useGeneros from "../../hooks/useGeneros";
import { Link } from "wouter";

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  background: black;
  color: white;
  display: flex;
  position: relative;
  z-index: 9999;
  @media (min-width: 768px) {
    height: 60px;
  }
  @media (min-width: 1024px) {
    padding: 0px 32px;
  }
`;
const Hamburguesa = styled.div`
  height: 100%;
  width: 58px;
  padding: 0px 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  span {
    width: 18px;
    height: 2px;
    margin: 2px;
    background: white;
  }
  @media (min-width: 1024px) {
    display: none;
  }
`;
const Logo = styled.p`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 32px;
  margin-right: auto;
  @media (min-width: 1024px) {
    padding-right: 20px;
  }
`;

const BotonGenero = styled.button`
  height: 100%;
  line-height: 60px;
  background: none;
  width: 115px;
  border: none;
  display: none;
  text-transform: uppercase;
  font-weight: 700;
  &.hombre {
    background: ${({ genero }) =>
      genero == "hombre" && "var(--color-secundario)"};
    color: ${({ genero }) => (genero == "hombre" ? "black" : "white")};
  }
  &.mujer {
    background: ${({ genero }) =>
      genero !== "hombre" && "var(--color-secundario)"};
    color: ${({ genero }) => (genero == "hombre" ? "white" : "black")};
  }
  @media (min-width: 1024px) {
    display: block;
  }
`;

const Buscador = styled.form`
  flex: 1 1 auto;
  display: none;
  padding: 10px 15px;
  div {
    width: 100%;
    display: flex;
    background: white;
    border-radius: 20px;
    input {
      flex: 1 1 auto;
      border: none;
      margin-left: 20px;
    }
    button {
      width: 50px;
      background: none;
      border: none;
      svg {
        stroke-width: 2;
        width: 20px;
        height: 20px;
      }
    }
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;
const Icono = styled.button`
  background: none;
  border: none;
  padding: 10px;
  svg {
    color: white;
    width: 22px;
    height: 22px;
    stroke-width: 3;
  }
  @media (min-width: 480px) {
    padding: 15px;
  }
  @media (min-width: 768px) {
    &.buscador {
      display: none;
    }
  }
`;

const Navegacion = ({ genero, navegacion }) => {
  const { contenidoGenero } = useGeneros({ navegacion, genero });
  const [visible, setvisible] = useState(false);

  const handleClick = () => {
    setvisible(!visible);
  };
  return (
    <>
      <Nav>
        <Hamburguesa onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
        </Hamburguesa>
        <Logo>asos</Logo>
        <BotonGenero className="mujer" genero={genero}>
          <Link to="/mujer">mujer</Link>
        </BotonGenero>
        <BotonGenero className="hombre" genero={genero}>
          <Link to="/hombre">hombre</Link>
        </BotonGenero>
        <Buscador>
          <div>
            <input type="text" placeholder="buscar articulos y marcas" />
            <button>
              <FiSearch></FiSearch>
            </button>
          </div>
        </Buscador>
        <Icono className="buscador">
          <FiSearch></FiSearch>
        </Icono>
        <Link to="/usuario/panelUsuario">
          <Icono>
            <FiUser></FiUser>
          </Icono>
        </Link>
        <Link to="/usuario/guardados">
          <Icono>
            <FiHeart></FiHeart>
          </Icono>
        </Link>
        <Icono>
          <FiShoppingBag></FiShoppingBag>
        </Icono>
      </Nav>
      <NavMovilPrincipal
        visible={visible}
        setvisible={setvisible}
        contenido={contenidoGenero}
        genero={genero}
      />
      <NavDeskPrincipal contenido={contenidoGenero} genero={genero} />
    </>
  );
};

export default Navegacion;
