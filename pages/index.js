@@ -3,6 +3,25 @@ import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const siteUrl = "https://kafglobalfoot.com";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "KAF Global Foot",
    description:
      "Académie de football à Kafountine (Casamance, Sénégal) pour les jeunes de 14 à 23 ans : entraînements réguliers, encadrement sérieux et cadre sécurisé.",
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kafountine",
      addressRegion: "Ziguinchor",
      addressCountry: "SN",
    },
    telephone: "+221782702457",
    sport: "Football",
  };

  return (
    <>
      <Head>
@@ -14,6 +33,41 @@ export default function Home() {
          name="description"
          content="KAF Global Foot est une académie de football à Kafountine (Casamance, Sénégal) dédiée à la formation des jeunes de 14 à 23 ans : entraînements réguliers, encadrement sérieux et cadre sécurisé."
        />
        <link rel="canonical" href={siteUrl} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Académie de football à Kafountine | KAF Global Foot"
        />
        <meta
          property="og:description"
          content="Académie de football à Kafountine pour les jeunes de 14 à 23 ans : entraînements du lundi au samedi, encadrement sérieux et valeurs fortes."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="KAF Global Foot" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:image" content={`${siteUrl}/hero.jpg`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="KAF Global Foot – Académie de football à Kafountine"
        />
        <meta
          name="twitter:description"
          content="Académie pour jeunes joueurs de 14 à 23 ans en Casamance : travail technique, tactique, physique et mental."
        />
        <meta name="twitter:image" content={`${siteUrl}/hero.jpg`} />

        {/* Données structurées JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <div className="page">
