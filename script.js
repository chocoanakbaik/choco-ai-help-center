
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const articleList = document.getElementById("articleList");
  const articles = [...document.querySelectorAll(".article-item")];
  const categories = [...document.querySelectorAll(".category-card")];
  const resultCount = document.getElementById("resultCount");
  const emptyState = document.getElementById("emptyState");
  const resetSearch = document.getElementById("resetSearch");
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");

  let activeCategory = "";

  function normalize(value) {
    return value
      .toLocaleLowerCase("id-ID")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  function filterArticles() {
    const query = normalize(searchInput.value);
    let visibleCount = 0;

    articles.forEach((article) => {
      const title = article.querySelector("h3")?.textContent || "";
      const description = article.querySelector("p")?.textContent || "";
      const searchTerms = article.dataset.search || "";
      const category = article.dataset.category || "";

      const searchableText = normalize(
        `${title} ${description} ${searchTerms} ${category}`
      );

      const matchesQuery =
        !query || searchableText.includes(query);

      const matchesCategory =
        !activeCategory || category === activeCategory;

      const visible = matchesQuery && matchesCategory;

      article.hidden = !visible;

      if (visible) visibleCount++;
    });

    resultCount.textContent = `${visibleCount} panduan`;
    emptyState.hidden = visibleCount !== 0;
    articleList.hidden = visibleCount === 0;
  }

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    filterArticles();

    document.getElementById("artikel").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  searchInput.addEventListener("input", filterArticles);

  document.querySelectorAll(".search-tag").forEach((button) => {
    button.addEventListener("click", () => {
      searchInput.value = button.dataset.query || "";
      activeCategory = "";
      filterArticles();

      document.getElementById("artikel").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });

  categories.forEach((card) => {
    card.addEventListener("click", () => {
      activeCategory = card.dataset.category || "";
      searchInput.value = "";
      filterArticles();
    });
  });

  resetSearch.addEventListener("click", () => {
    searchInput.value = "";
    activeCategory = "";
    filterArticles();
    searchInput.focus();
  });

  function closeSidebar() {
    sidebar.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Buka navigasi");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Tutup navigasi" : "Buka navigasi"
    );
  });

  document.querySelectorAll(".side-link").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".side-link").forEach((item) => {
        item.classList.remove("active");
      });

      link.classList.add("active");
      closeSidebar();
    });
  });

  document.addEventListener("click", (event) => {
    if (
      window.innerWidth <= 850 &&
      sidebar.classList.contains("open") &&
      !sidebar.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeSidebar();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSidebar();
    }
  });

  // Hanya satu FAQ terbuka pada satu waktu.
  const faqItems = [...document.querySelectorAll(".faq-item")];

  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;

      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.open = false;
        }
      });
    });
  });

  document.getElementById("currentYear").textContent =
    new Date().getFullYear();

  filterArticles();
});
