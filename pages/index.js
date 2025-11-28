// pages/index.tsx
// Remplace TOUT le contenu du fichier par ce code.

export default function Home() {
  return (
    <main className="page-shell">
      {/* HEADER */}
      <header className="site-header">
        <div className="site-header-left">
          <img
            src="/logo-kaf.svg"
            alt="Logo KAF Global Foot"
            className="site-logo"
          />
          <span className="site-title">KAF Global Foot</span>
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
        {/* COLONNE GAUCHE – RUBRIQUES */}
        <aside className="layout-rail layout-rail-left">
          <div className="rail-card">
            <h3>Infos rapides</h3>
            <ul>
              <li>Âge : 14 à 23 ans</li>
              <li>Lieu : Kafountine, Casamance</li>
              <li>6 séances / semaine</li>
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
                <h1 id="hero-title">
                  KAF Global Foot – académie de football à Kafountine
                </h1>
                <p className="hero-subtitle">
                  Formation des joueurs de 14 à 23 ans dans un cadre sérieux,
                  sécurisé et convivial.
                </p>
                <p className="hero-meta">
                  Joueurs de 14 à 23 ans · Tous niveaux
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
                </div>
              </div>

              <div className="hero-photos">
                <div className="hero-photos-strip">
                  <img
                    src="/gallery1.jpg"
                    alt="Jeune joueur à l'entraînement à Kafountine"
                    className="hero-photo"
                  />
                  <img
                    src="/gallery2.jpg"
                    alt="Joueur de KAF Global Foot sur le terrain"
                    className="hero-photo"
                  />
                  <img
                    src="/gallery3.jpg"
                    alt="Match d'entraînement avec KAF Global Foot"
                    className="hero-photo"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* À PROPOS */}
          <section id="apropos" className="section">
            <h2>À propos de KAF Global Foot</h2>
            <p>
              KAF Global Foot est une académie de football basée à Kafountine,
              en Casamance (Sénégal). Nous accompagnons les jeunes joueurs de 14
              à 23 ans dans leur progression sportive et humaine.
            </p>
            <details className="details">
              <summary>Voir plus</summary>
              <p>
                Notre projet repose sur trois piliers : un encadrement sérieux,
                un cadre sécurisé et une vision éducative du football. Au-delà
                de la performance, nous cherchons à transmettre des valeurs
                fortes : respect, discipline, esprit d’équipe, goût de l’effort
                et sens des responsabilités.
              </p>
              <p>
                Les entraînements se déroulent du lundi au samedi sur le terrain
                du Lycée de Kafountine, avec un programme adapté à l’âge et au
                niveau de chaque joueur.
              </p>
              <h3>About KAF Global Foot (English)</h3>
              <p>
                KAF Global Foot is a football academy based in Kafountine, in
                the Casamance region of Senegal. Its mission is to support young
                players aged 14 to 23 in their sporting and personal
                development.
              </p>
              <p>
                The project is built on three main pillars: serious coaching, a
                safe environment and an educational vision of football. Beyond
                performance, we aim to transmit strong values such as respect,
                discipline, team spirit, work ethic and a sense of
                responsibility.
              </p>
            </details>
          </section>

          {/* PROGRAMMES */}
          <section id="programmes" className="section">
            <h2>Nos programmes</h2>

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

            <div className="card">
              <h3>Catégories KAF Global Foot</h3>
              <ul>
                <li>Cadets – U17 (14–16 ans)</li>
                <li>Juniors – U20 (17–20 ans)</li>
                <li>Espoirs – U23 (21–23 ans)</li>
              </ul>
              <p className="meta-line">
                Joueurs de 14 à 23 ans, tous niveaux. L’affectation dans une
                catégorie se fait en fonction de l’âge et du niveau.
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
                Entraînements tous les jours sauf le dimanche. Les horaires
                peuvent légèrement varier en fonction du planning et des
                compétitions. En cas de changement, les joueurs et les parents
                sont informés à l’avance.
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
                Une carte Google Maps est disponible ci-dessous pour vous aider
                à trouver le terrain.
              </p>
            </div>
          </section>

          {/* PHOTOS */}
          <section id="photos" className="section">
            <h2>Photos de KAF Global Foot</h2>
            <div className="photo-strip">
              <img
                src="/gallery1.jpg"
                alt="Terrain de football à Kafountine"
              />
              <img
                src="/gallery2.jpg"
                alt="Jeunes joueurs de Kafountine au football"
              />
              <img
                src="/gallery3.jpg"
                alt="Travail technique à l'entraînement"
              />
              <img
                src="/gallery4.jpg"
                alt="Vue d'ensemble de l'académie KAF Global Foot"
              />
              <img
                src="/gallery5.jpg"
                alt="Match d'entraînement à Kafountine"
              />
              <img
                src="/gallery6.jpg"
                alt="Ambiance au sein de KAF Global Foot"
              />
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

        {/* COLONNE DROITE – RUBRIQUES */}
        <aside className="layout-rail layout-rail-right">
          <div className="rail-card">
            <h3>Vision du projet</h3>
            <p>
              Former des joueurs complets, avec des valeurs humaines fortes et
              une ouverture internationale.
            </p>
          </div>
          <div className="rail-card">
            <h3>Casamance verte</h3>
            <p>
              Un projet ancré à Kafountine, au cœur de la Casamance, dans un
              environnement calme et inspirant.
            </p>
          </div>
        </aside>
      </div>

      {/* BOUTON WHATSAPP FLOTTANT */}
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
  );
}
