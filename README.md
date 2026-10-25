# Market Mind Website

A static, dark editorial website for Market Mind, built with HTML, CSS and JavaScript.

## Existing deployment
Public address: https://market-mind-website.krichenem.workers.dev/

Keep the existing Worker, public URL, repository integration and production branch unchanged. Commit updates to the branch already connected to that Worker. Do not create a second website or change the Worker name just to publish site improvements.

## Structure
- index.html: homepage, services, method, selected work, playbook, insights and enquiry form
- work/: selected case studies and illustrative frameworks
- insights/: library and long-form research/strategy articles
- playbook/: digital product landing page
- site-config.js: email, social, booking, contact form and checkout settings
- styles.css / script.js: responsive styling, scroll-led motion, reduced-motion support and form interactions
- robots.txt / sitemap.xml: search engine discovery
- assets/: logo, cover image and favicon

## Design
Colors: background #101A2F, deep blue #1F3A70, mid blue #34558B, primary text #FAF8F6, secondary text #E3EBFA and accent #FF5722. Motion respects the browser's reduced-motion preference.

## Contact, email and social
Edit site-config.js.
- The enquiry form currently opens a prefilled email draft to krichenem@gmail.com and does not store user submissions.
- To receive form submissions directly, choose a form provider, verify its endpoint, put that endpoint in contactFormEndpoint, test both success and failure, and revise privacy.html to reflect the provider's actual data handling.
- bookingUrl is intentionally blank until a real scheduling page is created.
- LinkedIn, Instagram and Facebook links are configured. xUrl stays blank until the X account exists.
- The field-note subscription link opens an email draft; it is not an automated newsletter service.

## Digital playbook payment
The website is checkout-ready but does not collect payment yet. The hosted checkout URL is intentionally blank. Lemon Squeezy is one candidate; its current official supported-country documentation lists Tunisia for payouts, subject to account review and required verification. Confirm requirements in the merchant account before relying on it.

1. Create and verify a seller/store account with accurate personal or registered-business information.
2. Complete the required payout, identity and tax/profile setup.
3. Create a one-time digital product named “Market Mind™ | Launch Before You Stock” priced at $40 USD.
4. Upload the final customer-ready digital product file. The cover image in assets is not the actual deliverable.
5. Configure digital delivery, receipt, support email and refund terms in the store.
6. Create and test a hosted checkout link using the provider's supported test process.
7. Set purchaseUrl in site-config.js to the real checkout URL.
8. Commit to the connected production branch and test the live customer journey, receipt and download delivery before promoting checkout as live.

No checkout URL, final deliverable file, product-store account or automatic delivery is activated by the website code alone.

## Case study integrity
The matcha case describes a research question and methods, not unverified conclusions. The B2B engagement is anonymized. The launch-validation page is labelled as an illustrative framework. Add outcomes, metrics or testimonials only after validating the claims and receiving permission to publish.

## Launch checklist
- Verify the Worker remains connected to the intended branch.
- Confirm every page, image and local link resolves on the public URL.
- Test desktop and mobile navigation, the enquiry flow, FAQ, filters and reduced-motion behavior.
- Connect and test any real scheduling, form or payment provider before saying it is live.
- Submit sitemap.xml to Google Search Console after indexing settings and page content are reviewed.
- Review the privacy notice if any new third-party scripts or services are added.
