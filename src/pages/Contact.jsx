import { useState } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';
import './Contact.css';

/**
 * Contact page. The form only manages its own local UI state (submitted
 * confirmation) — there's no backend to send to yet, matching the master
 * plan's scope (no backend/admin tooling in Phase 2).
 */
export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <>
      <Header />
      <main className="container ac-contact">
        <h1>Contacto</h1>
        <p className="ac-contact__intro">
          ¿Preguntas sobre una pieza, tu pedido o una talla? Escríbenos y te
          respondemos pronto.
        </p>

        <div className="ac-contact__layout">
          {isSubmitted ? (
            <div className="ac-contact__success">
              <h2>Listo, recibimos tu mensaje</h2>
              <p>Te respondemos en las próximas horas. Gracias por escribirnos.</p>
              <Button variant="secondary" onClick={() => setIsSubmitted(false)}>
                Enviar otro mensaje
              </Button>
            </div>
          ) : (
            <form className="ac-contact__form" onSubmit={handleSubmit}>
              <label htmlFor="ac-contact-name">
                Nombre
                <input id="ac-contact-name" name="name" type="text" required />
              </label>
              <label htmlFor="ac-contact-email">
                Correo
                <input id="ac-contact-email" name="email" type="email" required />
              </label>
              <label htmlFor="ac-contact-message">
                Mensaje
                <textarea id="ac-contact-message" name="message" rows={5} required />
              </label>
              <Button type="submit" variant="primary">Enviar mensaje</Button>
            </form>
          )}

          <div className="ac-contact__info">
            <h2>Otras formas de escribirnos</h2>
            <p>
              <strong>WhatsApp:</strong> respondemos más rápido por acá para
              dudas de pedidos y tallas.
            </p>
            <p>
              <strong>Instagram:</strong> @ablechicks — mira las piezas nuevas
              antes de que lleguen al catálogo.
            </p>
            <p>
              <strong>Ciudad:</strong> Bogotá, Colombia. Envíos a todo el país.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
