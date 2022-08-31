import "./App.css";
import jsonData from "./data/productos.json";
import Inicio from "./components/Inicio";
import CardDetallada from "./components/CardDetallada";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [data, setData] = useState(jsonData.products);
  const [producto, setProducto] = useState();
  return (
    <Routes>
      <Route
        path="/"
        element={<Inicio data={data} setProducto={setProducto} />}
      />
      <Route
        path="/detalle"
        element={<CardDetallada data={data} producto={producto} />}
      />
    </Routes>
  );
}

export default App;
