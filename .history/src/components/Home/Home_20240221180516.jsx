
import { useEffect, useState } from "react";


import "./styles.css";
const Inicio = () => {
 
  const [isVisible, setIsVisible] = useState(false);
 

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const revealThreshold = -100; // Ajusta este valor según sea necesario

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
    <section className="home-container" id="home">
      <div
        className={`home-banner-container scroll-reveal ${
          isVisible ? "visible" : ""
        }`}
      >
        <div className="home-text-section">
          <h2>¡Bienvenidos a Perfil-Plac innovasión!</h2>
          <p>
            Ofrecemos servicios para la venta y construcción de durlock para
            satisfacer tus necesidades.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
