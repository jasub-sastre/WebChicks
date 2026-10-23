import './Button.css';

/**
 * Purely presentational. variant: 'primary' | 'secondary' | 'ghost'
 */
export default function Button({ children, variant = 'primary', onClick, type = 'button' }) {
  return (
    <button type={type} className={`ac-button ac-button--${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}
