import Head from "next/head";

export default function Confidentialite() {
  const siteUrl = "https://kafglobalfoot.com";

  return (
    <>
      <Head>
        <title>Politique de confidentialité – KAF Global Foot</title>
        <meta
          name="description"
          content="Politique de confidentialité de KAF Global Foot : collecte, utilisation et protection des données des joueurs."
        />
        <link rel="canonical" href={`${siteUrl}/confidentialite`} />
      </Head>

      <main className="page-shell" style={{ padding: "24px 16px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h1 style={{ marginTop: 0 }}>Politique de confidentialité</h1>

          <p>
            Cette page explique comment KAF Global Foot collecte, utilise et
            protège les informations personnelles communiquées via le site et
            les formulaires joueurs.
          </p>

          <h2>1) Responsable du traitement</h2>
          <p>
            KAF Global Foot – Kafountine (Casamance, Sénégal). <br />
            Contact : <strong>contact@kafglobalfoot.com</strong> · Téléphone /
            WhatsApp : <strong>+221 783616382</strong>
          </p>

          <h2>2) Données collectées</h2>
          <p>Selon les formulaires, nous pouvons collecter :</p>
          <ul>
            <li>Identité et coordonnées (joueur, parent/tuteur si mineur)</li>
            <li>Informations sportives (poste, club, parcours, vidéos)</li>
            <li>Informations de projet (essais, camps, pays visés)</li>
            <li>
              Informations de santé déclaratives et autorisations (si fournies)
            </li>
          </ul>

          <h2>3) Finalités (pourquoi ces données)</h2>
          <p>Ces données sont utilisées uniquement pour :</p>
          <ul>
            <li>Traiter la pré-inscription et gérer le suivi du joueur</li>
            <li>Constituer un dossier sportif (club à l’étranger / camp)</li>
            <li>Contacter le joueur et/ou le parent/tuteur</li>
          </ul>

          <h2>4) Partage avec des tiers</h2>
          <p>
            Les données peuvent être partagées avec des clubs, agents,
            recruteurs ou organisateurs de stages/camps{" "}
            <strong>uniquement avec votre accord</strong>. Pour un joueur mineur,
            l’accord du parent/tuteur est requis.
          </p>

          <h2>5) Conservation</h2>
          <p>
            Nous conservons les informations le temps nécessaire au suivi du
            joueur et à la gestion du dossier. Vous pouvez demander la
            suppression à tout moment.
          </p>

          <h2>6) Vos droits</h2>
          <p>
            Vous pouvez demander l’accès, la correction ou la suppression de vos
            données, ou retirer votre accord de partage, en écrivant à{" "}
            <strong>contact@kafglobalfoot.com</strong>.
          </p>

          <h2>7) Sécurité</h2>
          <p>
            Nous mettons en place des mesures raisonnables pour protéger les
            informations (accès limité, traitement confidentiel).
          </p>

          <p style={{ marginTop: 18 }}>
            <a href="/" style={{ textDecoration: "underline" }}>
              ← Retour à l’accueil
            </a>
          </p>

          <p style={{ marginTop: 24, fontSize: 13, opacity: 0.8 }}>
            Dernière mise à jour : 21/01/2026
          </p>
        </div>
      </main>
    </>
  );
}
