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
    <section className="home-container" id="inicio">
    
            {/* Contenido de tu componente */}

            <div className="home-banner-container">
              <div className="home-text-section">
                <h2>¡Bienvenidos a Perfil-Plac innovasión!</h2>
                <p>
                  Tu socio confiable en soluciones de durlock. Ofrecemos
                  servicios para la venta y construcción de durlock para
                  satisfacer tus necesidades.
                </p>
                <ButtonInfo />
              </div>
            </div>
     
    </section>
  );
};

export default Inicio;
