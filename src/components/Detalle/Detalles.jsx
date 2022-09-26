import React from "react";
import styled from "styled-components";
import { useRef, useEffect } from "react";
import { useState } from "react";

const DetalleProducto = styled.div`
  width: 100%;
  flex: 1 1 100%;
  max-height: ${({ isOpen }) => (isOpen ? "100%" : "250px")};
  overflow: hidden;
  position: relative;
  padding-bottom: 80px;
  transition: all 1s ease-in-out;
  margin-top: 40px;
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

const MostrarMas = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  background: linear-gradient(to top, #ffffff, #ffffff67);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease-in-out;
  button {
    width: 250px;
    height: 40px;
    background: #fff;
    border: 2px solid #ccc;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
  }
`;

const Detalles = ({ producto }) => {
  const [isOpen, setIsOpen] = useState(false);
  let ref = useRef();
  let ref2 = useRef();
  let ref3 = useRef();
  let ref4 = useRef();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    ref.current.innerHTML = producto.description;
    ref2.current.innerHTML = producto.brand.description;
    ref3.current.innerHTML = producto.info.sizeAndFit;
    ref4.current.innerHTML = producto.info.aboutMe;
  }, []);
  return (
    <DetalleProducto isOpen={isOpen}>
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
      <MostrarMas>
        <button onClick={handleClick}>
          mostrar {isOpen ? "menos" : "mas"}
        </button>
      </MostrarMas>
    </DetalleProducto>
  );
};

export default Detalles;
