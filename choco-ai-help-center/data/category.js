
/*
 * CHOCO AI HELP CENTER
 * File: data/categories.js
 *
 * Data kategori utama untuk Pusat Bantuan Choco AI.
 * ID kategori harus konsisten dengan tautan category.html?id=...
 */

window.HELP_CATEGORIES = [
    {
      id: "memulai",
      title: "Memulai dengan Choco AI",
      description:
        "Panduan dasar untuk mengenal Choco AI, memahami cara kerjanya, dan mulai menggunakannya.",
      icon: "sparkles",
      articleCount: 0,
      order: 1,
      popular: true
    },
    {
      id: "akun",
      title: "Akun & Login",
      description:
        "Panduan pendaftaran, login, metode masuk, dan solusi kendala akses akun.",
      icon: "user",
      articleCount: 0,
      order: 2,
      popular: true
    },
    {
      id: "percakapan",
      title: "Percakapan & Fitur",
      description:
        "Pelajari cara menggunakan chatbot, mengelola percakapan, dan memahami fitur aplikasi.",
      icon: "message-circle",
      articleCount: 0,
      order: 3,
      popular: true
    },
    {
      id: "pengaturan",
      title: "Pengaturan",
      description:
        "Informasi tentang menu pengaturan dan cara mengelola opsi yang tersedia.",
      icon: "settings",
      articleCount: 0,
      order: 4,
      popular: true
    },
    {
      id: "personalisasi",
      title: "Personalisasi",
      description:
        "Panduan menyesuaikan pengalaman, preferensi, dan perilaku Choco AI sesuai fitur yang tersedia.",
      icon: "palette",
      articleCount: 0,
      order: 5,
      popular: true
    },
    {
      id: "profil",
      title: "Profil",
      description:
        "Informasi profil pengguna dan panduan mengelola data profil akun.",
      icon: "contact",
      articleCount: 0,
      order: 6,
      popular: false
    },
    {
      id: "privasi",
      title: "Privasi & Keamanan",
      description:
        "Panduan menjaga keamanan akun dan memahami pengelolaan informasi pribadi.",
      icon: "shield",
      articleCount: 0,
      order: 7,
      popular: false
    },
    {
      id: "pemecahan-masalah",
      title: "Pemecahan Masalah",
      description:
        "Solusi untuk kendala login, tampilan, koneksi, respons chatbot, dan masalah teknis lainnya.",
      icon: "help-circle",
      articleCount: 0,
      order: 8,
      popular: true
    }
  ];
  
  /*
   * Helper untuk mencari kategori berdasarkan ID.
   */
  window.getHelpCategoryById = function (id) {
    return window.HELP_CATEGORIES.find(function (category) {
      return category.id === id;
    }) || null;
  };
  
  /*
   * Helper untuk mendapatkan kategori sesuai urutan.
   */
  window.getHelpCategories = function () {
    return window.HELP_CATEGORIES
      .slice()
      .sort(function (a, b) {
        return a.order - b.order;
      });
  };
  
  /*
   * Helper untuk mendapatkan kategori populer.
   */
  window.getPopularHelpCategories = function () {
    return window.getHelpCategories().filter(function (category) {
      return category.popular;
    });
  };
  