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
                  Garçons & filles · 6 à 18 ans · Tous niveaux
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

          {/* PROGRAMMES */}
          <section id="programmes" className="section">
            <div className="container">
              <h2 className="section-title">Nos programmes</h2>

              <div className="grid-2">
                <div className="card">
                  <h3>École de foot</h3>
                  <p>Pour les plus jeunes (U8 à U12).</p>
                  <ul className="list">
                    <li>2 séances par semaine</li>
                    <li>Travail technique, coordination, motricité</li>
                    <li>Jeux, mini-matchs et tournois internes</li>
                  </ul>
                </div>
                <div className="card">
                  <h3>Groupe performance</h3>
                  <p>Pour les joueurs les plus motivés.</p>
                  <ul className="list">
                    <li>3 séances par semaine</li>
                    <li>Préparation athlétique & mentale</li>
                    <li>Accompagnement pour détections & essais</li>
                  </ul>
                </div>
              </div>

              <div className="categories">
                <h3>Catégories KAF Global Foot</h3>
                <div className="chip-row">
                  <span className="chip">U8 (6–8 ans)</span>
                  <span className="chip">U10 (8–10 ans)</span>
                  <span className="chip">U12 (10–12 ans)</span>
                  <span className="chip">U14 & plus</span>
                </div>
                <p className="section-text small">
                  Garçons & filles bienvenus, pour tous niveaux (débutants à
                  confirmés).
                </p>
              </div>
            </div>
          </section>

          {/* HORAIRES & LIEU */}
          <section id="horaires" className="section section-alt">
            <div className="container">
              <h2 className="section-title">
                Horaires & lieu d&apos;entraînement
              </h2>

              <div className="grid-2">
                <div className="card">
                  <h3>Horaires KAF Global Foot</h3>
                  <ul className="list">
                    <li>Mercredi : 16h00 – 18h00</li>
                    <li>Samedi : 9h30 – 11h30</li>
                  </ul>
                  <p className="section-text small">
                    Les horaires peuvent légèrement varier en fonction du
                    planning et des compétitions. En cas de changement, les
                    joueurs et les parents sont informés à l’avance.
                  </p>
                </div>

                <div className="card">
                  <h3>Terrain d&apos;entraînement</h3>
                  <p>
                    <strong>Terrain du Lycée de Kafountine</strong>
                    <br />
                    Crewane, Kafountine, département de Bignona, région de
                    Ziguinchor (Casamance).
                  </p>
                  <p className="section-text small">
                    Une carte Google Maps sera bientôt disponible ici pour vous
                    aider à trouver facilement l’emplacement du terrain.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* GALERIE PHOTOS */}
          <section id="galerie" className="section section-alt">
            <div className="container">
              <h2 className="section-title">Photos de KAF Global Foot</h2>
              <p className="section-text">
                Quelques images de nos séances d&apos;entraînement à
                Kafountine : travail, plaisir et esprit d&apos;équipe.
              </p>

              <div className="gallery-grid">
                <figure className="gallery-item">
                  <img
                    src="/gallery1.jpg"
                    alt="Séance d'entraînement KAF Global Foot"
                  />
                </figure>
                <figure className="gallery-item">
                  <img
                    src="/gallery2.jpg"
                    alt="Jeunes joueurs de KAF Global Foot"
                  />
                </figure>
                <figure className="gallery-item">
                  <img
                    src="/gallery3.jpg"
                    alt="Travail technique à l'entraînement"
                  />
                </figure>
                <figure className="gallery-item">
                  <img
                    src="/gallery4.jpg"
                    alt="Photo de groupe KAF Global Foot"
                  />
                </figure>
                <figure className="gallery-item">
                  <img src="/gallery5.jpg" alt="Match à l'entraînement" />
                </figure>
                <figure className="gallery-item">
                  <img
                    src="/gallery6.jpg"
                    alt="Ambiance à l'académie KAF Global Foot"
                  />
                </figure>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="section">
            <div className="container">
              <h2 className="section-title">Contact KAF Global Foot</h2>
              <p className="section-text">
                Pour toute question (inscriptions, horaires, tarifs,
                partenariats), contacte-nous :
              </p>
              <ul className="list">
                <li>
                  <strong>Téléphone / WhatsApp :</strong> +221 78 270 24 57
                </li>
                <li>
                  <strong>Email :</strong>{" "}
                  <a href="mailto:kafglobalfoot@gmail.com">
                    kafglobalfoot@gmail.com
                  </a>
                </li>
              </ul>

              <div style={{ marginTop: "1.5rem" }}>
                <Link href="/inscription" className="btn">
                  Aller au formulaire d&apos;inscription
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container footer-content">
            <p>
              © {new Date().getFullYear()} KAF Global Foot. Tous droits
              réservés.
            </p>
            <p className="footer-meta">
              Site développé avec Next.js &amp; déployé sur Vercel.
            </p>
          </div>
        </footer>

        {/* BOUTON WHATSAPP FLOTTANT */}
        <a
          href="https://wa.me/221782702457"
          target="_blank"
          rel="noreferrer"
          style={{
            position: "fixed",
            right: "1.2rem",
            bottom: "1.2rem",
            zIndex: 9999,
            padding: "0.75rem 1.1rem",
            borderRadius: "9999px",
            background: "#16a34a",
            color: "#ffffff",
            fontWeight: 600,
            fontSize: "0.95rem",
            textDecoration: "none",
            boxShadow: "0 12px 30px rgba(22, 163, 74, 0.6)",
          }}
        >
          WhatsApp
        </a>
      </div>
    </>
  );
}
