import { ButtonInfo } from "../ButtonInfo/ButtonInfo";

export const Producto = () => {
  return (
    <div className="container productos" id="producto">
      <h1>Productos</h1>
      <div className="productos-content">
        <article className="productos-item__durlock">
          <h2>Durlock de Primera Calidad</h2>
          <p>
            Ofrecemos placas de Durlock de la más alta calidad, conocidas por su
            resistencia y durabilidad. Nuestro Durlock es la base perfecta para
            tus paredes y techos, asegurando un acabado excepcional.
          </p>
          <ButtonInfo />
        </article>
        <article className="productos-item__masilla content">
          <h2>Masilla y Selladores de Alto Rendimiento:</h2>
          <p>
            Nuestra selección de masillas y selladores está diseñada para
            proporcionar una unión fuerte y duradera. Estos productos garantizan
            un acabado impecable y una superficie lista para la pintura.
          </p>
          <ButtonInfo />
        </article>
        <article>
          <h2>Perfiles Precisos y Resistentes</h2>
          <p>
            Los perfiles metálicos son esenciales en la construcción en seco, y
            ofrecemos una variedad de perfiles que se ajustan a tus necesidades.
            Nuestros perfiles son resistentes a la corrosión y se fabrican con
            precisión para garantizar un ajuste perfecto.
          </p>
          <ButtonInfo />
        </article>
        <article>
          <h2>Variedad de Productos</h2>
          <p>
            Además de Durlock, masilla y perfiles, también ofrecemos una amplia
            gama de otros insumos esenciales, como tornillos, cintas y
            herramientas especializadas.
          </p>
          <ButtonInfo />
        </article>
      </div>
    </div>
  );
};
