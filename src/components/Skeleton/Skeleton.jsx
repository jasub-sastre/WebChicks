import './Skeleton.css';

/**
 * Generic loading placeholder. `count` renders a grid of card-shaped
 * skeletons (catalog, featured products); omit it for a single bar.
 */
export default function Skeleton({ count }) {
  if (!count) {
    return <div className="ac-skeleton ac-skeleton--bar" />;
  }
  return (
    <div className="ac-skeleton__grid">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="ac-skeleton ac-skeleton--card" />
      ))}
    </div>
  );
}
