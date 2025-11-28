// pages/index.tsx
// Remplace TOUT le contenu de ce fichier par ce code.

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* Titre onglet navigateur */}
        <title>
          KAF Global Foot – Académie de football à Kafountine (Casamance)
        </title>

        {/* Description pour Google */}
        <meta
          name="description"
          content="Académie de football à Kafountine en Casamance pour les jeunes joueurs de 14 à 23 ans : entraînements sérieux, cadre sécurisé, 6 séances par semaine."
        />

        {/* SEO simple */}
        <link rel="canonical" href="https://kafglobalfoot.com" />

        {/* Open Graph pour partage WhatsApp / Facebook */}
        <meta
          property="og:title"
          content="KAF Global Foot – Académie de football à Kafountine"
        />
        <meta
          property="og:description"
          content="Académie de football à Kafountine (Casamance) pour joueurs de 14 à 23 ans. Entraînements sérieux, cadre sécurisé, 6 séances par semaine."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kafglobalfoot.com" />
        <meta
          property="og:image"
          content="https://kafglobalfoot.com/logo-kaf.svg"
        />

        {/* Twitter card (même info) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="KAF Global Foot – Académie de football à Kafountine"
        />
        <meta
          name="twitter:description"
          content="Académie de football à Kafountine en Casamance pour joueurs de 14 à 23 ans."
        />
        <meta
          name="twitter:image"
          content="https://kafglobalfoot.com/logo-kaf.svg"
        />
      </Head>

      <main className="page-shell">
        {/* HEADER */}
        <header className="site-header">
          <div className="site-header-left">
            <img
              src="/logo-kaf.svg"
              alt="Logo KAF Global Foot"
              className="site-logo"
            />
            <div className="site-title-block">
              <span className="site-title">KAF Global Foot</span>
              <span className="site-tagline">
                Académie de football · Casamance
              </span>
            </div>
          </div>
          <nav className="site-nav">
            <a href="#apropos">À propos</a>
            <a href="#programmes">Programmes</a>
            <a href="#horaires">Horaires</a>
            <a href="#photos">Photos</a>
            <a href="#contact">Contact</a>
            <a href="/inscription" className="site-nav-cta">
              Inscription
            </a>
          </nav>
        </header>

        {/* LAYOUT 3 COLONNES SUR GRAND ÉCRAN */}
        <div className="layout-shell">
          {/* COLONNE GAUCHE – INFOS RAPIDES */}
          <aside className="layout-rail layout-rail-left">
            <div className="rail-card">
              <h3>Infos rapides</h3>
              <ul>
                <li>Âge : 14 à 23 ans</li>
                <li>Lieu : Kafountine, Casamance</li>
                <li>6 séances d&apos;entraînement / semaine</li>
              </ul>
            </div>
            <div className="rail-card">
              <h3>Contact direct</h3>
              <p>WhatsApp / Téléphone :</p>
              <p className="rail-strong">+221 78 270 24 57</p>
              <a
                href="https://wa.me/221782702457"
                className="btn btn-rail"
                target="_blank"
                rel="noopener noreferrer"
              >
                Écrire sur WhatsApp
              </a>
            </div>
          </aside>

          {/* COLONNE CENTRALE – CONTENU PRINCIPAL */}
          <div className="layout-main">
            {/* HERO */}
            <section className="hero" aria-labelledby="hero-title">
              <div className="hero-content">
                <div className="hero-text">
                  {/* Petit bandeau inscriptions */}
                  <p className="hero-meta">
                    Inscriptions en cours – saison 2025–2026
                  </p>

                  <h1 id="hero-title">
                    KAF Global Foot – académie de football à Kafountine
                  </h1>
                  <p className="hero-subtitle">
                    Académie de football en Casamance pour les jeunes de 14 à
                    23 ans. Former les talents de Kafountine, sur et en dehors
                    du terrain.
                  </p>
                  <p className="hero-meta">
                    Joueurs de 14 à 23 ans · Tous niveaux · Cadets, Juniors,
                    Espoirs
                  </p>
                  <div className="hero-actions">
                    <a href="/inscription" className="btn btn-primary">
                      Je pré-inscris un joueur
                    </a>
                    <a
                      href="https://wa.me/221782702457"
                      className="btn btn-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Écrire sur WhatsApp
                    </a>
                    <a href="#programmes" className="btn btn-secondary">
                      Voir les programmes
                    </a>
                  </div>
                </div>

                <div className="hero-photos">
                  <div className="hero-photos-strip">
                    <img
                      src="/gallery1.jpg"
                      alt="Entraînement à Kafountine"
                      className="hero-photo"
                    />
                    <img
                      src="/gallery2.jpg"
                      alt="Joueur de KAF Global Foot sur le terrain"
                      className="hero-photo"
                    />
                    <img
                      src="/gallery3.jpg"
                      alt="Match d'entraînement KAF Global Foot"
                      className="hero-photo"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* À PROPOS – TEXTE ALLÉGÉ */}
            <section id="apropos" className="section">
              <h2>À propos de KAF Global Foot</h2>
              <p>
                KAF Global Foot est une académie de football basée à Kafountine,
                en Casamance. Nous accompagnons les jeunes de 14 à 23 ans dans
                leur progression sportive et humaine, avec un encadrement
                sérieux et un cadre sécurisé.
              </p>
              <details className="details">
                <summary>Voir plus</summary>
                <p>
                  Notre projet repose sur trois piliers : un encadrement
                  qualifié, un environnement de travail serein et une vision
                  éducative du football. Le terrain est un lieu
                  d&apos;apprentissage où nous transmettons le respect, la
                  discipline, l&apos;esprit d&apos;équipe, le goût de l&apos;effort
                  et le sens des responsabilités.
                </p>
                <p>
                  Les entraînements se déroulent du lundi au samedi sur le
                  terrain du Lycée de Kafountine, avec un programme adapté à
                  l&apos;âge, au niveau et à la réalité de chaque joueur.
                </p>
                <h3>About KAF Global Foot (English)</h3>
                <p>
                  KAF Global Foot is a football academy based in Kafountine, in
                  the Casamance region of Senegal. Its mission is to support
                  young players aged 14 to 23 in their sporting and personal
                  development.
                </p>
                <p>
                  The project is built on three main pillars: serious coaching,
                  a safe environment and an educational vision of football.
                  Beyond performance, we aim to transmit strong values such as
                  respect, discipline, team spirit, work ethic and a sense of
                  responsibility.
                </p>
              </details>
            </section>

            {/* PROGRAMMES – VERSION CLARIFIÉE */}
            <section id="programmes" className="section">
              <h2>Nos programmes</h2>

              <div className="card">
                <h3>Formation de base</h3>
                <p>
                  Pour les joueurs qui veulent progresser sérieusement, avec un
                  suivi régulier et des bases solides.
                </p>
                <ul>
                  <li>Entraînements du lundi au samedi</li>
                  <li>Travail technique : contrôle, passes, conduite de balle</li>
                  <li>Coordination, motricité, déplacements sans ballon</li>
                  <li>Jeux réduits et oppositions</li>
                </ul>
              </div>

              <div className="card">
                <h3>Groupe performance &amp; détection</h3>
                <p>
                  Pour les joueurs les plus motivés, avec un objectif de
                  performance et de détection.
                </p>
                <ul>
                  <li>Travail spécifique par poste (gardien, défenseur, etc.)</li>
                  <li>Préparation physique et mentale</li>
                  <li>Travail sur l&apos;intensité, la vitesse de jeu</li>
                  <li>Accompagnement pour détections et essais</li>
                </ul>
              </div>

              <div className="card">
                <h3>Catégories KAF Global Foot</h3>
                <ul>
                  <li>Cadets – U17 (14–16 ans)</li>
                  <li>Juniors – U20 (17–20 ans)</li>
                  <li>Espoirs – U23 (21–23 ans)</li>
                </ul>
                <p className="meta-line">
                  Joueurs de 14 à 23 ans, tous niveaux. La catégorie dépend de
                  l&apos;âge, du niveau et de la maturité du joueur.
                </p>
              </div>
            </section>

            {/* HORAIRES */}
            <section id="horaires" className="section">
              <h2>Horaires &amp; lieu d’entraînement</h2>

              <div className="card">
                <h3>Horaires KAF Global Foot</h3>
                <ul>
                  <li>Du lundi au vendredi : 16h00 – 18h00</li>
                  <li>Samedi : 9h30 – 11h30</li>
                </ul>
                <p>
                  Entraînements tous les jours sauf le dimanche. La présence
                  régulière est importante pour progresser et rester dans le
                  groupe.
                </p>
                <p>
                  En cas de changement (match, tournoi, détection), les joueurs
                  et les parents sont informés à l&apos;avance.
                </p>
              </div>

              <div className="card">
                <h3>Terrain d’entraînement</h3>
                <p>Terrain du Lycée de Kafountine</p>
                <p>
                  Crewane, Kafountine, département de Bignona, région de
                  Ziguinchor (Casamance).
                </p>
                <p>
                  Un environnement calme, au cœur de la Casamance verte, propice
                  au travail et à la concentration.
                </p>
              </div>
            </section>

            {/* PHOTOS – TEXTE INTRO */}
            <section id="photos" className="section">
              <h2>Photos de KAF Global Foot</h2>
              <p>
                Quelques images de l&apos;académie : terrain, entraînements,
                matchs et ambiance de groupe à Kafountine.
              </p>
              <div className="photo-strip">
                <img
                  src="/gallery1.jpg"
                  alt="Terrain de football à Kafountine"
                />
                <img
                  src="/gallery2.jpg"
                  alt="Jeunes joueurs de KAF Global Foot"
                />
                <img
                  src="/gallery3.jpg"
                  alt="Travail technique à l'entraînement"
                />
                <img
                  src="/gallery4.jpg"
                  alt="Vue d'ensemble de l'académie"
                />
                <img
                  src="/gallery5.jpg"
                  alt="Match d'entraînement"
                />
                <img
                  src="/gallery6.jpg"
                  alt="Ambiance de groupe à KAF Global Foot"
                />
              </div>
            </section>

            {/* CONTACT – ON NE TOUCHE PAS À LA LOGIQUE D’INSCRIPTION */}
            <section id="contact" className="section">
              <h2>Contact KAF Global Foot</h2>
              <p>
                Pour toute question (pré-inscriptions, horaires, tarifs,
                partenariats), contactez-nous :
              </p>
              <ul>
                <li>Téléphone / WhatsApp : +221 78 270 24 57</li>
                <li>Email : contact@kafglobalfoot.com</li>
              </ul>
              <p>
                <a href="/inscription" className="btn btn-primary">
                  Aller au formulaire de pré-inscription
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/221782702457"
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Parler sur WhatsApp
                </a>
              </p>
            </section>

            {/* FOOTER */}
            <footer className="site-footer">
              <p>© 2025 KAF Global Foot. Tous droits réservés.</p>
              <p className="footer-tech">
                Site développé avec Next.js &amp; déployé sur Vercel.
              </p>
            </footer>
          </div>

          {/* COLONNE DROITE – VISION / CASAMANCE VERTE */}
          <aside className="layout-rail layout-rail-right">
            <div className="rail-card">
              <h3>Vision du projet</h3>
              <p>
                Former des joueurs complets, capables de s&apos;exprimer sur le
                terrain et dans la vie, avec des valeurs fortes.
              </p>
            </div>
            <div className="rail-card">
              <h3>Casamance verte</h3>
              <p>
                Un projet ancré à Kafountine, au cœur de la Casamance, dans un
                environnement naturel, calme et inspirant.
              </p>
            </div>
          </aside>
        </div>

        {/* BOUTON WHATSAPP FLOTTANT (toujours visible) */}
        <a
          href="https://wa.me/221782702457"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discuter avec KAF Global Foot sur WhatsApp"
        >
          WhatsApp
        </a>
      </main>
    </>
  );
}
