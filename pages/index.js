import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>KAF GLOBAL FOOT — Académie Professionnelle</title>
        <meta
          name="description"
          content="Académie professionnelle de football KAF GLOBAL FOOT — formation jeunes, performance élite, stages et détection."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="page">
        <header>
          <div className="brand">
            <div className="logo">KAF</div>
            <div className="brand-text">
              <h1>KAF GLOBAL FOOT</h1>
              <span>Académie Professionnelle de Football</span>
            </div>
          </div>
          <div className="header-cta">
            <a href="#inscription">Rejoindre l&apos;académie</a>
          </div>
        </header>

        <nav>
          <a href="#about">À propos</a>
          <a href="#programmes">Programmes</a>
          <a href="#equipes">Équipes</a>
          <a href="#inscription">Inscription</a>
          <a href="#galerie">Galerie</a>
          <a href="#staff">Staff</a>
          <a href="#sponsors">Sponsors</a>
          <a href="#actus">Actualités</a>
          <a href="#contact">Contact</a>
        </nav>

        <section className="hero">
          <div className="hero-inner">
            <h2>L&apos;élite du football, formée ici</h2>
            <p>
              Encadrement professionnel, suivi individuel, méthodologie moderne.
              KAF GLOBAL FOOT prépare la nouvelle génération de joueurs pour le
              haut niveau.
            </p>
            <div className="hero-actions">
              <a href="#inscription" className="btn btn-primary">
                Inscrire un joueur
              </a>
              <a href="#equipes" className="btn btn-ghost">
                Découvrir nos équipes
              </a>
            </div>
          </div>
        </section>

        <section id="about">
          <h2 className="section-title">À propos de l&apos;académie</h2>
          <p className="section-intro">
            KAF GLOBAL FOOT est une académie structurée autour d&apos;un projet
            clair : former des joueurs complets, capables d&apos;évoluer dans
            les meilleurs championnats. Nous combinons entraînement technique,
            préparation physique, travail mental et suivi scolaire.
          </p>
        </section>

        <section id="programmes">
          <h2 className="section-title">Programmes professionnels</h2>
          <p className="section-intro">
            Des parcours adaptés à chaque profil : découverte, développement,
            élite.
          </p>
          <div className="cards">
            <div className="card">
              <span className="badge">Formation Jeunes</span>
              <h3>Centre de formation U10–U18</h3>
              <p>
                Cycle complet de formation : technique, tactique, intelligence
                de jeu, discipline et valeurs collectives.
              </p>
              <p className="program-meta">
                3 à 5 séances par semaine • Matchs officiels &amp; tournois
              </p>
            </div>
            <div className="card">
              <span className="badge">Élite</span>
              <h3>Programme Performance Pro</h3>
              <p>
                Préparation avancée pour joueurs visant un centre de formation
                pro ou un contrat à l&apos;étranger.
              </p>
              <p className="program-meta">
                Analyse vidéo • Suivi individuel • Performance physique
              </p>
            </div>
            <div className="card">
              <span className="badge">Camps &amp; Stages</span>
              <h3>Stages vacances &amp; détections</h3>
              <p>
                Stages intensifs pendant les vacances avec détection de talents
                et rapports personnalisés.
              </p>
              <p className="program-meta">
                Ouvert à tous niveaux • Groupes limités
              </p>
            </div>
          </div>
        </section>

        <section id="equipes">
          <h2 className="section-title">Nos équipes</h2>
          <p className="section-intro">
            Une structure par catégories pour encadrer chaque joueur dans un
            environnement adapté à son âge et à son potentiel.
          </p>
          <div className="teams-grid">
            <div className="card team-card">
              <span className="badge">U10 – U12</span>
              <h3>École de foot</h3>
              <ul>
                <li>Apprentissage par le jeu</li>
                <li>Travail de motricité &amp; coordination</li>
                <li>Introduction aux bases tactiques</li>
              </ul>
            </div>
            <div className="card team-card">
              <span className="badge">U13 – U15</span>
              <h3>Préformation</h3>
              <ul>
                <li>Développement technique avancé</li>
                <li>Travail tactique collectif</li>
                <li>Préparation aux compétitions</li>
              </ul>
            </div>
            <div className="card team-card">
              <span className="badge">U16 – U18</span>
              <h3>Pré-élite</h3>
              <ul>
                <li>Préparation physique structurée</li>
                <li>Analyse vidéo des matchs</li>
                <li>Accompagnement vers le haut niveau</li>
              </ul>
            </div>
            <div className="card team-card">
              <span className="badge">Élite</span>
              <h3>Groupe performance</h3>
              <ul>
                <li>Objectif : détection &amp; contrats</li>
                <li>Programme individualisé</li>
                <li>Tests et bilans réguliers</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="inscription">
          <h2 className="section-title">Inscription à KAF GLOBAL FOOT</h2>
          <p className="section-intro">
            Complétez ce formulaire pour pré-inscrire un joueur. Notre équipe
            vous contactera pour finaliser le dossier.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Formulaire soumis (démo). Connectez-le ensuite à un backend."
              );
            }}
          >
            <div>
              <label htmlFor="nom">Nom complet du joueur</label>
              <input id="nom" type="text" name="nom" required />
            </div>
            <div>
              <label htmlFor="naissance">Date de naissance</label>
              <input id="naissance" type="date" name="naissance" required />
            </div>
            <div>
              <label htmlFor="categorie">Catégorie souhaitée</label>
              <select id="categorie" name="categorie" required>
                <option value="">Sélectionner une catégorie</option>
                <option>U10</option>
                <option>U12</option>
                <option>U14</option>
                <option>U16</option>
                <option>U18</option>
                <option>Élite</option>
              </select>
            </div>
            <div>
              <label htmlFor="parent">Nom du parent / tuteur</label>
              <input id="parent" type="text" name="parent" required />
            </div>
            <div>
              <label htmlFor="telephone">Téléphone</label>
              <input
                id="telephone"
                type="tel"
                name="telephone"
                pattern="[0-9\s+]{6,}"
                required
              />
              <small>Exemple : +221 77 000 00 00</small>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" />
            </div>
            <div>
              <label htmlFor="message">Message / Profil du joueur</label>
              <textarea
                id="message"
                name="message"
                placeholder="Poste, club actuel, niveau, particularités..."
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Envoyer la demande d&apos;inscription
            </button>
          </form>
        </section>

        <section id="galerie">
          <h2 className="section-title">Galerie</h2>
          <p className="section-intro">
            Entraînements, matchs, stages : KAF GLOBAL FOOT en images.
          </p>
          <div className="gallery-grid">
            <img
              src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=1000&q=80"
              alt="Match de football"
            />
            <img
              src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1000&q=80"
              alt="Entraînement"
            />
            <img
              src="https://images.unsplash.com/photo-1509805225007-73e8ba4b5be8?auto=format&fit=crop&w=1000&q=80"
              alt="Terrain de football"
            />
          </div>
        </section>

        <section id="staff">
          <h2 className="section-title">Staff technique</h2>
          <div className="cards">
            <div className="card">
              <div className="staff-role">Coach principal</div>
              <div className="staff-name">Nom &amp; Prénom</div>
              <p>
                Diplôme UEFA / Licence pro. Responsable du projet sportif global
                de l&apos;académie.
              </p>
            </div>
            <div className="card">
              <div className="staff-role">Préparateur physique</div>
              <div className="staff-name">Nom &amp; Prénom</div>
              <p>
                Spécialiste de la performance, prévention des blessures,
                planifications de charges.
              </p>
            </div>
            <div className="card">
              <div className="staff-role">Entraîneur des gardiens</div>
              <div className="staff-name">Nom &amp; Prénom</div>
              <p>
                Programme spécifique gardiens : placements, réflexes, jeu au
                pied, leadership défensif.
              </p>
            </div>
            <div className="card">
              <div className="staff-role">Analyste vidéo</div>
              <div className="staff-name">Nom &amp; Prénom</div>
              <p>
                Analyse des matchs, rapport individuel, préparation des séances
                selon les besoins.
              </p>
            </div>
          </div>
        </section>

        <section id="sponsors">
          <h2 className="section-title">Sponsors &amp; partenaires</h2>
          <p className="section-intro">
            KAF GLOBAL FOOT est ouvert aux collaborations avec des marques,
            entreprises et institutions engagées dans le développement du sport.
          </p>
          <div className="sponsors-row">
            <div className="sponsor">Sponsor Principal</div>
            <div className="sponsor">Partenaire Technique</div>
            <div className="sponsor">Partenaire Transport</div>
            <div className="sponsor">Partenaire Événementiel</div>
          </div>
        </section>

        <section id="actus">
          <h2 className="section-title">Actualités de l&apos;académie</h2>
          <p className="section-intro">
            Dernières informations, résultats, détections et annonces
            officielles.
          </p>
          <div className="news-grid">
            <div className="card news-item">
              <div className="news-meta">Annonce • Saison</div>
              <h3>Lancement de la nouvelle saison sportive</h3>
              <p>
                Ouverture des inscriptions pour toutes les catégories. Séances
                d&apos;essai organisées sur rendez-vous.
              </p>
            </div>
            <div className="card news-item">
              <div className="news-meta">Résultats</div>
              <h3>Bon début pour nos équipes jeunes</h3>
              <p>
                Les catégories U14 et U16 enchaînent les bons résultats avec un
                jeu porté vers l&apos;offensive.
              </p>
            </div>
            <div className="card news-item">
              <div className="news-meta">Détection</div>
              <h3>Organisation d&apos;un stage de détection</h3>
              <p>
                Un stage intensif sera organisé pendant les vacances, avec
                détection de nouveaux talents.
              </p>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2 className="section-title">Contact &amp; localisation</h2>
          <div className="contact-grid">
            <div className="contact-box">
              <h3>Coordonnées</h3>
              <p>
                <strong>Email :</strong> contact@kafglobalfoot.com
              </p>
              <p>
                <strong>Téléphone :</strong> +00 00 00 00 00
              </p>
              <p>
                <strong>Adresse :</strong> À compléter — Terrain / Centre
                d&apos;entraînement KAF GLOBAL FOOT
              </p>
              <p
                style={{
                  marginTop: 8,
                  fontSize: "0.85rem",
                  opacity: 0.8,
                }}
              >
                (Remplacez ces informations par vos coordonnées réelles.)
              </p>
            </div>
            <div className="contact-box">
              <h3>Formulaire de contact rapide</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(
                    "Message envoyé (démo). Connectez-le ensuite à un backend/email."
                  );
                }}
              >
                <input type="text" placeholder="Nom" required />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Votre message" required />
                <button type="submit" className="btn btn-primary">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </section>

        <footer>
          © 2025 KAF GLOBAL FOOT — Académie Professionnelle de Football. Tous
          droits réservés.
          <br />
          Site vitrine prêt à évoluer (blog, espace joueurs, etc.).
        </footer>
      </div>

      <style jsx global>{`
        .page {
          min-height: 100vh;
        }

        header {
          background: var(--primary);
          color: white;
          padding: 18px 20px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 2px solid var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1rem;
          letter-spacing: 1px;
          background: radial-gradient(circle at 30% 30%, #1f6fb2, #071220);
          color: white;
        }

        .brand-text h1 {
          font-size: 1.4rem;
          letter-spacing: 1px;
        }

        .brand-text span {
          font-size: 0.85rem;
          opacity: 0.8;
        }

        .header-cta a {
          padding: 8px 16px;
          border-radius: 999px;
          border: 1px solid var(--accent);
          color: white;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
        }

        nav {
          position: sticky;
          top: 0;
          background: var(--secondary);
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 22px;
          padding: 10px 16px;
          z-index: 1000;
        }

        nav a {
          color: white;
          font-weight: 500;
          text-decoration: none;
          font-size: 0.95rem;
          position: relative;
          padding-bottom: 3px;
          transition: 0.3s;
        }

        nav a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background: var(--accent);
          transition: 0.25s;
        }

        nav a:hover {
          color: var(--accent);
        }
        nav a:hover::after {
          width: 100%;
        }

        .hero {
          background: url("https://images.unsplash.com/photo-1518081461904-9d8c2b2f9b9b?auto=format&fit=crop&w=1600&q=80")
            center / cover;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 0 20px;
          position: relative;
        }

        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.65),
            rgba(0, 0, 0, 0.3)
          );
        }

        .hero-inner {
          position: relative;
          max-width: 720px;
        }

        .hero h2 {
          font-size: 2.3rem;
          margin-bottom: 12px;
        }

        .hero p {
          font-size: 1rem;
          margin-bottom: 20px;
        }

        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 10px 20px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          text-decoration: none;
          font-size: 0.95rem;
        }

        .btn-primary {
          background: var(--accent);
          color: white;
        }
        .btn-ghost {
          background: rgba(255, 255, 255, 0.1);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.4);
        }

        section {
          padding: 55px 18px;
          max-width: 1200px;
          margin: auto;
        }

        h2.section-title {
          font-size: 2rem;
          text-align: center;
          margin-bottom: 35px;
          color: var(--primary);
        }

        .section-intro {
          max-width: 780px;
          text-align: center;
          margin: 0 auto 35px;
          font-size: 0.98rem;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 22px;
        }

        .card {
          background: white;
          border-radius: 16px;
          padding: 22px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: 0.25s;
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        }

        .badge {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 999px;
          background: var(--accent-soft);
          color: var(--secondary);
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 6px;
        }

        .program-meta {
          font-size: 0.8rem;
          opacity: 0.8;
          margin-top: 10px;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 14px;
          max-width: 480px;
          margin: 0 auto;
          background: white;
          padding: 22px;
          border-radius: 16px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
        }

        label {
          font-size: 0.9rem;
          font-weight: 600;
        }

        input,
        select,
        textarea {
          padding: 11px 12px;
          border-radius: 8px;
          border: 1px solid #d0d0d0;
          font-size: 0.95rem;
          width: 100%;
        }

        textarea {
          resize: vertical;
          min-height: 80px;
        }

        form small {
          font-size: 0.75rem;
          opacity: 0.8;
        }

        .gallery-grid img {
          width: 100%;
          border-radius: 14px;
          display: block;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 18px;
        }

        .staff-role {
          font-size: 0.85rem;
          opacity: 0.8;
          margin-bottom: 6px;
        }
        .staff-name {
          font-weight: 700;
          margin-bottom: 4px;
        }

        .teams-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 20px;
        }

        .team-card h3 {
          margin-bottom: 4px;
        }
        .team-card ul {
          padding-left: 18px;
          margin-top: 8px;
          font-size: 0.85rem;
        }

        .sponsors-row {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          justify-content: center;
        }

        .sponsor {
          background: white;
          border-radius: 999px;
          padding: 10px 22px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 22px;
        }

        .news-item h3 {
          margin-bottom: 6px;
        }
        .news-meta {
          font-size: 0.8rem;
          opacity: 0.7;
          margin-bottom: 8px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 24px;
          align-items: flex-start;
        }

        .contact-box {
          background: white;
          border-radius: 16px;
          padding: 18px 20px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
          font-size: 0.95rem;
        }

        footer {
          background: var(--primary);
          color: white;
          text-align: center;
          padding: 26px 16px;
          margin-top: 28px;
          font-size: 0.85rem;
        }

        @media (max-width: 768px) {
          header {
            justify-content: center;
            text-align: center;
          }
          .header-cta {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .hero h2 {
            font-size: 1.8rem;
          }
          .contact-grid {
            grid-template-columns: 1fr;
          }
          nav {
            gap: 14px;
          }
        }
      `}</style>
    </>
  );
}
