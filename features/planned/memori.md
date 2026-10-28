# Menu Memori

**Status katalog:** Direncanakan; menu Memori di sidebar masih bertanda **Soon**, dan UI yang diperiksa belum menyediakan tombol untuk menambahkan catatan memori manual.

## Bedanya dengan konteks chat dan riwayat

Konteks percakapan adalah pesan sesi yang ikut digunakan untuk menjaga kesinambungan jawaban. Riwayat adalah data pesan yang tersimpan pada percakapan akun bila penyimpanan berhasil. Memori adalah catatan stabil yang dapat dimuat lagi untuk konteks di masa depan. Ketiganya berbeda dan tidak boleh disebut seolah-olah setiap pesan otomatis tersimpan menjadi memori.

## Perilaku memori yang tercatat pada source

Setelah pasangan pesan akun berhasil disimpan, source Choco AI mencoba meminta model mengekstrak maksimal tiga fakta atau preferensi jangka panjang. Hasilnya boleh kosong dan proses ekstraksi atau penyimpanan dapat gagal. Kode juga mendukung pemuatan memori akun yang tersimpan, tetapi itu **bukan** bukti tersedianya tombol input manual di antarmuka.

## Batasan

- Menu sidebar masih bertanda Soon.
- UI yang diperiksa tidak menampilkan tombol **+ Memori** untuk menambahkan catatan manual.
- Tidak ada UI terverifikasi untuk meninjau, mengedit, atau menghapus catatan satu per satu.
- Jangan menjanjikan seluruh percakapan otomatis diingat atau dapat dipulihkan.
- Jangan masukkan password, OTP, token sesi, API key, data keuangan, atau rahasia pribadi.
- Sara tidak dapat melihat memori akun atau memeriksa database pengguna.

**Artikel terkait:** `memori-permanen`, `menyimpan-memori`, `apakah-semua-pesan-menjadi-memori`.
