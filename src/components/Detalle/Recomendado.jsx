import React from "react";
import styled from "styled-components";

const Contenedor = styled.section`
  width: 100%;
  padding: 0px 10px;
  max-width: 960px;
  margin: 20px auto;
`;

const Header = styled.header`
  padding: 20px 0px;
  h2 {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 17px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  @media (min-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 630px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const Item = styled.div`
  padding-bottom: 15px;
  span {
    font-weight: 500;
    margin: 10px 0px;
    display: block;
    font-size: 16px;
  }
  p {
    font-size: 12px;
  }
`;

const Recomendado = ({ recomendado }) => {
  const handleClick = (id, url) => {
    console.log(id, url);
  };

  const items = recomendado.map((item) => {
    return (
      <Item
        key={item.id}
        onClick={() => {
          handleClick(item.id, item.url);
        }}
      >
        <div>
          <img src={`https://${item.imageUrl}`} alt="" />
        </div>
        <span>{item.price.current.text}</span>
        <p>{item.brandName}</p>
      </Item>
    );
  });
  return (
    <Contenedor>
      <Header>
        <h2>puede que tambien te guste</h2>
      </Header>
      <Grid>{items}</Grid>
    </Contenedor>
  );
};

export default Recomendado;
