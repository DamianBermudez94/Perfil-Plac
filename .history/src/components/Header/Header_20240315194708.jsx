import { useState } from "react";

import { NavHashLink, HashLink } from "react-router-hash-link";
import logoImagen from "../../../public/image/PerfilPlacLogo.WebP";
import "./styles.css";
export function Header() {
  const [isActive, setActive] = useState(false);

  function closeMenu() {
    setActive(false);
  }

  return (
    <header className="header header-fixed">
      <HashLink smooth to="#home" className="logo">
        <figure>
          <img src={logoImagen} alt="Perfil-Plac" />
        </figure>
      </HashLink>

      <nav className={isActive ? "active" : ""}>
        <NavHashLink smooth to="#home" onClick={closeMenu}>
          Inicio
        </NavHashLink>
        <NavHashLink smooth to="#nosotros" onClick={closeMenu}>
          Nosotros
        </NavHashLink>
        <NavHashLink smooth to="#productos" onClick={closeMenu}>
          Productos
        </NavHashLink>
        <NavHashLink smooth to="#servicios" onClick={closeMenu}>
          Colocación
        </NavHashLink>
        <NavHashLink smooth to="#contacto" onClick={closeMenu}>
          Contacto
        </NavHashLink>
      </nav>

      <div
        aria-expanded={isActive ? "true" : "false"}
        aria-haspopup="true"
        aria-label={isActive ? "Fechar menu" : "Abrir menu"}
        className={isActive ? "menu active" : "menu"}
        onClick={() => {
          setActive(!isActive);
        }}
      ></div>
    </header>
  );
}
