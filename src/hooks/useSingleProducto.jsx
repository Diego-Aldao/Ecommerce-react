import useData from "./useData";

const useSingleProducto = ({ idProducto }) => {
  const { productos } = useData();

  const productoDetallado = productos.find(
    (producto) => producto.id == idProducto
  );

  return { productoDetallado };
};
export default useSingleProducto;
