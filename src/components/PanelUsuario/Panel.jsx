import React from "react";
import styled from "styled-components";
import { FiHome, FiHeart, FiLogOut, FiShoppingBag } from "react-icons/fi";
import { GrContactInfo } from "react-icons/gr";
import { BsMailbox, BsCreditCard2Front } from "react-icons/bs";

const Contenedor = styled.main`
  width: 100%;
  margin: 0 auto;
  max-width: 520px;

  @media (min-width: 768px) {
    display: flex;
    max-width: 960px;
    flex-direction: row-reverse;
    padding: 0px 20px;
  }
`;

const Banner = styled.div`
  width: 100%;
  height: 100px;
  background: #ebebeb;
  @media (min-width: 768px) {
    min-width: 65%;
    margin-left: 20px;
    height: 529px;
  }
`;
const Info = styled.div`
  width: 100%;
`;
const Perfil = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: white;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
const Imagen = styled.div`
  background: black;
  height: 100px;
  width: 100px;
  position: absolute;
  border-radius: 50%;
  top: -35%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 36px;
    text-transform: uppercase;
    color: white;
    font-weight: 800;
    padding-top: 10px;
  }
  @media (min-width: 768px) {
    top: 25px;
    left: -15px;
  }
`;

const Nombre = styled.p`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  text-transform: capitalize;
  span {
    font-weight: 500;
    font-size: 22px;
    letter-spacing: 1px;
    padding-top: 5px;
  }
  @media (min-width: 768px) {
    margin-top: 0px;
    margin-left: auto;
    width: 60%;
    align-items: flex-start;
    span {
      line-height: 1.2;
      font-size: 18px;
    }
  }
`;
const Opcion = styled.div`
  display: flex;
  align-items: center;
  background: white;
  svg {
    width: 70px;
    height: 20px;
  }
  p {
    padding: 22px 0px;
    flex: 1 1 auto;
    border-bottom: 1px solid #dbdbdb;
  }
  p::first-letter {
    text-transform: uppercase;
  }
  &.opciones-principales {
    margin: 5px 0px;
    p {
      border-bottom: none;
    }
  }
`;

const Panel = () => {
  return (
    <Contenedor>
      <Banner></Banner>
      <Info>
        <Perfil>
          <Imagen>
            <p>ds</p>
          </Imagen>
          <Nombre>
            hola, <span>diego uchiha</span>
          </Nombre>
        </Perfil>
        <Opcion className="opciones-principales">
          <GrContactInfo></GrContactInfo> <p>mi perfil</p>
        </Opcion>
        <Opcion>
          <FiHeart></FiHeart>
          <p>guardados</p>
        </Opcion>
        <Opcion>
          <FiShoppingBag></FiShoppingBag> <p>carrito</p>
        </Opcion>
        <Opcion>
          <BsMailbox></BsMailbox> <p>mi direccion</p>
        </Opcion>
        <Opcion>
          <BsCreditCard2Front></BsCreditCard2Front>
          <p>tarjetas guardadas</p>
        </Opcion>
        <Opcion className="opciones-principales">
          <FiLogOut></FiLogOut> <p>logout</p>
        </Opcion>
      </Info>
    </Contenedor>
  );
};

export default Panel;
