import { useEffect } from "react";
import { useState } from "react";
import DataHome from "../data/Home.json";

const useContentHome = ({ genero }) => {
  const data = DataHome;
  const [gridHome, setGridHome] = useState([]);
  const [heroHome, setHeroHome] = useState([]);
  const [descuentoHome, setDescuentoHome] = useState([]);
  const [promocionHome, setPromocionHome] = useState([]);
  const [marcasHome, setMarcasHome] = useState([]);

  const currentGenero = genero == "hombre" ? genero : "mujer";

  const contenidoActual = data.home.filter(
    (data) => data.nombre === currentGenero
  );

  const hero = contenidoActual[0].children.filter(
    (child) => child.nombre == "Hero"
  );

  const gridPrincipal = contenidoActual[0].children.filter(
    (child) => child.nombre == "GridPrincipal"
  );

  const descuento = contenidoActual[0].children.filter(
    (child) => child.nombre == "Descuento"
  );

  const promocion = contenidoActual[0].children.filter(
    (child) => child.nombre == "Promocion"
  );

  const marcas = contenidoActual[0].children.filter(
    (child) => child.nombre == "Marcas"
  );

  useEffect(() => {
    setGridHome(gridPrincipal[0].children);
    setHeroHome(hero[0]);
    setDescuentoHome(descuento[0]);
    setPromocionHome(promocion[0].children);
    setMarcasHome(marcas[0].children);
  }, [genero]);

  return { gridHome, heroHome, descuentoHome, promocionHome, marcasHome };
};

export default useContentHome;
