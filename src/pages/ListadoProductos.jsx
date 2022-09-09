import React from "react";

const ListadoProductos = ({ params }) => {
  console.log(params.genero);
  return <div>{params.genero}</div>;
};

export default ListadoProductos;
