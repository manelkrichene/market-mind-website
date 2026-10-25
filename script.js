(() => {
  const config = window.MARKET_MIND_CONFIG || {};
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nav = document.querySelector(".nav");
  const menuToggle = document.querySelector(".menu-toggle");
  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      document.body.classList.toggle("nav-open", open);
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      document.body.classList.remove("nav-open");
    }));
  }

  // Reveal content only when it enters the viewport; respect reduced-motion preferences.
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reducedMotion) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -28px 0px" });
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  // Gentle hero parallax on pointer devices; disabled on touch or reduced-motion devices.
  const heroArt = document.querySelector(".hero-art");
  if (heroArt && !reducedMotion && window.matchMedia("(pointer:fine)").matches) {
    heroArt.addEventListener("pointermove", (event) => {
      const rect = heroArt.getBoundingClientRect();
      const dx = ((event.clientX - rect.left) / rect.width - 0.5) * 7;
      const dy = ((event.clientY - rect.top) / rect.height - 0.5) * 7;
      heroArt.style.setProperty("--px", `${dx}px`);
      heroArt.style.setProperty("--py", `${dy}px`);
    });
    heroArt.addEventListener("pointerleave", () => {
      heroArt.style.setProperty("--px", "0px");
      heroArt.style.setProperty("--py", "0px");
    });
  }

  // Make the purchase destination editable in site-config.js. Never simulate a checkout.
  const buyButton = document.getElementById("buy-playbook");
  const checkoutNote = document.getElementById("checkout-note");
  if (buyButton) {
    const price = Number(config.productPrice || 40);
    const currency = config.currency || "USD";
    const productName = config.productName || "Market Mind™ | Launch Before You Stock";
    buyButton.setAttribute("aria-label", `Ask about purchasing ${productName} for ${price} ${currency}`);
    if (config.purchaseUrl && /^https:\/\//i.test(config.purchaseUrl)) {
      buyButton.href = config.purchaseUrl;
      buyButton.target = "_blank";
      buyButton.rel = "noopener noreferrer";
      buyButton.setAttribute("aria-label", `Buy ${productName} for ${price} ${currency}`);
      if (checkoutNote) checkoutNote.textContent = "Digital product · Secure purchase through the Market Mind shop.";
    } else {
      const email = config.contactEmail || "krichenem@gmail.com";
      buyButton.href = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent("Purchase enquiry: " + productName)}&body=${encodeURIComponent("Hello Market Mind,\n\nI would like to purchase " + productName + " (" + price + " " + currency + "). Please share the purchase link.\n\nThank you.")}`;
      if (checkoutNote) checkoutNote.textContent = "Digital product · The direct Converty checkout link will be added here before launch.";
    }
  }

  // Contact details are centrally configurable.
  const email = config.contactEmail || "krichenem@gmail.com";
  document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
    if (link.href.includes("krichenem@gmail.com")) {
      const target = new URL(link.href);
      target.protocol = "mailto:";
      target.pathname = email;
      link.href = target.href;
    }
  });
  const phone = config.phoneLink || "+21652961064";
  document.querySelectorAll('a[href^="tel:"]').forEach((link) => { link.href = `tel:${phone}`; });
})();