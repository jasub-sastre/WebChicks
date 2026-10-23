/**
 * Resolves a public/ asset path against Vite's configured base URL, so
 * images keep working whether the site is served from the domain root
 * or from a subpath (GitHub Pages project sites).
 */
export function assetUrl(path) {
  const base = import.meta.env.BASE_URL; // e.g. "/" or "/able-chicks/"
  return base.replace(/\/$/, '') + path;
}
