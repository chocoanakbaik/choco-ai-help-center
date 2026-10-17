
window.HELP_ARTICLES = [
    // ==========================================
    // MEMULAI DENGAN CHOCO AI
    // ==========================================
    {
        id: "cara-mulai-chat",
        category: "memulai",
        title: "Bagaimana cara mulai menggunakan Choco AI?",
        summary: "Panduan memulai percakapan pertama dengan Choco AI.",
        keywords: ["mulai", "cara menggunakan", "chat", "percakapan pertama"],
        popular: true,
        order: 1,
        updated: "2026-10-16",
        content: [
            { type: "p", text: "Choco AI adalah asisten percakapan berbasis AI yang dikembangkan oleh Hasby Prasetya Saprudin." },
            { type: "h2", text: "Mulai percakapan" },
            {
                type: "ol",
                items: [
                    "Buka halaman utama Choco AI.",
                    "Masukkan pertanyaan atau pesan pada kolom chat.",
                    "Tekan tombol kirim atau Enter untuk mengirim pesan.",
                    "Tunggu sampai Choco AI memberikan jawaban."
                ]
            },
            { type: "p", text: "Gunakan Shift + Enter jika ingin membuat baris baru tanpa langsung mengirim pesan." }
        ]
    },
    {
        id: "template-pertanyaan",
        category: "memulai",
        title: "Bagaimana cara menggunakan template pertanyaan?",
        summary: "Gunakan saran pertanyaan untuk memulai percakapan lebih cepat.",
        keywords: ["template", "saran pertanyaan", "cari ide baru", "bantu coding", "belajar", "analisis masalah"],
        popular: true,
        order: 2,
        updated: "2026-10-16",
        content: [
            { type: "p", text: "Pada halaman awal, Choco AI menyediakan beberapa pilihan pertanyaan untuk membantu memulai percakapan." },
            { type: "h2", text: "Template yang tersedia" },
            {
                type: "ul",
                items: [
                    "Cari ide baru: meminta bantuan untuk mencari ide kreatif.",
                    "Bantu coding: meminta bantuan memahami atau memperbaiki kode.",
                    "Belajar sesuatu: meminta penjelasan suatu topik dengan bahasa sederhana.",
                    "Analisis masalah: meminta bantuan menganalisis masalah secara logis."
                ]
            },
            { type: "p", text: "Klik salah satu template untuk menggunakan teks pertanyaan tersebut sebagai awal percakapan." }
        ]
    },
    {
        id: "membuat-obrolan-baru",
        category: "memulai",
        title: "Bagaimana cara membuat obrolan baru?",
        summary: "Mulai percakapan baru tanpa melanjutkan konteks chat sebelumnya.",
        keywords: ["obrolan baru", "chat baru", "new chat", "reset percakapan"],
        popular: true,
        order: 3,
        updated: "2026-10-16",
        content: [
            { type: "p", text: "Gunakan tombol Obrolan baru untuk memulai percakapan baru." },
            { type: "p", text: "Percakapan baru memulai riwayat konteks chat yang berbeda. Pesan dari percakapan sebelumnya tidak otomatis dimasukkan ke riwayat percakapan baru." }
        ]
    },
    {
        id: "tentang-choco-ai",
        category: "memulai",
        title: "Apa itu Choco AI?",
        summary: "Kenali Choco AI dan tujuan pengembangannya.",
        keywords: ["apa itu", "identitas", "pengembang", "Hasby", "AI", "Choco"],
        popular: false,
        order: 4,
        updated: "2026-10-16",
        content: [
            { type: "p", text: "Choco AI adalah asisten percakapan berbasis kecerdasan buatan yang dikembangkan oleh Hasby Prasetya Saprudin." },
            { type: "p", text: "Choco AI dirancang untuk membantu percakapan, menjelaskan informasi, mencari ide, dan membantu menyelesaikan masalah melalui teks." },
            { type: "p", text: "Kemampuan yang tersedia bergantung pada implementasi aplikasi. Tidak semua fitur yang direncanakan sudah dapat digunakan." }
        ]
    },

    // ==========================================
    // AKUN & LOGIN
    // ==========================================
    {
        id: "login-choco-ai",
        category: "akun",
        title: "Bagaimana cara login ke Choco AI?",
        summary: "Masuk menggunakan akun Google.",
        keywords: ["login", "masuk", "akun", "Google", "sign in"],
        popular: true,
        order: 5,
        updated: "2026-10-16",
        content: [
            { type: "p", text: "Dokumentasi saat ini mencatat alur login menggunakan Google. Ketersediaan dan keberhasilan login bergantung pada konfigurasi aplikasi yang sedang aktif." },
            {
                type: "ol",
                items: [
                    "Buka halaman Choco AI.",
                    "Jika tombol Login tersedia, pilih tombol tersebut.",
                    "Pilih akun Google yang ingin digunakan.",
                    "Ikuti proses autentikasi yang benar-benar ditampilkan, lalu periksa apakah aplikasi mengonfirmasi login berhasil."
                ]
            },
            { type: "p", text: "Jika tombol login tidak tersedia atau proses gagal, jangan menganggap akun sudah terhubung. Periksa koneksi, muat ulang halaman satu kali, dan catat pesan error tanpa membagikan kata sandi, kode verifikasi, atau token sesi." }
        ]
    },
    {
        id: "login-google-gagal",
        category: "akun",
        title: "Mengapa login Google gagal?",
        summary: "Langkah awal untuk mengatasi kendala saat masuk.",
        keywords: ["login gagal", "Google error", "gagal masuk", "OAuth", "autentikasi"],
        popular: true,
        order: 6,
        updated: "2026-10-16",
        content: [
            {
                type: "ul",
                items: [
                    "Pastikan perangkat terhubung ke internet.",
                    "Periksa apakah layanan Google dapat dibuka.",
                    "Muat ulang halaman Choco AI, lalu coba login kembali.",
                    "Coba gunakan jendela browser biasa dan pastikan cookie tidak diblokir sepenuhnya."
                ]
            },
            { type: "p", text: "Jika muncul pesan kesalahan tertentu, catat pesan tersebut untuk membantu menemukan penyebabnya." }
        ]
    },
    {
        id: "keluar-dari-akun",
        category: "akun",
        title: "Bagaimana cara logout dari Choco AI?",
        summary: "Keluar dari akun yang sedang digunakan.",
        keywords: ["logout", "keluar", "sign out", "ganti akun"],
        popular: false,
        order: 7,
        updated: "2026-10-16",
        content: [
            { type: "p", text: "Saat sudah login, gunakan tombol Keluar jika tersedia pada halaman Choco AI." },
            {
                type: "ol",
                items: [
                    "Temukan tombol Keluar.",
                    "Tekan tombol tersebut.",
                    "Tunggu sampai proses logout selesai."
                ]
            }
        ]
    },
    {
        id: "mengirim-pesan",
        category: "percakapan",
        title: "Bagaimana cara mengirim pesan?",
        summary: "Kirim pertanyaan atau instruksi melalui kolom percakapan.",
        keywords: ["kirim pesan", "send", "Enter", "Shift Enter", "kolom chat"],
        popular: true,
        order: 8,
        updated: "2026-10-16",
        content: [
            {
                type: "ol",
                items: [
                    "Klik kolom pesan di bagian bawah halaman.",
                    "Ketik pertanyaan atau instruksi.",
                    "Tekan Enter atau tombol kirim."
                ]
            },
            { type: "p", text: "Untuk membuat baris baru tanpa mengirim pesan, tekan Shift + Enter." }
        ]
    },

    {
        id: "jawaban-choco-ai-lambat",
        category: "percakapan",
        title: "Mengapa jawaban Choco AI lambat?",
        summary: "Penyebab umum respons yang membutuhkan waktu lebih lama.",
        keywords: ["lambat", "loading", "menunggu", "respons lama", "jawaban lama"],
        popular: true,
        order: 9,
        updated: "2026-10-16",
        content: [
            { type: "p", text: "Waktu respons dapat dipengaruhi oleh koneksi internet, beban layanan AI, dan panjang atau kompleksitas permintaan." },
            {
                type: "ul",
                items: [
                    "Periksa koneksi internet.",
                    "Tunggu sebentar sebelum mengirim ulang pesan.",
                    "Jika permintaan gagal, coba kirim kembali setelah beberapa saat."
                ]
            },
            { type: "p", text: "Mengirim pesan yang sama berkali-kali saat permintaan pertama masih berjalan dapat menyebabkan kebingungan. Tunggu sampai proses sebelumnya selesai." }
        ]
    },
    {
        id: "jawaban-kosong-atau-gagal",
        category: "percakapan",
        title: "Apa yang harus dilakukan jika jawaban gagal muncul?",
        summary: "Langkah awal ketika permintaan chat gagal diproses.",
        keywords: ["jawaban gagal", "jawaban kosong", "error chat", "backend", "respons gagal"],
        popular: true,
        order: 10,
        updated: "2026-10-16",
        content: [
            {
                type: "ul",
                items: [
                    "Periksa koneksi internet.",
                    "Baca pesan kesalahan yang ditampilkan pada percakapan.",
                    "Coba kirim kembali pesan setelah beberapa saat.",
                    "Jika masalah terus terjadi, muat ulang halaman dan coba lagi."
                ]
            },
            { type: "p", text: "Jika kendala tetap muncul, catat pesan kesalahan yang tampil. Pesan tersebut dapat membantu mengidentifikasi sumber masalah." }
        ]
    },
    {
        id: "konteks-percakapan",
        category: "percakapan",
        title: "Apakah Choco AI bisa memahami pesan sebelumnya?",
        summary: "Ketahui bagaimana konteks percakapan digunakan.",
        keywords: ["konteks", "riwayat chat", "mengingat percakapan", "pesan sebelumnya", "history"],
        popular: true,
        order: 11,
        updated: "2026-10-16",
        content: [
            { type: "p", text: "Dalam satu sesi percakapan, Choco AI menerima sebagian riwayat pesan sebelumnya sebagai konteks untuk membantu menghasilkan jawaban yang relevan." },
            { type: "p", text: "Riwayat konteks yang dikirim dari browser dibatasi agar permintaan tidak terus membesar." },
            { type: "p", text: "Konteks percakapan tidak sama dengan ingatan permanen. Fitur Memori belum tentu tersedia melalui menu navigasi." }
        ]
    },
    {
        id: "riwayat-percakapan-akun",
        category: "percakapan",
        title: "Apakah percakapan tersimpan di akun?",
        summary: "Informasi tentang penyimpanan pesan pada akun yang login.",
        keywords: ["simpan chat", "riwayat akun", "database", "percakapan tersimpan", "pesan akun"],
        popular: false,
        order: 12,
        updated: "2026-10-16",
        content: [
            { type: "p", text: "Saat login, Choco AI mencoba menyimpan pasangan pesan pengguna dan jawaban AI ke database akun." },
            { type: "p", text: "Penyimpanan dapat gagal, misalnya jika konfigurasi atau izin database bermasalah. Dalam kondisi tersebut, aplikasi dapat menampilkan pemberitahuan bahwa jawaban tampil tetapi belum tersimpan." },
            { type: "p", text: "Antarmuka saat ini belum menyediakan fitur untuk membuka kembali seluruh percakapan lama yang tersimpan. Jangan menganggap setiap pesan pasti berhasil disimpan." }
        ]
    },

    // ==========================================
    // PENGATURAN
    // ==========================================
    {
        id: "membuka-pengaturan",
        category: "pengaturan",
        title: "Bagaimana cara membuka menu Pengaturan?",
        summary: "Temukan opsi pengaturan yang tersedia di Choco AI.",
        keywords: ["pengaturan", "settings", "menu pengaturan", "preferensi"],
        popular: true,
        order: 13,
        updated: "2026-10-16",
        content: [
            {
                type: "ol",
                items: [
                    "Buka halaman utama Choco AI.",
                    "Pilih menu Pengaturan pada bagian bawah sidebar.",
                    "Ubah opsi sesuai kebutuhan.",
                    "Tekan Simpan pengaturan jika tombol tersebut tersedia."
                ]
            },
            { type: "p", text: "Pengaturan yang tersedia saat ini disimpan di browser yang digunakan, bukan sebagai preferensi akun lintas perangkat." }
        ]
    },
    {
        id: "kelompok-usia",
        category: "pengaturan",
        title: "Bagaimana cara mengatur kelompok usia?",
        summary: "Atur kelompok usia yang digunakan oleh preferensi Choco AI.",
        keywords: ["usia", "kelompok usia", "remaja", "dewasa", "umur"],
        popular: false,
        order: 14,
        updated: "2026-10-16",
        content: [
            { type: "p", text: "Buka menu Pengaturan dan cari opsi kelompok usia." },
            { type: "p", text: "Pilih kelompok usia yang sesuai, lalu simpan perubahan jika diperlukan." },
            { type: "p", text: "Pilihan usia merupakan informasi yang dinyatakan pengguna dan bukan proses verifikasi umur." }
        ]
    },
    {
        id: "panjang-jawaban",
        category: "pengaturan",
        title: "Bagaimana cara mengatur panjang jawaban?",
        summary: "Sesuaikan tingkat keringkasan atau detail jawaban.",
        keywords: ["panjang jawaban", "jawaban singkat", "jawaban detail", "ringkas"],
        popular: false,
        order: 15,
        updated: "2026-10-16",
        content: [
            { type: "p", text: "Buka menu Pengaturan, lalu pilih preferensi panjang jawaban." },
            {
                type: "ul",
                items: [
                    "Singkat: mengutamakan jawaban yang ringkas.",
                    "Seimbang: menyeimbangkan ringkasan dan penjelasan.",
                    "Detail: mengutamakan penjelasan yang lebih lengkap."
                ]
            },
            { type: "p", text: "Preferensi ini memengaruhi instruksi jawaban, tetapi hasil akhirnya tetap bergantung pada permintaan dan respons model AI." }
        ]
    },
    {
        id: "efek-mengetik",
        category: "pengaturan",
        title: "Apa fungsi efek mengetik?",
        summary: "Ketahui fungsi animasi teks saat jawaban ditampilkan.",
        keywords: ["efek mengetik", "animasi teks", "typing effect", "animasi jawaban"],
        popular: false,
        order: 16,
        updated: "2026-10-16",
        content: [
            { type: "p", text: "Efek mengetik mengatur bagaimana teks jawaban ditampilkan pada layar." },
            { type: "p", text: "Buka Pengaturan, lalu aktifkan atau nonaktifkan opsi efek mengetik sesuai preferensi." },
            { type: "p", text: "Efek visual ini tidak membuat model AI menghasilkan jawaban lebih cepat. Animasi dan waktu pemrosesan adalah dua hal berbeda." }
        ]
    },
    {
        id: "sapaan-waktu",
        category: "pengaturan",
        title: "Bagaimana cara mengatur sapaan berdasarkan waktu?",
        summary: "Atur tampilan sapaan sesuai waktu penggunaan.",
        keywords: ["sapaan", "waktu", "pagi", "siang", "malam", "salam"],
        popular: false,
        order: 17,
        updated: "2026-10-16",
        content: [
            { type: "p", text: "Choco AI menyediakan preferensi untuk mengaktifkan atau menonaktifkan sapaan berdasarkan waktu." },
            { type: "p", text: "Buka menu Pengaturan, kemudian ubah opsi sapaan waktu jika tersedia." },
            { type: "p", text: "Pengaturan ini mengubah perilaku sapaan, bukan waktu sistem pada perangkat." }
        ]
    },

    // ==========================================
    // PERSONALISASI
    // ==========================================
    {
        id: "membuka-personalisasi",
        category: "personalisasi",
        title: "Bagaimana cara membuka menu Personalisasi?",
        summary: "Temukan preferensi gaya respons Choco AI.",
        keywords: ["personalisasi", "gaya respons", "preferensi", "personality"],
        popular: true,
        order: 18,
        updated: "2026-10-16",
        content: [
            { type: "p", text: "Buka menu Personalisasi pada sidebar Choco AI untuk melihat preferensi gaya respons." },
            { type: "p", text: "Opsi yang tersedia dapat mencakup gaya bahasa, tingkat detail penjelasan, humor, dan penggunaan emoji." },
            { type: "p", text: "Preferensi personalisasi saat ini disimpan di browser yang digunakan." }
        ]
    },
    {
        id: "gaya-bahasa",
        category: "personalisasi",
        title: "Bagaimana cara mengubah gaya bahasa Choco AI?",
        summary: "Sesuaikan gaya bahasa agar lebih cocok dengan preferensi percakapan.",
        keywords: ["gaya bahasa", "formal", "santai", "adaptif", "bahasa"],
        popular: false,
        order: 19,
        updated: "2026-10-16",
        content: [
            { type: "p", text: "Buka menu Personalisasi dan cari pengaturan gaya bahasa." },
            {
                type: "ul",
                items: [
                    "Adaptif: gaya bahasa menyesuaikan konteks percakapan.",
                    "Formal: mengutamakan bahasa yang lebih formal.",
                    "Santai: mengutamakan bahasa yang lebih kasual."
                ]
            },
            { type: "p", text: "Perubahan ini memengaruhi instruksi gaya respons, tetapi tidak menjamin setiap jawaban akan selalu mengikuti gaya yang dipilih secara sempurna." }
        ]
    },
    {
        id: "tingkat-detail",
        category: "personalisasi",
        title: "Bagaimana cara mengatur tingkat detail penjelasan?",
        summary: "Pilih cara penjelasan yang sesuai dengan kebutuhan.",
        keywords: ["detail", "ringkas", "bertahap", "langkah demi langkah", "penjelasan"],
        popular: false,
        order: 20,
        updated: "2026-10-16",
        content: [
            { type: "p", text: "Buka menu Personalisasi dan ubah preferensi tingkat detail penjelasan." },
            {
                type: "ul",
                items: [
                    "Adaptif: tingkat detail menyesuaikan konteks.",
                    "Ringkas: mengutamakan penjelasan langsung ke inti.",
                    "Bertahap: mengutamakan penjelasan secara berurutan."
                ]
            },
            { type: "p", text: "Untuk tugas tertentu, luangkan waktu menjelaskan kebutuhan secara spesifik agar jawaban lebih sesuai." }
        ]
    },
    {
        id: "humor-dan-emoji",
        category: "personalisasi",
        title: "Bagaimana cara mengatur humor dan emoji?",
        summary: "Sesuaikan penggunaan humor dan emoji dalam respons.",
        keywords: ["humor", "emoji", "emotikon", "gaya percakapan"],
        popular: false,
        order: 21,
        updated: "2026-10-16",
        content: [
            { type: "p", text: "Menu Personalisasi menyediakan opsi untuk mengaktifkan atau menonaktifkan humor dan penggunaan emoji." },
            { type: "p", text: "Ubah opsi sesuai preferensi, lalu simpan perubahan jika diperlukan." },
            { type: "p", text: "Pengaturan tersebut memberikan arahan gaya komunikasi. Penggunaannya tetap dapat berbeda sesuai konteks." }
        ]
    },

    // ==========================================
    // PROFIL
    // ==========================================
    {
        id: "mengelola-profil",
        category: "profil",
        title: "Bagaimana cara mengelola profil?",
        summary: "Panduan dasar untuk melihat dan mengelola informasi profil akun.",
        keywords: ["profil", "kelola profil", "informasi akun", "data pengguna"],
        popular: false,
        order: 22,
        updated: "2026-10-16",
        content: [
            { type: "p", text: "Buka menu Profil dari antarmuka Choco AI untuk melihat informasi akun yang tersedia." },
            { type: "p", text: "Pilihan yang dapat diubah bergantung pada fitur profil yang sedang tersedia di aplikasi. Jangan membagikan kata sandi atau informasi autentikasi kepada orang lain." }
        ]
    },
    {
        id: "mengubah-data-profil",
        category: "profil",
        title: "Bagaimana cara mengubah data profil?",
        summary: "Informasi umum tentang perubahan data profil akun.",
        keywords: ["ubah profil", "edit profil", "nama", "data akun", "informasi profil"],
        popular: false,
        order: 23,
        updated: "2026-10-16",
        content: [
            { type: "p", text: "Buka menu Profil dan periksa apakah informasi yang ingin diubah menyediakan opsi edit." },
            { type: "p", text: "Jika opsi perubahan belum tersedia di antarmuka, data tersebut belum dapat diubah dari halaman profil. Hindari mencoba mengubah data akun secara langsung melalui alat browser." }
        ]
    },

    // ==========================================
    // PRIVASI & MEMORI
    // ==========================================
    {
        id: "data-akun",
        category: "privasi",
        title: "Data apa yang disimpan saat saya login?",
        summary: "Informasi umum mengenai data akun yang digunakan Choco AI.",
        keywords: ["privasi", "data akun", "database", "Google", "nama", "email"],
        popular: true,
        order: 24,
        updated: "2026-10-16",
        content: [
            { type: "p", text: "Saat login menggunakan Google, Choco AI menerima informasi akun yang disediakan melalui proses autentikasi, seperti identitas akun dan informasi nama yang tersedia." },
            { type: "p", text: "Aplikasi juga dapat mencoba menyimpan data profil dan pesan percakapan ke database sesuai implementasi yang sedang digunakan." },
            { type: "p", text: "Penyimpanan dapat bergantung pada konfigurasi dan izin database. Jangan menganggap seluruh data pasti tersimpan atau semua fitur pengelolaan data sudah tersedia." }
        ]
    },
    {
        id: "memori-permanen",
        category: "privasi",
        title: "Apakah Choco AI memiliki memori permanen?",
        summary: "Perbedaan antara konteks percakapan dan memori yang tersimpan lintas sesi.",
        keywords: ["memori permanen", "ingatan", "memory", "konteks", "riwayat chat"],
        popular: false,
        order: 25,
        updated: "2026-10-16",
        content: [
            { type: "p", text: "Konteks percakapan membantu Choco AI merujuk pesan sebelumnya dalam sesi yang sedang berlangsung. Hal itu berbeda dari memori permanen yang menyimpan informasi untuk percakapan berikutnya." },
            { type: "p", text: "Ketersediaan memori lintas sesi bergantung pada fitur yang benar-benar aktif pada aplikasi. Jangan menganggap suatu informasi akan selalu diingat jika aplikasi belum menunjukkan bahwa informasi tersebut berhasil disimpan." }
        ]
    },
    {
        id: "menghapus-data",
        category: "privasi",
        title: "Bagaimana cara menghapus data saya?",
        summary: "Panduan umum untuk memahami penghapusan data akun dan percakapan.",
        keywords: ["hapus data", "menghapus akun", "hapus percakapan", "privasi", "data pribadi"],
        popular: false,
        order: 26,
        updated: "2026-10-16",
        content: [
            { type: "p", text: "Periksa menu Profil atau Pengaturan untuk melihat apakah tersedia pilihan penghapusan data atau akun." },
            { type: "p", text: "Jika pilihan penghapusan belum tersedia, jangan menganggap data telah terhapus hanya dengan menghapus riwayat browser atau keluar dari akun. Penghapusan data tersimpan perlu ditangani melalui mekanisme yang memang disediakan aplikasi." }
        ]
    },

    // ==========================================
    // PEMECAHAN MASALAH
    // ==========================================
    {
        id: "halaman-tidak-merespons",
        category: "pemecahan-masalah",
        title: "Apa yang harus dilakukan jika halaman tidak merespons?",
        summary: "Langkah awal saat halaman Choco AI mengalami gangguan.",
        keywords: ["halaman macet", "tidak merespons", "freeze", "browser", "loading"],
        popular: true,
        order: 27,
        updated: "2026-10-16",
        content: [
            {
                type: "ul",
                items: [
                    "Tunggu sebentar untuk melihat apakah halaman kembali merespons.",
                    "Periksa koneksi internet.",
                    "Muat ulang halaman jika tidak ada proses penting yang sedang berjalan.",
                    "Jika masalah berulang, coba tutup tab yang tidak diperlukan atau buka kembali browser."
                ]
            },
            { type: "p", text: "Memuat ulang halaman dapat menghilangkan teks yang belum dikirim. Salin pesan penting sebelum melakukannya." }
        ]
    },
    {
        id: "masalah-tampilan",
        category: "pemecahan-masalah",
        title: "Mengapa tampilan Choco AI tidak normal?",
        summary: "Cara awal mengatasi masalah tampilan pada browser.",
        keywords: ["tampilan rusak", "CSS", "layout", "desain", "browser"],
        popular: false,
        order: 28,
        updated: "2026-10-16",
        content: [
            {
                type: "ul",
                items: [
                    "Muat ulang halaman.",
                    "Pastikan browser diperbarui ke versi yang masih didukung.",
                    "Coba nonaktifkan ekstensi browser yang mungkin mengganggu tampilan.",
                    "Jika masalah tetap muncul, catat bagian tampilan yang bermasalah."
                ]
            }
        ]
    },
    {
        id: "koneksi-terputus",
        category: "pemecahan-masalah",
        title: "Bagaimana jika koneksi terputus saat menggunakan Choco AI?",
        summary: "Langkah awal ketika jaringan terputus selama percakapan.",
        keywords: ["koneksi terputus", "internet mati", "jaringan", "offline"],
        popular: false,
        order: 29,
        updated: "2026-10-16",
        content: [
            { type: "p", text: "Periksa koneksi internet dan tunggu sampai perangkat kembali terhubung." },
            { type: "p", text: "Jika permintaan sebelumnya gagal, periksa apakah jawaban sudah muncul sebelum mengirim ulang agar tidak membuat permintaan duplikat." }
        ]
    },

    // ==========================================
    // FITUR YANG BELUM TERSEDIA
    // ==========================================
    {
        id: "fitur-jelajahi",
        category: "percakapan",
        title: "Bagaimana cara menggunakan fitur Jelajahi?",
        summary: "Informasi mengenai fitur Jelajahi.",
        keywords: ["jelajahi", "explore", "fitur jelajahi"],
        popular: false,
        order: 30,
        updated: "2026-10-16",
        redirect: "features/unavailable/jelajahi.html"
    },
    {
        id: "fitur-file",
        category: "percakapan",
        title: "Bagaimana cara menggunakan fitur File?",
        summary: "Informasi mengenai fitur File.",
        keywords: ["file", "dokumen", "lampiran"],
        popular: false,
        order: 31,
        updated: "2026-10-16",
        redirect: "features/unavailable/file.html"
    },
    {
        id: "unggah-file",
        category: "percakapan",
        title: "Bagaimana cara mengunggah file?",
        summary: "Informasi mengenai fitur unggah file.",
        keywords: ["unggah", "upload", "upload file", "lampiran dokumen"],
        popular: false,
        order: 32,
        updated: "2026-10-16",
        redirect: "features/unavailable/unggah-file.html"
    },
    {
        id: "analisis-gambar",
        category: "percakapan",
        title: "Bagaimana cara menggunakan analisis gambar?",
        summary: "Informasi mengenai fitur analisis gambar.",
        keywords: ["gambar", "analisis gambar", "foto", "image"],
        popular: false,
        order: 33,
        updated: "2026-10-16",
        redirect: "features/unavailable/analisis-gambar.html"
    },
    {
        id: "pencarian-web",
        category: "percakapan",
        title: "Bagaimana cara menggunakan pencarian web?",
        summary: "Informasi mengenai fitur pencarian web.",
        keywords: ["pencarian web", "web search", "internet", "browsing"],
        popular: false,
        order: 34,
        updated: "2026-10-16",
        redirect: "features/unavailable/pencarian-web.html"
    },

    // ==========================================
    // PENUTUP DATA ARTIKEL
    // ==========================================
];

