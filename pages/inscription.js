import Head from "next/head";
import Link from "next/link";

export default function Inscription() {
  const siteUrl = "https://kafglobalfoot.com";

  return (
    <>
      <Head>
        <title>Pré-inscription – KAF Global Foot</title>
        <meta
          name="description"
          content="Formulaire de pré-inscription à l'académie KAF Global Foot à Kafountine (Casamance, Sénégal)."
        />
        <link rel="canonical" href={`${siteUrl}/inscription`} />
      </Head>

      <div className="page">
        {/* HEADER */}
        <header className="site-header">
          <div className="site-header-inner">
            <div className="site-logo">KAF Global Foot</div>
            <nav className="site-nav">
              <Link href="/#apropos">À propos</Link>
              <Link href="/#programmes">Programmes</Link>
              <Link href="/#horaires">Horaires</Link>
              <Link href="/#photos">Photos</Link>
              <Link href="/#contact">Contact</Link>
            </nav>
            <div className="site-actions">
              <Link href="/inscription" className="btn-inscription">
                Inscription
              </Link>
            </div>
          </div>
        </header>

        {/* CONTENU PRINCIPAL */}
        <main className="site-main">
          <section className="form-section">
            <h1>Formulaire de pré-inscription</h1>
            <p className="form-intro">
              Merci de remplir ce formulaire pour pré-inscrire un joueur à KAF
              Global Foot. Nous vous contacterons ensuite par téléphone ou par
              e-mail pour confirmer les informations et expliquer la suite.
            </p>

            {/* BLOC : DÉJÀ INSCRIT */}
            <div className="form-card" style={{ marginBottom: 18 }}>
              <h2 style={{ marginTop: 0 }}>Déjà inscrit ?</h2>
              <p style={{ marginBottom: 12 }}>
                Si le joueur est déjà inscrit, téléchargez et remplissez le
                formulaire complet pour constituer un dossier (club à
                l&apos;étranger / camp d&apos;entraînement).
              </p>

              <a
                href="/downloads/KAF_Global_Foot_Player_Form_Final.pdf"
                className="btn-principal"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", textDecoration: "none" }}
              >
                Télécharger le formulaire joueur (PDF)
              </a>

              <p className="form-small-note" style={{ marginTop: 10 }}>
                Conseil : préparez une photo d&apos;identité, une pièce
                d&apos;identité/passeport (si disponible) et un lien vidéo.
              </p>

              <p className="form-small-note" style={{ marginTop: 8 }}>
                <strong>Protection des données :</strong> les informations
                transmises sont traitées de manière confidentielle par KAF
                Global Foot, uniquement pour constituer et gérer le dossier du
                joueur (placement en club à l&apos;étranger, stages/camps). Elles
                peuvent être communiquées à des clubs, agents ou organisateurs
                de camps <strong>uniquement avec votre accord</strong>. Vous
                pouvez demander la modification ou la suppression de vos données
                à tout moment via <strong>contact@kafglobalfoot.com</strong>.
              </p>
            </div>

            <div className="form-card">
              <form method="POST" action="/api/inscription" className="form-grid">
                {/* Identité du joueur */}
                <div className="form-field">
                  <label htmlFor="nom">Nom complet du joueur *</label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    placeholder="Ex : Diop Mamadou"
                    required
                  />
                  <p className="form-help">
                    Indiquez le nom et le prénom du joueur.
                  </p>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="age">Âge *</label>
                    <input
                      id="age"
                      name="age"
                      type="number"
                      min="10"
                      max="25"
                      placeholder="Ex : 17"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="poste">Poste principal</label>
                    <input
                      id="poste"
                      name="poste"
                      type="text"
                      placeholder="Ex : Milieu offensif, Gardien..."
                    />
                  </div>
                </div>

                {/* Coordonnées du parent / tuteur */}
                <div className="form-field">
                  <label htmlFor="nomParent">
                    Nom du parent / tuteur (optionnel)
                  </label>
                  <input
                    id="nomParent"
                    name="nomParent"
                    type="text"
                    placeholder="Ex : Ndiaye Awa (mère)"
                  />
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="telephone">Téléphone / WhatsApp *</label>
                    <input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      placeholder="Ex : +221 783616382"
                      required
                    />
                    <p className="form-help">
                      Nous vous contacterons sur ce numéro pour la suite.
                    </p>
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Adresse e-mail</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Ex : contact@exemple.com"
                    />
                  </div>
                </div>

                {/* Niveau / infos sportives */}
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="niveau">Niveau actuel *</label>
                    <select id="niveau" name="niveau" required>
                      <option value="">Sélectionner un niveau</option>
                      <option value="debutant">Débutant</option>
                      <option value="intermediaire">Intermédiaire</option>
                      <option value="avance">Avancé / Compétition</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label htmlFor="club">
                      Club ou école de football actuelle
                    </label>
                    <input
                      id="club"
                      name="club"
                      type="text"
                      placeholder="Ex : ASC Kafountine, Lycée, non licencié..."
                    />
                  </div>
                </div>

                {/* Message libre */}
                <div className="form-field">
                  <label htmlFor="message">
                    Informations complémentaires (optionnel)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Précisez par exemple la motivation du joueur, son expérience, ses disponibilités..."
                  ></textarea>
                </div>

                {/* Bouton d'envoi */}
                <div className="form-actions">
                  <button type="submit" className="btn-principal form-submit">
                    Envoyer la pré-inscription
                  </button>
                  <p className="form-small-note">
                    En envoyant ce formulaire, vous acceptez d&apos;être
                    contacté(e) par KAF Global Foot pour finaliser l&apos;
                    inscription.
                  </p>
                </div>
              </form>
            </div>

            <p className="form-back-home">
              <Link href="/">← Retour à la page d&apos;accueil</Link>
            </p>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="site-footer">
          <p>© 2025 KAF Global Foot. Tous droits réservés.</p>
          <p>Site développé avec Next.js &amp; déployé sur Vercel.</p>
          <p>
            <a href="/confidentialite" style={{ textDecoration: "underline" }}>
              Politique de confidentialité
            </a>
          </p>
        </footer>

        {/* BOUTON WHATSAPP FLOTTANT */}
        <a
          href="https://wa.me/221783616382"
          className="whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 WhatsApp
        </a>
      </div>
    </>
  );
}
