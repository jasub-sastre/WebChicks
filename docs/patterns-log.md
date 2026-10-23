# Patterns Log

> Cumulative. Each phase appends to this file — never overwrite it.

## Phase 1

**Layered architecture (presentation / styling / domain-logic / data-service)**
- Where: whole `src/` tree (`components/`, `styles/`, `logic/`, `data/`).
- Why: required by the master plan so the stock/inventory system can replace
  mock data later without touching any component.

**Data-service / repository pattern**
- Where: `src/data/productService.js` wraps `src/data/products.js`.
- Why: components and hooks call `getFeaturedProducts()` / `getAllProducts()`,
  never the raw array. Swapping to a real API later is a one-file change.

**Container/presentational split (via custom hook)**
- Where: `src/logic/useFeaturedProducts.js` (container-ish logic) +
  `src/components/FeaturedProducts/FeaturedProducts.jsx` (presentational shell).
- Why: keeps loading/async state out of the component body, so the component
  stays "props/state in, UI out" per the master plan's presentation-layer rule.

**Design-token system (CSS custom properties)**
- Where: `src/styles/tokens.css`, imported by `global.css`, consumed by every
  component stylesheet via `var(--...)`.
- Why: single source of truth for color/type/spacing; lets Phase 2 (and any
  future rebrand) change the look without touching component markup.

**Composition over configuration for layout**
- Where: `src/components/Grid/Grid.jsx` — a generic auto-fill grid primitive
  used by `FeaturedProducts` (and reusable for the catalog page in Phase 2)
  instead of one-off grid CSS per section.
- Why: avoids duplicating responsive grid rules; new product sections compose
  `<Grid>` instead of reinventing breakpoints.

**One folder per component**
- Where: every entry under `src/components/*/`.
- Why: keeps each component's JSX and CSS physically together while the CSS
  itself stays fully separate from markup logic (styling layer requirement).

## Phase 2

**Client-side routing (react-router-dom)**
- Where: `src/App.jsx` (`BrowserRouter`/`Routes`), `Header`/`Footer`/
  `ProductCard`/`HomeHero`/`FeaturedProducts`/`EmptyState` (`Link`/`NavLink`).
- Why: added the one routing dependency the master plan pre-approved, instead
  of hand-rolling route matching. Category and product id live in the URL
  (`/catalogo/:category`, `/producto/:id`) so every page is shareable and
  back/forward works without extra state.

**Route-driven filtering over local UI state**
- Where: `src/pages/Catalog.jsx` reads `:category` from `useParams()` and
  passes it straight into `useProducts(categorySlug)`.
- Why: keeps the "current filter" as a URL fact, not a `useState` the page
  would have to reset/sync — one less state desync bug, and filters are
  linkable.

**Data-fetch hook per page (same shape as Phase 1's `useFeaturedProducts`)**
- Where: `src/logic/useProducts.js` (catalog) and `src/logic/useProduct.js`
  (detail page).
- Why: continues the Phase 1 container/presentational split so `Catalog.jsx`
  and `ProductDetail.jsx` stay "props/state in, UI out" — all async/loading
  state lives in `logic/`, not the page component.

**Service layer extended, not bypassed**
- Where: `src/data/productService.js` gained `getProductsByCategory`,
  `getProductById`, `getCategories`; `src/data/products.js` gained a
  `CATEGORIES` list and richer mock fields (sizes, description). No page or
  hook imports `products.js` directly.
- Why: Phase 1's rule — `productService.js` stays the only door into product
  data, so the later swap to a real stock system only touches this one file.

**Shared `EmptyState` component**
- Where: `src/components/EmptyState/`, used by `Catalog` (no results in a
  category), `Cart` (empty bag), `ProductDetail` (unknown id), `NotFound`.
- Why: master plan calls for empty-state polish in more than one place
  (catalog, cart); one component keeps the visual language and copy tone
  consistent instead of four one-off blocks.

**Shared `Skeleton` loading component**
- Where: `src/components/Skeleton/`, used by `FeaturedProducts` (replacing
  the Phase 1 text-only loading state) and `Catalog`.
- Why: same reasoning as `EmptyState` — one loading pattern, reused, themed
  entirely through tokens (`var(--color-gray-100)`, `var(--color-pink-50)`).

**Mobile-first navigation (disclosure pattern)**
- Where: `src/components/Header/Header.jsx` + `Header.css` — a hamburger
  toggle below 768px that reveals a stacked `<nav>`; the inline nav from
  Phase 1 reappears at the `768px` token breakpoint already used elsewhere
  in the design system.
- Why: master plan flags mobile as the primary audience device; the full
  inline nav Phase 1 shipped doesn't fit a phone viewport.

**Local-only form state (no submission side effect)**
- Where: `src/pages/Contact.jsx` — `useState` toggles between the form and a
  confirmation message on submit.
- Why: there's no backend yet (explicitly out of scope), but the page still
  needs to demonstrate the success-state pattern the master plan asks for;
  wiring it to a real endpoint is a later-phase, one-function change.
