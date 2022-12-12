import "./App.css";
import Inicio from "./pages/Inicio";
import { Route, Switch } from "wouter";
import { ProductsContextProvider } from "./context/ProductsContext";
import ListadoProductos from "./pages/ListadoProductos";
import DetalleProducto from "./pages/DetalleProducto";
import PanelUsuario from "./pages/PanelUsuario";
import Guardados from "./pages/Guardados";
import { GuardadosContextProvider } from "./context/GuardadosContext";
import { CarritoContextProvider } from "./context/CarritoContext";
import Carrito from "./pages/Carrito";

function App() {
  return (
    <ProductsContextProvider>
      <GuardadosContextProvider>
        <CarritoContextProvider>
          <Switch>
            <Route path="/" component={Inicio} />
            <Route path="/:genero" component={Inicio} />
          </Switch>
          <Route component={PanelUsuario} path="/usuario/panelUsuario" />
          <Route component={Guardados} path="/usuario/guardados" />
          <Route component={Carrito} path="/usuario/carrito" />
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
