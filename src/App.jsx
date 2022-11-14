import "./App.css";
import Inicio from "./pages/Inicio";
import { Route, Switch } from "wouter";
import Detalle from "./pages/Detalle";
import { ProductsContextProvider } from "./context/ProductsContext";
import Search from "./pages/Search";
import ListadoProductos from "./pages/ListadoProductos";
import DetalleProducto from "./pages/DetalleProducto";
import PanelUsuario from "./pages/PanelUsuario";
import Guardados from "./pages/Guardados";
import { GuardadosContextProvider } from "./context/GuardadosContext";
import { CarritoContextProvider } from "./context/CarritoContext";

function App() {
  return (
    <ProductsContextProvider>
      <GuardadosContextProvider>
        <CarritoContextProvider>
          <Switch>
            <Route path="/" component={Inicio} />
            <Route path="/:genero" component={Inicio} />
          </Switch>
          <Route component={Detalle} path="/detalle/:id" />
          <Route component={Search} path="/search/:keyword" />
          <Route component={PanelUsuario} path="/usuario/panelUsuario" />
          <Route component={Guardados} path="/usuario/guardados" />
          <Switch>
            <Route
              component={ListadoProductos}
              path="/:genero/:cat1/:cat2/cat/:querys"
            />

            <Route
              component={ListadoProductos}
              path="/:genero/:cat1/cat/:querys"
            />
          </Switch>
          <Switch>
            <Route
              component={DetalleProducto}
              path="/:categoria/:nombre/prd/:querys"
            />
          </Switch>
        </CarritoContextProvider>
      </GuardadosContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
