import React from "react";
import styled from "styled-components";

const Contenido = styled.div`
  position: absolute;
  background: none;
  top: 50px;
  left: 0px;
  width: 100%;
  padding: 0px 32px;
  font-family: "Josefin Sans", sans-serif;
  display: ${({ visible }) => (visible ? "block" : "none")};
  ul {
    list-style: none;
  }
`;

const ContenedorLista = styled.ul`
  padding: 24px 10px;
  display: flex;
  background: #eee;
  color: black;
  .noTitle {
    display: none;
  }
`;

const ItemLista = styled.li`
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

const ListaInterior = styled.ul`
  color: #666;
  font-size: 14px;
  column-count: ${({ column }) => column && column};
  li {
    text-align: start;
    padding: 7px 0px;
  }
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
        width: 100%;
        height: 100%;
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
  &.thirdMarketingImage {
    li {
      padding: 0px;
      display: flex;
      flex-direction: column;
      position: relative;
      margin-bottom: 10px;
    }
    img {
      border: 1px solid #cccccc;
      width: 100%;
    }
    span {
      position: absolute;
      top: 0px;
      left: 0px;
      height: 100%;
      display: flex;
      align-items: center;
      text-align: start;
      max-width: 70%;
      padding: 0px 32px 0px 10px;
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      color: #2d2d2d;
      letter-spacing: 1px;
      line-height: 1.2;
    }
  }
  &.fullMarketingImage {
    column-count: 2;
    li {
      position: relative;
    }
    div {
      width: 240px;
      height: 270px;
      position: relative;
      img {
        width: 100%;
        height: 100%;
      }
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
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      color: #2d2d2d;
      letter-spacing: 1px;
      line-height: 1.2;
      text-align: center;
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

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
    span {
      height: 52px;
      width: 117px;
      border-bottom: 1px solid #ccc;
      display: flex;
      align-items: center;
    }
  }
  &.halfMarketingImage {
    div {
      position: relative;
      width: 250px;
      border: 1px solid #dfdfdf;
      height: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: fill;
      }
    }
    div:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: 2px;
      left: 0px;
      background: linear-gradient(#20202014, #ffffff97);
    }
    li {
      position: relative;
    }
    span {
      position: absolute;
      bottom: 10px;
      left: 0px;
      width: 100%;
      max-width: 250px;
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      color: #2d2d2d;
      letter-spacing: 1px;
      line-height: 1.2;
      text-align: center;
    }
  }
`;

const Dropdown = ({ hijos, visible, setVisible }) => {
  const handleMouseOver = () => {
    setVisible(true);
  };
  const handleMouseLeave = () => {
    setVisible(false);
  };
  const hijosDesk = hijos
    ? hijos.filter((hijo) => hijo.channelExclusions.length !== 1)
    : null;
  const lista = hijosDesk
    ? hijosDesk.map((hijo) => {
        return (
          <ItemLista key={hijo.id} flex={hijo.display.webLargeColumnSpan}>
            <h4 className={hijo.style.webLargeStyleType}>
              <span>{hijo.content.title}</span>
            </h4>
            <ListaInterior
              className={
                hijo.display.webLargeTemplateName.length !== 0
                  ? hijo.display.webLargeTemplateName
                  : hijo.display.mobileDisplayLayout
              }
              column={hijo.display.webLargeColumnSpan}
            >
              {hijo.children.map((item) => {
                return (
                  <li
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
                  </li>
                );
              })}
            </ListaInterior>
          </ItemLista>
        );
      })
    : "";

  return (
    <Contenido
      visible={visible}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <ContenedorLista>{lista}</ContenedorLista>
    </Contenido>
  );
};

export default Dropdown;
