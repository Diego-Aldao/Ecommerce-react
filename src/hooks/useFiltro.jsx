import { useState } from "react";

const useFiltro = () => {
  const [seleccionados, setSeleccionados] = useState([]); //CAMBIAR A ARRAY

  const handleCheck = (item) => {
    item.isSelected = !item.isSelected;
    const updateSeleccionados = seleccionados.filter((obj) => {
      obj.id !== item.id;
    });
    console.log(updateSeleccionados);
    /*ACA TENDRIA QUE SI ISSELECTED ES TRUE, PUSHEAR AL ARRAY DEL STATE SELECCIONADO,
    SINO BUSCAR SI YA ESTA DENTRO DEL ARRAY Y SACARLO*/
    item.isSelected
      ? setSeleccionados([...seleccionados, item])
      : setSeleccionados(updateSeleccionados);
    console.log(seleccionados);
  };

  const handleCheckAll = (items) => {
    items.every((item) => item.isSelected == true)
      ? items.map((item) => (item.isSelected = false))
      : items.map((item) => (item.isSelected = true));
    setSeleccionados({ ...items });
  };

  const handleDeleteAll = (items) => {
    items.map((item) => (item.isSelected = false));
    setSeleccionados({});
  };

  return {
    handleCheck,
    handleCheckAll,
    handleDeleteAll,
    seleccionados,
  };
};

export default useFiltro;
