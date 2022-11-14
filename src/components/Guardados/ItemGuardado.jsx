import React from "react";
import styled from "styled-components";
import Link from "wouter";
import { FiTrash } from "react-icons/fi";
import { useContext } from "react";
import GuardadosContext from "../../context/GuardadosContext";
import CarritoContext from "../../context/CarritoContext";

const Item = styled.div`
  position: relative;
  .nombre {
    height: 45px;
    overflow: hidden;
    margin: 10px 0px;
    font-size: 14px;
    line-height: 1.5;
    position: relative;
  }
  .nombre:after {
    content: "";
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 40%;
    height: 50%;
    background: linear-gradient(to left, #ffffff, #ffffff52 70%);
  }
`;

const Precios = styled.p`
  display: flex;
  margin-bottom: 10px;
  .valor-viejo {
    text-decoration: line-through;
    font-size: 12px;
    font-weight: 300;
  }
  .valor-nuevo {
    color: #c90202;
  }
`;

const Caracteristicas = styled.ul`
  list-style: none;
  position: relative;
  li {
    height: 46px;
    border-top: 1px solid #e4e4e4;
    font-size: 14px;
    white-space: nowrap;
    width: 100%;
    position: relative;
    display: flex;
    overflow: hidden;
    align-items: center;
    color: #777777;
    span {
      position: absolute;
    }
  }
  li:after {
    content: "";
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 20%;
    height: 100%;
    background: linear-gradient(to left, #ffffff, #ffffff52 90%);
  }
`;

const Añadir = styled.button`
  padding: 13px 5px 10px;
  border: 1px solid #b8b8b8;
  width: 100%;
  background: none;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1.5;
`;

const Eliminar = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
  background: #fdffffc5;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  svg {
    height: 20px;
    width: 20px;
  }
  &:hover {
    background: var(--gradiente-principal);
    svg {
      color: red;
    }
  }
`;

const ItemGuardado = ({ item }) => {
  const { setGuardados } = useContext(GuardadosContext);
  const { setCarrito } = useContext(CarritoContext);

  const añadirAlCarrito = (itemAñadido) => {
    let arrCarrito = [];
    if (!localStorage.getItem("Carrito")) {
      arrCarrito.push(itemAñadido);
      localStorage.setItem("Carrito", JSON.stringify(arrCarrito));
    } else {
      arrCarrito = JSON.parse(localStorage.getItem("Carrito"));
      arrCarrito.push(itemAñadido);
      localStorage.setItem("Carrito", JSON.stringify(arrCarrito));
    }
    setCarrito((oldCarrito) => [...oldCarrito, itemAñadido]);
    console.log(JSON.parse(localStorage.getItem("Carrito")), "click carrito");
  };

  const eliminarGuardado = (itemGuardado) => {
    let guardadosStorage = JSON.parse(localStorage.getItem("Guardados"));
    let guardadosFiltrados = guardadosStorage.filter(
      (guardado) => guardado.id != itemGuardado.id
    );
    localStorage.setItem("Guardados", JSON.stringify(guardadosFiltrados));
    setGuardados(guardadosFiltrados);
  };

  return (
    <Item>
      <div>
        <img src={`https://${item.imageUrl}`} alt="" />
      </div>
      <p className="nombre">{item.name}</p>
      <Precios>
        {item.price.previous.text.length > 1 ? (
          <>
            <span className="valor-viejo">{item.price.current.text}</span>
            <span className="valor-nuevo">{item.price.previous.text}</span>
          </>
        ) : (
          <span>{item.price.current.text}</span>
        )}
      </Precios>
      <Caracteristicas>
        <li>
          <span>{item.colour}</span>
        </li>
        <li>
          <span>{item.brandName}</span>
        </li>
      </Caracteristicas>
      <Añadir
        onClick={() => {
          añadirAlCarrito(item);
        }}
      >
        agregar al carrito
      </Añadir>
      <Eliminar
        onClick={() => {
          eliminarGuardado(item);
        }}
      >
        <FiTrash></FiTrash>
      </Eliminar>
    </Item>
  );
};

export default ItemGuardado;
