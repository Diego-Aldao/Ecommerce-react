import React from "react";
import CardDetallada from "../components/CardDetallada";

const Detalle = ({ params }) => {
  return <CardDetallada idProducto={params.id} />;
};

export default Detalle;
