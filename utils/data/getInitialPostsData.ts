import useCreateSlug from "~/composables/useCreateSlug";
import useGenerateUniqueId from "~/composables/useGenerateUniqueId";

export interface Posts {
  id: number | string;
  slug: string;
  date_gmt: string;
  modified_gmt: string;
  status: string;
  categories: Array<number>;
  tags: Array<number>;
  author: number;
  featured_media: string;
  comment_status: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
}

export type PostsDataType = Posts[];

const posts: PostsDataType = [
  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "Smart City: Standar Nasional Indonesia (SNI) untuk Kota Cerdas"
    ),
    date_gmt: new Date("21 December 2022").toISOString(),
    modified_gmt: new Date("21 December 2022").toISOString(),
    status: "publish",
    categories: [148, 82, 139],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2022/12/21_Des-01-01-1536x896.png",
    comment_status: "open",
    title: {
      rendered:
        "Smart City: Standar Nasional Indonesia (SNI) untuk Kota Cerdas",
    },
    excerpt: {
      rendered:
        "Pembangunan dan pengembangan smart city sedang menjadi hal yang banyak dilakukan oleh daerah-daerah di Indonesia. Apalagi, pemerintah Indonesia memiliki program Gerakan Menuju 100 smart city yang merupakan program bersama Kementerian Komunikasi dan Informatika, Kementerian Dalam Negeri, Kementerian PUPR, Bappenas dan Kantor Staf Kepresidenan. ",
    },
    content: {
      rendered:
        "Pembangunan dan pengembangan smart city sedang menjadi hal yang banyak dilakukan oleh daerah-daerah di Indonesia. Apalagi, pemerintah Indonesia memiliki program Gerakan Menuju 100 smart city yang merupakan program bersama Kementerian Komunikasi dan Informatika, Kementerian Dalam Negeri, Kementerian PUPR, Bappenas dan Kantor Staf Kepresidenan. ",
    },
  },
  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "Terapkan Smart Fisheries Village (SFV) pada Industri Kelautan di Indonesia"
    ),
    date_gmt: new Date("20 December 2022").toISOString(),
    modified_gmt: new Date("20 December 2022").toISOString(),
    status: "publish",
    categories: [148, 101, 86, 139, 154, 137],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2022/12/WEB-20-1536x896.jpg",
    comment_status: "open",
    title: {
      rendered:
        "Terapkan Smart Fisheries Village (SFV) pada Industri Kelautan di Indonesia",
    },
    excerpt: {
      rendered:
        "Kementerian Kelautan dan Perikanan (KKP) melalui Badan Riset dan Sumber Daya Manusia Kelautan dan Perikanan menciptakan inovasi di bidang perikanan melalui  Smart Fisheries Village (SFV). Program SFV diluncurkan oleh Menteri Kelautan dan Perikanan pada 2 Agustus 2022 di Rapat Kerja Teknis BRSDM, memiliki dua konsep yakni yakni SFV Desa dan SFV UPT.",
    },
    content: {
      rendered:
        "Kementerian Kelautan dan Perikanan (KKP) melalui Badan Riset dan Sumber Daya Manusia Kelautan dan Perikanan menciptakan inovasi di bidang perikanan melalui  Smart Fisheries Village (SFV). Program SFV diluncurkan oleh Menteri Kelautan dan Perikanan pada 2 Agustus 2022 di Rapat Kerja Teknis BRSDM, memiliki dua konsep yakni yakni SFV Desa dan SFV UPT.",
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "Teknologi VAR dalam Pertandingan Sepak Bola Piala Dunia 2022"
    ),
    date_gmt: new Date("16 December 2022").toISOString(),
    modified_gmt: new Date("16 December 2022").toISOString(),
    status: "publish",
    categories: [148, 82, 137],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2022/12/artikel16-1536x896.jpg",
    comment_status: "open",
    title: {
      rendered: "Teknologi VAR dalam Pertandingan Sepak Bola Piala Dunia 2022",
    },
    excerpt: {
      rendered:
        "Teknologi telah berkembang dengan sangat pesat, bahkan sudah merambah di bidang olahraga yaitu sepak bola. Piala Dunia 2022 yang diselenggarakan oleh negara Qatar telah menggunakan teknologi Video Assistant Referee (VAR) dalam menentukan posisi offside.",
    },
    content: {
      rendered:
        "Teknologi telah berkembang dengan sangat pesat, bahkan sudah merambah di bidang olahraga yaitu sepak bola. Piala Dunia 2022 yang diselenggarakan oleh negara Qatar telah menggunakan teknologi Video Assistant Referee (VAR) dalam menentukan posisi offside.",
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "Wamenkes Ingin Mendorong Inovasi Teknologi di Bidang Kesehatan"
    ),
    date_gmt: new Date("16 December 2022").toISOString(),
    modified_gmt: new Date("16 December 2022").toISOString(),
    status: "publish",
    categories: [82, 83, 145, 101, 86, 139, 137],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2022/12/Artikel-16-Desember-1-1536x896.png",
    comment_status: "open",
    title: {
      rendered:
        "Wamenkes Ingin Mendorong Inovasi Teknologi di Bidang Kesehatan",
    },
    excerpt: {
      rendered:
        "Dante Saksono, Wakil Menteri Kesehatan Republik Indonesia ingin para ahli medis dan peneliti kesehatan untuk mengembangkan riset dan melakukan inovasi teknologi dalam mewujudkan transformasi sistem kesehatan di Indonesia. Dukungan ini sejalan dengan pilar-pilar penopang transformasi kesehatan nasional, yaitu pilar ketiga yang berisi transformasi ketahanan kesehatan dan pilar keenam berupa transformasi teknologi kesehatan.",
    },
    content: {
      rendered:
        "Dante Saksono, Wakil Menteri Kesehatan Republik Indonesia ingin para ahli medis dan peneliti kesehatan untuk mengembangkan riset dan melakukan inovasi teknologi dalam mewujudkan transformasi sistem kesehatan di Indonesia. Dukungan ini sejalan dengan pilar-pilar penopang transformasi kesehatan nasional, yaitu pilar ketiga yang berisi transformasi ketahanan kesehatan dan pilar keenam berupa transformasi teknologi kesehatan.",
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug("Uang Digital RI Akan Rilis Tahun Depan"),
    date_gmt: new Date("13 December 2022").toISOString(),
    modified_gmt: new Date("13 December 2022").toISOString(),
    status: "publish",
    categories: [148, 82, 145, 139, 154],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2022/12/14_Des-01-01-1-1536x896.png",
    comment_status: "open",
    title: {
      rendered: "Uang Digital RI Akan Rilis Tahun Depan",
    },
    excerpt: {
      rendered:
        "Bank Indonesia (BI) dikabarkan sudah memiliki timeline untuk menerbitkan Central Bank Digital Currency (CDBC) alias rupiah digital. Direktur Departemen Kebijakan Sistem Pembayaran BI, Fitria Irmi menjelaskan bahwa digital rupiah akan menjadi pembayaran yang sah di Indonesia. Selain itu, rupiah digital akan mendukung pelaksanaan tugas BI di bidang moneter, makroprudensial, dan juga sistem pembayaran di era digital. ",
    },
    content: {
      rendered:
        "Bank Indonesia (BI) dikabarkan sudah memiliki timeline untuk menerbitkan Central Bank Digital Currency (CDBC) alias rupiah digital. Direktur Departemen Kebijakan Sistem Pembayaran BI, Fitria Irmi menjelaskan bahwa digital rupiah akan menjadi pembayaran yang sah di Indonesia. Selain itu, rupiah digital akan mendukung pelaksanaan tugas BI di bidang moneter, makroprudensial, dan juga sistem pembayaran di era digital. ",
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "Tingkatkan SDM Daerah Melalui Seminar Smart City 2022"
    ),
    date_gmt: new Date("13 December 2022").toISOString(),
    modified_gmt: new Date("13 December 2022").toISOString(),
    status: "publish",
    categories: [148, 145, 86, 139],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2022/12/Artikel13-1536x896.jpg",
    comment_status: "open",
    title: {
      rendered: "Tingkatkan SDM Daerah Melalui Seminar Smart City 2022",
    },
    excerpt: {
      rendered:
        "Pemerintah Kota Se-Indonesia mengupayakan peningkatan sumber daya manusia (SDM) dengan mengajak para pemuda dan pelaku UMKM untuk mengikuti seminar nasional dalam rangka mencapai Program Gerakan Menuju Smart City. ",
    },
    content: {
      rendered:
        "Pemerintah Kota Se-Indonesia mengupayakan peningkatan sumber daya manusia (SDM) dengan mengajak para pemuda dan pelaku UMKM untuk mengikuti seminar nasional dalam rangka mencapai Program Gerakan Menuju Smart City. ",
    },
  },
  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "KPK ingin Menekan Korupsi dengan Digitalisasi Sistem Pemerintahan"
    ),
    date_gmt: new Date("10 December 2022").toISOString(),
    modified_gmt: new Date("10 December 2022").toISOString(),
    status: "publish",
    categories: [82, 83, 145, 101, 86, 139, 137],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2022/12/09_Desember-01-01-01-1536x896.png",
    comment_status: "open",
    title: {
      rendered:
        "KPK ingin Menekan Korupsi dengan Digitalisasi Sistem Pemerintahan",
    },
    excerpt: {
      rendered:
        "Johanis Tanak, Wakil Ketua Komisi Pemberantasan Korupsi (KPK) Republik Indonesia menyebutkan bahwa pelayanan publik masih menjadi salah satu sektor yang masih rentan korupsi di lingkungan pemerintah pusat atau daerah. ",
    },
    content: {
      rendered:
        "Johanis Tanak, Wakil Ketua Komisi Pemberantasan Korupsi (KPK) Republik Indonesia menyebutkan bahwa pelayanan publik masih menjadi salah satu sektor yang masih rentan korupsi di lingkungan pemerintah pusat atau daerah. ",
    },
  },
  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "Gunakan Teknologi RFID Untuk Mendeteksi Plat Nomor Kendaraan"
    ),
    date_gmt: new Date("8 December 2022").toISOString(),
    modified_gmt: new Date("8 December 2022").toISOString(),
    status: "publish",
    categories: [148, 82, 86, 139, 154, 137],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2022/12/8-des-web-1024x597.png",
    comment_status: "open",
    title: {
      rendered: "Gunakan Teknologi RFID Untuk Mendeteksi Plat Nomor Kendaraan",
    },
    excerpt: {
      rendered:
        "Radio Frequency Identification (RFID) merupakan alat pendeteksi kendaraan dengan signal pada plat nomor kendaraan. Sistem ini digunakan oleh Polri sebagai upaya implementasi smart city serta mengantisipasi pengendara yang melepas plat nomor untuk menghindari tilang elektronik atau Electronic Traffic Law Enforcement (ETLE).",
    },
    content: {
      rendered:
        "Radio Frequency Identification (RFID) merupakan alat pendeteksi kendaraan dengan signal pada plat nomor kendaraan. Sistem ini digunakan oleh Polri sebagai upaya implementasi smart city serta mengantisipasi pengendara yang melepas plat nomor untuk menghindari tilang elektronik atau Electronic Traffic Law Enforcement (ETLE).",
    },
  },
  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "Kominfo Ingin Dunia Usaha Ikut Mendorong Kolaborasi dalam Inisiatif Smart City"
    ),
    date_gmt: new Date("8 December 2022").toISOString(),
    modified_gmt: new Date("8 December 2022").toISOString(),
    status: "publish",
    categories: [148, 82, 86, 139, 154, 137],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2022/12/08_des-01-1536x896.png",
    comment_status: "open",
    title: {
      rendered:
        "Kominfo Ingin Dunia Usaha Ikut Mendorong Kolaborasi dalam Inisiatif Smart City",
    },
    excerpt: {
      rendered:
        "Kementerian Komunikasi dan Informatika mendorong peran serta dunia usaha untuk ikut terlibat dalam inisiatif pembangunan smart city, sehingga inisiatif pengembangan kota cerdas juga dikerjakan oleh pemerintah daerah, investor dan sektor swasta. Ketika ketiga hal tersebut berkolaborasi dengan baik, diharapkan masyarakat akan mendapat pelayanan publik yang lebih baik.",
    },
    content: {
      rendered:
        "Kementerian Komunikasi dan Informatika mendorong peran serta dunia usaha untuk ikut terlibat dalam inisiatif pembangunan smart city, sehingga inisiatif pengembangan kota cerdas juga dikerjakan oleh pemerintah daerah, investor dan sektor swasta. Ketika ketiga hal tersebut berkolaborasi dengan baik, diharapkan masyarakat akan mendapat pelayanan publik yang lebih baik.",
    },
  },
  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "Dalam Kenalkan Energi Terbarukan, Indonesia Gelar Pameran Teknologi Smart City"
    ),
    date_gmt: new Date("7 December 2022").toISOString(),
    modified_gmt: new Date("7 December 2022").toISOString(),
    status: "publish",
    categories: [148, 139, 86, 139, 154, 137],
    tags: [],
    author: 1,
    featured_media:
      "https://drive.google.com/uc?export=download&id=1Afl0CYymvD4OIK9symWpcLHLZBzcU4AR",
    comment_status: "open",
    title: {
      rendered:
        "Dalam Kenalkan Energi Terbarukan, Indonesia Gelar Pameran Teknologi Smart City",
    },
    excerpt: {
      rendered:
        "Kementerian Dalam Negeri melalui Direktorat Jenderal Bina Administrasi Kewilayahan menggelar Pameran Teknologi Terpadu (Integrated Technology Event/ ITE) 2022 pada 5-7 Oktober 2022 di Jakarta Convention Center (JCC) dalam rangka memperkenalkan smart city di Indonesia.",
    },
    content: {
      rendered:
        "Kementerian Dalam Negeri melalui Direktorat Jenderal Bina Administrasi Kewilayahan menggelar Pameran Teknologi Terpadu (Integrated Technology Event/ ITE) 2022 pada 5-7 Oktober 2022 di Jakarta Convention Center (JCC) dalam rangka memperkenalkan smart city di Indonesia.",
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "Konsep Smart Living, Mengedepankan Keamanan dan Kenyamanan"
    ),
    date_gmt: new Date("8 December 2022").toISOString(),
    modified_gmt: new Date("8 December 2022").toISOString(),
    status: "publish",
    categories: [148, 101, 139, 137],
    tags: [],
    author: 1,
    featured_media:
      "https://drive.google.com/uc?export=download&id=1ysbrz2aT7qo92No_yBlw7ic2h85Ytc6d",
    comment_status: "open",
    title: {
      rendered: "Konsep Smart Living, Mengedepankan Keamanan dan Kenyamanan",
    },
    excerpt: {
      rendered:
        "Smart living adalah salah satu dimensi smart city yang memprioritaskan kepraktisan dan efisiensi dalam hidup. Smart living menawarkan berbagai keuntungan bagi manusia, seperti kenyamanan, keamanan dan efisiensi energi dalam kehidupan sehari-hari.           ",
    },
    content: {
      rendered:
        "Smart living adalah salah satu dimensi smart city yang memprioritaskan kepraktisan dan efisiensi dalam hidup. Smart living menawarkan berbagai keuntungan bagi manusia, seperti kenyamanan, keamanan dan efisiensi energi dalam kehidupan sehari-hari.           ",
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "IMPLEMENTASI SPONGE CITY DALAM PEMBANGUNAN IBU KOTA NUSANTARA (IKN)"
    ),
    date_gmt: new Date("1 December 2022").toISOString(),
    modified_gmt: new Date("1 December 2022").toISOString(),
    status: "publish",
    categories: [148, 82, 139],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2022/12/spongecity-1-2-1536x896.png",
    comment_status: "open",
    title: {
      rendered:
        "IMPLEMENTASI SPONGE CITY DALAM PEMBANGUNAN IBU KOTA NUSANTARA (IKN)",
    },
    excerpt: {
      rendered:
        "Sponge City atau dikenal dengan Kota Spons merupakan wilayah yang berperan mampu menahan air hujan agar tidak langsung melimpas ke saluran-saluran drainase dan mampu meningkatkan peresapan ke dalam tanah sehingga tidak menyebabkan banjir, selain itu dapat mempengaruhi kualitas dan kuantitas air melalui penyaringan tanah dan penyimpanan dalam tanah (akuifer).",
    },
    content: {
      rendered:
        "Sponge City atau dikenal dengan Kota Spons merupakan wilayah yang berperan mampu menahan air hujan agar tidak langsung melimpas ke saluran-saluran drainase dan mampu meningkatkan peresapan ke dalam tanah sehingga tidak menyebabkan banjir, selain itu dapat mempengaruhi kualitas dan kuantitas air melalui penyaringan tanah dan penyimpanan dalam tanah (akuifer).",
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug("Qatar Gunakan Serba AI di Piala Dunia 2022"),
    date_gmt: new Date("30 November 2022").toISOString(),
    modified_gmt: new Date("30 November 2022").toISOString(),
    status: "publish",
    categories: [148, 82, 139, 154, 137],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2022/11/desain_29_Nov-01-1536x896.png",
    comment_status: "open",
    title: {
      rendered: "Qatar Gunakan Serba AI di Piala Dunia 2022",
    },
    excerpt: {
      rendered:
        "Setelah dinanti-nanti, piala dunia 2022 akhirnya dilaksanakan di Qatar sejak 20 November lalu dan diikuti oleh 32 negara. Selain pembukaan piala dunia yang menjadi perbincangan hangat karena menyatukan berbagai budaya, Qatar juga menarik perhatian publik dengan penerapan teknologi Artificial Intelligence (AI) di Piala Dunia 2022 yang canggih.",
    },
    content: {
      rendered:
        "Setelah dinanti-nanti, piala dunia 2022 akhirnya dilaksanakan di Qatar sejak 20 November lalu dan diikuti oleh 32 negara. Selain pembukaan piala dunia yang menjadi perbincangan hangat karena menyatukan berbagai budaya, Qatar juga menarik perhatian publik dengan penerapan teknologi Artificial Intelligence (AI) di Piala Dunia 2022 yang canggih.",
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug("Implementasi Smart Branding, Tidak Hanya Soal Wisata"),
    date_gmt: new Date("25 November 2022").toISOString(),
    modified_gmt: new Date("25 November 2022").toISOString(),
    status: "publish",
    categories: [148, 83, 88, 145, 90, 155, 86, 139],
    tags: [],
    author: 1,
    featured_media:
      "https://drive.google.com/uc?export=download&id=1LDmsUjoKixpG_yDD9vV5afobbW9VsWtG",
    comment_status: "open",
    title: {
      rendered: "Implementasi Smart Branding, Tidak Hanya Soal Wisata",
    },
    excerpt: {
      rendered:
        "Smart branding merupakan salah satu pilar dari pendekatan smart city yang memiliki definisi strategi memasarkan sebuah kota atau wilayah sehingga mampu menarik ekosistem sekitar, baik itu warga, masyarakat umum, ataupun pelaku bisnis.",
    },
    content: {
      rendered:
        "Smart branding merupakan salah satu pilar dari pendekatan smart city yang memiliki definisi strategi memasarkan sebuah kota atau wilayah sehingga mampu menarik ekosistem sekitar, baik itu warga, masyarakat umum, ataupun pelaku bisnis.",
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "Siap-siap, di Pertengahan November Tahun Ini, ISNA 2022 Akan Digelar!"
    ),
    date_gmt: new Date("25 November 2022").toISOString(),
    modified_gmt: new Date("25 November 2022").toISOString(),
    status: "publish",
    categories: [148, 83, 88, 145, 90, 86, 139],
    tags: [],
    author: 1,
    featured_media:
      "https://drive.google.com/uc?export=download&id=1cDzj6ZUrHyGEAeXzh2P-3AjWwUonmtqc",
    comment_status: "open",
    title: {
      rendered:
        "Siap-siap, di Pertengahan November Tahun Ini, ISNA 2022 Akan Digelar!",
    },
    excerpt: {
      rendered:
        "Indonesia Smart Nation Award (ISNA) 2022 kembali diadakan secara langsung setelah dua tahun lamanya. ISNA diadakan oleh Citiasia Center For Smart Nation yang sebelumnya telah berhasil menggelar ISNA 2015, 2016, 2019, 2020, dan akan diselenggarakan tahun ini pada hari Kamis, 17 November 2022 di Garuda Main Hall 1 (First Floor) – ICE BSD, Tangerang.",
    },
    content: {
      rendered:
        "Indonesia Smart Nation Award (ISNA) 2022 kembali diadakan secara langsung setelah dua tahun lamanya. ISNA diadakan oleh Citiasia Center For Smart Nation yang sebelumnya telah berhasil menggelar ISNA 2015, 2016, 2019, 2020, dan akan diselenggarakan tahun ini pada hari Kamis, 17 November 2022 di Garuda Main Hall 1 (First Floor) – ICE BSD, Tangerang.  ",
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "Inovasi Layanan Drive Thru Kabupaten Batang Sebagai Pemenang ISNA 2020"
    ),
    date_gmt: new Date("7 October 2022").toISOString(),
    modified_gmt: new Date("7 October 2022").toISOString(),
    status: "publish",
    categories: [148, 88, 90],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2022/10/web7okt-1536x896.jpg",
    comment_status: "open",
    title: {
      rendered:
        "Inovasi Layanan Drive Thru Kabupaten Batang Sebagai Pemenang ISNA 2020",
    },
    excerpt: {
      rendered:
        "Pemerintah Kabupaten Batang terpilih sebagai penerima apresiasi The 4th ISNA 2020 melalui pengembangan inovasi layanan Drive Thru di Mal Pelayanan Publik (MPP) Batang, (Infopublik.id, 2020). MPP Batang merupakan yang ketiga di Jawa Tengah sebagai percontohan, dikarenakan MPP Batang menjadi MPP pertama di Indonesia yang memiliki layanan Drive Thru perpanjangan SIM A dan SIM B.",
    },
    content: {
      rendered:
        "Pemerintah Kabupaten Batang terpilih sebagai penerima apresiasi The 4th ISNA 2020 melalui pengembangan inovasi layanan Drive Thru di Mal Pelayanan Publik (MPP) Batang, (Infopublik.id, 2020). MPP Batang merupakan yang ketiga di Jawa Tengah sebagai percontohan, dikarenakan MPP Batang menjadi MPP pertama di Indonesia yang memiliki layanan Drive Thru perpanjangan SIM A dan SIM B.        ",
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "Inovasi Cek Bantuan Sosial Covid-19 Banyuwangi Raih Indonesia Smart Nation Award 2020"
    ),
    date_gmt: new Date("12 October 2022").toISOString(),
    modified_gmt: new Date("12 October 2022").toISOString(),
    status: "publish",
    categories: [88, 90],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2020/10/ilustrasi-cek-bantuan-sosial-dalam-penanganan-covid-19-di-banyuwangi-360x220-1.jpg",
    comment_status: "open",
    title: {
      rendered:
        "Inovasi Cek Bantuan Sosial Covid-19 Banyuwangi Raih Indonesia Smart Nation Award 2020",
    },
    excerpt: {
      rendered:
        "Banyuwangi meraih award kategori Smart Society berupa inovasi penggunaan TIK dalam penanganan dampak sosial virus Corona ( Covid-19 ).Penghargaan tersebut diselenggarakan oleh Citiasia Center for Smart Nation (CCSN) dan tahun ini merupakan penyelenggaraan ke-4. Pada tahun ini, ISNA mengusung tema “Smart City 2020: Driving Innovation & Productivity During The Global Pandemic”.  ",
    },
    content: {
      rendered:
        "Banyuwangi meraih award kategori Smart Society berupa inovasi penggunaan TIK dalam penanganan dampak sosial virus Corona ( Covid-19 ).Penghargaan tersebut diselenggarakan oleh Citiasia Center for Smart Nation (CCSN) dan tahun ini merupakan penyelenggaraan ke-4. Pada tahun ini, ISNA mengusung tema “Smart City 2020: Driving Innovation & Productivity During The Global Pandemic”. ",
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "DPMPTSP Kabupaten Blitar Raih Penghargaan “Smart Branding” 2020"
    ),
    date_gmt: new Date("12 October 2022").toISOString(),
    modified_gmt: new Date("12 October 2022").toISOString(),
    status: "publish",
    categories: [82, 94],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2020/10/Smart-Branding-1000x520-750x460-1-750x450.jpeg",
    comment_status: "open",
    title: {
      rendered:
        "DPMPTSP Kabupaten Blitar Raih Penghargaan “Smart Branding” 2020",
    },
    excerpt: {
      rendered:
        "READ.ID – Indonesia Smart City Investment Forum (ISCIF) talkshow kembali digelar oleh Citiasia Center for Smart Nation (CCSN) yang bermitra dengan PT Debindo – ITE dan didukung oleh PT Telkom Indonesia.        ",
    },
    content: {
      rendered:
        "READ.ID – Indonesia Smart City Investment Forum (ISCIF) talkshow kembali digelar oleh Citiasia Center for Smart Nation (CCSN) yang bermitra dengan PT Debindo – ITE dan didukung oleh PT Telkom Indonesia.        ",
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "PENGUATAN KAMPUNG TANGGUH DI KOTA PROBOLINGGO MENDAPAT APRESIASI ISNA 2020"
    ),
    date_gmt: new Date("12 October 2022").toISOString(),
    modified_gmt: new Date("12 October 2022").toISOString(),
    status: "publish",
    categories: [82, 94],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2020/10/IMG-20201005-WA0036-750x460-1-750x450.jpg",
    comment_status: "open",
    title: {
      rendered:
        "PENGUATAN KAMPUNG TANGGUH DI KOTA PROBOLINGGO MENDAPAT APRESIASI ISNA 2020",
    },
    excerpt: {
      rendered:
        "KANIGARAN – Kota Probolinggo kembali mengukir prestasi. Kali ini Kota Probolinggo  dinobatkan sebagai Smart Society Penguatan Kampung Tangguh, dalam ajang penghargaan Indonesia Smart Nation Award (ISNA) 2020, Senin (5/10), yang dilakukan secara virtual.        ",
    },
    content: {
      rendered:
        "KANIGARAN – Kota Probolinggo kembali mengukir prestasi. Kali ini Kota Probolinggo  dinobatkan sebagai Smart Society Penguatan Kampung Tangguh, dalam ajang penghargaan Indonesia Smart Nation Award (ISNA) 2020, Senin (5/10), yang dilakukan secara virtual.        ",
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "Pemkot Parepare Raih Penghargaan Smart Nation Award 2020"
    ),
    date_gmt: new Date("12 October 2022").toISOString(),
    modified_gmt: new Date("12 October 2022").toISOString(),
    status: "publish",
    categories: [82, 94],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2020/10/IMG-20201005-WA0115-750x460-1-750x450.jpg",
    comment_status: "open",
    title: {
      rendered: "Pemkot Parepare Raih Penghargaan Smart Nation Award 2020",
    },
    excerpt: {
      rendered:
        "PAREPARE, BACAPESAN.COM – Kota Parepare kembali mendapat penghargaan prestesius di tingkat nasional. Kali ini dalam ajang “Indonesia Smart Nation Award (ISNA) 2020",
    },
    content: {
      rendered:
        "PAREPARE, BACAPESAN.COM – Kota Parepare kembali mendapat penghargaan prestesius di tingkat nasional. Kali ini dalam ajang “Indonesia Smart Nation Award (ISNA) 2020”.        ",
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "PENGHARGAAN: Aplikasi Bakulan dan Platform Belajar Kota Batam Jadi yang Terbaik"
    ),
    date_gmt: new Date("12 October 2022").toISOString(),
    modified_gmt: new Date("12 October 2022").toISOString(),
    status: "publish",
    categories: [82, 94],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2020/10/IMG-20201005-WA0077-1024x697-750x460-1-750x450.jpg",
    comment_status: "open",
    title: {
      rendered:
        "PENGHARGAAN: Aplikasi Bakulan dan Platform Belajar Kota Batam Jadi yang Terbaik",
    },
    excerpt: {
      rendered:
        "Dua penghargaan itu adalah Smart Economy dan Platfrom Belajar Mengajar Terbaik. Penghargaan tersebut diterima langsung oleh Sekretaris Daerah (Sekda) Kota Batam, Jefridin Hamid, melalui virtual di Kantor Wali Kota Batam, Senin (5/10/2020).",
    },
    content: {
      rendered:
        "Dua penghargaan itu adalah Smart Economy dan Platfrom Belajar Mengajar Terbaik. Penghargaan tersebut diterima langsung oleh Sekretaris Daerah (Sekda) Kota Batam, Jefridin Hamid, melalui virtual di Kantor Wali Kota Batam, Senin (5/10/2020).       ",
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "Wujudkan Smart City, Pasar Online Lamongan Terima Apresiasi Dari ISNA"
    ),
    date_gmt: new Date("12 October 2022").toISOString(),
    modified_gmt: new Date("12 October 2022").toISOString(),
    status: "publish",
    categories: [82, 94],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2020/10/IMG-20201005-WA0077-1024x697-750x460-1-750x450.jpg",
    comment_status: "open",
    title: {
      rendered:
        "Wujudkan Smart City, Pasar Online Lamongan Terima Apresiasi Dari ISNA",
    },
    excerpt: {
      rendered:
        "LAMONGAN – Pemerintah Kabupaten Lamongan dibawah kepemimpinan Bupati Fadeli banyak mendapatkan penghargaan dan apresiasi dari berbagai instansi tingkat provinsi dan nasional.Dan yang terbaru terpilih sebagai salah satu penerima apresiasi The 4th Indonesian Smart Nation Award (ISNA) 2020 melalui inovasi Pasar Online Lamongan (POL) kategori smart economy.",
    },
    content: {
      rendered:
        "LAMONGAN – Pemerintah Kabupaten Lamongan dibawah kepemimpinan Bupati Fadeli banyak mendapatkan penghargaan dan apresiasi dari berbagai instansi tingkat provinsi dan nasional.Dan yang terbaru terpilih sebagai salah satu penerima apresiasi The 4th Indonesian Smart Nation Award (ISNA) 2020 melalui inovasi Pasar Online Lamongan (POL) kategori smart economy. ",
    },
  },
];

export { posts };
