import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Grid from '../components/Grid/Grid';
import ProductCard from '../components/ProductCard/ProductCard';
import Skeleton from '../components/Skeleton/Skeleton';
import EmptyState from '../components/EmptyState/EmptyState';
import { useProducts } from '../logic/useProducts';
import { CATEGORIES, getCategoryLabel } from '../data/products';
import './Catalog.css';

/**
 * Catalog/listing page. Category comes from the route (/catalogo/:category)
 * so each category has its own shareable URL; "Todo" is the route with no
 * category param.
 */
export default function Catalog() {
  const { category } = useParams();
  const { products, isLoading } = useProducts(category);

  const title = category ? getCategoryLabel(category) : 'Todo el catálogo';

  return (
    <>
      <Header />
      <main className="container ac-catalog">
        <div className="ac-catalog__header">
          <h1>{title}</h1>
          <p className="ac-catalog__count">
            {isLoading ? ' ' : `${products.length} ${products.length === 1 ? 'pieza' : 'piezas'}`}
          </p>
        </div>

        <div className="ac-catalog__filters" role="tablist" aria-label="Filtrar por categoría">
          <Link
            to="/catalogo"
            className={!category ? 'is-active' : undefined}
            role="tab"
            aria-selected={!category}
          >
            Todo
          </Link>
          {CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to={`/catalogo/${c.slug}`}
              className={category === c.slug ? 'is-active' : undefined}
              role="tab"
              aria-selected={category === c.slug}
            >
              {c.label}
            </Link>
          ))}
        </div>

        {isLoading ? (
          <Skeleton count={8} />
        ) : products.length === 0 ? (
          <EmptyState
            title="Todavía no hay piezas aquí"
            message="Esta categoría está vacía por ahora. Mira el resto del catálogo mientras tanto."
            actionLabel="Ver todo el catálogo"
            actionTo="/catalogo"
          />
        ) : (
          <Grid minItemWidth="220px">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Grid>
        )}
      </main>
      <Footer />
    </>
  );
}
