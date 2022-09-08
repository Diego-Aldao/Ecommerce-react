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
  background: red;
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

return <Contenido></Contenido>;

export default ListaNavMovil;
