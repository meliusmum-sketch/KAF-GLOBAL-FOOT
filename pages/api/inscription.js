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
    // ⚠️ On n'insère que les colonnes qui existent dans la table :
    // id, nom, date_naissance, categorie, parent, telephone
    const { error } = await supabase.from("inscriptions").insert([
      {
        nom,
        date_naissance,
        categorie,
        parent,
        telephone,
        // email et message NE SONT PAS insérés tant que la table
        // n'a pas ces colonnes. On les ajoutera plus tard.
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return res
        .status(500)
        .json({ error: "Erreur lors de l'enregistrement." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Erreur serveur." });
  }
}
