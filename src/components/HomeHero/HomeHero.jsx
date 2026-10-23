import { Link } from 'react-router-dom';
import './HomeHero.css';
import Button from '../Button/Button';
import { assetUrl } from '../../logic/assetUrl';

export default function HomeHero() {
  return (
    <section className="ac-hero">
      <div className="container ac-hero__inner">
        <div className="ac-hero__text">
          <h1>Ropa para mujeres capaces de todo.</h1>
          <p>
            Piezas pensadas para tu día a día en Bogotá: cómodas, bonitas y
            hechas para que te sientas tú misma. Esta es tu tienda, chica capaz.
          </p>
          <Link to="/catalogo" className="ac-hero__cta-link">
            <Button variant="primary">Ver la colección</Button>
          </Link>
        </div>
        <div className="ac-hero__image">
          <img src={assetUrl('/images/hero/home-hero.jpg')} alt="Mujer vistiendo una blusa Able Chicks" />
        </div>
      </div>
    </section>
  );
}
