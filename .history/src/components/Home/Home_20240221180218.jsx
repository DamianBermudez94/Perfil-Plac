import React from "react";
import {useEffect,useState} from 'react'
import { Transition } from "react-transition-group";

import "./styles.css";
const Inicio = () => {
  const [inProp, setInProp] = React.useState(false);
  const [isVisible, setIsVisible] = useState(false);
  React.useEffect(() => {
    // Activa la transición después de que el componente se monte
    setInProp(true);
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const revealThreshold = -100; // Ajusta este valor según sea necesario

    if (scrollY > revealThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Transition in={inProp} timeout={500}>
      {(state) => (
        <div
          style={{
            transition: `opacity 0.5s ease-in-out`,
            opacity: state === "entering" || state === "entered" ? 1 : 0,
          }}
        >
          {/* Contenido de tu componente */}
          <section className="home-container"  id="home">
            <div className={`home-banner-container scroll-reveal ${isVisible ? 'visible' : ''}`}>
              <div className="home-text-section">
                <h2>¡Bienvenidos a Perfil-Plac innovasión!</h2>
                <p>
                  Ofrecemos servicios para la venta y construcción de durlock
                  para satisfacer tus necesidades.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </Transition>
  );
};

export default Inicio;
