import sgMail from '@sendgrid/mail';

const email = sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);
 console.log("soy la api key",email);

import { useEffect, useState } from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

import "./styles.css";


const Contacto = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });



    const handleSubmit = async (event) => {
      event.preventDefault();
  
      // Lógica para enviar el formulario a través de SendGrid
      const msg = {
        to: 'bermudezdamian7@gmail.com',
        from: 'bermudezdamian7@gmail.com',
        subject: 'Asunto del correo',
        text: `Nombre: ${formData.nombre}\nCorreo: ${formData.correo}\nMensaje: ${formData.mensaje}`,
      };
  
      try {
        await sgMail.send(msg);
        console.log('Correo enviado con éxito');
      } catch (error) {
        console.error('Error al enviar el correo:', error);
      }
    };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

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

      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </label>
        <label>
          Correo:
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
          />
        </label>
        <label>
          Mensaje:
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
      {/*<form className="form">
        <div className="input-container ic1">
          <input placeholder="" type="text" className="input" id="firstname" />
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
  </form>*/}
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
