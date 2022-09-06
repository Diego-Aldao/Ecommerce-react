import React from "react";
import ProductoDetallado from "../components/ProductoDetallado";

const Detalle = ({ params }) => {
  return <ProductoDetallado idProducto={params.id} />;
};

export default Detalle;
