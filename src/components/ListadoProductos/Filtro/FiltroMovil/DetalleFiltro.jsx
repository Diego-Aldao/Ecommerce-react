import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Contenido, Titulo, Footer, Lista } from "./ListaFiltro";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

const Header = styled.div`
  width: 100%;
  background: white;
`;

const Buscador = styled.div`
  width: 100%;
  padding: 10px;
  display: ${({ longitud }) => (longitud > 20 ? "block" : "none")};
  div {
    border: 1px solid #d4d4d4;
    border-radius: 20px;
    display: flex;
    padding: 0px 10px;
  }
  input {
    border: none;
    height: 36px;
    flex: 1 1 auto;
    padding-left: 10px;
    outline: none;
    border-radius: 10px;
  }
  button {
    height: 36px;
    width: 36px;
    background: none;
    border: none;
    svg {
      height: 20px;
      width: 20px;
    }
  }
`;

const DetalleFiltro = ({ filtro, setPosicion }) => {
  const handleClick = () => {
    setPosicion((prevValue) => !prevValue);
  };

  const items = filtro
    ? filtro.valores.map((item) => {
        return (
          <li key={item.id}>
            {item.name} ({item.count})
          </li>
        );
      })
    : "";
  return (
    <Contenido>
      <Header>
        <Titulo onClick={handleClick}>
          <BsArrowLeft></BsArrowLeft>
          <h3>{filtro && filtro.nombre}</h3>
        </Titulo>
        <Buscador longitud={filtro && filtro.longitud}>
          <div>
            <input type="text" placeholder="buscar" />
            <button>
              <FiSearch></FiSearch>
            </button>
          </div>
        </Buscador>
      </Header>
      <Lista>{items}</Lista>
      <Footer>
        <button>ver articulos</button>
      </Footer>
    </Contenido>
  );
};

export default DetalleFiltro;
