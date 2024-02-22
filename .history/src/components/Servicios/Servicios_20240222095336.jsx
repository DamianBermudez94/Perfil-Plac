import React from "react";
import { useEffect, useState } from "react";

import imagen1 from "../../img/fondo1.jpg";
import imagen2 from "../../img/fondo2.jpg";
import imagen3 from "../../img/fondo3.jpg";
import imagen4 from "../../img/fondo4.jpg";
import "./styles.css";

const Servicios = () => {
  const [inProp, setInProp] = React.useState(false);

  React.useEffect(() => {
    // Activa la transición después de que el componente se monte
    setInProp(true);
  }, []);
  return (
    <section className="container-servicios" id="servicios">
      <h1>Colocación</h1>
      <div className="content-colocacion">
        <h2>Hacemos que tus proyectos se vuelvan realidad</h2>
        <div className="container-img">
          <figure>
            <img src={imagen1} alt="Perfil-Plac" />
          </figure>
        </div>
        <div className="container-img">
          <figure>
            <img src={imagen2} alt="Perfil-Plac" />
          </figure>
        </div>
        <div className="container-img">
          <figure>
            <img src={imagen3} alt="Perfil-Plac" />
          </figure>
        </div>
        <div className="container-img">
          <figure>
            <img src={imagen4} alt="Perfil-Plac" />
          </figure>
        </div>
      </div>
      <p className="servicios-description">
        Tus proyectos se vuelven realidad con nuestros servicios expertos en
        colocación de durlock. ¡Confía en nosotros para transformar tus
        espacios!
      </p>
    </section>
  );
};

export default Servicios;
