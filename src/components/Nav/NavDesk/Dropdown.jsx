import React from "react";
import styled from "styled-components";

const Contenido = styled.div`
  position: absolute;
  background: red;
  top: 50px;
  left: 0px;
  width: 100%;
  padding: 0px 32px;
  display: ${({ visible }) => (visible ? "block" : "none")};
`;

const Lista = styled.ul`
  padding: 24px 10px;
  list-style: none;
  display: flex;
  li {
    flex: 1 1 auto;
  }
  .items {
    column-count: 2;
    list-style-type: none;
  }
`;

const Dropdown = ({ visible }) => {
  return (
    <Contenido visible={visible}>
      <Lista>
        <li>
          <h2>comprar por producto</h2>
          <ul className="items">
            <li>producto</li>
            <li>producto</li>
            <li>producto</li>
            <li>producto</li>
            <li>producto</li>
            <li>producto</li>
            <li>producto</li>
            <li>producto</li>
            <li>producto</li>
            <li>producto</li>
            <li>producto</li>
            <li>producto</li>
            <li>producto</li>
            <li>producto</li>
            <li>producto</li>
            <li>producto</li>
            <li>producto</li>
            <li>producto</li>
            <li>producto</li>
            <li>producto</li>
            <li>producto</li>
            <li>producto</li>
            <li>producto</li>
            <li>producto</li>
            <li>producto</li>
            <li>producto</li>
            <li>producto</li>
          </ul>
        </li>
        <li>b</li>
        <li>s</li>
      </Lista>
    </Contenido>
  );
};

export default Dropdown;
