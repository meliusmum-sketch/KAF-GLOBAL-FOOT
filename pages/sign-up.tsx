// pages/sign-up.tsx
import Head from "next/head";
import Link from "next/link";

export default function SignUp() {
  const siteUrl = "https://kafglobalfoot.com";
  const whatsappNumber = "221783616382";
  const phoneDisplay = "+221 783616382";

  return (
    <>
      <Head>
        <title>Sign Up – KAF Global Foot</title>
        <meta
          name="description"
          content="Sign Up KAF Global Foot : remplissez le formulaire pour rejoindre l’académie, être évalué et recevoir les prochaines étapes."
        />
        <link rel="canonical" href={`${siteUrl}/sign-up`} />
      </Head>

      <div className="page">
        {/* HEADER */}
        <header className="site-header">
          <div className="site-header-inner">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src="/logo-kaf.svg" alt="Logo KAF" className="site-logo" />
              <div className="site-title-block">
                <span className="site-title">KAF Global Foot</span>
                <span className="site-tagline">Academy · Casamance</span>
              </div>
            </div>

            <nav className="site-nav">
              <Link href="/#apropos">À propos</Link>
              <Link href="/#programmes">Programmes</Link>
              <Link href="/#horaires">Horaires</Link>
              <Link href="/#photos">Photos</Link>
              <Link href="/#contact">Contact</Link>
              <Link href="/inscription" className="site-nav-cta">
                Inscription
              </Link>
            </nav>
          </div>
        </header>

        <main className="form-section">
          {/* HERO */}
          <div className="signup-hero">
            <div className="kicker">
              <span className="badge">Saison 2025–2026</span>
              <span className="badge">Détections & stages</span>
              <span className="badge">Clubs à l’étranger / camps</span>
            </div>

            <h1>Sign Up – Dossier joueur</h1>
            <p>
              Remplis ce formulaire pour rejoindre KAF Global Foot et constituer
              ton dossier (évaluation, stage, opportunités de club / camp). Le
              contact se fait par WhatsApp ou e-mail.
            </p>
          </div>

          <div className="signup-grid">
            {/* COL GAUCHE */}
            <div className="card">
              <h2>Comment ça marche</h2>
              <ul className="list">
                <li>Tu remplis les infos essentielles (identité + profil).</li>
                <li>On te contacte pour valider le dossier et demander pièces/vidéos.</li>
                <li>On t’oriente : stage, essai, camp ou club partenaire.</li>
              </ul>

              <hr className="sep" />

              <h3>Télécharger le formulaire PDF</h3>
              <p>
                Si tu préfères remplir sur papier/WhatsApp, télécharge le PDF :
              </p>
              <a
                className="btn btn-secondary"
                href="/downloads/KAF_Global_Foot_Player_Form_Final.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Télécharger le PDF
              </a>

              <hr className="sep" />

              <h3>Contact direct</h3>
              <p className="rail-strong">{phoneDisplay}</p>
              <a
                className="btn btn-primary"
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Écrire sur WhatsApp
              </a>
            </div>

            {/* COL DROITE : FORM */}
            <div className="form-card">
              <h2 style={{ marginBottom: 6 }}>Apply – Rejoindre l’académie</h2>
              <p style={{ marginTop: 0 }}>
                Champs inspirés d’un formulaire “Sign Up” classique (Nom, Email,
                Téléphone, Date de naissance, Poste + consentement). :contentReference[oaicite:2]{index=2}
              </p>

              <form method="POST" action="/api/inscription" className="form-grid">
                {/* petit tag pour reconnaître la source côté API */}
                <input type="hidden" name="source" value="sign-up" />

                <div className="form-field">
                  <label htmlFor="nom">Nom complet (Required)</label>
                  <input id="nom" name="nom" type="text" required placeholder="Ex : Diop Mamadou" />
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="email">Email address (Required)</label>
                    <input id="email" name="email" type="email" required placeholder="ex : joueur@email.com" />
                  </div>

                  <div className="form-field">
                    <label htmlFor="telephone">Phone number</label>
                    <input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      placeholder={`Ex : ${phoneDisplay}`}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="dob">Date of birth (Required)</label>
                    <input id="dob" name="dob" type="date" required />
                    <p className="form-help">Format jour/mois/année (via calendrier).</p>
                  </div>

                  <div className="form-field">
                    <label htmlFor="poste">Playing position</label>
                    <input id="poste" name="poste" type="text" placeholder="Ex : Ailier, Milieu, Gardien…" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="centre">Local centre</label>
                    <input id="centre" name="centre" type="text" placeholder="Ex : Kafountine / Ziguinchor / Dakar…" />
                  </div>

                  <div className="form-field">
                    <label htmlFor="transport">Nearest transport station</label>
                    <input id="transport" name="transport" type="text" placeholder="Ex : Gare routière / arrêt principal…" />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Informations complémentaires</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Liens vidéos, taille/poids, club actuel, disponibilité, objectif (club à l'étranger / camp)…"
                  />
                </div>

                {/* CONSENT required */}
                <div className="form-field">
                  <label>Consent (Required)</label>
                  <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <input id="consent" name="consent" type="checkbox" required style={{ marginTop: 3 }} />
                    <label htmlFor="consent" style={{ textTransform: "none", letterSpacing: "normal", fontSize: 14, margin: 0, color: "rgba(255,255,255,0.78)" }}>
                      En soumettant ce formulaire, j’accepte d’être contacté par KAF Global Foot
                      et j’ai lu la{" "}
                      <Link href="/confidentialite" style={{ textDecoration: "underline" }}>
                        politique de confidentialité
                      </Link>
                      .
                    </label>
                  </div>
                </div>

                {/* Option marketing (facultatif) */}
                <div className="form-field">
                  <label>Offer sign-up (Optional)</label>
                  <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <input id="offers" name="offers" type="checkbox" style={{ marginTop: 3 }} />
                    <label htmlFor="offers" style={{ textTransform: "none", letterSpacing: "normal", fontSize: 14, margin: 0, color: "rgba(255,255,255,0.78)" }}>
                      Je souhaite recevoir les infos (détections, stages, opportunités).
                    </label>
                  </div>
                </div>

                <div className="form-actions">
                  <button className="btn btn-primary" type="submit">
                    Envoyer ma demande
                  </button>

                  <a className="btn btn-ghost" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                    Ou envoyer par WhatsApp
                  </a>

                  <p className="form-small-note">
                    Conseil : ajoute 1 lien vidéo + ton poste + ton objectif (club / camp).
                  </p>
                </div>
              </form>

              <hr className="sep" />

              <h3 style={{ marginBottom: 6 }}>Pas prêt maintenant ?</h3>
              <p style={{ marginTop: 0 }}>
                Laisse juste tes infos, on te recontacte.
              </p>

              <form method="POST" action="/api/inscription" className="form-grid">
                <input type="hidden" name="source" value="sign-up-reserve" />

                <div className="form-field">
                  <label htmlFor="nom2">Nom complet (Required)</label>
                  <input id="nom2" name="nom" type="text" required />
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="email2">Email address (Required)</label>
                    <input id="email2" name="email" type="email" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="telephone2">Phone number</label>
                    <input id="telephone2" name="telephone" type="tel" />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="dob2">Date of birth (Required)</label>
                  <input id="dob2" name="dob" type="date" required />
                </div>

                <div className="form-actions">
                  <button className="btn btn-secondary" type="submit">
                    Réserver / être rappelé
                  </button>
                </div>
              </form>

              <p style={{ marginTop: 14 }}>
                <Link href="/" style={{ textDecoration: "underline", color: "rgba(255,255,255,0.80)" }}>
                  ← Retour à l’accueil
                </Link>
              </p>
            </div>
          </div>
        </main>

        <footer className="site-footer">
          <p>© 2025 KAF Global Foot. Tous droits réservés.</p>
          <p>Site développé avec Next.js &amp; déployé sur Vercel.</p>
        </footer>

        {/* WhatsApp float */}
        <a
          href={`https://wa.me/${whatsappNumber}`}
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
