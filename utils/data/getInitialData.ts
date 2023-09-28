interface Posts {
  id: number | string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  categories: Array<number>;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
}

interface Category {
  id: number;
  count: number;
  description: string;
  name: string;
  slug: string;
}

interface Teams {
  id: number | string;
  name: string;
  jobs: string;
  description: string;
  thumbnail: string;
}

interface Partner {
  id: number | string;
  name: string;
  logo: string;
}

const createSlug: (text: string) => string = (text: string) => {
  return text
    .toLowerCase()
    .replace(/ /g, '-') // Mengganti spasi dengan tanda "-"
    .replace(/[^\w-]+/g, '') // Menghapus karakter non-alphanumeric kecuali "-"
    .replace(/--+/g, '-'); // Mengganti dua atau lebih tanda "-" berturut-turut dengan satu tanda "-"
};

const generateUniqueId = () => {
  const timestamp = new Date().getTime(); // Mengambil timestamp saat ini
  const random = Math.floor(Math.random() * 1000); // Menghasilkan angka acak antara 0 dan 999

  return `${timestamp}-${random}`;
};

const categories: Category[] = [
  {
    id: 148,
    count: 335,
    description: '',
    name: 'Artikel',
    slug: 'artikel',
  },
  {
    id: 82,
    count: 222,
    description: '',
    name: 'Berita',
    slug: 'berita',
  },
  {
    id: 83,
    count: 30,
    description: '',
    name: 'Citiasia Inc',
    slug: 'citiasiainc',
  },
  {
    id: 84,
    count: 28,
    description: '',
    name: 'Daerah',
    slug: 'daerah',
  },
  {
    id: 88,
    count: 6,
    description: '',
    name: 'Events',
    slug: 'events',
  },
  {
    id: 145,
    count: 19,
    description: '',
    name: 'Government',
    slug: 'gov',
  },
  {
    id: 117,
    count: 2,
    description: '',
    name: 'Health',
    slug: 'health',
  },
  {
    id: 101,
    count: 21,
    description: '',
    name: 'Insight',
    slug: 'insight',
  },
  {
    id: 85,
    count: 7,
    description: '',
    name: 'Internasional',
    slug: 'internasional',
  },
  {
    id: 89,
    count: 0,
    description: '',
    name: 'ISCIF',
    slug: 'iscif-events',
  },
];

