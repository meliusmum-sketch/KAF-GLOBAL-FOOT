// pages/sign-up.js
import Head from "next/head";
import Link from "next/link";

export default function SignUp() {
  const siteUrl = "https://kafglobalfoot.com";
  const phone = "+221 783616382";
  const waLink = "https://wa.me/221783616382";
  const pdfLink = "/downloads/KAF_Global_Foot_Player_Form_Final.pdf";

  return (
    <>
      <Head>
        <title>Dossier joueur – KAF Global Foot</title>
        <meta
          name="description"
          content="Formulaire dossier joueur KAF Global Foot : informations personnelles et sportives pour faciliter club à l’étranger ou camp d’entraînement."
        />
        <link rel="canonical" href={`${siteUrl}/sign-up`} />
      </Head>

      <div className="topbar">
        <header className="site-header">
          <div className="site-header-inner">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src="/logo-kaf.svg" alt="Logo KAF Global Foot" className="site-logo" />
              <div className="site-title-block">
                <span className="site-title">KAF Global Foot</span>
                <span className="site-tagline">Dossier joueur · International</span>
              </div>
            </div>

            <nav className="site-nav">
              <Link href="/">Accueil</Link>
              <Link href="/inscription" className="site-nav-cta">
                Inscription
              </Link>
            </nav>
          </div>
        </header>

        <section className="section" style={{ paddingTop: 22, paddingBottom: 22 }}>
          <div className="container">
            <div className="card" style={{ padding: 18 }}>
              <h1 style={{ marginTop: 0 }}>Dossier joueur</h1>
              <p style={{ maxWidth: 900, color: "rgba(255,255,255,0.90)" }}>
                Remplis ce formulaire pour constituer un dossier complet. Pour les pièces (photo / vidéo / document),
                envoie-les ensuite sur WhatsApp : <strong>{phone}</strong>.
              </p>

              <div className="form-actions" style={{ marginTop: 10 }}>
                <a className="btn btn-secondary" href={pdfLink} target="_blank" rel="noopener noreferrer">
                  Télécharger le PDF
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main className="dark-main">
        <section className="section">
          <div className="container">
            <div className="form-card">
              <form method="POST" action="/api/inscription" className="form-grid">
                <input type="hidden" name="formType" value="dossier-joueur" />

                <div className="form-field">
                  <label htmlFor="nom">Nom complet du joueur *</label>
                  <input id="nom" name="nom" type="text" required placeholder="Ex : Diop Mamadou" />
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="age">Âge *</label>
                    <input id="age" name="age" type="number" min="10" max="25" required placeholder="Ex : 18" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="poste">Poste principal *</label>
                    <input id="poste" name="poste" type="text" required placeholder="Ex : Ailier / Défenseur / Gardien" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="telephone">Téléphone / WhatsApp *</label>
                    <input id="telephone" name="telephone" type="tel" required placeholder="Ex : +221 783616382" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email (optionnel)</label>
                    <input id="email" name="email" type="email" placeholder="Ex : joueur@email.com" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="niveau">Niveau *</label>
                    <select id="niveau" name="niveau" required>
                      <option value="">Sélectionner</option>
                      <option value="formation">Formation</option>
                      <option value="competition">Compétition</option>
                      <option value="elite">Élite / Détection</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label htmlFor="club">Club actuel (optionnel)</label>
                    <input id="club" name="club" type="text" placeholder="Ex : ASC…, école…, sans club" />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Détails dossier (important) *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    required
                    placeholder={`1) Objectif : club à l’étranger ou camp
2) Taille / poids (si possible)
3) Pied fort
4) Lien vidéo (YouTube/Drive)
5) Disponibilités / pays souhaités
6) Documents disponibles (CNI/Passeport)`}
                  />
                  <p className="form-help">
                    Après envoi, transmets les pièces sur WhatsApp : <strong>{phone}</strong>
                  </p>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">
                    Envoyer le dossier
                  </button>
                  <Link href="/" className="btn btn-secondary">
                    Retour accueil
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <p>© 2025 KAF Global Foot. Tous droits réservés.</p>
        </footer>

        <a href={waLink} className="whatsapp-float" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </main>
    </>
  );
}
