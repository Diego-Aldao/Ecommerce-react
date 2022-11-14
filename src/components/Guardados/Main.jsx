import React from "react";
import styled from "styled-components";
import Aviso from "./Aviso";
import ItemGuardado from "./ItemGuardado";

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

const ContenedorGrid = styled.main`
  background: white;
  padding: 0px 10px 50px;
`;
const Contenido = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  grid-row-gap: 25px;
  max-width: 520px;
  margin: 0 auto;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 1300px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const HeaderContenido = styled.header`
  grid-column: 1 / 3;
  font-size: 14px;
  padding-top: 20px;
  color: #666666;
  @media (min-width: 768px) {
    grid-column: 1 / 4;
  }
  @media (min-width: 1024px) {
    grid-column: 1 / 5;
  }
`;

const Main = ({ items }) => {
  console.log(items);
  return (
    <Contenedor>
      {items.length >= 1 ? (
        <>
          <Header>
            <p>articulos guardados</p>
          </Header>
          <ContenedorGrid>
            <Contenido>
              <HeaderContenido>{`${items.length} artículos`}</HeaderContenido>
              {items.map((item) => {
                return <ItemGuardado item={item} key={item.id} />;
              })}
            </Contenido>
          </ContenedorGrid>
        </>
      ) : (
        <Aviso />
      )}
    </Contenedor>
  );
};

export default Main;
