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
          content="Académie de football à Kafountine (Casamance) pour jeunes joueurs : entraînements sérieux, cadre sécurisé, préparation et orientation club/camp."
        />
        <link rel="canonical" href="https://kafglobalfoot.com" />
        <meta property="og:title" content="KAF Global Foot – Académie de football à Kafountine" />
        <meta
          property="og:description"
          content="Académie à Kafountine (Casamance). Formation, détection, dossiers joueurs pour clubs à l’étranger et camps."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kafglobalfoot.com" />
        <meta property="og:image" content="https://kafglobalfoot.com/logo-kaf.svg" />
      </Head>

      {/* HEADER */}
      <header className="site-header">
        <div className="site-header-inner">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src="/logo-kaf.svg" alt="Logo KAF Global Foot" className="site-logo" />
            <div className="site-title-block">
              <span className="site-title">KAF Global Foot</span>
              <span className="site-tagline">Académie de football · Casamance</span>
            </div>
          </div>

          <nav className="site-nav">
            <a href="#apropos">À propos</a>
            <a href="#programmes">Programmes</a>
            <a href="#horaires">Horaires</a>
            <a href="#photos">Photos</a>
            <a href="#formulaires">Formulaires</a>
            <a href="#contact" className="site-nav-cta">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="section">
          <div className="container">
            <div className="card" style={{ padding: 22 }}>
              <p style={{ marginBottom: 6, fontWeight: 800, color: "#111827" }}>
                Inscriptions en cours – saison 2025–2026
              </p>
              <h1 style={{ marginTop: 0 }}>
                Académie de football à Kafountine (Casamance)
              </h1>
              <p style={{ maxWidth: 820 }}>
                Formation + détection + constitution de dossier joueur pour faciliter
                les opportunités : <strong>club à l’étranger</strong> ou <strong>camp d’entraînement</strong>.
              </p>

              <div className="form-actions" style={{ marginTop: 12 }}>
                <a className="btn btn-primary" href="/inscription">
                  Je pré-inscris un joueur
                </a>
                <a className="btn btn-secondary" href={waLink} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </div>

              <p style={{ marginTop: 10, marginBottom: 0 }}>
                Contact direct : <strong>{phone}</strong>
              </p>
            </div>

            {/* Quick facts (aéré, lisible) */}
            <div style={{ display: "grid", gap: 14, marginTop: 18, gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
              <div className="card" style={{ padding: 16 }}>
                <h3>Âge</h3>
                <p>14 à 23 ans</p>
              </div>
              <div className="card" style={{ padding: 16 }}>
                <h3>Lieu</h3>
                <p>Kafountine, Casamance</p>
              </div>
              <div className="card" style={{ padding: 16 }}>
                <h3>Rythme</h3>
                <p>6 séances / semaine</p>
              </div>
            </div>
          </div>
        </section>

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

        {/* PHOTOS */}
        <section id="photos" className="section">
          <div className="container">
            <h2>Photos</h2>
            <p>Ambiance, entraînements, matchs.</p>

            <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))" }}>
              {["gallery1.jpg","gallery2.jpg","gallery3.jpg","gallery4.jpg","gallery5.jpg","gallery6.jpg"].map((img) => (
                <div key={img} className="card" style={{ padding: 0, overflow: "hidden" }}>
                  <img src={`/${img}`} alt="KAF Global Foot" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORMULAIRES (UN SEUL ENDROIT) */}
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
              Données : utilisées uniquement pour le dossier joueur. Suppression/modification : contact@kafglobalfoot.com
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
                <a className="btn btn-primary" href="/inscription">Pré-inscription</a>
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
