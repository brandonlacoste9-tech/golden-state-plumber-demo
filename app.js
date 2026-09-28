const I18N = {
en: {
  "nav.services": "Services",
  "nav.products": "Products",
  "nav.gallery": "Gallery",
  "nav.why": "Why us",
  "nav.faq": "FAQ",
  "nav.reviews": "Reviews",
  "nav.contact": "Contact",
  "nav.call": "408 582-2574",
  "hero.kicker": "San Jose, California · Family-owned & operated",
  "hero.title": "Plumbing done<br>the family way.",
  "hero.sub": "5.0-star rated (Birdeye): gas lines, sewer drains and seismic shut-off valves — a family-owned shop that treats your home like their own.",
  "hero.cta1": "Book now",
  "hero.cta2": "See services",
  "stats.hoursNum": "Mon – Fri",
  "stats.hours": "Open weekdays 8 – 5",
  "stats.makesNum": "5.0",
  "stats.makes": "Birdeye rating",
  "stats.diagNum": "Family",
  "stats.diag": "owned & operated",
  "stats.quoteNum": "Gas +",
  "stats.quote": "sewer specialists",
  "services.kicker": "What we do",
  "services.title": "Family-quality plumbing",
  "services.s1t": "Gas line installation & repair",
  "services.s1d": "Safe, code-compliant gas lines installed and repaired by pros.",
  "services.s2t": "Sewer & drain service",
  "services.s2d": "Sewer drains cleaned and repaired — rooter service done right.",
  "services.s3t": "Seismic shut-off valves",
  "services.s3d": "Earthquake safety valves that protect your home when it matters.",
  "services.s4t": "Plumbing inspections",
  "services.s4d": "Thorough inspections that catch problems before they become disasters.",
  "services.s5t": "Emergency plumbing",
  "services.s5d": "Plumbing emergencies handled fast by people who answer the phone.",
  "services.s6t": "General plumbing repairs",
  "services.s6d": "Leaks, fixtures and repairs — quality work at fair prices.",
  "walkin.w1t": "Family-owned",
  "walkin.w1d": "You talk to the owners",
  "walkin.w2t": "5.0 rated",
  "walkin.w2d": "Every customer happy",
  "walkin.w3t": "Upfront pricing",
  "walkin.w3d": "Agreed before we start",
  "makes.kicker": "All major brands",
  "makes.title": "We service every brand",
  "makes.sub": "Fixtures and equipment from all the brands homeowners trust.",
  "why.kicker": "Why choose us",
  "why.title": "San Jose's family plumber",
  "why.intro": "A family-owned shop, not a call center. When you call, you talk to people who own the business — and who stake their name on every job.",
  "why.l1t": "Family-owned & operated",
  "why.l1d": "The owners answer the phone and stand behind the work.",
  "why.l2t": "Safety specialists",
  "why.l2d": "Gas lines and seismic valves done to code — no shortcuts.",
  "why.l3t": "5.0-star rated",
  "why.l3d": "Every review on Birdeye is five stars.",
  "why.l4t": "Straightforward pricing",
  "why.l4d": "Clear prices before we start — no surprises.",
  "products.kicker": "We install",
  "products.title": "Quality equipment we trust",
  "products.sub": "The same quality equipment we install every day — ask us what's right for your home.",
  "products.p1t": "Seismic shut-off valves",
  "products.p1d": "Earthquake-activated gas shutoff — protection for California homes.",
  "products.p2t": "Water heaters",
  "products.p2d": "Tank and tankless models sized right for your household.",
  "products.p3t": "Fixtures & faucets",
  "products.p3d": "Quality kitchen and bath fixtures, professionally installed.",
  "products.note": "Call us to ask about equipment options for your home.",
  "products.cta": "Call to ask",
  "gallery.kicker": "On the job",
  "gallery.title": "Careful work, clean finish",
  "gallery.c1": "Water heater installation, done with care",
  "gallery.c2": "Professional drain service",
  "gallery.c3": "Quality fixture installation",
  "reviews.kicker": "Word on the street",
  "reviews.title": "San Jose homeowners rate us 5.0",
  "reviews.more": "<strong>5.0 rating · Birdeye reviews</strong> &mdash; see what customers say",
  "faq.kicker": "Good to know",
  "faq.title": "Frequently asked questions",
  "faq.q1": "What is a seismic shut-off valve?",
  "faq.a1": "An earthquake-activated valve that automatically shuts off your gas when shaking is detected — real protection for California homes.",
  "faq.q2": "Do you work on gas lines?",
  "faq.a2": "Yes — gas line installation and repair is one of our specialties, always done to code.",
  "faq.q3": "Are you really family-owned?",
  "faq.a3": "Yes — Golden State Plumber & Rooter is a family-owned shop, and you'll deal with the owners directly.",
  "faq.q4": "What are your hours?",
  "faq.a4": "Monday to Friday, 8:00 AM to 5:00 PM. Closed weekends.",
  "contact.kicker": "Come see us",
  "contact.title": "Book your visit",
  "contact.addr": "Address",
  "contact.phone": "Phone",
  "contact.hours": "Hours",
  "contact.hoursVal": "Mon – Fri: 8:00 AM – 5:00 PM<br>Sat – Sun: closed",
  "contact.cta": "Call now to book",
  "promo.kicker": "Family-owned",
  "promo.title": "Gas lines & earthquake safety",
  "promo.text": "Specialists in gas lines, sewer drains and seismic shut-off valves — the work that keeps your family safe, done by people who care.",
  "promo.cta": "Call the family shop",
  "footer.tag": "Family-owned plumbing · San Jose, California"
}
};

let lang = "en";

function applyLang(l) {
  lang = l;
  localStorage.setItem("demo-lang", l);
  document.documentElement.lang = l;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = I18N[l][key];
    if (val !== undefined) el.innerHTML = val;
  });
}

const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
menuBtn.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));

applyLang(lang);
