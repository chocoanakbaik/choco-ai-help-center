/*
 * Curated cross-project context for Sara.
 * Mirror: data/knowledge/project-portfolio.json in AIKEPRIBADIAN.
 * Repository status is not proof of live production behavior.
 */
window.CHOCO_PROJECT_KNOWLEDGE = [
  {
    "id": "portfolio-owner-and-brand",
    "title": "Pengembang dan payung utama The Choco Studios",
    "summary": "Hasby Prasetya Saprudin adalah pengembang mandiri dan The Choco Studios (TCS) adalah payung brand utama ekosistem proyek",
    "details": "Hasby Prasetya Saprudin adalah pengembang mandiri di balik portofolio proyek Choco. The Choco Studios (TCS) adalah identitas branding dan payung utama bagi proyek-proyek serta produk dalam ekosistem ini. Ini menjelaskan struktur branding internal, bukan klaim bahwa TCS telah berbadan hukum sebagai perusahaan. Status setiap proyek harus dibedakan antara source code tersedia, sedang dikembangkan, direncanakan, siap rilis, dan terverifikasi berjalan di produksi. Gunakan repository dan README tiap proyek sebagai sumber utama; jangan menambah detail yang tidak tercatat.",
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
      "pencipta",
      "payung utama",
      "payung brand",
      "brand induk",
      "semua proyek"
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
    "summary": "KasirKita adalah kandidat rilis internal aplikasi kasir offline Windows dengan pengujian CI lulus, tetapi belum siap dijual.",
    "details": "KasirKita adalah aplikasi kasir desktop untuk usaha kecil, repository chocoanakbaik/KasirKita, memakai Python/Tkinter dan SQLite lokal. Branch product/release-readiness-2026-10 berisi transaksi tunai, produk dan stok, SKU internal, diskon, histori dan struk, laporan/ekspor, retur, pengeluaran, harga modal, ringkasan laba, pajak opsional, backup/pemulihan, tutorial offline, akun pemilik/pegawai, serta data pelanggan/supplier. Branch ini menambahkan panduan pembeli berbahasa Indonesia, draf listing Projects.co.id, konsistensi versi dan installer berbahasa Indonesia, serta ID login lokal menggantikan permintaan NIK untuk akun baru, dengan migrasi skema untuk menjaga akun lama. Tes otomatis Windows/Ubuntu dan build installer di CI telah berhasil pada revisi yang diuji. Namun PR #1 masih draft dan belum masuk main; instalasi, backup/restore dan uninstall pada Windows bersih tetap wajib sebelum dijual. Aplikasi belum tersedia sebagai rilis publik. Data inti tersimpan lokal dan alur kasir tidak bergantung pada internet.",
    "status": "internal-release-candidate-not-merged-not-ready-for-sale",
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
      "The Choco Studios",
      "TCS"
    ]
  },
  {
    "id": "project-chocobot-guardian",
    "title": "Chocobot Guardian",
    "summary": "Chocobot Guardian sedang membangun utilitas Windows lokal untuk URL/file/hash/folder/diagnostik jaringan, bukan antivirus.",
    "details": "Repository aktif chocoanakbaik/chocobot_guardian. Branch product/functional-release-2026-10 menghubungkan pemeriksaan struktur URL offline, metadata file dan SHA-256, ringkasan folder terbatas, pemeriksaan ekstensi/signature file yang bersifat read-only, diagnostik DNS, satu ping dan satu tes port TCP, serta halaman informasi perangkat dan monitor sumber daya/proses. Branch juga memindahkan konfigurasi/log ke folder data pengguna dan menambahkan tes, self-test, panduan bahasa Indonesia, checklist rilis dan draf listing. Fitur ini tidak menjadikan Chocobot sebagai antivirus: tidak ada proteksi real-time, pemindai malware menyeluruh, atau karantina otomatis. PR #1 masih draft, tidak tergabung ke main dan belum dirilis; build Windows dan tes terakhir harus diperiksa sebelum menyatakan paket siap.",
    "status": "internal-utility-mvp-draft-not-public",
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
    "summary": "Privacy Guardian Windows memiliki MVP internal untuk memeriksa teks kebijakan dengan kutipan dan ekspor; bukan penasihat hukum dan belum dirilis.",
    "details": "Branch product/functional-mvp-2026-10 pada repository chocoanakbaik/privacy_guardian_windows mengubah fondasi menjadi aplikasi WinForms .NET 8. Pengguna dapat menempel teks atau membuka TXT/Markdown/HTML hingga 5 MB, menandai pola tentang pengumpulan/penggunaan/pembagian data, retensi, tracking, hak pengguna, pengecualian dan transfer lintas negara, melihat potongan bukti serta nomor baris, lalu mengekspor CSV/TXT. Tes dan build CI berhasil pada commit yang diuji. Analisis deterministik berbasis pola, bukan AI semantik, bukan penasihat hukum atau label aman/tidak aman; hasil dapat false positive atau melewatkan konteks. PDF/DOCX/OCR/URL crawling belum tersedia. PR #1 masih draft dan belum digabung atau dirilis. Uji manual Windows bersih dan paket komersial belum selesai.",
    "status": "internal-mvp-tested-in-ci-not-public-release",
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
    "summary": "Indeks delapan proyek utama, termasuk status pengembangan internal KasirKita, Chocobot Guardian, dan Privacy Guardian.",
    "details": "Saat ditanya daftar semua proyek, karya, atau produk yang dikembangkan Hasby, sebutkan seluruh proyek yang tercatat dan jelaskan statusnya. Proyek: (1) Choco AI/AIKEPRIBADIAN, representasi digital berbasis AI dan chat utama, masih beta/pengembangan; (2) Choco AI Help Center dengan Sara, pusat bantuan terpisah; (3) KasirKita Desktop, kandidat rilis internal kasir offline Windows dengan tes/build CI lulus tetapi belum siap dijual dan belum merged main; (4) Chocobot Guardian, branch utilitas Windows lokal untuk URL/file/hash/folder/jaringan dan monitor perangkat, bukan antivirus, masih internal; (5) Privacy Guardian Windows, MVP lokal untuk analisis teks kebijakan berbasis pola dan ekspor CSV/TXT, bukan nasihat hukum, belum dirilis; (6) Choco Panel Admin, dashboard owner yang masih tahap fondasi dengan integrasi yang belum semua aktif; (7) The Choco Studios Information, situs informasi publik dan katalog; (8) why-me, proyek naratif yang masih konsep dan belum playable. Detail fitur branch pengembangan tidak sama dengan public release, merge main, atau production deployment. Sebutkan semuanya jika pertanyaan meminta portofolio lengkap, jangan hanya menampilkan hasil retrieval parsial.",
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
  },
  {
    "id": "brand-hierarchy-choco-ecosystem",
    "title": "Apa payung utama seluruh proyek dan produk Choco?",
    "summary": "The Choco Studios (TCS) adalah payung utama yang menaungi semua proyek dan produk dalam ekosistem Choco.",
    "details": "Untuk pertanyaan siapa yang menaungi atau menjadi payung utama seluruh ekosistem, jawaban dalam struktur branding internal adalah The Choco Studios (TCS). Peta sederhananya: The Choco Studios (TCS) → produk dan proyek terkait, termasuk Choco AI, Choco AI Help Center dengan Sara, KasirKita, Chocobot Guardian, Privacy Guardian Windows, Choco Panel Admin, The Choco Studios Information, dan why-me. Struktur ini menjelaskan hierarki branding dan pengelolaan internal, bukan bukti status badan hukum atau struktur legal resmi. Hasby Prasetya Saprudin adalah pengembang mandiri di balik proyek-proyek yang tercatat. Jangan mencampuradukkan payung brand, produk, situs, dan asisten AI.",
    "status": "curated-brand-hierarchy",
    "repository": "chocoanakbaik/AIKEPRIBADIAN; chocoanakbaik/choco-ai-help-center; multiple project repositories",
    "keywords": [
      "The Choco Studios",
      "TCS",
      "payung",
      "payung utama",
      "brand induk",
      "semua proyek",
      "semua produk",
      "yang menaungi",
      "organisasi payung",
      "umbrella brand",
      "brand hierarchy",
      "ekosistem Choco",
      "Hasby"
    ]
  }
];
