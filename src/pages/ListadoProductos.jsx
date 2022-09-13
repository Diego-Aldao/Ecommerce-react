import React from "react";
import Banner from "../components/ListadoProductos/Banner";
import Filtro from "../components/ListadoProductos/Filtro/Filtro";
import Main from "../components/ListadoProductos/Main/Main";
import Nav from "../components/ListadoProductos/Nav";
import Layout from "../layout/Layout";

const ListadoProductos = ({ params }) => {
  const { cat2 } = params;
  console.log(params.querys);
  const idCategoria = params.querys.replace("categoryId=", "");
  console.log(idCategoria);

  return (
    <Layout genero={params.genero}>
      <Nav params={params} />
      <Banner categoria={cat2} />
      <Filtro />
      <Main idCategoria={idCategoria} />
    </Layout>
  );
};

export default ListadoProductos;
