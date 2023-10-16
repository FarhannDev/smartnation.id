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
      'https://s3-alpha-sig.figma.com/img/9022/96b6/23e15b37bd84a6cb1710400d98ccbdeb?Expires=1697414400&Signature=gsZZzKDSRGTwOTtz9CSVHmzcV7G32Zs91em21QSCcDTwsCvcZgLPoHBywN16PxtwT5EcMkxrx-LsQgv-6ZweFovOWSvrie2qGpUiwHhCHFFMCHLJDig4-nx~7GTTuWPxF940DTvo76qQ8s4RNQmt2uGYxCmqSxGAiVzGxqDjRCGbuUvR1L3M7MXq4sJzsKqy6NVhHH2li0BXdBEZ5Mel17bKkw28Lt-W5nJtx4hk9XtxV7j5n-MVCNNWxesLF8m5k8LLfJCaEbl233ByDyb2g81XGmxVHpPLKLCRZk9JHvLZXWvIv6SRUM6ZNTQWdrMkfb536n3tbUV~D2Bgg4igzw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      'https://s3-alpha-sig.figma.com/img/2c6f/28ea/ea28a57772a1cf28c946eda2598834ee?Expires=1697414400&Signature=QJefvJ1azgt9MjCb90DcDb4jDl-wyAtzNWb01Le2DT2jU2tsL9IPgMupRS3ifuERwP6LlwZVXbc0aZlKeuAqOE08d0IRdJI42TATuTPxJKNkXzJLnV82h7OaP0IusZ-SZRBm8qQh1T~vCHG5iMW5ZktQ1xiTmEsLpf12M7ViE6q7Bl9zoGxG64PQkvGUhsE3XSA8lriGuSCkeF1lP4mhejotzf786gSd4384sXHkvUA5vbZdGSR~WJ9kARgw6Xf1MPWLdL224rGtz1VATZ90v9nWqC9xzzOpbYwdHEvrQZz~R36ZkuGwTaQ3ZZyI3~hCcfO3Y~iJ5J3GsQIDolTOYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      'https://s3-alpha-sig.figma.com/img/ce8e/1ce8/38528040470518e2c54b8f2fa395f296?Expires=1697414400&Signature=lljTxRTbgL4usVQqRl4KTUoVkf16J6Lf-QzdAPzg~eP0SiCoCATsn4Z2KufyDJSqw~xrtvJXAOHylixdzXd4RUHStROJ-QmK0yOo4Jd87mMWTvSfCq2MHiqk-e7-MAJojB-BruHx1byIoYoSHhpay7wKP8psLAANRj-Z3o1StEAImrphqFQ76AL5uN4d9mMhen3QCpkShq33kRbPpsGPrX~zax2EVAdzEcvfAV~euyw7g5R2M3bTkVEtJtwNXfuadnuDsBquE98wL67fJeKadhXVzdXGPD6SGN0cpJiCPZtEgHZK8JD0QqPn~RQoPWBMlWio9522aeGr1~RZoKfTtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      'https://s3-alpha-sig.figma.com/img/3600/54b8/99b8850a1c900f8e5ebaab061e211574?Expires=1697414400&Signature=ViJt9h7Kiw01cOIGZjkRBXxABKcpmdf9DjSQnxmCceTwgGEUWWyLISKWjvWIbsvHfHtsheJoLGWwoRCYgqgDrm5iTXX58QnFmkAkwR0Cwc2l0DPnXpHRK52RmBTaqLzh7VEJnT3cYSaahoVEOjVOJbBjY7QFG96dfkWROVXczPDAEffDAJxNBoSVf4cwUIA8w3jLAg5w740ztQsFuBsscVIACP6bigiINrMsL5SMasxNfkvpX1erOtbuyWGpKy0HsAiSBC7Do9ngq3mPuyDSvQECiB9VKQZLkBOSf0~zihVN~GcvpApCh45fgSUMM07rqzs8MZwXRh6hyRY4PmKHHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      'https://s3-alpha-sig.figma.com/img/3ead/de21/715059ed3426f0878bef1c69f2334922?Expires=1697414400&Signature=NjlF26NkEQlh-hpUCCKSN3KEYFwcICWs-6Jno1ndTM5063-8RIq3itVWS9YGM3mvuY5DD3jEbMT1C1izOOGPVfY-CMh4gsv94XR6aT6YvuogrXhjB6FCvK93kvaHTYLlcN29~pmGglJG-cN1xmVElwLNvfc8NdQd-60DL9AX7SsXpE8yocN2J4AgWgk7e-6cgtJnJnFhbjwqeHPkhEd7kzl9Idvkn75MpOMXvpntNSX-ZMno1cMERjE7BoQHQ05LDzLlkV9y9oAWs6LIDShN7wmo5XkSruNuV0mYTMqeKIpnl5NYOZUJumh77dgAa6mag08vcv0fXfrQK5PlOZh8Hg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      'https://s3-alpha-sig.figma.com/img/50e8/b7e3/d01ef7ce9776c225532c958b75f35f9f?Expires=1697414400&Signature=aNH1K3t8q5BrWYyGps3bgIml8bkvIIXaYpKn7zT95-c2d~pOp8MHD2~C1GfShzvx-KlTbJH0yE7NdabQNC-LL-wMPdpsDK2wxqzrCpP9n3JBiLvLTi2XVMplB1ExHLvgRFgbUErZfJB6yisUkST6NUOToDuU62W2VWXtWSOSJUVhTQZ1z0k9V1qPwuZZRaZjXY2zwNuixh~6BbcDxvBX1MAQbhmcODHkwlktgACLcP4TrRMTo735n0SLc2dawkbec8MI5BeiLZKq6-1dr9DpLQDq2zQ1o0~uupOfCmclzd2QGatcXI6c2u8kFofO69p2K1CazfWUWjmNw7ZG-r3-3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      'https://s3-alpha-sig.figma.com/img/8be4/029a/ffe32bf641c9dae627cfbe7dc1724c3a?Expires=1697414400&Signature=pwsTJHHCwnzDam-g7EUlz4fYret0CBAcmhVdnzGzWXatfHP2EYJUIdvYNstY09klMtOrmRzkJU4D4iylH8swrzsC07GOIomaLgbNk7xLkq~DksEoUP10QZbXR42T9cXMxFQu2tDLPSPnwHEDZybulruiGpxjT-NyKcucaPCQ7-0vkWXfVFN22Hi3qf7WS~FbmQSCtnUp-fRD7sIqV0EedPnJlTlPLcjcDrLWIpwSXdGpp6z3QjKLp7yo6w6mFuwqQ21AQ3gigVKeaSYRl5JrF4L1kQEgKSqj36JyPFxlfBqYbZjCeFE7REtnMMhvYxORnVDRvV-8KTrukMBuJtverw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      'https://s3-alpha-sig.figma.com/img/8d76/d5b8/8949094df2533c9e64c0bc55ae352e0d?Expires=1697414400&Signature=laeplN72nxa3VgPUTi2vw2ofg8objHykKfFkS8wAdGoL6my2mxR-lTMF8VAJFBd~TD16JlOyMzT9yER4VGNj-OgDc6ky~JqrCGN9O6exzrLr5TwCPUlRtZwl72iPcDHdRfMCzylTQnSFWEPkHwy7RRJdEN7Jg~ghPNz4MnN8JUEBmzbG7l4LQW9ovw85rRNiseSHy5yHcosskoSzKxA9-0VyzQSHbZN2cmXQxvZTvso9ZRX2blJoEMY47rA0IWtnvvjBQZrLU-O-QrfhKH08VVOIbcjsBqwyKMJnR~wTTEZULdn0a20peAGnTYzOnmiYWFqQceBLXZ-Jsz~AF0-hVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      'https://s3-alpha-sig.figma.com/img/fed1/1fb5/3ae4e8a31339533688a483c54e564dfc?Expires=1697414400&Signature=Htcg5IvB7j0CoJM1GZ61D-FvkDvkaUFmtcAA5XvU9PXxsacrZp~pWoVPytGpcQ0AQOv6k8PY3cyyMHloKWdYfG~AlCvbRnTW~Gq-LvdqC44G~P3D3~LrXnxvM6C4RbhZ2PO5zttzR0NZiunzzl0qfvObX9yOGzw3BF3K3UffkhYvVw~wGho5OSMssgPS4m3A0KA~Tt0WPJ3asM~ZcKCt9HJquPsA3qyYeO17GxPslm9LsaDf3WQusKdUtMzcZ2jNAw5pZtTj1sztDaH78qkve1aeq3yM2n4G7mVpiDHTR1TTWtz-Puh-JytSt3FXR-tNiCoJ~IEWUk5rVzv~STf3sQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      'https://s3-alpha-sig.figma.com/img/3947/c926/9ad23ea579c994f82e0367996313af54?Expires=1697414400&Signature=may9Nfng8q-zGZK~ouClaWS9PSXXaVq20yAi22O932wKkzjeKqZGka6oeeW8-Qfd4WRcx44FFKBv6ZmclBpJR-4dVEdvYm3IhrAl8WXZ1HqlIvJ9VKOJy53W7xgjj3PHXrO4XHqhuHXJ1UTtIGbCqfUBeWfHfIEoiht8W1HhTRIHZmCkpnXDeHti5WxTw6pG9ODpx3xIY0TIp3QmZ10FoUHpASZmda36CCdUUlFGI84dmb5CkzDvdEV31jcUfrW~DLNbLoK8accOcNXWPw~5lDVyIgIW-yvYxR9tw0OhsteSwhB5r7LP4hgvoyiFs2013jYOE4SMYoefXp-Cwm~4LQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      'https://s3-alpha-sig.figma.com/img/0587/bbcc/ed2473469afed9b191fbac73e951db16?Expires=1697414400&Signature=oktLDlSEloH233cBVg8MDb6qyY6I2H0QMYaZJ1g1xLtmzKNjs22CvDU6Q13OvC5ipzfkF06Y0NBf~dBRwWsjQGjS73dP0CTZPh8nqWCC0yeA7FeDrLye9bxrU4iI8buga1B2ewJZBZfL87G7JTitcz2DpE84EV3wyL8prkXwyJYYW5WQwsBoScUkOYa3k5KUgVsRZiS7kuIcdlLvtcLD2eclI~xnXI-g4vMD58ziqQdTX7467JdM8wZFPJ2XcVnQorXn3zOP3~Foh4Pny6vKrOWD8SsHBRy-EUa57u57jyC9t7RpPN2Hcp37LmnQpKnJYLkRJn14xQ6wGigWGHiOsg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      'https://s3-alpha-sig.figma.com/img/e0ec/d24d/c57a2b959ad326f85ab3e65f6d2186fb?Expires=1697414400&Signature=OL9E1tDgWZL7I28D~ES7uLXT3QVYiRafyhgCPpEAOxYQa3FOnwN~ZVdfjGSic4CBV7AA37ofoAZGWqJLflg572YGHFgEO9bOEwVjpsPhzBblJATAsqGIcJPNg561ZaRNerlkmWmkqfgyQp~7X9bj5JL701~oGLBy70-kDLDvFphzaQS8DwUlb-yEZ389acrGSJ~cl~dhmQhE-fUiKYZKQ9BzkMsxGkrytW6TTObWex2q8ixzUBzsFqGBz24JNbKiVXQC1wiiOH3-LQQuSB5rFjW9r8D0H0U1h3SjHRVTwwDofaKAjA9fLT8ndXovptf2U9L93N6lKulKfCzuERVPzQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      'https://s3-alpha-sig.figma.com/img/fd23/6775/8d9da79dc1b8d3d310078b56c67fa4ca?Expires=1697414400&Signature=EJ71JE89EADnrswFXeS9eCzlxzrq8UBKgx87cR5SnyctjDk17nvthF8r5v~t7wH8VyEGCe4Ima7TKAd7AryhKcMQxFHuKQUBq5W9zJTi0c5s4~iZwKwOUfiGqICFtuGhihtXsbjVpFr3umnDde07L8QnjG5DC5SVPTdubXRYFf0J~pc9yUnRDaa9-cGnyhLfMv-i2sanlpqkgxgXMHJxp0-JYbLmHSuOCtKMkOf5g~CuNyu0FcbMuOmeWOMwMrto60ZjA0nUXCaFdTQ496GoYOdwvvpEKj0eudIaN4EOz9v5r-EOoLgbLZXPY1V0jkrCn6c~d3GzyLmhQ6JA-IEZJw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      'https://s3-alpha-sig.figma.com/img/6411/a7af/53556a90d5d081f33c20584dc06b27fb?Expires=1697414400&Signature=LG~9ePLI~pFZ2f6dNjDHPusFThm792MgwpO5DNqW1~5gHGDSumEZf2npLNP6baB7r-Bm9oQdQ6PP18e9ZTfykk-YVkAbBwqdoLZZiudZQFm~B3ARb~J3xIUFULGsCdX82Y~1bCEnJNgnNfAUiVctoafNqytnROI-Y89PoPAUxrK7NR6EXu-hXuxaZ1qupT54efIPjdTcrsOjgdFd-~uLVTOlX~Jp9goA3CM6tvdsg3hWPICJtW2Wh6Zl1~rDn4x36uShHjWbqgqMYV8y6EXbKi-Qp7uuuc1CzlhccfpHdLMKzWi0UTj1do6JjkG-yeVwWbN8v9ZRIL2yu2~Uie9suQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      'https://s3-alpha-sig.figma.com/img/ab68/2cb4/792d80b32a211eea51f6ee6c3b32abcc?Expires=1697414400&Signature=DFjsKu0VaR1h4LYJjXnP0v2Id56vz3EiJJdiDlMQxG1mRnWaMR9LJJ30qN5cbByrCsuqw1j9a8-rhDeQPzpsilaoBaz2z~mTIOZOtixDwQhrssq8XeZ3kWdjQjSTSxwUHkJGKQlT8EraQLQFrpYg11ipqn5qICKP5EMOB6z~qwPD5zt4WyS8x9WbaN-Ik8AaKpHxTwcyXqBrMBkolF2eoTKPUGQFw9I0UPJnMF4GxqsaiFUv~GYrxj-oMJRbUgG8-kJE7JejfaJs60z5eCyFX1jEthzeTc2kfZUGI56suxjjV0-f2LAax1DIkUebsTN8~iCy0TdIRJWN81IVkIeU6w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      'https://s3-alpha-sig.figma.com/img/8d76/d5b8/8949094df2533c9e64c0bc55ae352e0d?Expires=1697414400&Signature=laeplN72nxa3VgPUTi2vw2ofg8objHykKfFkS8wAdGoL6my2mxR-lTMF8VAJFBd~TD16JlOyMzT9yER4VGNj-OgDc6ky~JqrCGN9O6exzrLr5TwCPUlRtZwl72iPcDHdRfMCzylTQnSFWEPkHwy7RRJdEN7Jg~ghPNz4MnN8JUEBmzbG7l4LQW9ovw85rRNiseSHy5yHcosskoSzKxA9-0VyzQSHbZN2cmXQxvZTvso9ZRX2blJoEMY47rA0IWtnvvjBQZrLU-O-QrfhKH08VVOIbcjsBqwyKMJnR~wTTEZULdn0a20peAGnTYzOnmiYWFqQceBLXZ-Jsz~AF0-hVg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      'https://s3-alpha-sig.figma.com/img/134c/7aa8/7d090dfc5df1f3daa1a28dd5614c0ac4?Expires=1697414400&Signature=KvP~MH1kWtPGtYsWvJU1b-Tzeyp4JCvIs4tlRfyNo-wAhWar2tP04EfwTfycZCkjpspCGgx61-gFc0lVJXKDPRGh2yGlATFgI7erK~Z95-e7VKo7Td9mUQnIeEq9clPVt8CMsPemVYJYdSzzZSOJR1t~TB0y3I3DB9C2Yq84FdURcsUNaDYTc1cGVgotA1Uepld867KranxDpTSb3~zXIIEdNnfTfSs7jWyb97kBJglRAfm6KuBa21BRp4lbEYOGE4Looumva-ElWBjPHl2VUpCEBl0GK8CDHqbTzFuv1tngPHMLBcwcPYLoP2nwdM99kYUXuh1ipdbfvfvTMxU-Cw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      'https://s3-alpha-sig.figma.com/img/4b81/2137/f7085aaee6571f28232926daf83067cb?Expires=1697414400&Signature=nVyEQjsRdFRFn8rfobpbxR2laRVewAMCXYk91he7~BXatEqV0bB6Qn98eMwAlDbhaV6G-eXfAin3v0yH71o8dAcRzm53B~strh9xtIdqe-H~cJkLZHzrgiwi~edyXTa~L3N~-ZhkT5LpqFpEsCVzvmsz~ogxaOXSCtdNL5ZY6fIPrvj7i5YmPJTR59a2bRQ4IzTsm2BS7uF3t07RgimSWXsfWE2BgoONesggUupnDobqTFbuvEIYq8CxY0I6GqiG9Se9vI4QPWuk3uO0mrUDJd0BFw-SNMkfyNM03wyeBxliDBlHyzn4pGoW--goB0pl44ybJU5LD4e6Qh2zIaDsYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      'https://s3-alpha-sig.figma.com/img/9b64/d8fa/3e6c9dc5f33518141119855ad0f78bee?Expires=1697414400&Signature=bNzUZ3ijMYgo~kIiSAAdFQekSVNmiRKuqICHEm63Ol4MsztQh67d0AYNsQaNNl4BeN8tQaZcHs3iyEGMv5Sv2ofjALGHAeQstSzZyiExjLbEndo3YAKM9L6PE-haE8xwWcrnIfICX1L1rlAb~UCUJRhHj0PrcNnxAY7BBLVyfs1T2Ah2EffpPxevKAx1l70JxjvSy~cQ5HocArVnfZK-pYdPXWB4j1Vz7lSBHlzynTZhZbHU2DKI6KuTM3QLH1LG4MigN-d8FgTzTYpgJllqXGlnY9vwAkfJanX6xiX2pF2DewfLBMKrr6RrwvYZBWc4aSAHrqB9iYyULXrwjR09Ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      'https://s3-alpha-sig.figma.com/img/dad3/d3e5/621b9dfa540b86ae152c86e092df406e?Expires=1697414400&Signature=qtnyzOeE8iyrKA4PoCE202FJGCBlQcvUhQsSBh~-qwB-l8jLqdqfNuRvSxZIdK37syaCbCkCnsCUR63vL-qoD9atbGX5rw9R0~fvvdG4Na9~SjFqne5-rLCkwybR9nJgJjUC1eVXrf162UJI3ISbHu3CBodQL8ZXxDa6Af4ItXnoVzQGGNpEogi8py-rAhrtk3SYaW7JW9NlKoLs3l47GaW2gw8VbjRwuILX-gKO1evpC5jWtrKDlZQ3KTnF6c-A9V2G-ReBYSBzNpiqF4I4ekpU0YECkm7nDd5pVBL9Or8~ydTibyZDu6N7t3p5U8kV21M4w~mpjkLpomfW6vm-Rg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      'https://s3-alpha-sig.figma.com/img/b937/d0fb/0ab968f5216bf6f5e0d7d531e5c5d3b1?Expires=1697414400&Signature=O8M~ol7X3iy6C83B~XWIbCcmdHUB9Bs7dipOClPkhjMIDJ8uuKCBxFrcgnl5Jw84kXS~nbXKLDkXobdwlBr4Zz9GHQIKCCdrDgJ1-bDgcFTfh~kNWcuONEdW2C-0y791YX6F-ldK4Ksm54oax4FVbX4b5LBM6QwrHLDiLqRz8IYZxzcY8KUmqLAdWWBTtC2-VTuB1b6g63PxBZ8Y~xKX3rN-kJOZUrxGpDs8a~uU73o-ru3JfLAjcKGdshx3IX5Y2Z8tC9DnGaATWx06cuebBIChe7UzPwYFVbYCH00o1pKK6O00~0Cvckcpev29tD5~yy~ZF0h1IcCZ9VbX~azMUA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      'https://s3-alpha-sig.figma.com/img/f2ba/ef80/86204f1d200e00df8793050a21058494?Expires=1697414400&Signature=CJ8qYodW6T5Rd8RaAWFODWRi8se4PnoAt5Gxey90IzrcT43GKmjvRs5smPZ9PEjqls3uS6RUyHxkuIdJHLfISk~6KPGw3kr4Ehx8fP26aFHr~ZVLg2xis9HyFW8niqRWg43mTG3SfVSU87QvIBlJKm~jdAHtG4id3J8gZxd5hfwfcSnmNGk2FgjqDdgpzUDTl-AAWnFshHccXM3Ac1IrEQ~0IGvhJ5nO54RsZcXNyZT1wDIkW97yAI9fSmtnntLAucqZtVBy~Xi7Fo-ER-akFWUISto6-BSeSThEOBtWtR8AyS3p1n6eyUsXAVnwouZpmPp8DBXFeeRc2nR1upI9IA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      'https://s3-alpha-sig.figma.com/img/f3b0/261a/fc6d9405f79ab06fb381206b7fd6a9e8?Expires=1697414400&Signature=fPRoQWKosvd587vbJQpDnq-iRNnRuz5nPwWLbSLNGqz0IKmQr~-1r3byf7oydBEiBP1bUuYv7xcWYIV6WsM6cniUdR33ku10xxRYZ81899JOgk~XJ1tvTFGxwyQTx6m17ofziPxgWL3OgZ2~Jtluvkqnk~To1vWouhPl48YcSH1coWTRp0JVIeau7T26YE57Go~MHKN0fmZ428rImaOarpGZvj6kUNOejRNBxOCpUq1Q1jAG2AOB0y6XY139JL1xuunAqSExvQZv7EfJwEyD1j02o1WElRiuMOJTV7J73T-9PrQ273BKef-I289tRHSfvYjPtVVUI-J5a~xdyr~~8w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
    logo: '/images/client/dpr.png',
  },
  {
    id: generateUniqueId(),
    name: 'OXFORD',
    logo: '/images/client/oxford.png',
  },
  {
    id: generateUniqueId(),
    name: 'SHAPE',
    logo: '/images/client/shape.png',
  },
  {
    id: generateUniqueId(),
    name: 'BAPPENAS',
    logo: '/images/client/bappenas.png',
  },
  {
    id: generateUniqueId(),
    name: 'INDOSAT',
    logo: '/images/client/indosat.png',
  },
  {
    id: generateUniqueId(),
    name: 'TELKOM',
    logo: '/images/client/telkom.png',
  },
  {
    id: generateUniqueId(),
    name: 'DATACOMM',
    logo: '/images/client/datacomm.png',
  },
  {
    id: generateUniqueId(),
    name: 'SOFTWARE ONE',
    logo: '/images/client/software_one.png',
  },
  {
    id: generateUniqueId(),
    name: 'ORACLE',
    logo: '/images/client/oracle.png',
  },
  {
    id: generateUniqueId(),
    name: 'QLUE',
    logo: '/images/client/qlue.png',
  },
  {
    id: generateUniqueId(),
    name: 'VOLTRAS',
    logo: '/images/client/voltras.png',
  },
  {
    id: generateUniqueId(),
    name: 'DOT SOLUTION',
    logo: '/images/client/dot_solution.png',
  },
  {
    id: generateUniqueId(),
    name: 'iNEWS',
    logo: '/images/client/i_news.png',
  },
  {
    id: generateUniqueId(),
    name: 'SINDO TRIJAYA',
    logo: '/images/client/sindo_trijaya.png',
  },
  {
    id: generateUniqueId(),
    name: 'KORAN SINDO',
    logo: '/images/client/koran_sindo.png',
  },
  {
    id: generateUniqueId(),
    name: 'TOYOTA',
    logo: '/images/client/toyota.png',
  },
  {
    id: generateUniqueId(),
    name: 'PERTAMINA',
    logo: '/images/client/pertamina.png',
  },
  {
    id: generateUniqueId(),
    name: 'INFOMEDIA',
    logo: '/images/client/infomedia.png',
  },
  {
    id: generateUniqueId(),
    name: 'PEGADAIAN',
    logo: '/images/client/pergadaian.png',
  },
  {
    id: generateUniqueId(),
    name: 'MANDOM',
    logo: '/images/client/mandom.png',
  },
  {
    id: generateUniqueId(),
    name: 'PEKANBARU',
    logo: '/images/client/pekanbaru.png',
  },
  {
    id: generateUniqueId(),
    name: 'BANDUNG',
    logo: './images/client/bandung.png',
  },
  {
    id: generateUniqueId(),
    name: 'SAMARINDA',
    logo: '/images/client/samarinda.png',
  },
  {
    id: generateUniqueId(),
    name: 'APEKSI',
    logo: '/images/client/apeksi.png',
  },
  {
    id: generateUniqueId(),
    name: 'Muara Enim Smart Regency Kabupaten Muara Enim',
    logo: '/images/client/muara_enim.png',
  },
  {
    id: generateUniqueId(),
    name: 'Jeneponto Smart Branding Kabupaten Jeneponto',
    logo: '/images/client/jeneponto.png',
  },
];

export { posts, categories, teams, partner };
