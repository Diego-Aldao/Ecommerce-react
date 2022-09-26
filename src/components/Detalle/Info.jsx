import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import styled from "styled-components";
import { ImStarFull, ImStarEmpty, ImStarHalf } from "react-icons/im";
import { TbTruckDelivery, TbTruckReturn, TbBoxMultiple } from "react-icons/tb";

import Detalles from "./Detalles";
import useWindowSize from "../../hooks/useWindowSize";

const Contenedor = styled.aside`
  width: 100%;
  padding: 30px 10px 0px;
  label {
    font-weight: 600;
    margin-right: 10px;
    text-transform: uppercase;
    font-size: 12px;
    display: flex;
    align-items: center;
  }
  @media (min-width: 720px) {
    flex: 1 1 35%;
    padding-left: 20px;
  }
`;

const NombreProducto = styled.h1`
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 400;
  line-height: 1.4;
`;
const Precio = styled.span`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 20px;
  display: block;
`;

const Calificacion = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 20px;
  span {
    margin-right: 10px;
  }
  .numero-rating {
    font-weight: 400;
  }
`;

const Colores = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  margin-bottom: 20px;
  span {
    text-transform: capitalize;
  }
`;

const Talla = styled.div`
  width: 100%;
  label {
    margin-bottom: 10px;
  }
  select {
    width: 100%;
    padding: 10px 5px;
    text-transform: capitalize;
  }
  margin-bottom: 20px;
`;

const Compra = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  button {
    flex: 1 1 auto;
    max-width: 75%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: #34a07c;
    color: white;
    text-transform: uppercase;
    font-weight: 800;
    font-size: 14px;
  }
  span {
    border-radius: 50%;
    background: #eee;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 22px;
    }
  }
`;

const Envio = styled.div`
  padding: 16px;
  border: 1px solid #eee;
  span {
    text-transform: capitalize;
    font-size: 13px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    line-height: 1.6;
    svg {
      margin-right: 10px;
      font-size: 26px;
      stroke-width: 1;
    }
  }
  span:nth-child(3) {
    margin-left: 36px;
    display: block;
    svg {
      font-size: 14px;
      top: 3px;
      position: relative;
      margin-left: 5px;
      stroke-width: 1.5;
    }
  }
`;
const Restricciones = styled.div`
  border: 1px solid #eee;
  border-top: none;
  width: 100%;
  padding: 16px;
  font-size: 11.5px;
  text-transform: capitalize;
`;

const Info = ({ producto }) => {
  const tamaño = useWindowSize();
  const tallas = producto.variants.map((variante) => {
    return (
      <React.Fragment key={variante.id}>
        {variante.isAvailable && (
          <option value={variante.brandSize} disabled={!variante.isInStock}>
            {variante.isInStock
              ? variante.displaySizeText
              : `${variante.displaySizeText} - agotado`}
          </option>
        )}
      </React.Fragment>
    );
  });

  return (
    <Contenedor>
      <NombreProducto>{producto.name}</NombreProducto>
      <Precio>{producto.price.current.text}</Precio>
      <Calificacion>
        <span>
          <ImStarFull></ImStarFull>
        </span>
        <span>
          <ImStarFull></ImStarFull>
        </span>
        <span>
          <ImStarFull></ImStarFull>
        </span>
        <span>
          <ImStarHalf></ImStarHalf>
        </span>
        <span>
          <ImStarEmpty></ImStarEmpty>
        </span>
        <span className="numeroRating">
          {producto.rating.averageOverallRating} (
          {producto.rating.totalReviewCount})
        </span>
      </Calificacion>
      <Colores>
        <label htmlFor="color-select">color:</label>
        <span>negro</span>
      </Colores>
      <Talla>
        <label htmlFor="talla-select">talla:</label>
        <select name="talla-select" id="talla">
          {tallas}
        </select>
      </Talla>
      <Compra>
        <button>añadir a mi bolsa</button>
        <span>
          <AiOutlineHeart></AiOutlineHeart>
        </span>
      </Compra>
      <Envio>
        <span>
          <TbTruckDelivery></TbTruckDelivery> envio gratis
        </span>
        <span>
          <TbTruckReturn></TbTruckReturn> devoluciones gratis
        </span>
        <span>
          se aplican terminos y condiciones. mas informacion
          <TbBoxMultiple></TbBoxMultiple>
        </span>
      </Envio>
      <Restricciones>este producto tiene reestricciones de envio</Restricciones>
      {tamaño.width < 720 ? <Detalles producto={producto} /> : null}
    </Contenedor>
  );
};

export default Info;
