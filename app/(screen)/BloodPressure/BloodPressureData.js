const recommendationData = {
  Normal: {
    color: 'green',
    tips: [
      'Makan makanan sehat seperti sayur-sayuran dan buah-buahan setiap hari.',
      'Kurangi makanan yang terlalu asin atau berminyak.',
      'Lakukan olahraga ringan, seperti jalan kaki 30 menit sehari, lima kali seminggu.',
      'Istirahat yang cukup dengan tidur 7-8 jam setiap malam.',
      'Hindari stres. Luangkan waktu untuk melakukan hal yang menyenangkan atau meditasi.',
      'Lakukan pemeriksaan tekanan darah secara rutin.',
    ],
    foods: [
      { type: 'Sayur', items: ['Brokoli', 'Bayam', 'Wortel'] },
      { type: 'Buah', items: ['Apel', 'Jeruk', 'Kiwi'] },
      {
        type: 'Protein',
        items: ['Ikan salmon', 'Ayam tanpa kulit', 'Kacang-kacangan'],
      },
    ],
    complications: [
      'Risiko terkena hipertensi dan penyakit jantung di masa depan.',
    ],
  },
  Prahipertensi: {
    color: 'yellow',
    tips: [
      'Kurangi makanan yang asin, seperti keripik atau makanan kaleng.',
      'Batasi penggunaan garam dalam masakan.',
      'Mulailah makan makanan sehat seperti buah, sayur, dan biji-bijian.',
      'Lakukan olahraga seperti bersepeda, berenang, atau senam selama 30 menit, minimal 3 kali seminggu.',
      'Jangan merokok dan hindari alkohol.',
      'Catat tekanan darah Anda secara berkala untuk melihat apakah ada perubahan.',
    ],
    foods: [
      { type: 'Sayur', items: ['Timun', 'Seledri', 'Asparagus'] },
      { type: 'Buah', items: ['Pisang', 'Alpukat', 'Stroberi'] },
      { type: 'Protein', items: ['Ikan tuna', 'Tahu', 'Tempe'] },
    ],
    complications: ['Risiko naik menjadi hipertensi grade 1.'],
  },
  'Hipertensi Grade 1': {
    color: 'red',
    tips: [
      'Perbanyak makan sayur hijau dan buah-buahan segar setiap hari.',
      'Kurangi makanan berminyak, seperti gorengan, dan gantikan dengan makanan yang dipanggang atau direbus.',
      'Lakukan olahraga rutin, seperti jalan cepat atau jogging ringan.',
      'Batasi konsumsi alkohol dan hentikan kebiasaan merokok.',
      'Konsultasikan tekanan darah Anda ke dokter untuk pengobatan lebih lanjut.',
    ],
    foods: [
      { type: 'Sayur', items: ['Bayam', 'Kale', 'Brokoli'] },
      { type: 'Buah', items: ['Anggur', 'Delima', 'Blueberry'] },
      { type: 'Protein', items: ['Ikan sarden', 'Telur rebus', 'Dada ayam'] },
    ],
    complications: [
      'Risiko terkena penyakit jantung, stroke, atau gagal ginjal.',
    ],
  },
  'Hipertensi Grade 2': {
    color: 'orange',
    tips: [
      'Segera konsultasikan dengan dokter untuk pengobatan lebih lanjut.',
      'Ikuti pola makan rendah garam dan tinggi serat.',
      'Hindari stres dan lakukan teknik relaksasi seperti yoga atau meditasi.',
      'Minum obat antihipertensi sesuai resep dokter.',
      'Kurangi konsumsi makanan olahan dan pilih makanan alami.',
    ],
    foods: [
      { type: 'Sayur', items: ['Selada', 'Kol', 'Bayam'] },
      { type: 'Buah', items: ['Semangka', 'Pisang', 'Kiwi'] },
      { type: 'Protein', items: ['Ikan makarel', 'Kacang almond', 'Tahu'] },
    ],
    complications: ['Risiko tinggi terkena serangan jantung atau stroke.'],
  },
  'Hipertensi Akut': {
    color: 'darkred',
    tips: [
      'Segera cari bantuan medis darurat.',
      'Jangan menunda pengobatan untuk menghindari komplikasi yang fatal.',
      'Tetap tenang dan hindari aktivitas fisik yang berat.',
    ],
    foods: [],
    complications: [
      'Risiko kerusakan organ akut seperti otak, jantung, atau ginjal.',
    ],
  },
};

export default recommendationData;
