import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';
import EmptyState from '../components/EmptyState/EmptyState';
import { useProduct } from '../logic/useProduct';
import { formatPrice } from '../logic/formatPrice';
import { assetUrl } from '../logic/assetUrl';
import { getCategoryLabel } from '../data/products';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const { product, isLoading } = useProduct(id);
  const [selectedSize, setSelectedSize] = useState(null);

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="container ac-product-detail">
          <div className="ac-product-detail__image ac-product-detail__image--loading" />
        </main>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <main className="container">
          <EmptyState
            title="No encontramos esta pieza"
            message="El producto que buscas ya no está disponible o el enlace no es correcto."
            actionLabel="Volver al catálogo"
            actionTo="/catalogo"
          />
        </main>
        <Footer />
      </>
    );
  }

  const { name, price, currency, image, imageAlt, isNew, category, sizes, description } = product;

  return (
    <>
      <Header />
      <main className="container ac-product-detail">
        <Link to={`/catalogo/${category}`} className="ac-product-detail__back">
          ← {getCategoryLabel(category)}
        </Link>

        <div className="ac-product-detail__layout">
          <div className="ac-product-detail__image">
            <img src={assetUrl(image)} alt={imageAlt} />
            {isNew && <span className="ac-product-detail__badge">Nuevo</span>}
          </div>

          <div className="ac-product-detail__info">
            <h1>{name}</h1>
            <p className="ac-product-detail__price">{formatPrice(price, currency)}</p>
            <p className="ac-product-detail__description">{description}</p>

            <div className="ac-product-detail__sizes">
              <span className="ac-product-detail__sizes-label">Talla</span>
              <div className="ac-product-detail__sizes-list">
                {sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`ac-product-detail__size${selectedSize === size ? ' is-selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                    aria-pressed={selectedSize === size}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <Button variant="primary">Añadir a la bolsa</Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
