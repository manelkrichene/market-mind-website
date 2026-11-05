# Market Mind Website

A static, dark editorial website for Market Mind, built with HTML, CSS and JavaScript.

## Existing deployment
The site is maintained in this repository and deployed through the connected Vercel project `market-mind-website`. The former Cloudflare Worker URL remains a legacy public address; the Vercel project has its own production aliases. Updates are committed to `main` and trigger Vercel production deployments.

## Structure
- index.html: homepage, method, selected work, playbook, insights, social links and enquiry form
- services/index.html: full service architecture, signature offers, industries and engagement models
- work/: selected case studies and illustrative frameworks
- insights/: library and long-form research/strategy articles
- playbook/: digital product landing page
- lead-magnet/index.html: Chapter One landing page linking to the free Gumroad product
- site-config.js: email, social, booking, contact form and checkout settings
- styles.css / script.js: responsive styling, scroll-led motion, reduced-motion support and form interactions
- privacy.html, terms.html, disclaimer.html: website policies and information notices
- robots.txt / sitemap.xml: search engine discovery
- assets/: logo, cover image and favicon

## Design — Premium V2 (2026)
The current identity follows the supplied Market Mind Brand Guidelines 2026:
- Dark Navy: #1E2A38
- Warm Cream: #F6F1EA
- Terracotta: #C86E5A
- Light Peach: #EBA894
- Typography: Montserrat for display and reading; bold display headlines only.
- Graphic device: one vertical Terracotta decision line, separating evidence/context from the choice/action.
- The logo artwork is a finished mark: do not stretch, recolour, rotate, shadow or rebuild it. Use the icon on Warm Cream/white and reverse only on Dark Navy where a reversed asset is supplied.
- The visual balance should remain approximately 85% Dark Navy and Warm Cream; keep Terracotta below 5% of a surface.
- Motion is restrained, purposeful and always respects prefers-reduced-motion.

## Social channels
- LinkedIn: https://www.linkedin.com/company/market-mind-marketing/
- Instagram: https://www.instagram.com/market_mind_consultancy/
- Facebook: https://www.facebook.com/profile.php?id=61594581595119
- X: https://x.com/marketmindcons

## Brand assets
- `assets/Market Mind New Logo.jpg`: approved full logo lockup.
- `assets/market-mind-mark.webp`: standalone icon for favicon and restricted spaces.
- `brand-guidelines-v2.md`: concise implementation reference for the approved 2026 brand book.

## Contact form
The homepage contact form uses custom vanilla-JavaScript AJAX submission to Formspree:
- Endpoint: https://formspree.io/f/mkjjodlo
- The site submits name, email, company, topic and message as JSON.
- Confirm the Formspree form is activated and the destination email is verified in Formspree.
- Test a valid submission, the success state and a failure state before announcing that the form is live.
- Formspree receives and processes submitted information. Keep privacy.html aligned with the provider's actual settings.

## Booking
site-config.js sets bookingUrl to https://calendly.com/krichenem. Verify the Calendly page has the right event type, availability, time zone and confirmation details.

## Email field notes
The “Subscribe by email” CTA opens a prefilled email draft to krichenem@gmail.com. This is a manual opt-in workflow, not an automated newsletter list. Do not describe it as an automated newsletter until a mailing-list provider, consent records and unsubscribe mechanism are configured.

## Free chapter
The landing page at `/lead-magnet/index.html` collects the visitor’s name and email, plus an optional company/project name, through Formspree. Optional marketing consent is separate and unchecked by default. Only after Formspree confirms successful submission does the page reveal the Gumroad claim button:

https://krichen7.gumroad.com/l/smdae

Gumroad handles the resource claim and download. The PDF is not stored in the public GitHub assets folder. Confirm the Formspree form is active and the Gumroad product is free, then test both a successful submission and a failure state before promoting the flow.

## Digital playbook payment
The intended product is “Market Mind™ | Launch Before You Stock” at $40 USD as a one-time purchase. The product-specific URL is configured in `site-config.js` as `purchaseUrl`:

https://krichen7.gumroad.com/l/marketmind

Confirm the final price, upload the customer-ready playbook PDF, configure delivery, and test checkout, receipt, file delivery and the buyer experience before promoting the paid product as live. The cover image in `assets/` is not the actual product deliverable.

## Case study integrity
The matcha case describes a research question and methods, not unverified conclusions. The B2B engagement is anonymized. The launch-validation page is labelled as an illustrative framework. The portfolio includes fictional brand concepts and projected figures; do not present these as real client outcomes. Publish testimonials only when they are genuine, approved and attributable as agreed.

## SEO and launch checklist
- Keep unique page titles, meta descriptions, canonical URLs and the XML sitemap current.
- Verify the site in Google Search Console and submit /sitemap.xml.
- Check that each page, image and local link resolves on the public URL.
- Test desktop/mobile navigation, the enquiry form, the lead-magnet flow, FAQ controls, filters and reduced-motion behavior.
- Connect and test real scheduling, form and payment services before saying they are live.
- Review privacy/legal notices against actual business practices and applicable law. These pages are practical starting points, not legal advice.


## Market Mind V2 identity (2026)
The site follows the approved identity: Dark Navy `#1E2A38`, Warm Cream `#F6F1EA`, Terracotta `#C86E5A`, and Light Peach `#EBA894`. Montserrat is used for display and text, with bold display reserved for headlines and key numbers from 32px upward. The approved full lockup is `assets/Market Mind New Logo.jpg`; the standalone icon is `assets/market-mind-mark.webp`. X: https://x.com/marketmindcons.

## Hosting and deployment
The repository is connected to the Vercel project `market-mind-website`. GitHub commits to `main` trigger Vercel production-target deployments. The project has SSO protection enabled on Vercel-managed aliases. The historic Cloudflare Worker URL `https://market-mind-website.krichenem.workers.dev/` remains the canonical URL in `site-config.js` and page metadata; a Vercel deployment does not itself update that separate Cloudflare Worker. Do not describe the Cloudflare URL as updated unless a Cloudflare deployment is separately performed and verified.


## Premium V2 visual system
Warm Cream is the primary canvas; Dark Navy carries structure and contrast; Terracotta is a restrained decision accent; Light Peach is secondary. The full logo lockup is used in the site header and footer, with the standalone icon reserved for the favicon. The homepage hero explains the Market / Mind / Move framework using the Decision Line. Motion is restrained, progressive-enhancement safe and respects reduced-motion preferences.
