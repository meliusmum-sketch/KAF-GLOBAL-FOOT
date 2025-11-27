// pages/api/inscription.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // On accepte uniquement le POST
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Méthode non autorisée" });
  }

  const {
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

  // Champs obligatoires
  if (!nom || !age || !telephone || !niveau) {
    return res.status(400).send(
      "Merci de remplir tous les champs obligatoires (nom, âge, téléphone, niveau)."
    );
  }

  // Récupération des variables d'environnement EXACTEMENT comme sur Vercel
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT) || 465;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const receiverEmail =
    process.env.RECEIVER_EMAIL || smtpUser || "contact@kafglobalfoot.com";

  if (!smtpHost || !smtpUser || !smtpPass) {
    console.error("❌ SMTP_HOST / SMTP_USER / SMTP_PASS manquants");
    return res
      .status(500)
      .send(
        "Configuration d'envoi d'e-mail incomplète sur le serveur (variables SMTP manquantes)."
      );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true pour le port SSL classique
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subject = `Nouvelle pré-inscription : ${nom} (${age} ans)`;

    const text = `
Nouvelle pré-inscription KAF Global Foot

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

--- Message complémentaire ---
${message || "Aucun message ajouté."}
    `.trim();

    const html = `
      <h2>Nouvelle pré-inscription KAF Global Foot</h2>

      <h3>Joueur</h3>
      <ul>
        <li><strong>Nom :</strong> ${nom}</li>
        <li><strong>Âge :</strong> ${age}</li>
        <li><strong>Poste :</strong> ${poste || "Non précisé"}</li>
      </ul>

      <h3>Parent / tuteur</h3>
      <ul>
        <li><strong>Nom :</strong> ${nomParent || "Non précisé"}</li>
        <li><strong>Téléphone / WhatsApp :</strong> ${telephone}</li>
        <li><strong>E-mail :</strong> ${email || "Non précisé"}</li>
      </ul>

      <h3>Informations sportives</h3>
      <ul>
        <li><strong>Niveau actuel :</strong> ${niveau}</li>
        <li><strong>Club / école actuelle :</strong> ${
          club || "Non précisé"
        }</li>
      </ul>

      <h3>Message complémentaire</h3>
      <p>${(message || "Aucun message ajouté.").replace(
        /\n/g,
        "<br />"
      )}</p>

      <hr />
      <p>Message envoyé automatiquement depuis le site <strong>kafglobalfoot.com</strong>.</p>
    `;

    // Envoi de l'e-mail
    await transporter.sendMail({
      from: `"KAF Global Foot – Site" <${smtpUser}>`,
      to: receiverEmail,
      subject,
      text,
      html,
    });

    console.log("✅ E-mail de pré-inscription envoyé à :", receiverEmail);

    // Redirection classique de formulaire vers /merci
    res.writeHead(302, { Location: "/merci" });
    res.end();
  } catch (err) {
    console.error("❌ Erreur lors de l'envoi de l'email :", err);
    return res
      .status(500)
      .send("Une erreur est survenue lors de l'envoi du formulaire.");
  }
}
