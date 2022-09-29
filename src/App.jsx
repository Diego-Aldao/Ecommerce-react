import "./App.css";
import Inicio from "./pages/Inicio";
import { Route, Switch } from "wouter";
import Detalle from "./pages/Detalle";
import { ProductsContextProvider } from "./context/ProductsContext";
import Search from "./pages/Search";
import ListadoProductos from "./pages/ListadoProductos";
import DetalleProducto from "./pages/DetalleProducto";

function App() {
  return (
    <ProductsContextProvider>
      <Switch>
        <Route path="/" component={Inicio} />
        <Route path="/:genero" component={Inicio} />
      </Switch>
      <Route component={Detalle} path="/detalle/:id" />
      <Route component={Search} path="/search/:keyword" />
      <Switch>
        <Route
          component={ListadoProductos}
          path="/:genero/:cat1/:cat2/cat/:querys"
        />

        <Route component={ListadoProductos} path="/:genero/:cat1/cat/:querys" />
      </Switch>
      <Switch>
        <Route
          component={DetalleProducto}
          path="/:categoria/:nombre/prd/:querys"
        />
      </Switch>
    </ProductsContextProvider>
  );
}

export default App;
