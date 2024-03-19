import { useEffect, useState } from "react";
import { Accordion } from "../Acordion/Accordion";
import img1 from "../../../public/image/durlock-construccion-en-seco6.jpg";

import "./styles.css";
const Nosotros = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const revealThreshold = 300; // Ajusta este valor según sea necesario

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
    <section className="section-nosotros" id="nosotros">
      <h1>Nosotros</h1>
      <div
        className={`container-text__nosotros scroll-reveal ${
          isVisible ? "visible" : ""
        }`}
      >
        <figure>
          <img src={img1} alt="Perfil-Plac Durlock" />
        </figure>
        <div className="nosotros-text">
          <p>
            <strong>Con más de 10 años de experiencia</strong>, nos dedicamos
            con pasión a la excelencia en la venta y construcción de durlock.
            Nuestro equipo, formado por profesionales altamente calificados, no
            solo posee habilidades técnicas excepcionales, sino que también
            adopta un enfoque centrado en el cliente. Este enfoque nos ha
            permitido lograr resultados excepcionales en cada proyecto que
            emprendemos.
          </p>
        </div>

        <div className="accordion-container">
          <h2>¿Por qué elegirnos?</h2>
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
      </div>
    </section>
  );
};

export default Nosotros;