const posts: Posts[] = [
  {
    id: generateUniqueId(),
    title: 'Smart City: Standar Nasional Indonesia (SNI) untuk Kota Cerdas',
    slug: createSlug(
      'Smart City: Standar Nasional Indonesia (SNI) untuk Kota Cerdas'
    ),
    excerpt: `Pembangunan dan pengembangan smart city sedang menjadi hal yang banyak dilakukan oleh daerah-daerah di Indonesia. Apalagi, pemerintah Indonesia memiliki program...`,
    content: `Pembangunan dan pengembangan smart city sedang menjadi hal yang banyak dilakukan oleh daerah-daerah di Indonesia. Apalagi, pemerintah Indonesia memiliki program Gerakan Menuju 100 smart city yang merupakan program bersama Kementerian Komunikasi dan Informatika, Kementerian Dalam Negeri, Kementerian PUPR, Bappenas dan Kantor Staf Kepresidenan.`,
    categories: categories.map((category) => category.id),
    thumbnail:
      '/images/artikel/smart-city-standar-nasional-indonesia-sni-untuk-kota-cerdas.png',
    createdAt: new Date().toISOString(),
    updatedAt: '',
  },
  {
    id: generateUniqueId(),
    title:
      'Terapkan Smart Fisheries Village (SFV) pada Industri Kelautan di Indonesia',
    slug: createSlug(
      'Terapkan Smart Fisheries Village (SFV) pada Industri Kelautan di Indonesia'
    ),
    excerpt: `Pembangunan dan pengembangan smart city sedang menjadi hal yang banyak dilakukan oleh daerah-daerah di Indonesia. Apalagi, pemerintah Indonesia memiliki program...`,
    content: `Pembangunan dan pengembangan smart city sedang menjadi hal yang banyak dilakukan oleh daerah-daerah di Indonesia. Apalagi, pemerintah Indonesia memiliki program Gerakan Menuju 100 smart city yang merupakan program bersama Kementerian Komunikasi dan Informatika, Kementerian Dalam Negeri, Kementerian PUPR, Bappenas dan Kantor Staf Kepresidenan.`,
    categories: categories.map((category) => category.id),
    thumbnail:
      '/images/artikel/smart-city-standar-nasional-indonesia-sni-untuk-kota-cerdas.png',
    createdAt: new Date().toISOString(),
    updatedAt: '',
  },
  {
    id: generateUniqueId(),
    title: 'Teknologi VAR dalam Pertandingan Sepak Bola Piala Dunia 2022',
    slug: createSlug(
      'Teknologi VAR dalam Pertandingan Sepak Bola Piala Dunia 2022'
    ),
    excerpt: `Pembangunan dan pengembangan smart city sedang menjadi hal yang banyak dilakukan oleh daerah-daerah di Indonesia. Apalagi, pemerintah Indonesia memiliki program...`,
    content: `Pembangunan dan pengembangan smart city sedang menjadi hal yang banyak dilakukan oleh daerah-daerah di Indonesia. Apalagi, pemerintah Indonesia memiliki program Gerakan Menuju 100 smart city yang merupakan program bersama Kementerian Komunikasi dan Informatika, Kementerian Dalam Negeri, Kementerian PUPR, Bappenas dan Kantor Staf Kepresidenan.`,
    categories: categories.map((category) => category.id),
    thumbnail:
      '/images/artikel/smart-city-standar-nasional-indonesia-sni-untuk-kota-cerdas.png',
    createdAt: new Date().toISOString(),
    updatedAt: '',
  },
  {
    id: generateUniqueId(),
    title: 'Wamenkes Ingin Mendorong Inovasi Teknologi di Bidang Kesehatan',
    slug: createSlug(
      'Wamenkes Ingin Mendorong Inovasi Teknologi di Bidang Kesehatan'
    ),
    excerpt: `Pembangunan dan pengembangan smart city sedang menjadi hal yang banyak dilakukan oleh daerah-daerah di Indonesia. Apalagi, pemerintah Indonesia memiliki program...`,
    content: `Pembangunan dan pengembangan smart city sedang menjadi hal yang banyak dilakukan oleh daerah-daerah di Indonesia. Apalagi, pemerintah Indonesia memiliki program Gerakan Menuju 100 smart city yang merupakan program bersama Kementerian Komunikasi dan Informatika, Kementerian Dalam Negeri, Kementerian PUPR, Bappenas dan Kantor Staf Kepresidenan.`,
    categories: categories.map((category) => category.id),
    thumbnail:
      '/images/artikel/smart-city-standar-nasional-indonesia-sni-untuk-kota-cerdas.png',
    createdAt: new Date().toISOString(),
    updatedAt: '',
  },
  {
    id: generateUniqueId(),
    title: 'Uang Digital RI Akan Rilis Tahun Depan',
    slug: createSlug('Uang Digital RI Akan Rilis Tahun Depan'),
    excerpt: `Pembangunan dan pengembangan smart city sedang menjadi hal yang banyak dilakukan oleh daerah-daerah di Indonesia. Apalagi, pemerintah Indonesia memiliki program...`,
    content: `Pembangunan dan pengembangan smart city sedang menjadi hal yang banyak dilakukan oleh daerah-daerah di Indonesia. Apalagi, pemerintah Indonesia memiliki program Gerakan Menuju 100 smart city yang merupakan program bersama Kementerian Komunikasi dan Informatika, Kementerian Dalam Negeri, Kementerian PUPR, Bappenas dan Kantor Staf Kepresidenan.`,
    categories: categories.map((category) => category.id),
    thumbnail:
      '/images/artikel/smart-city-standar-nasional-indonesia-sni-untuk-kota-cerdas.png',
    createdAt: new Date().toISOString(),
    updatedAt: '',
  },
  {
    id: generateUniqueId(),
    title: 'Pemprov Jawa Barat Resmi Rilis Empat Aplikasi Besar untuk ASN',
    slug: createSlug(
      'Pemprov Jawa Barat Resmi Rilis Empat Aplikasi Besar untuk ASN'
    ),
    excerpt: `Pemerintah Provinsi Jawa Barat resmi luncurkan Smart Jabar, sebuah ekosistem teknologi untuk Jabar yang terdiri dari E–Office, Dashboard Jabar dan Jabar Skytrek. Launching aplikasi ini diresmikan langsung oleh Sekretaris Daerah Provinsi Jawa Barat...`,
    content: `Pemerintah Provinsi Jawa Barat resmi luncurkan Smart Jabar, sebuah ekosistem teknologi untuk Jabar yang terdiri dari E–Office, Dashboard Jabar dan Jabar Skytrek. Launching aplikasi ini diresmikan langsung oleh Sekretaris Daerah Provinsi Jawa Barat, Setiawan Wangsaatmaja, bertempat di Jabar Command Center, Gedung Sate, Kota Bandung, Rabu (5/4/2023).`,
    categories: categories.map((category) => category.id),
    thumbnail:
      '/images/artikel/smart-city-standar-nasional-indonesia-sni-untuk-kota-cerdas.png',
    createdAt: new Date().toISOString(),
    updatedAt: '',
  },
  {
    id: generateUniqueId(),
    title: 'Implementasi Smart Branding, Tidak Hanya Soal Wisata',
    slug: createSlug('Implementasi Smart Branding, Tidak Hanya Soal Wisata'),
    excerpt: `Smart branding merupakan salah satu pilar dari pendekatan smart city yang memiliki definisi...`,
    content: `Smart branding merupakan salah satu pilar dari pendekatan smart city yang memiliki definisi strategi memasarkan sebuah kota atau wilayah sehingga mampu menarik ekosistem sekitar, baik itu warga, masyarakat umum, ataupun pelaku bisnis.    `,
    categories: categories.map((category) => category.id),
    thumbnail:
      '/images/artikel/smart-city-standar-nasional-indonesia-sni-untuk-kota-cerdas.png',
    createdAt: new Date().toISOString(),
    updatedAt: '',
  },
  {
    id: generateUniqueId(),
    title:
      'Siap-siap, di Pertengahan November Tahun Ini, ISNA 2022 Akan Digelar!',
    slug: createSlug(
      'Siap-siap, di Pertengahan November Tahun Ini, ISNA 2022 Akan Digelar!'
    ),
    excerpt: `Indonesia Smart Nation Award (ISNA) 2022 kembali diadakan secara langsung setelah dua tahun lamanya....`,
    content: `Indonesia Smart Nation Award (ISNA) 2022 kembali diadakan secara langsung setelah dua tahun lamanya. ISNA diadakan oleh Citiasia Center For Smart Nation yang sebelumnya telah berhasil menggelar ISNA 2015, 2016, 2019, 2020, dan akan diselenggarakan tahun ini pada hari Kamis, 17 November 2022 di Garuda Main Hall 1 (First Floor) – ICE BSD, Tangerang.
    `,
    categories: categories.map((category) => category.id),
    thumbnail:
      '/images/artikel/smart-city-standar-nasional-indonesia-sni-untuk-kota-cerdas.png',
    createdAt: new Date().toISOString(),
    updatedAt: '',
  },
  {
    id: generateUniqueId(),
    title:
      'Inovasi Layanan Drive Thru Kabupaten Batang Sebagai Pemenang ISNA 2020',
    slug: createSlug(
      'Inovasi Layanan Drive Thru Kabupaten Batang Sebagai Pemenang ISNA 2020'
    ),
    excerpt: `Pemerintah Kabupaten Batang terpilih sebagai penerima apresiasi The 4th ISNA 2020...`,
    content: `Pemerintah Kabupaten Batang terpilih sebagai penerima apresiasi The 4th ISNA 2020 melalui pengembangan inovasi layanan Drive Thru di Mal Pelayanan Publik (MPP) Batang, (Infopublik.id, 2020). MPP Batang merupakan yang ketiga di Jawa Tengah sebagai percontohan, dikarenakan MPP Batang menjadi MPP pertama di Indonesia yang memiliki layanan Drive Thru perpanjangan SIM A dan SIM B
    `,
    categories: categories.map((category) => category.id),
    thumbnail:
      '/images/artikel/smart-city-standar-nasional-indonesia-sni-untuk-kota-cerdas.png',
    createdAt: new Date().toISOString(),
    updatedAt: '',
  },
  {
    id: generateUniqueId(),
    title:
      'Inovasi Cek Bantuan Sosial Covid-19 Banyuwangi Raih Indonesia Smart Nation Award 2020',
    slug: createSlug(
      'Inovasi Cek Bantuan Sosial Covid-19 Banyuwangi Raih Indonesia Smart Nation Award 2020'
    ),
    excerpt: `Banyuwangi meraih award kategori Smart Society berupa inovasi penggunaan TIK ...`,
    content: `Banyuwangi meraih award kategori Smart Society berupa inovasi penggunaan TIK dalam penanganan dampak sosial virus Corona ( Covid-19 ).
    `,
    categories: categories.map((category) => category.id),
    thumbnail:
      '/images/artikel/smart-city-standar-nasional-indonesia-sni-untuk-kota-cerdas.png',
    createdAt: new Date().toISOString(),
    updatedAt: '',
  },
  {
    id: generateUniqueId(),
    title:
      'Kominfo Ingin Dunia Usaha Ikut Mendorong Kolaborasi dalam Inisiatif Smart City',
    slug: createSlug(
      'Kominfo Ingin Dunia Usaha Ikut Mendorong Kolaborasi dalam Inisiatif Smart City'
    ),
    excerpt: `Kementerian Komunikasi dan Informatika mendorong peran serta dunia usaha untuk ikut terlibat dalam inisiatif pembangunan smart city...`,
    content: `Kementerian Komunikasi dan Informatika mendorong peran serta dunia usaha untuk ikut terlibat dalam inisiatif pembangunan smart city, sehingga inisiatif pengembangan kota cerdas juga dikerjakan oleh pemerintah daerah, investor dan sektor swasta. Ketika ketiga hal tersebut berkolaborasi dengan baik, diharapkan masyarakat akan mendapat pelayanan publik yang lebih baik.
    `,
    categories: categories.map((category) => category.id),
    thumbnail:
      '/images/artikel/smart-city-standar-nasional-indonesia-sni-untuk-kota-cerdas.png',
    createdAt: new Date().toISOString(),
    updatedAt: '',
  },
  {
    id: generateUniqueId(),
    title:
      'Talkshow ISNA 2022: Implementasi Smart City Bagi Kemajuan Indonesia Bersama PEMDA',
    slug: createSlug(
      'Talkshow ISNA 2022: Implementasi Smart City Bagi Kemajuan Indonesia Bersama PEMDA'
    ),
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eaque?...`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt qui beatae ullam nulla ratione odio! Quo dolorem, debitis error repudiandae corporis ea minima, consectetur minus praesentium, omnis eaque nihil quia quod maiores! Sapiente, id. Minima adipisci dolores eius ullam sunt eligendi facere officia enim unde ab, repudiandae doloremque ea voluptatum velit saepe beatae. Unde dicta deleniti soluta consequuntur consequatur quia porro magni recusandae mollitia hic. Voluptate fugiat illum quaerat obcaecati reiciendis cumque, porro aperiam eligendi maxime voluptatem, non distinctio tenetur ducimus. Molestias et, voluptate veniam, sapiente dolor repudiandae cumque eaque sed impedit repellat saepe, voluptas repellendus ut voluptates vel?
    `,
    categories: categories.map((category) => category.id),
    thumbnail:
      '/images/artikel/smart-city-standar-nasional-indonesia-sni-untuk-kota-cerdas.png',
    createdAt: new Date().toISOString(),
    updatedAt: '',
  },
  {
    id: generateUniqueId(),
    title:
      'Smart City Semakin di Depan, Pemprov Jatim Dukung Program Kota Cerdas Kabupaten/Kota di Jawa Timur',
    slug: createSlug(
      'Smart City Semakin di Depan, Pemprov Jatim Dukung Program Kota Cerdas Kabupaten/Kota di Jawa Timur'
    ),
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eaque?...`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt qui beatae ullam nulla ratione odio! Quo dolorem, debitis error repudiandae corporis ea minima, consectetur minus praesentium, omnis eaque nihil quia quod maiores! Sapiente, id. Minima adipisci dolores eius ullam sunt eligendi facere officia enim unde ab, repudiandae doloremque ea voluptatum velit saepe beatae. Unde dicta deleniti soluta consequuntur consequatur quia porro magni recusandae mollitia hic. Voluptate fugiat illum quaerat obcaecati reiciendis cumque, porro aperiam eligendi maxime voluptatem, non distinctio tenetur ducimus. Molestias et, voluptate veniam, sapiente dolor repudiandae cumque eaque sed impedit repellat saepe, voluptas repellendus ut voluptates vel?
    `,
    categories: categories.map((category) => category.id),
    thumbnail:
      '/images/artikel/smart-city-standar-nasional-indonesia-sni-untuk-kota-cerdas.png',
    createdAt: new Date().toISOString(),
    updatedAt: '',
  },
  {
    id: generateUniqueId(),
    title:
      'Jateng Dorong Terobosan dalam Meningkatkan Kemudahan, Ketepatan dan Kepercayaan Masyarakat sebagai Langkah Menuju “Smart Province”',
    slug: createSlug(
      'Jateng Dorong Terobosan dalam Meningkatkan Kemudahan, Ketepatan dan Kepercayaan Masyarakat sebagai Langkah Menuju “Smart Province”'
    ),
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eaque?...`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt qui beatae ullam nulla ratione odio! Quo dolorem, debitis error repudiandae corporis ea minima, consectetur minus praesentium, omnis eaque nihil quia quod maiores! Sapiente, id. Minima adipisci dolores eius ullam sunt eligendi facere officia enim unde ab, repudiandae doloremque ea voluptatum velit saepe beatae. Unde dicta deleniti soluta consequuntur consequatur quia porro magni recusandae mollitia hic. Voluptate fugiat illum quaerat obcaecati reiciendis cumque, porro aperiam eligendi maxime voluptatem, non distinctio tenetur ducimus. Molestias et, voluptate veniam, sapiente dolor repudiandae cumque eaque sed impedit repellat saepe, voluptas repellendus ut voluptates vel?
    `,
    categories: categories.map((category) => category.id),
    thumbnail:
      '/images/artikel/smart-city-standar-nasional-indonesia-sni-untuk-kota-cerdas.png',
    createdAt: new Date().toISOString(),
    updatedAt: '',
  },
  {
    id: generateUniqueId(),
    title: 'Kabupaten Bantul Raih Predikat SPBE Terbaik',
    slug: createSlug('Kabupaten Bantul Raih Predikat SPBE Terbaik'),
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eaque?...`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt qui beatae ullam nulla ratione odio! Quo dolorem, debitis error repudiandae corporis ea minima, consectetur minus praesentium, omnis eaque nihil quia quod maiores! Sapiente, id. Minima adipisci dolores eius ullam sunt eligendi facere officia enim unde ab, repudiandae doloremque ea voluptatum velit saepe beatae. Unde dicta deleniti soluta consequuntur consequatur quia porro magni recusandae mollitia hic. Voluptate fugiat illum quaerat obcaecati reiciendis cumque, porro aperiam eligendi maxime voluptatem, non distinctio tenetur ducimus. Molestias et, voluptate veniam, sapiente dolor repudiandae cumque eaque sed impedit repellat saepe, voluptas repellendus ut voluptates vel?
    `,
    categories: categories.map((category) => category.id),
    thumbnail:
      '/images/artikel/smart-city-standar-nasional-indonesia-sni-untuk-kota-cerdas.png',
    createdAt: new Date().toISOString(),
    updatedAt: '',
  },
  {
    id: generateUniqueId(),
    title:
      'Siap-siap, di Pertengahan November Tahun Ini, ISNA 2022 Akan Digelar!',
    slug: createSlug(
      'Siap-siap, di Pertengahan November Tahun Ini, ISNA 2022 Akan Digelar!'
    ),
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eaque?...`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt qui beatae ullam nulla ratione odio! Quo dolorem, debitis error repudiandae corporis ea minima, consectetur minus praesentium, omnis eaque nihil quia quod maiores! Sapiente, id. Minima adipisci dolores eius ullam sunt eligendi facere officia enim unde ab, repudiandae doloremque ea voluptatum velit saepe beatae. Unde dicta deleniti soluta consequuntur consequatur quia porro magni recusandae mollitia hic. Voluptate fugiat illum quaerat obcaecati reiciendis cumque, porro aperiam eligendi maxime voluptatem, non distinctio tenetur ducimus. Molestias et, voluptate veniam, sapiente dolor repudiandae cumque eaque sed impedit repellat saepe, voluptas repellendus ut voluptates vel?
    `,
    categories: categories.map((category) => category.id),
    thumbnail:
      '/images/artikel/smart-city-standar-nasional-indonesia-sni-untuk-kota-cerdas.png',
    createdAt: new Date().toISOString(),
    updatedAt: '',
  },
  {
    id: generateUniqueId(),
    title:
      'Konsep Smart Mobility Sebagai Upaya Pengembangan Transportasi di DKI Jakarta',
    slug: createSlug(
      'Konsep Smart Mobility Sebagai Upaya Pengembangan Transportasi di DKI Jakarta'
    ),
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eaque?...`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt qui beatae ullam nulla ratione odio! Quo dolorem, debitis error repudiandae corporis ea minima, consectetur minus praesentium, omnis eaque nihil quia quod maiores! Sapiente, id. Minima adipisci dolores eius ullam sunt eligendi facere officia enim unde ab, repudiandae doloremque ea voluptatum velit saepe beatae. Unde dicta deleniti soluta consequuntur consequatur quia porro magni recusandae mollitia hic. Voluptate fugiat illum quaerat obcaecati reiciendis cumque, porro aperiam eligendi maxime voluptatem, non distinctio tenetur ducimus. Molestias et, voluptate veniam, sapiente dolor repudiandae cumque eaque sed impedit repellat saepe, voluptas repellendus ut voluptates vel?
    `,
    categories: categories.map((category) => category.id),
    thumbnail:
      '/images/artikel/smart-city-standar-nasional-indonesia-sni-untuk-kota-cerdas.png',
    createdAt: new Date().toISOString(),
    updatedAt: '',
  },
  {
    id: generateUniqueId(),
    title:
      'Platform Digital Jagat Nusantara Membangun Kota Menjadi Lebih Modern',
    slug: createSlug(
      'Platform Digital Jagat Nusantara Membangun Kota Menjadi Lebih Modern'
    ),
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eaque?...`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt qui beatae ullam nulla ratione odio! Quo dolorem, debitis error repudiandae corporis ea minima, consectetur minus praesentium, omnis eaque nihil quia quod maiores! Sapiente, id. Minima adipisci dolores eius ullam sunt eligendi facere officia enim unde ab, repudiandae doloremque ea voluptatum velit saepe beatae. Unde dicta deleniti soluta consequuntur consequatur quia porro magni recusandae mollitia hic. Voluptate fugiat illum quaerat obcaecati reiciendis cumque, porro aperiam eligendi maxime voluptatem, non distinctio tenetur ducimus. Molestias et, voluptate veniam, sapiente dolor repudiandae cumque eaque sed impedit repellat saepe, voluptas repellendus ut voluptates vel?
    `,
    categories: categories.map((category) => category.id),
    thumbnail:
      '/images/artikel/smart-city-standar-nasional-indonesia-sni-untuk-kota-cerdas.png',
    createdAt: new Date().toISOString(),
    updatedAt: '',
  },
  {
    id: generateUniqueId(),
    title: 'Konsep Forest Smart City Menjadi Energi Terbarukan di IKN',
    slug: createSlug(
      'Konsep Forest Smart City Menjadi Energi Terbarukan di IKN'
    ),
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eaque?...`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt qui beatae ullam ''a ratione odio! Quo dolorem, debitis error repudiandae corporis ea minima, consectetur minus praesentium, omnis eaque nihil quia quod maiores! Sapiente, id. Minima adipisci dolores eius ullam sunt eligendi facere officia enim unde ab, repudiandae doloremque ea voluptatum velit saepe beatae. Unde dicta deleniti soluta consequuntur consequatur quia porro magni recusandae mollitia hic. Voluptate fugiat illum quaerat obcaecati reiciendis cumque, porro aperiam eligendi maxime voluptatem, non distinctio tenetur ducimus. Molestias et, voluptate veniam, sapiente dolor repudiandae cumque eaque sed impedit repellat saepe, voluptas repellendus ut voluptates vel?
    `,
    categories: categories.map((category) => category.id),
    thumbnail:
      '/images/artikel/smart-city-standar-nasional-indonesia-sni-untuk-kota-cerdas.png',
    createdAt: new Date().toISOString(),
    updatedAt: '',
  },
  {
    id: generateUniqueId(),
    title:
      'Presiden Jokowi Usung Konsep Smart City dan Smart Living di Ibu Kota Negara Baru!',
    slug: createSlug(
      'Presiden Jokowi Usung Konsep Smart City dan Smart Living di Ibu Kota Negara Baru!'
    ),
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eaque?...`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt qui beatae ullam nulla ratione odio! Quo dolorem, debitis error repudiandae corporis ea minima, consectetur minus praesentium, omnis eaque nihil quia quod maiores! Sapiente, id. Minima adipisci dolores eius ullam sunt eligendi facere officia enim unde ab, repudiandae doloremque ea voluptatum velit saepe beatae. Unde dicta deleniti soluta consequuntur consequatur quia porro magni recusandae mollitia hic. Voluptate fugiat illum quaerat obcaecati reiciendis cumque, porro aperiam eligendi maxime voluptatem, non distinctio tenetur ducimus. Molestias et, voluptate veniam, sapiente dolor repudiandae cumque eaque sed impedit repellat saepe, voluptas repellendus ut voluptates vel?
    `,
    categories: categories.map((category) => category.id),
    thumbnail:
      '/images/artikel/smart-city-standar-nasional-indonesia-sni-untuk-kota-cerdas.png',
    createdAt: new Date().toISOString(),
    updatedAt: '',
  },
  {
    id: generateUniqueId(),
    title:
      'Beberapa Teknologi Penanganan Banjir di Sejumlah Negara, Apakah Indonesia Punya?',
    slug: createSlug(
      'Beberapa Teknologi Penanganan Banjir di Sejumlah Negara, Apakah Indonesia Punya?'
    ),
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eaque?...`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt qui beatae ullam nulla ratione odio! Quo dolorem, debitis error repudiandae corporis ea minima, consectetur minus praesentium, omnis eaque nihil quia quod maiores! Sapiente, id. Minima adipisci dolores eius ullam sunt eligendi facere officia enim unde ab, repudiandae doloremque ea voluptatum velit saepe beatae. Unde dicta deleniti soluta consequuntur consequatur quia porro magni recusandae mollitia hic. Voluptate fugiat illum quaerat obcaecati reiciendis cumque, porro aperiam eligendi maxime voluptatem, non distinctio tenetur ducimus. Molestias et, voluptate veniam, sapiente dolor repudiandae cumque eaque sed impedit repellat saepe, voluptas repellendus ut voluptates vel?
    `,
    categories: categories.map((category) => category.id),
    thumbnail:
      '/images/artikel/smart-city-standar-nasional-indonesia-sni-untuk-kota-cerdas.png',
    createdAt: new Date().toISOString(),
    updatedAt: '',
  },
  {
    id: generateUniqueId(),
    title: 'Inovasi Metaverse untuk Smart Branding',
    slug: createSlug('Inovasi Metaverse untuk Smart Branding'),
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eaque?...`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt qui beatae ullam nulla ratione odio! Quo dolorem, debitis error repudiandae corporis ea minima, consectetur minus praesentium, omnis eaque nihil quia quod maiores! Sapiente, id. Minima adipisci dolores eius ullam sunt eligendi facere officia enim unde ab, repudiandae doloremque ea voluptatum velit saepe beatae. Unde dicta deleniti soluta consequuntur consequatur quia porro magni recusandae mollitia hic. Voluptate fugiat illum quaerat obcaecati reiciendis cumque, porro aperiam eligendi maxime voluptatem, non distinctio tenetur ducimus. Molestias et, voluptate veniam, sapiente dolor repudiandae cumque eaque sed impedit repellat saepe, voluptas repellendus ut voluptates vel?
    `,
    categories: categories.map((category) => category.id),
    thumbnail:
      '/images/artikel/smart-city-standar-nasional-indonesia-sni-untuk-kota-cerdas.png',
    createdAt: new Date().toISOString(),
    updatedAt: '',
  },
  {
    id: generateUniqueId(),
    title: 'Asyik, Teknologi 6G Sudah Disiapkan. Apa Saja Manfaatnya?',
    slug: createSlug(
      'Asyik, Teknologi 6G Sudah Disiapkan. Apa Saja Manfaatnya?'
    ),
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eaque?...`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt qui beatae ullam nulla ratione odio! Quo dolorem, debitis error repudiandae corporis ea minima, consectetur minus praesentium, omnis eaque nihil quia quod maiores! Sapiente, id. Minima adipisci dolores eius ullam sunt eligendi facere officia enim unde ab, repudiandae doloremque ea voluptatum velit saepe beatae. Unde dicta deleniti soluta consequuntur consequatur quia porro magni recusandae mollitia hic. Voluptate fugiat illum quaerat obcaecati reiciendis cumque, porro aperiam eligendi maxime voluptatem, non distinctio tenetur ducimus. Molestias et, voluptate veniam, sapiente dolor repudiandae cumque eaque sed impedit repellat saepe, voluptas repellendus ut voluptates vel?
    `,
    categories: categories.map((category) => category.id),
    thumbnail:
      '/images/artikel/smart-city-standar-nasional-indonesia-sni-untuk-kota-cerdas.png',
    createdAt: new Date().toISOString(),
    updatedAt: '',
  },
];

