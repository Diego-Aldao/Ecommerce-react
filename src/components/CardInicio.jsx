import React from "react";
import styled from "styled-components";
import { Link } from "wouter";
import useData from "../hooks/useData";

const Item = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 150px;
  }
`;

const CardInicio = () => {
  const { productos } = useData();

  let item = productos.map((producto) => {
    let precio = producto.price.current.text;
    return (
      <Item key={producto.id}>
        <Link to={`/detalle/${producto.id}`}>
          <img src={`http://${producto.imageUrl}`} alt="" />
          <h2>{producto.name}</h2>
          <span>{precio}</span>
        </Link>
      </Item>
    );
  });
  return item;
};

export default CardInicio;
