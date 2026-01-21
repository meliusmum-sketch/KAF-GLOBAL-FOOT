// pages/inscription.js
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
          content="Formulaire de pré-inscription à l'académie KAF Global Foot."
        />
        <link rel="canonical" href={`${siteUrl}/inscription`} />
      </Head>

      <main className="dark-main">
        <section className="section">
          <div className="container">
            <div className="form-card">
              <h1 style={{ marginTop: 0 }}>Pré-inscription</h1>
              <p>
                Remplis ce formulaire. Nous te recontactons ensuite par téléphone
                ou e-mail.
              </p>

              <form method="POST" action="/api/inscription" className="form-grid">
                <input type="hidden" name="formType" value="preinscription" />

                <div className="form-field">
                  <label htmlFor="nom">Nom complet du joueur *</label>
                  <input id="nom" name="nom" type="text" required />
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="age">Âge *</label>
                    <input id="age" name="age" type="number" min="10" max="25" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="poste">Poste</label>
                    <input id="poste" name="poste" type="text" />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="nomParent">Nom du parent / tuteur</label>
                  <input id="nomParent" name="nomParent" type="text" />
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="telephone">Téléphone / WhatsApp *</label>
                    <input id="telephone" name="telephone" type="tel" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="niveau">Niveau *</label>
                    <select id="niveau" name="niveau" required>
                      <option value="">Sélectionner</option>
                      <option value="debutant">Débutant</option>
                      <option value="intermediaire">Intermédiaire</option>
                      <option value="avance">Avancé / Compétition</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label htmlFor="club">Club / école</label>
                    <input id="club" name="club" type="text" />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} />
                </div>

                <div className="form-actions">
                  <button className="btn btn-primary" type="submit">
                    Envoyer
                  </button>
                  <Link className="btn btn-secondary" href="/">
                    Retour accueil
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
