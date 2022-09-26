import React from "react";
import styled from "styled-components";
import { useRef, useEffect } from "react";

const DetalleProducto = styled.div`
  width: 100%;
  flex: 1 1 100%;
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
  @media (min-width: 720px) {
    display: flex;
    .col {
      flex: 1 1 33.33%;
      padding: 0px 10px;
    }
  }
`;

const Detalles = ({ producto }) => {
  let ref = useRef();
  let ref2 = useRef();
  let ref3 = useRef();
  let ref4 = useRef();

  useEffect(() => {
    ref.current.innerHTML = producto.description;
    ref2.current.innerHTML = producto.brand.description;
    ref3.current.innerHTML = producto.info.sizeAndFit;
    ref4.current.innerHTML = producto.info.aboutMe;
  }, []);
  return (
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
  );
};

export default Detalles;
