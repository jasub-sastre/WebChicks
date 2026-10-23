import './FeaturedProducts.css';
import { Link } from 'react-router-dom';
import Grid from '../Grid/Grid';
import ProductCard from '../ProductCard/ProductCard';
import Skeleton from '../Skeleton/Skeleton';
import { useFeaturedProducts } from '../../logic/useFeaturedProducts';

/**
 * Presentational shell + the useFeaturedProducts hook for data —
 * container/presentational split so this component never talks to
 * data/productService.js directly. See docs/patterns-log.md.
 */
export default function FeaturedProducts() {
  const { products, isLoading } = useFeaturedProducts(4);

  return (
    <section className="ac-featured container">
      <div className="ac-featured__header">
        <h2>Lo nuevo</h2>
        <Link to="/catalogo" className="ac-featured__link">Ver todo</Link>
      </div>
      {isLoading ? (
        <Skeleton count={4} />
      ) : (
        <Grid minItemWidth="220px">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      )}
    </section>
  );
}
