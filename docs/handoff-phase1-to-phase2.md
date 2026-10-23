# Handoff — Fase 1 → Fase 2

> Resumen de cierre de Fase 1, para que el agente de Fase 2 arranque sin tener
> que reconstruir contexto desde cero. Complementa (no reemplaza) el master
> plan completo, el README.md y docs/patterns-log.md.

## 1. Qué se construyó en Fase 1

- **Sistema de diseño** (`src/styles/tokens.css`): paleta cake pink en 5 tonos,
  negro suave, tipografía Quicksand (headings) + Nunito (body), escalas de
  espaciado y radio.
- **Componentes reutilizables**, uno por carpeta en `src/components/`:
  Header, Footer, Button, ProductCard, Grid, HomeHero, FeaturedProducts,
  BrandMessage.
- **Homepage draft** (`src/pages/Home.jsx`) componiendo los anteriores.
- **Scaffold en capas**: `components/` (presentación), `styles/` (tokens +
  global), `data/` (mock + service layer), `logic/` (hooks y helpers no
  visuales).
- Proyecto Vite + React funcional: `npm install && npm run build` verificado
  sin errores antes de la entrega.

## 2. Estado de la arquitectura

Las 4 capas del master plan están implementadas y deben mantenerse igual en
Fase 2:

| Capa | Carpeta | Regla a respetar |
|---|---|---|
| Presentación | `src/components/`, `src/pages/` | Props in, UI out. Sin lógica de negocio ni fetch directo. |
| Estilos | cada `Componente.css` + `src/styles/` | Siempre vía tokens (`var(--...)`), nunca estilos sueltos o inline. |
| Lógica/dominio | `src/logic/` | Formateo, validación, hooks de datos. Nada de esto vive en componentes. |
| Datos/servicio | `src/data/` | `productService.js` es la única puerta de entrada; los componentes nunca importan `products.js` directamente. |

## 3. Decisiones ya tomadas (no reabrir)

- Tipografía: Quicksand + Nunito.
- Paleta: rosa cake mudo, negro suave `#2B2420`, fondo cream.
- Logo: wordmark de texto como placeholder (no existe logo real aún).
- Fotografía de producto: fuera de alcance de diseño; placeholders de
  gradiente en `ProductCard`.

Detalle completo de cada una en `README.md`.

## 4. Patrones aplicados (ver `patterns-log.md` para el detalle completo)

Layered architecture, data-service/repository pattern, container/
presentational split vía hook (`useFeaturedProducts`), design tokens en CSS,
composición de layout (`Grid`), una carpeta por componente.

## 5. Qué queda explícitamente pendiente para Fase 2

Del master plan, sección "Open Design Decisions", lo que Fase 1 dejó abierto:

- Lista final de páginas (catálogo, detalle de producto, historia, contacto
  — confirmar o ajustar).
- Estilo de fotografía de producto (sigue fuera de alcance de diseño salvo
  que el owner diga lo contrario).

Y del alcance de Fase 2 en sí (sección 3 del master plan): páginas
restantes, navegación/routing real entre ellas, responsividad completa,
pulido de interacción (hover, transiciones, estados vacíos y de carga), y
QA visual contra este sistema de diseño.

## 6. Qué NO tocar / fuera de alcance

Stock/inventario, pagos, logística, backend/admin — quedan para un plan
separado posterior. No son responsabilidad de Fase 2.

## 7. Cómo correr el proyecto

```
npm install
npm run dev     # desarrollo
npm run build   # build de producción (ya verificado sin errores)
```
