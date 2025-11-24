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
                    <li>Préparation athlétique &amp; mentale</li>
                    <li>Accompagnement pour détections &amp; essais</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* HORAIRES / LIEU */}
          <section id="horaires" className="section">
            <div className="container">
              <h2 className="section-title">
                Horaires &amp; lieu d&apos;entraînement
              </h2>
              <div className="grid-2">
                <div>
                  <h3>Horaires KAF Global Foot</h3>
                  <ul className="list">
                    <li>
                      <strong>Mercredi :</strong> 16h00 – 18h00
                    </li>
                    <li>
                      <strong>Samedi :</strong> 9h30 – 11h30
                    </li>
                  </ul>
                  <p className="section-text small">
                    Ces horaires peuvent évoluer en fonction des catégories et
                    de la saison. Contacte-nous pour confirmer les créneaux de
                    ton enfant.
                  </p>
                </div>
                <div>
                  <h3>Terrain d&apos;entraînement</h3>
                  <p>
                    Terrain du Lycée de Kafountine CREWANE KAFOUNTINE,
                    Bignona, Ziguinchor.
                  </p>
                  <p className="section-text small">
                    Entraînements à Kafountine, dans la région de Ziguinchor.
                    Un accès facile pour les jeunes de la zone et des
                    alentours.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* BLOC INSCRIPTION */}
          <section id="inscription" className="section section-accent">
            <div className="container cta-banner">
              <div>
                <h2>Prêt à inscrire ton enfant à KAF Global Foot ?</h2>
                <p>
                  Clique sur le bouton ci-dessous pour remplir le formulaire
                  de pré-inscription. Nous te recontacterons rapidement pour les
                  détails (tarifs, documents, planning).
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
              <h2 className="section-title">Contact KAF Global Foot</h2>
              <div className="grid-2">
                <div>
                  <p className="section-text">
                    Pour toute question (inscriptions, horaires, tarifs,
                    partenariats), contacte-nous :
                  </p>
                  <ul className="list">
                    <li>
                      <strong>Téléphone :</strong> +221 78 270 24 57
                    </li>
                    <li>
                      <strong>WhatsApp :</strong>{" "}
                      <a
                        href="https://wa.me/221782702457"
                        target="_blank"
                        rel="noreferrer"
                      >
                        +221 78 270 24 57
                      </a>
                    </li>
                    <li>
                      <strong>Email :</strong>{" "}
                      <a href="mailto:kafglobalfoot@gmail.com">
                        kafglobalfoot@gmail.com
                      </a>
                    </li>
                  </ul>
                  <p
                    className="section-text small"
                    style={{ marginTop: "0.5rem" }}
                  >
                    N&apos;hésite pas à nous écrire ou à nous envoyer un vocal
                    sur WhatsApp pour toute demande d&apos;information.
                  </p>
                </div>
                <div>
                  <p className="section-text small">
                    Bientôt, tu pourras retrouver ici nos liens vers les réseaux
                    sociaux (Instagram, Facebook, TikTok, YouTube) pour suivre
                    la vie de l&apos;académie : matchs, entraînements, stages,
                    et moments forts.
                  </p>
                </div>
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
            <p className="footer-small">
              Site développé avec Next.js &amp; déployé sur Vercel.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
