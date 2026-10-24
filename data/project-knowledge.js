/*
 * Curated cross-project context for Sara.
 * Mirror: data/knowledge/project-portfolio.json in AIKEPRIBADIAN.
 * Repository status is not proof of live production behavior.
 */
window.CHOCO_PROJECT_KNOWLEDGE = [
  {
    "id": "portfolio-owner-and-brand",
    "title": "Pengembang dan identitas The Choco Studios",
    "summary": "Hasby Prasetya Saprudin adalah pengembang mandiri di balik portofolio proyek Choco",
    "details": "Hasby Prasetya Saprudin adalah pengembang mandiri di balik portofolio proyek Choco. The Choco Studios (TCS) adalah identitas branding payung bagi beberapa proyek, bukan klaim bahwa TCS telah berbadan hukum sebagai perusahaan. Status setiap proyek harus dibedakan antara source code tersedia, sedang dikembangkan, direncanakan, siap rilis, dan terverifikasi berjalan di produksi. Gunakan repository dan README tiap proyek sebagai sumber utama; jangan menambah detail yang tidak tercatat.",
    "status": "curated",
    "repository": "chocoanakbaik/The-Choco-Studios-Information",
    "keywords": [
      "Hasby",
      "pengembang",
      "creator",
      "owner",
      "TCS",
      "The Choco Studios",
      "proyek",
      "portfolio",
      "portofolio",
      "siapa",
      "pencipta"
    ]
  },
  {
    "id": "assistant-relationship",
    "title": "Hubungan Choco AI dan Sara AI",
    "summary": "Choco AI (repository AIKEPRIBADIAN) adalah produk chat utama yang dikembangkan sebagai representasi digital berbasis AI dari Hasby; Choco AI bukan manusia dan bukan Hasby yang sedang berbicara langsung",
    "details": "Choco AI (repository AIKEPRIBADIAN) adalah produk chat utama yang dikembangkan sebagai representasi digital berbasis AI dari Hasby; Choco AI bukan manusia dan bukan Hasby yang sedang berbicara langsung. Sara adalah asisten AI terpisah di Choco AI Help Center, dengan tugas utama membantu pengguna memahami fitur, akun, dokumentasi, privasi, dan kendala Choco AI. Sara menggunakan bahasa Indonesia yang sopan dan suportif, sementara Choco AI mengikuti instruksi identitas dan preferensi gaya dalam produknya. Keduanya memiliki repository, backend, riwayat konteks, dan jalur pemrosesan masing-masing. Pengetahuan portofolio yang disetujui dapat dicerminkan di kedua repository melalui pembaruan berkala, tetapi ini bukan komunikasi real-time dan bukan berbagi memori atau akses akun secara langsung. Sara tidak dapat membaca percakapan, akun, atau memori Choco AI; Choco AI juga tidak boleh mengaku bisa membaca konteks internal Sara.",
    "status": "shared-context-only-no-live-sync",
    "repository": "chocoanakbaik/AIKEPRIBADIAN + chocoanakbaik/choco-ai-help-center",
    "keywords": [
      "Sara",
      "Choco AI",
      "hubungan",
      "perbedaan",
      "saling tahu",
      "asisten",
      "assistant",
      "pencipta",
      "peran",
      "siapa",
      "Help Center"
    ]
  },
  {
    "id": "project-choco-ai",
    "title": "Choco AI / AIKEPRIBADIAN",
    "summary": "Choco AI adalah aplikasi percakapan dan representasi digital berbasis AI dari Hasby, bukan manusia asli atau model fondasi yang dilatih dari nol",
    "details": "Choco AI adalah aplikasi percakapan dan representasi digital berbasis AI dari Hasby, bukan manusia asli atau model fondasi yang dilatih dari nol. Repository: chocoanakbaik/AIKEPRIBADIAN. Situs utama yang tercatat: https://choco-ai-platform.netlify.app. Frontend berada di public/; endpoint chat berada di netlify/functions/chat.js dan memanggil Groq API untuk inferensi. Source chat memakai fungsi backend Netlify untuk menghubungi penyedia model Groq; konfigurasi rahasia disimpan di backend dan tidak perlu dikirim ke browser. Source juga menyediakan integrasi Supabase untuk login Google, profil, percakapan, pesan, dan memori akun. Konteks sesi, riwayat tersimpan, dan memori jangka panjang adalah hal berbeda. Source saat ini menunjukkan pemanggilan Groq langsung dari Netlify Function, jadi jangan mengklaim Cloudflare Worker sudah menjadi jalur produksi kecuali source dan deployment diverifikasi. Produk masih beta/pengembangan; kode repository bukan bukti bahwa semua integrasi berjalan di produksi. Menu lampiran, analisis gambar, dan pencarian web langsung belum tersedia penuh pada UI yang diperiksa.",
    "status": "beta-development-production-behavior-needs-verification",
    "repository": "chocoanakbaik/AIKEPRIBADIAN",
    "keywords": [
      "Choco AI",
      "AIKEPRIBADIAN",
      "Groq",
      "Supabase",
      "Netlify",
      "chat",
      "memori",
      "login",
      "riwayat",
      "RAG",
      "model",
      "representasi digital"
    ]
  },
  {
    "id": "project-sara-help-center",
    "title": "Choco AI Help Center dan Sara",
    "summary": "Choco AI Help Center adalah situs pusat bantuan terpisah untuk Choco AI",
    "details": "Choco AI Help Center adalah situs pusat bantuan terpisah untuk Choco AI. Repository: chocoanakbaik/choco-ai-help-center. Konten memakai HTML/CSS/JavaScript, artikel terstruktur di data/articles.js, katalog fitur di data/features.js, dan Netlify Function netlify/functions/sara.js. Sara mengirim pertanyaan ke Groq untuk menyusun jawaban menggunakan artikel dan katalog fitur yang dikirim aplikasi. Sara bukan Choco AI chat utama dan tidak memiliki akses langsung ke database, akun, atau memori pengguna. Perannya adalah asisten pendamping untuk panduan penggunaan dan kendala produk, bukan pengganti tim manusia atau asisten serbaguna. Artikel dan status fitur harus menggambarkan source UI/backend yang benar-benar ada; status produksi yang belum diuji wajib ditandai belum terverifikasi.",
    "status": "help-center-assistant-current-source-not-production-proof",
    "repository": "chocoanakbaik/choco-ai-help-center",
    "keywords": [
      "Sara",
      "Help Center",
      "Pusat Bantuan",
      "Groq",
      "Netlify",
      "artikel",
      "katalog fitur",
      "support",
      "dukungan",
      "AI assistant"
    ]
  },
  {
    "id": "project-kasirkita",
    "title": "KasirKita Desktop",
    "summary": "KasirKita adalah aplikasi kasir desktop untuk usaha kecil, di repository chocoanakbaik/KasirKita, memakai Python/Tkinter dan SQLite lokal",
    "details": "KasirKita adalah aplikasi kasir desktop untuk usaha kecil, di repository chocoanakbaik/KasirKita, memakai Python/Tkinter dan SQLite lokal. README menyatakan produk masih dalam pengembangan dan belum siap dijual. Source mencakup alur kasir tunai, produk dan stok, SKU/barcode Code 128, histori transaksi, struk TXT/PDF, laporan CSV/XLSX/PDF, retur, pengeluaran operasional, ringkasan laba berdasarkan harga modal, pajak opsional yang nonaktif secara default, backup/restore, tutorial offline, dan log lokal. Tahap akun mencakup pemilik/pegawai serta data pelanggan/supplier. Data inti dirancang tersimpan lokal di Windows, lokasi default %LOCALAPPDATA%\\KasirKita; alur kasir inti tidak bergantung pada Choco AI, Supabase, atau internet. Target Windows 10/11; Windows 8.1 belum terverifikasi pada perangkat fisik. README menyebut penerbit The Choco Studios, sementara permintaan branding tampilan terpisah menyebut 'KasirKita by The Choco Corporation'; jangan menganggap dua label itu satu entitas legal tanpa keputusan branding lebih lanjut.",
    "status": "in-development-not-ready-to-sell",
    "repository": "chocoanakbaik/KasirKita",
    "keywords": [
      "KasirKita",
      "kasir",
      "POS",
      "Windows",
      "SQLite",
      "Python",
      "Tkinter",
      "stok",
      "transaksi",
      "laporan",
      "pelanggan",
      "supplier",
      "The Choco Corporation"
    ]
  },
  {
    "id": "project-chocobot-guardian",
    "title": "Chocobot Guardian",
    "summary": "Chocobot Guardian adalah utilitas desktop Windows untuk membantu memeriksa, memantau, mendiagnosis, dan mengelola kondisi komputer secara lokal",
    "details": "Chocobot Guardian adalah utilitas desktop Windows untuk membantu memeriksa, memantau, mendiagnosis, dan mengelola kondisi komputer secara lokal. Repository aktif yang tercatat: chocoanakbaik/chocobot_guardian; repository bernama chocobot-guardian tampak kosong saat diperiksa dan bukan sumber utama. README menyebut tahap Foundation/Active Development: fondasi UI, konfigurasi, logging, splash screen, dan arsitektur modular ada di source, sementara sejumlah engine masih direncanakan atau dapat berupa placeholder. Arah fitur mencakup monitoring sistem, pemeriksaan file/hash, inspeksi tautan lokal, utilitas jaringan, karantina/whitelist, dan konversi file. Fitur rencana tidak boleh disebut fitur selesai. Chocobot Guardian adalah produk terpisah, bukan Choco AI/AIKEPRIBADIAN atau Sara.",
    "status": "foundation-active-development-some-engines-planned",
    "repository": "chocoanakbaik/chocobot_guardian",
    "keywords": [
      "Chocobot Guardian",
      "chocobot_guardian",
      "Windows",
      "monitoring",
      "keamanan",
      "file",
      "network",
      "offline",
      "utilitas sistem",
      "bukan Choco AI"
    ]
  },
  {
    "id": "project-privacy-guardian",
    "title": "Privacy Guardian Windows",
    "summary": "Privacy Guardian Windows adalah aplikasi desktop Windows untuk membantu memahami dokumen Privacy Policy, Terms of Service, Cookie Policy, Data Policy, serta ketentuan terkait",
    "details": "Privacy Guardian Windows adalah aplikasi desktop Windows untuk membantu memahami dokumen Privacy Policy, Terms of Service, Cookie Policy, Data Policy, serta ketentuan terkait. Repository: chocoanakbaik/privacy_guardian_windows. Tujuan analisis mencakup pengumpulan dan penggunaan data, pembagian data, retensi, tracking/cookies, hak pengguna, dan klausul penting. Hasilnya alat bantu membaca dokumen, bukan pengganti dokumen asli atau nasihat hukum. Status fitur spesifik dan kesiapan rilis harus mengacu pada source, pengujian, dan checklist terbaru; README saja bukan bukti semua kemampuan telah diverifikasi.",
    "status": "source-exists-release-status-requires-verification",
    "repository": "chocoanakbaik/privacy_guardian_windows",
    "keywords": [
      "Privacy Guardian",
      "Privacy Guardian Windows",
      "privacy",
      "Windows",
      "privacy policy",
      "terms of service",
      "cookies",
      "retensi data",
      "analisis kebijakan"
    ]
  },
  {
    "id": "project-panel-admin",
    "title": "Choco Panel Admin",
    "summary": "Choco Panel Admin adalah dashboard privat yang dirancang untuk pemilik layanan Choco",
    "details": "Choco Panel Admin adalah dashboard privat yang dirancang untuk pemilik layanan Choco. Repository: chocoanakbaik/panel-admin. Rencana cakupan termasuk ringkasan aktivitas operasional, pengelolaan akun Choco AI, peninjauan kritik/saran, laporan penyalahgunaan, laporan kualitas Sara, dan integrasi antarlayanan melalui API terautentikasi. README menyatakan repository masih tahap fondasi dan tidak semua fitur/integrasi sudah tersedia. Akses admin harus dibatasi untuk operasi, keamanan, moderasi, dan pemeliharaan; kepemilikan platform bukan alasan untuk mengumpulkan data tanpa batas. Jangan menyatakan panel sudah membaca atau mengendalikan seluruh layanan sebelum setiap integrasi diimplementasikan dan diuji.",
    "status": "foundation-not-all-integrations-active",
    "repository": "chocoanakbaik/panel-admin",
    "keywords": [
      "Panel Admin",
      "Choco Panel Admin",
      "owner dashboard",
      "admin",
      "moderasi",
      "laporan",
      "integrasi",
      "privasi",
      "keamanan"
    ]
  },
  {
    "id": "project-tcs-information",
    "title": "The Choco Studios Information",
    "summary": "The Choco Studios Information adalah situs informasi publik untuk identitas brand, misi, teknologi, keamanan, produk, proyek, dan kanal kontak TCS",
    "details": "The Choco Studios Information adalah situs informasi publik untuk identitas brand, misi, teknologi, keamanan, produk, proyek, dan kanal kontak TCS. Repository: chocoanakbaik/The-Choco-Studios-Information. Situs menggunakan HTML/CSS/JavaScript modular, komponen terpisah, data katalog produk, halaman detail produk, validasi, dan build ke folder dist/ untuk deployment. README menyebut halaman produk Choco AI, KasirKita, Chocobot Guardian, dan Privacy Guardian. Situs informasi ini berbeda dari Help Center, backend Choco AI, dan Panel Admin. Pemeriksaan statis tidak membuktikan rendering visual atau tautan eksternal selalu berjalan.",
    "status": "modular-information-site-static-checks-do-not-prove-live-behavior",
    "repository": "chocoanakbaik/The-Choco-Studios-Information",
    "keywords": [
      "The Choco Studios",
      "TCS",
      "website",
      "situs informasi",
      "produk",
      "proyek",
      "HTML",
      "CSS",
      "JavaScript",
      "build",
      "dist"
    ]
  },
  {
    "id": "project-why-me",
    "title": "why-me",
    "summary": "why-me adalah proyek kreatif naratif yang berusaha membangun pengalaman interaktif tentang empati, penilaian terhadap orang lain, dan dampak relasi keluarga terhadap cara seseorang memandang hidup",
    "details": "why-me adalah proyek kreatif naratif yang berusaha membangun pengalaman interaktif tentang empati, penilaian terhadap orang lain, dan dampak relasi keluarga terhadap cara seseorang memandang hidup. Repository: chocoanakbaik/why-me. README menyebut proyek masih tahap konsep awal dan belum memiliki versi yang dapat dimainkan. Bentuk akhir masih terbuka, dengan arah cerita sudut pandang orang pertama atau pengalaman pilihan; jangan mengklaim permainan siap dimainkan atau memiliki fitur final.",
    "status": "early-concept-no-playable-build",
    "repository": "chocoanakbaik/why-me",
    "keywords": [
      "why-me",
      "game",
      "naratif",
      "cerita interaktif",
      "empati",
      "konsep",
      "belum playable"
    ]
  },
  {
    "id": "project-digital-products",
    "title": "Rencana produk digital dan distribusi",
    "summary": "Hasby ingin mengembangkan produk digital yang dapat dijual berulang kali, termasuk aplikasi desktop, alat produktivitas, dan template",
    "details": "Hasby ingin mengembangkan produk digital yang dapat dijual berulang kali, termasuk aplikasi desktop, alat produktivitas, dan template. Projects.co.id pernah dipertimbangkan sebagai saluran penjualan. Ini adalah tujuan distribusi, bukan bukti semua produk sudah terdaftar atau menghasilkan penjualan. Untuk setiap produk, bedakan repository source, build/installer, rilis siap pakai, listing marketplace, dan dukungan pelanggan. Choco AI dapat menjadi kanal bantuan bagi pembeli apabila tautan dipasang di produk dan berjalan pada versi rilis.",
    "status": "distribution-goal-not-proof-of-listings-or-sales",
    "repository": "Projects.co.id (tujuan distribusi, bukan repository)",
    "keywords": [
      "Projects.co.id",
      "produk digital",
      "jualan",
      "marketplace",
      "installer",
      "rilis",
      "KasirKita",
      "dukungan pelanggan"
    ]
  },
  {
    "id": "project-portfolio-index",
    "title": "Daftar lengkap portofolio proyek Hasby",
    "summary": "Daftar semua proyek utama yang tercatat di portofolio Hasby.",
    "details": "Saat ditanya daftar semua proyek, karya, atau produk yang dikembangkan Hasby, sebutkan seluruh proyek yang tercatat, lalu jelaskan proyek spesifik dari referensi detail masing-masing. Proyek yang tercatat: (1) Choco AI/AIKEPRIBADIAN, representasi digital berbasis AI dan aplikasi chat utama, masih beta/pengembangan; (2) Choco AI Help Center dengan Sara, pusat bantuan terpisah; (3) KasirKita Desktop, aplikasi POS lokal Windows yang masih dikembangkan dan belum siap dijual; (4) Chocobot Guardian, utilitas Windows lokal untuk diagnosis/monitoring dan keamanan komputer, masih tahap fondasi; (5) Privacy Guardian Windows, alat bantu analisis dokumen kebijakan, bukan nasihat hukum; (6) Choco Panel Admin, dashboard owner untuk operasi, keamanan, laporan, moderasi dan integrasi, masih tahap fondasi; (7) The Choco Studios Information, situs informasi publik TCS dan katalog proyek; (8) why-me, proyek naratif tentang empati dan dampak penilaian/relasi keluarga, masih konsep dan belum playable. The Choco Studios adalah identitas branding payung, bukan satu produk yang sama dengan semua proyeknya. Projects.co.id merupakan kemungkinan jalur distribusi produk digital, bukan bukti semua produk telah terdaftar atau terjual. Status berdasarkan source/README yang diperiksa tidak membuktikan perilaku produksi kecuali diuji terpisah. Untuk pertanyaan seluruh portofolio, jangan hanya menyebut beberapa hasil retrieval; sebutkan kedelapan entri dan tandai mana yang masih konsep/pengembangan.",
    "status": "portfolio-index",
    "repository": "chocoanakbaik/AIKEPRIBADIAN; chocoanakbaik/choco-ai-help-center; chocoanakbaik/KasirKita; chocoanakbaik/chocobot_guardian; chocoanakbaik/privacy_guardian_windows; chocoanakbaik/panel-admin; chocoanakbaik/The-Choco-Studios-Information; chocoanakbaik/why-me",
    "keywords": [
      "semua proyek",
      "daftar proyek",
      "portofolio lengkap",
      "karya Hasby",
      "produk Hasby",
      "apa saja yang dibuat",
      "apa aja yang dibuat",
      "semua produk",
      "project list",
      "portfolio index",
      "Choco AI",
      "Sara",
      "KasirKita",
      "Chocobot Guardian",
      "Privacy Guardian",
      "Panel Admin",
      "TCS Information",
      "why-me"
    ]
  }
];
