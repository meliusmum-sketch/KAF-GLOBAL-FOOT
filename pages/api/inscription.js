export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  // On ne fait rien avec Supabase ici.
  // On renvoie juste "ok: true" pour tester que l'API répond bien.
  try {
    console.log("Données reçues:", req.body);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Erreur côté serveur:", err);
    return res.status(500).json({ error: "Erreur serveur simple." });
  }
}
