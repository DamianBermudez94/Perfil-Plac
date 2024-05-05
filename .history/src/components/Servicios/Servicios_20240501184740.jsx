
import { useEffect, useState } from "react";
import debounce from 'lodash.debounce';
import imagen1 from "../../../public/image/durlock-construccion-en-seco.jpg";
import imagen2 from "../../../public/image/durlock-construccion-en-seco2.jpg";
import imagen3 from "../../../public/image/durlock-construccion-en-seco3.jpg";
import imagen4 from "../../../public/image/durlock-construccion-en-seco4.jpg";
import "./styles.css";

const Servicios = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = debounce(() => {
    const scrollY = window.scrollY;
    const revealThreshold = 2800; 
    
    if (scrollY > revealThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  },200);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <section className={`container-servicios scroll-reveal ${
      isVisible ? "visible" : ""
    }`} id="proyectos">
      <h1>Proyectos</h1>
      <div className="content-colocacion">
      <h2 className="servicios-description">
        Estos son algunos de nuestros proyectos
      </h2>
        <div className="container-img">
          <figure>
            <img src={imagen1} alt="Perfil-Plac durlock-construccion-en-seco" />
          </figure>
        </div>
        <div className="container-img">
          <figure>
            <img src={imagen2} alt="Perfil-Plac durlock-construccion-en-seco" />
          </figure>
        </div>
        <div className="container-img">
          <figure>
            <img src={imagen3} alt="Perfil-Plac durlock-construccion-en-seco" />
          </figure>
        </div>
        <div className="container-img">
          <figure>
            <img src={imagen4} alt="Perfil-Plac durlock-construccion-en-seco" />
          </figure>
        </div>
        <h2 className="servicios-description">
        Tus proyectos se vuelven realidad con nuestros servicios expertos en
        colocación de durlock. ¡Confía en nosotros para transformar tus
        espacios!
      </h2>
      </div>
     
    </section>
  );
};

export default Servicios;
