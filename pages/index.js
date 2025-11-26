// pages/index.js
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const siteUrl = "https://kafglobalfoot.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "KAF Global Foot",
    description:
      "Académie de football à Kafountine (Casamance, Sénégal) pour les jeunes de 14 à 23 ans : entraînements réguliers, encadrement sérieux et cadre sécurisé.",
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kafountine",
      addressRegion: "Ziguinchor",
      addressCountry: "SN",
    },
    telephone: "+221782702457",
    sport: "Football",
  };

  return (
    <>
      <Head>
        <title>
          Académie de football à Kafountine | KAF Global Foot – Formation des
          jeunes
        </title>
        <meta
          name="description"
          content="KAF Global Foot est une académie de football à Kafountine (Casamance, Sénégal) dédiée à la formation des jeunes de 14 à 23 ans : entraînements réguliers, encadrement sérieux et cadre sécurisé."
        />
        <link rel="canonical" href={siteUrl} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Académie de football à Kafountine | KAF Global Foot"
        />
        <meta
          property="og:description"
          content="Académie de football à Kafountine pour les jeunes de 14 à 23 ans : entraînements du lundi au samedi, encadrement sérieux et valeurs fortes."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="KAF Global Foot" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:image" content={`${siteUrl}/hero.jpg`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="KAF Global Foot – Académie de football à Kafountine"
        />
        <meta
          name="twitter:description"
          content="Académie pour jeunes joueurs de 14 à 23 ans en Casamance : travail technique, tactique, physique et mental."
        />
        <meta name="twitter:image" content={`${siteUrl}/hero.jpg`} />

        {/* Données structurées JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
              <a href="#apropos">À propos</a>
              <a href="#programmes">Programmes</a>
              <a href="#horaires">Horaires</a>
              <a href="#galerie">Photos</a>
              <a href="#contact">Contact</a>
              <Link href="/inscription">Inscription</Link>
            </nav>
          </div>
        </header>

        <main>
          {/* HERO */}
          <section className="hero section">
            <div className="container hero-content">
              <div className="hero-text">
                <h1 className="hero-title">
                  KAF Global Foot – académie de football à Kafountine pour les
                  jeunes
                </h1>
                <p className="hero-subtitle">
                  Académie de football à Kafountine (Casamance), dédiée à la
                  formation des jeunes dans un cadre sérieux, sécurisé et
                  convivial.
                </p>
                <div className="hero-actions">
                  <Link href="/inscription" className="btn">
                    Je pré-inscris un joueur
                  </Link>
                  <a href="#programmes" className="btn btn-outline">
                    Voir les programmes
                  </a>
                </div>
                <p className="hero-badge">
                  Joueurs de 14 à 23 ans · Tous niveaux
                </p>
              </div>
              <div className="hero-image">
                <img src="/hero.jpg" alt="Entraînement KAF Global Foot" />
              </div>
            </div>
          </section>

          {/* À PROPOS */}
          <section id="apropos" className="section section-alt">
            <div className="container">
              <h2 className="section-title">À propos de KAF Global Foot</h2>

              <p className="section-text">
                KAF Global Foot est une académie de football basée à Kafountine,
                en Casamance (Sénégal), qui a pour mission d’accompagner les
                jeunes joueurs de 14 à 23 ans dans leur progression sportive et
                humaine.
              </p>

              <p className="section-text" style={{ marginTop: "1rem" }}>
                Notre projet repose sur trois piliers : un encadrement sérieux,
                un cadre sécurisé et une vision éducative du football. Au-delà
                de la performance, nous cherchons à transmettre des valeurs
                fortes : respect, discipline, esprit d’équipe, goût de l’effort
                et sens des responsabilités.
              </p>

              {/* Bloc anglais */}
              <h3
                className="section-title"
                style={{ fontSize: "1.2rem", marginTop: "2rem" }}
              >
                About KAF Global Foot (English)
              </h3>

              <p className="section-text">
                KAF Global Foot is a football academy based in Kafountine, in
                the Casamance region of Senegal. Its mission is to support young
                players aged 14 to 23 in their sporting and personal
                development.
              </p>

              <p className="section-text" style={{ marginTop: "1rem" }}>
                The project is built on three main pillars: serious coaching, a
                safe environment, and an educational vision of football. Beyond
                performance, we aim to transmit strong values such as respect,
                discipline, team spirit, work ethic, and a sense of
                responsibility.
              </p>

              <p className="section-text" style={{ marginTop: "1rem" }}>
                Training sessions take place from Monday to Saturday on the
                pitch of the Lycée de Kafountine, with a program adapted to each
                player’s age and level. KAF Global Foot welcomes motivated
                players, whether they aspire to a higher level or simply want to
                train in a structured and supportive environment.
              </p>

              <div className="grid-3" style={{ marginTop: "2rem" }}>
                <div className="card">
                  <h3>Encadrement</h3>
                  <p>
                    Coachs passionnés et expérimentés, avec une approche adaptée
                    à l’âge et au niveau de chaque joueur. Exigence sur
                    l’attitude, mais toujours dans la bienveillance.
                  </p>
                </div>
                <div className="card">
                  <h3>Travail au quotidien</h3>
                  <p>
                    Entraînements du lundi au samedi sur le terrain du Lycée de
                    Kafountine : développement technique, compréhension
                    tactique, coordination, préparation physique et mentale.
                  </p>
                </div>
                <div className="card">
                  <h3>Vision</h3>
                  <p>
                    Offrir une base solide aux jeunes, qu’ils visent un
                    parcours de haut niveau ou qu’ils souhaitent simplement
                    pratiquer dans un cadre structuré. KAF Global Foot veut
                    aussi être un acteur de la vie sportive de la Casamance.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* PROGRAMMES */}
          <section id="programmes" className="section">
            <div className="container">
              <h2 className="section-title">Nos programmes</h2>

              <div className="grid-2">
                <div className="card">
                  <h3>Groupe formation</h3>
                  <p>Pour les joueurs qui veulent progresser sérieusement.</p>
                  <ul className="list">
                    <li>Entraînements réguliers du lundi au samedi</li>
                    <li>Travail technique, coordination, motricité</li>
                    <li>Jeux, oppositions et mises en situation</li>
                  </ul>
                </div>
                <div className="card">
                  <h3>Groupe performance</h3>
                  <p>Pour les joueurs les plus motivés.</p>
                  <ul className="list">
                    <li>Travail spécifique par poste</li>
                    <li>Préparation physique et mentale</li>
                    <li>Accompagnement pour détections et essais</li>
                  </ul>
                </div>
              </div>

              <div className="categories">
                <h3>Catégories KAF Global Foot</h3>
                <div className="chip-row">
                  <span className="chip">Cadets – U17 (14–16 ans)</span>
                  <span className="chip">Juniors – U20 (17–20 ans)</span>
                  <span className="chip">Espoirs – U23 (21–23 ans)</span>
                </div>
                <p className="section-text small">
                  Joueurs de 14 à 23 ans, tous niveaux. L&apos;affectation dans
                  une catégorie se fait en fonction de l&apos;âge et du niveau.
                </p>
              </div>
            </div>
          </section>

          {/* HORAIRES & LIEU */}
          <section id="horaires" className="section section-alt">
            <div className="container">
              <h2 className="section-title">
                Horaires & lieu d&apos;entraînement
              </h2>

              <div className="grid-2">
                <div className="card">
                  <h3>Horaires KAF Global Foot</h3>
                  <ul className="list">
                    <li>Du lundi au vendredi : 16h00 – 18h00</li>
                    <li>Samedi : 9h30 – 11h30</li>
                  </ul>
                  <p className="section-text small">
                    Entraînements tous les jours sauf le dimanche. Les horaires
                    peuvent légèrement varier en fonction du planning et des
                    compétitions. En cas de changement, les joueurs et les
                    parents sont informés à l’avance.
                  </p>
                </div>

                <div className="card">
                  <h3>Terrain d&apos;entraînement</h3>
                  <p>
                    <strong>Terrain du Lycée de Kafountine</strong>
                    <br />
                    Crewane, Kafountine, département de Bignona, région de
                    Ziguinchor (Casamance).
                  </p>
                  <p className="section-text small">
                    Une carte Google Maps sera bientôt disponible ici pour vous
                    aider à trouver facilement l’emplacement du terrain.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* GALERIE PHOTOS */}
          <section id="galerie" className="section section-alt">
            <div className="container">
              <h2 className="section-title">Photos de KAF Global Foot</h2>

              <div className="gallery-grid">
                <figure className="gallery-item">
                  <img
                    src="/gallery1.jpg"
                    alt="Terrain de football à Kafountine"
                  />
                </figure>
                <figure className="gallery-item">
                  <img
                    src="/gallery2.jpg"
                    alt="Jeunes joueurs de Kafountine au football"
                  />
                </figure>
                <figure className="gallery-item">
                  <img
                    src="/gallery3.jpg"
                    alt="Travail technique à l'entraînement"
                  />
                </figure>
                <figure className="gallery-item">
                  <img
                    src="/gallery4.jpg"
                    alt="Vue d'ensemble de l'académie KAF Global Foot"
                  />
                </figure>
                <figure className="gallery-item">
                  <img
                    src="/gallery5.jpg"
                    alt="Match d'entraînement à Kafountine"
                  />
                </figure>
                <figure className="gallery-item">
                  <img
                    src="/gallery6.jpg"
                    alt="Ambiance au sein de KAF Global Foot"
                  />
                </figure>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="section">
            <div className="container">
              <h2 className="section-title">Contact KAF Global Foot</h2>
              <p className="section-text">
                Pour toute question (pré-inscriptions, horaires, tarifs,
                partenariats), contactez-nous :
              </p>
              <ul className="list">
                <li>
                  <strong>Téléphone / WhatsApp :</strong> +221 78 270 24 57
                </li>
                <li>
                  <strong>Email :</strong>{" "}
                  <a href="mailto:contact@kafglobalfoot.com">
                    contact@kafglobalfoot.com
                  </a>
                </li>
              </ul>

              <div style={{ marginTop: "1.5rem" }}>
                <Link href="/inscription" className="btn">
                  Aller au formulaire de pré-inscription
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
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

        {/* BOUTON WHATSAPP FLOTTANT */}
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
