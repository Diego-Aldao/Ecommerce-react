import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useLocation } from "wouter";

const ContenidoPrincipal = styled.div`
  width: 100%;
  padding-bottom: 50px;
  ul {
    list-style: none;
  }
`;

const Header = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  position: relative;
  h4 {
    text-transform: uppercase;
    text-align: center;
    width: 100%;
    position: absolute;
  }
`;

const BotonAtras = styled.button`
  width: 50px;
  height: 50px;
  background: none;
  border: none;
  position: relative;
  z-index: 2;
  svg {
    width: 22px;
    height: 22px;
    stroke-width: 0.2;
  }
`;

const Contenido = styled.nav`
  width: 100%;
  overflow: scroll;
  height: 100vh;
  padding-bottom: 50px;
`;

const Titulo = styled.h4`
  width: 100%;
  padding: 25px;
  background: #eee;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.3;
  &.premium {
    background: black;
    padding: 15px;
    margin: 20px 0px;
    text-transform: uppercase;
    text-align: center;
    color: white;
  }
  &.noTitle {
    display: none;
  }
`;

const ListaItems = styled.ul`
  padding: 15px;
`;

const Item = styled.li`
  display: flex;
  height: 60px;
  align-items: center;
  border-bottom: 1px solid #3d3d3d1a;
  position: relative;
  div {
    width: 40px;
    min-width: 40px;
    height: 40px;
    background: #3d3d3d1a;
    margin-right: 15px;
    border-radius: 50%;
    img {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
  &.especial-pequeño {
    flex-direction: row-reverse;
    background: #3d3d3d1a;
    height: 80px;
    justify-content: space-between;
    padding: 12px;
    margin-bottom: 10px;
    border: none;
    div {
      min-height: 62px;
      min-width: 62px;
      margin: 0;
      margin-left: 10px;
    }
    span {
      font-weight: 700;
      font-size: 1.1rem;
      text-transform: uppercase;
    }
  }
  &.especial-grande {
    height: 85px;
    margin-bottom: 10px;
    border: none;
    span {
      padding: 10px;
      position: relative;
      z-index: 2;
      color: white;
      text-transform: uppercase;
      font-weight: 800;
      max-width: 70%;
      line-height: 1.2;
    }
    div {
      position: absolute;
      width: 100%;
      height: 100%;
      filter: brightness(0.7);
      border-radius: 0px;
      img {
        border-radius: 0px;
      }
    }
  }
  &:last-child {
    border: none;
  }
`;

const DetalleNavMovil = ({ categoria, setPosicion }) => {
  const [location, setLocation] = useLocation();

  const handleClick = () => {
    setPosicion((prevPosicion) => !prevPosicion);
  };

  const handleLocation = (link) => {
    let ruta = link.replaceAll("https://www.asos.com/es/", "/").split("?", 2);
    let url = ruta[0];
    let querys = ruta[1];
    setLocation(`${url}${querys}`);
  };

  let contenidoCategorias = categoria
    ? categoria.children
        .filter((obj) => obj.channelExclusions.length !== 1)
        .map((obj) => {
          return (
            <li key={obj.id}>
              <Titulo className={obj.style.webLargeStyleType}>
                {obj.content.title}
              </Titulo>
              <ListaItems>
                {obj.children.map((item) => {
                  return (
                    <>
                      {item.style.webLargeStyleType === "premium" ? (
                        <Titulo
                          className="premium"
                          key={item.id}
                          onClick={() => {
                            handleLocation(item.link.webUrl);
                          }}
                        >
                          {item.content.title}
                        </Titulo>
                      ) : (
                        <Item
                          className={
                            obj.style.webLargeStyleType == "noTitle" &&
                            obj.style.mobileStyleType == "noTitle"
                              ? "especial-grande"
                              : obj.style.webLargeStyleType == "noTitle"
                              ? "especial-pequeño"
                              : ""
                          }
                          onClick={() => {
                            handleLocation(item.link.webUrl);
                          }}
                        >
                          <div>
                            <img src={item.content.mobileImageUrl} alt="" />
                          </div>
                          <span>{item.content.title}</span>
                        </Item>
                      )}
                    </>
                  );
                })}
              </ListaItems>
            </li>
          );
        })
    : "";

  return (
    <ContenidoPrincipal>
      <Header>
        <BotonAtras onClick={handleClick}>
          <BsArrowLeft></BsArrowLeft>
        </BotonAtras>
        <h4>{categoria && categoria.content.title}</h4>
      </Header>
      <Contenido>
        <ul>{contenidoCategorias}</ul>
      </Contenido>
    </ContenidoPrincipal>
  );
};

export default DetalleNavMovil;
