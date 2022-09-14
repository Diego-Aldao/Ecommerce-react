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
  @media (min-width: 480px) {
    display: flex;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    li {
      flex: 0 1 auto;
      display: flex;
      align-items: center;
      height: 50px;
      text-transform: capitalize;
    }
    span {
      padding: 0px 10px 0px 15px;
      display: flex;
      align-items: center;
    }
  }
`;

const Nav = ({ params }) => {
  const { cat1, genero } = params;
  const cat2 = params.cat2.replaceAll("-", " ");
  return (
    <Contenedor>
      <ul>
        <li>inicio</li>
        <li>
          <span>
            <MdChevronRight></MdChevronRight>
          </span>
          {genero}
        </li>
        <li>
          <span>
            <MdChevronRight></MdChevronRight>
          </span>
          {cat1}
        </li>
        <li>
          <span>
            <MdChevronRight></MdChevronRight>
          </span>
          {cat2}
        </li>
      </ul>
    </Contenedor>
  );
};

export default Nav;
