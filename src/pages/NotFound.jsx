import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import EmptyState from '../components/EmptyState/EmptyState';
import './NotFound.css';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="container ac-not-found">
        <EmptyState
          title="Página no encontrada"
          message="El enlace que seguiste no existe o cambió de dirección."
          actionLabel="Volver al inicio"
          actionTo="/"
        />
      </main>
      <Footer />
    </>
  );
}
