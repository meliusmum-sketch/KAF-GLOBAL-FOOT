import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Académie de Foot - Accueil</title>
        <meta
          name="description"
          content="Académie de football pour jeunes talents. Entraînements structurés, encadrement professionnel et ambiance familiale."
        />
      </Head>

      <div className="page">
        {/* NAVBAR */}
        <header className="navbar">
          <div className="container nav-content">
            <div className="logo">Académie de Foot</div>
            <nav className="nav-links">
              <a href="#apropos">À propos</a>
              <a href="#programmes">Programmes</a>
              <a href="#horaires">Horaires</a>
              <a href="#contact">Contact</a>
              <Link href="/inscription" className="btn btn-small">
                Inscription
              </Link>
            </nav>
          </div>
        </header>

        {/* HERO */}
        <main>
          <section className="hero">
            <div className="container hero-content">
              <div className="hero-text">
                <h1>
                  Révèle le talent des jeunes <span>footballeurs</span>
                </h1>
                <p>
                  Entraînements de qualité, coachs diplômés, et un cadre
                  sécurisé pour faire progresser chaque enfant, quel que soit
                  son niveau.
                </p>
                <div className="hero-cta">
                  <Link href="/inscription" className="btn">
                    Je pré-inscris mon enfant
                  </Link>
                  <a href="#programmes" className="btn btn-secondary">
                    Voir les programmes
                  </a>
                </div>
              </div>
              <div className="hero-side">
                <div className="hero-card">
                  <h2>Catégories</h2>
                  <ul>
                    <li>U8 (6–8 ans)</li>
                    <li>U10 (8–10 ans)</li>
                    <li>U12 (10–12 ans)</li>
                    <li>U14 &amp; plus</li>
                  </ul>
                  <p className="hero-note">
                    Garçons &amp; filles bienvenus, tous niveaux.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* A PROPOS */}
          <section id="apropos" className="section">
            <div className="container">
              <h2 className="section-title">À propos de l&apos;académie</h2>
              <p className="section-text">
                Notre académie a pour mission de former des jeunes joueurs
                techniquement, tactiquement et mentalement. Nous travaillons sur
                les valeurs de respect, discipline et esprit d&apos;équipe, tout
                en gardant le plaisir de jouer au centre du projet.
              </p>
              <div className="cards">
                <div className="card">
                  <h3>Encadrement</h3>
                  <p>
                    Coachs expérimentés, diplômés et passionnés, avec une
                    approche pédagogique adaptée à chaque âge.
                  </p>
                </div>
                <div className="card">
                  <h3>Méthodologie</h3>
                  <p>
                    Exercices ludiques pour les plus petits, travail tactique
                    et physique progressif pour les plus grands.
                  </p>
                </div>
                <div className="card">
                  <h3>Objectifs</h3>
                  <p>
                    Développer le potentiel des joueurs, préparer aux détections
                    et offrir un cadre sain de pratique sportive.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* PROGRAMMES */}
          <section id="programmes" className="section section-alt">
            <div className="container">
              <h2 className="section-title">Nos programmes</h2>
              <div className="cards cards-2">
                <div className="card">
                  <h3>École de foot</h3>
                  <p>Pour les plus jeunes (U8 à U12).</p>
                  <ul className="list">
                    <li>2 séances par semaine</li>
                    <li>Travail de motricité & technique</li>
                    <li>Mini-matchs & tournois internes</li>
                  </ul>
                </div>
                <div className="card">
                  <h3>Groupe performance</h3>
                  <p>Pour les joueurs les plus motivés.</p>
                  <ul className="list">
                    <li>3 séances par semaine</li>
                    <li>Préparation athlétique</li>
                    <li>Accompagnement détections & essais</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* HORAIRES / LIEU */}
          <section id="horaires" className="section">
            <div className="container">
              <h2 className="section-title">Horaires & lieu</h2>
              <div className="grid-2">
                <div>
                  <h3>Exemple d&apos;horaires</h3>
                  <ul className="list">
                    <li>
                      <strong>Mercredi :</strong> 16h00 – 18h00
                    </li>
                    <li>
                      <strong>Samedi :</strong> 9h30 – 11h30
                    </li>
                  </ul>
                  <p className="section-text small">
                    (Tu pourras adapter ici avec tes vrais jours et heures
                    d&apos;entraînement.)
                  </p>
                </div>
                <div>
                  <h3>Terrain d&apos;entraînement</h3>
                  <p>
                    Indique ici le nom du stade / terrain, le quartier et la
                    ville.
                  </p>
                  <p className="section-text small">
                    Ex : Terrain municipal de XXX, Quartier YYY, Ville ZZZ.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* BLOC INSCRIPTION */}
          <section id="inscription" className="section section-accent">
            <div className="container cta-banner">
              <div>
                <h2>Prêt à inscrire ton enfant ?</h2>
                <p>
                  Clique sur le bouton ci-dessous pour remplir le formulaire
                  d&apos;inscription. Nous te recontacterons rapidement.
                </p>
              </div>
              <Link href="/inscription" className="btn btn-light">
                Aller au formulaire d&apos;inscription
              </Link>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="section section-alt">
            <div className="container">
              <h2 className="section-title">Contact</h2>
              <div className="grid-2">
                <div>
                  <p className="section-text">
                    Pour toute question, tu peux nous contacter :
                  </p>
                  <ul className="list">
                    <li>
                      <strong>Téléphone :</strong> +221 XX XX XX XX (à adapter)
                    </li>
                    <li>
                      <strong>WhatsApp :</strong> +221 XX XX XX XX
                    </li>
                    <li>
                      <strong>Email :</strong> contact@ton-academie.com
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="section-text small">
                    Tu pourras également intégrer ici une carte Google Maps ou
                    un lien vers tes réseaux sociaux (Instagram, Facebook,
                    TikTok, etc.) pour montrer la vie de l&apos;académie.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container footer-content">
            <p>© {new Date().getFullYear()} Académie de Foot. Tous droits réservés.</p>
            <p className="footer-small">
              Site développé avec Next.js &amp; déployé sur Vercel.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
