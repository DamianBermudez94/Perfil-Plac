import { useState, useEffect } from "react";

import { NavHashLink, HashLink } from "react-router-hash-link";
import logoImagen from "../../../public/image/logo__perfilPlac-sinfonfo.png";
import "./styles.css";
export function Header() {
  const [isActive, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  function closeMenu() {
    setActive(false);
  }
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpiar el event listener en el desmontaje del componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
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
        <NavHashLink smooth to="#proyectos" onClick={closeMenu}>
          proyectos
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
