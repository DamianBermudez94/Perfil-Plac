import { BottonRedesSociales } from "../BottonRedesSociales/BottonRedesSociales";
import logoImagen from "../../../public/image/logo-PerfilPlac-sinfondo.png";
import "./styles.css";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-container">
          <img src={logoImagen} alt="perfil-plac" className="logo-footer" />
        </div>
        <BottonRedesSociales />
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
