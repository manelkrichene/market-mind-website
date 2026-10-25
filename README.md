# Market Mind — Premium Website V2

A responsive, animated editorial website concept for Market Mind Strategic Marketing Consultancy.

## What's included
- `index.html` — homepage content and structure
- `styles.css` — responsive art direction and animation system
- `script.js` — mobile navigation, reveal animations, subtle hero parallax, configurable product CTA
- `site-config.js` — easy edits for contact email, phone, product price, currency and Converty checkout URL
- `assets/market-mind-logo.webp` — cropped/optimized version of the official supplied logo
- `assets/launch-before-you-stock.webp` — optimized version of the supplied e-book cover
- `assets/favicon.svg` — small site icon
- `api/converty/callback.js` — placeholder only, not an active OAuth integration

## Preview
Open `index.html` in a modern browser. For best local testing, serve this folder with a static local server, or deploy it to Vercel.

## Updating product checkout
Open `site-config.js` and replace the empty `purchaseUrl` with the real HTTPS checkout URL from the Market Mind product in Converty. The purchase button currently falls back to a pre-filled email enquiry; it does not pretend to process a payment.

## Updating contact details
Edit `contactEmail`, `phoneDisplay`, and `phoneLink` in `site-config.js`.

## Deploy as a separate preview
Import this project / branch into Vercel to generate a preview URL. Keep the first version on `main` untouched until you decide which direction to use.

## Before public launch
- Add the direct Converty checkout URL to `site-config.js` after testing it.
- Verify the actual digital-download delivery flow in Converty.
- Replace/confirm final privacy/legal pages and any tracking disclosures.
- Verify every contact detail, social URL and service description.
- The logo supplied in the Library is used; no client testimonials or performance claims are invented.

## Converty OAuth
`api/converty/callback.js` is intentionally a 501 placeholder. Do not use it as an active OAuth redirect until Converty's authorization URL, redirect requirements, state validation and token endpoint are confirmed and implemented.