/**
 * Mock product data.
 *
 * This file stands in for the future stock/inventory system. Nothing
 * outside src/data/ should know whether product data is static JSON or
 * a live API — components always go through productService.js.
 */
export const CATEGORIES = [
  { slug: 'vestidos', label: 'Vestidos' },
  { slug: 'blusas', label: 'Blusas' },
  { slug: 'pantalones', label: 'Pantalones' },
  { slug: 'abrigos', label: 'Abrigos y cárdigans' },
];

export const PRODUCTS = [
  {
    id: 'ac-001',
    name: 'Blusa Marielena',
    price: 89000,
    currency: 'COP',
    image: '/images/products/blusa-marielena.jpg',
    imageAlt: 'Blusa sin mangas rosa envejecido con costuras verticales',
    category: 'blusas',
    isNew: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description:
      'Blusa sin mangas en tela liviana rosa envejecido, con costuras verticales y caída suelta. Pensada para un día largo: no aprieta, no se arruga y combina con todo.',
  },
  {
    id: 'ac-002',
    name: 'Vestido Dulce Tarde',
    price: 142000,
    currency: 'COP',
    image: '/images/products/vestido-dulce-tarde.jpg',
    imageAlt: 'Vestido midi rosa palo con cinturón a la cintura',
    category: 'vestidos',
    isNew: true,
    sizes: ['XS', 'S', 'M', 'L'],
    description:
      'Vestido midi en rosa palo con cinturón ajustable a la cintura y falda con caída suave. De oficina a un café sin cambiarte.',
  },
  {
    id: 'ac-003',
    name: 'Pantalón Camila Recto',
    price: 110000,
    currency: 'COP',
    image: '/images/products/pantalon-camila.jpg',
    imageAlt: 'Pantalón recto gris claro de tiro alto',
    category: 'pantalones',
    isNew: false,
    sizes: ['6', '8', '10', '12', '14'],
    description:
      'Pantalón de tiro alto y corte recto en gris claro. Tela con un poco de stretch para que te muevas con libertad todo el día.',
  },
  {
    id: 'ac-004',
    name: 'Cárdigan Noa',
    price: 128000,
    currency: 'COP',
    image: '/images/products/cardigan-noa.jpg',
    imageAlt: 'Abrigo largo rosa envejecido con cinturón',
    category: 'abrigos',
    isNew: false,
    sizes: ['S', 'M', 'L'],
    description:
      'Abrigo largo en rosa envejecido con cinturón a la cintura. Abrigado sin ser pesado, ideal para las tardes frías de Bogotá.',
  },
  {
    id: 'ac-005',
    name: 'Vestido Tarde de Domingo',
    price: 135000,
    currency: 'COP',
    image: '/images/products/vestido-tarde-domingo.jpg',
    imageAlt: 'Vestido largo tipo slip color rosa envejecido',
    category: 'vestidos',
    isNew: false,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description:
      'Vestido largo tipo slip con tirantes finos y caída suelta. Liviano y fresco, perfecto para los días soleados.',
  },
  {
    id: 'ac-006',
    name: 'Blusa Antonia Lazo',
    price: 95000,
    currency: 'COP',
    image: '/images/products/blusa-antonia-lazo.jpg',
    imageAlt: 'Blusa rosa con lazo al cuello',
    category: 'blusas',
    isNew: true,
    sizes: ['XS', 'S', 'M', 'L'],
    description:
      'Blusa blanca de cuello con lazo, manga larga ajustable. Un clásico que nunca pasa de moda, fácil de combinar.',
  },
  {
    id: 'ac-007',
    name: 'Pantalón Valentina Palazzo',
    price: 118000,
    currency: 'COP',
    image: '/images/products/pantalon-valentina.jpg',
    imageAlt: 'Pantalón de tela fluida gris claro con blusa rosa',
    category: 'pantalones',
    isNew: false,
    sizes: ['6', '8', '10', '12'],
    description:
      'Pantalón de tela fluida en gris claro, tiro alto y pretina ancha. Elegante y cómodo, como si fuera pijama buena.',
  },
  {
    id: 'ac-008',
    name: 'Abrigo Renata',
    price: 198000,
    currency: 'COP',
    image: '/images/products/abrigo-renata.jpg',
    imageAlt: 'Abrigo largo rosa envejecido con cinturón',
    category: 'abrigos',
    isNew: true,
    sizes: ['S', 'M', 'L'],
    description:
      'Abrigo largo en rosa envejecido con cinturón a la cintura y bolsillos amplios. La pieza que salva cualquier look en diciembre.',
  },
];

export function getCategoryLabel(slug) {
  return CATEGORIES.find((c) => c.slug === slug)?.label ?? slug;
}
