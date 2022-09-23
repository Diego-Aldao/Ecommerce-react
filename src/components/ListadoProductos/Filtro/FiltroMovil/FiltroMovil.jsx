import React, { useState } from "react";
import {
  Contenido,
  Navegacion,
  BotonCerrar,
  ContenedorNav,
  ContenidoSimple,
  ContenidoDetallado,
} from "../../../NavMovil";
import DetalleFiltro from "./DetalleFiltro";
import ListaFiltro from "./ListaFiltro";

const FiltroMovil = ({ setVisible, visible, filtros }) => {
  const [posicion, setPosicion] = useState(false);
  const [filtro, setFiltro] = useState();
  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <Contenido visible={visible} rigth={true} media={"768px"}>
      <BotonCerrar onClick={handleClick}>
        <span></span>
        <span></span>
      </BotonCerrar>
      <Navegacion visible={visible} rigth={true}>
        <ContenedorNav posicion={posicion}>
          <ContenidoSimple>
            <ListaFiltro
              filtros={filtros}
              setFiltro={setFiltro}
              setPosicion={setPosicion}
            />
          </ContenidoSimple>
          <ContenidoDetallado>
            <DetalleFiltro setPosicion={setPosicion} filtro={filtro} />
          </ContenidoDetallado>
        </ContenedorNav>
      </Navegacion>
    </Contenido>
  );
};

export default FiltroMovil;
