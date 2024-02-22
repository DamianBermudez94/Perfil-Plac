import React from "react";
import { Transition } from "react-transition-group";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const Contacto = () => {
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
          <section className="section-form">
            <h1>Contacto</h1>
            <form className="form">
              <div className="input-container ic1">
                <input
                  placeholder=""
                  type="text"
                  className="input"
                  id="firstname"
                />
                <div className="cut"></div>
                <label className="iLabel" htmlFor="firstname">
                  Nombre
                </label>
              </div>

              <div className="input-container ic2">
                <input type="text" className="input" id="lastname" />
                <div className="cut"></div>
                <label className="iLabel" htmlFor="lastname">
                  Apellido
                </label>
              </div>
              <div className="input-container ic2">
                <input type="email" className="input" id="email" />
                <div className="cut cut-short"></div>
                <label className="iLabel" htmlFor="email">
                  Email
                </label>
              </div>
              <div className="input-container ic2">
                <input type="text" className="input" id="asunto" />
                <div className="cut"></div>
                <label className="iLabel" htmlFor="asunto">
                  Asunto
                </label>
              </div>
              <input className="submit" type="submit" value="Enviar" />
            </form>
            <div className="container-redes_sociales">
              <h2>
                También podes seguirnos por nuestras redes sociales para conecer
                más nuestros servicios
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
        </div>
      )}
    </Transition>
  );
};

export default Contacto;

