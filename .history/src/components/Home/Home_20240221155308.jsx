import React, {} from "react";
import { Transition } from "react-transition-group";
import { HashLink as NavLink } from 'react-router-hash-link';

import "./styles.css";
const Inicio = () => {
  const [inProp, setInProp] = React.useState(false);

  React.useEffect(() => {
    // Activa la transición después de que el componente se monte
    setInProp(true);
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
          <section className="home-container" id="home">
            <div className="home-banner-container">
              <div className="home-text-section">
                <h2>¡Bienvenidos a Perfil-Plac innovasión!</h2>
                <p>
                  Tu socio confiable en soluciones de durlock. Ofrecemos
                  servicios para la venta y construcción de durlock para
                  satisfacer tus necesidades.
                </p>
                <NavLink smooth to="#/contact" activeClassName="active">Contacto</NavLink>
              </div>
            </div>
          </section>
        </div>
      )}
    </Transition>
  );
};

export default Inicio;
