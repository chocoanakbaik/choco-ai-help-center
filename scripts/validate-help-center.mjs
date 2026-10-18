#!/usr/bin/env node
"use strict";

// Pemeriksaan repository tanpa dependensi pihak ketiga.
// Jalankan: node scripts/validate-help-center.mjs

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const failures = [];
let checks = 0;

function check(label, callback) {
  checks += 1;
  try {
    callback();
    console.log("PASS " + label);
  } catch (error) {
    failures.push({ label, message: error.message });
    console.error("FAIL " + label + ": " + error.message);
  }
}

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if ([".git", "node_modules", ".netlify"].includes(entry.name)) return [];
      return walk(fullPath);
    }
    return [fullPath];
  });
}

function relative(file) {
  return path.relative(root, file).split(path.sep).join("/");
}

const allFiles = walk(root);
const jsFiles = allFiles.filter((file) => file.endsWith(".js"));
const htmlFiles = allFiles.filter((file) => file.endsWith(".html"));
const htmlByPath = new Map(htmlFiles.map((file) => [relative(file), fs.readFileSync(file, "utf8")]));

check("sintaks semua file JavaScript", () => {
  for (const file of jsFiles) {
    new vm.Script(fs.readFileSync(file, "utf8"), { filename: relative(file) });
  }
});

check("sintaks JavaScript inline di semua halaman HTML", () => {
  for (const [file, html] of htmlByPath) {
    const scripts = html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi);
    for (const match of scripts) {
      if (/\bsrc\s*=/.test(match[1])) continue;
      const source = match[2].trim();
      if (!source) continue;
      new vm.Script(source, { filename: file + " (inline script)" });
    }
  }
});

const browserContext = { window: {} };
vm.createContext(browserContext);
for (const dataFile of ["data/categories.js", "data/articles.js", "data/features.js"]) {
  const file = path.join(root, dataFile);
  vm.runInContext(fs.readFileSync(file, "utf8"), browserContext, { filename: dataFile });
}
const categories = browserContext.window.HELP_CATEGORIES;
const articles = browserContext.window.HELP_ARTICLES;
const features = browserContext.window.CHOCO_FEATURES;
const categoryIds = new Set((categories || []).map((item) => item.id));
const articleIds = new Set((articles || []).map((item) => item.id));
const featureIds = new Set((features || []).map((item) => item.id));

check("data kategori, artikel, dan fitur berhasil dimuat", () => {
  assert.ok(Array.isArray(categories) && categories.length > 0, "HELP_CATEGORIES kosong");
  assert.ok(Array.isArray(articles) && articles.length > 0, "HELP_ARTICLES kosong");
  assert.ok(Array.isArray(features) && features.length > 0, "CHOCO_FEATURES kosong");
});

check("jumlah data inti tidak berkurang tanpa sengaja", () => {
  assert.equal(categories.length, 8, "Jumlah kategori berubah dari 8");
  assert.equal(articles.length, 36, "Jumlah record artikel harus 36");
  assert.equal(features.length, 16, "Jumlah fitur harus 16");
});

check("ID kategori, artikel, dan fitur unik", () => {
  for (const [label, list] of [["kategori", categories], ["artikel", articles], ["fitur", features]]) {
    const ids = list.map((item) => item.id);
    assert.equal(new Set(ids).size, ids.length, "ID " + label + " duplikat");
    assert.ok(ids.every((id) => typeof id === "string" && id.trim()), "ID " + label + " kosong");
  }
});

check("setiap artikel mengarah ke kategori yang ada dan memiliki isi", () => {
  for (const article of articles) {
    assert.ok(categoryIds.has(article.category), article.id + " memakai kategori tak dikenal: " + article.category);
    assert.ok(typeof article.title === "string" && article.title.trim(), article.id + " tidak punya judul");
    if (!article.redirect) {
      assert.ok(Array.isArray(article.content) && article.content.length > 0, article.id + " tidak punya isi");
    }
  }
});

