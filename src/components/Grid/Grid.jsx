import './Grid.css';

/**
 * Minimal responsive grid primitive used to lay out cards across the site.
 * `minItemWidth` drives an auto-fill grid so column count adapts without
 * breakpoint-specific logic in every page.
 */
export default function Grid({ children, minItemWidth = '240px', gap = 'var(--space-6)' }) {
  return (
    <div className="ac-grid" style={{ '--ac-grid-min': minItemWidth, '--ac-grid-gap': gap }}>
      {children}
    </div>
  );
}
