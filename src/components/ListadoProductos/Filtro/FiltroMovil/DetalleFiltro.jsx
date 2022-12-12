import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Contenido, Titulo, Footer, Lista } from "./ListaFiltro";
import { FiSearch } from "react-icons/fi";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import useFiltro from "../../../../hooks/useFiltro";
import { useEffect } from "react";

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
  const [currentFiltro, setCurrentFiltro] = useState();

  useEffect(() => {
    setCurrentFiltro(filtro);
  }, [filtro]);

  const { handleCheck, handleCheckAll, handleDeleteAll, seleccionados } =
    useFiltro();
  console.log(seleccionados);

  const handleClick = () => {
    setPosicion((prevValue) => !prevValue);
  };

  const items = currentFiltro
    ? currentFiltro.map((item) => {
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
    <>
      <Contenido>
        <Header>
          <Titulo>
            <h3>
              <BsArrowLeft onClick={handleClick}></BsArrowLeft>
              {filtro && filtro.nombre}
            </h3>
            {Object.keys(seleccionados).length >= 1 ? (
              <span
                className="check"
                onClick={() => {
                  handleDeleteAll(currentFiltro.facetValues);
                }}
              >
                borrar <AiOutlineClose></AiOutlineClose>
              </span>
            ) : (
              <span
                className="check"
                onClick={() => {
                  handleCheckAll(currentFiltro.facetValues);
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
    </>
  );
};

export default DetalleFiltro;
