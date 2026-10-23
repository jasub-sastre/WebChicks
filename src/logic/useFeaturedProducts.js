import { useEffect, useState } from 'react';
import { getFeaturedProducts } from '../data/productService';

/**
 * Encapsulates the async fetch + loading/error state for featured products,
 * so <FeaturedProducts> stays a plain presentational component.
 */
export function useFeaturedProducts(limit = 4) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    getFeaturedProducts(limit).then((data) => {
      if (isMounted) {
        setProducts(data);
        setIsLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [limit]);

  return { products, isLoading };
}
