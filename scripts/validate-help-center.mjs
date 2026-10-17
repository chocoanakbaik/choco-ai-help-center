#!/usr/bin/env node
"use strict";

// Pemeriksaan repository tanpa dependensi pihak ketiga.
// Jalankan: node scripts/validate-help-center.mjs

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

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
const jsFiles = allFiles.filter((file) => file.endsWith(".js") || file.endsWith(".mjs"));
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

check("halaman fitur memuat katalog artikel untuk tautan yang akurat", () => {
  const html = htmlByPath.get("features.html") || "";
  assert.match(html, /data\/articles\.js/, "data artikel belum dimuat di halaman fitur");
  assert.match(html, /Baca:/, "tautan artikel masih memakai label generik");
});

check("fungsi Sara membatasi ukuran input dan menangani batas permintaan", () => {
  const source = fs.readFileSync(path.join(root, "netlify/functions/sara.js"), "utf8");
  assert.match(source, /MAX_BODY_BYTES/, "batas ukuran body belum diterapkan");
  assert.match(source, /jsonResponse\(429/, "batas frekuensi permintaan belum diterapkan");
  assert.match(source, /AbortController/, "timeout panggilan model belum diterapkan");
  assert.doesNotMatch(source, /Access-Control-Allow-Origin["']?\s*:\s*["']\*["']/, "endpoint masih mengizinkan CORS wildcard");
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
