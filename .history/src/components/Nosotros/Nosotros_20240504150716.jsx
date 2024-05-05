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
           
           
          <strong>Con más de 10 años experiencia en la industria</strong>,hemos establecido un legado de excelencia y confiabilidad. Hemos trabajado en una amplia variedad de proyectos, desde hogares familiares hasta complejos industriales, y hemos demostrado una y otra vez nuestra capacidad para entregar resultados sobresalientes en tiempo y forma. Nuestra reputación se basa en la calidad de nuestro trabajo y en las relaciones sólidas que hemos construido con nuestros clientes a lo largo de los años.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Nosotros;
