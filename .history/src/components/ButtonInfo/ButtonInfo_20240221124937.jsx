
import { HashLink } from 'react-router-hash-link'
import "./style.css";

export const ButtonInfo = () => {
  return (
    <HashLink className="button-informacion" to="#contacto">
      <span>Conoce más sobre nuestros servicios</span>
      <span></span>
    </HashLink>
  );
};
