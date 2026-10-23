/**
 * Formats a price for display. Kept out of components so currency/locale
 * rules can change (or vary by region) without touching presentation code.
 */
export function formatPrice(amount, currency = 'COP') {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
