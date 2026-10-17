/*
 * CHOCO AI HELP CENTER
 * File: data/features.js
 *
 * Katalog fitur dipisahkan dari data artikel bantuan.
 * productStatus = status fitur di aplikasi utama.
 * helpPage.status = status artikel/rute bantuan.
 * Jangan memakai status artikel untuk menentukan apakah menu aplikasi muncul.
 */
window.CHOCO_FEATURES = [
  { id: "beranda", name: "Beranda", productStatus: "available", helpPage: { status: "article", articleId: "cara-mulai-chat" } },
  { id: "chat", name: "Percakapan dengan Choco AI", productStatus: "available", helpPage: { status: "article", articleId: "mengirim-pesan" } },
  { id: "template-pertanyaan", name: "Template pertanyaan", productStatus: "available", helpPage: { status: "article", articleId: "template-pertanyaan" } },
  { id: "obrolan-baru", name: "Obrolan baru", productStatus: "available", helpPage: { status: "article", articleId: "membuat-obrolan-baru" } },
  { id: "pengaturan", name: "Pengaturan", productStatus: "available", helpPage: { status: "article", articleId: "membuka-pengaturan" } },
  { id: "personalisasi", name: "Personalisasi", productStatus: "available", helpPage: { status: "article", articleId: "membuka-personalisasi" } },
  { id: "login-google", name: "Login Google", productStatus: "documented", helpPage: { status: "article", articleId: "login-choco-ai" } },
  { id: "profil", name: "Profil pengguna", productStatus: "documented", helpPage: { status: "article", articleId: "mengelola-profil" } },
  { id: "riwayat-chat", name: "Riwayat percakapan akun", productStatus: "verify", helpPage: { status: "article", articleId: "riwayat-percakapan-akun" } },
  { id: "memori", name: "Memori", productStatus: "planned", uiLabel: "Soon", helpPage: { status: "article", articleId: "memori-permanen" } },
  { id: "jelajahi", name: "Jelajahi", productStatus: "planned", uiLabel: "Soon", helpPage: { status: "redirect-404", route: "features/unavailable/jelajahi.html", articleId: "fitur-jelajahi" } },
  { id: "file", name: "File", productStatus: "planned", uiLabel: "Soon", helpPage: { status: "redirect-404", route: "features/unavailable/file.html", articleId: "fitur-file" } },
  { id: "unggah-file", name: "Unggah File", productStatus: "intentionally-disabled", helpPage: { status: "redirect-404", route: "features/unavailable/unggah-file.html", articleId: "unggah-file" } },
  { id: "analisis-gambar", name: "Analisis Gambar", productStatus: "intentionally-disabled", helpPage: { status: "redirect-404", route: "features/unavailable/analisis-gambar.html", articleId: "analisis-gambar" } },
  { id: "pencarian-web", name: "Pencarian Web", productStatus: "intentionally-disabled", helpPage: { status: "redirect-404", route: "features/unavailable/pencarian-web.html", articleId: "pencarian-web" } }
];

window.getChocoFeatures = function (productStatus) {
  const features = window.CHOCO_FEATURES || [];
  return productStatus
    ? features.filter(function (feature) { return feature.productStatus === productStatus; })
    : features.slice();
};

window.getChocoFeatureById = function (id) {
  return (window.CHOCO_FEATURES || []).find(function (feature) { return feature.id === id; }) || null;
};
