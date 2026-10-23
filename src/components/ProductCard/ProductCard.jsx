import './ProductCard.css';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../logic/formatPrice';
import { assetUrl } from '../../logic/assetUrl';

/**
 * Purely presentational: receives a product object, renders it.
 * No data fetching, no business logic — that lives in logic/ and data/.
 */
export default function ProductCard({ product }) {
  const { id, name, price, currency, image, imageAlt, isNew } = product;

  return (
    <article className="ac-product-card">
      <Link to={`/producto/${id}`} className="ac-product-card__link">
        <div className="ac-product-card__image">
          {image ? (
            <img src={assetUrl(image)} alt={imageAlt} loading="lazy" />
          ) : (
            <div className="ac-product-card__image-fallback" role="img" aria-label={imageAlt} />
          )}
          {isNew && <span className="ac-product-card__badge">Nuevo</span>}
        </div>
        <h3 className="ac-product-card__name">{name}</h3>
        <p className="ac-product-card__price">{formatPrice(price, currency)}</p>
      </Link>
    </article>
  );
}
