export default function handler(req, res) {
  // Petit log pour debug (visible uniquement dans les logs Vercel)
  console.log("Inscription API appelée, méthode:", req.method, "body:", req.body);

  // On renvoie TOUJOURS succès, quelle que soit la méthode
  return res.status(200).json({ ok: true });
}
