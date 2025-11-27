import { useState } from "react";
import Link from "next/link";

export default function PartenairesPage() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const closeMobileNav = () => setMobileNavOpen(false);

  return (
    <div className="page">
      {/* HEADER */}
      <header className="site-header">
        <div className="site-header-inner">
          <div className="site-logo">
            <Link href="/">KAF Global Foot</Link>
          </div>

          <button
            className={`mobile-nav-toggle ${
              mobileNavOpen ? "is-open" : ""
            }`}
            onClick={() => setMobileNavOpen((open) => !open)}
            aria-label={
              mobileNavOpen ? "Fermer le menu" : "Ouvrir le menu"
            }
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            className={`main-nav ${
              mobileNavOpen ? "is-open" : ""
            }`}
          >
            <Link href="/#apropos" onClick={closeMobileNav}>
              À propos
            </Link>
            <Link href="/#programmes" onClick={closeMobileNav}>
              Programmes
            </Link>
            <Link href="/#horaires" onClick={closeMobileNav}>
              Horaires
            </Link>
            <Link href="/#photos" onClick={closeMobileNav}>
              Photos
            </Link>
            <Link href="/#contact" onClick={closeMobileNav}>
              Contact
            </Link>
            <Link href="/partenaires" onClick={closeMobileNav}>
              Partenaires
            </Link>
            <Link
              href="/inscription"
              className="nav-cta nav-cta-in-nav"
              onClick={closeMobileNav}
            >
              Inscription
            </Link>
          </nav>

          <div className="nav-actions">
            <Link href="/inscription" className="nav-cta">
              Inscription
            </Link>
          </div>
        </div>
      </header>

      {/* CONTENU */}
      <main className="page-main">
        <section className="page-hero">
          <h1>Devenir partenaire de KAF Global Foot</h1>
          <p>
            KAF Global Foot est une académie de football basée à Kafountine, en
            Casamance (Sénégal), qui accompagne des jeunes de 14 à 23 ans dans
            leur progression sportive et humaine.
          </p>
          <p>
            En devenant partenaire, vous contribuez directement à offrir à ces
            jeunes un cadre d&apos;entraînement sérieux, sécurisé et porteur
            d&apos;avenir. Nous recherchons notamment des partenaires capables
            d&apos;ouvrir des opportunités à l&apos;étranger pour nos joueurs
            et de renforcer la formation de notre staff.
          </p>
        </section>

        <section className="page-section">
          <h2>Pourquoi nous soutenir ?</h2>
          <ul>
            <li>
              <strong>Impact local fort :</strong> vous soutenez concrètement la
              jeunesse de Kafountine et de la Casamance.
            </li>
            <li>
              <strong>Éducation par le sport :</strong> au-delà du football,
              nous travaillons sur les valeurs : respect, discipline, esprit
              d&apos;équipe, goût de l&apos;effort, sens des responsabilités.
            </li>
            <li>
              <strong>Transparence :</strong> nous expliquons comment sont
              utilisés les soutiens (matériel, bourses, fonctionnement de
              l&apos;académie).
            </li>
          </ul>
        </section>

        <section className="page-section">
          <h2>Types de partenariats possibles</h2>

          <h3>Partenaires équipement</h3>
          <p>
            Fourniture ou financement de maillots, ballons, chasubles, plots,
            filets, et matériel d&apos;entraînement pour les séances
            quotidiennes et les compétitions.
          </p>

          <h3>Partenaires institutionnels &amp; associatifs</h3>
          <p>
            Collaboration avec des clubs, écoles, ONG, collectivités ou
            structures sportives pour monter des projets sportifs et éducatifs
            autour des jeunes de Kafountine.
          </p>

          <h3>Partenaires financiers</h3>
          <p>
            Contribution au fonctionnement de l&apos;académie : encadrement,
            infrastructures, déplacements, organisation de tournois, bourses
            pour les familles les plus modestes.
          </p>

          <h3>Partenaires sportifs &amp; techniques internationaux</h3>
          <p>
            Nous attendons aussi d&apos;un partenaire un véritable programme
            sportif et technique qui puisse :
          </p>
          <ul>
            <li>
              <strong>
                Recruter ou placer nos meilleurs joueurs à l&apos;étranger
              </strong>{" "}
              (stages, essais, intégration dans des clubs, visites de centres de
              formation).
            </li>
            <li>
              <strong>Accompagner la formation des joueurs :</strong> méthodes
              modernes d&apos;entraînement, suivi individuel, préparation à un
              niveau semi-pro ou pro.
            </li>
            <li>
              <strong>Former notre staff</strong> (coachs, préparateurs,
              encadrants) via des échanges de compétences, des formations en
              présentiel ou en visio, et des immersions dans vos structures.
            </li>
          </ul>
        </section>

        <section className="page-section">
          <h2>Contact partenariats</h2>
          <p>
            Pour discuter d&apos;un partenariat ou recevoir un dossier de
            présentation complet, contactez-nous :
          </p>
          <p>
            Téléphone / WhatsApp : <strong>+221 78 270 24 57</strong>
            <br />
            Email : <strong>contact@kafglobalfoot.com</strong>
          </p>
          <p>
            Vous pouvez également utiliser le{" "}
            <Link href="/inscription">formulaire de pré-inscription</Link> pour
            nous laisser un message détaillé.
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <p>© 2025 KAF Global Foot. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
