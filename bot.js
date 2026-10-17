/* =========================================================
   CHOCO AI HELP CENTER
   File: bot.js
   Fungsi: antarmuka Sara dan konteks percakapan sementara.
   ========================================================= */

(() => {
  "use strict";

  const elements = {
    messages: document.getElementById("bot-messages"),
    suggestions: document.getElementById("bot-suggestions"),
    form: document.getElementById("bot-form"),
    input: document.getElementById("bot-input"),
    send: document.getElementById("bot-send")
  };

  if (!elements.messages || !elements.suggestions || !elements.form ||
      !elements.input || !elements.send) {
    console.error("Sara: elemen antarmuka tidak ditemukan.");
    return;
  }

  const POPULAR_LIMIT = 6;
  const MAX_HISTORY_MESSAGES = 8;
  let isProcessing = false;
  let conversationHistory = [];

  function getArticles() {
    const source = typeof window.getHelpArticles === "function"
      ? window.getHelpArticles()
      : Array.isArray(window.HELP_ARTICLES)
        ? window.HELP_ARTICLES
        : [];

    if (!Array.isArray(source)) {
      console.error("Sara: data artikel Pusat Bantuan tidak berbentuk daftar.");
      return [];
    }

    return source.filter((article) =>
      article &&
      typeof article.id === "string" &&
      typeof article.title === "string"
    );
  }

  function getPopularArticles(articles) {
    return articles
      .filter((article) => article.popular && !article.redirect)
      .slice()
      .sort((a, b) => {
        const orderA = Number.isFinite(Number(a.order)) ? Number(a.order) : Number.MAX_SAFE_INTEGER;
        const orderB = Number.isFinite(Number(b.order)) ? Number(b.order) : Number.MAX_SAFE_INTEGER;
        return orderA - orderB || a.title.localeCompare(b.title, "id");
      });
  }

  function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function scrollToLatestMessage() {
    elements.messages.scrollTop = elements.messages.scrollHeight;
  }

  function addMessage(type) {
    const message = createElement("div", "bot-message bot-message--" + type);
    elements.messages.appendChild(message);

    // Batasi elemen DOM agar sesi panjang tidak membuat halaman terus membesar.
    while (elements.messages.children.length > 81) {
      const firstMessage = elements.messages.firstElementChild;
      if (!firstMessage) break;
      elements.messages.removeChild(firstMessage);
    }

    scrollToLatestMessage();
    return message;
  }

  function addParagraph(parent, text) {
    parent.appendChild(createElement("p", "", text));
  }

  function renderSuggestions(articles) {
    elements.suggestions.replaceChildren();

    const popular = getPopularArticles(articles);
    const remaining = articles
      .filter((article) => !article.popular && !article.redirect)
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title, "id"));

    const ordered = [...popular, ...remaining].slice(0, POPULAR_LIMIT);
    const fragment = document.createDocumentFragment();

    ordered.forEach((article) => {
      const button = createElement("button", "bot-suggestion", article.title);
      button.type = "button";
      button.addEventListener("click", () => {
        handleQuestion(article.title);
      });
      fragment.appendChild(button);
    });

    elements.suggestions.appendChild(fragment);
  }

  async function handleQuestion(question) {
    const cleanQuestion = String(question || "").trim();

    if (!cleanQuestion || isProcessing) return;

    isProcessing = true;
    const userMessage = addMessage("user");
    addParagraph(userMessage, cleanQuestion);
    elements.input.value = "";

    const articles = getArticles();
    const features = Array.isArray(window.CHOCO_FEATURES) ? window.CHOCO_FEATURES : [];
    const previousHistory = conversationHistory.slice(-MAX_HISTORY_MESSAGES);
    const loadingMessage = addMessage("bot");
    addParagraph(loadingMessage, "Saya sedang mencari panduan yang sesuai...");
    elements.send.disabled = true;
    elements.input.disabled = true;

    try {
      const response = await fetch("/.netlify/functions/sara", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: cleanQuestion,
          history: previousHistory,
          features: features.map((feature) => ({
            id: feature.id,
            name: feature.name,
            group: feature.group,
            summary: feature.summary || "",
            details: feature.details || "",
            usage: feature.usage || [],
            limitations: feature.limitations || "",
            relatedArticles: feature.relatedArticles || [],
            helpPage: feature.helpPage || null
          })),
          articles: articles.map((article) => ({
            id: article.id,
            title: article.title,
            summary: article.summary || "",
            keywords: article.keywords || [],
            content: article.content || [],
            redirect: article.redirect || null
          }))
        })
      });

      let result;
      try {
        result = await response.json();
      } catch {
        throw new Error("Respons Sara tidak dapat dibaca.");
      }

      if (!response.ok) {
        const error = new Error(result.error || "Permintaan ke Sara gagal.");
        error.status = response.status;
        throw error;
      }

      const answer = typeof result.answer === "string" && result.answer.trim()
        ? result.answer.trim()
        : "Maaf, saya belum menemukan jawaban yang sesuai.";

      loadingMessage.replaceChildren();
      addParagraph(loadingMessage, answer);

      if (Array.isArray(result.sources) && result.sources.length) {
        const validSources = result.sources.filter((source) =>
          source &&
          typeof source.id === "string" &&
          typeof source.title === "string"
        );

        if (validSources.length) {
          loadingMessage.appendChild(createElement("h3", "", "Panduan terkait"));
          const list = document.createElement("ul");

          validSources.forEach((source) => {
            const item = document.createElement("li");
            const link = document.createElement("a");
            // Sumber dari endpoint hanya membuka artikel lokal, bukan URL dari model.
            link.href = "article.html?id=" + encodeURIComponent(source.id);
            link.textContent = source.title;
            item.appendChild(link);
            list.appendChild(item);
          });

          loadingMessage.appendChild(list);
        }
      }

      conversationHistory.push(
        { role: "user", content: cleanQuestion },
        { role: "assistant", content: answer }
      );

      if (conversationHistory.length > MAX_HISTORY_MESSAGES) {
        conversationHistory = conversationHistory.slice(-MAX_HISTORY_MESSAGES);
      }
    } catch (error) {
      loadingMessage.replaceChildren();
      const message = error && error.status === 429
        ? "Permintaan ke Sara terlalu sering dalam waktu singkat. Tunggu sebentar sebelum mencoba lagi."
        : "Maaf, saat ini Sara belum dapat memproses pertanyaan Anda. Silakan coba kembali beberapa saat lagi.";
      addParagraph(loadingMessage, message);
      console.error("Sara API error:", error && error.name ? error.name : "RequestError");
    } finally {
      isProcessing = false;
      elements.send.disabled = false;
      elements.input.disabled = false;
      elements.input.focus();
      renderSuggestions(articles);
      scrollToLatestMessage();
    }
  }

  elements.form.addEventListener("submit", (event) => {
    event.preventDefault();
    const question = elements.input.value.trim();
    if (question) handleQuestion(question);
  });

  renderSuggestions(getArticles());
})();
