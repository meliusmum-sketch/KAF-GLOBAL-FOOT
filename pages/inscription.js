// pages/api/inscription.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  const {
    joueurNom,
    joueurNaissance,
    categorieAge,
    poste,
    parentNom,
    parentTel,
    parentEmail,
    message,
  } = req.body || {};

  if (!joueurNom || !joueurNaissance || !categorieAge || !parentNom || !parentTel || !parentEmail) {
    return res
      .status(400)
      .json({ ok: false, message: "Champs obligatoires manquants" });
  }

  // Transport SMTP (Hostinger) via variables d'environnement Vercel
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: true, // true pour 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailText = `
Nouvelle pré-inscription KAF Global Foot

🧒 Joueur
- Nom et prénom : ${joueurNom}
- Date de naissance : ${joueurNaissance}
- Catégorie d'âge : ${categorieAge}
- Poste préféré : ${poste || "(non précisé)"}

👨‍👩‍👦 Parent / tuteur
- Nom et prénom : ${parentNom}
- Téléphone : ${parentTel}
- Email : ${parentEmail}

📝 Message complémentaire
${message || "(aucun message ajouté)"}
`;

  try {
    await transporter.sendMail({
      from: `"KAF Global Foot" <${process.env.SMTP_USER}>`,
      to: "contact@kafglobalfoot.com",
      subject: "Nouvelle pré-inscription KAF Global Foot",
      text: mailText,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Erreur envoi email:", error);
    return res
      .status(500)
      .json({ ok: false, message: "Erreur lors de l'envoi de l'email" });
  }
}
