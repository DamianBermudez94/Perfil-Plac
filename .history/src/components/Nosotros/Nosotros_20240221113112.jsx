import React from "react";
import { Transition } from "react-transition-group";
import { Accordion } from "../Acordion/Accordion";
import img1 from "../../img/img-nosotros.jpg"
import "./styles.css";
const Nosotros = () => {
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
          <section className="section-nosotros" id="nosotros">
            <h1>Nosotros</h1>
            <div className="container-text__nosotros">
              <figure>
                <img src={img1} alt="Perfil-Plac Durlock" />
              </figure>
              <p>
                En <strong>Perfil-Plac</strong>, llevamos años dedicados a la
                excelencia en la venta y construcción de durlock. Nuestro equipo
                altamente calificado combina habilidad técnica con un enfoque
                centrado en el cliente, asegurando resultados excepcionales en
                cada proyecto. Nos comprometemos a superar expectativas y
                convertir tus ideas en espacios funcionales y estéticamente
                atractivos.
              </p>
            </div>
            <h2>¿Por qué elegirnos?</h2>
              <div className="accordion-container">
                <Accordion
                  question="Calidad Inigualable"
                  answer="Trabajamos con los mejores materiales Durlock para garantizar la durabilidad y resistencia de cada construcción."
                />
                <Accordion
                  question="Asesoramiento Expertise"
                  answer=" Nuestro equipo de expertos está listo para brindarte asesoramiento personalizado, ayudándote a seleccionar los insumos adecuados para tu proyecto específico."
                />
                <Accordion
                  question="Instalación Profesional"
                  answer="No solo suministramos insumos; también ofrecemos servicios de instalación impecables, llevando tus ideas desde el papel hasta la realidad con habilidad y precisión."
                />
                <Accordion
                  question="Variedad de Productos"
                  answer=" Explora nuestra amplia gama de productos Durlock, desde placas estándar hasta soluciones especializadas para proyectos únicos."
                />
              </div>
          </section>
        </div>
      )}
    </Transition>
  );
};

export default Nosotros;
