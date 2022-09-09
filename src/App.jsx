import "./App.css";
import Inicio from "./pages/Inicio";
import { Route, Switch } from "wouter";
import Detalle from "./pages/Detalle";
import { ProductsContextProvider } from "./context/ProductsContext";
import Search from "./pages/Search";
import ListadoProductos from "./pages/ListadoProductos";

function App() {
  return (
    <ProductsContextProvider>
      <Route path="/" component={Inicio} />
      <Route component={Detalle} path="/detalle/:id" />
      <Route component={Search} path="/search/:keyword" />
      <Switch>
        <Route
          component={ListadoProductos}
          path="/:genero/:cat1/:cat2/:cat/:querys"
        />

        <Route
          component={ListadoProductos}
          path="/:genero/:cat1/:cat/:querys"
        />
      </Switch>
    </ProductsContextProvider>
  );
}

export default App;
