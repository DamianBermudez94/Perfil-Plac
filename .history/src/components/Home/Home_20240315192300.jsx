import React from "react";
import { Transition } from "react-transition-group";
import { ButtonInfo } from "../ButtonInfo/ButtonInfo";
import "./styles.css";
const Inicio = () => {
  const [inProp, setInProp] = React.useState(false);
  React.useEffect(() => {
    // Activa la transición después de que el componente se monte
    setInProp(true);
  }, []);

  return (
    <section className="home-container" id="home">
      <div className="home-banner-container">
        <Transition in={inProp} timeout={900}>
          {(state) => (
            <div
              style={{
                transition: `opacity 0.5s ease-in-out`,
                opacity: state === "entering" || state === "entered" ? 1 : 0,
                margin:"0 auto"
              }}
            >
              <div className="home-text-section">
                <h1 className="animate-title">
                  ¡Bienvenidos a Perfil-Plac innovasión!
                </h1>
                <p className="animate-paragraph">
                  Venta y colocacion en durlock
                </p>
                <ButtonInfo />
              </div>
            </div>
          )}
        </Transition>
      </div>
    </section>
  );
};

export default Inicio;
