// pages/index.js
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>KAF Global Foot - Académie de football à Kafountine</title>
        <meta
          name="description"
          content="KAF Global Foot, académie de football à Kafountine (Casamance) : formation des jeunes, encadrement sérieux, valeurs et plaisir du jeu."
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
                  KAF Global Foot : révèle le talent des jeunes footballeurs
                </h1>
                <p className="hero-subtitle">
                  Académie de football à Kafountine (Casamance), dédiée à la
                  formation des jeunes dans un cadre sérieux, sécurisé et
                  convivial.
                </p>
                <div className="hero-actions">
                  <Link href="/inscription" className="btn">
                    Je pré-inscris mon enfant
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
                KAF Global Foot est une académie de football qui met le
                développement du jeune joueur au centre du projet. Nous
                travaillons la technique, l&apos;intelligence de jeu, le mental
                et les valeurs : respect, discipline, travail et esprit
                d&apos;équipe.
              </p>

              <div className="grid-3">
                <div className="card">
                  <h3>Encadrement</h3>
                  <p>
                    Coachs passionnés et expérimentés, avec une approche adaptée
                    à chaque âge. Exigence sur l&apos;attitude, mais toujours
                    dans la bienveillance.
                  </p>
                </div>
                <div className="card">
                  <h3>Méthodologie</h3>
                  <p>
                    Séances structurées avec ballon, travail de motricité pour
                    les plus jeunes, développement technique et tactique pour
                    les plus grands.
                  </p>
                </div>
                <div className="card">
                  <h3>Vision</h3>
                  <p>
                    Offrir une base solide aux jeunes, qu&apos;ils visent le
                    haut niveau ou qu&apos;ils veuillent simplement pratiquer
                    dans un bon cadre.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* PROGRAMM*
