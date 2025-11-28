import Head from "next/head";
import Link from "next/link";

export default function Inscription() {
  return (
    <div className="page-shell">
      <Head>
        <title>Pré-inscription – KAF Global Foot</title>
        <meta
          name="description"
          content="Formulaire de pré-inscription à KAF Global Foot, académie de football à Kafountine (Casamance) pour les jeunes de 14 à 23 ans."
        />
      </Head>

      {/* HEADER AVEC LOGO (même style que la home) */}
      <header className="site-header">
        <div className="site-header-left">
          <img
            src="/logo-kaf.svg"
            alt="Logo KAF Global Foot"
            className="site-logo"
          />
          <div className="site-title-block">
            <div className="site-title">KAF Global Foot</div>
            <div className="site-tagline">
              Académie de football · Casamance
            </div>
          </div>
        </div>

        <nav className="site-nav" aria-label="Navigation principale">
          <Link href="/">Accueil</Link>
          <Link href="/#programmes">Programmes</Link>
          <Link href="/#horaires">Horaires</Link>
          <Link href="/#contact">Contact</Link>
          <Link href="/inscription" className="site-nav-cta">
            Inscription
          </Link>
        </nav>
      </header>

      {/* LAYOUT 3 COLONNES COMME SUR LA HOME */}
      <main className="layout-shell">
        {/* Colonne gauche : infos rapides */}
        <aside className="layout-rail">
          <div className="rail-card">
            <h3>Infos rapides</h3>
            <p className="rail-strong">Âge : 14 à 23 ans</p>
            <p className="rail-strong">Lieu : Kafountine, Casamance</p>
            <p>Entraînements du lundi au samedi.</p>
          </div>
          <div className="rail-card">
            <h3>Terrain d’entraînement</h3>
            <p>Terrain du Lycée de Kafountine</p>
            <p>Département de Bignona, région de Ziguinchor.</p>
          </div>
        </aside>

        {/* Colonne centrale : formulaire dans une carte blanche tachée de vert */}
        <div className="layout-main">
          <section className="section">
            <h1>Formulaire de pré-inscription</h1>
            <p>
              Remplissez ce formulaire pour pré-inscrire un joueur à{" "}
              <strong>KAF Global Foot</strong>. Nous vous recontacterons par
              WhatsApp ou téléphone pour confirmer les détails.
            </p>

            <form
              method="POST"
              action="mailto:contact@kafglobalfoot.com"
              encType="text/plain"
            >
              <label htmlFor="player-name">Nom et prénom du joueur</label>
              <input
                id="player-name"
                name="Nom du joueur"
                type="text"
                required
              />

              <label htmlFor="player-age">Âge du joueur</label>
              <input
                id="player-age"
                name="Âge du joueur"
                type="number"
                min={10}
                max={25}
                required
              />

              <label htmlFor="category">Catégorie souhaitée</label>
              <select id="category" name="Catégorie souhaitée">
                <option value="">Choisir une catégorie</option>
                <option value="Cadets U17">Cadets – U17 (14–16 ans)</option>
                <option value="Juniors U20">Juniors – U20 (17–20 ans)</option>
                <option value="Espoirs U23">Espoirs – U23 (21–23 ans)</option>
              </select>

              <label htmlFor="parent-name">
                Nom et prénom du parent / tuteur
              </label>
              <input
                id="parent-name"
                name="Nom du parent/tuteur"
                type="text"
                required
              />

              <label htmlFor="phone">Téléphone / WhatsApp</label>
              <input
                id="phone"
                name="Téléphone / WhatsApp"
                type="tel"
                required
              />

              <label htmlFor="email">Email (facultatif)</label>
              <input id="email" name="Email" type="email" />

              <label htmlFor="message">
                Message (niveau du joueur, club actuel, etc.)
              </label>
              <textarea id="message" name="Message" />

              <input type="submit" value="Envoyer la pré-inscription" />
            </form>
          </section>
        </div>

        {/* Colonne droite : horaires & contact */}
        <aside className="layout-rail">
          <div className="rail-card">
            <h3>Horaires d’entraînement</h3>
            <p className="rail-strong">Lundi – Vendredi</p>
            <p>16h00 – 18h00</p>
            <p className="rail-strong">Samedi</p>
            <p>9h30 – 11h30</p>
          </div>
          <div className="rail-card">
            <h3>Contact direct</h3>
            <p>WhatsApp / Téléphone :</p>
            <p className="rail-strong">+221 78 270 24 57</p>
          </div>
        </aside>
      </main>

      {/* BOUTON WHATSAPP FLOTTANT (comme sur la home) */}
      <a
        href="https://wa.me/221782702457"
        className="whatsapp-float"
        aria-label="Écrire à KAF Global Foot sur WhatsApp"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>

      {/* FOOTER SIMPLE */}
      <footer className="section site-footer">
        <div>
          © {new Date().getFullYear()} KAF Global Foot. Tous droits réservés.
        </div>
        <div className="footer-tech">
          Site développé avec Next.js & déployé sur Vercel.
        </div>
      </footer>
    </div>
  );
}
