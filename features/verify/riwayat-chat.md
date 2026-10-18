# Penyimpanan percakapan akun

**Status katalog:** Perlu diverifikasi. Jangan menjanjikan bahwa riwayat pasti tersimpan atau dapat dipulihkan.

## Yang tercatat dalam dokumentasi
Kode UI saat ini menyediakan daftar hingga 30 percakapan terbaru pada sidebar setelah login. Pengguna dapat memilih judul untuk memuat pesan dari database. Backend juga mencoba menyimpan pasangan pesan dan jawaban. Namun, keberadaan alur tersebut bukan bukti bahwa semua permintaan berhasil, daftar selalu muncul, atau percakapan dapat dipulihkan pada setiap sesi/perangkat.

## Cara menjelaskan kepada pengguna
- Bedakan konteks percakapan yang sedang aktif dari penyimpanan riwayat di akun.
- Jelaskan bahwa penyimpanan dapat gagal dan perilaku produksi belum dipastikan.
- Jangan mengklaim dapat melihat database atau memeriksa apakah pesan tertentu sudah tersimpan.
- Jangan meminta kata sandi, token sesi, atau data sensitif untuk memeriksa masalah.

## Pemeriksaan sebelum status diubah
1. Login dan kirim pesan uji yang tidak memuat data pribadi.
2. Periksa apakah aplikasi memberi konfirmasi penyimpanan.
3. Muat ulang halaman, login kembali, lalu periksa apakah daftar hingga 30 percakapan terbaru muncul pada sidebar.
4. Pilih satu percakapan yang diketahui tersimpan dan pastikan pesan lama dimuat dengan urutan yang benar.
5. Uji perilaku pada sesi atau perangkat berbeda hanya jika produk memang mendukungnya.
6. Pastikan kegagalan database ditangani tanpa menampilkan pesan keberhasilan palsu.

Sampai pengujian tersebut dilakukan, status tetap **Perlu diverifikasi**.

**Artikel terkait:** `riwayat-percakapan-akun`, `konteks-percakapan`, `login-choco-ai`.
