// pages/index.tsx
import Head from "next/head";

export default function Home() {
  const phone = "+221 783616382";
  const waLink = "https://wa.me/221783616382";
  const pdfLink = "/downloads/KAF_Global_Foot_Player_Form_Final.pdf";

  return (
    <>
      <Head>
        <title>KAF Global Foot – Académie de football à Kafountine (Casamance)</title>
        <meta
          name="description"
          content="Académie de football à Kafountine (Casamance) : formation, détection, dossier joueur pour clubs à l’étranger et camps."
        />
        <link rel="canonical" href="https://kafglobalfoot.com" />
        <meta property="og:title" content="KAF Global Foot – Académie de football à Kafountine" />
        <meta
          property="og:description"
          content="Formation, détection, dossier joueur (club à l’étranger / camp). Kafountine, Casamance."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kafglobalfoot.com" />
        <meta property="og:image" content="https://kafglobalfoot.com/logo-kaf.svg" />
      </Head>

      {/* ===== TOP BAR + HERO (turquoise pro) ===== */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #0ea5a6 0%, #0b7ea0 55%, #065f73 100%)",
          color: "white",
        }}
      >
        {/* HEADER */}
        <header className="site-header" style={{ background: "transparent", borderBottom: "1px solid rgba(255,255,255,0.18)" }}>
          <div className="site-header-inner" style={{ color: "white" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img
                src="/logo-kaf.svg"
                alt="Logo KAF Global Foot"
                className="site-logo"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              />
              <div className="site-title-block">
                <span className="site-title" style={{ color: "white" }}>
                  KAF Global Foot
                </span>
                <span className="site-tagline" style={{ color: "rgba(255,255,255,0.85)" }}>
                  Académie de football · Casamance
                </span>
              </div>
            </div>

            <nav className="site-nav">
              <a href="#apropos" style={{ color: "rgba(255,255,255,0.90)" }}>À propos</a>
              <a href="#programmes" style={{ color: "rgba(255,255,255,0.90)" }}>Programmes</a>
              <a href="#horaires" style={{ color: "rgba(255,255,255,0.90)" }}>Horaires</a>
              <a href="#formulaires" style={{ color: "rgba(255,255,255,0.90)" }}>Formulaires</a>
              <a
                href="#contact"
                className="site-nav-cta"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  color: "#063b46",
                }}
              >
                Contact
              </a>
            </nav>
          </div>
        </header>

        {/* HERO */}
        <section className="section" style={{ paddingTop: 34, paddingBottom: 30 }}>
          <div className="container">
            <div
              className="card"
              style={{
                padding: 22,
                background: "rgba(255,255,255,0.10)",
                border: "1px solid rgba(255,255,255,0.20)",
                boxShadow: "none",
              }}
            >
              <p style={{ marginBottom: 8, fontWeight: 900, color: "rgba(255,255,255,0.92)" }}>
                Inscriptions en cours – saison 2025–2026
              </p>

              <h1 style={{ marginTop: 0, color: "white" }}>
                Académie de football à Kafountine (Casamance)
              </h1>

              <p style={{ maxWidth: 860, color: "rgba(255,255,255,0.90)" }}>
                Formation + détection + constitution de dossier joueur pour faciliter
                les opportunités : <strong>club à l’étranger</strong> ou <strong>camp d’entraînement</strong>.
              </p>

              <div className="form-actions" style={{ marginTop: 14 }}>
                <a
                  className="btn btn-primary"
                  href="/inscription"
                  style={{
                    background: "white",
                    color: "#063b46",
                    border: "1px solid rgba(255,255,255,0.30)",
                  }}
                >
                  Je pré-inscris un joueur
                </a>

                <a
                  className="btn btn-secondary"
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: "transparent",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.45)",
                  }}
                >
                  WhatsApp
                </a>
              </div>

              <p style={{ marginTop: 12, marginBottom: 0, color: "rgba(255,255,255,0.90)" }}>
                Contact direct : <strong>{phone}</strong>
              </p>
            </div>

            {/* Quick facts */}
            <div
              style={{
                display: "grid",
                gap: 14,
                marginTop: 18,
                gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              }}
            >
              {[
                { title: "Âge", text: "14 à 23 ans" },
                { title: "Lieu", text: "Kafountine, Casamance" },
                { title: "Rythme", text: "6 séances / semaine" },
              ].map((b) => (
                <div
                  key={b.title}
                  className="card"
                  style={{
                    padding: 16,
                    background: "rgba(255,255,255,0.10)",
                    border: "1px solid rgba(255,255,255,0.20)",
                    boxShadow: "none",
                  }}
                >
                  <h3 style={{ color: "white" }}>{b.title}</h3>
                  <p style={{ margin: 0, color: "rgba(255,255,255,0.90)" }}>{b.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ===== REST OF PAGE (white / airy) ===== */}
      <main>
        {/* À PROPOS */}
        <section id="apropos" className="section">
          <div className="container">
            <h2>À propos</h2>
            <p style={{ maxWidth: 900 }}>
              KAF Global Foot accompagne les jeunes joueurs dans leur progression sportive et humaine :
              discipline, travail, valeurs, et préparation aux opportunités.
            </p>
          </div>
        </section>

        {/* PROGRAMMES */}
        <section id="programmes" className="section">
          <div className="container">
            <h2>Nos programmes</h2>

            <div className="card">
              <h3>Formation</h3>
              <p>Technique, coordination, jeu, oppositions – du lundi au samedi.</p>
            </div>

            <div className="card">
              <h3>Performance & détection</h3>
              <p>Objectif : intensité + préparation + accompagnement pour essais/détections.</p>
            </div>

            <div className="card">
              <h3>Catégories</h3>
              <p>U17 (14–16) · U20 (17–20) · U23 (21–23)</p>
            </div>
          </div>
        </section>

        {/* HORAIRES */}
        <section id="horaires" className="section">
          <div className="container">
            <h2>Horaires & lieu</h2>
            <div className="card">
              <h3>Horaires</h3>
              <p>Lun–Ven : 16h00–18h00 · Sam : 9h30–11h30</p>
            </div>
            <div className="card">
              <h3>Terrain</h3>
              <p>Terrain du Lycée de Kafountine (Crewane, Casamance).</p>
            </div>
          </div>
        </section>

        {/* FORMULAIRES */}
        <section id="formulaires" className="section">
          <div className="container">
            <h2>Formulaire joueurs (déjà inscrits)</h2>
            <p style={{ maxWidth: 900 }}>
              Pour constituer un dossier complet (club à l’étranger / camp d’entraînement).
              Préparez une photo d’identité, une pièce d’identité (si dispo) et un lien vidéo.
            </p>

            <div className="form-actions">
              <a className="btn btn-primary" href={pdfLink} target="_blank" rel="noopener noreferrer">
                Télécharger le PDF
              </a>
              <a className="btn btn-secondary" href={waLink} target="_blank" rel="noopener noreferrer">
                Envoyer sur WhatsApp
              </a>
            </div>

            <p style={{ marginTop: 12 }}>
              Données utilisées uniquement pour le dossier joueur. Contact : contact@kafglobalfoot.com
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="container">
            <h2>Contact</h2>
            <div className="card">
              <p style={{ marginBottom: 6 }}>
                WhatsApp / Téléphone : <strong>{phone}</strong>
              </p>
              <p style={{ marginBottom: 12 }}>Email : contact@kafglobalfoot.com</p>
              <div className="form-actions">
                <a className="btn btn-primary" href="/inscription">
                  Pré-inscription
                </a>
                <a className="btn btn-secondary" href={waLink} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <p>© 2025 KAF Global Foot. Tous droits réservés.</p>
          <p>Site développé avec Next.js &amp; déployé sur Vercel.</p>
        </footer>

        {/* WhatsApp floating */}
        <a
          href={waLink}
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discuter sur WhatsApp"
        >
          WhatsApp
        </a>
      </main>
    </>
  );
}
