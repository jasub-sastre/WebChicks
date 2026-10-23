import { useEffect, useState } from 'react';
import { getAllProducts, getProductsByCategory } from '../data/productService';

/**
 * Loads the catalog, optionally filtered by category. Same
 * container/presentational split as useFeaturedProducts: async state
 * stays here, <Catalog> only renders what it's given.
 */
export function useProducts(categorySlug) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    const fetcher = categorySlug ? getProductsByCategory(categorySlug) : getAllProducts();
    fetcher.then((data) => {
      if (isMounted) {
        setProducts(data);
        setIsLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [categorySlug]);

  return { products, isLoading };
}
