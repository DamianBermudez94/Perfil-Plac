import { useState, useEffect } from "react";
import imagen1 from "../../../public/image/durlock-construccion-en-seco.jpg";
import imagen2 from "../../../public/image/durlock-construccion-en-seco2.jpg";
import imagen3 from "../../../public/image/durlock-construccion-en-seco3.jpg";
import imagen4 from "../../../public/image/durlock-construccion-en-seco4.jpg";
import { ButtonInfo } from "../ButtonInfo/ButtonInfo";
import masilla from "../../../public/image/durlock-construccion-en-seco-masilla.jpg";
import perfiles from "../../../public/image/durlock-construccion-en-seco-perfiles.jpg";
import placas from "../../../public/image/durlock-construccion-en-seco-placas.jpg";
import productosVarios from "../../../public/image/durlock-construccion-en-seco-varios.webp";
import "./styles.css";
import Carousel from "../carrusel/Carrusel";

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

  const imagenes = [
    { src: imagen1, id: 1, alt: "Perfil-Plac durlock-construccion-en-seco" },
    { src: imagen2, id: 2, alt: "Perfil-Plac durlock-construccion-en-seco" },
    { src: imagen3, id: 3, alt: "Perfil-Plac durlock-construccion-en-seco" },
    { src: imagen4, id: 4, alt: "Perfil-Plac durlock-construccion-en-seco" },
  ];

  return (
    <section className="producto" id="productos">
      <div className="container">
        <h1>Productos</h1>
        <div
          className={`productos-content scroll-reveal ${
            isVisible ? "visible" : ""
          }`}
        >
          <article className="productos-item">
            <img
              src={placas}
              alt="Perfil-Plac - construcción en seco en Lobos - venta de Durlock en Lobos"
            />
            <div className="content-card_product">
              <h2>Durlock de Primera Calidad</h2>
              <p>
                Ofrecemos placas de Durlock de la más alta calidad, conocidas
                por su resistencia y durabilidad. Nuestro Durlock es la base
                perfecta para tus paredes y techos, asegurando un acabado
                excepcional.
              </p>
              <ButtonInfo />
            </div>
          </article>
          <article className="productos-item">
            <img
              src={masilla}
              alt="Perfil-Plac - construcción en seco en Lobos - venta de Durlock en Lobos"
            />
            <div className="content-card_product">
              <h2>Masilla y Selladores de Alto Rendimiento:</h2>
              <p>
                Nuestra selección de masillas y selladores está diseñada para
                proporcionar una unión fuerte y duradera. Estos productos
                garantizan un acabado impecable y una superficie lista para la
                pintura.
              </p>
              <ButtonInfo />
            </div>
          </article>
          <article className="productos-item">
            <img
              src={perfiles}
              alt="Perfil-Plac - construcción en seco en Lobos - venta de Durlock en Lobos"
            />
            <div className="content-card_product">
              <h2>Perfiles Precisos y Resistentes</h2>
              <p>
                Los perfiles metálicos son esenciales en la construcción en
                seco, y ofrecemos una variedad de perfiles que se ajustan a tus
                necesidades. Nuestros perfiles son resistentes a la corrosión y
                se fabrican con precisión para garantizar un ajuste perfecto.
              </p>
              <ButtonInfo />
            </div>
          </article>
          <article className="productos-item">
            <img
              src={productosVarios}
              alt="Perfil-Plac - construcción en seco en Lobos - venta de Durlock en Lobos"
            />
            <div className="content-card_product">
              <h2>Variedad de Productos</h2>
              <p>
                Además de Durlock, masilla y perfiles, también ofrecemos una
                amplia gama de otros insumos esenciales, como tornillos, cintas
                y herramientas especializadas.
              </p>
              <ButtonInfo />
            </div>
          </article>
        </div>
        {/*  <div className="container-card">
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
            <p>
              No dudes en comunicarte por algunos de nuestros medios*
            </p>
          </div>
        </div> */}
     
      </div>
    </section>
  );
};