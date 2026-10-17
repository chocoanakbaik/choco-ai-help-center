# Penyimpanan percakapan akun

**Status katalog:** Perlu diverifikasi. Jangan menjanjikan bahwa riwayat pasti tersimpan atau dapat dipulihkan.

## Yang tercatat dalam dokumentasi
Aplikasi pernah dirancang untuk mencoba menyimpan pesan dan jawaban ketika pengguna login. Namun, percobaan penyimpanan bukan bukti bahwa semua permintaan berhasil, bahwa riwayat selalu ditampilkan, atau bahwa percakapan dapat dipulihkan di perangkat lain.

## Cara menjelaskan kepada pengguna
- Bedakan konteks percakapan yang sedang aktif dari penyimpanan riwayat di akun.
- Jelaskan bahwa penyimpanan dapat gagal dan perilaku produksi belum dipastikan.
- Jangan mengklaim dapat melihat database atau memeriksa apakah pesan tertentu sudah tersimpan.
- Jangan meminta kata sandi, token sesi, atau data sensitif untuk memeriksa masalah.

## Pemeriksaan sebelum status diubah
1. Login dan kirim pesan uji yang tidak memuat data pribadi.
2. Periksa apakah aplikasi memberi konfirmasi penyimpanan.
3. Muat ulang halaman dan periksa apakah UI menyediakan daftar riwayat.
4. Uji perilaku pada sesi atau perangkat berbeda hanya jika produk memang mendukungnya.
5. Pastikan kegagalan database ditangani tanpa menampilkan pesan keberhasilan palsu.

Sampai pengujian tersebut dilakukan, status tetap **Perlu diverifikasi**.

**Artikel terkait:** `riwayat-percakapan-akun`, `konteks-percakapan`, `login-choco-ai`.
