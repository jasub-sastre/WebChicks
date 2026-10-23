import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const NAV_LINKS = [
  { label: 'Catálogo', to: '/catalogo' },
  { label: 'Vestidos', to: '/catalogo/vestidos' },
  { label: 'Blusas', to: '/catalogo/blusas' },
  { label: 'Nuestra historia', to: '/nuestra-historia' },
  { label: 'Contacto', to: '/contacto' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="ac-header">
      <div className="container ac-header__inner">
        <Link to="/" className="ac-header__wordmark" onClick={() => setIsMenuOpen(false)}>
          Able Chicks
        </Link>

        <nav className="ac-header__nav" aria-label="Navegación principal">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="ac-header__actions">
          <Link to="/carrito" aria-label="Carrito" className="ac-header__cart">
            Carrito
          </Link>
          <button
            type="button"
            className="ac-header__menu-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="ac-mobile-nav"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav id="ac-mobile-nav" className="ac-header__mobile-nav" aria-label="Navegación móvil">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => (isActive ? 'is-active' : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
