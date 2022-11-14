import React, { useContext } from "react";

import Layout from "../layout/Layout";
import GuardadosContext from "../context/GuardadosContext";
import Main from "../components/Guardados/Main";

const Guardados = () => {
  const { guardados, setGuardados } = useContext(GuardadosContext);

  return (
    <Layout>
      <Main items={guardados} />
    </Layout>
  );
};

export default Guardados;
