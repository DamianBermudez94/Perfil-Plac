
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contacto from "../Contacto/Contacto";
import { Producto } from "../Producto/Producto";
import Servicios from "../Servicios/Servicios";
import Nosotros from "../Nosotros/Nosotros";
import Inicio from "../Home/Home";
export function Main() {
  return (
    <main>
      <Router>
        <div>
          <Route path="/" exact component={Inicio} />
          <Route path="/contacto" component={Contacto} />
        </div>
      </Router>
      <Inicio />
      <Nosotros />
      <Producto />
      <Servicios />
      <Contacto />
    </main>
  );
}
