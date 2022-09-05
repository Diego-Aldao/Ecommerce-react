import React from "react";
import useSingleProducto from "../hooks/useSingleProducto";

const Card = ({ idProducto }) => {
  const { productoDetallado } = useSingleProducto({ idProducto });

  return (
    <div key={productoDetallado.id}>
      <img src={`http://${productoDetallado.imageUrl}`} alt="" />
      <h1>
        {productoDetallado.name}
        <span>{productoDetallado.brandName}</span>
      </h1>
      <span>precio</span>
      <div>cuotas sin interes</div>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos,
      </div>
      <p>color: {productoDetallado.colour}</p>
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
          <span>categoria</span> <span>{productoDetallado.brandName}</span>{" "}
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
