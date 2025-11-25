// pages/_app.js
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      {/* Bouton WhatsApp flottant */}
      <a
        href="https://wa.me/221782702457"
        target="_blank"
        rel="noreferrer"
        style={{
          position: "fixed",
          right: "1.2rem",
          bottom: "1.2rem",
          zIndex: 9999,
          padding: "0.75rem 1.1rem",
          borderRadius: "9999px",
          background: "#16a34a",
          color: "#ffffff",
          fontWeight: 600,
          fontSize: "0.95rem",
          textDecoration: "none",
          boxShadow: "0 12px 30px rgba(22, 163, 74, 0.6)",
        }}
      >
        WhatsApp
      </a>
    </>
  );
}
