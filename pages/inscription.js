import nodemailer from "nodemailer";

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Méthode non autorisée" });
  }

  const {
    formType, // "dossier-joueur" ou "preinscription"
    nom,
    age,
    poste,
    nomParent,
    telephone,
    email,
    niveau,
    club,
    message,
  } = req.body || {};

  if (!nom || !age || !telephone || !niveau) {
    return res
      .status(400)
      .send(
        "Merci de remplir tous les champs obligatoires (nom, âge, téléphone, niveau)."
      );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT) || 465;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  const receiverEmail =
    process.env.RECEIVER_EMAIL || smtpUser || "contact@kafglobalfoot.com";

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.error("❌ SMTP mal configuré (HOST/USER/PASS manquants)");
    return res
      .status(500)
      .send("Une erreur de configuration est survenue côté serveur.");
  }

  const kind =
    formType === "dossier-joueur" ? "Dossier joueur" : "Pré-inscription";

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const subject = `${kind} : ${nom} (${age} ans)`;

    const safe = {
      nom: escapeHtml(nom),
      age: escapeHtml(age),
      poste: escapeHtml(poste || "Non précisé"),
      nomParent: escapeHtml(nomParent || "Non précisé"),
      telephone: escapeHtml(telephone),
      email: escapeHtml(email || "Non précisé"),
      niveau: escapeHtml(niveau),
      club: escapeHtml(club || "Non précisé"),
      message: escapeHtml(message || "Aucun message ajouté.").replace(/\n/g, "<br />"),
    };

    const text = `
${kind} — KAF Global Foot

--- Joueur ---
Nom : ${nom}
Âge : ${age}
Poste : ${poste || "Non précisé"}

--- Parent / tuteur ---
Nom : ${nomParent || "Non précisé"}
Téléphone / WhatsApp : ${telephone}
E-mail : ${email || "Non précisé"}

--- Infos sportives ---
Niveau actuel : ${niveau}
Club / école actuelle : ${club || "Non précisé"}

--- Message / Détails ---
${message || "Aucun message ajouté."}
    `.trim();

    const html = `
      <h2>${kind} — KAF Global Foot</h2>

      <h3>Joueur</h3>
      <ul>
        <li><strong>Nom :</strong> ${safe.nom}</li>
        <li><strong>Âge :</strong> ${safe.age}</li>
        <li><strong>Poste :</strong> ${safe.poste}</li>
      </ul>

      <h3>Parent / tuteur</h3>
      <ul>
        <li><strong>Nom :</strong> ${safe.nomParent}</li>
        <li><strong>Téléphone / WhatsApp :</strong> ${safe.telephone}</li>
        <li><strong>E-mail :</strong> ${safe.email}</li>
      </ul>

      <h3>Informations sportives</h3>
      <ul>
        <li><strong>Niveau :</strong> ${safe.niveau}</li>
        <li><strong>Club / école :</strong> ${safe.club}</li>
      </ul>

      <h3>Message / Détails</h3>
      <p>${safe.message}</p>

      <hr />
      <p>Envoi automatique depuis <strong>kafglobalfoot.com</strong>.</p>
    `;

    await transporter.sendMail({
      from: `"KAF Global Foot – Site" <${smtpUser}>`,
      to: receiverEmail,
      subject,
      text,
      html,
      replyTo: email ? email : undefined,
    });

    return res.redirect(302, "/merci");
  } catch (err) {
    console.error("❌ Erreur lors de l'envoi de l'email :", err);
    return res
      .status(500)
      .send("Une erreur est survenue lors de l'envoi du formulaire.");
  }
}
