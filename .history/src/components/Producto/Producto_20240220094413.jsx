import React from "react";
import { Transition } from "react-transition-group";
import { useState, useEffect, useRef } from "react";
import { ButtonInfo } from "../ButtonInfo/ButtonInfo";



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
          console.log("sadasd", sectionPosition);
          setIsVisible(true);
        }
      };
  
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
            <section className="container productos">
              <h1>Productos</h1>
              <div className="productos-content">
                <article className="productos-item__durlock">
                  <h2>Durlock de Primera Calidad</h2>
                  <p>
                    Ofrecemos placas de Durlock de la más alta calidad, conocidas
                    por su resistencia y durabilidad. Nuestro Durlock es la base
                    perfecta para tus paredes y techos, asegurando un acabado
                    excepcional.
                  </p>
                    <ButtonInfo/>
                </article>
                <article className="productos-item__masilla content">
                  <h2>Masilla y Selladores de Alto Rendimiento:</h2>
                  <p>
                    Nuestra selección de masillas y selladores está diseñada para
                    proporcionar una unión fuerte y duradera. Estos productos
                    garantizan un acabado impecable y una superficie lista para la
                    pintura.
                  </p>
                  <ButtonInfo/>
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
                  <ButtonInfo/>
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
                  <ButtonInfo/>
                </article>
              </div>
            </section>
          </div>
        )}
      </Transition>
    );
  
}
