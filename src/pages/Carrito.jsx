import React from "react";
import { useContext } from "react";
import Main from "../components/Carrito/Main";
import CarritoContext from "../context/CarritoContext";
import Layout from "../layout/Layout";

const Carrito = () => {
  const { carrito } = useContext(CarritoContext);
  return (
    <Layout>
      <Main items={carrito} />
    </Layout>
  );
};

export default Carrito;
