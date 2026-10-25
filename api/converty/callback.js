// Placeholder only. Keep this endpoint disabled until Converty's official OAuth/API flow is confirmed.
// Do not register this as a working authorization callback yet: token exchange and state validation
// must be implemented according to Converty's actual documentation.
module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  return res.status(501).json({
    status: "not_configured",
    message: "The Converty callback is a placeholder. Authorization cannot be completed until the documented flow is configured."
  });
};