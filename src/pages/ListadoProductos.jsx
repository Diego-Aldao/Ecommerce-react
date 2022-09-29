import React from "react";
import Banner from "../components/ListadoProductos/Banner";
import Filtro from "../components/ListadoProductos/Filtro/Filtro";
import Main from "../components/ListadoProductos/Main/Main";
import Nav from "../components/ListadoProductos/Nav";
import Layout from "../layout/Layout";
import jsonData from "../data/VestidosSkater.json";

const ListadoProductos = ({ params }) => {
  const { facets } = jsonData;
  const { cat2, cat1 } = params;
  const idCategoria = params?.querys.replace("categoryId=", "");

  return (
    <Layout genero={params.genero}>
      <Nav params={params} />
      <Banner categoria={cat2 ? cat2 : cat1} />
      <Filtro filtros={facets} />
      <Main idCategoria={idCategoria} />
    </Layout>
  );
};

export default ListadoProductos;
