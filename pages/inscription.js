// pages/inscription.js
import Head from "next/head";
import Link from "next/link";

export default function Inscription() {
  const siteUrl = "https://kafglobalfoot.com/inscription";

  return (
    <>
      <Head>
        <title>
          Pré-inscription | KAF Global Foot – Académie de football à Kafountine
        </title>
        <meta
          name="description"
          content="Formulaire de pré-inscription à KAF Global Foot, académie de football à Kafountine (Casamance) pour les joueurs de 14 à 23 ans."
        />
        <link rel="canonical" href={siteUrl} />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="page">
        <header className="navbar">
          <div className="container nav-content">
            <div className="logo">
              <img src="/logo-kaf.svg" alt="KAF Global Foot" />
              <span className="logo-text">KAF Global Foot</span>
            </div>
            <nav className="nav-links">
              <Link href="/">Accueil</Link>
              <a href="/#apropos">À propos</a>
              <a href="/#programmes">Programmes</a>
              <a href="/#horaires">Horaires</a>
              <a href="/#contact">Contact</a>
            </nav>
          </div>
        </header>

        <main>
          <section className="section section-alt">
            <div className="container">
              <h1 className="section-title">Formulaire de pré-inscription</h1>
              <p className="section-text">
                Ce formulaire permet de pré-inscrire un joueur à KAF Global
                Foot (académie de football à Kafountine). La pré-inscription ne
                remplace pas l&apos;inscription définitive : un échange avec
                l&apos;académie, une visite médicale et des documents
                complémentaires pourront être demandés.
              </p>

              <p className="section-text small" style={{ marginTop: "0.75rem" }}>
                Les entraînements sont ouverts aux joueurs de{" "}
                <strong>14 à 23 ans</strong>. Merci de remplir le formulaire le
                plus précisément possible.
              </p>

              <form
                action="https://formspree.io/f/xgvjeedq"
                method="POST"
                style={{ marginTop: "2rem" }}
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="Nouvelle pré-inscription KAF Global Foot"
                />
                <input type="hidden" name="_language" value="fr" />

                {/* Infos joueur */}
                <div className="card" style={{ marginBottom: "1.5rem" }}>
                  <h2 className="section-title" style={{ fontSize: "1.2rem" }}>
                    Informations du joueur
                  </h2>

                  <div style={{ marginTop: "1rem" }}>
                    <label htmlFor="joueur_nom" className="section-text small">
                      Nom et prénom du joueur
                    </label>
                    <input
                      id="joueur_nom"
                      name="joueur_nom_prenom"
                      type="text"
                      required
                      style={{
                        width: "100%",
                        padding: "0.55rem 0.75rem",
                        marginTop: "0.35rem",
                        borderRadius: "0.5rem",
                        border: "1px solid #d1d5db",
                      }}
                    />
                  </div>

                  <div style={{ marginTop: "1rem" }}>
                    <label
                      htmlFor="joueur_naissance"
                      className="section-text small"
                    >
                      Date ou année de naissance du joueur
                    </label>
                    <input
                      id="joueur_naissance"
                      name="joueur_date_naissance"
                      type="text"
                      placeholder="Exemple : 2008 ou 15/03/2008"
                      required
                      style={{
                        width: "100%",
                        padding: "0.55rem 0.75rem",
                        marginTop: "0.35rem",
                        borderRadius: "0.5rem",
                        border: "1px solid #d1d5db",
                      }}
                    />
                  </div>

                  <div style={{ marginTop: "1rem" }}>
                    <label
                      htmlFor="categorie_age"
                      className="section-text small"
                    >
                      Catégorie d&apos;âge (joueur)
                    </label>
                    <select
                      id="categorie_age"
                      name="categorie_age"
                      required
                      style={{
                        width: "100%",
                        padding: "0.55rem 0.75rem",
                        marginTop: "0.35rem",
                        borderRadius: "0.5rem",
                        border: "1px solid #d1d5db",
                        background: "#ffffff",
                      }}
                    >
                      <option value="">Sélectionner une catégorie</option>
                      <option value="Cadets U17 (14-16 ans)">
                        Cadets – U17 (14–16 ans)
                      </option>
                      <option value="Juniors U20 (17-20 ans)">
                        Juniors – U20 (17–20 ans)
                      </option>
                      <option value="Espoirs U23 (21-23 ans)">
                        Espoirs – U23 (21–23 ans)
                      </option>
                      <option value="A definir">
                        Je ne sais pas encore / à définir
                      </option>
                    </select>
                  </div>

                  <div style={{ marginTop: "1rem" }}>
                    <label
                      htmlFor="joueur_telephone"
                      className="section-text small"
                    >
                      Téléphone du joueur (facultatif)
                    </label>
                    <input
                      id="joueur_telephone"
                      name="joueur_telephone"
                      type="text"
                      placeholder="Si le joueur a son propre numéro"
                      style={{
                        width: "100%",
                        padding: "0.55rem 0.75rem",
                        marginTop: "0.35rem",
                        borderRadius: "0.5rem",
                        border: "1px solid #d1d5db",
                      }}
                    />
                  </div>
                </div>

                {/* Parent / tuteur */}
                <div className="card" style={{ marginBottom: "1.5rem" }}>
                  <h2 className="section-title" style={{ fontSize: "1.2rem" }}>
                    Parent / tuteur légal
                  </h2>

                  <div style={{ marginTop: "1rem" }}>
                    <label
                      htmlFor="parent_nom"
                      className="section-text small"
                    >
                      Nom et prénom du parent / tuteur
                    </label>
                    <input
                      id="parent_nom"
                      name="parent_nom_prenom"
                      type="text"
                      required
                      style={{
                        width: "100%",
                        padding: "0.55rem 0.75rem",
                        marginTop: "0.35rem",
                        borderRadius: "0.5rem",
                        border: "1px solid #d1d5db",
                      }}
                    />
                  </div>

                  <div style={{ marginTop: "1rem" }}>
                    <label
                      htmlFor="parent_telephone"
                      className="section-text small"
                    >
                      Téléphone du parent / tuteur
                    </label>
                    <input
                      id="parent_telephone"
                      name="parent_telephone"
                      type="text"
                      required
                      style={{
                        width: "100%",
                        padding: "0.55rem 0.75rem",
                        marginTop: "0.35rem",
                        borderRadius: "0.5rem",
                        border: "1px solid #d1d5db",
                      }}
                    />
                  </div>

                  <div style={{ marginTop: "1rem" }}>
                    <label
                      htmlFor="parent_email"
                      className="section-text small"
                    >
                      Email du parent / tuteur
                    </label>
                    <input
                      id="parent_email"
                      name="parent_email"
                      type="email"
                      required
                      style={{
                        width: "100%",
                        padding: "0.55rem 0.75rem",
                        marginTop: "0.35rem",
                        borderRadius: "0.5rem",
                        border: "1px solid #d1d5db",
                      }}
                    />
                  </div>
                </div>

                {/* Infos complémentaires */}
                <div className="card" style={{ marginBottom: "1.5rem" }}>
                  <h2 className="section-title" style={{ fontSize: "1.2rem" }}>
                    Informations complémentaires
                  </h2>

                  <div style={{ marginTop: "1rem" }}>
                    <label
                      htmlFor="message"
                      className="section-text small"
                    >
                      Message ou informations utiles (santé, niveau,
                      disponibilité…)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      style={{
                        width: "100%",
                        padding: "0.55rem 0.75rem",
                        marginTop: "0.35rem",
                        borderRadius: "0.5rem",
                        border: "1px solid #d1d5db",
                        resize: "vertical",
                      }}
                    ></textarea>
                  </div>

                  <div
                    style={{
                      marginTop: "1rem",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.5rem",
                    }}
                  >
                    <input
                      id="consentement"
                      name="consentement_parent"
                      type="checkbox"
                      required
                      style={{ marginTop: "0.25rem" }}
                    />
                    <label
                      htmlFor="consentement"
                      className="section-text small"
                    >
                      En envoyant ce formulaire, le parent / tuteur confirme
                      être d&apos;accord pour la participation du joueur aux
                      activités de KAF Global Foot, sous réserve de la visite
                      médicale et des documents à fournir.
                    </label>
                  </div>
                </div>

                {/* Bouton d'envoi */}
                <button type="submit" className="btn">
                  Envoyer la pré-inscription
                </button>
              </form>

              <p
                className="section-text small"
                style={{ marginTop: "1.5rem" }}
              >
                Vous pouvez aussi nous contacter directement par WhatsApp au{" "}
                <strong>+221 78 270 24 57</strong> ou par email à{" "}
                <a href="mailto:contact@kafglobalfoot.com">
                  contact@kafglobalfoot.com
                </a>
                .
              </p>

              <p className="section-text small" style={{ marginTop: "0.5rem" }}>
                Après réception du formulaire, l&apos;académie vous recontactera
                pour la suite (confirmation, documents, rendez-vous…).
              </p>

              <div style={{ marginTop: "1.5rem" }}>
                <Link href="/" className="btn btn-secondary">
                  ← Retour à la page d&apos;accueil
                </Link>
              </div>
            </div>
          </section>
        </main>

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
      </div>
    </>
  );
}
