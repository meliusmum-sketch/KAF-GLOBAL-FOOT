import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>KAF Global Foot – académie de football à Kafountine</title>
        <meta
          name="description"
          content="KAF Global Foot est une académie de football à Kafountine (Casamance, Sénégal), dédiée à la formation des jeunes joueurs de 14 à 23 ans."
        />
      </Head>

      <div className="page">
        {/* HEADER */}
        <header className="site-header">
          <div className="header-inner">
            <div className="logo">KAF Global Foot</div>
            <nav className="main-nav">
              <a href="#apropos">À propos</a>
              <a href="#programmes">Programmes</a>
              <a href="#horaires">Horaires</a>
              <a href="#photos">Photos</a>
              <a href="#contact">Contact</a>
            </nav>
            <div className="header-actions">
              <Link href="/inscription" className="nav-cta">
                Inscription
              </Link>
            </div>
          </div>
        </header>

        {/* CONTENU */}
        <main className="main">
          {/* HERO */}
          <section className="hero" aria-labelledby="hero-title">
            <h1 id="hero-title">
              KAF Global Foot – académie de football à Kafountine pour les
              jeunes
            </h1>
            <p className="hero-text">
              Académie de football à Kafountine (Casamance), dédiée à la
              formation des jeunes dans un cadre sérieux, sécurisé et convivial.
            </p>

            <div className="hero-actions">
              <Link href="/inscription" className="btn-primary">
                Je pré-inscris un joueur
              </Link>
              <a href="#programmes" className="btn-secondary">
                Voir les programmes
              </a>
            </div>

            <p className="hero-meta">
              Joueurs de 14 à 23 ans · Tous niveaux
            </p>
          </section>

          {/* IMAGE / VISUEL */}
          <section className="section">
            <h2 className="visually-hidden">Entraînement KAF Global Foot</h2>
            <div className="image-placeholder">Entraînement KAF Global Foot</div>
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
              <div className="card">
                <h3>Groupe formation</h3>
                <p>Pour les joueurs qui veulent progresser sérieusement.</p>
                <ul>
                  <li>Entraînements réguliers du lundi au samedi</li>
                  <li>Travail technique, coordination, motricité</li>
                  <li>Jeux, oppositions et mises en situation</li>
                </ul>
              </div>

              <div className="card">
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
                  Une carte Google Maps sera bientôt disponible ici pour vous
                  aider à trouver facilement l’emplacement du terrain.
                </p>
              </div>
            </div>
          </section>

          {/* PHOTOS */}
          <section id="photos" className="section">
            <h2>Photos de KAF Global Foot</h2>
            <div className="photos-grid">
              <div className="photo-card">
                <div className="image-placeholder" />
                <p>Terrain de football à Kafountine</p>
              </div>
              <div className="photo-card">
                <div className="image-placeholder" />
                <p>Jeunes joueurs de Kafountine au football</p>
              </div>
              <div className="photo-card">
                <div className="image-placeholder" />
                <p>Travail technique à l&apos;entraînement</p>
              </div>
              <div className="photo-card">
                <div className="image-placeholder" />
                <p>Vue d&apos;ensemble de l&apos;académie KAF Global Foot</p>
              </div>
              <div className="photo-card">
                <div className="image-placeholder" />
                <p>Match d&apos;entraînement à Kafountine</p>
              </div>
              <div className="photo-card">
                <div className="image-placeholder" />
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
                Téléphone / WhatsApp :{" "}
                <strong>+221 78 270 24 57</strong>
              </li>
              <li>
                Email : <strong>contact@kafglobalfoot.com</strong>
              </li>
            </ul>
            <p>
              <Link href="/inscription">Aller au formulaire de pré-inscription</Link>
            </p>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="footer">
          <p>© 2025 KAF Global Foot. Tous droits réservés.</p>
          <p>Site développé avec Next.js &amp; déployé sur Vercel.</p>
        </footer>
      </div>

      {/* STYLE LOCAL POUR CETTE PAGE UNIQUEMENT */}
      <style jsx>{`
        .page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: #f7fafc;
          color: #111827;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
        }

        .site-header {
          background: white;
          border-bottom: 1px solid #e5e7eb;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .header-inner {
          max-width: 960px;
          margin: 0 auto;
          padding: 0.75rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .logo {
          font-weight: 700;
          font-size: 1.1rem;
        }

        .main-nav {
          display: flex;
          gap: 1rem;
          flex: 1;
          flex-wrap: wrap;
        }

        .main-nav a {
          font-size: 0.95rem;
        }

        .header-actions {
          display: flex;
        }

        .nav-cta {
          padding: 0.35rem 0.9rem;
          border-radius: 999px;
          background: #2563eb;
          color: white;
          font-size: 0.9rem;
        }

        .main {
          flex: 1;
          max-width: 960px;
          margin: 0 auto;
          padding: 1.5rem 1.25rem 2.5rem;
        }

        .hero {
          margin-bottom: 2rem;
        }

        .hero h1 {
          font-size: 1.9rem;
          margin-bottom: 0.75rem;
        }

        .hero-text {
          margin-bottom: 1rem;
          max-width: 40rem;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .btn-primary,
        .btn-secondary {
          display: inline-block;
          padding: 0.55rem 1.15rem;
          border-radius: 999px;
          font-size: 0.95rem;
        }

        .btn-primary {
          background: #2563eb;
          color: white;
        }

        .btn-secondary {
          border: 1px solid #d1d5db;
        }

        .hero-meta {
          font-size: 0.9rem;
          color: #4b5563;
        }

        .section {
          margin-top: 2.5rem;
        }

        .section h2 {
          font-size: 1.4rem;
          margin-bottom: 0.75rem;
        }

        .section h3 {
          margin-top: 1.25rem;
          margin-bottom: 0.35rem;
          font-size: 1.05rem;
        }

        .section p {
          line-height: 1.6;
        }

        .apropos-grid {
          display: grid;
          gap: 1rem;
          margin-top: 1.25rem;
        }

        .apropos-grid > div {
          background: white;
          border-radius: 0.75rem;
          padding: 0.9rem 1rem;
          border: 1px solid #e5e7eb;
        }

        .programmes-grid {
          display: grid;
          gap: 1rem;
          margin-top: 1rem;
        }

        .card {
          background: white;
          border-radius: 0.75rem;
          padding: 1rem 1.1rem;
          border: 1px solid #e5e7eb;
        }

        .categories {
          margin-top: 1.5rem;
          background: #eff6ff;
          border-radius: 0.75rem;
          padding: 1rem 1.1rem;
          border: 1px solid #bfdbfe;
        }

        .horaires-grid {
          display: grid;
          gap: 1rem;
          margin-top: 1rem;
        }

        .photos-grid {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          margin-top: 1rem;
        }

        .photo-card {
          background: white;
          border-radius: 0.75rem;
          padding: 0.9rem;
          border: 1px solid #e5e7eb;
          text-align: center;
          font-size: 0.9rem;
        }

        .image-placeholder {
          width: 100%;
          aspect-ratio: 4 / 3;
          border-radius: 0.6rem;
          background: #e5e7eb;
          margin-bottom: 0.5rem;
        }

        .image-placeholder:first-of-type {
          margin-top: 1rem;
        }

        .footer {
          border-top: 1px solid #e5e7eb;
          padding: 1rem 1.25rem;
          text-align: center;
          font-size: 0.85rem;
          color: #6b7280;
          background: white;
        }

        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        @media (max-width: 768px) {
          .header-inner {
            flex-wrap: wrap;
          }

          .main-nav {
            width: 100%;
            justify-content: center;
          }

          .header-actions {
            width: 100%;
            justify-content: center;
            margin-top: 0.5rem;
          }

          .hero h1 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
