# Arsitektur fitur Choco AI Help Center

## Tujuan

Data fitur produk dipisahkan dari data artikel bantuan. Status artikel tidak boleh menentukan apakah menu fitur ada di aplikasi utama.

## Struktur

- `data/articles.js`: 69 record artikel: 64 artikel dapat dibuka dan lima entri lama mengarah ke rute 404. Tetap dipertahankan.
- `data/categories.js`: 8 kategori yang digunakan halaman sekarang. Tetap dipertahankan.
- `data/category.js`: shim legacy yang tidak dimuat halaman dan tidak mendefinisikan ulang data kategori.
- `data/features.js`: katalog 16 fitur dengan status, penjelasan, cara penggunaan, batasan, dan artikel terkait. Ini juga dikirim oleh `bot.js` ke fungsi Sara.
- `features.html`: halaman publik yang menampilkan katalog fitur menurut status.
- `features/available/`: dokumentasi fitur dengan status tersedia.
- `features/documented/`: dokumentasi fitur yang tersedia di panduan tetapi perlu konfirmasi di produksi.
- `features/planned/`: dokumentasi fitur yang direncanakan.
- `features/verify/`: dokumentasi perilaku yang masih perlu diverifikasi.
- `features/unavailable/`: rute HTML lama yang sengaja dialihkan ke `../../404.html`, ditambah dokumentasi internal fitur tanpa UI mandiri seperti pengelolaan profil.

## Yang ditemukan di repo

Repo `chocoanakbaik/choco-ai-help-center` memiliki halaman utama, detail artikel, kategori, pencarian, bot Sara, 404, dan fungsi backend Sara di `netlify/functions/sara.js`.

Lima artikel sengaja diarahkan ke 404:
1. Jelajahi
2. File
3. Unggah File
4. Analisis Gambar
5. Pencarian Web

UI aplikasi utama di `chocoanakbaik/AIKEPRIBADIAN/public/index.html` menunjukkan menu Beranda, Jelajahi (Soon), Memori (Soon), File (Soon), Pengaturan, Personalisasi, dan Obrolan baru.

## Aturan

1. Jangan hapus atau pecah `data/articles.js` sebelum seluruh pemanggilnya dimigrasikan dan diuji.
2. `productStatus` di `data/features.js` menjelaskan status fitur aplikasi; `helpPage.status` hanya menjelaskan rute panduan.
3. Rute unavailable hanya mengarah ke halaman 404 untuk artikel/tautan bantuan. Ini tidak menghapus menu dari aplikasi utama.
4. `planned` berarti belum tersedia. Jangan menampilkannya sebagai fitur aktif.
5. Sara menerima katalog dari `data/features.js` sebagai rujukan status dan batasan fitur; artikel di `data/articles.js` dipakai untuk langkah bantuan yang cocok.
6. `documented` dan `verify` bukan bukti bahwa fungsi sudah berjalan sempurna di produksi.
7. Jangan menambahkan redirect global ke 404 pada `netlify.toml`.
8. File dokumentasi fitur bukan halaman website otomatis. Berkas Markdown internal tidak boleh ditautkan sebagai halaman web kecuali dibuatkan halaman publik khusus.

## Validasi repository

Jalankan `node scripts/validate-help-center.mjs` untuk memeriksa sintaks JavaScript dan skrip inline, konsistensi ID data, kategori artikel, referensi fitur, target redirect, pencarian, dokumentasi fitur, dan tautan file lokal. Jalankan `node scripts/test-sara-function.mjs` untuk menguji status HTTP, validasi input, rate limit, dan respons model tiruan. Workflow GitHub Actions menjalankan kedua pemeriksaan ini; workflow tersebut tidak men-deploy ke Netlify.

Pembatasan permintaan Sara menggunakan memori instance serverless sehingga hanya best effort. Jangan menganggapnya sebagai batas global yang persisten.

## Status

- Available: fungsi utama yang tercatat di UI.
- Documented: ada artikel bantuan, implementasi perlu dikonfirmasi.
- Verify: artikel menyebut fungsi, status produksi belum dipastikan.
- Planned: UI menandai Soon atau fitur belum tersedia.
- Intentionally disabled: fitur sengaja tidak disediakan.
