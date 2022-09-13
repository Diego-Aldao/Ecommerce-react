import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";

const Navegacion = styled.nav`
  display: none;
  width: 100%;
  height: 50px;
  padding: 0px 32px;
  background: #796764;
  position: relative;
  button {
    flex: 1 1 auto;
    padding: 10px;
    background: none;
    color: white;
    border: none;
    text-transform: capitalize;
    font-size: 12px;
  }
  @media (min-width: 1024px) {
    display: flex;
  }
`;

const NavDesk = ({ contenido }) => {
  const categorias = contenido[1].children.filter(
    (obj) => obj.channelExclusions.length !== 1
  );
  const [visible, setVisible] = useState(false);
  const [hijos, setHijos] = useState();

  const handleMouseOver = (children) => {
    setHijos(children);
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  const botonesCategorias = categorias.map((categoria) => {
    return (
      <React.Fragment key={categoria.id}>
        <button
          onMouseOver={() => {
            handleMouseOver(categoria.children);
          }}
          onMouseLeave={handleMouseLeave}
        >
          {categoria.content.title}
        </button>
        <Dropdown hijos={hijos} visible={visible} setVisible={setVisible} />
      </React.Fragment>
    );
  });

  return (
    <>
      <Navegacion>{botonesCategorias}</Navegacion>
    </>
  );
};

export default NavDesk;
