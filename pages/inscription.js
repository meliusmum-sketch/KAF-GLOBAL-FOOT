// pages/inscription.js
import Head from "next/head";
import { useState } from "react";

export default function Inscription() {
  const [status, setStatus] = useState(null); // "loading" | "success" | "error" | null

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const form = e.target;

      // 🔹 Version TEST : on simule un envoi réussi après 1 seconde
      setTimeout(() => {
        setStatus("success");
        form.reset();
      }, 1000);
    } catch (err) {
      console.error("Erreur côté navigateur:", err);
      setStatus("error");
    }
  };

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
              <a href="/">Accueil</a>
              <a href="/#programmes">Programmes</a>
              <a href="/#horaires">Horaires</a>
              <a href="/#contact">Contact</a>
            </nav>
          </div>
        </header>

        <main>
          <section className="section">
            <div className="container">
              <h1 className="section-title">Formulaire de pré-inscription</h1>
              <p
                className="section-text small"
                style={{ marginBottom: "1.5rem" }}
              >
                Ce formulaire permet de pré-inscrire un joueur à KAF Global
                Foot. Après réception, nous vous contacterons pour confirmer
                les détails (catégorie, horaires, documents à fournir, etc.).
              </p>

              <div className="card">
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "grid",
                    gap: "1rem",
                  }}
                >
                  <h2
                    className="section-text small"
                    style={{ fontWeight: 600 }}
                  >
                    Informations du joueur
                  </h2>

                  <label>
                    Nom et prénom du joueur
                    <br />
                    <input
                      type="text"
                      name="joueurNom"
                      required
                      style={{
                        width: "100%",
                        padding: "0.4rem",
                        marginTop: "0.2rem",
                      }}
                    />
                  </label>

                  <label>
                    Date de naissance du joueur
                    <br />
                    <input
                      type="date"
                      name="joueurNaissance"
                      required
                      style={{
                        width: "100%",
                        padding: "0.4rem",
                        marginTop: "0.2rem",
                      }}
                    />
                  </label>

                  <label>
                    Catégorie d&apos;âge du joueur
                    <br />
                    <select
                      name="categorieAge"
                      required
                      style={{
                        width: "100%",
                        padding: "0.4rem",
                        marginTop: "0.2rem",
                      }}
                    >
                      <option value="">Sélectionner une catégorie</option>
                      <option value="Cadets – U17 (14–16 ans)">
                        Cadets – U17 (14–16 ans)
                      </option>
                      <option value="Juniors – U20 (17–20 ans)">
                        Juniors – U20 (17–20 ans)
                      </option>
                      <option value="Espoirs – U23 (21–23 ans)">
                        Espoirs – U23 (21–23 ans)
                      </option>
                    </select>
                  </label>

                  <label>
                    Poste préféré (optionnel)
                    <br />
                    <input
                      type="text"
                      name="poste"
                      placeholder="Gardien, défenseur, milieu, attaquant..."
                      style={{
                        width: "100%",
                        padding: "0.4rem",
                        marginTop: "0.2rem",
                      }}
                    />
                  </label>

                  <h2
                    className="section-text small"
                    style={{ fontWeight: 600, marginTop: "1rem" }}
                  >
                    Parent / tuteur légal
                  </h2>

                  <label>
                    Nom et prénom du parent / tuteur
                    <br />
                    <input
                      type="text"
                      name="parentNom"
                      required
                      style={{
                        width: "100%",
                        padding: "0.4rem",
                        marginTop: "0.2rem",
                      }}
                    />
                  </label>

                  <label>
                    Téléphone du parent / tuteur
                    <br />
                    <input
                      type="tel"
                      name="parentTel"
                      required
                      placeholder="+221 ..."
                      style={{
                        width: "100%",
                        padding: "0.4rem",
                        marginTop: "0.2rem",
                      }}
                    />
                  </label>

                  <label>
                    Email du parent / tuteur
                    <br />
                    <input
                      type="email"
                      name="parentEmail"
                      required
                      placeholder="exemple@mail.com"
                      style={{
                        width: "100%",
                        padding: "0.4rem",
                        marginTop: "0.2rem",
                      }}
                    />
                  </label>

                  <h2
                    className="section-text small"
                    style={{ fontWeight: 600, marginTop: "1rem" }}
                  >
                    Informations complémentaires
                  </h2>

                  <label>
                    Message ou informations utiles (santé, niveau,
                    disponibilité...)
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

                  <div style={{ fontSize: "0.85rem", color: "#4b5563" }}>
                    En envoyant ce formulaire, le parent / tuteur confirme
                    être d&apos;accord pour la participation du joueur aux
                    activités de KAF Global Foot, sous réserve de la visite
                    médicale et des documents à fournir.
                  </div>

                  <button
                    type="submit"
                    className="btn"
                    style={{ marginTop: "0.75rem" }}
                    disabled={status === "loading"}
                  >
                    {status === "loading"
                      ? "Envoi en cours..."
                      : "Envoyer la pré-inscription"}
                  </button>

                  {status === "success" && (
                    <p
                      className="section-text small"
                      style={{ color: "#15803d", marginTop: "0.5rem" }}
                    >
                      Merci ! Votre pré-inscription a bien été envoyée (test).
                      Nous vous contacterons rapidement.
                    </p>
                  )}

                  {status === "error" && (
                    <p
                      className="section-text small"
                      style={{ color: "#b91c1c", marginTop: "0.5rem" }}
                    >
                      Une erreur est survenue dans le navigateur. Vous pouvez
                      aussi nous écrire à{" "}
                      <a href="mailto:contact@kafglobalfoot.com">
                        contact@kafglobalfoot.com
                      </a>{" "}
                      ou via WhatsApp.
                    </p>
                  )}
                </form>
              </div>

              <p
                className="section-text small"
                style={{ marginTop: "1rem" }}
              >
                Vous pouvez également nous contacter par WhatsApp au{" "}
                <strong>+221 78 270 24 57</strong> ou par email à{" "}
                <a href="mailto:contact@kafglobalfoot.com">
                  contact@kafglobalfoot.com
                </a>
                .
              </p>
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
