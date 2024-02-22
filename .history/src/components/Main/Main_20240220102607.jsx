import Contacto from "../Contacto/Contacto";
import { Producto } from "../Producto/Producto";
import Servicios from "../Servicios/Servicios";
import Nosotros from "../Nosotros/Nosotros";
export function Main() {
  return (
    <main>
       <Nosotros/>
      <Producto/>
      <Servicios/>
      <Contacto></Contacto>
    </main>
  );
}
