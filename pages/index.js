import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>KAF Global Foot - Académie de Football</title>
        <meta
          name="description"
          content="KAF Global Foot - Académie de football pour jeunes talents. Entraînements encadrés, méthodologie moderne et ambiance familiale à Kafountine."
        />
      </Head>

      <div className="page">
        {/* NAVBAR */}
        <header className="navbar">
          <div className="container nav-content">
            <div className="logo">KAF Global Foot</div>
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

        {/* CONTENU */}
        <main>
          {/* HERO */}
          <section className="hero">
            <div className="container hero-content">
              <div className="hero-text">
                <h1>
                  KAF Global Foot : révèle le talent des jeunes{" "}
                  <span>footballeurs</span>
                </h1>
                <p>
                  Académie de football basée à Kafountine, dédiée à la formation
                  des jeunes, avec un encadrement sérieux, une méthodologie
                  moderne et un cadre sécurisé pour progresser tout en prenant
                  du plaisir.
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
                  <h2>Catégories KAF Global Foot</h2>
                  <ul>
                    <li>U8 (6–8 ans)</li>
                    <li>U10 (8–10 ans)</li>
                    <li>U12 (10–12 ans)</li>
                    <li>U14 &amp; plus</li>
                  </ul>
                  <p className="hero-note">
                    Garçons &amp; filles bienvenus, tous niveaux (débutants à
                    confirmés).
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* A PROPOS */}
          <section id="apropos" className="section">
            <div className="container">
              <h2 className="section-title">À propos de KAF Global Foot</h2>
              <p className="section-text">
                KAF Global Foot est une académie de football implantée à
                Kafountine. Notre objectif est d&apos;offrir aux jeunes un
                véritable cadre de formation, en développant la technique,
                l&apos;intelligence de jeu, le mental et les valeurs fortes :
                respect, discipline, travail et esprit d&apos;équipe.
              </p>
              <div className="cards">
                <div className="card">
                  <h3>Encadrement</h3>
                  <p>
                    Coachs passionnés et expérimentés, avec une approche adaptée
                    à chaque âge. Nous accompagnons les enfants avec
                    bienveillance tout en étant exigeants sur l&apos;attitude
                    et le sérieux.
                  </p>
                </div>
                <div className="card">
                  <h3>Méthodologie</h3>
                  <p>
                    Séances structurées avec ballon, travail de motricité pour
                    les plus jeunes, développement technique et tactique pour
                    les plus grands, le tout dans un climat positif et motivant.
                  </p>
                </div>
                <div className="card">
                  <h3>Vision</h3>
                  <p>
                    Offrir une vraie base de formation aux jeunes de la région,
                    qu&apos;ils visent le haut niveau ou qu&apos;ils souhaitent
                    simplement pratiquer le foot dans un bon cadre éducatif.
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
                <div className="card
