import React from "react";
import styled from "styled-components";
import { MdChevronRight } from "react-icons/md";

const Contenedor = styled.nav`
  width: 100%;
  padding: 0px 18px;
  justify-content: flex-start;
  align-items: center;
  background: white;
  box-shadow: 1px 1px 5px #00000049;
  display: none;
  border-bottom: 1px solid #cecece;
  position: relative;
  @media (min-width: 480px) {
    display: flex;
  }
  ul {
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
    li {
      flex: 0 1 auto;
      display: flex;
      align-items: center;
      height: 50px;
      font-size: 14px;
    }
    li p::first-letter {
      text-transform: uppercase;
    }

    span {
      padding: 0px 7px 0px 10px;
      display: flex;
      align-items: center;
    }
  }
  ul li:last-of-type {
    color: #636363;
  }
  &:after {
    position: absolute;
    width: 100px;
    height: 100%;
    content: "";
    right: 18px;
    top: 0;
    background: linear-gradient(to right, #ffffff6a, #ffffff);
  }
`;

const Nav = ({ params }) => {
  const prevPath = JSON.parse(localStorage.getItem("path"));
  const nuevoPath = params.genero
    ? localStorage.setItem("path", JSON.stringify(params))
    : null;

  const { cat1, genero, cat2 } = params.genero ? params : prevPath;
  const { nombre } = params;
  const nombreFormateado = params.nombre?.replaceAll("-", " ");
  const cat1Formateada = cat1?.replaceAll("-", " ");
  const cat2Formateada = cat2?.replaceAll("-", " ");
  return (
    <Contenedor>
      <ul>
        <li>
          <p>inicio</p>
        </li>
        <li>
          <span>
            <MdChevronRight></MdChevronRight>
          </span>
          <p>{genero}</p>
        </li>
        <li>
          <span>
            <MdChevronRight></MdChevronRight>
          </span>
          <p>{cat1Formateada}</p>
        </li>
        <li>
          <span>
            <MdChevronRight></MdChevronRight>
          </span>
          <p>{cat2Formateada}</p>
        </li>
        {nombre ? (
          <li>
            <span>
              <MdChevronRight></MdChevronRight>
            </span>
            <p>{nombreFormateado}</p>
          </li>
        ) : null}
      </ul>
    </Contenedor>
  );
};

export default Nav;
