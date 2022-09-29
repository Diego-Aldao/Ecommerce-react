import React from "react";
import Home from "../components/Home/Home";
import Layout from "../layout/Layout";

const Inicio = ({ params }) => {
  let genero = params.genero;
  return (
    <Layout genero={genero}>
      <Home genero={genero} />
    </Layout>
  );
};

export default Inicio;
