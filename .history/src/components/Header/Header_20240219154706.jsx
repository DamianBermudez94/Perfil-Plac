import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { Container } from './styles';



export function Header() {
  const [isActive, setActive] = useState(false)

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }

  function closeMenu() {
    setActive(false)
  }

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <figure>
            <img
              src={logoImagen}
              alt="Perfil-Plac durlock construccion en seco"
            ></img>
          </figure>
        </HashLink>




        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#acerda-de" onClick={closeMenu}>
            Acerda de
          </NavHashLink>
          <NavHashLink smooth to="#proyecto" onClick={closeMenu}>
            Proyecto
          </NavHashLink>
          <NavHashLink smooth to="#contacto" onClick={closeMenu}>
            Contacto
          </NavHashLink>
          <a href="#" download className="button">
            CV
          </a>
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
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      </Router>
    </Container>
  )
}