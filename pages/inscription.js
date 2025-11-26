// pages/api/inscription.js
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

  console.log("Nouvelle pré-inscription TEST:", {
    joueurNom,
    joueurNaissance,
    categorieAge,
    poste,
    parentNom,
    parentTel,
    parentEmail,
    message,
  });

  // On répond simplement OK, sans envoyer d'email
  return res.status(200).json({ ok: true });
}
