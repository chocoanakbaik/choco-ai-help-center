# Choco AI Help Center

Pusat Bantuan statis untuk Choco AI, dilengkapi pencarian artikel, halaman kategori, katalog fitur, dan Sara sebagai AI assistant khusus Help Center.

## Struktur repository

- `index.html`: beranda dan navigasi utama.
- `category.html`: daftar artikel berdasarkan kategori.
- `article.html`: halaman detail artikel.
- `search.html`: pencarian artikel berdasarkan kata kunci.
- `features.html`: katalog status fitur, langkah penggunaan, batasan, dan artikel terkait.
- `bot.html` dan `bot.js`: antarmuka percakapan Sara.
- `data/categories.js`: sumber data kategori aktif.
- `data/articles.js`: sumber data 34 artikel aktif beserta fungsi pencarian.
- `data/features.js`: katalog status dan batasan 15 fitur Choco AI.
- `netlify/functions/sara.js`: endpoint serverless yang mengirim pertanyaan dan konteks terpilih ke layanan model.
- `features/`: dokumentasi internal per fitur. Berkas Markdown di folder ini bukan halaman publik otomatis.
- `scripts/validate-help-center.mjs`: pemeriksaan konsistensi repository tanpa dependensi pihak ketiga.

## Pengujian sebelum deploy

Gunakan Node.js 20 atau lebih baru. Dari root repository, jalankan:

```bash
node scripts/validate-help-center.mjs
```

Pemeriksaan ini memvalidasi sintaks JavaScript termasuk skrip inline HTML, data kategori/artikel/fitur, ID duplikat, referensi artikel, target redirect, dan tautan file lokal. Workflow GitHub Actions menjalankan pemeriksaan yang sama pada perubahan branch `main` dan pull request. Workflow ini **tidak melakukan deploy ke Netlify**.

Pemeriksaan statis tidak dapat membuktikan bahwa OAuth, API eksternal, atau UI produksi berfungsi. Tetap lakukan deploy manual setelah pemeriksaan GitHub lulus, lalu uji halaman dan Sara di Netlify.

## Konfigurasi Netlify

Konfigurasi yang diharapkan:

- Base directory: kosong (root repository).
- Build command: kosong, karena situs statis tidak memerlukan bundler.
- Publish directory: `.`.
- Functions directory: `netlify/functions`.

Konfigurasi build/publish dan direktori function juga dicatat di `netlify.toml`.

## Variabel lingkungan Sara

Atur di pengaturan environment variables situs Netlify, jangan simpan kredensial di repository:

- `GROQ_API_KEY`: wajib untuk menghasilkan jawaban Sara.
- `GROQ_MODEL`: opsional; jika kosong, function memakai model fallback yang ditetapkan di kode.

Jika kunci belum tersedia atau layanan model gagal, Sara akan menampilkan pesan gangguan umum. Jangan menambahkan API key ke HTML atau JavaScript browser.

## Keamanan dan batasan

- Endpoint Sara membatasi ukuran body, panjang pertanyaan, jumlah data konteks, waktu tunggu layanan model, dan frekuensi permintaan per IP pada instance function yang sama.
- Pembatasan berbasis memori serverless bersifat **best effort**, bukan kuota global yang persisten. Untuk perlindungan lintas instance diperlukan penyimpanan/rate limiter bersama.
- Pertanyaan dikirim ke layanan AI eksternal untuk diproses. Pengguna sebaiknya tidak memasukkan kata sandi, API key, atau data pribadi sensitif.
- Katalog membedakan fitur tersedia, terdokumentasi tetapi perlu konfirmasi, perlu diverifikasi, direncanakan, dan tidak disediakan. Jangan menyatakan status yang belum terverifikasi sebagai kepastian.
- Deploy Netlify dilakukan manual agar perubahan kode tidak menghabiskan kredit deploy tanpa sengaja.
