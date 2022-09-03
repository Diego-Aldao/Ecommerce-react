import "./App.css";
import Inicio from "./pages/Inicio";
import { Route, Routes } from "react-router-dom";
import Detalle from "./pages/Detalle";
import { ProductsContextProvider } from "./context/ProductsContext";

function App() {
  return (
    <ProductsContextProvider>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/detalle/:id" element={<Detalle />} />
      </Routes>
    </ProductsContextProvider>
  );
}

export default App;
