export interface Category {
  id: number;
  count: number;
  description: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
}

export type CategoryPostsType = Category[];

const categories: CategoryPostsType = [
  {
    id: 148,
    count: 335,
    description: '',
    name: 'Artikel',
    slug: 'artikel',
    taxonomy: 'category',
    parent: 0,
  },
  {
    id: 82,
    count: 222,
    description: '',
    name: 'Berita',
    slug: 'berita',
    taxonomy: 'category',
    parent: 0,
  },
  {
    id: 83,
    count: 30,
    description: '',
    name: 'Citiasia Inc',
    slug: 'citiasiainc',
    taxonomy: 'category',
    parent: 82,
  },
  {
    id: 84,
    count: 28,
    description: '',
    name: 'Daerah',
    slug: 'daerah',
    taxonomy: 'category',
    parent: 82,
  },
  {
    id: 88,
    count: 6,
    description: '',
    name: 'Events',
    slug: 'events',
    taxonomy: 'category',
    parent: 0,
  },
  {
    id: 145,
    count: 19,
    description: '',
    name: 'Government',
    slug: 'gov',
    taxonomy: 'category',
    parent: 0,
  },
  {
    id: 117,
    count: 3,
    description: '',
    name: 'Health',
    slug: 'health',
    taxonomy: 'category',
    parent: 0,
  },
  {
    id: 101,
    count: 21,
    description: '',
    name: 'Insight',
    slug: 'insight',
    taxonomy: 'category',
    parent: 0,
  },
  {
    id: 85,
    count: 7,
    description: '',
    name: 'Internasional',
    slug: 'internasional',
    taxonomy: 'category',
    parent: 82,
  },
  {
    id: 89,
    count: 0,
    description: `Citiasia Center for Smart Nation (CCSN) menyelenggarakan Indonesia Smart City Investment Forum (ISCIF) Talkshow, yang sekaligus menjadi ajang pengumuman pemenang 4th Indonesia Smart Nation Award (ISNA). ISCIF mengusung tema "Smart City 2020: Driving Innovation and Productivity during the Global Pandemic" yang mengundang pemimpin daerah, pengambil kebijakan, akademisi, dan praktisi smart city untuk berbagi pengalaman dan inovasi pembangunan yang relevan dengan tantangan pandemi serta menciptakan platform berharga untuk pertukaran ide.`,
    name: 'ISCIF',
    slug: 'iscif-events',
    taxonomy: 'category',
    parent: 88,
  },

  {
    id: 90,
    count: 9,
    description: `Indonesia Smart Nation Award (ISNA) merupakan acara dwi tahunan yang digelar oleh Citiasia, Inc.
    sejak 2015. ISNA bertujuan untuk memberikan penghargaan yang diberikan kepada Kota/Kabupaten yang
    inovasinya memberikan dampak secara luas kepada masyarakat. Melalui ISNA, Citiasia, Inc. berkomitmen
    untuk mendorong pertumbuhan dan pengembangan konsep kota cerdas dalam pengelolaan perkotaan demi
    kepentingan seluruh masyarakat Indonesia dan mewujudkan Indonesia Maju menjadi Smart Nation.`,
    name: 'ISNA',
    slug: 'isna-events',
    taxonomy: 'category',
    parent: 88,
  },

  {
    id: 91,
    count: 27,
    description: `Indonesia Smart Nation Award (ISNA) 2015 adalah pagelaran pertama yang dilaksanakan oleh Citiasia, Inc. yang berkolaborasi dengan PT Indosat Tbk dan Datacomm Cloud Business. Acara dilaksanakan pada Selasa, 20 Oktober 2015 di Hotel JS Luwansa, Kuningan, Jakarta. ISNA memberi penghargaan kepada 45 daerah (provinsi, kabupaten, dan kota) di Indonesia yang memiliki infrastruktur ICT pendukung komunikasi regional yang efektif. Citiasia Center for Smart Nation (CCSN) yang merupakan lini strategis milik Citiasia, Inc. mengumumkan hasil studi "Indonesia Smart Region Maturity Index” pada kesempatan yang sama, indeks ini mengukur kondisi kesiapan daerah untuk pembangunan Smart City di wilayah Indonesia.

    `,
    name: 'ISNA 2015',
    slug: 'isna-2015',
    taxonomy: 'category',
    parent: 90,
  },
  {
    id: 92,
    count: 0,
    description: `Indonesia Smart Nation Award (ISNA) diselenggarakan untuk kedua kalinya pada tahun 2016, pada kesempatan ini Citiasia, Inc. menyampaikan hasil riset mengenai indeks daerah dan pengakuan terhadap prestasi lokal yang dirangkum dalam Indonesia Smart Nation Index 2016. Indeks yang disusun oleh Citiasia Center for Smart Nations (CCSN) ini mengevaluasi seluruh wilayah di Indonesia (34 provinsi, 412 kabupaten, dan 93 kota) dengan menggunakan data resmi dari berbagai sumber, menganalisis 72 media cetak nasional dan lokal serta 100 media online untuk mendorong dan mewujudkan cita-cita bersama dalam mewujudkan Indonesia Smart Nation.`,
    name: 'ISNA 2016',
    slug: 'isna-2016',
    taxonomy: 'category',
    parent: 90,
  },
  {
    id: 93,
    count: 2,
    description: `Indonesia Smart Nation Awards (ISNA) ke-3 2018 sukses digelar pada Kamis, 3 Mei 2018 di Nusantara 2 Hall, ICE BSD City, Tangerang. ISNA 2018 diisi dengan kegiatan talkshow yang bertema “Creating Competitive and Sustainable Cities for Tourism, Trade & Investment”, Acara tersebut dihadiri langsung oleh Menteri Pariwisata Arief Yahya dan lebih dari 50 kepala daerah, praktisi di bidang pariwisata, investasi, dan ICT. ISNA berhasil dilaksanakan atas kerjasama dengan Citiasia Center for Smart Nation (CCSN), Debindo, Visit Wonderful Indonesia (ViWI) dan Kementerian Pariwisata Republik Indonesia.`,
    name: 'ISNA 2018',
    slug: 'isna-2018',
    taxonomy: 'category',
    parent: 90,
  },
  {
    id: 94,
    count: 11,
    description: `Indonesia Smart Nation Award ke-4 2020 diselenggarakan bersamaan dengan Indonesia Smart City Investment Forum (ISCIF) 2020 secara daring melalui platform konferensi Zoom Virtu-Ex pada tanggal 5 Oktober 2020. Tema ISCIF 2020 dan ISNA ke-4 adalah “Smart City 2020: Driving Innovation & Productivity During The Global Pandemic.” Citiasia Center for Smart Nation (CCSN) melakukan survei mengenai inovasi yang diinisiasi oleh pemerintah kota dan kabupaten sebagai respon terhadap pandemi COVID-19, dengan lebih dari 500  kabupaten dan kota di seluruh Indonesia yang berpartisipasi dan menghasilkan lebih dari 180 inovasi.`,
    name: 'ISNA 2020',
    slug: 'isna-2020',
    taxonomy: 'category',
    parent: 90,
  },
  {
    id: 155,
    count: 11,
    description: `Indonesia Smart Nation Award (ISNA) ke-5 2022 digelar pada Kamis 17 November 2022 di ICE BSD, Tangerang. Tema ISNA 2022 tahun ini adalah “Smart City Innovation: For Post-Pandemic Economic Recovery”. ISNA 2022 menjadi salah satu rangkaian acara di pagelaran IndoBuildTech (IBT) Expo 2022, acara ini diisi dengan sesi Talkshow dan Book Launching. Kesempatan ini dimaksimalkan dengan menghadirkan 3 narasumber luar biasa, diantaranya adalah Aryo Ramandhito (Senior Analyst RUN System), Hanny Winarti (General Account Management Lead, Qiscus), dan Wahyudi (Telkom Indonesia).
    `,
    name: 'ISNA 2022',
    slug: 'isna-2022',
    taxonomy: 'category',
    parent: 90,
  },

  {
    id: 86,
    count: 45,
    description: '',
    name: 'Nasional',
    slug: 'nasional',
    taxonomy: 'category',
    parent: 82,
  },

  {
    id: 139,
    count: 64,
    description: '',
    name: 'Smart City',
    slug: 'smartcity',
    taxonomy: 'category',
    parent: 0,
  },

  {
    id: 154,
    count: 16,
    description: '',
    name: 'Smartnation 2022',
    slug: 'smartnation-2022',
    taxonomy: 'category',
    parent: 0,
  },
  {
    id: 137,
    count: 27,
    description: '',
    name: 'Technology',
    slug: 'tech',
    taxonomy: 'category',
    parent: 0,
  },

  {
    id: 129,
    count: 3,
    description: `Citiasia Inc. menyediakan layanan pelatihan yang disesuaikan dengan kebutuhan dan bidang industri klien kami. Kami menggabungkan teori implementatif dengan solusi praktis yang relevan untuk klien, pendekatan ini berfokus pada hasil untuk meningkatkan efektivitas dan relevansi pelatihan bagi klien kami.`,
    name: 'Training',
    slug: 'training',
    taxonomy: 'category',
    parent: 0,
  },

  {
    id: 112,
    count: 5,
    description: '',
    name: 'World',
    slug: 'world',
    taxonomy: 'category',
    parent: 0,
  },
];

export { categories };
