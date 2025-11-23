import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>KAF GLOBAL FOOT — Académie de Football</title>
        <meta
          name="description"
          content="KAF GLOBAL FOOT - Académie de football en Casamance : formation, détection, stages et performance."
        />
      </Head>

      {/* HEADER */}
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
        {/* HERO */}
        <section className="hero">
          <div className="hero-inner">
            <h2>L&apos;élite du football, formée en Casamance</h2>
            <p>
              Encadrement professionnel, valeurs humaines et formation complète.
              KAF GLOBAL FOOT forme des joueurs techniques, intelligents et
              disciplinés.
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

        {/* À PROPOS */}
        <section id="about" className="container">
          <h2 className="section-title">À propos de l&apos;académie</h2>
          <p className="section-sub">
            KAF GLOBAL FOOT est une académie basée en Casamance. Nous plaçons
            la formation technique, la préparation physique et l&apos;éducation
            au centre du projet. Notre objectif : faire émerger des talents
            capables de réussir sur et en dehors du terrain.
          </p>
        </section>

        {/* PROGRAMMES */}
        <section id="programmes" className="container">
          <h2 className="section-title">Programmes</h2>
          <p className="section-sub">
            Des parcours adaptés à chaque âge : découverte, développement,
            compétition et élite.
          </p>

          <div className="cards">
            <div className="card">
              <span className="badge">Jeunes</span>
              <h3>Centre de formation U10–U18</h3>
              <p>
                Bases techniques, jeu collectif, discipline et respect des
                valeurs.
              </p>
            </div>

            <div className="card">
              <span className="badge">Élite</span>
              <h3>Programme Performance</h3>
              <p>
                Préparation physique spécifique, analyse vidéo et accompagnement
                individualisé.
              </p>
            </div>

            <div className="card">
              <span className="badge">Stages</span>
              <h3>Stages &amp; détections</h3>
              <p>
                Stages intensifs pendant les vacances, séances ciblées, rapport
                individuel.
              </p>
            </div>
          </div>
        </section>

        {/* ÉQUIPES */}
        <section id="equipes" className="container">
          <h2 className="section-title">Nos équipes</h2>
          <p className="section-sub">
            Une structure organisée par catégories pour suivre chaque joueur
            selon son âge et son potentiel.
          </p>

          <div className="teams-grid">
            <div className="card">
              <span className="badge">U10 – U12</span>
              <h3>École de foot</h3>
              <ul>
                <li>Motricité &amp; coordination</li>
                <li>Apprentissage par le jeu</li>
                <li>Découverte des postes</li>
              </ul>
            </div>

            <div className="card">
              <span className="badge">U13 – U15</span>
              <h3>Préformation</h3>
              <ul>
                <li>Technique avancée</li>
                <li>Organisation collective</li>
                <li>Introduction à la compétition</li>
              </ul>
            </div>

            <div className="card">
              <span className="badge">U16 – U18</span>
              <h3>Pré-élite</h3>
              <ul>
                <li>Préparation physique ciblée</li>
                <li>Analyse vidéo</li>
                <li>
                  Accompagnement scolaire &amp; orientation (à adapter plus tard)
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* INSCRIPTION avec DEBUG */}
        <section id="inscription" className="container">
          <h2 className="section-title">Inscription</h2>
          <p className="section-sub">
            Pré-inscrivez un joueur. Nous vous recontacterons pour finaliser le
            dossier et planifier une rencontre.
          </p>

          <form
            className="contact-box"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target;

              const data = {
                nom: form.nom.value,
                date_naissance: form.date_naissance.value,
                categorie: form.categorie.value,
                parent: form.parent.value,
                telephone: form.telephone.value,
                email: form.email.value,
                message: form.message.value,
              };

              try {
                const res = await fetch("/api/inscription", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(data),
                });

                const text = await res.text();

                if (!res.ok) {
                  alert(
                    "Erreur lors de l'envoi (code " +
                      res.status +
                      ") : " +
                      text
                  );
                  return;
                }

                alert(
                  "Inscription envoyée. Nous vous contacterons rapidement."
                );
                form.reset();
              } catch (err) {
                console.error(err);
                alert("Erreur réseau. Merci de réessayer.");
              }
            }}
          >
            <label>Nom complet du joueur</label>
            <input name="nom" required />

            <label>Date de naissance</label>
            <input type="date" name="date_naissance" required />

            <label>Catégorie</label>
            <select name="categorie" required>
              <option value="">Sélectionner</option>
              <option>U10</option>
              <option>U12</option>
              <option>U14</option>
              <option>U16</option>
              <option>U18</option>
              <option>Élite</option>
            </select>

            <label>Parent / Tuteur</label>
            <input name="parent" required />

            <label>Téléphone</label>
            <input name="telephone" required />

            <label>Email</label>
            <input type="email" name="email" />

            <label>Message</label>
            <textarea name="message" />

            <button
              className="btn btn-primary"
              type="submit"
              style={{ marginTop: 15 }}
            >
              Envoyer la demande
            </button>
          </form>
        </section>

        {/* GALERIE */}
        <section id="galerie" className="container">
          <h2 className="section-title">Galerie</h2>
          <p className="section-sub">
            Images du stade, des entraînements et de la vie de l&apos;académie.
          </p>

          <div className="gallery-grid">
            <img src="/gallery1.jpg" alt="KAF GLOBAL FOOT - galerie 1" />
            <img src="/gallery2.jpg" alt="KAF GLOBAL FOOT - galerie 2" />
            <img src="/gallery3.jpg" alt="KAF GLOBAL FOOT - galerie 3" />
            <img src="/gallery4.jpg" alt="KAF GLOBAL FOOT - galerie 4" />
            <img src="/gallery5.jpg" alt="KAF GLOBAL FOOT - galerie 5" />
            <img src="/gallery6.jpg" alt="KAF GLOBAL FOOT - galerie 6" />
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="container">
          <h2 className="section-title">Contact &amp; localisation</h2>

          <div className="contact-grid">
            <div className="contact-box">
              <h3>Coordonnées</h3>
              <p>
                <strong>Email :</strong> contact@kafglobalfoot.com
              </p>
              <p>
                <strong>Téléphone :</strong> +221 77 000 00 00
              </p>
              <p>
                <strong>Adresse :</strong> Centre d&apos;entraînement, Casamance
              </p>
            </div>

            <div className="contact-box">
              <h3>Envoyer un message</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Message envoyé (démo).");
                }}
              >
                <input placeholder="Nom" required />
                <input placeholder="Email" type="email" />
                <textarea placeholder="Votre message" required />
                <button
                  className="btn btn-primary"
                  type="submit"
                  style={{ marginTop: 12 }}
                >
                  Envoyer
                </button>
              </form>
            </div>
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
