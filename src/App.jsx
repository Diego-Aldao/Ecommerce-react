import "./App.css";
import Inicio from "./pages/Inicio";
import { Link, Route } from "wouter";
import Detalle from "./pages/Detalle";
import { ProductsContextProvider } from "./context/ProductsContext";
import Search from "./pages/Search";

function App() {
  return (
    <ProductsContextProvider>
      <Link to="/">buenas</Link>
      <Route path="/" component={Inicio} />
      <Route component={Detalle} path="/detalle/:id" />
      <Route component={Search} path="/search/:keyword" />
    </ProductsContextProvider>
  );
}

export default App;
