import React, { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import styled from "styled-components";
import { ImStarFull, ImStarEmpty, ImStarHalf } from "react-icons/im";
import { useRef } from "react";

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

const DetalleProducto = styled.div`
  width: 100%;
  h2 {
    color: #ccc;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1px;
    margin: 20px 0px 10px;
  }
  p {
    margin-bottom: 10px;
    line-height: 1.5;
    color: #696969;
    font-weight: 400;
    font-size: 16px;
  }
  ul {
    list-style-type: disc;
    padding-left: 20px;
    margin-top: 10px;
    li {
      margin-bottom: 10px;
    }
  }
`;

const Info = ({ producto }) => {
  let ref = useRef();
  let ref2 = useRef();
  let ref3 = useRef();
  let ref4 = useRef();
  console.log(producto);

  useEffect(() => {
    ref.current.innerHTML = producto.description;
    ref2.current.innerHTML = producto.brand.description;
    ref3.current.innerHTML = producto.info.sizeAndFit;
    ref4.current.innerHTML = producto.info.aboutMe;
  }, []);

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
      <DetalleProducto>
        <div className="col">
          <h2>detalles del producto</h2>
          <p className="descripcion" ref={ref}></p>
        </div>
        <div className="col">
          <div className="referencia">
            <h2>referencia</h2>
            <p>{producto.productCode}</p>
          </div>
          <div className="marca">
            <h2>marca</h2>
            <p ref={ref2}></p>
          </div>
        </div>
        <div className="col">
          <div className="talla-corte">
            <h2>talla y corte</h2>
            <p ref={ref3}></p>
          </div>
          <div className="como-cuidarme">
            <h2>como cuidarme</h2>
            <p>{producto.info.careInfo}</p>
          </div>
          <div className="como-soy">
            <h2>como soy</h2>
            <p ref={ref4}></p>
          </div>
        </div>
      </DetalleProducto>
    </Contenedor>
  );
};

export default Info;