const teams: Teams[] = [
  {
    id: generateUniqueId(),
    name: 'Dr. Ir. Cahyana Ahmadjayadi',
    jobs: 'Co-Founder & Chairman',
    description:
      'Dr. Cahyana pernah menjadi pejabat eselon satu di 3 kementrian( Kementrian Otda, Kemendagri, Kominfo), pernah menjadi direktur dan komisaris di beberapa BUMN dan perusahaan swasta (PT. Pos, Bank Mandiri, Lintas Artha), dan seorang figur terkemuka di bidang TIK. Dr. Cahyana merupakan lulusan Insitut Teknologi Bandung yang mengambil Doktor di bidang Cyber Security.',
    thumbnail: '/images/teams/dr-ir-cahyana-ahmadjayadi.png',
  },
  {
    id: generateUniqueId(),
    name: 'Farid Subkhan',
    jobs: 'Co-Founder & Chairman',
    description:
      'Farid Subkhan telah berpengalaman memimpin tim perencanaan dan implementasi proyek konsultansi berskala nasional dan internasional selama lebih dari 15 tahun. Sebelum bergabung dengan Citiasia, Farid menjadi executive di konsultan manajemen terbesar di Indonesia dan berpengalaman menjalankan proyek branding untuk berbagai perusahaan dan instansi pemerintah. Farid memiliki dua gelar master, dari University of Turin (Italia) dan dari Fakultas Ekonomi Universitas Indonesia.',
    thumbnail: '/images/teams/farid-subkhan.png',
  },
  {
    id: generateUniqueId(),
    name: 'Rosidi Wiradinata',
    jobs: 'Co-Founder',
    description:
      'Mr. Rosidi memiliki pengalaman yang luas selama lebih dari 30 tahun di bidang Telekomunikasi dan industri ICT. Mr. Rosidi memperoleh M.Sc Teleinformatics dari École Nationale des telekomunikasi, Perancis dan M.Sc Informatika dari Université de Technologie de Compiègne, Prancis.',
    thumbnail: '/images/teams/rosidi-wiradinata.png',
  },
  {
    id: generateUniqueId(),
    name: 'Fitrah Rachmat Kautsar',
    jobs: 'Chief Operationg Officer',
    description:
      'Fitrah Rachmat Kautsar mengambil Master Ekonomi di Universitas Indonesia dan sejak 2010, sebelum bergabung dengan Citiasia, menjadi staf ahli Bappenas yang memfasilitasi penyusunan RPJMD, Renstra, master plan dan blueprint CSR, e-gov, dan IT, ranperda terkait perencanaan, di lebih dari 15 provinsi dan kabupaten/kota. Fitrah juga memimpin proyek penulisan Buku “Revolusi Digital Menuju Indonesia Smart Nation” dan Studi Tahunan tentang Indeks Kesiapan Daerah Pintar.',
    thumbnail: '/images/teams/fitrah-rachmat-kautsar.png',
  },
  {
    id: generateUniqueId(),
    name: 'Hari Kusdaryanto',
    jobs: 'Chief Strategy Officer',
    description:
      'Hari Kusdaryanto memiliki 15 tahun pengalaman dalam mengelola program-program dari berbagai lembaga pembangunan internasional seperti USAID, AUSAID, CIDA Kanada, World Bank, British Embassy, terkait dengan riset, bantuan teknis, dan pengembangan kapasitas untuk kementrian, pemerintah daerah, universitas, atau LSM/CSOs. Hari adalah pemegang Master of Development dari University of Turin, Italia, serta pernah mengenyam pendidikan di National University of Singapore.',
    thumbnail: '/images/teams/hari-kusdaryanto.png',
  },
];

