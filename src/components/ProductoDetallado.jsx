import React from "react";
import useSingleProducto from "../hooks/useSingleProducto";

const Card = ({ idProducto }) => {
  const { productoDetallado, productoCache } = useSingleProducto({
    idProducto,
  });

  const producto = productoDetallado ? productoDetallado : productoCache;

  return (
    <div key={producto.id}>
      <img src={`http://${producto.imageUrl}`} alt="" />
      <h1>
        {producto.name}
        <span>{producto.brandName}</span>
      </h1>
      <span>precio</span>
      <div>cuotas sin interes</div>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos,
      </div>
      <p>color: {producto.colour}</p>
      <p>talla</p>
      <select name="" id="">
        <option value="">talla x</option>
        <option value="">talla x</option>
        <option value="">talla x</option>
      </select>
      <div className="botones">
        <button>añadir</button>
        <button>like</button>
      </div>
      <div className="envio">
        <p>logo envio gratis</p>
        <p>logo devoluciones gratis</p>
        <p>terminos y condiciones</p>
      </div>
      <div className="detalles">
        <p>
          <span>categoria</span> <span>{producto.brandName}</span>{" "}
        </p>
        <ul>
          <li>detalle random</li>
          <li>detalle random</li>
          <li>detalle random</li>
          <li>detalle random</li>
        </ul>
      </div>
      <button>mostrar mas</button>
    </div>
  );
};

export default Card;
