import { useEffect } from "react";
import { useState } from "react";

const useDestino = (link) => {
  const [linkFormateado, setLinkFormateado] = useState("");

  useEffect(() => {
    if (link.includes("/")) {
      let ruta = link.replaceAll("https://www.asos.com/es/", "/").split("?", 2);
      let url = ruta[0];
      let querys = ruta[1].replaceAll("cid=", "categoryId=");
      const destino = `${url}${querys}`;
      setLinkFormateado(destino);
    }
  }, [link]);
  return { linkFormateado };
};

export default useDestino;
