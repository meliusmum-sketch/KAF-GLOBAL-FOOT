import { supabase } from "../../lib/supabaseClient";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const {
    nom,
    date_naissance,
    categorie,
    parent,
    telephone,
    email,
    message,
  } = req.body;

  if (!nom || !date_naissance || !categorie || !parent || !telephone) {
    return res
      .status(400)
      .json({ error: "Certains champs obligatoires sont manquants." });
  }

  try {
    const { error } = await supabase.from("inscriptions").insert([
      {
        nom,
        date_naissance,
        categorie,
        parent,
        telephone,
        email,
        message,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      // On renvoie le message détaillé pour le voir côté navigateur
      return res
        .status(500)
        .json({ error: error.message || "Erreur lors de l'enregistrement." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Erreur serveur." });
  }
}
