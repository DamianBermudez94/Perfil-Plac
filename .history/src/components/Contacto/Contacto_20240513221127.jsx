import { useEffect, useState } from "react";
import { BottonRedesSociales } from "../BottonRedesSociales/BottonRedesSociales";

import "./styles.css";

const Contacto = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const revealThreshold = 4300; // Ajusta este valor según sea necesario

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
    <section className="section-form" id="contacto">
      <h1>Contacto</h1>
      <div
        className={`content-form scroll-reveal ${isVisible ? "visible" : ""}`}
        id="contacto"
      >
        

        <form
          className="form"
          action="https://formspree.io/f/myyrjaeb"
          method="POST"
        >
          <div className="input-container ic1">
            <input
              id="firstname"
              name="nombre"
              className="input"
              type="text"
              placeholder=""
            />
            <div className="cut"></div>
            <label htmlFor="firstname" className="placeholder">
              Nombre
            </label>
          </div>
          <div className="input-container ic1">
            <input
              id="lastname"
              className="input"
              name="apellido"
              type="text"
              placeholder=""
            />
            <div className="cut"></div>
            <label htmlFor="lastname" className="placeholder">
              Apellido
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="email"
              className="input"
              name="email"
              type="email"
              placeholder=""
            />
            <div className="cut cut-short"></div>
            <label htmlFor="email" className="placeholder">
              Email
            </label>
          </div>
          <div className="input-container ic2">
            <input
              id="telefono"
              className="input"
              name="telefono"
              type="tel"
              placeholder=""
            />
            <div className="cut cut-short"></div>
            <label htmlFor="telefono" className="placeholder">
              Telefono
            </label>
          </div>
          <div className="input-container ic2">
            <textarea
              id="asunto"
              className="input"
              name="asunto"
              type="text"
              placeholder=""
            />
            <div className="cut cut-short"></div>
            <label htmlFor="asunto" className="placeholder">
              Escriba su consulta..
            </label>
          </div>
          <div className="input-container">
            <button type="submit" className="submit">
              Enviar
            </button>
          </div>
        </form>

        <div className="container-redes_sociales">
          <h2>
            También puedes seguirnos en nuestras redes sociales para conocer más
            sobre nuestros servicios
          </h2>
          <BottonRedesSociales />
        </div>
      </div>
    </section>
  );
};

export default Contacto;
