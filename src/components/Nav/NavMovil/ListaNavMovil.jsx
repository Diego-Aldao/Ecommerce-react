import React from "react";
import styled from "styled-components";
import { Link } from "wouter";

const Contenido = styled.ul`
  list-style-type: none;
  width: 100%;
  background: white;
  padding: 20px;
  overflow: scroll;
  height: 100vh;
`;

const Item = styled.li`
  width: 100%;
  margin-bottom: 20px;
  height: 78px;
  background: url(${(props) => props.background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  &.btn-home {
    height: 40px;
  }
`;

const Titulo = styled.span`
  width: 100%;
  height: 100%;
  padding: 12px;
  display: flex;
  align-items: center;
  &.compartido {
    height: 50%;
  }
`;

const ListaNavMovil = ({ contenido }) => {
  const botonHome = contenido
    .filter((obj) => obj.content.title == "Home")
    .map((obj) => {
      return (
        <Item
          className="btn-home"
          key={obj.children[0].id}
          background={obj.children[0].content.mobileImageUrl}
        >
          <Link to="/mujer">
            <Titulo>{obj.children[0].content.title}</Titulo>
          </Link>
        </Item>
      );
    });

  const botonesCategorias = contenido
    .filter((obj) => obj.content.title == "Categories")
    .map((obj) => {
      return obj.children.map((child) => {
        return (
          <Item key={child.id} background={child.content.mobileImageUrl}>
            <Link to="/mujer">
              {child.content.subTitle ? (
                <>
                  <Titulo className="compartido">{child.content.title}</Titulo>
                  <Titulo className="compartido">
                    {child.content.subTitle}
                  </Titulo>
                </>
              ) : (
                <Titulo>{child.content.title}</Titulo>
              )}
            </Link>
          </Item>
        );
      });
    });

  return (
    <Contenido>
      {botonHome}
      {botonesCategorias}
    </Contenido>
  );
};

export default ListaNavMovil;
