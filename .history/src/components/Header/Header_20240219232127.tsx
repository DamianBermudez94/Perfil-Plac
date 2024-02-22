import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import React,{ useState } from 'react'


export function Header() {
  const [isactive, setActive] = useState(false)

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

        <nav className={isactive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            Home
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            About me
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            Project
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            Contact
          </NavHashLink>
          <a href="#" download className="button">
            CV
          </a>
        </nav>

        <div
          aria-expanded={isactive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isactive ? 'Fechar menu' : 'Abrir menu'}
          className={isactive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isactive)
          }}
        ></div>
      </Router>
    </Container>
  )
}