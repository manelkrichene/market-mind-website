# Market Mind Website

Bright, responsive homepage prototype for Market Mind Strategic Marketing Consultancy.

## Files
- `index.html` — homepage
- `styles.css` — responsive styling and visual system
- `script.js` — mobile navigation and current-year footer
- `assets/favicon.svg` — illustrative favicon
- `api/converty/callback.js` — placeholder callback route only

## Deploy on Vercel
1. Import this GitHub repository into Vercel.
2. Choose **Other** / static HTML if asked for a framework. Leave the build command empty and deploy from the repository root.
3. After deployment, copy the actual Vercel production domain.
4. A callback URL would have the form `https://YOUR-VERCEL-DOMAIN/api/converty/callback`.

## Important
The callback route is a placeholder returning HTTP 501. It is not a working OAuth callback. Converty's supported authorization URL, redirect requirements, token endpoint, and API specifications must be confirmed before using the route in a live authorization flow. Never place a Client Secret or API token in front-end code or commit secrets to this repository.

The contact email and CTA destinations are examples. Replace them with the real business email, live e-book/product URL, and checkout path before publishing. The e-book visual is illustrative and should be replaced with the actual cover. The logo mark is a temporary interpretation; use the official Market Mind logo asset when available.
