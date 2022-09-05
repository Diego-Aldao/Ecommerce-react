import useData from "./useData";

const useSingleProducto = ({ idProducto }) => {
  const { productos } = useData();

  const productoDetallado = productos.find(
    (producto) => producto.id == idProducto
  );
  if (productoDetallado) {
    localStorage.setItem("productoCache", JSON.stringify(productoDetallado));
  }
  const productoCache = JSON.parse(localStorage.getItem("productoCache"));

  return { productoDetallado, productoCache };
};
export default useSingleProducto;
