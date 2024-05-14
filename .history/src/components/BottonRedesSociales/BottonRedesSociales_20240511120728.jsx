import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import "./styles.css";
export const BottonRedesSociales = () => {
  return (
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
            <div className="filled"></div>
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
             <div class="filled"></div>
            <FaWhatsapp />
          </a>

          <div className="tooltip">Whatsapp</div>
        </li>
        <li className="icon-content">
          <a
            href="https://mail.google.com/mail/u/0/#inbox"
            className="link"
            data-social="email"
            aria-label="Email"
            target="_blank"
          >
            <TfiEmail />
          </a>

          <div className="tooltip">Email</div>
        </li>
      </ul>
    </div>
  );
};
