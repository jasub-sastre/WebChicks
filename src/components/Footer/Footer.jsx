import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="ac-footer">
      <div className="container ac-footer__inner">
        <div>
          <p className="ac-footer__wordmark">Able Chicks</p>
          <p className="ac-footer__tagline">Ropa para mujeres capaces de todo.</p>
        </div>
        <div className="ac-footer__col">
          <h4>Tienda</h4>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/nuestra-historia">Nuestra historia</Link>
          <Link to="/contacto">Contacto</Link>
        </div>
        <div className="ac-footer__col">
          <h4>Síguenos</h4>
          <a href="#instagram">Instagram</a>
          <a href="#whatsapp">WhatsApp</a>
        </div>
      </div>
      <div className="container ac-footer__legal">
        <span>© {new Date().getFullYear()} Able Chicks. Bogotá, Colombia.</span>
      </div>
    </footer>
  );
}
