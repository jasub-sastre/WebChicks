import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

/**
 * Phase 2: routing between pages. See docs/patterns-log.md for why
 * react-router-dom and this route shape were chosen.
 *
 * HashRouter (not BrowserRouter): GitHub Pages serves static files and
 * doesn't know to redirect a deep link like /catalogo/vestidos back to
 * index.html, so a direct hit or refresh on any page but "/" would 404.
 * HashRouter keeps the route after a "#", which the server never sees,
 * so every URL always resolves to index.html and React Router takes it
 * from there. URLs look like .../#/catalogo/vestidos instead of
 * .../catalogo/vestidos.
 */
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalog />} />
        <Route path="/catalogo/:category" element={<Catalog />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/nuestra-historia" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
