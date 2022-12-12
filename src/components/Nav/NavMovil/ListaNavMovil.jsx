import React from "react";
import styled from "styled-components";
import { useLocation } from "wouter";

const Contenido = styled.ul`
  width: 100%;
  background: white;
  padding: 20px;
  overflow: scroll;
  height: 100vh;
  padding-bottom: 50px;
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
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
  &.especial,
  &.subtitulo {
    height: 50%;
  }
  &.especial {
    font-weight: 800;
  }
  &.subtitulo {
    font-weight: 400;
    letter-spacing: 0;
  }
`;

const ListaNavMovil = ({ contenido, setPosicion, setCategoria, genero }) => {
  const [location, setLocation] = useLocation();
  const handleClick = (categoria) => {
    setCategoria(categoria);
    setPosicion((prevValue) => !prevValue);
  };
  const handleClickHome = (genero) => {
    setLocation(`/${genero == "hombre" ? "hombre" : "mujer"}`);
  };
  const botonHome = contenido
    ? contenido
        .filter((obj) => obj.content.title == "Home")
        .map((obj) => {
          return (
            <Item
              className="btn-home"
              key={obj.children[0].id}
              background={obj.children[0].content.mobileImageUrl}
              onClick={() => {
                handleClickHome(genero);
              }}
            >
              <Titulo>{obj.children[0].content.title}</Titulo>
            </Item>
          );
        })
    : null;

  const botonesCategorias = contenido
    ? contenido
        .filter((obj) => obj.content.title == "Categories")
        .map((obj) => {
          return obj.children
            .filter((obj) => obj.channelExclusions.length !== 2)
            .map((child) => {
              return (
                <Item
                  key={child.id}
                  onClick={() => {
                    handleClick(child);
                  }}
                  background={child.content.mobileImageUrl}
                >
                  {child.content.subTitle ? (
                    <>
                      <Titulo className="especial">
                        {child.content.title}
                      </Titulo>
                      <Titulo className="subtitulo">
                        {child.content.subTitle}
                      </Titulo>
                    </>
                  ) : (
                    <Titulo>{child.content.title}</Titulo>
                  )}
                </Item>
              );
            });
        })
    : null;

  return (
    <Contenido>
      {botonHome}
      {botonesCategorias}
    </Contenido>
  );
};

export default ListaNavMovil;
