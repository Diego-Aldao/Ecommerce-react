import React, { useState } from "react";
import Banner from "../components/ListadoProductos/Banner";
import Filtro from "../components/ListadoProductos/Filtro/Filtro";
import Main from "../components/ListadoProductos/Main/Main";
import Nav from "../components/ListadoProductos/Nav";
import Layout from "../layout/Layout";
import jsonData from "../data/VestidosSkater.json";
import { useEffect } from "react";

const ListadoProductos = ({ params }) => {
  const [idCategoria, setIdCategoria] = useState(params.querys);
  const { facets, products, itemCount, categoryName } = jsonData;
  const { cat2, cat1, genero } = params;

  useEffect(() => {
    setIdCategoria(params.querys);
  }, [params.querys]);

  return (
    <Layout genero={genero}>
      <Nav params={params} />
      <Banner categoria={cat2 ? cat2 : cat1} />

      <Filtro filtros={facets} />
      <Main
        productos={products}
        cantidad={itemCount}
        categoria={categoryName}
      />
    </Layout>
  );
};

export default ListadoProductos;
