import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import useLink from "../../../hooks/useLink";
import Dropdown from "./Dropdown";

const Navegacion = styled.nav`
  display: none;
  width: 100%;
  height: 50px;
  padding: 0px 32px;
  background: var(--gradiente-principal);
  position: relative;
  button {
    flex: 1 1 auto;
    padding: 10px;
    background: none;
    color: white;
    color: black;
    border: none;
    text-transform: capitalize;
    font-size: 13px;
  }
  @media (min-width: 1024px) {
    display: flex;
  }
`;

const NavDeskPrincipal = ({ contenido }) => {
  const [visible, setVisible] = useState(false);
  const [hijos, setHijos] = useState();
  const [currentCategorias, setCurrentCategorias] = useState();

  useEffect(() => {
    const categorias = contenido[1].children.filter(
      (obj) => obj.channelExclusions.length !== 1
    );
    setCurrentCategorias(categorias);
  }, [contenido]);

  let filter = {
    categorias: currentCategorias,
    top1: "Topshop",
    top2: "Topman",
  };
  useLink(filter);

  const handleMouseOver = (children) => {
    setHijos(children);
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  const botonesCategorias = currentCategorias
    ? currentCategorias.map((categoria) => {
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
      })
    : null;

  return (
    <>
      <Navegacion>{botonesCategorias}</Navegacion>
    </>
  );
};

export default NavDeskPrincipal;
