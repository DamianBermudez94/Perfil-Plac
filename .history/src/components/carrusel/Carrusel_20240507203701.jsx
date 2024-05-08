import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

