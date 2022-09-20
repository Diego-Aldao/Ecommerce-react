import React, { useState } from "react";
import styled from "styled-components";
import { HiChevronDown } from "react-icons/hi";

const Contenedor = styled.div`
  width: 100%;
  background: #eee;
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;

const Filtros = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  padding: 10px 32px;
  button:nth-of-type(4n + 0) .detalle {
    left: unset;
    right: 0px;
  }
`;

const Select = styled.button`
  height: 50px;
  border: none;
  display: flex;
  align-items: center;
  padding: 5px;
  position: relative;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  span {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    text-align: start;
  }
`;
const Detalle = styled.div`
  position: absolute;
  left: 0;
  background: white;
  z-index: 2;
  width: 356px;
  box-shadow: 1px 1px 5px #00000083;
  visibility: hidden;
  transition: all 0.1s ease-in-out;
  top: 60px;
  opacity: 0;
  &.visible {
    visibility: visible;
    opacity: 1;
    top: 50px;
  }
  &.oculto {
    visibility: hidden;
    opacity: 0;
    top: 60px;
  }
  .header {
    display: flex;
    width: 100%;
    padding: 10px;
    height: 60px;
    .seleccionados,
    button {
      flex: 1 1 auto;
    }
    span {
      background: none;
      padding: 0px 10px;
      max-width: 87px;
      border: 1px solid #ccc;
      text-transform: uppercase;
    }
    p {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      text-align: start;

      height: 50%;
    }
  }
  ul {
    padding: 10px;
    background: #eee;
    overflow: auto;
    height: auto;
    max-height: 450px;
    li {
      width: 100%;
      height: 44px;
      background: white;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 10px;
      border-radius: 5px;
      box-shadow: 1px 1px 5px #0000001a;
      padding: 10px;
      text-transform: capitalize;
    }
  }
`;

const FiltroDesk = ({ filtros }) => {
  const [claseActiva, setClaseActiva] = useState();
  const [visible, setVisible] = useState(false);

  const handleClick = (id) => {
    console.log(id);
    setClaseActiva(id);
  };

  const items = filtros.map((filtro) => {
    return (
      <Select
        key={filtro.id}
        onClick={() => {
          handleClick(filtro.id);
        }}
        onMouseLeave={() => {
          setClaseActiva(null);
        }}
      >
        <span>{filtro.name}</span>
        <HiChevronDown></HiChevronDown>
        <Detalle
          visible={visible}
          className={`${
            filtro.id === claseActiva ? "visible" : "oculto"
          } detalle`}
        >
          <div className="header">
            <div className="seleccionados">
              <p className="cant-seleccionados">0 seleccionados</p>
              <p className="item-seleccionados">hoy</p>
            </div>
            <span>
              <HiChevronDown></HiChevronDown> todo
            </span>
          </div>
          <ul>
            {filtro.facetValues.map((value) => {
              return <li key={value.id}>{value.name}</li>;
            })}
          </ul>
        </Detalle>
      </Select>
    );
  });

  return (
    <Contenedor>
      <Filtros>
        <Select>
          <span>clasificar</span> <HiChevronDown></HiChevronDown>
        </Select>
        {items}
      </Filtros>
    </Contenedor>
  );
};

export default FiltroDesk;
