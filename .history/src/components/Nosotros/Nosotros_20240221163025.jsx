import React from "react";
import { Transition } from "react-transition-group";
import { Accordion } from "../Acordion/Accordion";
import img1 from "../../img/img-nosotros.jpg";
import img2 from "../../img/img-nosotros2.jpg";
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
              <div className="nosotros-text">
                <p>
                  Con más de 5 años de experiencia, en Perfil-Plac Durlock nos
                  dedicamos con pasión a la excelencia en la venta y
                  construcción de durlock. Nuestro equipo, formado por
                  profesionales altamente calificados, no solo posee habilidades
                  técnicas excepcionales, sino que también adopta un enfoque
                  centrado en el cliente. Este enfoque nos ha permitido lograr
                  resultados excepcionales en cada proyecto que emprendemos.
                </p>
                <p>
                  Nos enorgullece comprometernos con la excelencia y superar las
                  expectativas de nuestros clientes. No solo somos expertos en
                  durlock, sino que también somos artesanos dedicados a
                  convertir tus ideas en realidad. Nos esforzamos por crear
                  espacios que no solo sean funcionales, sino también
                  estéticamente atractivos, reflejando la visión única de cada
                  cliente.
                </p>
                <p>
                  En cada paso del camino, desde la conceptualización hasta la
                  ejecución, trabajamos en colaboración contigo para garantizar
                  que cada detalle sea perfecto. Estamos aquí para transformar
                  tus ideas en espacios habitables que no solo cumplan, sino que
                  también superen tus sueños y expectativas. Confía en nosotros
                  para llevar a cabo tus proyectos con profesionalismo,
                  dedicación y un compromiso inquebrantable con la calidad y la
                  satisfacción del cliente.
                </p>
              </div>
            </div>

            <div className="accordion-container">
              <h2>¿Por qué elegirnos?</h2>
              <figure>
                <img src={img2} alt="Perfil-Plac Durlock" />
              </figure>
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
