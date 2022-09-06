import useData from "./useData";

const useSearch = (keyword) => {
  const { productos } = useData();

  const productosEncontrados = productos.filter((producto) =>
    producto.name.toUpperCase().includes(keyword?.toUpperCase())
  );

  return { productosEncontrados };
};

export default useSearch;
