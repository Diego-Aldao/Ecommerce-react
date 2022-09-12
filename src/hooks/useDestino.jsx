const useDestino = (link) => {
  let ruta = link.replaceAll("https://www.asos.com/es/", "/").split("?", 2);
  let url = ruta[0];
  let querys = ruta[1];
  const destino = `${url}${querys}`;
  return { destino };
};

export default useDestino;
