import { PRODUCTS, CATEGORIES } from './products';

/**
 * Service-layer placeholder. Today it reads the static mock array;
 * later this becomes an API/stock-system call. Components and hooks
 * must only ever import from here, never from products.js directly,
 * so the swap is a one-file change.
 */
export async function getFeaturedProducts(limit = 4) {
  return PRODUCTS.filter((p) => p.isNew).slice(0, limit);
}

export async function getAllProducts() {
  return PRODUCTS;
}

export async function getProductsByCategory(categorySlug) {
  if (!categorySlug) return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === categorySlug);
}

export async function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) ?? null;
}

export async function getCategories() {
  return CATEGORIES;
}
