import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Item = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 150px;
  }
`;

const CardInicio = ({ data, setProducto }) => {
  const handleClick = (productoClickeado) => {
    setProducto(productoClickeado);
    localStorage.setItem("producto", JSON.stringify(productoClickeado));
  };

  let item = data.map((producto) => {
    let precio = producto.price.current.text;
    return (
      <Item
        data-producto={producto.id}
        key={producto.id}
        onClick={() => {
          handleClick(producto);
        }}
      >
        <Link to="/detalle">
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
