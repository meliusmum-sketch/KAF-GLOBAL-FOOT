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
    telephone: "+221 78 270 24 57",
    sport: "Football",
  };

  return (
    <>
      <Head>
        <title>KAF Global Foot – académie de football à Kafountine</title>
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
        {/* HEADER */}
        <header className="site-header">
          <div className="site-header-inner">
            <div className="site-logo">KAF Global Foot</div>
            <nav className="site-nav">
              <a href="#apropos">À propos</a>
              <a href="#programmes">Programmes</a>
              <a href="#horaires">Horaires</a>
              <a href="#photos">Photos</a>
              <a href="#contact">Contact</a>
            </nav>
            <div className="site-actions">
              <Link href="/inscription" className="btn-inscription">
                Inscription
              </Link>
            </div>
          </div>
        </header>

        {/* CONTENU PRINCIPAL */}
        <main className="site-main">
          {/* HERO */}
          <section className="hero" aria-labelledby="hero-title">
            <h1 id="hero-title">
              KAF Global Foot – académie de football à Kafountine pour les
              jeunes
            </h1>
            <p className="hero-intro">
              Académie de football à Kafountine (Casamance), dédiée à la
              formation des jeunes dans un cadre sérieux, sécurisé et convivial.
            </p>

            <div className="hero-actions">
              <Link href="/inscription" className="btn-principal">
                Je pré-inscris un joueur
              </Link>
              <a href="#programmes" className="btn-secondaire">
                Voir les programmes
              </a>
            </div>

            <p className="hero-meta">
              Joueurs de 14 à 23 ans · Tous niveaux
            </p>
          </section>

          {/* À PROPOS */}
          <section id="apropos" className="section">
            <h2>À propos de KAF Global Foot</h2>
            <p>
              KAF Global Foot est une académie de football basée à Kafountine,
              en Casamance (Sénégal), qui a pour mission d’accompagner les
              jeunes joueurs de 14 à 23 ans dans leur progression sportive et
              humaine.
            </p>
            <p>
              Notre projet repose sur trois piliers : un encadrement sérieux,
              un cadre sécurisé et une vision éducative du football. Au-delà de
              la performance, nous cherchons à transmettre des valeurs fortes :
              respect, discipline, esprit d’équipe, goût de l’effort et sens des
              responsabilités.
            </p>

            <h3>About KAF Global Foot (English)</h3>
            <p>
              KAF Global Foot is a football academy based in Kafountine, in the
              Casamance region of Senegal. Its mission is to support young
              players aged 14 to 23 in their sporting and personal development.
            </p>
            <p>
              The project is built on three main pillars: serious coaching, a
              safe environment, and an educational vision of football. Beyond
              performance, we aim to transmit strong values such as respect,
              discipline, team spirit, work ethic, and a sense of
              responsibility.
            </p>
            <p>
              Training sessions take place from Monday to Saturday on the pitch
              of the Lycée de Kafountine, with a program adapted to each
              player’s age and level. KAF Global Foot welcomes motivated
              players, whether they aspire to a higher level or simply want to
              train in a structured and supportive environment.
            </p>

            <div className="apropos-grid">
              <div>
                <h3>Encadrement</h3>
                <p>
                  Coachs passionnés et expérimentés, avec une approche adaptée à
                  l’âge et au niveau de chaque joueur. Exigence sur l’attitude,
                  mais toujours dans la bienveillance.
                </p>
              </div>
              <div>
                <h3>Travail au quotidien</h3>
                <p>
                  Entraînements du lundi au samedi sur le terrain du Lycée de
                  Kafountine : développement technique, compréhension tactique,
                  coordination, préparation physique et mentale.
                </p>
              </div>
              <div>
                <h3>Vision</h3>
                <p>
                  Offrir une base solide aux jeunes, qu’ils visent un parcours
                  de haut niveau ou qu’ils souhaitent simplement pratiquer dans
                  un cadre structuré. KAF Global Foot veut aussi être un acteur
                  de la vie sportive de la Casamance.
                </p>
              </div>
            </div>
          </section>

          {/* PROGRAMMES */}
          <section id="programmes" className="section">
            <h2>Nos programmes</h2>

            <div className="programmes-grid">
              <div className="programme-card">
                <h3>Groupe formation</h3>
                <p>Pour les joueurs qui veulent progresser sérieusement.</p>
                <ul>
                  <li>Entraînements réguliers du lundi au samedi</li>
                  <li>Travail technique, coordination, motricité</li>
                  <li>Jeux, oppositions et mises en situation</li>
                </ul>
              </div>

              <div className="programme-card">
                <h3>Groupe performance</h3>
                <p>Pour les joueurs les plus motivés.</p>
                <ul>
                  <li>Travail spécifique par poste</li>
                  <li>Préparation physique et mentale</li>
                  <li>Accompagnement pour détections et essais</li>
                </ul>
              </div>
            </div>

            <div className="categories">
              <h3>Catégories KAF Global Foot</h3>
              <p>Cadets – U17 (14–16 ans)</p>
              <p>Juniors – U20 (17–20 ans)</p>
              <p>Espoirs – U23 (21–23 ans)</p>
              <p>
                Joueurs de 14 à 23 ans, tous niveaux. L&apos;affectation dans
                une catégorie se fait en fonction de l&apos;âge et du niveau.
              </p>
            </div>
          </section>

          {/* HORAIRES & LIEU */}
          <section id="horaires" className="section">
            <h2>Horaires &amp; lieu d&apos;entraînement</h2>

            <div className="horaires-grid">
              <div className="card">
                <h3>Horaires KAF Global Foot</h3>
                <ul>
                  <li>Du lundi au vendredi : 16h00 – 18h00</li>
                  <li>Samedi : 9h30 – 11h30</li>
                </ul>
                <p>
                  Entraînements tous les jours sauf le dimanche. Les horaires
                  peuvent légèrement varier en fonction du planning et des
                  compétitions. En cas de changement, les joueurs et les parents
                  sont informés à l’avance.
                </p>
              </div>

              <div className="card">
                <h3>Terrain d&apos;entraînement</h3>
                <p>
                  Terrain du Lycée de Kafountine
                  <br />
                  Crewane, Kafountine, département de Bignona, région de
                  Ziguinchor (Casamance).
                </p>
                <p>
                  Une carte Google Maps est disponible ci-dessous pour vous
                  aider à trouver facilement l’emplacement du terrain.
                </p>

                <div className="map-container">
                  <iframe
                    title="Terrain du Lycée de Kafountine"
                    src="https://www.google.com/maps?q=Lyc%C3%A9e%20de%20Kafountine&output=embed"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>

          {/* PHOTOS */}
          <section id="photos" className="section">
            <h2>Photos de KAF Global Foot</h2>
            <div className="photos-grid">
              <div className="photo-card">
                <img
                  src="/terrain-kafountine.jpg"
                  alt="Terrain de football à Kafountine"
                  className="photo-image"
                />
                <p>Terrain de football à Kafountine</p>
              </div>
              <div className="photo-card">
                <img
                  src="/jeunes-joueurs-kafountine.jpg"
                  alt="Jeunes joueurs de Kafountine au football"
                  className="photo-image"
                />
                <p>Jeunes joueurs de Kafountine au football</p>
              </div>
              <div className="photo-card">
                <img
                  src="/entrainement-technique.jpg"
                  alt="Travail technique à l'entraînement"
                  className="photo-image"
                />
                <p>Travail technique à l&apos;entraînement</p>
              </div>
              <div className="photo-card">
                <img
                  src="/vue-academie-kaf-global-foot.jpg"
                  alt="Vue d'ensemble de l'académie KAF Global Foot"
                  className="photo-image"
                />
                <p>Vue d&apos;ensemble de l&apos;académie KAF Global Foot</p>
              </div>
              <div className="photo-card">
                <img
                  src="/match-entrainement.jpg"
                  alt="Match d'entraînement à Kafountine"
                  className="photo-image"
                />
                <p>Match d&apos;entraînement à Kafountine</p>
              </div>
              <div className="photo-card">
                <img
                  src="/ambiance-kaf-global-foot.jpg"
                  alt="Ambiance au sein de KAF Global Foot"
                  className="photo-image"
                />
                <p>Ambiance au sein de KAF Global Foot</p>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="section">
            <h2>Contact KAF Global Foot</h2>
            <p>
              Pour toute question (pré-inscriptions, horaires, tarifs,
              partenariats), contactez-nous :
            </p>
            <ul>
              <li>
                Téléphone / WhatsApp : <strong>+221 78 270 24 57</strong>
              </li>
              <li>
                Email : <strong>contact@kafglobalfoot.com</strong>
              </li>
            </ul>
            <p>
              <Link href="/inscription">
                Aller au formulaire de pré-inscription
              </Link>
            </p>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="site-footer">
          <p>© 2025 KAF Global Foot. Tous droits réservés.</p>
          <p>Site développé avec Next.js &amp; déployé sur Vercel.</p>
        </footer>

        {/* BOUTON WHATSAPP FLOTTANT */}
        <a
          href="https://wa.me/221782702457"
          className="whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 WhatsApp
        </a>
      </div>
    </>
  );
}