check("pertanyaan cadangan beranda cocok dengan artikel tujuan", () => {
  const home = htmlByPath.get("index.html") || "";
  const byId = new Map(articles.map((article) => [article.id, article]));
  const fallbackLinks = [...home.matchAll(/class="article-link" href="([^"]+)"/g)];
  assert.ok(fallbackLinks.length >= 5, "Daftar pertanyaan cadangan beranda terlalu sedikit");
  for (const match of fallbackLinks) {
    const rawHref = match[1];
    const articleId = rawHref.split("?id=")[1];
    assert.ok(rawHref.startsWith("article.html?id="), "Pertanyaan cadangan harus mengarah langsung ke artikel: " + rawHref);
    const article = byId.get(articleId);
    assert.ok(article, "Tautan pertanyaan cadangan beranda tidak memiliki artikel: " + articleId);
    assert.ok(!article.redirect, "Pertanyaan cadangan mengarah ke artikel redirect: " + articleId);
  }
});

check("jumlah artikel pada setiap kategori sesuai artikel yang bisa dibuka", () => {
  for (const category of categories) {
    const expected = articles.filter((article) => article.category === category.id && !article.redirect).length;
    assert.equal(category.articleCount, expected, category.id + " memiliki jumlah artikel yang tidak akurat");
  }
});

check("semua rute redirect artikel benar-benar ada", () => {
  for (const article of articles) {
    if (!article.redirect) continue;
    const target = path.resolve(root, article.redirect);
    assert.ok(target.startsWith(root + path.sep), article.id + " memiliki rute di luar repository");
    assert.ok(fs.existsSync(target), article.id + " mengarah ke file yang tidak ada: " + article.redirect);
  }
});

check("referensi artikel dan status fitur konsisten", () => {
  const allowedGroups = new Set(["available", "documented", "verify", "planned", "intentionally-disabled"]);
  for (const feature of features) {
    assert.ok(allowedGroups.has(feature.group), feature.id + " memiliki group tidak dikenal: " + feature.group);
    for (const articleId of feature.relatedArticles || []) {
      assert.ok(articleIds.has(articleId), feature.id + " merujuk artikel yang tidak ada: " + articleId);
    }
    if (feature.helpPage && feature.helpPage.articleId) {
      assert.ok(articleIds.has(feature.helpPage.articleId), feature.id + " memiliki helpPage.articleId yang tidak ada");
    }
    if (feature.helpPage && feature.helpPage.route) {
      const target = path.resolve(root, feature.helpPage.route);
      assert.ok(target.startsWith(root + path.sep), feature.id + " memiliki rute di luar repository");
      assert.ok(fs.existsSync(target), feature.id + " memiliki rute yang tidak ada: " + feature.helpPage.route);
    }
  }
});

