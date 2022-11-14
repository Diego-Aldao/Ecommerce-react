import { useEffect } from "react";
import { useState } from "react";

const useGeneros = ({ navegacion, genero }) => {
  const [contenidoGenero, setContenidoGenero] = useState([]);

  useEffect(() => {
    if (navegacion.length >= 1) {
      const contenido =
        genero == "hombre"
          ? navegacion[0].children.filter(
              (obj) =>
                obj.content.title == "Home" || obj.content.title == "Categories"
            )
          : navegacion[1].children.filter(
              (obj) =>
                obj.content.title == "Home" || obj.content.title == "Categories"
            );

      setContenidoGenero(contenido);
    }
  }, [genero, navegacion]);

  return { contenidoGenero };
};

export default useGeneros;
