# Menu Memori

**Status katalog:** Direncanakan; menu Memori di sidebar aplikasi ditandai **Soon**.

## Bedanya dengan konteks chat
Konteks percakapan berarti pesan dari sesi aktif dapat digunakan untuk membuat jawaban tetap nyambung. Menu Memori penuh belum tersedia dan tidak boleh dipresentasikan sebagai pengelolaan memori lengkap.

## Kontrol manual yang sudah tercatat
Setelah login Google, antarmuka juga menyediakan tombol terpisah **+ Memori** di bagian atas. Tombol ini meminta pengguna memasukkan catatan, lalu mencoba menyimpannya ke Supabase. Catatan yang berhasil disimpan dicoba dimuat saat login dan dikirim sebagai konteks ke permintaan chat berikutnya.

Tombol + Memori adalah penyimpanan manual, terpisah dari menu sidebar yang masih Soon. Source aplikasi juga mencoba mengekstrak maksimal tiga fakta atau preferensi jangka panjang dari pasangan pesan akun yang berhasil disimpan. Ini tidak merekam setiap pesan sebagai memori, hasilnya bisa kosong, dan prosesnya bergantung pada konfigurasi serta kebijakan database.

## Batasan menu Memori
- Menu sidebar masih bertanda Soon.
- Tidak ada UI terverifikasi untuk melihat, mengedit, atau menghapus setiap catatan tersimpan.
- Jangan menjanjikan bahwa seluruh percakapan otomatis diingat atau dipulihkan.
- Pengguna sebaiknya tidak menyimpan kata sandi, API key, kode verifikasi, data keuangan, atau rahasia pribadi.

## Panduan terkait
Lihat artikel publik `menyimpan-memori` untuk langkah memakai tombol + Memori. Untuk perbedaan konteks dan penyimpanan lintas sesi, lihat `memori-permanen`.
