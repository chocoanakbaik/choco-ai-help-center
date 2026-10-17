# Arsitektur fitur Choco AI Help Center

## Tujuan

Data fitur produk dipisahkan dari data artikel bantuan. Status artikel tidak boleh menentukan apakah menu fitur ada di aplikasi utama.

## Struktur

- `data/articles.js`: 35 artikel yang digunakan halaman sekarang. Tetap dipertahankan.
- `data/categories.js`: 8 kategori yang digunakan halaman sekarang. Tetap dipertahankan.
- `data/features.js`: katalog fitur dengan status, penjelasan, cara penggunaan, batasan, dan artikel terkait. Ini juga dikirim oleh `bot.js` ke fungsi Sara.
- `features.html`: halaman publik yang menampilkan katalog fitur menurut status.
- `features/available/`: dokumentasi fitur yang tersedia, satu file per fitur.
- `features/planned/`: dokumentasi fitur yang direncanakan, satu file per fitur.
- `features/unavailable/`: halaman HTML tipis untuk rute bantuan yang sengaja dialihkan ke `../../404.html`.

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
6. Jangan menambahkan redirect global ke 404 pada `netlify.toml`.
7. File dokumentasi fitur bukan halaman website otomatis. Hubungkan ke navigasi hanya setelah URL dan perilakunya diuji.

## Status

- Available: fungsi utama yang tercatat di UI.
- Documented: ada artikel bantuan, implementasi perlu dikonfirmasi.
- Verify: artikel menyebut fungsi, status produksi belum dipastikan.
- Planned: UI menandai Soon atau fitur belum tersedia.
- Intentionally disabled: fitur sengaja tidak disediakan.
