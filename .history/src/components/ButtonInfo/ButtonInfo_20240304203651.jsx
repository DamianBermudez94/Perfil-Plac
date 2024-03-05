import { NavHashLink } from "react-router-hash-link";

import "./style.css";

export const ButtonInfo = () => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}


  return (
    <NavHashLink className="button-informacion" smooth to="#contacto"
    scroll={el => scrollWithOffset(el)}>
      <span>Conoce más sobre nuestros servicios</span>
      <span></span>
    </NavHashLink>
  );
};
