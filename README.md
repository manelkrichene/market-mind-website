# Market Mind Website

The repository contains the static Market Mind V2 website.

## Website files
- `index.html` — page content and layout
- `styles.css` — styling and responsive layouts
- `script.js` — interactions and animations
- `site-config.js` — contact and product settings
- `assets/market-mind-logo.png` — brand logo
- `assets/cover-page.jpg` — Launch Before You Stock cover image
- `assets/favicon.svg` — browser icon

## Deploy on Cloudflare Pages
This is a plain static HTML website. It does not need Wrangler, a Node build, a Worker, or a server-side API.

- Framework preset: **None**
- Build command: `exit 0`
- Build output directory: `.`
- Root directory: leave blank
- Production branch: `main`

Do not enter a Worker deploy command such as `npx wrangler preview`. Create a **Pages** project and publish the static files from this repository.

## Configuration
Contact details and product checkout settings are in `site-config.js`. The checkout URL is currently blank and should be set only once the real checkout URL is available.
