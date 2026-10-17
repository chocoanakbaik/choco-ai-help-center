/* =========================================================
   CHOCO AI HELP CENTER
   File: script.js
   Fungsi: interaksi beranda dan render data kategori/artikel.
   ========================================================= */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("current-year");
  const searchForm = document.getElementById("help-search-form");
  const searchInput = document.getElementById("help-search-input");
  const categoryGrid = document.getElementById("category-grid");
  const featuredArticles = document.getElementById("featured-articles");

  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }

  if (searchForm && searchInput) {
    searchForm.addEventListener("submit", (event) => {
      if (!searchInput.value.trim()) {
        event.preventDefault();
        searchInput.focus();
      }
    });
  }

  const iconShapes = {
    sparkles: [
      ["path", { d: "M12 3v3M12 18v3M3 12h3M18 12h3" }],
      ["path", { d: "m5 5 2 2m10 10 2 2m0-14-2 2M7 17l-2 2" }],
      ["circle", { cx: "12", cy: "12", r: "3" }]
    ],
    user: [
      ["circle", { cx: "12", cy: "8", r: "4" }],
      ["path", { d: "M5 21v-2a7 7 0 0 1 14 0v2" }]
    ],
    "message-circle": [
      ["path", { d: "M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5Z" }]
    ],
    settings: [
      ["circle", { cx: "12", cy: "12", r: "3" }],
      ["path", { d: "m19.4 15 .1.1a2 2 0 1 1-2.8 2.8l-.1-.1a2 2 0 0 0-3.4 1.4v.3a2 2 0 1 1-4 0v-.2A2 2 0 0 0 5.8 17l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A2 2 0 0 0 1.6 11h-.2a2 2 0 1 1 0-4h.2A2 2 0 0 0 3 3.6l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A2 2 0 0 0 9.2-.6v-.2a2 2 0 1 1 4 0v.2A2 2 0 0 0 16.6 1l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A2 2 0 0 0 20.8 7h.2a2 2 0 1 1 0 4h-.2a2 2 0 0 0-1.4 4Z", transform: "translate(1 2) scale(.92)" }]
    ],
    palette: [
      ["path", { d: "M12 3a9 9 0 1 0 0 18h1.5a2.5 2.5 0 0 0 1.8-4.3 1.5 1.5 0 0 1 1.1-2.6H19a2 2 0 0 0 2-2A9 9 0 0 0 12 3Z" }],
      ["circle", { cx: "7.5", cy: "10", r: "1" }],
      ["circle", { cx: "11", cy: "6.5", r: "1" }],
      ["circle", { cx: "16", cy: "8", r: "1" }]
    ],
    contact: [
      ["circle", { cx: "12", cy: "8", r: "3.5" }],
      ["path", { d: "M5 21v-2a7 7 0 0 1 14 0v2Z" }]
    ],
    shield: [
      ["path", { d: "M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" }],
      ["path", { d: "m9 12 2 2 4-4" }]
    ],
    "help-circle": [
      ["circle", { cx: "12", cy: "12", r: "9" }],
      ["path", { d: "M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17h.01" }]
    ]
  };

  const categoryMeta = {
    memulai: "Panduan pemula",
    akun: "Akun pengguna",
    percakapan: "Chat dan fitur",
    pengaturan: "Preferensi aplikasi",
    personalisasi: "Pengalaman pribadi",
    profil: "Informasi profil",
    privasi: "Keamanan pengguna",
    "pemecahan-masalah": "Bantuan teknis"
  };

  function makeElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function makeCategoryIcon(name) {
    const namespace = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(namespace, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "1.8");
    svg.setAttribute("stroke-linecap", "round");
    svg.setAttribute("stroke-linejoin", "round");
    svg.setAttribute("aria-hidden", "true");

    (iconShapes[name] || iconShapes["help-circle"]).forEach(([tag, attributes]) => {
      const shape = document.createElementNS(namespace, tag);
      Object.entries(attributes).forEach(([key, value]) => shape.setAttribute(key, value));
      svg.appendChild(shape);
    });

    const wrapper = makeElement("span", "category-icon");
    wrapper.setAttribute("aria-hidden", "true");
    wrapper.appendChild(svg);
    return wrapper;
  }

  function renderCategories() {
    if (!categoryGrid || !Array.isArray(window.HELP_CATEGORIES)) return;

    const categories = typeof window.getHelpCategories === "function"
      ? window.getHelpCategories()
      : window.HELP_CATEGORIES;

    if (!categories.length) return;

    const fragment = document.createDocumentFragment();

    categories.forEach((category) => {
      if (!category || !category.id || !category.title) return;

      const card = makeElement("a", "category-card");
      card.href = "category.html?id=" + encodeURIComponent(category.id);
      card.appendChild(makeCategoryIcon(category.icon));

      card.appendChild(makeElement("h3", "", category.title));
      card.appendChild(makeElement(
        "p",
        "",
        category.description || "Baca panduan untuk kategori ini."
      ));

      const meta = makeElement("span", "category-meta", categoryMeta[category.id] || "Panduan bantuan");
      meta.appendChild(makeElement("span", "category-arrow", "→"));
      meta.lastElementChild.setAttribute("aria-hidden", "true");
      card.appendChild(meta);
      fragment.appendChild(card);
    });

    if (fragment.childNodes.length) categoryGrid.replaceChildren(fragment);
  }

  function renderFeaturedArticles() {
    if (!featuredArticles || typeof window.getPopularHelpArticles !== "function") return;

    const articles = window.getPopularHelpArticles()
      .filter((article) => article && article.id && article.title && !article.redirect)
      .slice(0, 5);

    if (!articles.length) return;

    const fragment = document.createDocumentFragment();

    articles.forEach((article) => {
      const link = makeElement("a", "article-link");
      link.href = "article.html?id=" + encodeURIComponent(article.id);
      link.appendChild(makeElement("span", "article-link-title", article.title));

      const arrow = makeElement("span", "article-link-arrow", "→");
      arrow.setAttribute("aria-hidden", "true");
      link.appendChild(arrow);
      fragment.appendChild(link);
    });

    featuredArticles.replaceChildren(fragment);
  }

  renderCategories();
  renderFeaturedArticles();
});
