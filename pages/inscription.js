// pages/inscription.js
import Head from "next/head";
import Link from "next/link";

export default function Inscription() {
  const siteUrl = "https://kafglobalfoot.com";
  const phone = "+221 783616382";
  const waLink = "https://wa.me/221783616382";
  const pdfLink = "/downloads/KAF_Global_Foot_Player_Form_Final.pdf";

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

      {/* TOPBAR */}
      <div className="topbar">
        <header className="site-header">
          <div className="site-header-inner">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src="/logo-kaf.svg" alt="Logo KAF Global Foot" className="site-logo" />
              <div className="site-title-block">
                <span className="site-title">KAF Global Foot</span>
                <span className="site-tagline">Pré-inscription · Académie</span>
              </div>
            </div>

            <nav className="site-nav">
              <Link href="/#apropos">À propos</Link>
              <Link href="/#programmes">Programmes</Link>
              <Link href="/#horaires">Horaires</Link>
              <Link href="/#formulaires">Formulaires</Link>
              <Link href="/#contact" className="site-nav-cta">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <section className="section" style={{ paddingTop: 28, paddingBottom: 26 }}>
          <div className="container">
            <div className="card" style={{ padding: 22 }}>
              <h1 style={{ marginTop: 0 }}>Formulaire de pré-inscription</h1>
              <p style={{ maxWidth: 900 }}>
                Remplis ce formulaire pour pré-inscrire un joueur. Ensuite, nous confirmons par téléphone/WhatsApp et
                nous expliquons la suite.
              </p>
              <div className="form-actions" style={{ marginTop: 10 }}>
                <a className="btn btn-secondary" href={waLink} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                <a className="btn btn-secondary" href={pdfLink} target="_blank" rel="noopener noreferrer">
                  Télécharger le PDF dossier
                </a>
              </div>
              <p style={{ marginTop: 12, marginBottom: 0 }}>
                Contact direct : <strong>{phone}</strong>
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* DARK MAIN */}
      <main className="dark-main">
        <section className="section">
          <div className="container">
            <div
              style={{
                display: "grid",
                gap: 16,
                gridTemplateColumns: "1fr",
              }}
            >
              {/* FORM */}
              <div className="form-card">
                <form method="POST" action="/api/inscription" className="form-grid">
                  <div className="form-field">
                    <label htmlFor="nom">Nom complet du joueur *</label>
                    <input id="nom" name="nom" type="text" placeholder="Ex : Diop Mamadou" required />
                    <p className="form-help">Nom + prénom.</p>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="age">Âge *</label>
                      <input id="age" name="age" type="number" min="10" max="25" placeholder="Ex : 17" required />
                    </div>
                    <div className="form-field">
                      <label htmlFor="poste">Poste principal</label>
                      <input id="poste" name="poste" type="text" placeholder="Ex : Milieu offensif, Gardien..." />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="nomParent">Nom du parent / tuteur (optionnel)</label>
                    <input id="nomParent" name="nomParent" type="text" placeholder="Ex : Ndiaye Awa (mère)" />
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
                      <p className="form-help">Nous vous contacterons sur ce numéro.</p>
                    </div>
                    <div className="form-field">
                      <label htmlFor="email">Adresse e-mail</label>
                      <input id="email" name="email" type="email" placeholder="Ex : contact@exemple.com" />
                    </div>
                  </div>

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
                      <label htmlFor="club">Club / école actuelle</label>
                      <input
                        id="club"
                        name="club"
                        type="text"
                        placeholder="Ex : ASC Kafountine, Lycée, non licencié..."
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="message">Informations complémentaires</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Expérience, disponibilités, liens vidéo, objectifs (club à l’étranger / camp)..."
                    />
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="btn btn-primary">
                      Envoyer la pré-inscription
                    </button>
                    <a className="btn btn-secondary" href={waLink} target="_blank" rel="noopener noreferrer">
                      WhatsApp
                    </a>
                  </div>

                  <p style={{ marginTop: 12 }}>
                    En envoyant ce formulaire, vous acceptez d’être contacté(e) par KAF Global Foot pour finaliser la
                    démarche.
                  </p>
                </form>
              </div>

              {/* BACK */}
              <div style={{ marginTop: 10 }}>
                <Link href="/" className="btn btn-secondary">
                  ← Retour à l’accueil
                </Link>
              </div>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <p>© 2025 KAF Global Foot. Tous droits réservés.</p>
          <p>Site développé avec Next.js &amp; déployé sur Vercel.</p>
        </footer>

        <a href={waLink} className="whatsapp-float" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </main>
    </>
  );
}
