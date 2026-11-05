(function(){
"use strict";
var config=window.MARKET_MIND_CONFIG||{};
/* Apply the approved standalone brand mark consistently across every page. */
document.querySelectorAll(".brand img").forEach(function(img){img.src="/assets/Market%20Mind%20New%20Logo.jpg";img.alt="Market Mind logo"});
var fontLink=document.querySelector('link[href*="fonts.googleapis.com/css2"]');if(!fontLink||!fontLink.href.includes("family=Montserrat")){var mmFont=document.createElement("link");mmFont.rel="stylesheet";mmFont.href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;1,700;1,800&display=swap";document.head.appendChild(mmFont)}
document.querySelectorAll('meta[property="og:image"],meta[name="twitter:image"]').forEach(function(meta){meta.content=(window.MARKET_MIND_CONFIG&&window.MARKET_MIND_CONFIG.siteUrl||"")+"/assets/Market%20Mind%20New%20Logo.jpg"});
document.querySelectorAll("link[rel~='icon']").forEach(function(link){link.href="/assets/Market%20Mind%20New%20Logo.jpg";link.type="image/webp"});
var themeMeta=document.querySelector('meta[name="theme-color"]');if(themeMeta)themeMeta.content="#1E2A38";
document.querySelectorAll(".footer-bottom .social-links").forEach(function(list){if(!list.querySelector('a[href="https://x.com/marketmindcons"]')){var x=document.createElement("a");x.href="https://x.com/marketmindcons";x.target="_blank";x.rel="noopener noreferrer";x.textContent="X ↗";list.appendChild(x)}});
var reduceMotion=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!reduceMotion)document.documentElement.classList.add("js-motion");
var header=document.querySelector(".site-header"),toggle=document.querySelector(".menu-toggle"),nav=document.querySelector(".primary-nav"),progress=document.getElementById("page-progress-bar");
var year=document.getElementById("current-year");if(year)year.textContent=String(new Date().getFullYear());
document.querySelectorAll("[data-booking-link]").forEach(function(a){if(config.bookingUrl)a.href=config.bookingUrl;a.target="_blank";a.rel="noopener noreferrer"});
document.querySelectorAll("[data-free-chapter-link]").forEach(function(a){if(config.freeChapterUrl)a.href=config.freeChapterUrl;a.target="_blank";a.rel="noopener noreferrer"});
var leadForm=document.getElementById("lead-magnet-form");
if(leadForm){
 leadForm.addEventListener("submit",function(event){
  event.preventDefault();
  if(!leadForm.reportValidity())return;
  var trap=leadForm.querySelector('[name="_gotcha"]');
  if(trap&&trap.value)return;
  var submit=leadForm.querySelector('[type="submit"]');
  var success=document.getElementById("lead-success");
  var error=document.getElementById("lead-error");
  var claim=document.getElementById("lead-claim");
  var payload={};new FormData(leadForm).forEach(function(value,key){payload[key]=value});
  if(submit){submit.disabled=true;submit.textContent="Submitting your details…"}
  if(success)success.hidden=true;if(error)error.hidden=true;if(claim)claim.hidden=true;
  fetch(leadForm.action,{method:"POST",headers:{"Accept":"application/json","Content-Type":"application/json"},body:JSON.stringify(payload)})
   .then(function(response){if(!response.ok)throw new Error("Submission failed");if(success)success.hidden=false;if(claim)claim.hidden=false;leadForm.querySelectorAll("input,button").forEach(function(el){el.disabled=true});if(claim)claim.scrollIntoView({behavior:reduceMotion?"auto":"smooth",block:"nearest"})})
   .catch(function(){if(error)error.hidden=false})
   .finally(function(){if(submit&&!claim.hidden){submit.textContent="Details submitted"}else if(submit){submit.disabled=false;submit.innerHTML='Unlock the free chapter <span aria-hidden="true">↗</span>'}});
 });
}

if(toggle&&nav){toggle.addEventListener("click",function(){var open=toggle.getAttribute("aria-expanded")==="true";toggle.setAttribute("aria-expanded",String(!open));toggle.setAttribute("aria-label",open?"Open navigation":"Close navigation");nav.classList.toggle("nav-open",!open);document.body.classList.toggle("menu-is-open",!open)});nav.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label","Open navigation");nav.classList.remove("nav-open");document.body.classList.remove("menu-is-open")})})}
function scrollUpdate(){var y=window.scrollY||document.documentElement.scrollTop,max=document.documentElement.scrollHeight-window.innerHeight;if(progress)progress.style.transform="scaleX("+(max>0?y/max:0)+")";if(header)header.classList.toggle("header-scrolled",y>24);var p=document.querySelector("[data-parallax]");if(p&&!reduceMotion&&y<window.innerHeight*1.4)p.style.setProperty("--parallax-y",(y*.08).toFixed(1)+"px")}
window.addEventListener("scroll",scrollUpdate,{passive:true});scrollUpdate();
var revealNodes=document.querySelectorAll(".reveal,[data-reveal],.method-step,.case-card,.insight-card,.service-row,.manifesto-grid,.approach-intro,.intersection-stage,.approach-outcomes,.services-heading,.playbook-grid,.contact-grid,.sales-hero > *, .article-hero > *");
if("IntersectionObserver"in window&&!reduceMotion){var observer=new IntersectionObserver(function(entries,obs){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add("is-visible");obs.unobserve(entry.target)}})},{threshold:.12,rootMargin:"0px 0px -4% 0px"});revealNodes.forEach(function(el,i){el.style.setProperty("--reveal-delay",Math.min(i%5,4)*70+"ms");observer.observe(el)})}else revealNodes.forEach(function(el){el.classList.add("is-visible")});
document.querySelectorAll("[data-service]").forEach(function(link){link.addEventListener("click",function(){try{sessionStorage.setItem("marketMindSelectedService",link.getAttribute("data-service")||"")}catch(e){}})});
var topic=document.getElementById("contact-topic");if(topic){try{var picked=sessionStorage.getItem("marketMindSelectedService");var opts=Array.prototype.map.call(topic.options,function(o){return o.value});var mapping={"Market Mind Scan":"Market intelligence","Mind Lab":"Consumer research","Position":"Brand positioning","Market Move":"Go-to-market strategy","Mind On Call":"Ongoing strategic advisory"};picked=mapping[picked]||picked;if(picked&&opts.indexOf(picked)>=0)topic.value=picked;sessionStorage.removeItem("marketMindSelectedService")}catch(e){}}
var form=document.getElementById("contact-form");if(form&&!form.hasAttribute("data-formspree-managed")){form.addEventListener("submit",function(e){e.preventDefault();var d=new FormData(form),name=String(d.get("name")||"").trim(),email=String(d.get("email")||"").trim(),company=String(d.get("company")||"").trim(),selectedTopic=String(d.get("topic")||"").trim(),message=String(d.get("message")||"").trim();var body=["Hello Market Mind,","","I'd like to discuss a strategic challenge.","","Name: "+name,"Email: "+email,"Company / project: "+(company||"Not specified"),"Topic: "+selectedTopic,"","Context:",message,"","Sent from the Market Mind website."].join("\n"),subject="Market Mind enquiry — "+selectedTopic;if(config.contactFormEndpoint){var note=document.getElementById("form-note");fetch(config.contactFormEndpoint,{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},body:JSON.stringify({name:name,email:email,company:company,topic:selectedTopic,message:message})}).then(function(r){if(!r.ok)throw new Error("Submission failed");form.reset();if(note)note.textContent="Thank you. Your message has been submitted."}).catch(function(){window.location.href="mailto:"+(config.contactEmail||"krichenem@gmail.com")+"?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body)})}else{window.location.href="mailto:"+(config.contactEmail||"krichenem@gmail.com")+"?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body)}})}
var managedContact=document.getElementById("contact-form");
if(managedContact&&managedContact.hasAttribute("data-formspree-managed")){
 managedContact.addEventListener("submit",function(event){
  event.preventDefault();if(!managedContact.reportValidity())return;
  var trap=managedContact.querySelector('[name="_gotcha"]');if(trap&&trap.value)return;
  var submit=managedContact.querySelector('[type="submit"]'),success=managedContact.parentElement.querySelector(".form-status-success"),error=managedContact.parentElement.querySelector(".form-status-error");
  var payload={};new FormData(managedContact).forEach(function(value,key){payload[key]=value});
  if(submit){submit.disabled=true;submit.textContent="Sending enquiry…"}
  if(error)error.style.display="none";if(success)success.style.display="none";
  fetch(managedContact.action,{method:"POST",headers:{"Accept":"application/json","Content-Type":"application/json"},body:JSON.stringify(payload)})
   .then(function(response){if(!response.ok)throw new Error("Form submission failed");managedContact.reset();if(success)success.style.display="block";var note=document.getElementById("form-note");if(note)note.textContent="Thank you. Your enquiry has been sent. We will reply to the email address you provided."})
   .catch(function(){if(error)error.style.display="block";else window.location.href="mailto:"+(config.contactEmail||"krichenem@gmail.com")+"?subject="+encodeURIComponent("Market Mind website enquiry");})
   .finally(function(){if(submit){submit.disabled=false;submit.innerHTML='Send enquiry <span aria-hidden="true">↗</span>'}});
 });
}
if("IntersectionObserver"in window&&!reduceMotion){
 var storySteps=Array.prototype.slice.call(document.querySelectorAll(".method-step"));
 if(storySteps.length){
  var activeStep=null;
  var storyObserver=new IntersectionObserver(function(entries){
   entries.forEach(function(entry){
    if(entry.isIntersecting){
     if(activeStep)activeStep.classList.remove("is-current");
     activeStep=entry.target;activeStep.classList.add("is-current");
    }
   });
  },{rootMargin:"-38% 0px -42% 0px",threshold:0});
  storySteps.forEach(function(step){storyObserver.observe(step)});
 }
}
var cta=document.getElementById("playbook-cta"),status=document.getElementById("checkout-status"),note=document.getElementById("checkout-note");if(cta&&!config.purchaseUrl){cta.href="mailto:"+(config.contactEmail||"krichenem@gmail.com")+"?subject="+encodeURIComponent("Launch Before You Stock — early access");if(status)status.textContent="Gumroad product link pending";if(note)note.textContent="Add the permanent product-specific Gumroad URL in site-config.js to activate checkout. The generic checkout URL provided is not used because it may not identify this product."}else if(cta&&config.purchaseUrl){cta.href=config.purchaseUrl;cta.target="_blank";cta.rel="noopener noreferrer";cta.innerHTML="Get the playbook <span aria-hidden=\"true\">↗</span>";if(status)status.textContent="Available now · secure checkout";if(note)note.textContent="Secure checkout opens in a new tab. Digital delivery is handled by the connected store."}
document.querySelectorAll("[data-filter]").forEach(function(btn){btn.addEventListener("click",function(){var f=btn.getAttribute("data-filter")||"all";document.querySelectorAll("[data-filter]").forEach(function(b){b.setAttribute("aria-pressed",String(b===btn))});document.querySelectorAll(".library-card[data-category]").forEach(function(card){var cats=(card.getAttribute("data-category")||"").split(/\s+/);card.hidden=f!=="all"&&cats.indexOf(f)===-1})})});
document.querySelectorAll(".faq-question").forEach(function(btn){btn.addEventListener("click",function(){var expanded=btn.getAttribute("aria-expanded")==="true";btn.setAttribute("aria-expanded",String(!expanded));var ans=document.getElementById(btn.getAttribute("aria-controls"));if(ans)ans.hidden=expanded;var plus=btn.querySelector("span:last-child");if(plus)plus.textContent=expanded?"+":"−"})});
})();