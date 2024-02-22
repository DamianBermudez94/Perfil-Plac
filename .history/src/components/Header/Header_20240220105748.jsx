import { useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink, HashLink } from "react-router-hash-link";
import logoImagen from "../../img/PerfilPlac.png";

export function Header() {
  const [isActive, setActive] = useState(false);

  function toggleTheme() {
    let html = document.getElementsByTagName("html")[0];
    html.classList.toggle("light");
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <header className="header header-fixed">
      <Router>
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
            Servicios
          </NavHashLink>
          <NavHashLink smooth to="#contacto" onClick={closeMenu}>
            Contacto
          </NavHashLink>
          <input
            onChange={toggleTheme}
            className="container_toggle"
            type="checkbox"
            id="switch"
            name="mode"
          />
          <label htmlFor="switch">Toggle</label>
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
      </Router>
    </header>
  );
}
