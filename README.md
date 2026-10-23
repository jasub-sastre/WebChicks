# Able Chicks — Phase 1 + Phase 2

Design system, core components, homepage, and now the full page set with
routing and responsive polish, built per `Able_Chicks_Master_Plan.md`.
Phase 1's README content is below, followed by what Phase 2 added.

## Run it

```
npm install
npm run dev
```

## Decisions taken in Phase 1 (from "Open Design Decisions")

These were open in the master plan. I made a reasonable call on each so
Phase 1 could proceed; flag any of these back to the owner if they don't fit.

- **Fonts:** Quicksand (headings/display) + Nunito (body). Both are rounded,
  soft, free Google Fonts that pair quietly — matches "soft/rounded, feminine"
  without tipping into a children's-brand look.
- **Pink palette:** a 5-step cake-pink scale, `--color-pink-50` through
  `--color-pink-700` (see `src/styles/tokens.css`), muted/dusty rather than
  saturated. Soft black is `#2B2420` (warm charcoal, not pure black) to match
  the warm cream background rather than a cold gray.
- **Logo/wordmark:** no logo file exists yet, so Phase 1 uses a text
  wordmark ("Able Chicks" in Quicksand Bold) in the header and footer as a
  placeholder. A real logo can drop in later without restructuring anything.
- **Page list for Phase 2:** not decided here — left for the owner to confirm
  once this homepage direction is reviewed, per the master plan.
- **Product photography style:** out of scope for Phase 1; product cards
  currently render a soft gradient placeholder block instead of real photos.

## What's here

- `src/styles/tokens.css` — color, type, spacing, radius tokens
- `src/components/` — Header, Footer, Button, ProductCard, Grid, HomeHero,
  FeaturedProducts, BrandMessage (one folder each, JSX + CSS)
- `src/pages/Home.jsx` — homepage draft composed from the above
- `src/data/` — mock product data + a service-layer wrapper
- `src/logic/` — non-visual logic (price formatting, data-fetch hook)
- `docs/patterns-log.md` — architectural patterns used and why

## Not in this phase (Phase 1 scope)

Full page set, routing, cart/checkout, stock logic, payments — per the
master plan, these are Phase 2 or later.

---

## Phase 2 — what was added

**Pages:** catalog (`/catalogo`, filterable by category via
`/catalogo/:category`), product detail (`/producto/:id`), brand story
(`/nuestra-historia`), contact (`/contacto`), and a cart page (`/carrito`)
that shows the empty-state pattern — see "Decisions taken in Phase 2" below
for why cart stops there. A `404` page (`NotFound`) covers unmatched routes.

**Routing:** `react-router-dom`, added as the one new dependency. See
`docs/patterns-log.md` → "Phase 2" for the reasoning.

**Responsiveness:** mobile-first throughout; `Header` now collapses into a
hamburger-triggered menu below `768px` (the breakpoint token already used by
`tokens.css`), catalog filters scroll horizontally on narrow viewports, and
the product detail layout stacks on mobile, goes two-column at `900px`.

**Interaction polish:** hover states on product cards/links/buttons
(already present in Phase 1, extended to new pages), a shared `Skeleton`
loading component, a shared `EmptyState` component (catalog with no results,
empty cart, unknown product, 404), and a local-only success state on the
contact form.

**Architecture:** no new layers — extended the existing ones.
`src/data/products.js` gained a `CATEGORIES` list and richer mock fields
(sizes, description); `src/data/productService.js` gained
`getProductsByCategory`, `getProductById`, `getCategories`, still the only
file pages/hooks import product data from. Two new hooks
(`src/logic/useProducts.js`, `src/logic/useProduct.js`) mirror Phase 1's
`useFeaturedProducts` container/presentational split.

### Decisions taken in Phase 2 (flagging per the master plan)

- **Final page list:** used exactly what the brief proposed — catalog,
  product detail, brand story, contact — plus a cart page, since the brief's
  own empty-state example ("carrito vacío") implied one should exist. The
  cart only renders the empty state; no add/remove logic, since
  cart/checkout stays out of scope per the master plan. That's the one page
  beyond the brief's literal list — flagging it here as requested, but not
  holding up delivery on it.
- **Category URLs:** categories live in the URL (`/catalogo/:category`)
  rather than in component state, so filtered views are shareable and
  back/forward navigation works for free.
- **Contact form:** no backend exists yet, so submitting just swaps to a
  local "message received" confirmation state. Wiring a real endpoint later
  is a contained change inside `Contact.jsx`.

## Run it

```
npm install
npm run dev
npm run build   # production build, verified clean
```
