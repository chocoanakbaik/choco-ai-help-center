# Login Google

**Status katalog:** Terdokumentasi, tetapi alur produksi harus dikonfirmasi sebelum login dinyatakan selalu aktif.

## Tujuan
Login Google menghubungkan sesi penggunaan Choco AI dengan akun Google yang dipilih. Sara tidak memiliki akses untuk melihat status autentikasi atau memeriksa akun pengguna secara langsung.

## Alur umum yang terdokumentasi
1. Buka situs Choco AI.
2. Pilih tombol **Login**.
3. Pilih akun Google yang ingin digunakan.
4. Ikuti layar persetujuan atau autentikasi yang ditampilkan.
5. Setelah kembali ke aplikasi, periksa apakah antarmuka menunjukkan bahwa login berhasil.

Langkah dan label tombol dapat berubah mengikuti UI produksi. Jangan menjanjikan bahwa pengguna akan melihat layar tertentu jika alurnya belum diuji.

## Jika login gagal
- Pastikan koneksi internet tersedia.
- Periksa apakah jendela atau pop-up autentikasi diblokir browser.
- Muat ulang aplikasi lalu coba kembali satu kali.
- Pastikan pengguna memilih akun Google yang benar.
- Jika ada pesan error, catat teksnya tanpa membagikan kata sandi, kode verifikasi, atau token sesi.

## Batasan dan keamanan
Jangan meminta kata sandi Google, kode verifikasi, token, atau tangkapan layar yang memuat data sensitif. Jangan menjanjikan bahwa login otomatis menyimpan seluruh riwayat chat atau menyinkronkan semua preferensi ke perangkat lain.

**Artikel terkait:** `login-choco-ai`, `login-google-gagal`, `keluar-dari-akun`, `riwayat-percakapan-akun`.
