// pages/api/inscription.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ ok: false, message: "Méthode non autorisée" });
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

  // Vérification basique des champs importants
  if (!nom || !age || !telephone || !niveau) {
    return res.status(400).json({
      ok: false,
      message: "Merci de remplir tous les champs obligatoires.",
    });
  }

  // 🔧 Récupération des infos SMTP (plusieurs noms possibles, pour coller
  // à ta config précédente si elle avait d'autres noms de variables)
  const smtpUser =
    process.env.SMTP_USER ||
    process.env.EMAIL_USER ||
    process.env.MAIL_USER;

  const smtpPass =
    process.env.SMTP_PASS ||
    process.env.EMAIL_PASS ||
    process.env.MAIL_PASS;

  const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
  const smtpPort = Number(process.env.SMTP_PORT || 465); // 465 = SSL chez Hostinger

  if (!smtpUser || !smtpPass) {
    console.error(
      "❌ SMTP_USER / SMTP_PASS manquants dans les variables d'environnement"
    );
    return res.status(500).send(
      "Le formulaire est bien configuré mais l'envoi d'email n'est pas encore paramétré côté serveur (identifiants SMTP manquants)."
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true pour 465 (SSL)
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Optionnel mais pratique en debug : vérifier la connexion SMTP
    await transporter.verify();

    const toEmail =
      process.env.CONTACT_EMAIL || "contact@kafglobalfoot.com";

    const texteBrut = `
Nouvelle pré-inscription sur le site KAF Global Foot

👤 Joueur
- Nom : ${nom}
- Âge : ${age}
- Poste : ${poste || "Non précisé"}

👨‍👩‍👦 Parent / tuteur
- Nom : ${nomParent || "Non précisé"}
- Téléphone / WhatsApp : ${telephone}
- Email : ${email || "Non précisé"}

⚽ Profil sportif
- Niveau : ${niveau}
- Club / École : ${club || "Non précisé"}

📝 Message complémentaire :
${message || "Aucun message ajouté."}
    `.trim();

    const html = `
      <h2>Nouvelle pré-inscription – KAF Global Foot</h2>
      <h3>👤 Joueur</h3>
      <ul>
        <li><strong>Nom :</strong> ${nom}</li>
        <li><strong>Âge :</strong> ${age}</li>
        <li><strong>Poste :</strong> ${poste || "Non précisé"}</li>
      </ul>

      <h3>👨‍👩‍👦 Parent / tuteur</h3>
      <ul>
        <li><strong>Nom :</strong> ${nomParent || "Non précisé"}</li>
        <li><strong>Téléphone / WhatsApp :</strong> ${telephone}</li>
        <li><strong>Email :</strong> ${email || "Non précisé"}</li>
      </ul>

      <h3>⚽ Profil sportif</h3>
      <ul>
        <li><strong>Niveau :</strong> ${niveau}</li>
        <li><strong>Club / école :</strong> ${club || "Non précisé"}</li>
      </ul>

      <h3>📝 Message complémentaire</h3>
      <p>${message || "Aucun message ajouté."}</p>

      <hr />
      <p>Message envoyé automatiquement depuis le site <strong>kafglobalfoot.com</strong>.</p>
    `;

    const info = await transporter.sendMail({
      from: `"KAF Global Foot – Site" <${smtpUser}>`,
      to: toEmail,
      subject: `Nouvelle pré-inscription : ${nom}`,
      text: texteBrut,
      html,
    });

    console.log("✅ Email de pré-inscription envoyé :", info.messageId);

    // Redirection vers la page de remerciement
    res.writeHead(302, { Location: "/merci" });
    res.end();
  } catch (error) {
    console.error("❌ Erreur lors de l'envoi de l'email d'inscription :", error);
    return res
      .status(500)
      .send("Une erreur est survenue lors de l'envoi du formulaire.");
  }
}
