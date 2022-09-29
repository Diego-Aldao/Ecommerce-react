import React from "react";
import Layout from "../layout/Layout";
import jsonData from "../data/DetalleVestido.json";
import Nav from "../components/ListadoProductos/Nav";
import styled from "styled-components";
import Main from "../components/Detalle/Main";
import Recomendado from "../components/Detalle/Recomendado";
import jsonReco from "../data/Recomendados.json";

const Contenedor = styled.div`
  width: 100%;
`;

const DetalleProducto = ({ params }) => {
  const productoDetallado = jsonData;
  const recomendado = jsonReco;
  const { media } = productoDetallado;
  console.log(productoDetallado);
  return (
    <Layout>
      <Nav params={params} />
      <Contenedor>
        <Main media={media} producto={productoDetallado} />
        <Recomendado recomendado={recomendado.products} />
      </Contenedor>
    </Layout>
  );
};

export default DetalleProducto;
