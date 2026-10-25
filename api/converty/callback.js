// Placeholder only. Do not register a live OAuth integration until Converty's
// documented authorization flow and token-exchange endpoint have been confirmed.
module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  return res.status(501).json({
    status: "not_configured",
    message: "The Converty OAuth callback is not configured yet. Please do not complete authorization until the official API flow has been implemented."
  });
};