check("tautan file lokal statis di HTML tidak rusak", () => {
  const missing = [];
  for (const [file, html] of htmlByPath) {
    for (const match of html.matchAll(/\b(?:href|src)\s*=\s*["']([^"']+)["']/gi)) {
      const raw = match[1].trim();
      if (!raw || /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(raw)) continue;
      const pathname = raw.split(/[?#]/, 1)[0];
      if (!pathname) continue;
      const target = path.resolve(root, path.dirname(file), pathname);
      if (!target.startsWith(root + path.sep) || !fs.existsSync(target)) {
        missing.push(file + " -> " + raw);
      }
    }
  }
  assert.deepEqual(missing, [], missing.join("\n"));
});

check("tautan fragmen internal menunjuk target yang tersedia", () => {
  const dynamicAnchors = {
    "features.html": new Set([
      "tersedia", "status-documented", "status-verify", "rencana", "tidak-disediakan"
    ])
  };
  const broken = [];

  for (const [file, html] of htmlByPath) {
    const ids = new Set([...html.matchAll(/\bid\s*=\\s*["']([^"']+)["']/gi)].map((match) => match[1]));
    for (const match of html.matchAll(/\bhref\s*=\\s*["']([^"']*#[^"']*)["']/gi)) {
      const raw = match[1].trim();
      const hashIndex = raw.indexOf("#");
      if (hashIndex < 0) continue;
      const rawPath = raw.slice(0, hashIndex).split(/[?]/, 1)[0];
      const fragment = decodeURIComponent(raw.slice(hashIndex + 1));
      let targetFile = file;

      if (rawPath) {
        const targetPath = path.resolve(root, path.dirname(file), rawPath);
        if (!targetPath.startsWith(root + path.sep)) {
          broken.push(file + " -> " + raw);
          continue;
        }
        targetFile = relative(targetPath);
      }

      const targetHtml = htmlByPath.get(targetFile);
      if (!targetHtml) continue;
      const targetIds = targetFile === file
        ? ids
        : new Set([...targetHtml.matchAll(/\bid\s*=\\s*["']([^"']+)["']/gi)].map((item) => item[1]));
      if (!targetIds.has(fragment) && !(dynamicAnchors[targetFile] && dynamicAnchors[targetFile].has(fragment))) {
        broken.push(file + " -> " + raw);
      }
    }
  }

  assert.deepEqual(broken, [], broken.join("\n"));
});

check("status halaman bantuan fitur konsisten dengan tujuan rute", () => {
  const allowedHelpStatuses = new Set(["article", "redirect-404"]);
  for (const feature of features) {
    if (!feature.helpPage) continue;
    assert.ok(allowedHelpStatuses.has(feature.helpPage.status),
      feature.id + " memiliki status halaman bantuan yang tidak dikenal: " + feature.helpPage.status);

    if (feature.helpPage.status === "article") {
      assert.ok(feature.helpPage.articleId, feature.id + " menandai artikel tetapi tidak memiliki articleId");
      const target = articles.find((article) => article.id === feature.helpPage.articleId);
      assert.ok(target, feature.id + " menunjuk artikel yang tidak ada");
      assert.ok(!target.redirect, feature.id + " menunjuk artikel yang dialihkan ke 404");
      assert.ok(!feature.helpPage.route, feature.id + " mencampur status artikel dengan rute 404");
    }

    if (feature.helpPage.status === "redirect-404") {
      assert.ok(feature.helpPage.route, feature.id + " menandai redirect-404 tanpa rute");
      const targetPath = path.resolve(root, feature.helpPage.route);
      assert.ok(targetPath.startsWith(root + path.sep), feature.id + " memiliki rute di luar repository");
      assert.ok(fs.existsSync(targetPath), feature.id + " memiliki rute yang tidak ada");
      assert.match(fs.readFileSync(targetPath, "utf8"), /404\.html/, feature.id + " tidak menuju halaman 404");
      assert.ok(feature.helpPage.articleId, feature.id + " tidak mencatat ID artikel lama");
      const oldArticle = articles.find((article) => article.id === feature.helpPage.articleId);
      assert.ok(oldArticle && oldArticle.redirect, feature.id + " harus merujuk entri artikel lama yang dialihkan");
      assert.equal(oldArticle.redirect, feature.helpPage.route, feature.id + " rute katalog tidak sama dengan rute artikel lama");
    }
  }
});

check("validator fragmen menemukan ID dan tautan jangkar nyata", () => {
  const featureHtml = htmlByPath.get("features.html") || "";
  const ids = [...featureHtml.matchAll(/\bid\s*=\s*["']([^"']+)["']/gi)].map((match) => match[1]);
  const anchors = [...featureHtml.matchAll(/\bhref\s*=\s*["']([^"']*#[^"']*)["']/gi)];
  assert.ok(ids.length > 0, "Validator tidak menemukan ID HTML");
  assert.ok(anchors.length > 0, "Validator tidak menemukan tautan jangkar");
  for (const anchor of anchors) {
    const fragment = decodeURIComponent(anchor[1].split("#").slice(1).join("#"));
    assert.ok(fragment, "Tautan jangkar kosong: " + anchor[1]);
  }
});

check("ID HTML tidak duplikat pada halaman yang sama", () => {
  for (const [file, html] of htmlByPath) {
    const ids = [...html.matchAll(/\bid\s*=\s*["']([^"']+)["']/gi)].map((match) => match[1]);
    const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
    assert.deepEqual([...new Set(duplicates)], [], file + " memiliki ID duplikat");
  }
});

check("beranda memakai skrip yang sesuai dan semua elemen opsional dijaga", () => {
  const homeScript = fs.readFileSync(path.join(root, "script.js"), "utf8");
  assert.match(homeScript, /DOMContentLoaded/);
  assert.doesNotMatch(homeScript, /getElementById\(["']searchForm["']\)/, "skrip beranda masih mencari ID dari halaman lain");
  assert.match(homeScript, /if\s*\(\s*searchForm\s*&&\s*searchInput\s*\)/, "form pencarian harus diperiksa sebelum dipakai");
});

check("fungsi pencarian artikel utama memberi hasil yang masuk akal", () => {
  const loginResults = browserContext.window.searchHelpArticles("login");
  assert.ok(loginResults.some((article) => article.id === "login-choco-ai"), "Pencarian login tidak menemukan artikel login");
  const memoryResults = browserContext.window.searchHelpArticles("memori");
  assert.ok(memoryResults.some((article) => article.id === "memori-permanen"), "Pencarian memori tidak menemukan artikel memori");
  const saveMemoryResults = browserContext.window.searchHelpArticles("menyimpan memori");
  assert.ok(saveMemoryResults.some((article) => article.id === "menyimpan-memori"), "Pencarian menyimpan memori tidak menemukan panduan manual");
  const privacyResults = browserContext.window.searchHelpArticles("penyedia AI eksternal");
  assert.ok(privacyResults.some((article) => article.id === "pemrosesan-pesan-ai"), "Pencarian privasi tidak menemukan artikel pemrosesan pesan");
  const bodyResults = browserContext.window.searchHelpArticles("Shift");
  assert.ok(bodyResults.some((article) => article.id === "cara-mulai-chat"), "Pencarian tidak memeriksa isi artikel");
  const identityResults = browserContext.window.searchHelpArticles("apa itu Choco AI");
  assert.ok(identityResults.some((article) => article.id === "tentang-choco-ai"), "Pencarian frasa lengkap tidak menemukan artikel identitas");
  const unavailableResults = browserContext.window.searchHelpArticles("unggah file");
  assert.ok(unavailableResults.every((article) => article.id !== "unggah-file"), "Artikel yang menuju 404 masih tampil dalam pencarian");
  const popular = browserContext.window.getPopularHelpArticles();
  assert.ok(popular.every((article) => !article.redirect), "Artikel redirect tidak boleh tampil sebagai artikel populer");
});

check("payload browser dengan riwayat maksimal tetap di bawah batas body Sara", () => {
  const payload = {
    question: "q".repeat(500),
    history: Array.from({ length: 8 }, (_, index) => ({
      role: index % 2 === 0 ? "user" : "assistant",
      content: "x".repeat(1200)
    })),
    features: features.map((feature) => ({
      id: feature.id, name: feature.name, group: feature.group,
      summary: feature.summary || "", details: feature.details || "",
      usage: feature.usage || [], limitations: feature.limitations || "",
      relatedArticles: feature.relatedArticles || [],
      helpPage: feature.helpPage || null
    })),
    articles: articles.map((article) => ({
      id: article.id, title: article.title, summary: article.summary || "",
      keywords: article.keywords || [], content: article.content || [],
      redirect: article.redirect || null
    }))
  };
  const bytes = Buffer.byteLength(JSON.stringify(payload), "utf8");
  assert.ok(bytes < 100 * 1024, "Payload representatif terlalu besar: " + bytes + " byte");
  console.log("INFO payload representatif: " + bytes + " byte");
});

check("setiap fitur memiliki dokumen internal yang sesuai status", () => {
  const featureDocs = {
    beranda: "features/available/beranda.md",
    chat: "features/available/chat.md",
    "template-pertanyaan": "features/available/template-pertanyaan.md",
    "obrolan-baru": "features/available/obrolan-baru.md",
    pengaturan: "features/available/pengaturan.md",
    personalisasi: "features/available/personalisasi.md",
    "login-google": "features/documented/login-google.md",
    "simpan-memori": "features/documented/simpan-memori.md",
    profil: "features/unavailable/profil.md",
    "riwayat-chat": "features/verify/riwayat-chat.md",
    memori: "features/planned/memori.md",
    jelajahi: "features/planned/jelajahi.md",
    file: "features/planned/file.md",
    "unggah-file": "features/unavailable/unggah-file.md",
    "analisis-gambar": "features/unavailable/analisis-gambar.md",
    "pencarian-web": "features/unavailable/pencarian-web.md"
  };
  assert.equal(Object.keys(featureDocs).length, features.length, "Peta dokumen tidak mencakup seluruh fitur");
  for (const feature of features) {
    const documentPath = featureDocs[feature.id];
    assert.ok(documentPath, feature.id + " belum memiliki dokumen internal");
    const fullPath = path.join(root, documentPath);
    assert.ok(fs.existsSync(fullPath), feature.id + " dokumen tidak ada: " + documentPath);
    assert.ok(fs.readFileSync(fullPath, "utf8").length > 300, feature.id + " dokumen terlalu dangkal");
    const expectedFolder = {
      available: "features/available/",
      documented: "features/documented/",
      verify: "features/verify/",
      planned: "features/planned/",
      "intentionally-disabled": "features/unavailable/"
    }[feature.group];
    assert.ok(expectedFolder && documentPath.startsWith(expectedFolder),
      feature.id + " disimpan di folder yang tidak sesuai status katalog");
  }
});

check("salinan kategori lama tidak dipakai sebagai sumber kedua", () => {
  const html = [...htmlByPath.values()].join("\n");
  assert.doesNotMatch(html, /data\/category\.js/, "Halaman masih memuat file kategori legacy");
  const legacy = fs.readFileSync(path.join(root, "data/category.js"), "utf8");
  assert.doesNotMatch(legacy, /window\.HELP_CATEGORIES\s*=/, "File legacy mendefinisikan ulang data kategori");
});

check("halaman fitur memuat katalog artikel untuk tautan yang akurat", () => {
  const html = htmlByPath.get("features.html") || "";
  assert.match(html, /data\/articles\.js/, "data artikel belum dimuat di halaman fitur");
  assert.match(html, /Baca:/, "tautan artikel masih memakai label generik");
  assert.doesNotMatch(html, /Rute lama menuju 404/, "katalog publik tidak boleh mengarahkan pengguna ke tautan 404");
});

check("konteks lanjutan Sara dibatasi dan divalidasi", () => {
  const client = fs.readFileSync(path.join(root, "bot.js"), "utf8");
  const server = fs.readFileSync(path.join(root, "netlify/functions/sara.js"), "utf8");
  assert.match(client, /MAX_HISTORY_MESSAGES\s*=\s*8/);
  assert.match(client, /history:\s*previousHistory/);
  assert.match(server, /function sanitizeHistory/);
  assert.match(server, /message\.role === "user" \|\| message\.role === "assistant"/);
  assert.match(server, /history\.slice\(-8\)/);
});

check("umpan balik artikel tidak mengklaim terkirim jika belum ada backend", () => {
  const html = htmlByPath.get("article.html") || "";
  assert.match(html, /belum dikirim ke tim Help Center/);
  assert.match(html, /masukan ini tidak disimpan/);
});

check("fungsi Sara membatasi ukuran input dan menangani batas permintaan", () => {
  const source = fs.readFileSync(path.join(root, "netlify/functions/sara.js"), "utf8");
  assert.match(source, /MAX_BODY_BYTES/, "batas ukuran body belum diterapkan");
  assert.match(source, /jsonResponse\(429/, "batas frekuensi permintaan belum diterapkan");
  assert.match(source, /AbortController/, "timeout panggilan model belum diterapkan");
  assert.doesNotMatch(source, /Access-Control-Allow-Origin["']?\s*:\s*["']\*["']/, "endpoint masih mengizinkan CORS wildcard");
});

check("kredensial dan endpoint model tidak terekspos di browser", () => {
  const browserFiles = allFiles.filter((file) =>
    file.endsWith(".html") ||
    (file.endsWith(".js") && !file.includes(path.join("netlify", "functions")))
  );
  for (const file of browserFiles) {
    const source = fs.readFileSync(file, "utf8");
    assert.doesNotMatch(source, /GROQ_API_KEY/, relative(file) + " memuat nama variabel rahasia");
    assert.doesNotMatch(source, /api\.groq\.com/, relative(file) + " memanggil provider langsung dari browser");
  }
});

check("konfigurasi Netlify memakai root dan direktori function yang benar", () => {
  const config = fs.readFileSync(path.join(root, "netlify.toml"), "utf8");
  assert.match(config, /publish\s*=\s*["']\.["']/);
  assert.match(config, /directory\s*=\s*["']netlify\/functions["']/);
  assert.doesNotMatch(config, /command\s*=/i, "situs statis ini tidak membutuhkan build command");
});

check("README utama menjelaskan struktur, pengujian, dan deploy manual", () => {
  const readme = fs.readFileSync(path.join(root, "README.md"), "utf8");
  assert.ok(readme.length > 500, "README masih terlalu pendek");
  assert.match(readme, /validate-help-center/);
  assert.match(readme, /manual/i);
});

console.log("\nRingkasan: " + (checks - failures.length) + "/" + checks + " pemeriksaan lulus.");
if (failures.length) {
  console.error("\nPemeriksaan gagal:");
  for (const failure of failures) console.error("- " + failure.label + ": " + failure.message);
  process.exitCode = 1;
} else {
  console.log("Semua pemeriksaan statis lulus.");
}
