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

const NavDesk = () => {
  const [visible, setVisible] = useState(false);

  const handleMouseOver = () => {
    setVisible(true);
  };

  return (
    <>
      <Navegacion>
        <button onMouseOver={handleMouseOver}>rebajas</button>
        <Dropdown visible={visible} />
        <button>novedades</button>
        <button>ropa</button>
        <button>vestidos</button>
        <button>rebajas</button>
        <button>novedades</button>
        <button>ropa</button>
        <button>vestidos</button>
        <button>rebajas</button>
        <button>novedades</button>
        <button>ropa</button>
      </Navegacion>
    </>
  );
};

export default NavDesk;
