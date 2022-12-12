import React from "react";

const ItemFiltro = ({ info, setPosicion, setFiltro }) => {
  const handleClick = () => {
    setPosicion((prevValue) => !prevValue);
    setFiltro(info.facetValues);
  };
  return (
    <li onClick={handleClick}>
      <span>{info.name}</span>
    </li>
  );
};

export default ItemFiltro;
