import React from "react";
import styled from "styled-components";
import ItemCarrito from "./ItemCarrito";

const Contenedor = styled.section`
  width: 100%;
  background: #f3f3f3;
`;

const Header = styled.header`
  display: flex;
  padding: 25px 0px;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

const ContenedorFlex = styled.main`
  background: white;
  padding: 0px 10px 50px;
`;
const Contenido = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 520px;
  margin: 0 auto;
  @media (min-width: 768px) {
    max-width: 1300px;
  }
`;
const Envio = styled.div`
  padding: 15px 20px;
  display: flex;
  .icono {
    width: 50px;
  }
  .info {
    width: calc(100% - 50px);
  }
`;

const Main = ({ items }) => {
  return (
    <Contenedor>
      <Header>carrito</Header>
      <ContenedorFlex>
        <Contenido>
          {items.map((item) => {
            return <ItemCarrito item={item} />;
          })}
        </Contenido>
        <Envio>
          <div className="icono"></div>
          <div className="info">
            <h2>envio estandar gratis</h2>
            <p>hay opcion de enviarlo gratis en la mayoria de las provincias</p>
          </div>
        </Envio>
      </ContenedorFlex>
    </Contenedor>
  );
};

export default Main;
