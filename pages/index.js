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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <div className="logo">KAF</div>
            <div className="brand-text">
              <h1>KAF GLOBAL FOOT</h1>
              <span>Académie — Casamance & Paix</span>
            </div>
          </div>

          <nav className="header-nav" aria-label="Main">
            <a href="#about">À propos</a>
            <a href="#programmes">Programmes</a>
            <a href="#equipes">Équipes</a>
            <a href="#inscription">Inscription</a>
            <a href="#galerie">Galerie</a>
            <a href="#staff">Staff</a>
            <a href="#actus">Actualités</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="header-cta">
            <a className="btn btn-primary" href="#inscription">Rejoindre</a>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-inner">
            <h2>L'élite du football, formée en Casamance</h2>
            <p>Encadrement professionnel, formation complète, discipline et valeurs humaines.</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#inscription">Inscrire un joueur</a>
              <a className="btn btn-outline" href="#equipes">Nos équipes</a>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="container">
          <h2 className="section-title">À propos</h2>
          <p className="section-sub">
            KAF GLOBAL FOOT est une académie basée en Casamance dédiée au développement des jeunes talents,
            à la formation technique et à la progression humaine par le sport.
          </p>
        </section>

        {/* PROGRAMMES */}
        <section id="programmes" className="container">
          <h2 className="section-title">Programmes professionnels</h2>
          <p className="section-sub">
            Des parcours adaptés pour découvrir, progresser ou atteindre le niveau élite.
          </p>

          <div className="cards">
            <div className="card">
              <span className="badge">Formation Jeunes</span>
              <h3>Centre de formation U10–U18</h3>
              <p>Développement technique, discipline et progression tactique.</p>
            </div>

            <div className="card">
              <span className="badge">Élite</span>
              <h3>Performance & Analyse</h3>
              <p>Suivi individualisé, préparation physique, objectifs professionnels.</p>
            </div>

            <div className="card">
              <span className="badge">Stages</span>
              <h3>Stages & Détections</h3>
              <p>Sessions intensives avec rapport individuel et progression rapide.</p>
            </div>
          </div>
        </section>

        {/* EQUIPES */}
        <section id="equipes" className="container">
          <h2 className="section-title">Nos équipes</h2>
          <p className="section-sub">Des catégories structurées pour accompagner chaque étape de la formation.</p>

          <div className="cards">
            <div className="card">
              <span className="badge">U10 – U12</span>
              <h3>École de foot</h3>
              <ul>
                <li>Motricité & coordination</li>
                <li>Apprentissage par le jeu</li>
                <li>Découverte technique</li>
              </ul>
            </div>

            <div className="card">
              <span className="badge">U13 – U15</span>
              <h3>Préformation</h3>
              <ul>
                <li>Technique avancée</li>
                <li>Travail tactique</li>
                <li>Esprit collectif</li>
              </ul>
            </div>

            <div className="card">
              <span className="badge">U16 – U18</span>
              <h3>Pré-élite</h3>
              <u
