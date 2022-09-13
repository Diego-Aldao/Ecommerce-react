import React from "react";
import Nav from "../components/Nav/Nav";
import Layout from "../layout/Layout";

const Inicio = ({ params }) => {
  let genero = params.genero;
  return (
    <Layout genero={genero}>
      <p>algo</p>
    </Layout>
  );
};

export default Inicio;
