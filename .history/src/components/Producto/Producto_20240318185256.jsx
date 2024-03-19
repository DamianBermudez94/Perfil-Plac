import { useState, useEffect } from "react";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";
import { FaCubesStacked } from "react-icons/fa6";
import { ButtonInfo } from "../ButtonInfo/ButtonInfo";
import img1 from "../../../public/image/durlock-construccion-en-seco6.jpg";
import img2 from "../../../public/image/durlock-construccion-en-seco6.jpg";
import img3 from "../../../public/image/durlock-construccion-en-seco6.jpg";
import img4 from "../../../public/image/durlock-construccion-en-seco6.jpg";
import "./styles.css";

export const Producto = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const revealThreshold = 1300;

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
    <section className="producto" id="productos">
      <div className="container">
        <h1>Productos</h1>
        <div
          className={`productos-content scroll-reveal ${
            isVisible ? "visible" : ""
          }`}
        >
          <article className="productos-item__durlock">
            <img src={img1} alt="Perfil-Plac Durlock construccion-en-seco" />
            <h2>Durlock de Primera Calidad</h2>
            <p>
              Ofrecemos placas de Durlock de la más alta calidad, conocidas por
              su resistencia y durabilidad. Nuestro Durlock es la base perfecta
              para tus paredes y techos, asegurando un acabado excepcional.
            </p>
            <ButtonInfo />
          </article>
          <article className="productos-item__masilla content">
          <img src={img1} alt="Perfil-Plac Durlock construccion-en-seco" />
            <h2>Masilla y Selladores de Alto Rendimiento:</h2>
            <p>
              Nuestra selección de masillas y selladores está diseñada para
              proporcionar una unión fuerte y duradera. Estos productos
              garantizan un acabado impecable y una superficie lista para la
              pintura.
            </p>
            <ButtonInfo />
          </article>
          <article className="productos-item__perfiles content">
          <img src={img1} alt="Perfil-Plac Durlock construccion-en-seco" />
            <h2>Perfiles Precisos y Resistentes</h2>
            <p>
              Los perfiles metálicos son esenciales en la construcción en seco,
              y ofrecemos una variedad de perfiles que se ajustan a tus
              necesidades. Nuestros perfiles son resistentes a la corrosión y se
              fabrican con precisión para garantizar un ajuste perfecto.
            </p>
            <ButtonInfo />
          </article>
          <article className="productos-item__varios content">
          <img src={img1} alt="Perfil-Plac Durlock construccion-en-seco" />
            <h2>Variedad de Productos</h2>
            <p>
              Además de Durlock, masilla y perfiles, también ofrecemos una
              amplia gama de otros insumos esenciales, como tornillos, cintas y
              herramientas especializadas.
            </p>
            <ButtonInfo />
          </article>
        </div>
        <div className="container-card">
          <div className="card-servicios">
            <div className="container-icons">
              <FaClipboardCheck className="icons-servicios" />
            </div>

            <h2>Amplio catálogo</h2>
            <p>
              Ofrecemos materiales de primera calidad, con las mejores marcas
              del mercado.
            </p>
          </div>
          <div className="card-servicios">
            <div className="container-icons">
              <FaHeadset className="icons-servicios" />
            </div>

            <h2>Asesoramiento</h2>
            <p>
              Contamos con un equipo especializado para ayudar a nuestros
              clientes.
            </p>
          </div>
          <div className="card-servicios">
            <div className="container-icons">
              <FaTruckFast className="icons-servicios" />
            </div>
            <h2>Entrega inmediata</h2>
            <p>Para cumplir con los tiempo de obra.</p>
          </div>
          <div className="card-servicios">
            <div className="container-icons">
              <FaCubesStacked className="icons-servicios" />
            </div>

            <h2>Amplio stock</h2>
            <p>Garantizado, todo lo que necesitas en un sólo lugar.</p>
          </div>
          <div className="container-info">
            <strong>
              No dudes en comunicarte por algunos de nuestros medios*
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};
