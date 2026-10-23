import './EmptyState.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

/**
 * Generic empty-state pattern: icon mark, message, optional action.
 * Reused for "catálogo sin resultados" and "carrito vacío" so every
 * empty moment in the site looks and reads the same way.
 */
export default function EmptyState({ title, message, actionLabel, onAction, actionTo }) {
  return (
    <div className="ac-empty">
      <div className="ac-empty__mark" aria-hidden="true" />
      <h3>{title}</h3>
      <p>{message}</p>
      {actionLabel && actionTo && (
        <Link to={actionTo} className="ac-empty__link">
          <Button variant="secondary">{actionLabel}</Button>
        </Link>
      )}
      {actionLabel && onAction && !actionTo && (
        <Button variant="secondary" onClick={onAction}>{actionLabel}</Button>
      )}
    </div>
  );
}
