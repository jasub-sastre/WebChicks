import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { assetUrl } from '../logic/assetUrl';
import './About.css';

/**
 * Brand story page. Text-forward by design — reuses the gradient-placeholder
 * pattern from HomeHero/ProductCard rather than inventing a new one, since
 * product/brand photography is out of design scope per the master plan.
 */
export default function About() {
  return (
    <>
      <Header />
      <main>
        <section className="ac-about-hero">
          <div className="container ac-about-hero__inner">
            <div className="ac-about-hero__image">
              <img src={assetUrl('/images/hero/about-hero.jpg')} alt="Mujer vistiendo una blusa Able Chicks" />
            </div>
            <div>
              <h1>Nuestra historia</h1>
              <p>
                Able Chicks empezó como un closet compartido entre amigas en
                Bogotá, antes de tener tienda, antes de tener nombre. Hoy
                seguimos con la misma idea: ropa pensada para mujeres que
                hacen de todo y no tienen tiempo que perder vistiéndose.
              </p>
            </div>
          </div>
        </section>

        <section className="container ac-about-body">
          <div className="ac-about-body__block">
            <h2>Por qué existimos</h2>
            <p>
              Creemos que vestirse bien no debería tomar media hora ni costar
              un sueldo. Cada pieza de Able Chicks está pensada para resolver
              un día real: la reunión, el almuerzo con mamá, la salida de
              último minuto. Cómoda primero, bonita siempre.
            </p>
          </div>
          <div className="ac-about-body__block">
            <h2>Cómo trabajamos</h2>
            <p>
              Escogemos telas que se sientan bien puestas todo el día, y
              cortes que les quedan bien a cuerpos reales, no solo a
              maniquíes. Renovamos la colección seguido, en lotes pequeños,
              para que lo que compras siga sintiéndose especial.
            </p>
          </div>
          <div className="ac-about-body__block">
            <h2>Para quién hacemos esto</h2>
            <p>
              Para la mujer capaz de todo: la que trabaja, estudia, cría,
              emprende, o las cuatro a la vez. Able Chicks es su espacio para
              sentirse ella misma, sin pretensiones.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
