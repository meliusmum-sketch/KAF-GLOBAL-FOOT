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

  // On vérifie juste les champs vraiment obligatoires
  if (!nom || !date_naissance || !categorie || !parent || !telephone) {
    return res
      .status(400)
      .json({ error: "Certains champs obligatoires sont manquants." });
  }

  try {
    // ⚠️ On n'insère que les colonnes qui EXISTENT dans la table:
    // id (auto), nom, date_naissance, categorie, parent, telephone
    const { data, error } = await supabase
      .from("inscriptions")
      .insert([
        {
          nom,
          date_naissance,
          categorie,
          parent,
          telephone,
        },
      ])
      .select();

    if (error) {
      console.error("Supabase insert error:", error);
      return res
        .status(500)
        .json({ error: "Erreur Supabase: " + error.message });
    }

    return res.status(200).json({ ok: true, id: data?.[0]?.id });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Erreur serveur: " + err.message });
  }
}
