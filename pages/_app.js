// pages/_app.js
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      {/* Bouton WhatsApp flottant, visible sur toutes les pages */}
      <a
        href="https://wa.me/221782702457"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
    </>
  );
}
