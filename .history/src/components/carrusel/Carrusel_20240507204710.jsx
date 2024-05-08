import { useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import imagen1 from "../../../public/image/durlock-construccion-en-seco.jpg";
import imagen2 from "../../../public/image/durlock-construccion-en-seco2.jpg";
import imagen3 from "../../../public/image/durlock-construccion-en-seco3.jpg";
import imagen4 from "../../../public/image/durlock-construccion-en-seco4.jpg";
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagenes = [
    { src: imagen1, id: 1, alt: "Perfil-Plac durlock-construccion-en-seco" },
    { src: imagen2, id: 2, alt: "Perfil-Plac durlock-construccion-en-seco" },
    { src: imagen3, id: 3, alt: "Perfil-Plac durlock-construccion-en-seco" },
    { src: imagen4, id: 4, alt: "Perfil-Plac durlock-construccion-en-seco" },
  ];
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevSlide}>Prev</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button onClick={goToNextSlide}>Next</button>
    </div>
  );
};
// Definir PropTypes para validar las props
Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired // Espera un array de strings (URLs de imágenes) y es requerido
  };

export default Carousel;

