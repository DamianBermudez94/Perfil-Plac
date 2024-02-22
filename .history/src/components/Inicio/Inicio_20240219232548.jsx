
import { ButtonInfo } from "../ButtonInfo/ButtonInfo";
import "./styles.css";
const Inicio = () => {

  return (
    <section className="home-container" id="inicio">
      {/* Contenido de tu componente */}

      <div className="home-banner-container">
        <div className="home-text-section">
          <h2>¡Bienvenidos a Perfil-Plac innovasión!</h2>
          <p>
            Tu socio confiable en soluciones de durlock. Ofrecemos servicios
            para la venta y construcción de durlock para satisfacer tus
            necesidades.
          </p>
          <ButtonInfo />
        </div>
      </div>
    </section>
  );
};

export default Inicio;
