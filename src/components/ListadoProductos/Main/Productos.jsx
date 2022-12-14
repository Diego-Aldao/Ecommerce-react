import React from "react";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "wouter";
import { useContext } from "react";
import GuardadosContext from "../../../context/GuardadosContext";

const Producto = styled.div`
  position: relative;
  width: 100%;
  h2 {
    font-size: 14px;
    font-weight: 400;
  }
`;

const Descripcion = styled.div`
  word-wrap: break-word;
  height: 44px;
  line-height: 22px;
  overflow: hidden;
  position: relative;
  margin-bottom: 10px;
  &::after {
    content: "";
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 50%;
    height: 50%;
    background: linear-gradient(to right, #00000000, #ffffff84);
  }
`;

const Precios = styled.p`
  display: flex;
  .valor-viejo {
    text-decoration: line-through;
    font-size: 12px;
    font-weight: 300;
  }
  .valor-nuevo {
    color: #c90202;
  }
`;

const Favorito = styled.div`
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

const Productos = ({ productos }) => {
  const { guardados, setGuardados } = useContext(GuardadosContext);
  const handleClick = (producto) => {
    let arrGuardados = [];
    if (!localStorage.getItem("Guardados")) {
      arrGuardados.push(producto);
      localStorage.setItem("Guardados", JSON.stringify(arrGuardados));
    } else {
      arrGuardados = JSON.parse(localStorage.getItem("Guardados"));
      arrGuardados.push(producto);
      localStorage.setItem("Guardados", JSON.stringify(arrGuardados));
    }
    setGuardados((oldGuardados) => [...oldGuardados, producto]);
    console.log(
      JSON.parse(localStorage.getItem("Guardados")),
      "click guardados"
    );
  };
  return (
    <>
      {productos.map((producto) => {
        return (
          <Producto key={producto.id}>
            <Link to={`/${producto.url}`}>
              <div>
                <img src={`https://${producto.imageUrl}`} alt="" />
              </div>
              <Descripcion>
                <h2>{producto.name}</h2>
              </Descripcion>
              <Precios>
                {producto.price.previous.text.length > 1 ? (
                  <>
                    <span className="valor-viejo">
                      {producto.price.current.text}
                    </span>
                    <span className="valor-nuevo">
                      {producto.price.previous.text}
                    </span>
                  </>
                ) : (
                  <span>{producto.price.current.text}</span>
                )}
              </Precios>
            </Link>
            <Favorito
              onClick={() => {
                handleClick(producto);
              }}
            >
              <AiOutlineHeart></AiOutlineHeart>
            </Favorito>
          </Producto>
        );
      })}
    </>
  );
};

export default Productos;
