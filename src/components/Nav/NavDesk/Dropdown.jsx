import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useLocation } from "wouter";
import useDestino from "../../../hooks/useDestino";

const Contenido = styled.div`
  position: absolute;
  background: none;
  top: 50px;
  left: 0px;
  width: 100%;
  padding: 0px;
  height: ${({ visible }) => (visible ? "auto" : "0px")};
  z-index: 9999;
`;

const ContenedorLista = styled.ul`
  display: flex;
  background: #eee;
  height: 100%;
  overflow: hidden;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  padding: ${({ visible }) => (visible ? "24px 10px" : "0")};
  transition: opacity 0.3s ease-in-out;
  .noTitle {
    display: none;
  }
`;

const ListaPrincipal = styled.li`
  flex: ${({ flex }) => (flex ? flex : 1)};
  padding: 0px 20px;
  border-right: 1px solid #00000022;
  h4 {
    text-align: start;
    margin-bottom: 12px;
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 1px;
    span {
      border-bottom: 2px solid black;
      line-height: 2;
    }
  }
  &:last-child {
    border-right: none;
  }
`;

const ListaSecciones = styled.ul`
  color: #666;
  font-size: 14px;
  column-count: ${({ column }) => column && column};

  .li-textList,
  .li-list {
    div {
      display: none;
    }
  }
  &.textList {
    li {
      text-align: start;
      padding: 10px 0px;
    }
  }

  &.gridCircleImageLarge {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 10px;
    div {
      border-radius: 50%;
      width: 78px;
      height: 78px;
      border: 1px solid #cccccc;
      img {
        border-radius: 50%;
      }
    }
    span {
      text-align: center;
      margin: 10px 0px;
    }
    li {
      display: flex;
      flex-direction: column;
      max-height: 164px;
      width: 50%;
      justify-content: center;
      align-items: center;
      padding: 0px 5px 20px;
    }
  }

  &.circleImageListLarge {
    li {
      display: flex;
      align-items: center;
      padding: 5px 0px;
    }
    div {
      width: 40px;
      height: 40px;
      margin-right: 10px;
      border-radius: 50%;
      overflow: hidden;
      border: 1px solid #c4c4c4;
    }
    span {
      height: 52px;
      width: 117px;
      border-bottom: 1px solid #ccc;
      display: flex;
      align-items: center;
    }
  }

  &.thirdMarketingImage,
  &.carousel {
    li {
      padding: 0px;
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
    }
    div {
      height: 97px;
      width: 248px;
      border: 1px solid #cccccc;
    }
    span {
      position: absolute;
      left: 0px;
      bottom: 0px;
      height: 100%;
      display: flex;
      align-items: center;
      max-width: 58%;
      padding-left: 10px;
    }
  }
  &.thirdMarketingImage,
  &.fullMarketingImage,
  &.halfMarketingImage,
  &.carousel {
    li {
      position: relative;
    }
    span {
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      color: #2d2d2d;
      letter-spacing: 1px;
      line-height: 1.2;
    }
  }

  &.fullMarketingImage,
  &.halfMarketingImage {
    div {
      position: relative;
      width: 240px;
    }
    div:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      background: linear-gradient(#20202014, #ffffff97);
    }
    span {
      position: absolute;
      bottom: 10px;
      left: 0px;
      width: 100%;
      max-width: 240px;
      text-align: center;
    }
  }

  &.fullMarketingImage {
    column-count: ${({ column }) => column && column};
    div {
      width: 240px;
      height: 270px;
    }
  }
  &.halfMarketingImage {
    div {
      border: 1px solid #dfdfdf;
    }
  }
`;

const Categoria = styled.li`
  text-align: start;
  padding: 7px 0px;
  cursor: pointer;
  &:hover {
    color: #1e65ff;
    div {
      border-color: #1e65ff;
    }
  }
`;

const Dropdown = ({ hijos, visible, setVisible }) => {
  const [location, setLocation] = useLocation();
  const [currentLink, setCurrentLink] = useState("");
  const { linkFormateado } = useDestino(currentLink);

  const handleMouseOver = () => {
    setVisible(true);
  };
  const handleMouseLeave = () => {
    setVisible(false);
  };

  const handleLocation = (link) => {
    setCurrentLink(link);
    setLocation(linkFormateado);
  };

  const hijosDesk = hijos
    ? hijos.filter((hijo) => hijo.channelExclusions.length !== 1)
    : null;

  const lista = hijosDesk
    ? hijosDesk.map((hijo) => {
        return (
          <ListaPrincipal key={hijo.id} flex={hijo.display.webLargeColumnSpan}>
            <h4 className={hijo.style.webLargeStyleType}>
              <span>{hijo.content.title}</span>
            </h4>
            <ListaSecciones
              className={
                hijo.display.webLargeTemplateName.length !== 0
                  ? hijo.display.webLargeTemplateName
                  : hijo.display.mobileDisplayLayout
              }
              column={hijo.display.webLargeColumnSpan}
            >
              {hijo.children.map((item) => {
                return (
                  <Categoria
                    onClick={() => {
                      handleLocation(item.link.webUrl);
                    }}
                    key={item.id}
                    className={
                      hijo.display.webLargeTemplateName.length !== 0
                        ? `li-${hijo.display.webLargeTemplateName}`
                        : `li-${hijo.display.mobileDisplayLayout}`
                    }
                  >
                    <div>
                      <img src={item.content.webLargeImageUrl} alt="" />
                    </div>
                    <span>{item.content.title}</span>
                  </Categoria>
                );
              })}
            </ListaSecciones>
          </ListaPrincipal>
        );
      })
    : "";

  return (
    <Contenido
      visible={visible}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <ContenedorLista visible={visible}>{lista}</ContenedorLista>
    </Contenido>
  );
};

export default Dropdown;
