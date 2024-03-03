import React from "react";
import { Transition } from "react-transition-group";

import "./styles.css";
const Inicio = () => {
  const [inProp, setInProp] = React.useState(false);
  React.useEffect(() => {
    // Activa la transición después de que el componente se monte
    setInProp(true);
  }, []);
  
  return (
    <Transition in={inProp} timeout={900}>
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
                <h2 className="animate-title">¡Bienvenidos a Perfil-Plac innovasión!</h2>
                <p  className="animate-paragraph">
                  Ofrecemos servicios para la colocación y venta de durlock más toda la construcción en seco 
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
