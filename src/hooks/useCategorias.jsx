import React from "react";
import jsonData from "../data/categoriasEsp.json";
import { useState, useEffect } from "react";

const useCategorias = () => {
  const [categorias, setCategorias] = useState();
  const [navegacion, setNavegacion] = useState();

  useEffect(() => {
    const { brands, navigation } = jsonData;
    setCategorias(brands);
    setNavegacion(navigation);
  }, [setCategorias]);

  return { categorias, navegacion };
};

export default useCategorias;
