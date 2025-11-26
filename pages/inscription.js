// pages/inscription.js
import Head from "next/head";
import Link from "next/link";

export default function Inscription() {
  return (
    <>
      <Head>
        <title>Inscription - KAF Global Foot</title>
        <meta
          name="description"
          content="Formulaire de pré-inscription à l'académie de football KAF Global Foot à Kafountine."
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
              <Link href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/";
                }}
              >
                Accueil
              </Link>
              <Link href="/#programmes">Programmes</Link>
              <Link href="/#horaires">Horaires</Link>
              <Link href="/#contact">Contact</Link>
              <Link href="/inscription">Inscription</Link>
            </nav>
          </div>
        </header>

        <main>
          <section className="section">
            <div className="container">
              <h1 className="section-title">Formulaire de pré-inscription</h1>
              <p className="section-text small" style={{ marginBottom: "1.5rem" }}>
                Ce formulaire permet de pré-inscrire un joueur à KAF Global Foot.
                Après réception, nous te contacterons pour confirmer les détails
                (catégorie, horaires, documents à fournir, etc.).
              </p>

              <div className="card">
                <form
                  style={{
                    display: "grid",
                    gap: "1rem",
                  }}
                >
                  {/* Infos joueur */}
                  <h2
                    className="section-text small"
                    style={{ fontWeight: 600, marginBottom: "0.25rem" }}
                  >
                    Informations du joueur
                  </h2>

                  <div style={{ display: "grid", gap: "0.5rem" }}>
                    <label>
                      Nom et prénom du joueur
                      <br />
                      <input
                        type="text"
                        name="joueurNom"
                        required
                        style={{ width: "100%", padding: "0.4rem", marginTop: "0.2rem" }}
                      />
                    </label>
                  </div>

                  <div style={{ display: "grid", gap: "0.5rem" }}>
                    <label>
                      Date de naissance du joueur
                      <br />
                      <input
                        type="date"
                        name="joueurNaissance"
                        required
                        style={{ width: "100%", padding: "0.4rem", marginTop: "0.2rem" }}
                      />
                    </label>
                  </div>

                  <div style={{ display: "grid", gap: "0.5rem" }}>
                    <label>
                      Catégorie d&apos;âge du joueur
                      <br />
                      <select
                        name="categorieAge"
                        required
                        style={{ width: "100%", padding: "0.4rem", marginTop: "0.2rem" }}
                      >
                        <option value="">Sélectionner une catégorie</option>
                        <option value="cadets">
                          Cadets – U17 (14–16 ans)
                        </option>
                        <option value="juniors">
                          Juniors – U20 (17–20 ans)
                        </option>
                        <option value="espoirs">
                          Espoirs – U23 (21–23 ans)
                        </option>
                      </select>
                    </label>
                  </div>

                  <div style={{ display: "grid", gap: "0.5rem" }}>
                    <label>
                      Poste préféré (optionnel)
                      <br />
                      <input
                        type="text"
                        name="poste"
                        placeholder="Gardien, défenseur, milieu, attaquant..."
                        style={{ width: "100%", padding: "0.4rem", marginTop: "0.2rem" }}
                      />
                    </label>
                  </div>

                  {/* Parent / tuteur */}
                  <h2
                    className="section-text small"
                    style={{
                      fontWeight: 600,
                      marginTop: "1rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Parent / tuteur légal
                  </h2>

                  <div style={{ display: "grid", gap: "0.5rem" }}>
                    <label>
                      Nom et prénom du parent / tuteur
                      <br />
                      <input
                        type="text"
                        name="parentNom"
                        required
                        style={{ width: "100%", padding: "0.4rem", marginTop: "0.2rem" }}
                      />
                    </label>
                  </div>

                  <div style={{ display: "grid", gap: "0.5rem" }}>
                    <label>
                      Téléphone du parent / tuteur
                      <br />
                      <input
                        type="tel"
                        name="parentTelephone"
                        required
                        placeholder="+221 ..."
                        style={{ width: "100%", padding: "0.4rem", marginTop: "0.2rem" }}
                      />
                    </label>
                  </div>

                  <div style={{ display: "grid", gap: "0.5rem" }}>
                    <label>
                      Email du parent / tuteur
                      <br />
                      <input
                        type="email"
                        name="parentEmail"
                        required
                        placeholder="exemple@mail.com"
                        style={{ width: "100%", padding: "0.4rem", marginTop: "0.2rem" }}
                      />
                    </label>
                  </div>

                  {/* Infos pratiques */}
                  <h2
                    className="section-text small"
                    style={{
                      fontWeight: 600,
                      marginTop: "1rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Informations complémentaires
                  </h2>

                  <div style={{ display: "grid", gap: "0.5rem" }}>
                    <label>
                      Message ou informations utiles (santé, niveau, disponibilité...)
                      <br />
                      <textarea
                        name="message"
                        rows={4}
                        style={{
                          width: "100%",
                          padding: "0.4rem",
                          marginTop: "0.2rem",
                          resize: "vertical",
                        }}
                      />
                    </label>
                  </div>

                  <div style={{ fontSize: "0.85rem", color: "#4b5563" }}>
                    En envoyant ce formulaire, le parent / tuteur confirme
                    être d&apos;accord pour la participation du joueur aux
                    activités de KAF Global Foot, sous réserve de la visite
                    médicale et des documents à fournir.
                  </div>

                  <button type="submit" className="btn" style={{ marginTop: "0.75rem" }}>
                    Envoyer la pré-inscription
                  </button>
                </form>
              </div>

              <p className="section-text small" style={{ marginTop: "1rem" }}>
                Tu peux aussi nous contacter directement par WhatsApp au{" "}
                <strong>+221 78 270 24 57</strong> ou par email à{" "}
                <a href="mailto:contact@kafglobalfoot.com">
                  contact@kafglobalfoot.com
                </a>
                .
              </p>
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
