import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Contenido, Titulo, Footer, Lista } from "./ListaFiltro";
import { FiSearch } from "react-icons/fi";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
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
  const [seleccionado, setSeleccionado] = useState(null);
  const handleClick = () => {
    setPosicion((prevValue) => !prevValue);
  };

  const handleCheck = (item) => {
    item.isSelected = !item.isSelected;
    setSeleccionado({ ...item });
  };

  const handleCheckAll = (items) => {
    items.every((item) => item.isSelected == true)
      ? items.map((item) => (item.isSelected = false))
      : items.map((item) => (item.isSelected = true));
    setSeleccionado({ ...items });
  };

  const handleDeleteAll = (items) => {
    items.map((item) => (item.isSelected = false));
    setSeleccionado(null);
  };

  const items = filtro
    ? filtro.valores.map((item) => {
        return (
          <li
            key={item.id}
            onClick={() => {
              handleCheck(item);
            }}
            className={item.isSelected ? "seleccionado" : ""}
          >
            {item.name} ({item.count})
            {item.isSelected && (
              <span className="item-check">
                <AiOutlineCheck></AiOutlineCheck>
              </span>
            )}
          </li>
        );
      })
    : "";
  return (
    <Contenido>
      <Header>
        <Titulo>
          <h3>
            <BsArrowLeft onClick={handleClick}></BsArrowLeft>
            {filtro && filtro.nombre}
          </h3>
          {Object.keys(seleccionado).length >= 1 ? (
            <span
              className="check"
              onClick={() => {
                handleDeleteAll(filtro.valores);
              }}
            >
              borrar <AiOutlineClose></AiOutlineClose>
            </span>
          ) : (
            <span
              className="check"
              onClick={() => {
                handleCheckAll(filtro.valores);
              }}
            >
              todos <AiOutlineCheck></AiOutlineCheck>
            </span>
          )}
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
