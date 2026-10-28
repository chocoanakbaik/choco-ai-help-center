
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
        updated: "2026-10-18",
        content: [
            { type: "p", text: "Saat login, Choco AI mencoba menyimpan pasangan pesan pengguna dan jawaban AI ke database akun." },
            { type: "p", text: "Penyimpanan dapat gagal, misalnya jika konfigurasi atau izin database bermasalah. Dalam kondisi tersebut, aplikasi dapat menampilkan pemberitahuan bahwa jawaban tampil tetapi belum tersimpan." },
            { type: "p", text: "Setelah login, aplikasi memiliki daftar hingga 50 percakapan terbaru pada bagian Obrolan saat ini di sidebar. Jika daftar berhasil dimuat, pilih judul percakapan untuk mencoba membukanya kembali. Fitur ini bergantung pada koneksi dan izin database; kode yang tersedia bukan jaminan bahwa semua riwayat berhasil tersimpan atau dapat dibuka di setiap sesi. Tanpa login, judul obrolan yang tampil hanya berlaku selama sesi halaman dan tidak dapat dianggap sebagai riwayat akun. Jika daftar tidak muncul atau gagal dibuka, catat pemberitahuan yang tampil dan coba lagi setelah memeriksa koneksi." }
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
        summary: "Status ketersediaan menu profil pengguna pada aplikasi saat ini.",
        keywords: ["profil", "kelola profil", "informasi akun", "data pengguna"],
        popular: false,
        order: 22,
        updated: "2026-10-17",
        content: [
            { type: "p", text: "Pada versi Choco AI saat ini belum ada halaman atau menu Profil yang bisa dibuka pengguna untuk mengelola data pribadi. Bagian bawah sidebar menampilkan identitas Choco AI dan pengembang, bukan profil akun pengguna." },
            { type: "p", text: "Setelah login Google, aplikasi dapat membuat atau memperbarui catatan profil di database secara internal. Proses ini bukan halaman pengelolaan profil dan tidak menyediakan kontrol edit untuk pengguna. Sara tidak dapat melihat atau mengubah catatan tersebut." }
        ]
    },
    {
        id: "mengubah-data-profil",
        category: "profil",
        title: "Bagaimana cara mengubah data profil?",
        summary: "Penjelasan batasan perubahan profil pada antarmuka saat ini.",
        keywords: ["ubah profil", "edit profil", "nama", "data akun", "informasi profil"],
        popular: false,
        order: 23,
        updated: "2026-10-17",
        content: [
            { type: "p", text: "Antarmuka Choco AI saat ini belum menyediakan form untuk mengedit profil pengguna. Nama yang ditampilkan setelah login berasal dari informasi akun Google jika tersedia, atau alamat email sebagai cadangan." },
            { type: "p", text: "Tidak ada kontrol edit profil khusus yang dapat diikuti. Mengubah informasi akun Google tidak menjamin perubahan langsung tampil di Choco AI sampai data login disegarkan. Jangan mengubah record database melalui alat browser atau membagikan kredensial kepada siapa pun." }
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
        id: "pemrosesan-pesan-ai",
        category: "privasi",
        title: "Apakah pesan saya dikirim ke layanan AI eksternal?",
        summary: "Ketahui bagaimana pertanyaan dan konteks percakapan diproses untuk menghasilkan jawaban.",
        keywords: ["layanan AI eksternal", "penyedia AI", "Groq", "pihak ketiga", "pesan dikirim", "data percakapan", "pemrosesan chat", "privasi chat"],
        popular: false,
        order: 25,
        updated: "2026-10-24",
        content: [
            { type: "p", text: "Ya. Saat Anda memakai chat Choco AI, pesan dan konteks yang relevan dikirim melalui backend ke layanan model AI Groq untuk menghasilkan jawaban. Jika Anda login dan menyimpan catatan melalui tombol + Memori, catatan yang berhasil dimuat juga dapat disertakan sebagai konteks. Preferensi jawaban yang dipilih di aplikasi dapat ikut dikirim sebagai instruksi." },
            { type: "p", text: "Sara di Pusat Bantuan juga mengirim pertanyaan yang Anda tulis, sebagian konteks percakapan sementara, katalog fitur, dan artikel bantuan terpilih ke layanan model Groq untuk menyusun respons." },
            { type: "p", text: "Kunci API digunakan oleh backend dan tidak semestinya dimasukkan ke pesan atau kode browser. Setelah pasangan pesan akun berhasil disimpan, source aplikasi juga mencoba mengirim pasangan itu ke endpoint memori agar layanan model mengekstrak maksimal tiga fakta atau preferensi jangka panjang. Jalur ini terpisah dan dapat gagal. Penyimpanan riwayat juga dapat gagal dan tidak berarti pesan tidak diproses layanan model." },
            { type: "p", text: "Pusat Bantuan ini tidak memverifikasi rincian retensi atau penggunaan data di pihak penyedia layanan. Karena itu, jangan menganggap isi pertanyaan otomatis langsung dihapus atau tidak pernah disimpan oleh penyedia." },
            { type: "p", text: "Jangan masukkan kata sandi, API key, kode verifikasi, informasi pembayaran, data keuangan, atau rahasia pribadi ke chat atau catatan memori. Masukkan hanya informasi yang memang diperlukan untuk mendapatkan jawaban." }
        ]
    },
    {
        id: "memori-permanen",
        category: "privasi",
        title: "Apakah Choco AI memiliki memori permanen?",
        summary: "Perbedaan antara konteks percakapan dan memori yang tersimpan lintas sesi.",
        keywords: ["memori permanen", "ingatan", "memory", "konteks", "riwayat chat"],
        popular: false,
        order: 26,
        updated: "2026-10-24",
        content: [
            { type: "p", text: "Konteks percakapan menggunakan pesan dari sesi yang sedang berlangsung; itu berbeda dari catatan yang disimpan lintas sesi." },
            { type: "p", text: "Menu Memori pada sidebar masih bertanda Soon. Setelah login, tombol + Memori menyediakan jalur terpisah untuk menyimpan catatan manual." },
            { type: "p", text: "Source aplikasi juga mencoba ekstraksi memori otomatis setelah pasangan pesan akun berhasil disimpan. Backend mencoba mengambil maksimal tiga fakta atau preferensi jangka panjang yang dinyatakan pengguna. Ini bukan penyimpanan seluruh chat mentah sebagai memori, dapat menghasilkan nol catatan, dan dapat gagal. Perilaku produksi belum diverifikasi penuh." }
        ]
    },
    {
        id: "menyimpan-memori",
        category: "privasi",
        title: "Bisakah saya menyimpan memori secara manual?",
        summary: "UI saat ini belum menyediakan tombol untuk menambahkan catatan memori secara manual.",
        keywords: ["memori manual", "tombol + Memori", "catatan manual", "memori otomatis"],
        popular: false,
        order: 27,
        updated: "2026-10-24",
        content: [
            { type: "p", text: "Source Choco AI mendukung pemuatan memori akun dan mencoba mengekstrak fakta atau preferensi tertentu secara otomatis setelah pasangan pesan berhasil disimpan. Namun, UI yang diperiksa saat ini tidak menyediakan tombol + Memori untuk menambahkan catatan secara manual." },
            { type: "ol", items: [
                "Login Google dan penyimpanan riwayat adalah bagian terpisah dari proses ekstraksi memori.",
                "Ekstraksi otomatis hanya mencoba menyimpan beberapa fakta atau preferensi yang relatif stabil; tidak setiap pesan menjadi memori dan prosesnya dapat gagal.",
                "Karena kontrol penambahan memori manual belum tersedia pada UI saat ini, Sara tidak boleh memberi langkah memakai tombol + Memori atau menjanjikan pengguna dapat mengedit dan menghapus catatan melalui menu."
            ] }
        ]
    },
    {
        id: "menghapus-data",
        category: "privasi",
        title: "Bagaimana cara menghapus data saya?",
        summary: "Batasan opsi penghapusan akun, percakapan, dan memori pada UI saat ini.",
        keywords: ["hapus data", "menghapus akun", "hapus percakapan", "privasi", "data pribadi"],
        popular: false,
        order: 28,
        updated: "2026-10-24",
        content: [
            { type: "p", text: "Antarmuka Choco AI saat ini belum mendokumentasikan alur mandiri terverifikasi untuk menghapus akun, riwayat percakapan yang tersimpan, atau catatan memori satu per satu." },
            { type: "p", text: "Logout, menghapus riwayat yang terlihat di browser, atau membersihkan cache browser tidak membuktikan bahwa data pada database Supabase telah terhapus." },
            { type: "p", text: "Pusat Bantuan ini belum mendokumentasikan alur penghapusan mandiri yang sudah terverifikasi. Jangan menganggap data sudah dihapus tanpa konfirmasi dari mekanisme resmi yang benar-benar tersedia." }
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
        order: 29,
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
        order: 30,
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
        order: 31,
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
        order: 32,
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
        order: 33,
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
        order: 34,
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
        order: 35,
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
        order: 36,
        updated: "2026-10-16",
        redirect: "features/unavailable/pencarian-web.html"
    },

    // ==========================================
    // KNOWLEDGE SARA TAMBAHAN
    // ==========================================
    {
        "id": "cara-menulis-pertanyaan-jelas",
        "category": "memulai",
        "title": "Bagaimana cara menulis pertanyaan yang jelas untuk Choco AI?",
        "summary": "Beri konteks dan tujuan agar permintaan lebih mudah dipahami.",
        "keywords": [
            "prompt",
            "cara bertanya",
            "instruksi jelas",
            "konteks"
        ],
        "popular": false,
        "order": 37,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Jelaskan tujuan, konteks yang diperlukan, dan hasil yang diharapkan. Pertanyaan jelas membantu, tetapi tidak menjamin jawaban selalu tepat."
            },
            {
                "type": "ol",
                "items": [
                    "Sebutkan tugas secara langsung.",
                    "Berikan konteks secukupnya dan hindari rahasia pribadi.",
                    "Sebutkan format yang diinginkan, misalnya daftar atau langkah bernomor."
                ]
            }
        ]
    },

    {
        "id": "cara-meminta-format-jawaban",
        "category": "memulai",
        "title": "Bagaimana cara meminta format jawaban tertentu?",
        "summary": "Minta bentuk jawaban tertentu dan periksa hasil akhirnya.",
        "keywords": [
            "format jawaban",
            "tabel",
            "daftar",
            "ringkasan"
        ],
        "popular": false,
        "order": 38,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Anda dapat menyebutkan format langsung di pesan, meski Choco AI tetap dapat keliru mengikuti batasan."
            },
            {
                "type": "ol",
                "items": [
                    "Minta lima poin singkat, langkah bernomor, atau tabel perbandingan.",
                    "Sebutkan bagian wajib dan panjang yang diharapkan.",
                    "Jika hasil belum sesuai, minta revisi bagian tertentu."
                ]
            }
        ]
    },

    {
        "id": "meminta-perbaikan-jawaban",
        "category": "memulai",
        "title": "Bagaimana cara meminta Choco AI memperbaiki jawaban?",
        "summary": "Minta koreksi dengan menunjukkan bagian yang salah atau kurang sesuai.",
        "keywords": [
            "revisi",
            "perbaiki jawaban",
            "koreksi",
            "jawaban salah"
        ],
        "popular": false,
        "order": 39,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Tunjukkan bagian yang salah, kurang lengkap, atau terlalu panjang. Konteks yang masih relevan tidak harus diulang dari awal."
            },
            {
                "type": "ol",
                "items": [
                    "Jelaskan bagian yang perlu diperbaiki.",
                    "Tambahkan koreksi atau fakta yang benar jika diketahui.",
                    "Periksa hasil baru, terutama angka, kode, atau keputusan penting."
                ]
            }
        ]
    },

    {
        "id": "apakah-jawaban-ai-selalu-benar",
        "category": "memulai",
        "title": "Apakah jawaban Choco AI selalu benar?",
        "summary": "Pahami keterbatasan AI dan kapan informasi harus diperiksa.",
        "keywords": [
            "jawaban benar",
            "akurasi",
            "informasi salah",
            "verifikasi"
        ],
        "popular": false,
        "order": 40,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Tidak. Choco AI dapat menghasilkan informasi keliru atau tidak sesuai konteks walau terdengar meyakinkan."
            },
            {
                "type": "ol",
                "items": [
                    "Periksa nama, tanggal, angka, kutipan, dan klaim teknis penting.",
                    "Gunakan sumber resmi untuk keputusan berdampak besar.",
                    "Choco AI tidak otomatis mencari informasi web langsung."
                ]
            }
        ]
    },

    {
        "id": "apa-yang-bisa-dibantu-sara",
        "category": "memulai",
        "title": "Hal apa saja yang bisa dibantu Sara AI?",
        "summary": "Cakupan Sara di Pusat Bantuan dan hal yang tidak dapat dilakukan.",
        "keywords": [
            "Sara",
            "fungsi Sara",
            "Help Center",
            "bantuan"
        ],
        "popular": false,
        "order": 41,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Sara membantu menjelaskan penggunaan Choco AI, akun, percakapan, pengaturan, personalisasi, privasi, status fitur, dan pemecahan masalah awal."
            },
            {
                "type": "ol",
                "items": [
                    "Sara tidak dapat melihat akun, memeriksa database, atau mengubah pengaturan Anda.",
                    "Fitur Soon atau perlu verifikasi tidak boleh dijanjikan aktif.",
                    "Jika informasi belum terdokumentasi, Sara harus menyatakan ketidakpastian."
                ]
            }
        ]
    },

    {
        "id": "beralih-akun-google",
        "category": "akun",
        "title": "Bagaimana cara memakai akun Google yang berbeda?",
        "summary": "Beralih akun tanpa menjanjikan riwayat ikut berpindah.",
        "keywords": [
            "ganti akun",
            "beralih akun Google",
            "logout",
            "login ulang"
        ],
        "popular": false,
        "order": 42,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Jika Choco AI memakai akun yang salah, keluar melalui Logout lalu pilih Login dan akun Google yang benar."
            },
            {
                "type": "ol",
                "items": [
                    "Salin pesan yang belum terkirim.",
                    "Pilih Logout jika kontrol tersedia.",
                    "Pilih Login dan akun yang diinginkan.",
                    "Periksa identitas akun setelah kembali."
                ]
            }
        ]
    },

    {
        "id": "akun-google-tidak-muncul",
        "category": "akun",
        "title": "Mengapa akun Google saya tidak muncul saat login?",
        "summary": "Periksa sesi browser dan jendela autentikasi tanpa membagikan kredensial.",
        "keywords": [
            "akun Google tidak muncul",
            "pemilih akun",
            "pop up login"
        ],
        "popular": false,
        "order": 43,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Pemilih akun Google dapat dipengaruhi sesi browser, pop-up yang diblokir, atau koneksi."
            },
            {
                "type": "ol",
                "items": [
                    "Pastikan koneksi berfungsi.",
                    "Periksa pemblokiran pop-up autentikasi.",
                    "Gunakan pemilih akun resmi Google untuk memilih akun lain jika tersedia.",
                    "Catat teks error, jangan kirim password atau kode verifikasi."
                ]
            }
        ]
    },

    {
        "id": "nama-akun-google-berbeda",
        "category": "akun",
        "title": "Mengapa nama atau email akun terlihat berbeda?",
        "summary": "Keterbatasan informasi profil dan belum tersedianya editor mandiri.",
        "keywords": [
            "nama akun",
            "email akun",
            "profil Google",
            "ubah nama"
        ],
        "popular": false,
        "order": 44,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Choco AI dapat memakai nama atau email dari autentikasi Google. UI saat ini tidak menyediakan halaman Profil atau formulir edit profil."
            },
            {
                "type": "ol",
                "items": [
                    "Periksa akun Google yang dipilih.",
                    "Keluar lalu masuk kembali setelah perubahan profil jika perlu.",
                    "Sara tidak dapat membaca data profil atau mengganti nama/email."
                ]
            }
        ]
    },

    {
        "id": "jawaban-tidak-sesuai-konteks",
        "category": "percakapan",
        "title": "Mengapa jawaban Choco AI tidak sesuai konteks?",
        "summary": "Perjelas konteks atau pisahkan topik baru.",
        "keywords": [
            "tidak sesuai konteks",
            "salah memahami",
            "konteks chat",
            "jawaban melenceng"
        ],
        "popular": false,
        "order": 45,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Jawaban dapat melenceng jika permintaan kurang jelas atau konteks dari topik sebelumnya mengganggu."
            },
            {
                "type": "ol",
                "items": [
                    "Jelaskan tujuan pertanyaan dalam satu kalimat.",
                    "Sebutkan detail relevan dan koreksi jawaban sebelumnya bila perlu.",
                    "Untuk topik berbeda, pilih Obrolan baru."
                ]
            }
        ]
    },

    {
        "id": "jawaban-berulang",
        "category": "percakapan",
        "title": "Mengapa Choco AI mengulang jawaban yang sama?",
        "summary": "Cara mengarahkan jawaban agar tidak mengulang bagian sebelumnya.",
        "keywords": [
            "jawaban berulang",
            "mengulang jawaban",
            "respons sama"
        ],
        "popular": false,
        "order": 46,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Choco AI mungkin mengulang isi karena konteks atau instruksi membuatnya kembali ke jawaban sebelumnya."
            },
            {
                "type": "ol",
                "items": [
                    "Tunjukkan bagian yang sudah dijawab dan minta informasi yang belum dibahas.",
                    "Minta hasil dalam format tertentu, misalnya tiga langkah baru.",
                    "Pastikan jawaban pertama tidak muncul sebelum mengirim ulang."
                ]
            }
        ]
    },

    {
        "id": "jawaban-terpotong",
        "category": "percakapan",
        "title": "Apa yang harus dilakukan jika jawaban Choco AI terpotong?",
        "summary": "Minta kelanjutan tanpa mengasumsikan adanya tombol khusus.",
        "keywords": [
            "jawaban terpotong",
            "respons terhenti",
            "jawaban belum lengkap"
        ],
        "popular": false,
        "order": 47,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Jawaban dapat berhenti karena gangguan atau batas proses model. Sara tidak dapat memeriksa log permintaan."
            },
            {
                "type": "ol",
                "items": [
                    "Pastikan jawaban benar-benar berhenti.",
                    "Kirim “Lanjutkan dari bagian terakhir tanpa mengulang sebelumnya.”",
                    "Jika sering terjadi, minta versi ringkas atau pecah tugas.",
                    "Catat teks error jika ada."
                ]
            }
        ]
    },

    {
        "id": "obrolan-baru-vs-riwayat",
        "category": "percakapan",
        "title": "Apa bedanya Obrolan baru dengan riwayat percakapan?",
        "summary": "Bedakan konteks sesi baru dari daftar percakapan akun.",
        "keywords": [
            "obrolan baru",
            "riwayat chat",
            "chat lama",
            "sesi baru"
        ],
        "popular": false,
        "order": 48,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Obrolan baru memisahkan konteks dan bukan perintah menghapus percakapan lama. Source meminta daftar hingga 50 percakapan terbaru setelah login; produksi belum diverifikasi penuh."
            },
            {
                "type": "ol",
                "items": [
                    "Periksa sidebar dan pilih judul lama jika tersedia.",
                    "Jangan menganggap logout menghapus data tersimpan.",
                    "Sara tidak dapat memeriksa database atau memulihkan chat."
                ]
            }
        ]
    },

    {
        "id": "pesan-belum-terkirim",
        "category": "percakapan",
        "title": "Apa yang harus dilakukan jika pesan belum terkirim?",
        "summary": "Langkah awal saat pesan menunggu atau tidak menghasilkan jawaban.",
        "keywords": [
            "pesan belum terkirim",
            "chat pending",
            "mengirim pesan gagal"
        ],
        "popular": false,
        "order": 49,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Jangan kirim pesan yang sama berulang kali saat permintaan pertama masih diproses."
            },
            {
                "type": "ol",
                "items": [
                    "Tunggu dan periksa apakah jawaban atau error muncul.",
                    "Periksa koneksi dan pastikan teks masih ada.",
                    "Salin teks sebelum memuat ulang halaman.",
                    "Coba lagi satu kali setelah permintaan pertama dipastikan gagal."
                ]
            }
        ]
    },

    {
        "id": "konteks-setelah-refresh",
        "category": "percakapan",
        "title": "Apakah konteks chat tetap ada setelah halaman dimuat ulang?",
        "summary": "Bedakan konteks aktif dari pemuatan ulang riwayat akun.",
        "keywords": [
            "refresh",
            "reload",
            "chat hilang",
            "konteks setelah refresh"
        ],
        "popular": false,
        "order": 50,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Konteks browser dan riwayat akun berbeda. Pesan yang belum tersimpan belum tentu kembali setelah refresh."
            },
            {
                "type": "ol",
                "items": [
                    "Jika login, periksa sidebar untuk percakapan lama.",
                    "Pilih judul jika tersedia dan lihat apakah pesan dimuat.",
                    "Catat pesan error; Sara tidak dapat memulihkan chat."
                ]
            }
        ]
    },

    {
        "id": "permintaan-chat-ganda",
        "category": "percakapan",
        "title": "Mengapa satu pertanyaan terkirim atau terjawab lebih dari sekali?",
        "summary": "Hindari pengiriman berulang saat permintaan pertama belum selesai.",
        "keywords": [
            "chat duplikat",
            "permintaan ganda",
            "pesan dobel"
        ],
        "popular": false,
        "order": 51,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Permintaan ganda bisa terjadi saat tombol ditekan berkali-kali atau pesan dikirim ulang sebelum hasil pertama jelas."
            },
            {
                "type": "ol",
                "items": [
                    "Tunggu indikator pemrosesan berhenti.",
                    "Pastikan jawaban pertama tidak tampil sebelum mencoba lagi.",
                    "Jika berulang, catat waktu, browser, dan gejalanya."
                ]
            }
        ]
    },

    {
        "id": "preferensi-tidak-tersimpan",
        "category": "pengaturan",
        "title": "Mengapa preferensi Choco AI kembali seperti semula?",
        "summary": "Periksa penyimpanan preferensi dan batasan lintas perangkat.",
        "keywords": [
            "preferensi hilang",
            "pengaturan tidak tersimpan",
            "setting reset"
        ],
        "popular": false,
        "order": 52,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Sebagian preferensi dapat disimpan lokal di browser sehingga berbeda antarperangkat atau hilang setelah data situs dibersihkan."
            },
            {
                "type": "ol",
                "items": [
                    "Periksa pilihan Pengaturan atau Personalisasi.",
                    "Gunakan tombol simpan jika tersedia.",
                    "Coba browser dan profil yang sama.",
                    "Jangan anggap semua preferensi tersinkron antarperangkat."
                ]
            }
        ]
    },

    {
        "id": "efek-mengetik-bukan-kecepatan",
        "category": "pengaturan",
        "title": "Apakah efek mengetik memengaruhi kecepatan Choco AI?",
        "summary": "Bedakan animasi tampilan dari waktu pemrosesan model.",
        "keywords": [
            "efek mengetik",
            "animasi mengetik",
            "respons lambat"
        ],
        "popular": false,
        "order": 53,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Efek mengetik mengatur cara teks ditampilkan, bukan waktu layanan AI menghasilkan jawaban."
            },
            {
                "type": "ol",
                "items": [
                    "Periksa apakah animasi saja yang lambat atau jawaban belum diterima.",
                    "Koneksi dan pemrosesan model dapat memengaruhi waktu respons.",
                    "Ketersediaan kontrol mengikuti UI; Sara tidak dapat mengubahnya."
                ]
            }
        ]
    },

    {
        "id": "personalisasi-tidak-diterapkan",
        "category": "personalisasi",
        "title": "Mengapa personalisasi tidak selalu memengaruhi jawaban?",
        "summary": "Periksa pilihan personalisasi dan batas pengaruhnya.",
        "keywords": [
            "personalisasi tidak berfungsi",
            "gaya bahasa tidak berubah",
            "preferensi respons"
        ],
        "popular": false,
        "order": 54,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Personalisasi membantu memberi preferensi gaya, detail, humor, atau emoji. Pengaruhnya tidak mutlak dan bukan berarti model dilatih ulang."
            },
            {
                "type": "ol",
                "items": [
                    "Periksa pilihan yang benar-benar tampil.",
                    "Simpan perubahan jika UI menyediakan opsi simpan.",
                    "Uji di pesan baru dan jelaskan preferensi langsung jika perlu."
                ]
            }
        ]
    },

    {
        "id": "bedanya-personalisasi-dan-instruksi",
        "category": "personalisasi",
        "title": "Apa bedanya Personalisasi dengan instruksi di chat?",
        "summary": "Bedakan preferensi umum dari permintaan untuk pesan tertentu.",
        "keywords": [
            "personalisasi",
            "instruksi chat",
            "prompt khusus",
            "preferensi umum"
        ],
        "popular": false,
        "order": 55,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Personalisasi adalah preferensi umum; instruksi chat merupakan permintaan untuk jawaban atau percakapan tertentu."
            },
            {
                "type": "ol",
                "items": [
                    "Preferensi umum dapat meminta jawaban singkat.",
                    "Satu pesan dapat meminta penjelasan rinci dengan langkah bernomor.",
                    "Keduanya tidak menjamin semua respons mengikuti keinginan tanpa pengecualian."
                ]
            }
        ]
    },

    {
        "id": "perbedaan-konteks-riwayat-memori",
        "category": "privasi",
        "title": "Apa bedanya konteks chat, riwayat percakapan, dan memori?",
        "summary": "Bedakan tiga jenis informasi yang tidak diproses dengan cara sama.",
        "keywords": [
            "konteks chat",
            "riwayat percakapan",
            "memori permanen"
        ],
        "popular": false,
        "order": 56,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Konteks adalah pesan untuk kesinambungan chat aktif; riwayat adalah percakapan akun yang coba disimpan; memori adalah catatan manual atau hasil ekstraksi fakta/preferensi."
            },
            {
                "type": "ol",
                "items": [
                    "Menu Memori sidebar masih bertanda Soon.",
                    "Tombol + Memori adalah jalur manual.",
                    "Source juga mencoba ekstraksi otomatis setelah pasangan pesan akun berhasil disimpan; proses dapat gagal dan produksi belum diverifikasi."
                ]
            }
        ]
    },

    {
        "id": "apakah-semua-pesan-menjadi-memori",
        "category": "privasi",
        "title": "Apakah semua pesan otomatis disimpan sebagai memori?",
        "summary": "Bedakan riwayat percakapan, ekstraksi otomatis, dan kontrol memori manual yang belum tersedia.",
        "keywords": ["memori otomatis", "semua pesan disimpan", "ekstraksi memori", "catatan manual"],
        "popular": false,
        "order": 57,
        "updated": "2026-10-24",
        "content": [
            { "type": "p", "text": "Tidak semua pesan otomatis menjadi catatan memori. Setelah pasangan pesan dan jawaban berhasil disimpan untuk akun login, source Choco AI mencoba mengekstrak fakta atau preferensi jangka panjang. Ini berbeda dari riwayat pesan." },
            { "type": "ol", "items": [
                "Backend meminta maksimal tiga catatan singkat dan menghindari kredensial, informasi sensitif, tebakan, klaim assistant, serta pertanyaan sesaat.",
                "Jika tidak ada informasi yang cocok, hasilnya bisa nol catatan dan ekstraksi dapat gagal.",
                "UI yang diperiksa belum memiliki tombol + Memori untuk catatan manual. Status produksi penyimpanan dan pemuatan memori tetap perlu diuji."
            ] }
        ]
    },

    {
        "id": "memori-gagal-disimpan",
        "category": "privasi",
        "title": "Apa yang harus dilakukan jika memori gagal disimpan?",
        "summary": "Langkah awal untuk catatan manual dan batas Sara dalam memeriksa akun.",
        "keywords": [
            "memori gagal disimpan",
            "notifikasi memori",
            "simpan catatan"
        ],
        "popular": false,
        "order": 58,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Jika Choco AI memberi tahu catatan manual gagal disimpan, jangan menganggapnya sudah tersimpan."
            },
            {
                "type": "ol",
                "items": [
                    "Pastikan login masih aktif.",
                    "Coba catatan singkat tanpa data sensitif.",
                    "Periksa koneksi dan teks error.",
                    "Jika berulang, laporkan teks error dan waktu kejadian. Sara tidak dapat memeriksa database."
                ]
            }
        ]
    },

    {
        "id": "memori-tidak-digunakan",
        "category": "privasi",
        "title": "Mengapa Choco AI tidak menggunakan memori yang pernah disimpan?",
        "summary": "Pahami penyebab catatan tidak muncul dalam konteks jawaban.",
        "keywords": [
            "memori tidak digunakan",
            "memori tidak terbaca",
            "ingatan tidak muncul"
        ],
        "popular": false,
        "order": 59,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Catatan membantu hanya jika tersimpan, dimuat, dan relevan dengan pertanyaan. Proses tersebut dapat gagal."
            },
            {
                "type": "ol",
                "items": [
                    "Pastikan memakai akun yang sama.",
                    "Periksa notifikasi penyimpanan atau pemuatan jika tersedia.",
                    "Sebutkan lagi konteks relevan bila perlu.",
                    "Sara tidak dapat melihat isi memori akun."
                ]
            }
        ]
    },

    {
        "id": "masa-simpan-data",
        "category": "privasi",
        "title": "Berapa lama data dan percakapan saya disimpan?",
        "summary": "Periode retensi profil, pesan, dan memori belum diverifikasi.",
        "keywords": [
            "retensi data",
            "masa simpan",
            "hapus otomatis"
        ],
        "popular": false,
        "order": 60,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Help Center belum memiliki periode retensi terverifikasi untuk profil, percakapan, pesan, dan memori. Sara tidak boleh menjanjikan penghapusan otomatis setelah jumlah hari tertentu."
            },
            {
                "type": "ol",
                "items": [
                    "Logout atau membersihkan cache tidak membuktikan data database terhapus.",
                    "Ajukan pertanyaan data melalui kontak resmi yang dipublikasikan.",
                    "Jangan sertakan kata sandi, token sesi, atau API key."
                ]
            }
        ]
    },

    {
        "id": "jangan-kirim-data-sensitif",
        "category": "privasi",
        "title": "Informasi apa yang sebaiknya tidak dikirim ke chat?",
        "summary": "Langkah perlindungan sebelum mengirim pertanyaan.",
        "keywords": [
            "data sensitif",
            "kata sandi",
            "API key",
            "kode OTP",
            "token"
        ],
        "popular": false,
        "order": 61,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Kirim hanya informasi yang diperlukan. Pertanyaan dan konteks diproses layanan AI eksternal; retensi pihak penyedia belum diverifikasi penuh."
            },
            {
                "type": "ol",
                "items": [
                    "Jangan kirim password, OTP, token sesi, API key, atau kredensial.",
                    "Hindari data pembayaran, nomor rekening, dokumen identitas, dan rahasia yang tidak diperlukan.",
                    "Samarkan detail pribadi pada tangkapan layar atau laporan error."
                ]
            }
        ]
    },

    {
        "id": "apakah-sara-melihat-akun",
        "category": "privasi",
        "title": "Apakah Sara bisa melihat akun, riwayat, atau memori Choco AI saya?",
        "summary": "Batas akses Sara terhadap akun dan data tersimpan.",
        "keywords": [
            "Sara melihat akun",
            "lihat riwayat chat",
            "akses database",
            "memori akun"
        ],
        "popular": false,
        "order": 62,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Tidak. Sara tidak mempunyai akses langsung untuk membuka akun, membaca database, memeriksa riwayat atau memori, ataupun mengubah pengaturan."
            },
            {
                "type": "ol",
                "items": [
                    "Sara menerima pertanyaan, konteks sementara, katalog fitur, dan artikel bantuan terpilih.",
                    "Konteks yang diperlukan dikirim ke layanan model untuk menyusun jawaban.",
                    "Jelaskan gejala tanpa password, token, API key, atau data sensitif."
                ]
            }
        ]
    },

    {
        "id": "permintaan-koreksi-data",
        "category": "privasi",
        "title": "Bagaimana cara mengajukan permintaan koreksi atau penghapusan data?",
        "summary": "Arahkan permintaan privasi ke kanal resmi tanpa menjanjikan hasil.",
        "keywords": [
            "koreksi data",
            "hapus data",
            "permintaan privasi",
            "hubungi dukungan"
        ],
        "popular": false,
        "order": 63,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "UI Choco AI belum mendokumentasikan alur mandiri terverifikasi untuk menghapus profil, riwayat, atau memori satu per satu."
            },
            {
                "type": "ol",
                "items": [
                    "Gunakan kanal kontak resmi yang dipublikasikan The Choco Studios.",
                    "Jelaskan jenis data dan permintaan secara singkat.",
                    "Berikan informasi minimum dan jangan sertakan kredensial.",
                    "Sara tidak dapat menjalankan permintaan atau menjanjikan hasilnya."
                ]
            }
        ]
    },

    {
        "id": "halaman-putih-kosong",
        "category": "pemecahan-masalah",
        "title": "Apa yang harus dilakukan jika Choco AI hanya menampilkan halaman putih?",
        "summary": "Langkah awal saat halaman kosong atau tidak selesai dimuat.",
        "keywords": [
            "halaman putih",
            "layar kosong",
            "blank page"
        ],
        "popular": false,
        "order": 64,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Halaman kosong dapat berasal dari koneksi, aset gagal dimuat, cache, ekstensi, atau masalah aplikasi. Gejala ini saja tidak menentukan penyebab."
            },
            {
                "type": "ol",
                "items": [
                    "Periksa apakah situs lain terbuka.",
                    "Muat ulang setelah menyalin teks belum terkirim.",
                    "Coba browser diperbarui atau nonaktifkan sementara ekstensi.",
                    "Catat waktu kejadian jika masalah tetap ada."
                ]
            }
        ]
    },

    {
        "id": "tombol-tidak-merespons",
        "category": "pemecahan-masalah",
        "title": "Mengapa tombol atau menu Choco AI tidak merespons?",
        "summary": "Panduan awal saat tombol tidak berfungsi atau menu tidak terbuka.",
        "keywords": [
            "tombol tidak merespons",
            "menu tidak bisa dibuka",
            "klik tidak berfungsi"
        ],
        "popular": false,
        "order": 65,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Tombol mungkin tidak merespons saat permintaan diproses atau ketika skrip, koneksi, atau tampilan gagal dimuat."
            },
            {
                "type": "ol",
                "items": [
                    "Tunggu sampai permintaan selesai.",
                    "Periksa pesan error dan notifikasi.",
                    "Coba lagi setelah memastikan halaman tidak memproses permintaan.",
                    "Salin pesan sebelum memuat ulang."
                ]
            }
        ]
    },

    {
        "id": "layanan-sibuk-atau-batas-permintaan",
        "category": "pemecahan-masalah",
        "title": "Apa arti layanan sibuk atau batas permintaan tercapai?",
        "summary": "Langkah aman saat layanan AI meminta pengguna mencoba lagi nanti.",
        "keywords": [
            "layanan sibuk",
            "rate limit",
            "HTTP 429",
            "kuota layanan"
        ],
        "popular": false,
        "order": 66,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Pesan layanan sibuk atau permintaan terlalu sering berarti permintaan belum diproses; itu bukan bukti akun bermasalah."
            },
            {
                "type": "ol",
                "items": [
                    "Tunggu sebentar.",
                    "Periksa apakah jawaban sebelumnya sudah muncul.",
                    "Coba ulang satu kali jika permintaan pertama gagal.",
                    "Batas Sara berbasis memori instance, bukan kuota global persisten."
                ]
            }
        ]
    },

    {
        "id": "riwayat-tidak-muncul",
        "category": "pemecahan-masalah",
        "title": "Mengapa riwayat percakapan tidak muncul setelah login?",
        "summary": "Pemeriksaan awal saat daftar percakapan kosong atau gagal dimuat.",
        "keywords": [
            "riwayat tidak muncul",
            "chat lama hilang",
            "daftar percakapan kosong"
        ],
        "popular": false,
        "order": 67,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Source meminta daftar hingga 50 percakapan terbaru setelah login, tetapi ini bukan jaminan semua riwayat tersimpan atau termuat di produksi."
            },
            {
                "type": "ol",
                "items": [
                    "Login dengan akun Google yang sama.",
                    "Periksa sidebar dan tunggu daftar selesai dimuat.",
                    "Periksa koneksi serta notifikasi error.",
                    "Sara tidak dapat memeriksa database atau memulihkan riwayat."
                ]
            }
        ]
    },

    {
        "id": "tampilan-tidak-memperbarui",
        "category": "pemecahan-masalah",
        "title": "Mengapa tampilan Choco AI tidak berubah setelah pengaturan diubah?",
        "summary": "Cara memeriksa perubahan yang belum terlihat.",
        "keywords": [
            "tampilan tidak berubah",
            "pengaturan tidak berubah",
            "cache browser"
        ],
        "popular": false,
        "order": 68,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Perubahan mungkin belum disimpan, tidak didukung UI, atau halaman masih memakai aset dari cache."
            },
            {
                "type": "ol",
                "items": [
                    "Pastikan opsi tersedia dan simpan jika perlu.",
                    "Muat ulang halaman; pada Windows Ctrl + F5 meminta browser memuat ulang aset.",
                    "Catat opsi dan gejalanya jika tetap gagal."
                ]
            }
        ]
    },

    {
        "id": "sara-tidak-merespons",
        "category": "pemecahan-masalah",
        "title": "Apa yang harus dilakukan jika Sara AI tidak menjawab?",
        "summary": "Langkah awal jika asisten Pusat Bantuan gagal merespons.",
        "keywords": [
            "Sara tidak merespons",
            "Sara error",
            "Help Center bot gagal"
        ],
        "popular": false,
        "order": 69,
        "updated": "2026-10-24",
        "content": [
            {
                "type": "p",
                "text": "Sara memerlukan koneksi browser dan layanan model. Gangguan jaringan, pembatasan permintaan, konfigurasi backend, atau layanan AI dapat menyebabkan respons gagal."
            },
            {
                "type": "ol",
                "items": [
                    "Pastikan koneksi berjalan dan Help Center selesai dimuat.",
                    "Coba satu pertanyaan singkat terkait Choco AI.",
                    "Jika diminta menunggu, tunggu sebelum mencoba lagi.",
                    "Catat teks error dan waktu tanpa informasi sensitif."
                ]
            }
        ]
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

    var stopWords = new Set([
        "apa", "apakah", "bagaimana", "gimana", "kenapa", "mengapa", "cara",
        "yang", "dan", "atau", "untuk", "dengan", "pada", "di", "ke", "dari",
        "saya", "aku", "kamu", "lu", "gw", "gue", "nya", "bisa", "tolong",
        "choco", "ai", "itu", "ini", "ada", "tidak", "gak", "ga", "nggak"
    ]);
    var terms = Array.from(new Set(
        normalizedQuery.split(/\s+/).filter(function (term) {
            return term.length > 1 && !stopWords.has(term);
        })
    ));

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
