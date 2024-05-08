import { useEffect, useState } from "react";
import Modal from "react-modal";
import LazyLoad from "react-lazyload";
import debounce from "lodash.debounce";

import Carousel from "../carrusel/Carrusel";
import "./styles.css";

const Servicios = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  });
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  // Define las imágenes en un array

  const openModal = (event, index) => {
    const rect = event.target.getBoundingClientRect();
    setModalPosition({
      top: rect.top + window.scrollX,
      left: rect.left + window.scrollX,
      bottom: rect.bottom + window.scrollY,
      right: rect.right + window.scrollX,
    });
    setSelectedImageIndex(index);
    setModalIsOpen(true);
  };
  const handleScroll = debounce(() => {
    const scrollY = window.scrollY;
    const revealThreshold = 2800;

    if (scrollY > revealThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, 200);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <section
      className={`container-servicios scroll-reveal ${
        isVisible ? "visible" : ""
      }`}
      id="proyectos"
    >
      <h1>Proyectos</h1>
      <div className="content-colocacion">
        <h2 className="servicios-sub__title">
          Estos son algunos de nuestros proyectos
        </h2>
        <Modal
          isOpen={modalIsOpen}
          contentLabel="Detalles del Proyecto"
          shouldCloseOnOverlayClick={true}
          className="mi-modal" // Agrega una clase para personalizar el modal
          overlayClassName="mi-modal-overlay"
          onRequestClose={() => setModalIsOpen(false)}
        >
          {selectedImageIndex !== null && <Carousel />}
        </Modal>
        {imagenes.map((imagen, index) => (
          <div
            key={index}
            className="container-img"
            onClick={(event) => openModal(event, index)}
          >
            <figure>
              <img src={imagen.src} alt={imagen.alt} />
            </figure>
          </div>
        ))}

        <p className="servicios-description">
          Tus proyectos se vuelven realidad con nuestros servicios expertos en
          colocación de durlock. ¡Confía en nosotros para transformar tus
          espacios!
        </p>
      </div>
    </section>
  );
};

export default Servicios;
