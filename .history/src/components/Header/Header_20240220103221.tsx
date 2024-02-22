import React,{ useState } from "react";
import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'



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
          <span>{"<Vinayak "}</span>
          <span>{" Singh/>"}</span>
        </HashLink>

        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>

        <nav className={isActive ? 'active' : ''}>
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