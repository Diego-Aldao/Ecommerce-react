import React, { useState } from "react";
import styled from "styled-components";
import { HiChevronDown } from "react-icons/hi";
import FiltroMovil from "./FiltroMovil/FiltroMovil";

const Contenedor = styled.div`
  width: 100%;
  background: #e7e7e7;
  display: flex;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div,
  button {
    text-transform: uppercase;
    font-size: 14px;
    position: relative;
    height: 50px;
    flex: 1 1 auto;
    max-width: 50%;
    letter-spacing: 1px;
    font-weight: 700;
    color: #4e4e4e;
  }
  select,
  button {
    border: none;
    background: none;
  }

  label {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;

    &:after {
      position: absolute;
      content: "";
      right: 0px;
      bottom: 0px;
      width: 1px;
      height: 100%;
      background: #b1b1b1;
    }
    svg {
      height: 18px;
      width: 18px;
      margin-left: 5px;
    }
  }

  select {
    width: 100%;
    height: 100%;
    appearance: none;
    position: relative;
    z-index: 1;
    text-indent: 29px;
    box-sizing: content-box;
    text-indent: -99999px;
    text-transform: uppercase;
  }
`;

const Filtro = ({ filtros }) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };
  return (
    <>
      <Contenedor visible={visible}>
        <div>
          <label htmlFor="clasif">
            clasificar <HiChevronDown></HiChevronDown>
          </label>
          <select id="clasif">
            <option value="value1">recomendado</option>
            <option value="value3">novedades</option>
            <option value="value2">precio menor a mayor</option>
            <option value="value2">precio mayor a menor</option>
          </select>
        </div>
        <button onClick={handleClick}>filtrar</button>
      </Contenedor>
      <FiltroMovil
        setVisible={setVisible}
        visible={visible}
        filtros={filtros}
      />
    </>
  );
};

export default Filtro;
