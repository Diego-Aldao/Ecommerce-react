import { useContext } from "react";
import jsonData from "../data/productos.json";
import ProductsContext from "../context/ProductsContext";
import { useEffect } from "react";
const useData = () => {
  const { productos, setProductos } = useContext(ProductsContext);

  useEffect(() => {
    const productosLocales = jsonData.products;
    setProductos(productosLocales);
  }, [setProductos]);

  return { productos };
};

export default useData;
