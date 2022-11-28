import React from "react";
import styled from "styled-components";
import { HiChevronDown } from "react-icons/hi";
import ItemFiltro from "./ItemFiltro";

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

const FiltroDesk = ({ filtros }) => {
  return (
    <Contenedor>
      <Filtros>
        <Select>
          <span>clasificar</span> <HiChevronDown></HiChevronDown>
        </Select>
        {filtros.map((filtro) => {
          return <ItemFiltro info={filtro} />;
        })}
      </Filtros>
    </Contenedor>
  );
};

export default FiltroDesk;