// Jumlah artikel yang benar-benar bisa dibuka; artikel redirect tidak dihitung.
if (Array.isArray(window.HELP_CATEGORIES)) {
    window.HELP_CATEGORIES.forEach(function (category) {
        category.articleCount = window.HELP_ARTICLES.filter(function (article) {
            return article.category === category.id && !article.redirect;
        }).length;
    });
}

// ==========================================
// FUNGSI PENGELOLAAN ARTIKEL
// ==========================================

window.getHelpArticleById = function (id) {
    return window.HELP_ARTICLES.find(function (article) {
        return article.id === id;
    }) || null;
};

window.getHelpArticles = function () {
    return window.HELP_ARTICLES.slice().sort(function (a, b) {
        return a.order - b.order;
    });
};

window.getHelpArticlesByCategory = function (categoryId) {
    return window.getHelpArticles().filter(function (article) {
        return article.category === categoryId;
    });
};

window.getPopularHelpArticles = function () {
    return window.getHelpArticles().filter(function (article) {
        return article.popular && !article.redirect;
    });
};

function normalizeHelpSearchText(value) {
    return String(value || "")
        .toLocaleLowerCase("id-ID")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ")
        .trim();
}

window.searchHelpArticles = function (query) {
    var normalizedQuery = normalizeHelpSearchText(query);

    if (!normalizedQuery) {
        return [];
    }

    var terms = Array.from(new Set(normalizedQuery.split(/\s+/).filter(Boolean)));

    return window.getHelpArticles()
        .filter(function (article) {
            // Artikel yang sengaja dialihkan ke 404 bukan hasil pencarian yang berguna.
            return !article.redirect;
        })
        .map(function (article) {
            var title = normalizeHelpSearchText(article.title);
            var summary = normalizeHelpSearchText(article.summary);
            var keywords = normalizeHelpSearchText(
                Array.isArray(article.keywords) ? article.keywords.join(" ") : ""
            );
            var body = normalizeHelpSearchText(
                (Array.isArray(article.content) ? article.content : [])
                    .map(function (block) {
                        if (!block) return "";
                        var items = Array.isArray(block.items) ? block.items.join(" ") : "";
                        return [block.text || "", items].join(" ");
                    })
                    .join(" ")
            );
            var score = title.includes(normalizedQuery) ? 6 : 0;

            terms.forEach(function (term) {
                if (title.includes(term)) score += 5;
                if (keywords.includes(term)) score += 3;
                if (summary.includes(term)) score += 2;
                if (body.includes(term)) score += 1;
            });

            return {
                article: article,
                score: score
            };
        })
        .filter(function (result) {
            return result.score > 0;
        })
        .sort(function (a, b) {
            return b.score - a.score || a.article.order - b.article.order;
        })
        .map(function (result) {
            return result.article;
        });
};