const partner: Partner[] = [
  {
    id: generateUniqueId(),
    name: 'DPR',
    logo: '',
  },
  {
    id: generateUniqueId(),
    name: 'OXFORD',
    logo: '',
  },
  {
    id: generateUniqueId(),
    name: 'SHAPE',
    logo: '',
  },
  {
    id: generateUniqueId(),
    name: 'BAPPENAS',
    logo: '',
  },
  {
    id: generateUniqueId(),
    name: 'INDOSAT',
    logo: '',
  },
  {
    id: generateUniqueId(),
    name: 'TELKOM',
    logo: '',
  },
  {
    id: generateUniqueId(),
    name: 'DATACOMM',
    logo: '',
  },
  {
    id: generateUniqueId(),
    name: 'SOFTWARE ONE',
    logo: '',
  },
  {
    id: generateUniqueId(),
    name: 'ORACLE',
    logo: '',
  },
  {
    id: generateUniqueId(),
    name: 'QLUE',
    logo: '',
  },
  {
    id: generateUniqueId(),
    name: 'VOLTRAS',
    logo: '',
  },
  {
    id: generateUniqueId(),
    name: 'DOT SOLUTION',
    logo: '',
  },
  {
    id: generateUniqueId(),
    name: 'iNEWS',
    logo: '',
  },
  {
    id: generateUniqueId(),
    name: 'SINDO TRIJAYA',
    logo: '',
  },
  {
    id: generateUniqueId(),
    name: 'KORAN SINDO    ',
    logo: '',
  },
  {
    id: generateUniqueId(),
    name: 'TOYOTA',
    logo: '',
  },
  {
    id: generateUniqueId(),
    name: 'PERTAMINA',
    logo: '',
  },
  {
    id: generateUniqueId(),
    name: 'INFOMEDIA',
    logo: '',
  },
  {
    id: generateUniqueId(),
    name: 'PEGADAIAN',
    logo: '',
  },
  {
    id: generateUniqueId(),
    name: 'MANDOM',
    logo: '',
  },
  {
    id: generateUniqueId(),
    name: 'PEKANBARU',
    logo: '',
  },
  {
    id: generateUniqueId(),
    name: 'BANDUNG',
    logo: '',
  },
  {
    id: generateUniqueId(),
    name: 'SAMARINDA',
    logo: '',
  },
  {
    id: generateUniqueId(),
    name: 'APEKSI',
    logo: '',
  },
  {
    id: generateUniqueId(),
    name: 'Muara Enim Smart Regency Kabupaten Muara Enim',
    logo: '',
  },
  {
    id: generateUniqueId(),
    name: 'Jeneponto Smart Branding Kabupaten Jeneponto',
    logo: '',
  },
];

export { posts, categories, teams, partner };
