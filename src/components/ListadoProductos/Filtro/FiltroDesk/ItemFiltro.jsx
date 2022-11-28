import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { HiChevronDown } from "react-icons/hi";
import useFiltro from "../../../../hooks/useFiltro";

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
    justify-content: space-between;
    padding: 10px;
    height: 60px;
    overflow: hidden;
    .seleccionados,
    button {
      flex: 1 1 auto;
    }
    .seleccionados {
      overflow: hidden;
      max-width: calc(100% - 110px);
      white-space: nowrap;
      position: relative;
    }
    .seleccionados:after {
      content: "";
      position: absolute;
      width: 30%;
      right: 0px;
      top: 0px;
      height: 100%;
      background: linear-gradient(to right, #ffffff6d, #fff);
    }
    span {
      background: none;
      padding: 0px 10px;
      max-width: 95px;
      border: 1px solid #ccc;
      text-transform: uppercase;
      justify-content: space-between;
    }
    .item-seleccionados,
    .cant-seleccionados {
      display: flex;
      height: 50%;
    }
    .item-seleccionados p {
      margin-right: 10px;
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
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      border-radius: 5px;
      box-shadow: 1px 1px 5px #0000001a;
      padding: 10px;
      text-transform: capitalize;
      .item-check {
        margin-left: auto;
        width: 15px;
      }
    }
    .seleccionado {
      color: black;
      font-weight: 600;
      background: var(--gradiente-principal);
    }
  }
`;

const ItemFiltro = ({ info }) => {
  const { handleCheck, handleCheckAll, handleDeleteAll, seleccionados } =
    useFiltro();
  const [claseActiva, setClaseActiva] = useState();
  const [total, setTotal] = useState([]);
  const [nombres, setNombres] = useState([]);

  const handleClick = (id, info) => {
    setClaseActiva(id);
    const checked = info.facetValues.filter((item) => item.isSelected === true);
    const nombresChecked = checked.map((item) => item.name);
    setNombres(nombresChecked);
    setTotal(checked);
  };
  return (
    <Select
      key={info.id}
      onClick={() => {
        handleClick(info.id, info);
      }}
      onMouseLeave={() => {
        setClaseActiva(null);
      }}
    >
      <span>{info.name}</span>
      <HiChevronDown></HiChevronDown>
      <Detalle
        className={`${info.id === claseActiva ? "visible" : "oculto"} detalle`}
      >
        <div className="header">
          <div className="seleccionados">
            <p className="cant-seleccionados">{total.length} seleccionados</p>
            <div className="item-seleccionados">
              {nombres.map((nombre) => {
                return <>{nombre}, </>;
              })}
            </div>
          </div>
          {Object.keys(seleccionados).length >= 1 ? (
            <span
              className="check"
              onClick={() => {
                handleDeleteAll(info.facetValues);
              }}
            >
              borrar <AiOutlineClose></AiOutlineClose>
            </span>
          ) : (
            <span
              className="check"
              onClick={() => {
                handleCheckAll(info.facetValues);
              }}
            >
              todos <AiOutlineCheck></AiOutlineCheck>
            </span>
          )}
        </div>
        <ul>
          {info.facetValues.map((value) => {
            return (
              <li
                key={value.id}
                onClick={() => {
                  handleCheck(value);
                }}
                className={value.isSelected ? "seleccionado" : ""}
              >
                {value.name} ({value.count})
                {value.isSelected && (
                  <span className="item-check">
                    <AiOutlineCheck></AiOutlineCheck>
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </Detalle>
    </Select>
  );
};

export default ItemFiltro;
