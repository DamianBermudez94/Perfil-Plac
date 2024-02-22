import React from "react";
import { Transition } from "react-transition-group";
import { useState, useEffect, useRef } from "react";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";
import { FaCubesStacked } from "react-icons/fa6";
import "./styles.css";

export const Producto = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [inProp, setInProp] = React.useState(false);
  const sectionRef = useRef();

  React.useEffect(() => {
    // Activa la transición después de que el componente se monte
    setInProp(true);
  }, []);

  useEffect(() => {
    // Manejar el evento de scroll
    const handleScroll = () => {
      const sectionPosition = sectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Si la parte superior de la sección es visible en la ventana
      if (sectionPosition < windowHeight * 0.8) {
       
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="producto" id="productos">
      <Transition in={inProp} timeout={900}>
        {(state) => (
          <div
            style={{
              transition: `opacity 0.5s ease-in-out`,
              opacity: state === "entering" || state === "entered" ? 1 : 0,
            }}
          >
            <section className="container productos">
              <h1>Productos</h1>
              <div className="productos-content">
                <article className="productos-item__durlock">
                  <h2>Durlock de Primera Calidad</h2>
                  <p>
                    Ofrecemos placas de Durlock de la más alta calidad,
                    conocidas por su resistencia y durabilidad. Nuestro Durlock
                    es la base perfecta para tus paredes y techos, asegurando un
                    acabado excepcional.
                  </p>
                </article>
                <article className="productos-item__masilla content">
                  <h2>Masilla y Selladores de Alto Rendimiento:</h2>
                  <p>
                    Nuestra selección de masillas y selladores está diseñada
                    para proporcionar una unión fuerte y duradera. Estos
                    productos garantizan un acabado impecable y una superficie
                    lista para la pintura.
                  </p>
                </article>
                <article
                  ref={sectionRef}
                  className={`productos-item__perfiles content ${
                    isVisible ? "visible" : ""
                  }`}
                >
                  <h2>Perfiles Precisos y Resistentes</h2>
                  <p>
                    Los perfiles metálicos son esenciales en la construcción en
                    seco, y ofrecemos una variedad de perfiles que se ajustan a
                    tus necesidades. Nuestros perfiles son resistentes a la
                    corrosión y se fabrican con precisión para garantizar un
                    ajuste perfecto.
                  </p>
                </article>
                <article
                  ref={sectionRef}
                  className={`productos-item__varios content ${
                    isVisible ? "visible" : ""
                  }`}
                >
                  <h2>Variedad de Productos</h2>
                  <p>
                    Además de Durlock, masilla y perfiles, también ofrecemos una
                    amplia gama de otros insumos esenciales, como tornillos,
                    cintas y herramientas especializadas.
                  </p>
                </article>
              </div>
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
    </div>
  );
};
