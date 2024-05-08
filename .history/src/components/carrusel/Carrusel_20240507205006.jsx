import { useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import imagen1 from "../../../public/image/durlock-construccion-en-seco.jpg";
import imagen2 from "../../../public/image/durlock-construccion-en-seco2.jpg";
import imagen3 from "../../../public/image/durlock-construccion-en-seco3.jpg";
import imagen4 from "../../../public/image/durlock-construccion-en-seco4.jpg";


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Definir las imágenes dentro del componente
  const imagenes = [
    { src: imagen1, id: 1, alt: "Perfil-Plac durlock-construccion-en-seco" },
    { src: imagen2, id: 2, alt: "Perfil-Plac durlock-construccion-en-seco" },
    { src: imagen3, id: 3, alt: "Perfil-Plac durlock-construccion-en-seco" },
    { src: imagen4, id: 4, alt: "Perfil-Plac durlock-construccion-en-seco" },
  ];

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === imagenes.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel">
      <button onClick={goToPrevSlide}>Prev</button>
      {/* Mostrar la imagen actual basada en el índice actual */}
      <img src={imagenes[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button onClick={goToNextSlide}>Next</button>
    </div>
  );
};

export default Carousel;

