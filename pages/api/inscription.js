import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // On n'accepte que le POST (les envois du formulaire)
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Méthode non autorisée" });
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

  // Quelques champs obligatoires
  if (!nom || !age || !telephone || !niveau) {
    return res
      .status(400)
      .json({ message: "Merci de remplir tous les champs obligatoires." });
  }

  try {
    // Transporteur Nodemailer (configuration SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Adresse qui reçoit les pré-inscriptions
    const toEmail = process.env.CONTACT_EMAIL || "contact@kafglobalfoot.com";

    const subject = `Nouvelle pré-inscription : ${nom} (${age} ans)`;

    const plainText = `
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
`;

    const htmlBody = `
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
        <li><strong>Email :</strong> ${email || "Non précisé"}</li>
      </ul>
      <h3>Informations sportives</h3>
      <ul>
        <li><strong>Niveau actuel :</strong> ${niveau}</li>
        <li><strong>Club / école actuelle :</strong> ${
          club || "Non précisé"
        }</li>
      </ul>
      <h3>Message complémentaire</h3>
      <p>${(message || "Aucun message ajouté.").replace(/\n/g, "<br />")}</p>
    `;

    // Envoi du mail
    await transporter.sendMail({
      from: `"KAF Global Foot" <${process.env.SMTP_USER}>`,
      to: toEmail,
      subject,
      text: plainText,
      html: htmlBody,
    });

    // Si le navigateur attend du HTML (form classique) → on redirige vers /merci
    const acceptHeader = req.headers.accept || "";
    if (acceptHeader.includes("application/json")) {
      return res.status(200).json({ ok: true });
    } else {
      return res.redirect(303, "/merci");
    }
  } catch (error) {
    console.error("Erreur envoi inscription:", error);
    return res
      .status(500)
      .send("Une erreur est survenue lors de l'envoi du formulaire.");
  }
}
