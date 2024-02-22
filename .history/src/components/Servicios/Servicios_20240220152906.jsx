import React from "react";
import { Transition } from "react-transition-group";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";
import { FaCubesStacked } from "react-icons/fa6";
import imagen1 from "../../img/fondo1.jpg";
import imagen2 from "../../img/fondo2.jpg";
import imagen3 from "../../img/fondo3.jpg";
import imagen4 from "../../img/fondo4.jpg";
import "./styles.css"

const Servicios = () => {
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
          <section className="container-servicios" id="servicios">
            <h1>Servicios</h1>
            <article>
              <h2>Colocación</h2>
              <div>
                <figure>
                  <img src={imagen1} alt="Perfil-Plac" />
                </figure>
              </div>
              <div>
                <figure>
                  <img src={imagen2} alt="" />
                </figure>
              </div>
              <div>
                <figure>
                  <img src={imagen3} alt="" />
                </figure>
              </div>
              <div>
                <figure>
                  <img src={imagen4} alt="" />
                </figure>
              </div>
            </article>
            <div className="container-card">
              <div className="card-servicios">
                <div className="container-icons">
                  <FaClipboardCheck className="icons-servicios" />
                </div>

                <h2>Amplio catálogo</h2>
                <p>
                  Ofrecemos materiales de primera calidad, con las mejores
                  marcas del mercado.
                </p>
              </div>
              <div className="card-servicios">
                <div className="container-icons">
                  <FaHeadset className="icons-servicios" />
                </div>

                <h2>Asesoramiento</h2>
                <p>
                  Contamos con un equipo especializado para ayudar a nuestros
                  clientes.
                </p>
              </div>
              <div className="card-servicios">
                <div className="container-icons">
                  <FaTruckFast className="icons-servicios" />
                </div>
                <h2>Entrega inmediata</h2>
                <p>Para cumplir con los tiempo de obra.</p>
              </div>
              <div className="card-servicios">
                <div className="container-icons">
                  <FaCubesStacked className="icons-servicios" />
                </div>

                <h2>Amplio stock</h2>
                <p>Garantizado, todo lo que necesitas en un sólo lugar.</p>
              </div>
              <div className="container-info">
                <strong>
                  No dudes en comunicarte por algunos de nuestros medios*
                </strong>
               
              </div>
              
            </div>
          </section>
        </div>
      )}
    </Transition>
  );
};

export default Servicios;

