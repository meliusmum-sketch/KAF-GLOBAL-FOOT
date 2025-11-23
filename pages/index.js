import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>KAF GLOBAL FOOT — Académie de Football</title>
        <meta
          name="description"
          content="KAF GLOBAL FOOT - Académie Casamance - formation, stages, performance."
        />
      </Head>

      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <div className="logo">KAF</div>
            <div className="brand-text">
              <h1>KAF GLOBAL FOOT</h1>
              <span>Académie — Casamance &amp; Paix</span>
            </div>
          </div>

          <nav className="header-nav">
            <a href="#about">À propos</a>
            <a href="#programmes">Programmes</a>
            <a href="#equipes">Équipes</a>
            <a href="#inscription">Inscription</a>
            <a href="#galerie">Galerie</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-cta">
            <a className="btn btn-primary" href="#inscription">
              Rejoindre
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-inner">
            <h2>L'élite du football formée en Casamance</h2>
            <p>
              Encadrement professionnel, valeurs, et formation complète. KAF GLOBAL
              FOOT forme des joueurs techniques, intelligents et respectueux.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#inscription">
                Inscrire un joueur
              </a>
              <a className="btn btn-outline" href="#equipes">
                Découvrir nos équipes
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="container">
          <h2 className="section-title">À propos de l'académie</h2>
          <p className="section-sub">
            KAF GLOBAL FOOT est une académie basée en Casamance, axée sur la
            formation technique, la préparation physique et l'éducation.
          </p>
        </section>

        <section id="programmes" className="container">
          <h2 className="section-title">Programmes professionnels</h2>
          <p className="section-sub">
            Parcours adaptés pour chaque âge et chaque objectif — découverte,
            développement, élite.
          </p>

          <div className="cards">
            <div className="card">
              <span className="badge">Formation Jeunes</span>
              <h3>Centre de formation U10–U18</h3>
              <p>Technique, tactique, discipline et valeurs collectives.</p>
            </div>

            <div className="card">
              <span className="badge">Élite</span>
              <h3>Programme Performance Pro</h3>
              <p>Analyse vidéo, suivi individuel et optimisation physique.</p>
            </div>

            <div className="card">
              <span className="badge">Stages</span>
              <h3>Stages &amp; Détections</h3>
              <p>Stages intensifs pendant les vacances avec rapport individuel.</p>
            </div>
          </div>
        </section>

        <section id="galerie" className="container">
          <h2 className="section-title">Galerie</h2>
          <p className="section-sub">
            Quelques images du stade et des entraînements de KAF GLOBAL FOOT.
          </p>

          <div className="gallery-grid">
            <img src="/gallery6.jpg" alt="KAF GLOBAL FOOT - galerie" />
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner container">
          <div>
            <strong>KAF GLOBAL FOOT</strong>
            <div style={{ opacity: 0.9 }}>Académie — Casamance</div>
          </div>

          <div className="footer-links">
            <a href="#about">À propos</a>
            <a href="#galerie">Galerie</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
