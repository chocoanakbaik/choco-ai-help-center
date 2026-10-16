
/* =========================================================
CHOCO AI HELP CENTER
File: bot.js
Fungsi: Bot bantuan berbasis jawaban template
Sumber data: data/articles.js
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

if (
 !elements.messages ||
 !elements.suggestions ||
 !elements.form ||
 !elements.input ||
 !elements.send
) {
 console.error("Sara: elemen antarmuka tidak ditemukan.");
 return;
}

const STOP_WORDS = new Set([
 "apa", "apakah", "bagaimana", "gimana", "kenapa", "mengapa",
 "kapan", "dimana", "di", "ke", "dari", "yang", "dan", "atau",
 "untuk", "dengan", "pada", "itu", "ini", "saya", "aku", "gw",
 "gua", "gue", "lu", "kamu", "nya", "dong", "sih", "deh", "ya",
 "kah", "bisa", "cara", "tolong", "mau", "ingin", "tentang",
 "choco", "ai", "bot", "bantuan", "jelaskan", "kasih", "tau",
 "tahu", "gak", "ga", "nggak", "enggak", "tidak", "kok"
]);

const POPULAR_LIMIT = 6;
const MIN_MATCH_SCORE = 5;

function getArticles() {
 if (typeof window.getHelpArticles !== "function") {
   console.error(
     "Bot Bantuan: fungsi getHelpArticles() tidak ditemukan di data/articles.js."
   );
   return [];
 }

 const articles = window.getHelpArticles();

 return Array.isArray(articles)
   ? articles.filter((article) => {
       return (
         article &&
         typeof article.title === "string" &&
         typeof article.id === "string"
       );
     })
   : [];
}

function getPopularArticles(articles) {
 const popular = articles.filter((article) => article.popular);

 return popular.sort((a, b) => {
   const orderA = Number.isFinite(Number(a.order))
     ? Number(a.order)
     : Number.MAX_SAFE_INTEGER;

   const orderB = Number.isFinite(Number(b.order))
     ? Number(b.order)
     : Number.MAX_SAFE_INTEGER;

   return orderA - orderB ||
     a.title.localeCompare(b.title, "id");
 });
}

function getArticleText(article) {
 const content = Array.isArray(article.content)
   ? article.content.map((block) => {
       if (!block) return "";

       if (typeof block.text === "string") {
         return block.text;
       }

       if (Array.isArray(block.items)) {
         return block.items.join(" ");
       }

       return "";
     }).join(" ")
   : "";

 const keywords = Array.isArray(article.keywords)
   ? article.keywords.join(" ")
   : typeof article.keywords === "string"
     ? article.keywords
     : "";

 return normalizeText([
   article.title,
   article.summary || "",
   keywords,
   content
 ].join(" "));
}

function normalizeText(value) {
 return String(value || "")
   .toLocaleLowerCase("id-ID")
   .normalize("NFD")
   .replace(/[\u0300-\u036f]/g, "")
   .replace(/[^a-z0-9\s]/g, " ")
   .replace(/\s+/g, " ")
   .trim();
}

function tokenize(value) {
 return normalizeText(value)
   .split(" ")
   .filter((word) => word.length > 1 && !STOP_WORDS.has(word));
}

function getUniqueTokens(value) {
 return [...new Set(tokenize(value))];
}

function scoreArticle(question, article) {
 const normalizedQuestion = normalizeText(question);
 const questionTokens = getUniqueTokens(question);

 if (!normalizedQuestion || questionTokens.length === 0) {
   return 0;
 }

 const title = normalizeText(article.title);
 const summary = normalizeText(article.summary || "");

 const keywords = normalizeText(
   Array.isArray(article.keywords)
     ? article.keywords.join(" ")
     : article.keywords || ""
 );

 const content = getArticleText(article);
 let score = 0;

 // Kecocokan frasa langsung lebih kuat daripada kata terpisah.
 if (title === normalizedQuestion) score += 16;
 else if (title.includes(normalizedQuestion)) score += 11;
 else if (normalizedQuestion.includes(title) && title.length > 3) {
   score += 9;
 }

 if (keywords.includes(normalizedQuestion)) score += 8;
 if (summary.includes(normalizedQuestion)) score += 5;

 for (const token of questionTokens) {
   if (title.split(" ").includes(token)) score += 5;
   else if (title.includes(token)) score += 3;

   if (keywords.split(" ").includes(token)) score += 4;
   else if (keywords.includes(token)) score += 2;

   if (summary.split(" ").includes(token)) score += 2;
   else if (summary.includes(token)) score += 1;

   if (content.includes(token)) score += 1;
 }

 const articleTokens = getUniqueTokens(
   `${article.title} ${keywords} ${summary}`
 );

 const matchedTokens = questionTokens.filter((token) =>
   articleTokens.includes(token)
 );

 const coverage = matchedTokens.length / questionTokens.length;

 // Banyak kata cocok sekaligus membuat hasil lebih meyakinkan.
 score += coverage * 5;

 return score;
}

function findMatchingArticles(question, articles) {
 return articles
   .map((article) => ({
     article,
     score: scoreArticle(question, article)
   }))
   .filter((result) => result.score >= MIN_MATCH_SCORE)
   .sort((a, b) => {
     return b.score - a.score ||
       a.article.title.localeCompare(b.article.title, "id");
   })
   .slice(0, 3)
   .map((result) => result.article);
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
 const message = createElement(
   "div",
   `bot-message bot-message--${type}`
 );

 elements.messages.appendChild(message);
 scrollToLatestMessage();

 return message;
}

function addParagraph(parent, text) {
 parent.appendChild(createElement("p", "", text));
}

function renderArticleContent(parent, article) {
 const content = Array.isArray(article.content)
   ? article.content
   : [];

 if (content.length === 0) {
   addParagraph(
     parent,
     article.summary || "Panduan ini belum memiliki jawaban terperinci."
   );
   return;
 }

 for (const block of content) {
   if (!block || typeof block !== "object") continue;

   if (block.type === "p" && typeof block.text === "string") {
     addParagraph(parent, block.text);
     continue;
   }

   if (block.type === "h2" && typeof block.text === "string") {
     parent.appendChild(createElement("h3", "", block.text));
     continue;
   }

   if (
     (block.type === "ul" || block.type === "ol") &&
     Array.isArray(block.items)
   ) {
     const list = document.createElement(
       block.type === "ol" ? "ol" : "ul"
     );

     for (const item of block.items) {
       const listItem = document.createElement("li");
       listItem.textContent = String(item);
       list.appendChild(listItem);
     }

     parent.appendChild(list);
   }
 }
}

function addArticleAnswer(article, parent) {
 const title = createElement("h3", "", article.title);
 parent.appendChild(title);

 renderArticleContent(parent, article);

 const link = document.createElement("a");
 link.href = article.redirect || `article.html?id=${encodeURIComponent(article.id)}`;
 link.textContent = "Buka panduan lengkap";
 link.style.display = "inline-block";
 link.style.marginTop = "10px";

 parent.appendChild(link);
}

function renderAnswer(question, articles) {
 const matches = findMatchingArticles(question, articles);
 const message = addMessage("bot");

 if (matches.length === 0) {
   addParagraph(
     message,
     "Maaf, saya belum menemukan jawaban yang cukup sesuai untuk pertanyaan tersebut."
   );

   addParagraph(
     message,
     "Coba gunakan kata yang lebih spesifik atau pilih pertanyaan yang tersedia di bawah."
   );

   renderSuggestions(articles);
   return;
 }

 const bestMatch = matches[0];

 if (bestMatch.redirect) {
   addParagraph(
     message,
     `Topik yang paling mendekati pertanyaan Anda adalah "${bestMatch.title}", tetapi panduan ini belum tersedia di Pusat Bantuan.`
   );

   addParagraph(
     message,
     "Coba pilih pertanyaan lain yang sudah memiliki panduan lengkap."
   );

   renderSuggestions(articles);
   return;
 }

 addArticleAnswer(bestMatch, message);

 if (matches.length > 1) {
   const otherMatches = matches.slice(1).filter((article) => {
     return !article.redirect;
   });

   if (otherMatches.length > 0) {
     const heading = createElement("h3", "", "Artikel terkait");
     message.appendChild(heading);

     const list = document.createElement("ul");

     for (const article of otherMatches) {
       const item = document.createElement("li");
       const link = document.createElement("a");

       link.href = `article.html?id=${encodeURIComponent(article.id)}`;
       link.textContent = article.title;

       item.appendChild(link);
       list.appendChild(item);
     }

     message.appendChild(list);
   }
 }

 renderSuggestions(articles);
 scrollToLatestMessage();
}

function renderSuggestions(articles) {
 elements.suggestions.replaceChildren();

 const popular = getPopularArticles(
   articles.filter((article) => !article.redirect)
 );

 const remaining = articles
   .filter((article) => {
     return !article.popular && !article.redirect;
   })
   .sort((a, b) => a.title.localeCompare(b.title, "id"));

 const ordered = [...popular, ...remaining].slice(0, POPULAR_LIMIT);

 for (const article of ordered) {
   const button = createElement(
     "button",
     "bot-suggestion",
     article.title
   );

   button.type = "button";
   button.addEventListener("click", () => {
     elements.input.value = article.title;
     handleQuestion(article.title);
   });

   elements.suggestions.appendChild(button);
 }
}

async function handleQuestion(question) {
 const cleanQuestion = String(question || "").trim();

 if (!cleanQuestion) return;

 const userMessage = addMessage("user");
 addParagraph(userMessage, cleanQuestion);
 elements.input.value = "";

 const articles = getArticles();
 if (articles.length === 0) {
   const errorMessage = addMessage("bot");
   addParagraph(errorMessage, "Data panduan belum berhasil dimuat. Periksa file data/articles.js.");
   return;
 }

 const loadingMessage = addMessage("bot");
 addParagraph(loadingMessage, "Saya sedang mencari panduan yang sesuai...");
 elements.send.disabled = true;

 try {
   const response = await fetch("/.netlify/functions/sara", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify({
       question: cleanQuestion,
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

   const result = await response.json();
   if (!response.ok) throw new Error(result.error || "Permintaan ke Sara gagal.");

   loadingMessage.replaceChildren();
   addParagraph(loadingMessage, result.answer || "Maaf, saya belum menemukan jawaban yang sesuai.");

   if (Array.isArray(result.sources) && result.sources.length) {
     const heading = createElement("h3", "", "Panduan terkait");
     loadingMessage.appendChild(heading);
     const list = document.createElement("ul");
     for (const source of result.sources) {
       const item = document.createElement("li");
       const link = document.createElement("a");
       link.href = source.redirect || `article.html?id=${encodeURIComponent(source.id)}`;
       link.textContent = source.title;
       item.appendChild(link);
       list.appendChild(item);
     }
     loadingMessage.appendChild(list);
   }
 } catch (error) {
   loadingMessage.replaceChildren();
   addParagraph(loadingMessage, "Maaf, saat ini Sara belum dapat memproses pertanyaan Anda. Silakan coba kembali beberapa saat lagi.");
   console.error("Sara API error:", error);
 } finally {
   elements.send.disabled = false;
   elements.input.focus();
   renderSuggestions(articles);
   scrollToLatestMessage();
 }
}

elements.form.addEventListener("submit", (event) => {
 event.preventDefault();
 const question = elements.input.value.trim();
 if (!question) return;
 handleQuestion(question);
});

renderSuggestions(getArticles());
})();
