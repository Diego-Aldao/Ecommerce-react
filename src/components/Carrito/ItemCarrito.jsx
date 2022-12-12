import React from "react";
import styled from "styled-components";

const Contenedor = styled.div`
  display: flex;
  height: 180px;
  padding: 20px 0px;
  .imagen {
    flex: 1 1 110px;
    img {
      object-fit: fill;
    }
  }
  &:not(:first-child) {
    border-top: 1px solid #e7e7e7;
  }
`;
const Info = styled.div`
  width: calc(100% - 110px);
  padding-left: 20px;
  .precio {
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
  }
  .descripcion {
    max-height: 45px;
    overflow: hidden;
    margin: 12px 0px;
    padding-top: 5px;
    line-height: 1.45;
    color: #646464;
  }
  .variantes {
    display: flex;
    flex-wrap: wrap;
    color: #4b4a4a;
    span {
      font-weight: 800;
      letter-spacing: 1px;
      padding-right: 8px;
      border-right: 1px solid #e7e7e7;
      margin-right: 8px;
      max-width: 70%;
      line-height: 1.4;
      white-space: nowrap;
      overflow: hidden;
      position: relative;
    }
    .talla {
      text-transform: uppercase;
    }
  }
`;
const BotonMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 5px;
  height: 20px;
  justify-content: space-between;
  padding: 0px 5px;
  span {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: black;
  }
`;

const ItemCarrito = ({ item }) => {
  return (
    <Contenedor>
      <div className="imagen">
        <img src={`http://${item.imageUrl}`} alt="" />
      </div>
      <Info>
        <div className="precio">
          <span>{item.price.current.text}</span>
        </div>
        <div className="descripcion">
          <p>{item.name}</p>
        </div>
        <div className="variantes">
          <span>{item.colour}</span>
          <span className="talla">xs</span>
          <span>cant. 1</span>
        </div>
      </Info>
      <BotonMenu>
        <span></span>
        <span></span>
        <span></span>
      </BotonMenu>
    </Contenedor>
  );
};

export default ItemCarrito;
