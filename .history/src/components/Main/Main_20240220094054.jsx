//import Inicio from "../Inicio/Inicio";
//import Acerca from "../Acerca/Acerca";
import Contacto from "../Contacto/Contacto";
import { Producto } from "../Producto/Producto";
export function Main() {
  return (
    <main>
      {/* Contenido de tu componente 
        <Inicio></Inicio>
        <Acerca></Acerca>
        
        <Productos></Productos>
    */}
      <Producto />
      <Contacto></Contacto>
    </main>
  );
}
