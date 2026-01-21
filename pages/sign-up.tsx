import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";

type Step = 1 | 2 | 3;

function makeDossierId() {
  const y = new Date().getFullYear();
  const n = Math.floor(100000 + Math.random() * 900000);
  return `KAF-${y}-${n}`;
}

export default function SignUp() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kafglobalfoot.com";
  const [step, setStep] = useState<Step>(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitOk, setSubmitOk] = useState(false);
  const [error, setError] = useState("");

  // dossier id généré côté client (simple et fiable)
  const [dossierId] = useState(makeDossierId);

  // montant “confirmation dossier” (tu peux changer)
  const [amountFcfa, setAmountFcfa] = useState<number>(5000);

  // Champs principaux (tu peux en ajouter)
  const [playerName, setPlayerName] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [nationality, setNationality] = useState("Sénégalaise");
  const [position, setPosition] = useState("");
  const [strongFoot, setStrongFoot] = useState<"Droit" | "Gauche" | "Les deux" | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [weight, setWeight] = useState<number | "">("");
  const [currentClub, setCurrentClub] = useState("");

  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState(""); // 9 chiffres conseillé
  const [email, setEmail] = useState("");
  const [whatsappOk, setWhatsappOk] = useState(true);

  const [goal, setGoal] = useState<"Club à l'étranger" | "Camp d'entraînement" | "Les deux">(
    "Les deux"
  );
  const [countries, setCountries] = useState("");
  const [videoLinks, setVideoLinks] = useState("");
  const [notes, setNotes] = useState("");

  const isMinor = useMemo(() => (typeof age === "number" ? age < 18 : false), [age]);

  function next() {
    setError("");
    if (step === 1) {
      if (!playerName || age === "" || typeof age !== "number") {
        setError("Merci de renseigner le nom du joueur et l'âge.");
        return;
      }
      if (age < 14 || age > 23) {
        setError("Âge recommandé : 14 à 23 ans.");
        return;
      }
    }
    if (step === 2) {
      if (!phone) {
        setError("Merci de renseigner un numéro téléphone/WhatsApp.");
        return;
      }
    }
    setStep((s) => (s === 3 ? 3 : ((s + 1) as Step)));
  }

  function back() {
    setError("");
    setStep((s) => (s === 1 ? 1 : ((s - 1) as Step)));
  }

  function normalizeSnPhone(input: string) {
    const digits = (input || "").replace(/\D/g, "");
    return digits.length > 9 ? digits.slice(-9) : digits;
  }

  async function submitLead() {
    setError("");
    setSubmitting(true);
    try {
      // On envoie en format "form-data" (compatible avec beaucoup d'API)
      const fd = new FormData();
      fd.append("nom", playerName);
      fd.append("age", String(age));
      fd.append("poste", position);
      fd.append("nomParent", parentName);
      fd.append("telephone", normalizeSnPhone(phone));
      fd.append("email", email);
      fd.append("club", currentClub);
      fd.append("message", [
        `DOSSIER ID: ${dossierId}`,
        `Objectif: ${goal}`,
        `Pays visés: ${countries || "-"}`,
        `Pied fort: ${strongFoot || "-"}`,
        `Taille(cm): ${height === "" ? "-" : height}`,
        `Poids(kg): ${weight === "" ? "-" : weight}`,
        `Vidéos: ${videoLinks || "-"}`,
        `WhatsApp OK: ${whatsappOk ? "Oui" : "Non"}`,
        `Notes: ${notes || "-"}`,
      ].join("\n"));

      // IMPORTANT : tu as déjà /api/inscription sur ton site
      // On l'utilise pour conserver ta logique existante.
      const res = await fetch("/api/inscription", { method: "POST", body: fd });

      if (!res.ok) {
        // on ne dépend pas du format de réponse
        throw new Error("Envoi non confirmé. Réessaie ou contacte-nous sur WhatsApp.");
      }

      setSubmitOk(true);
    } catch (e: any) {
      setError(e?.message || "Erreur lors de l'envoi.");
      setSubmitOk(false);
    } finally {
      setSubmitting(false);
    }
  }

  const payLink = useMemo(() => {
    const q = new URLSearchParams();
    q.set("dossierId", dossierId);
    q.set("amount", String(amountFcfa));
    q.set("customerName", playerName || "");
    q.set("phoneNumber", normalizeSnPhone(phone));
    q.set("customerEmail", email || "");
    return `/paiement?${q.toString()}`;
  }, [dossierId, amountFcfa, playerName, phone, email]);

  return (
    <>
      <Head>
        <title>Sign Up – KAF Global Foot</title>
        <meta
          name="description"
          content="Inscription pro KAF Global Foot : dossier joueur complet (club à l'étranger / camp), puis confirmation par paiement Wave ou Orange Money."
        />
        <link rel="canonical" href={`${siteUrl}/sign-up`} />
      </Head>

      <div className="kaf-signup">
        {/* HEADER simple (cohérent avec ton site) */}
        <header className="kaf-header">
          <div className="kaf-header-inner">
            <div className="kaf-brand">
              <img src="/logo-kaf.svg" alt="KAF Global Foot" />
              <div>
                <div className="kaf-title">KAF Global Foot</div>
                <div className="kaf-subtitle">Dossier joueur · Club à l’étranger / Camp</div>
              </div>
            </div>

            <nav className="kaf-nav">
              <Link href="/">Accueil</Link>
              <Link href="/inscription">Pré-inscription</Link>
              <a href="/downloads/KAF_Global_Foot_Player_Form_Final.pdf" target="_blank" rel="noreferrer">
                Formulaire PDF
              </a>
              <Link href="/confidentialite">Confidentialité</Link>
            </nav>
          </div>
        </header>

        {/* HERO / Steps */}
        <main className="kaf-main">
          <div className="kaf-hero">
            <h1>Inscription pro (dossier complet)</h1>
            <p>
              Objectif : constituer un dossier solide pour vous aider à trouver{" "}
              <b>un club à l’étranger</b> ou <b>un camp d’entraînement</b>.
            </p>

            <div className="kaf-steps">
              <div className={`kaf-step ${step === 1 ? "active" : ""}`}>
                <div className="num">1</div>
                <div>
                  <div className="label">Profil joueur</div>
                  <div className="hint">Nom, âge, poste</div>
                </div>
              </div>
              <div className={`kaf-step ${step === 2 ? "active" : ""}`}>
                <div className="num">2</div>
                <div>
                  <div className="label">Contact & projet</div>
                  <div className="hint">WhatsApp, objectifs</div>
                </div>
              </div>
              <div className={`kaf-step ${step === 3 ? "active" : ""}`}>
                <div className="num">3</div>
                <div>
                  <div className="label">Résumé & confirmation</div>
                  <div className="hint">Paiement Wave/OM</div>
                </div>
              </div>
            </div>

            <div className="kaf-badges">
              <span>Dossier ID : <b>{dossierId}</b></span>
              <span>Contact : <b>+221 783616382</b></span>
              <a className="wa" href="https://wa.me/221783616382" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>

          {/* CARD FORM */}
          <div className="kaf-card">
            {error ? <div className="kaf-alert">{error}</div> : null}

            {/* STEP 1 */}
            {step === 1 && (
              <>
                <h2>1) Profil du joueur</h2>

                <div className="grid">
                  <label>
                    Nom complet *
                    <input value={playerName} onChange={(e) => setPlayerName(e.target.value)} placeholder="Ex : Diop Mamadou" />
                  </label>

                  <label>
                    Âge (14 à 23) *
                    <input
                      type="number"
                      min={10}
                      max={30}
                      value={age}
                      onChange={(e) => setAge(e.target.value === "" ? "" : Number(e.target.value))}
                      placeholder="Ex : 17"
                    />
                  </label>

                  <label>
                    Nationalité
                    <input value={nationality} onChange={(e) => setNationality(e.target.value)} />
                  </label>

                  <label>
                    Poste
                    <input value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Ex : Milieu offensif" />
                  </label>

                  <label>
                    Pied fort
                    <select value={strongFoot} onChange={(e) => setStrongFoot(e.target.value as any)}>
                      <option value="">Sélectionner</option>
                      <option value="Droit">Droit</option>
                      <option value="Gauche">Gauche</option>
                      <option value="Les deux">Les deux</option>
                    </select>
                  </label>

                  <label>
                    Taille (cm)
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value === "" ? "" : Number(e.target.value))}
                      placeholder="Ex : 175"
                    />
                  </label>

                  <label>
                    Poids (kg)
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value === "" ? "" : Number(e.target.value))}
                      placeholder="Ex : 68"
                    />
                  </label>

                  <label>
                    Club actuel / École
                    <input value={currentClub} onChange={(e) => setCurrentClub(e.target.value)} placeholder="Ex : ASC Kafountine" />
                  </label>
                </div>

                <div className="actions">
                  <Link className="btn ghost" href="/inscription">
                    ← Pré-inscription classique
                  </Link>
                  <button className="btn primary" onClick={next}>
                    Continuer →
                  </button>
                </div>
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                <h2>2) Contact & projet</h2>

                <div className="grid">
                  <label>
                    Téléphone / WhatsApp (9 chiffres conseillé) *
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ex : 783616382"
                    />
                    <small>On vous répond sur ce numéro.</small>
                  </label>

                  <label>
                    Email (recommandé)
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ex : contact@exemple.com" />
                  </label>

                  <label>
                    Parent / Tuteur (si mineur)
                    <input
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder="Ex : Ndiaye Awa"
                    />
                    {isMinor ? <small><b>Le joueur est mineur :</b> merci d’indiquer le parent/tuteur.</small> : null}
                  </label>

                  <label>
                    Objectif *
                    <select value={goal} onChange={(e) => setGoal(e.target.value as any)}>
                      <option value="Club à l'étranger">Club à l'étranger</option>
                      <option value="Camp d'entraînement">Camp d'entraînement</option>
                      <option value="Les deux">Les deux</option>
                    </select>
                  </label>

                  <label>
                    Pays visés (optionnel)
                    <input value={countries} onChange={(e) => setCountries(e.target.value)} placeholder="Ex : France, Belgique, Portugal..." />
                  </label>

                  <label>
                    Liens vidéos (YouTube/Drive) (optionnel)
                    <textarea
                      rows={3}
                      value={videoLinks}
                      onChange={(e) => setVideoLinks(e.target.value)}
                      placeholder="Colle 1 à 3 liens (3–5 min max si possible)."
                    />
                  </label>

                  <label>
                    Autorisation WhatsApp
                    <select value={whatsappOk ? "oui" : "non"} onChange={(e) => setWhatsappOk(e.target.value === "oui")}>
                      <option value="oui">Oui</option>
                      <option value="non">Non</option>
                    </select>
                  </label>

                  <label>
                    Notes / Infos utiles (optionnel)
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Motivation, disponibilités, essais déjà faits..."
                    />
                  </label>
                </div>

                <div className="actions">
                  <button className="btn ghost" onClick={back}>
                    ← Retour
                  </button>
                  <button className="btn primary" onClick={next}>
                    Continuer →
                  </button>
                </div>
              </>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <>
                <h2>3) Résumé & confirmation</h2>

                <div className="summary">
                  <div><b>Joueur :</b> {playerName || "-"}</div>
                  <div><b>Âge :</b> {age === "" ? "-" : age}</div>
                  <div><b>Poste :</b> {position || "-"}</div>
                  <div><b>Club :</b> {currentClub || "-"}</div>
                  <div><b>Objectif :</b> {goal}</div>
                  <div><b>Pays visés :</b> {countries || "-"}</div>
                  <div><b>Vidéos :</b> {videoLinks ? "Oui (liens fournis)" : "-"}</div>
                  <div><b>Téléphone :</b> {phone || "-"}</div>
                  <div><b>Email :</b> {email || "-"}</div>
                  <div><b>Dossier ID :</b> {dossierId}</div>
                </div>

                <div className="paybox">
                  <div className="payline">
                    <b>Frais de confirmation dossier</b>
                    <span>Montant (FCFA)</span>
                  </div>

                  <input
                    type="number"
                    min={500}
                    value={amountFcfa}
                    onChange={(e) => setAmountFcfa(Number(e.target.value))}
                  />

                  <p className="note">
                    Après paiement (Wave / Orange Money), le dossier passe en statut <b>confirmé</b>.
                  </p>

                  <div className="pay-actions">
                    {!submitOk ? (
                      <button className="btn primary" onClick={submitLead} disabled={submitting}>
                        {submitting ? "Envoi..." : "Envoyer le dossier"}
                      </button>
                    ) : (
                      <div className="ok">✅ Dossier envoyé.</div>
                    )}

                    <a className={`btn ${submitOk ? "primary" : "disabled"}`} href={submitOk ? payLink : "#"}>
                      Confirmer par paiement →
                    </a>
                  </div>

                  <p className="note">
                    Besoin d’aide ? <a href="https://wa.me/221783616382" target="_blank" rel="noreferrer">WhatsApp +221 783616382</a>
                  </p>
                </div>

                <div className="actions">
                  <button className="btn ghost" onClick={back}>
                    ← Retour
                  </button>
                  <Link className="btn ghost" href="/">
                    Accueil
                  </Link>
                </div>

                <p className="privacy">
                  <b>Protection des données :</b> informations confidentielles, utilisées uniquement pour constituer et gérer le dossier joueur.
                  Partage possible avec clubs/agents/organisateurs <b>uniquement avec votre accord</b>.{" "}
                  <Link href="/confidentialite">En savoir plus</Link>.
                </p>
              </>
            )}
          </div>
        </main>

        {/* CSS intégré (pas besoin de toucher globals.css) */}
        <style jsx>{`
          .kaf-signup { min-height: 100vh; background: #0b1220; color: #eaf0ff; }
          .kaf-header { position: sticky; top: 0; z-index: 20; background: rgba(11,18,32,.9); backdrop-filter: blur(8px); border-bottom: 1px solid rgba(255,255,255,.08); }
          .kaf-header-inner { max-width: 1100px; margin: 0 auto; padding: 14px 16px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
          .kaf-brand { display:flex; align-items:center; gap:12px; }
          .kaf-brand img { width: 38px; height: 38px; }
          .kaf-title { font-weight: 800; letter-spacing:.2px; }
          .kaf-subtitle { opacity:.8; font-size: 13px; }
          .kaf-nav { display:flex; gap:14px; flex-wrap:wrap; }
          .kaf-nav :global(a) { color: #eaf0ff; text-decoration:none; opacity:.9; font-size: 14px; }
          .kaf-nav :global(a:hover) { opacity: 1; text-decoration: underline; }

          .kaf-main { max-width: 1100px; margin: 0 auto; padding: 24px 16px 60px; display: grid; gap: 18px; }
          .kaf-hero { background: linear-gradient(135deg, rgba(66,153,225,.18), rgba(16,185,129,.12)); border: 1px solid rgba(255,255,255,.10); border-radius: 18px; padding: 18px; }
          .kaf-hero h1 { margin: 0 0 8px; font-size: 28px; }
          .kaf-hero p { margin: 0 0 14px; opacity:.9; }

          .kaf-steps { display:grid; grid-template-columns: 1fr; gap: 10px; margin-top: 10px; }
          @media (min-width: 820px) {
            .kaf-steps { grid-template-columns: 1fr 1fr 1fr; }
          }
          .kaf-step { display:flex; gap: 10px; align-items: center; padding: 12px; border-radius: 14px; border: 1px solid rgba(255,255,255,.10); background: rgba(0,0,0,.20); }
          .kaf-step.active { border-color: rgba(66,153,225,.8); background: rgba(66,153,225,.12); }
          .kaf-step .num { width: 34px; height: 34px; border-radius: 12px; display:flex; align-items:center; justify-content:center; font-weight: 800; background: rgba(255,255,255,.10); }
          .kaf-step .label { font-weight: 700; }
          .kaf-step .hint { opacity:.8; font-size: 13px; }

          .kaf-badges { display:flex; gap: 10px; flex-wrap: wrap; margin-top: 12px; align-items:center; }
          .kaf-badges span { border: 1px solid rgba(255,255,255,.10); background: rgba(0,0,0,.20); padding: 8px 10px; border-radius: 999px; font-size: 13px; }
          .kaf-badges .wa { margin-left: auto; border: 1px solid rgba(16,185,129,.55); background: rgba(16,185,129,.18); padding: 8px 12px; border-radius: 999px; color: #eafff6; text-decoration:none; font-weight: 700; }

          .kaf-card { background: rgba(0,0,0,.25); border: 1px solid rgba(255,255,255,.10); border-radius: 18px; padding: 18px; }
          .kaf-card h2 { margin: 0 0 12px; font-size: 20px; }

          .kaf-alert { background: rgba(220, 38, 38, .18); border: 1px solid rgba(220, 38, 38, .45); padding: 10px 12px; border-radius: 14px; margin-bottom: 12px; }

          .grid { display:grid; grid-template-columns: 1fr; gap: 12px; }
          @media (min-width: 820px) { .grid { grid-template-columns: 1fr 1fr; } }

          label { display:flex; flex-direction: column; gap: 6px; font-size: 14px; }
          input, select, textarea {
            padding: 11px 12px;
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,.14);
            background: rgba(11,18,32,.55);
            color: #eaf0ff;
            outline: none;
          }
          input:focus, select:focus, textarea:focus { border-color: rgba(66,153,225,.8); }
          small { opacity:.75; font-size: 12px; }

          .actions { display:flex; gap: 10px; justify-content: space-between; margin-top: 14px; flex-wrap: wrap; }
          .btn {
            display:inline-flex; align-items:center; justify-content:center;
            padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,.14);
            background: rgba(255,255,255,.06); color: #eaf0ff; text-decoration:none; cursor:pointer; font-weight: 700;
          }
          .btn.primary { border-color: rgba(66,153,225,.7); background: rgba(66,153,225,.18); }
          .btn.ghost { background: transparent; }
          .btn.disabled { opacity:.45; pointer-events:none; }

          .summary { display:grid; gap: 8px; border: 1px solid rgba(255,255,255,.10); background: rgba(0,0,0,.18); padding: 12px; border-radius: 14px; }
          .paybox { margin-top: 14px; border: 1px solid rgba(255,255,255,.10); background: rgba(0,0,0,.18); padding: 12px; border-radius: 14px; }
          .payline { display:flex; justify-content: space-between; align-items:center; gap: 10px; margin-bottom: 10px; }
          .note { opacity:.85; font-size: 13px; margin: 10px 0 0; }
          .pay-actions { display:flex; gap: 10px; flex-wrap: wrap; margin-top: 12px; align-items:center; }
          .ok { padding: 10px 12px; border-radius: 12px; border: 1px solid rgba(16,185,129,.55); background: rgba(16,185,129,.18); font-weight: 800; }

          .privacy { margin-top: 14px; opacity:.85; font-size: 13px; }
          .privacy :global(a) { color: #eaf0ff; text-decoration: underline; }
        `}</style>
      </div>
    </>
  );
}
