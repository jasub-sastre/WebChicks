import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import EmptyState from '../components/EmptyState/EmptyState';
import './Cart.css';

/**
 * Cart page. Real cart state/checkout is explicitly out of scope for
 * Phase 2 (master plan section 3), so this renders the empty-state pattern
 * only — the structural placeholder the next phase will wire up to actual
 * cart logic.
 */
export default function Cart() {
  return (
    <>
      <Header />
      <main className="container ac-cart">
        <h1>Tu bolsa</h1>
        <EmptyState
          title="Tu bolsa está vacía"
          message="Todavía no has añadido ninguna pieza. Explora el catálogo y encuentra algo para ti."
          actionLabel="Ir al catálogo"
          actionTo="/catalogo"
        />
      </main>
      <Footer />
    </>
  );
}
