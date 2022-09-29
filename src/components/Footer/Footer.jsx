import React from "react";
import styled from "styled-components";
import visa from "../../assets/logos/visa.png";
import insta from "../../assets/logos/insta.png";
import face from "../../assets/logos/face.png";
import hcbc from "../../assets/logos/hcbc.png";
import master from "../../assets/logos/master.png";
import maestro from "../../assets/logos/maestro.png";
import american from "../../assets/logos/american.png";

const Contenido = styled.footer`
  width: 100%;
  font-size: 12px;
  border-top: 1px solid #e4e4e4;
  p {
    text-transform: uppercase;
  }
  ul {
    flex: 1 1 auto;
    display: flex;
    max-width: 50%;
    flex-wrap: wrap;
    justify-content: end;
    overflow: hidden;
    li {
      text-align: right;
      text-transform: capitalize;
      white-space: nowrap;
      padding: 5px 10px;
      position: relative;
    }
    li::after {
      content: "";
      width: 1px;
      height: 50%;
      background: black;
      position: absolute;
      right: -2px;
      top: 20%;
    }
  }
`;

const Copy = styled.div`
  background: #eee;
  padding: 10px 0px;
`;

const Contenedor = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    padding: 0px 24px;
  }
  @media (min-width: 992px) {
    padding: 0px 32px;
  }
  &.no-padding {
    padding: 0;
  }
`;

const Links = styled.div`
  width: 100%;
  display: none;
  padding: 15px 0px;
  .redes,
  .pago {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    img {
      width: 30px;
      height: 30px;
      margin: 0px 20px;
    }
  }
  .pago {
    padding-left: 40px;
  }
  .redes {
    padding-right: 40px;
    position: relative;
  }
  .redes:after {
    content: "";
    position: absolute;
    right: 0px;
    top: 15%;
    width: 1px;
    height: 75%;
    background: #969696;
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

const Footer = () => {
  return (
    <Contenido>
      <Links>
        <div className="redes">
          <img src={insta} alt="" />
          <img src={face} alt="" />
        </div>
        <div className="pago">
          <img src={visa} alt="" />
          <img src={master} alt="" />
          <img src={hcbc} alt="" />
          <img src={american} alt="" />
          <img src={maestro} alt="" />
        </div>
      </Links>
      <Copy>
        <Contenedor>
          <p>@ 2022 asos</p>
          <ul>
            <li>datos de asos</li>
            <li>privacidad y cookies</li>
            <li>terminos y condiciones</li>
          </ul>
        </Contenedor>
      </Copy>
    </Contenido>
  );
};

export default Footer;
