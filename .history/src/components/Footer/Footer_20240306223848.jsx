import { FaFacebookF } from "react-icons/fa";

import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import logoImagen from "../../img/PerfilPlac.png"
import "./styles.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-container">
          <img src={logoImagen} alt="perfil-plac" className="logo-footer" />
        </div>
        <div className="content-icon">
          <ul className="container-red__social">
            <li className="icon-content">
              <a
                href="https://www.facebook.com/profile.php?id=61551926581846&locale=es_LA"
                className="link"
                data-social="facebook"
                aria-label="Facebook"
                target="_blank"
              >
                <FaFacebookF className="icon-facebook" />
              </a>

              <div className="tooltip">Facebook</div>
            </li>
          
            <li className="icon-content">
              <a
                href="https://wa.me/+542227485990"
                className="link"
                data-social="whatsapp"
                aria-label="Whatsapp"
                target="_blank"
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
        <div className="custom-line"></div>
        <div className="footer-legal__text">
          <p>@2024 Perfil-Plac innovación</p>
          <span>
            <a href="https://damianbermudezdev.es/" target="__blank">
              Hecho por DB|WEB &#169;
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
