# Simpan memori manual

**Status katalog:** Terdokumentasi; memerlukan login Google dan konfigurasi Supabase yang berfungsi.

## Bedakan dari menu Memori
Menu **Memori** di sidebar aplikasi masih bertanda Soon. Tombol **+ Memori** adalah kontrol terpisah yang muncul setelah akun berhasil login. Tombol ini menyimpan catatan yang pengguna ketik secara manual, bukan seluruh riwayat chat secara otomatis.

## Cara menggunakan
1. Buka Choco AI dan login menggunakan Google.
2. Pastikan label akun sudah berubah dari status belum login.
3. Pilih tombol **+ Memori** di bagian atas halaman.
4. Masukkan satu catatan singkat yang memang ingin digunakan sebagai konteks pada chat berikutnya.
5. Konfirmasikan penyimpanan dan tunggu notifikasi berhasil.
6. Jika muncul notifikasi gagal, catatan itu belum boleh dianggap tersimpan. Periksa konfigurasi Supabase atau kebijakan akses database.

## Bagaimana catatan digunakan
Saat autentikasi berhasil, aplikasi mencoba mengambil maksimal 20 catatan terbaru dari tabel `memories`. Chat berikutnya mengirim catatan yang berhasil dimuat ke layanan AI sebagai konteks. Jika pemuatan gagal, catatan mungkin tidak disertakan pada respons.

## Privasi dan batasan
- Catatan manual berbeda dari konteks riwayat chat dan tidak berarti setiap pesan otomatis disimpan sebagai memori.
- Keberhasilan bergantung pada konfigurasi serta izin database Supabase.
- UI saat ini tidak menyediakan daftar untuk mengedit atau menghapus catatan satu per satu.
- Jangan simpan kata sandi, API key, kode verifikasi, nomor rekening, informasi pembayaran, atau rahasia pribadi.
- Sara tidak dapat melihat catatan memori atau memeriksa database akun pengguna.

**Artikel terkait:** `menyimpan-memori`, `memori-permanen`, `data-akun`.
