// pages/index.js
// Remplace TOUT le contenu de ce fichier par ce code.

import Head from "next/head";

export default function Home() {
  const PHONE_DISPLAY = "+221 783616382";
  const WA_LINK = "https://wa.me/221783616382";
  const PDF_LINK = "/downloads/KAF_Global_Foot_Player_Form_Final.pdf";

  return (
    <>
      <Head>
        <title>KAF Global Foot – Académie de football à Kafountine (Casamance)</title>

        <meta
          name="description"
          content="Académie de football à Kafountine en Casamance pour les jeunes joueurs de 14 à 23 ans : entraînements sérieux, cadre sécurisé, 6 séances par semaine."
        />

        <link rel="canonical" href="https://kafglobalfoot.com" />

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
        <meta property="og:image" content="https://kafglobalfoot.com/logo-kaf.svg" />

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
              <span className="site-tagline">Académie de football · Casamance</span>
            </div>
          </div>

          <nav className="site-nav">
            <a href="#apropos">À propos</a>
            <a href="#programmes">Programmes</a>
            <a href="#horaires">Horaires</a>
            <a href="#photos">Photos</a>
            <a href="#formulaires">Formulaires</a>
            <a href="#contact">Contact</a>

            {/* ✅ Lien visible vers la page /sign-up */}
            <a href="/sign-up">Dossier Pro</a>

            <a href="/inscription" className="site-nav-cta">
              Inscription
            </a>
          </nav>
        </header>

        {/* LAYOUT 3 COLONNES */}
        <div className="layout-shell">
          {/* COLONNE GAUCHE */}
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
              <p className="rail-strong">{PHONE_DISPLAY}</p>

              <a
                href={WA_LINK}
                className="btn btn-rail"
                target="_blank"
                rel="noopener noreferrer"
              >
                Écrire sur WhatsApp
              </a>
            </div>

            <div className="rail-card">
              <h3>Formulaire joueur (PDF)</h3>
              <p>Téléchargez le formulaire officiel pour le dossier joueur.</p>
              <a
                href={PDF_LINK}
                className="btn btn-rail"
                target="_blank"
                rel="noopener noreferrer"
              >
                Télécharger le PDF
              </a>
            </div>
          </aside>

          {/* COLONNE CENTRALE */}
          <div className="layout-main">
            {/* HERO */}
            <section className="hero" aria-labelledby="hero-title">
              <div className="hero-content">
                <div className="hero-text">
                  <p className="hero-meta">Inscriptions en cours – saison 2025–2026</p>

                  <h1 id="hero-title">KAF Global Foot – académie de football à Kafountine</h1>

                  <p className="hero-subtitle">
                    Académie de football en Casamance pour les jeunes de 14 à 23 ans.
                    Former les talents de Kafountine, sur et en dehors du terrain.
                  </p>

                  <p className="hero-meta">
                    Joueurs de 14 à 23 ans · Tous niveaux · Cadets, Juniors, Espoirs
                  </p>

                  <div className="hero-actions">
                    <a href="/inscription" className="btn btn-primary">
                      Je pré-inscris un joueur
                    </a>

                    {/* ✅ Bouton visible vers /sign-up */}
                    <a href="/sign-up" className="btn btn-secondary">
                      Dossier Pro (Club/Camp)
                    </a>

                    <a
                      href={WA_LINK}
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

                  <div style={{ marginTop: 12 }}>
                    <a
                      href={PDF_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "underline" }}
                    >
                      Télécharger le formulaire joueur (PDF)
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

            {/* À PROPOS */}
            <section id="apropos" className="section">
              <h2>À propos de KAF Global Foot</h2>
              <p>
                KAF Global Foot est une académie de football basée à Kafountine,
                en Casamance. Nous accompagnons les jeunes de 14 à 23 ans dans
                leur progression sportive et humaine, avec un encadrement sérieux
                et un cadre sécurisé.
              </p>

              <details className="details">
                <summary>Voir plus</summary>
                <p>
                  Notre projet repose sur trois piliers : un encadrement qualifié,
                  un environnement de travail serein et une vision éducative du football.
                  Le terrain est un lieu d&apos;apprentissage où nous transmettons le respect,
                  la discipline, l&apos;esprit d&apos;équipe et le goût de l&apos;effort.
                </p>

                <h3>About KAF Global Foot (English)</h3>
                <p>
                  KAF Global Foot is a football academy based in Kafountine, in Senegal’s
                  Casamance region. We support young players aged 14 to 23 in their
                  sporting and personal development.
                </p>
              </details>
            </section>

            {/* PROGRAMMES */}
            <section id="programmes" className="section">
              <h2>Nos programmes</h2>

              <div className="card">
                <h3>Formation de base</h3>
                <ul>
                  <li>Entraînements du lundi au samedi</li>
                  <li>Travail technique : contrôle, passes, conduite de balle</li>
                  <li>Coordination, motricité, déplacements sans ballon</li>
                  <li>Jeux réduits et oppositions</li>
                </ul>
              </div>

              <div className="card">
                <h3>Groupe performance &amp; détection</h3>
                <ul>
                  <li>Travail spécifique par poste</li>
                  <li>Préparation physique et mentale</li>
                  <li>Travail sur l’intensité, la vitesse de jeu</li>
                  <li>Accompagnement pour détections et essais</li>
                </ul>
              </div>

              <div className="card">
                <h3>Catégories</h3>
                <ul>
                  <li>Cadets – U17 (14–16 ans)</li>
                  <li>Juniors – U20 (17–20 ans)</li>
                  <li>Espoirs – U23 (21–23 ans)</li>
                </ul>
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
                <p>Entraînements tous les jours sauf le dimanche.</p>
              </div>

              <div className="card">
                <h3>Terrain d’entraînement</h3>
                <p>Terrain du Lycée de Kafountine</p>
                <p>Crewane, Kafountine, département de Bignona, région de Ziguinchor.</p>
              </div>
            </section>

            {/* PHOTOS */}
            <section id="photos" className="section">
              <h2>Photos de KAF Global Foot</h2>
              <p>Quelques images : terrain, entraînements, matchs et ambiance de groupe.</p>

              <div className="photo-strip">
                <img src="/gallery1.jpg" alt="Terrain de football à Kafountine" />
                <img src="/gallery2.jpg" alt="Jeunes joueurs de KAF Global Foot" />
                <img src="/gallery3.jpg" alt="Travail technique à l'entraînement" />
                <img src="/gallery4.jpg" alt="Vue d'ensemble de l'académie" />
                <img src="/gallery5.jpg" alt="Match d'entraînement" />
                <img src="/gallery6.jpg" alt="Ambiance de groupe à KAF Global Foot" />
              </div>
            </section>

            {/* FORMULAIRES */}
            <section id="formulaires" className="section">
              <h2>Formulaires &amp; dossier joueur</h2>
              <div className="card">
                <h3>1) Formulaire joueur (PDF)</h3>
                <p>Téléchargez le document officiel à remplir (dossier complet).</p>
                <p>
                  <a
                    href={PDF_LINK}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Télécharger le PDF
                  </a>
                </p>
              </div>

              <div className="card">
                <h3>2) Dossier Pro (recommandé)</h3>
                <p>
                  Remplissez le dossier complet en ligne (club à l&apos;étranger / camp),
                  puis confirmez.
                </p>
                <p>
                  <a href="/sign-up" className="btn btn-secondary">
                    Ouvrir Dossier Pro
                  </a>
                </p>
              </div>

              <div className="card">
                <h3>3) Pré-inscription simple</h3>
                <p>Si vous voulez juste pré-inscrire rapidement un joueur.</p>
                <p>
                  <a href="/inscription" className="btn btn-secondary">
                    Aller à la pré-inscription
                  </a>
                </p>
              </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="section">
              <h2>Contact KAF Global Foot</h2>
              <p>Pour toute question (pré-inscriptions, partenariats, camps, détections) :</p>
              <ul>
                <li>Téléphone / WhatsApp : {PHONE_DISPLAY}</li>
                <li>Email : contact@kafglobalfoot.com</li>
              </ul>

              <p>
                <a href="/inscription" className="btn btn-primary">
                  Aller au formulaire de pré-inscription
                </a>
              </p>

              <p>
                <a
                  href={WA_LINK}
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Parler sur WhatsApp
                </a>
              </p>

              <p>
                <a href="/sign-up" className="btn btn-secondary">
                  Dossier Pro (Club/Camp)
                </a>
              </p>

              <p style={{ marginTop: 12 }}>
                <a href="/confidentialite" style={{ textDecoration: "underline" }}>
                  Politique de confidentialité
                </a>
              </p>
            </section>

            {/* FOOTER */}
            <footer className="site-footer">
              <p>© 2025 KAF Global Foot. Tous droits réservés.</p>
              <p className="footer-tech">Site développé avec Next.js &amp; déployé sur Vercel.</p>
            </footer>
          </div>

          {/* COLONNE DROITE */}
          <aside className="layout-rail layout-rail-right">
            <div className="rail-card">
              <h3>Vision du projet</h3>
              <p>
                Former des joueurs complets, capables de s&apos;exprimer sur le terrain et dans
                la vie, avec des valeurs fortes.
              </p>
            </div>

            <div className="rail-card">
              <h3>Casamance verte</h3>
              <p>
                Un projet ancré à Kafountine, dans un environnement naturel, calme et inspirant.
              </p>
            </div>

            <div className="rail-card">
              <h3>Accès rapide</h3>
              <a className="btn btn-rail" href="/sign-up">
                Dossier Pro
              </a>
              <a
                className="btn btn-rail"
                href={PDF_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: 10 }}
              >
                Télécharger le PDF
              </a>
            </div>
          </aside>
        </div>

        {/* BOUTON WHATSAPP FLOTTANT */}
        <a
          href={WA_LINK}
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
