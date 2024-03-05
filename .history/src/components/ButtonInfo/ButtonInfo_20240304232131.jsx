import { Link } from "react-router-dom";
import "./style.css";

export const ButtonInfo = () => {
  return (
    <Link className="button-informacion" to="/#contacto">
      <button>
        <span>Conoce más sobre nuestros servicios</span>
        <span></span>
      </button>
    </Link>
  );
};
