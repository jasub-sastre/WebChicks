import { useEffect, useState } from 'react';
import { getProductById } from '../data/productService';

/**
 * Loads a single product by id for the product detail page.
 */
export function useProduct(id) {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    getProductById(id).then((data) => {
      if (isMounted) {
        setProduct(data);
        setIsLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [id]);

  return { product, isLoading };
}
