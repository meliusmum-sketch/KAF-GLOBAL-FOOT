// pages/en.js
import Head from "next/head";
import Link from "next/link";

export default function HomeEn() {
  return (
    <>
      <Head>
        <title>KAF Global Foot - Football academy in Kafountine</title>
        <meta
          name="description"
          content="KAF Global Foot, football academy in Kafountine (Casamance): serious training environment for young players aged 14 to 23."
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
              <a href="#about">About</a>
              <a href="#programs">Programs</a>
              <a href="#schedule">Schedule</a>
              <a href="#gallery">Photos</a>
              <a href="#contact">Contact</a>
              <Link href="/inscription">Registration (FR)</Link>
              <Link href="/">Français</Link>
            </nav>
          </div>
        </header>

        <main>
          {/* HERO */}
          <section className="hero section">
            <div className="container hero-content">
              <div className="hero-text">
                <h1 className="hero-title">
                  KAF Global Foot: developing young football talent
                </h1>
                <p className="hero-subtitle">
                  Football academy based in Kafountine (Casamance, Senegal),
                  offering a serious, safe and friendly environment for young
                  players.
                </p>
                <div className="hero-actions">
                  <Link href="/inscription" className="btn">
                    Pre-register a player (FR)
                  </Link>
                </div>
                <p className="hero-badge">
                  Players aged 14 to 23 · All levels
                </p>
              </div>
              <div className="hero-image">
                <img src="/hero.jpg" alt="KAF Global Foot training session" />
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <section id="about" className="section section-alt">
            <div className="container">
              <h2 className="section-title">About KAF Global Foot</h2>
              <p className="section-text">
                KAF Global Foot is a football academy that places the
                development of the young player at the heart of the project. We
                work on technique, game intelligence, mentality and core values:
                respect, discipline, hard work and team spirit.
              </p>

              <div className="grid-3">
                <div className="card">
                  <h3>Coaching staff</h3>
                  <p>
                    Passionate and experienced coaches, with an approach
                    adapted to each age group. High standards regarding
                    attitude, always with a positive mindset.
                  </p>
                </div>
                <div className="card">
                  <h3>Methodology</h3>
                  <p>
                    Structured sessions with the ball, coordination and
                    movement work for the youngest, technical and tactical
                    development for the older players.
                  </p>
                </div>
                <div className="card">
                  <h3>Vision</h3>
                  <p>
                    Provide a solid base for young players, whether they aim
                    for high-level football or simply want to train seriously
                    in a good environment.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* PROGRAMS */}
          <section id="programs" className="section">
            <div className="container">
              <h2 className="section-title">Our programs</h2>

              <div className="grid-2">
                <div className="card">
                  <h3>Development group</h3>
                  <p>
                    For the youngest players in the academy (14–16 years old –
                    Cadets).
                  </p>
                  <ul className="list">
                    <li>Technical work, coordination and motor skills</li>
                    <li>Small-sided games and simple tactical work</li>
                    <li>Focus on behaviour, discipline and core values</li>
                  </ul>
                </div>
                <div className="card">
                  <h3>Performance group</h3>
                  <p>For the most motivated players (17–23 years old).</p>
                  <ul className="list">
                    <li>Physical and mental preparation</li>
                    <li>Advanced tactical work and specific sessions</li>
                    <li>Support for trials and scouting opportunities</li>
                  </ul>
                </div>
              </div>

              <div className="categories">
                <h3>KAF Global Foot age groups</h3>
                <div className="chip-row">
                  <span className="chip">Cadets – U17 (14–16)</span>
                  <span className="chip">Juniors – U20 (17–20)</span>
                  <span className="chip">Prospects – U23 (21–23)</span>
                </div>
                <p className="section-text small">
                  The academy is open to players aged 14 to 23, organized into
                  age groups (Cadets U17, Juniors U20 and Prospects U23) based
                  on age and level.
                </p>
              </div>
            </div>
          </section>

          {/* SCHEDULE & LOCATION */}
          <section id="schedule" className="section section-alt">
            <div className="container">
              <h2 className="section-title">Training schedule & location</h2>

              <div className="grid-2">
                <div className="card">
                  <h3>Training schedule</h3>
                  <ul className="list">
                    <li>Training from Monday to Saturday</li>
                    <li>Sunday: rest day</li>
                  </ul>
                  <p className="section-text small">
                    Exact training times are organized by age group and
                    communicated to players and parents. They may slightly
                    change depending on competitions and events.
                  </p>
                </div>

                <div className="card">
                  <h3>Training ground</h3>
                  <p>
                    <strong>Kafountine High School pitch</strong>
                    <br />
                    Crewane, Kafountine, Bignona department, Ziguinchor region
                    (Casamance, Senegal).
                  </p>

                  <div
                    style={{
                      marginTop: "0.75rem",
                      borderRadius: "0.75rem",
                      overflow: "hidden",
                      border: "1px solid #e5e7eb",
                      boxShadow: "0 10px 25px -18px rgba(15, 23, 42, 0.35)",
                    }}
                  >
                    <iframe
                      title="KAF Global Foot training ground map"
                      src="https://www.google.com/maps?q=Terrain+du+Lyc%C3%A9e+de+Kafountine+Crewane+Kafountine+Senegal&output=embed"
                      width="100%"
                      height="260"
                      style={{ border: 0 }}
                      loading="lazy"
                    ></iframe>
                  </div>

                  <p
                    className="section-text small"
                    style={{ marginTop: "0.5rem" }}
                  >
                    Use the map to easily locate the training ground in
                    Kafountine.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* GALLERY */}
          <section id="gallery" className="section section-alt">
            <div className="container">
              <h2 className="section-title">KAF Global Foot in pictures</h2>

              <div className="gallery-grid">
                <figure className="gallery-item">
                  <img
                    src="/gallery1.jpg"
                    alt="KAF Global Foot training session"
                  />
                </figure>
                <figure className="gallery-item">
                  <img
                    src="/gallery2.jpg"
                    alt="Young players at KAF Global Foot"
                  />
                </figure>
                <figure className="gallery-item">
                  <img
                    src="/gallery3.jpg"
                    alt="Technical work during training"
                  />
                </figure>
                <figure className="gallery-item">
                  <img
                    src="/gallery4.jpg"
                    alt="Team photo at KAF Global Foot"
                  />
                </figure>
                <figure className="gallery-item">
                  <img src="/gallery5.jpg" alt="Match during training" />
                </figure>
                <figure className="gallery-item">
                  <img
                    src="/gallery6.jpg"
                    alt="Atmosphere at the academy"
                  />
                </figure>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="section">
            <div className="container">
              <h2 className="section-title">Contact KAF Global Foot</h2>
              <p className="section-text">
                For any questions (registrations, schedule, fees, partnerships),
                feel free to contact us:
              </p>
              <ul className="list">
                <li>
                  <strong>Phone / WhatsApp:</strong> +221 78 270 24 57
                </li>
                <li>
                  <strong>Professional email:</strong>{" "}
                  <a href="mailto:contact@kafglobalfoot.com">
                    contact@kafglobalfoot.com
                  </a>
                </li>
                <li>
                  <strong>Secondary email:</strong>{" "}
                  <a href="mailto:kafglobalfoot@gmail.com">
                    kafglobalfoot@gmail.com
                  </a>
                </li>
              </ul>

              <div style={{ marginTop: "1.5rem" }}>
                <Link href="/inscription" className="btn">
                  Pre-registration form (French)
                </Link>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container footer-content">
            <p>
              © {new Date().getFullYear()} KAF Global Foot. All rights
              reserved.
            </p>
            <p className="footer-meta">
              Website built with Next.js &amp; deployed on Vercel.
            </p>
          </div>
        </footer>

        {/* WHATSAPP BUTTON */}
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
