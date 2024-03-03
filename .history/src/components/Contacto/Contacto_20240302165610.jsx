import { useEffect, useState } from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

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
    <section
      className={`section-form scroll-reveal ${isVisible ? "visible" : ""}`}
      id="contacto"
    >
      <h1>Contacto</h1>

      <form className="form" action="https://formsubmit.co/bermudezdamian7@gmail.com" method="POST">
        <div className="input-container ic1">
          <input className="input" type="text" name="nombre" id="firstname" />
          <div className="cut"></div>
          <label className="iLabel" htmlFor="firstname">
            Nombre
          </label>
        </div>

        <div className="input-container ic2">
          <input type="text" className="input" name="name"  />
          <div className="cut"></div>
          <label className="iLabel" htmlFor="lastname">
            Apellido
          </label>
        </div>
        <div className="input-container ic2">
          <input type="email" className="input" name="email"  />
          <div className="cut cut-short"></div>
          <label className="iLabel" htmlFor="email">
            Email
          </label>
        </div>
        <div className="input-container ic2">
          <input type="text" className="input" name="subjet"  />
          <div className="cut"></div>
          <label className="iLabel" htmlFor="asunto">
            Asunto
          </label>
        </div>
        <input className="submit" type="submit" value="Enviar" />
        <input type="hidden" name="_next" value="http://localhost:5173/#home"/>
        <input type="hidden" name="_captcha" value="false"/>
      </form>
      <div className="container-redes_sociales">
        <h2>
          También podes seguirnos por nuestras redes sociales para conecer más
          nuestros servicios
        </h2>
        <div className="content-icon">
          <ul className="container-red__social">
            <li className="icon-content">
              <a
                href=""
                className="link"
                data-social="facebook"
                aria-label="Facebook"
              >
                <FaFacebookF className="icon-facebook" />
              </a>

              <div className="tooltip">Facebook</div>
            </li>
            <li className="icon-content">
              <a
                href=""
                className="link"
                data-social="instagram"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <div className="tooltip">Instagram</div>
            </li>
            <li className="icon-content">
              <a
                href=""
                className="link"
                data-social="whatsapp"
                aria-label="Whatsapp"
              >
                <FaWhatsapp />
              </a>

              <div className="tooltip">Whatsapp</div>
            </li>
            <li className="icon-content">
              <a
                href=""
                className="link"
                data-social="email"
                aria-label="Email"
              >
                <TfiEmail />
              </a>

              <div className="tooltip">Email</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
