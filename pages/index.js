import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function HomePage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const closeMobileNav = () => setMobileNavOpen(false);

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
          <div className="site-header-inner">
            <div className="site-logo">
              <Link href="/">KAF Global Foot</Link>
            </div>

            {/* BOUTON HAMBURGER (MOBILE) */}
            <button
              className={`mobile-nav-toggle ${
                mobileNavOpen ? "is-open" : ""
              }`}
              onClick={() => setMobileNavOpen((open) => !open)}
              aria-label={
                mobileNavOpen ? "Fermer le menu" : "Ouvrir le menu"
              }
            >
              <span />
              <span />
              <span />
            </button>

            {/* MENU PRINCIPAL */}
            <nav
              className={`main-nav ${
                mobileNavOpen ? "is-open" : ""
              }`}
            >
              <a href="#apropos" onClick={closeMobileNav}>
                À propos
              </a>
              <a href="#programmes" onClick={closeMobileNav}>
                Programmes
              </a>
              <a href="#horaires" onClick={closeMobileNav}>
                Horaires
              </a>
              <a href="#photos" onClick={closeMobileNav}>
                Photos
              </a>
              <a href="#contact" onClick={closeMobileNav}>
                Contact
              </a>
              <Link
                href="/partenaires"
                onClick={closeMobileNav}
              >
                Partenaires
              </Link>

              {/* Bouton inscription INSIDE menu en mobile */}
              <Link
                href="/inscription"
                className="nav-cta nav-cta-in-nav"
                onClick={closeMobileNav}
              >
                Inscription
              </Link>
            </nav>

            {/* Bouton inscription visible en DESKTOP */}
            <div className="nav-actions">
              <Link href="/inscription" className="nav-cta">
                Inscription
              </Link>
            </div>
          </div>
        </header>

        {/* CONTENU PRINCIPAL */}
        <main className="page-main">
          {/* HERO */}
          <section className="hero" aria-labelledby="hero-title">
            <div className="hero-content">
              <h1 id="hero-title">
                KAF Global Foot – académie de football à Kafountine pour les
                jeunes
              </h1>
              <p className="hero-tagline">
                Académie de football à Kafountine (Casamance), dédiée à la
                formation des jeunes dans un cadre sérieux, sécurisé et
                convivial.
              </p>

              <div className="hero-actions">
                <Link href="/inscription" className="hero-primary">
                  Je pré-inscris un joueur
                </Link>
                <a href="#programmes" className="hero-secondary">
                  Voir les programmes
                </a>
              </div>

              <p className="hero-meta">
                Joueurs de 14 à 23 ans · Tous niveaux
              </p>
            </div>
          </section>

          {/* À PROPOS */}
          <section id="apropos" className="page-section">
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

            <div className="apropos-grid">
              <div>
                <h3>Encadrement</h3>
                <p>
                  Coachs passionnés et expérimentés, avec une approche adaptée
                  à l’âge et au niveau de chaque joueur. Exigence sur
                  l’attitude, mais toujours dans la bienveillance.
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
          <section id="programmes" className="page-section">
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
              <p>
                <strong>Cadets – U17 (14–16 ans)</strong> ·{" "}
                <strong>Juniors – U20 (17–20 ans)</strong> ·{" "}
                <strong>Espoirs – U23 (21–23 ans)</strong>
              </p>
              <p>
                Joueurs de 14 à 23 ans, tous niveaux. L&apos;affectation dans
                une catégorie se fait en fonction de l&apos;âge et du niveau.
              </p>
            </div>
          </section>

          {/* HORAIRES & LIEU */}
          <section id="horaires" className="page-section">
            <h2>Horaires &amp; lieu d&apos;entraînement</h2>

            <div className="horaires-grid">
              <div>
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

              <div>
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
          <section id="photos" className="page-section">
            <h2>Photos de KAF Global Foot</h2>
            <div className="photos-grid">
              <div className="photo-card">
                <div className="photo-placeholder" />
                <p>Terrain de football à Kafountine</p>
              </div>
              <div className="photo-card">
                <div className="photo-placeholder" />
                <p>Jeunes joueurs de Kafountine</p>
              </div>
              <div className="photo-card">
                <div className="photo-placeholder" />
                <p>Travail technique à l&apos;entraînement</p>
              </div>
              <div className="photo-card">
                <div className="photo-placeholder" />
                <p>Ambiance au sein de l&apos;académie</p>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="page-section">
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
              Vous pouvez aussi remplir directement notre{" "}
              <Link href="/inscription">formulaire de pré-inscription</Link>.
            </p>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="site-footer">
          <p>© 2025 KAF Global Foot. Tous droits réservés.</p>
          <p>Site développé avec Next.js &amp; déployé sur Vercel.</p>
        </footer>
      </div>
    </>
  );
}
