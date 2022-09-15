import styled from "styled-components";

export const Contenido = styled.div`
  width: 100%;
  background: #ececec;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  height: 100%;
`;
export const Titulo = styled.div`
  width: 100%;
  padding: 16px;
  background: white;
  display: flex;
  align-items: center;
  h3 {
    text-transform: uppercase;
    font-size: 16px;
    display: flex;
    align-items: flex-end;
  }
  svg {
    min-width: 22px;
    min-height: 22px;
    stroke-width: 0.2;
    margin-right: 10px;
  }
  .check {
    margin-left: auto;
    text-transform: uppercase;
    display: flex;
    align-items: flex-end;
    svg {
      margin: 0px 0px 0px 10px;
    }
  }
`;
export const Lista = styled.ul`
  width: 100%;
  background: white;
  margin: 10px 0px;
  max-height: calc(100vh - 145px);
  overflow: scroll;
  li {
    width: 100%;
    padding: 16px;
    height: 55px;
    display: flex;
    align-items: center;
    position: relative;
    &:not(:last-child):after {
      position: absolute;
      content: "";
      bottom: 0px;
      left: 10px;
      width: 90%;
      height: 1px;
      background: #e0e0e0;
    }
    .item-check {
      margin-left: auto;
    }
  }
  .seleccionado {
    color: black;
    font-weight: 600;
    background: var(--gradiente2);
  }
`;
export const Footer = styled.div`
  width: 100%;
  padding: 16px;
  background: white;
  align-self: flex-end;
  bottom: 0px;
  position: absolute;
  left: 0px;
  button {
    line-height: normal;
    padding: 15px;
    background: black;
    color: white;
    text-transform: uppercase;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
  }
`;

const ListaFiltro = ({ filtros, setFiltro, setPosicion }) => {
  const handleClick = (values, name) => {
    const objetoFiltro = {
      valores: values,
      nombre: name,
      longitud: values.length,
    };
    setFiltro(objetoFiltro);
    setPosicion((prevValue) => !prevValue);
  };

  const items = filtros.map((filtro) => {
    return (
      <li
        key={filtro.id}
        onClick={() => {
          handleClick(filtro.facetValues, filtro.name);
        }}
      >
        <span>{filtro.name}</span>
      </li>
    );
  });
  return (
    <Contenido>
      <Titulo>
        <h3>filtrar</h3>
      </Titulo>
      <Lista>{items}</Lista>
      <Footer>
        <button>ver articulos</button>
      </Footer>
    </Contenido>
  );
};

export default ListaFiltro;
