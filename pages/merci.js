// pages/merci.js
import Head from "next/head";

export default function Merci() {
  return (
    <>
      <Head>
        <title>Merci - KAF Global Foot</title>
        <meta
          name="description"
          content="Merci pour votre pré-inscription à KAF Global Foot."
        />
      </Head>

      <div className="page">
        {/* NAVBAR */}
        <header className="navbar">
          <div className="container nav-content">
            <div className="logo">
              <img src="/logo-kaf.svg" alt="KAF Global Foot" />
              <span className="logo-text">KAF Global Foot</span>
            </div>
            <nav className="nav-links">
              <a href="/">Accueil</a>
              <a href="/#programmes">Programmes</a>
              <a href="/#horaires">Horaires</a>
              <a href="/#contact">Contact</a>
            </nav>
          </div>
        </header>

        <main>
          <section className="section section-alt">
            <div className="container">
              <h1 className="section-title">Merci pour votre pré-inscription</h1>
              <p className="section-text">
                Votre demande a bien été envoyée à l&apos;académie KAF Global
                Foot. ✅
              </p>
              <p className="section-text" style={{ marginTop: "1rem" }}>
                Nous allons analyser votre demande et vous recontacter par
                téléphone ou par email pour :
              </p>
              <ul className="list" style={{ marginTop: "0.75rem" }}>
                <li>confirmer la catégorie d&apos;âge du joueur ;</li>
                <li>valider les horaires d&apos;entraînement ;</li>
                <li>vous indiquer les documents à fournir ;</li>
                <li>vous expliquer la suite du processus d&apos;inscription.</li>
              </ul>

              <p className="section-text small" style={{ marginTop: "1.5rem" }}>
                Si vous avez une question urgente, vous pouvez nous écrire à{" "}
                <a href="mailto:contact@kafglobalfoot.com">
                  contact@kafglobalfoot.com
                </a>{" "}
                ou nous joindre directement par WhatsApp au{" "}
                <strong>+221 78 270 24 57</strong>.
              </p>

              <div style={{ marginTop: "2rem" }}>
                <a href="/" className="btn">
                  ⬅️ Retour à l&apos;accueil
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container footer-content">
            <p>
              © {new Date().getFullYear()} KAF Global Foot. Tous droits
              réservés.
            </p>
            <p className="footer-meta">
              Site développé avec Next.js &amp; déployé sur Vercel.
            </p>
          </div>
        </footer>

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
      </div>
    </>
  );
}
