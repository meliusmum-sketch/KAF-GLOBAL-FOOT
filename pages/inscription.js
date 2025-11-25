// pages/inscription.js
import Head from "next/head";
import Link from "next/link";

export default function Inscription() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Merci pour la préinscription, nous vous reviendrons bientôt.");
  };

  return (
    <>
      <Head>
        <title>Inscription - KAF Global Foot</title>
        <meta
          name="description"
          content="Formulaire de pré-inscription à KAF Global Foot, académie de football pour jeunes à Kafountine (Casamance)."
        />
      </Head>

      <div className="page section-alt">
        <header className="navbar">
          <div className="container nav-content">
            <div className="logo">
              <img src="/logo-kaf.svg" alt="KAF Global Foot" />
            </div>
            <nav className="nav-links">
              <Link href="/">Accueil</Link>
            </nav>
          </div>
        </header>

        <main className="section">
          <div className="container">
            <h1 className="section-title">Formulaire d&apos;inscription</h1>
            <p className="section-text">
              Remplis ce formulaire pour préparer l&apos;inscription de ton
              enfant à KAF Global Foot. Ensuite, contacte-nous par WhatsApp ou
              par email pour finaliser.
            </p>

            <form
              className="card"
              style={{ marginTop: "1.5rem", maxWidth: "640px" }}
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label>Nom de l&apos;enfant</label>
                <input type="text" name="nom_enfant" required />
              </div>

              <div className="form-group">
                <label>Prénom de l&apos;enfant</label>
                <input type="text" name="prenom_enfant" required />
              </div>

              <div className="form-group">
                <label>Âge de l&apos;enfant</label>
                <input type="number" name="age" min="4" max="18" required />
              </div>

              <div className="form-group">
                <label>Catégorie souhaitée</label>
                <select name="categorie" required>
                  <option value="">Sélectionner une catégorie</option>
                  <option value="U8">U8 (6–8 ans)</option>
                  <option value="U10">U10 (8–10 ans)</option>
                  <option value="U12">U12 (10–12 ans)</option>
                  <option value="U14+">U14 et plus</option>
                </select>
              </div>

              <div className="form-group">
                <label>Nom du parent / tuteur</label>
                <input type="text" name="nom_parent" required />
              </div>

              <div className="form-group">
                <label>Téléphone du parent</label>
                <input type="tel" name="telephone_parent" required />
              </div>

              <div className="form-group">
                <label>Email du parent</label>
                <input type="email" name="email_parent" required />
              </div>

              <div className="form-group">
                <label>Message / Informations complémentaires</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Ex : niveau de l'enfant, éventuels problèmes de santé, disponibilité..."
                ></textarea>
              </div>

              <button type="submit" className="btn">
                Valider la pré-inscription
              </button>

              <p className="section-text small" style={{ marginTop: "0.75rem" }}>
                Pour finaliser l&apos;inscription et recevoir toutes les infos
                (tarifs, documents, planning), contactez-nous :
              </p>
              <ul className="list">
                <li>
                  <strong>WhatsApp :</strong>{" "}
                  <a
                    href="https://wa.me/221782702457"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +221 78 270 24 57
                  </a>
                </li>
                <li>
                  <strong>Email :</strong>{" "}
                  <a href="mailto:kafglobalfoot@gmail.com">
                    kafglobalfoot@gmail.com
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </main>

        <style jsx>{`
          .form-group {
            display: flex;
            flex-direction: column;
            gap: 0.35rem;
            margin-bottom: 1rem;
            font-size: 0.95rem;
          }

          label {
            font-weight: 500;
          }

          input,
          select,
          textarea {
            padding: 0.55rem 0.6rem;
            border-radius: 0.6rem;
            border: 1px solid rgba(148, 163, 184, 0.6);
            background: #ffffff;
            color: #111827;
            font: inherit;
          }

          input:focus,
          select:focus,
          textarea:focus {
            outline: 2px solid #16a34a;
            outline-offset: 1px;
          }
        `}</style>

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
