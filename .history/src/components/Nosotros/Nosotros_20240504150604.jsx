import { useEffect, useState } from "react";

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
     
      <div
        className={`container-text__nosotros scroll-reveal ${
          isVisible ? "visible" : ""
        }`}
      >
        <figure>
          <img src={img1} alt="Perfil-Plac - construcción en seco en Lobos - venta de Durlock en Lobos" />
        </figure>
        <div className="nosotros-text">
        <h1>Nosotros</h1>
          <p>En <strong>Perfil-Plac</strong>, nuestra misión es trascender los límites de la construcción convencional mediante soluciones innovadoras y sostenibles en Durlock. Nos esforzamos por superar las expectativas en cada proyecto, ofreciendo productos y servicios que no solo cumplen, sino que también inspiran. Desde pequeñas renovaciones hasta grandes desarrollos comerciales, estamos comprometidos a proporcionar resultados excepcionales que perduren en el tiempo.</p>
          <p>
            <strong>Con más de 10 años de experiencia, nos dedicamos
            con pasión a la excelencia en la venta y construcción en seco (durlock). </strong>
            Nuestro equipo, formado por profesionales altamente calificados, no
            solo posee habilidades técnicas excepcionales, sino que también
            adopta un enfoque centrado en el cliente. Este enfoque nos ha
            permitido lograr resultados excepcionales en cada proyecto que
            emprendemos.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Nosotros;