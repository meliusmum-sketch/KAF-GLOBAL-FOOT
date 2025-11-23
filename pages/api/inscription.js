import { supabase } from "../../lib/supabaseClient";

export default async function handler(req, res) {
  console.log("Méthode reçue :", req.method);
  console.log("Corps reçu :", req.body);

  // On récupère les champs envoyés par le formulaire
  const {
    nom,
    date_naissance,
    categorie,
    parent,
    telephone,
    email,
    message,
  } = req.body || {};

  try {
    // Si on a bien les infos principales, on enregistre dans la table
    if (nom && date_naissance && categorie && parent && telephone) {
      const { error } = await supabase.from("inscriptions").insert([
        {
          nom,
          date_naissance,
          categorie,
          parent,
          telephone,
          // La table actuelle n'a pas encore email / message
          // donc on ne les enregistre pas pour l'instant.
        },
      ]);

      if (error) {
        console.error("Supabase insert error:", error);
        return res
          .status(500)
          .json({ error: "Erreur Supabase: " + error.message });
      }
    }

    // ⚠️ Très important : on NE renvoie plus jamais 405 ici.
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Erreur serveur: " + err.message });
  }
}
