# Catatan memori manual

**Status katalog:** Direncanakan; kontrol UI untuk input memori secara manual belum tersedia pada tampilan Choco AI yang diperiksa.

## Kondisi berdasarkan source

Backend Choco AI dapat memuat memori akun dan mencoba mengekstrak beberapa fakta atau preferensi jangka panjang setelah pasangan pesan tersimpan. Namun, UI pada `public/index.html` yang diperiksa tidak menampilkan tombol **+ Memori** untuk menambahkan catatan manual. Adanya tabel, endpoint, atau kode pemuatan memori tidak berarti alur input manual tersedia bagi pengguna.

## Cara menjawab pertanyaan

- Jika pengguna bertanya bagaimana menambah memori manual, jelaskan bahwa kontrol tersebut belum tersedia pada UI yang diperiksa.
- Bedakan ekstraksi otomatis, isi riwayat percakapan, dan catatan memori. Ketiganya bukan hal yang sama.
- Source mencoba mengekstrak maksimal tiga fakta atau preferensi stabil setelah pasangan pesan berhasil disimpan; hasilnya bisa kosong atau gagal.
- Jangan memberi langkah memakai tombol yang tidak ada, dan jangan menyatakan memori produksi tersimpan dengan pasti tanpa pengujian.
- Sara tidak dapat melihat database, memori akun, atau status penyimpanan pengguna secara langsung.

## Privasi

Jangan menyimpan password, kode OTP, token sesi, API key, nomor rekening, informasi pembayaran, atau rahasia pribadi sebagai memori. Setiap pengembangan UI untuk membuat, meninjau, memperbaiki, dan menghapus catatan harus dirancang dengan kontrol akses yang sesuai.

**Artikel publik terkait:** `menyimpan-memori`, `memori-permanen`, `apakah-semua-pesan-menjadi-memori`.
