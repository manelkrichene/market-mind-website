# Market Mind Website

A static, dark editorial website for Market Mind, built with HTML, CSS and JavaScript.

## Existing deployment
Public address: https://market-mind-website.krichenem.workers.dev/

Keep the existing Worker, public URL, repository integration and production branch unchanged. Updates are committed to main, the production branch previously connected to the Worker. Do not create a second website or change the Worker name just to publish improvements.

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

## Design
Colors: background #101A2F, deep blue #1F3A70, mid blue #34558B, primary text #FAF8F6, secondary text #E3EBFA and accent #FF5722. Motion respects the browser's reduced-motion preference.

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
The landing page at `/lead-magnet/index.html` links directly to the free Gumroad product:

https://krichen7.gumroad.com/l/smdae

Gumroad handles the resource-claim and download experience. The website does not collect personal information through a lead-magnet form, and the PDF is not stored in the public GitHub assets folder. Confirm the Gumroad product is published as free and test the claim/download flow before promoting it.

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
