import { NavLink } from "react-router-dom";
import "./style.css";

export const ButtonInfo = () => {
  return (
    <NavLink className="button-informacion" to="/#contacto">
      <span>Conoce más sobre nuestros servicios</span>
      <span></span>
    </NavLink>
  );
};
