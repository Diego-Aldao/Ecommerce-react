import "./App.css";
import Inicio from "./pages/Inicio";
import { Link, Route } from "wouter";
import Detalle from "./pages/Detalle";
import { ProductsContextProvider } from "./context/ProductsContext";

function App() {
  return (
    <ProductsContextProvider>
      <Link to="/">buenas</Link>
      <Route path="/" component={Inicio} />
      <Route component={Detalle} path="/detalle/:id" />
    </ProductsContextProvider>
  );
}

export default App;
