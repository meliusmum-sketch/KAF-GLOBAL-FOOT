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
          content="Sign Up KAF Global Foot : dossier joueur, détection, stage et orientation club/camp."
        />
        <link rel="canonical" href={`${siteUrl}/sign-up`} />
      </Head>

      <div className="page">
        <header className="site-header">
          <div className="site-header-inner">
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <img src="/logo-kaf.svg" alt="Logo KAF" className="site-logo" />
              <div className="site-title-block">
                <span className="site-title">KAF Global Foot</span>
                <span className="site-tagline">Académie · Casamance</span>
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

        <main className="signup-wrap">
          <div className="container">
            <h1>Sign Up</h1>
            <p style={{ maxWidth: 760 }}>
              Rejoins KAF Global Foot et constitue ton dossier joueur (détection,
              stage, opportunités club/camp). Nous te contactons par WhatsApp ou e-mail.
            </p>

            <div className="signup-grid">
              {/* COL GAUCHE (infos) */}
              <div className="card">
                <h2>Avant de remplir</h2>
                <p>
                  Plus c’est précis, mieux c’est : poste, club actuel, dispo, liens vidéos.
                </p>

                <div className="hr" />

                <h3>Télécharger le PDF</h3>
                <p>Option papier / WhatsApp :</p>
                <a
                  className="btn btn-secondary"
                  href="/downloads/KAF_Global_Foot_Player_Form_Final.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Télécharger le formulaire
                </a>

                <div className="hr" />

                <h3>Contact</h3>
                <p style={{ marginBottom: 8 }}>
                  WhatsApp / Téléphone : <strong>{phoneDisplay}</strong>
                </p>
                <a
                  className="btn btn-primary"
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </div>

              {/* COL DROITE (form) */}
              <div className="form-card">
                <h2 style={{ marginBottom: 6 }}>Apply to join the academy</h2>
                <p style={{ marginTop: 0, maxWidth: 760 }}>
                  Formulaire structuré comme une page “Sign Up” classique (Nom, Email, DOB,
                  poste, centre, transport, consentement). :contentReference[oaicite:2]{index=2}
                </p>

                <form method="POST" action="/api/inscription" className="form-grid">
                  <input type="hidden" name="source" value="sign-up" />

                  <div className="form-field">
                    <label htmlFor="nom">Full name (Required)</label>
                    <input id="nom" name="nom" type="text" required />
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="email">Email address (Required)</label>
                      <input id="email" name="email" type="email" required />
                    </div>
                    <div className="form-field">
                      <label htmlFor="telephone">Phone number</label>
                      <input
                        id="telephone"
                        name="telephone"
                        type="tel"
                        placeholder={phoneDisplay}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="dob">Date of birth (Required)</label>
                      <input id="dob" name="dob" type="date" required />
                    </div>
                    <div className="form-field">
                      <label htmlFor="poste">Playing position</label>
                      <input id="poste" name="poste" type="text" placeholder="Ex : Ailier, 6, 10, Gardien…" />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="centre">Local centre</label>
                      <input id="centre" name="centre" type="text" placeholder="Ex : Kafountine / Dakar / Ziguinchor…" />
                    </div>
                    <div className="form-field">
                      <label htmlFor="transport">Nearest transport station</label>
                      <input id="transport" name="transport" type="text" />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="message">Notes (optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Liens vidéos, taille/poids, club actuel, objectif (club/camp)…"
                    />
                  </div>

                  <div className="form-field">
                    <label>Consent (Required)</label>
                    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <input id="consent" name="consent" type="checkbox" required style={{ marginTop: 4 }} />
                      <label
                        htmlFor="consent"
                        style={{
                          textTransform: "none",
                          letterSpacing: "normal",
                          fontSize: 14,
                          margin: 0,
                          color: "#374151",
                        }}
                      >
                        By submitting this form, you agree to our{" "}
                        <Link href="/confidentialite" className="btn-link">
                          Privacy Policy
                        </Link>
                        .
                      </label>
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Offer sign-up (Optional)</label>
                    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <input id="offers" name="offers" type="checkbox" style={{ marginTop: 4 }} />
                      <label
                        htmlFor="offers"
                        style={{
                          textTransform: "none",
                          letterSpacing: "normal",
                          fontSize: 14,
                          margin: 0,
                          color: "#374151",
                        }}
                      >
                        I would like to receive info about trials, camps and opportunities.
                      </label>
                    </div>
                  </div>

                  <div className="form-actions">
                    <button className="btn btn-primary" type="submit">
                      Submit
                    </button>
                    <a
                      className="btn btn-secondary"
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp instead
                    </a>
                  </div>
                </form>

                <div className="hr" />

                {/* “Not old enough” (accordion => pas de doublon visible) */}
                <details>
                  <summary style={{ cursor: "pointer", fontWeight: 900 }}>
                    Not old enough to join? (Reserve your place)
                  </summary>

                  <div style={{ marginTop: 14 }}>
                    <form method="POST" action="/api/inscription" className="form-grid">
                      <input type="hidden" name="source" value="sign-up-reserve" />

                      <div className="form-field">
                        <label htmlFor="nom2">Full name (Required)</label>
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

                      <div className="form-field">
                        <label>Consent (Required)</label>
                        <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                          <input id="consent2" name="consent" type="checkbox" required style={{ marginTop: 4 }} />
                          <label
                            htmlFor="consent2"
                            style={{
                              textTransform: "none",
                              letterSpacing: "normal",
                              fontSize: 14,
                              margin: 0,
                              color: "#374151",
                            }}
                          >
                            I agree to the{" "}
                            <Link href="/confidentialite" className="btn-link">
                              Privacy Policy
                            </Link>
                            .
                          </label>
                        </div>
                      </div>

                      <div className="form-actions">
                        <button className="btn btn-primary" type="submit">
                          Reserve
                        </button>
                      </div>
                    </form>
                  </div>
                </details>

                <p style={{ marginTop: 16 }}>
                  <Link href="/" className="btn-link">← Back to home</Link>
                </p>
              </div>
            </div>
          </div>
        </main>

        <footer className="site-footer">
          <p>© 2025 KAF Global Foot. Tous droits réservés.</p>
          <p>Site développé avec Next.js &amp; déployé sur Vercel.</p>
        </footer>

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
