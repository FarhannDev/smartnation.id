interface Posts {
  id: number | string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  categories: Array<string>;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
}

type CategoryPost =
  | 'Artikel'
  | 'Berita'
  | 'Citiasia inc'
  | 'Daerah'
  | 'Goverment'
  | 'Healt'
  | 'ISNA'
  | 'Insight'
  | 'Internasional'
  | 'Nasional';

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

const categories: CategoryPost[] = [
  'Artikel',
  'Berita',
  'Citiasia inc',
  'Daerah',
  'Goverment',
  'Healt',
  'ISNA',
  'Insight',
  'Internasional',
  'Nasional',
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
    categories: ['Artikel', 'Nasional', 'Smart City'],
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/9022/96b6/23e15b37bd84a6cb1710400d98ccbdeb?Expires=1695600000&Signature=B0xTjnejSeuzUX4Y6A14nYcx6kzc3p31ahME1W8wimxH9Q6yIenjz3M8vSYc9OrM9aizBMytSMXrKYFr1fjgaMNPbJRRRR3ByKku0cvnnEgP1asLExAUeIcjUucVDmWMhaW8uveAEY7VRQW2CufvpwbEDV404gABxhS7h7vl9nQqeXxTHyYGQg6j6QOwxKePRVFMJ4jiIOUtH42I~IBBzhOrOLpT6Dahmh4w7g~2wb82oWSzEmvn5NYQ3lHUb39TyyCXcFEx6z91iHgXbs7qCclb8LWVw9MBkbH8m1TKzF1mWHlMQLE-yKnZzNVF6bDHVpXSiu~zzQtKddh0QrxOPg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    createdAt: new Date().toISOString(),
    updatedAt: null,
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
    categories: ['Artikel', 'Nasional', 'Smart City'],
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/2c6f/28ea/ea28a57772a1cf28c946eda2598834ee?Expires=1695600000&Signature=dnttg-oz3LcO9ud5UTyoG72E9tS1E~0Crj6XpdUsCXbhe0vV7vUFG~AhSk7O-5ovlm27L~~eN9Vuo94ry9cp1Ch~qGNgy9IVz8ZdKL73pGW6sJKz5DeMC3iSZybS6xll2dfPXNRP3p7JtIfwqeNQrMYeMLi5HrCX~y7AFoxTdKmdHJhsMrM75heBv3Jh6aEiXZA9UCu12-7F9dYBxPF90-gEcZiGKhSvADK5UmfY8erxA4I-Rud8vZA1aZp88rWEjH2JZJ3Ff9YDbY7Z9wib1QwujXJW1CaxLBWnL7Ftp1l88vJKJXhVH75T18EEddDDifJqiOWSvcU~qK8gSZtTIw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    createdAt: new Date().toISOString(),
    updatedAt: null,
  },
  {
    id: generateUniqueId(),
    title: 'Teknologi VAR dalam Pertandingan Sepak Bola Piala Dunia 2022',
    slug: createSlug(
      'Teknologi VAR dalam Pertandingan Sepak Bola Piala Dunia 2022'
    ),
    excerpt: `Pembangunan dan pengembangan smart city sedang menjadi hal yang banyak dilakukan oleh daerah-daerah di Indonesia. Apalagi, pemerintah Indonesia memiliki program...`,
    content: `Pembangunan dan pengembangan smart city sedang menjadi hal yang banyak dilakukan oleh daerah-daerah di Indonesia. Apalagi, pemerintah Indonesia memiliki program Gerakan Menuju 100 smart city yang merupakan program bersama Kementerian Komunikasi dan Informatika, Kementerian Dalam Negeri, Kementerian PUPR, Bappenas dan Kantor Staf Kepresidenan.`,
    categories: ['Artikel', 'Nasional', 'Smart City'],
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/ce8e/1ce8/38528040470518e2c54b8f2fa395f296?Expires=1695600000&Signature=Hw7SICNL~YqOEioZtuFz27bmZNAII06fU8rKE-EM3JcX63OZDdl0Tyn8ZOxZSmd3bgw5scfKWaAMhFD4C-94eVDPdhhVvlNkM2LDp7STfzZFjcHv2uZ57coT-my4X~DdL3IpIeDNLwcFGPiQEE6DXtRe9TwdoYFka63juAX~~yxxkPzYN4cBFL3h8ZA-MIq6p1nkKwNvDLvHB19bwKX6NtR-LCp3eAj8bIOi5GfxZQOV9g6vUCxnyasByQ2vaMjv5Ke8Q1n8F200x1U75-1USIcjjWnqvJddR~17EA8YvuZJomT1ShUlkeP0QFdAcnyR96FXxKIMDcAfyb6HehZDgQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    createdAt: new Date().toISOString(),
    updatedAt: null,
  },
  {
    id: generateUniqueId(),
    title: 'Wamenkes Ingin Mendorong Inovasi Teknologi di Bidang Kesehatan',
    slug: createSlug(
      'Wamenkes Ingin Mendorong Inovasi Teknologi di Bidang Kesehatan'
    ),
    excerpt: `Pembangunan dan pengembangan smart city sedang menjadi hal yang banyak dilakukan oleh daerah-daerah di Indonesia. Apalagi, pemerintah Indonesia memiliki program...`,
    content: `Pembangunan dan pengembangan smart city sedang menjadi hal yang banyak dilakukan oleh daerah-daerah di Indonesia. Apalagi, pemerintah Indonesia memiliki program Gerakan Menuju 100 smart city yang merupakan program bersama Kementerian Komunikasi dan Informatika, Kementerian Dalam Negeri, Kementerian PUPR, Bappenas dan Kantor Staf Kepresidenan.`,
    categories: ['Artikel', 'Nasional', 'Smart City'],
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/3600/54b8/99b8850a1c900f8e5ebaab061e211574?Expires=1695600000&Signature=KSU0cf2z5otFkxzVFwrlR8fkCdPZ3AJF7fboRMb9laYvpcMKBlECAhkzB3slkj1gKta9XwswN3npiXJIjKWzRZbAku-wUfmP-krqUvSesvBickotvNIifQ7Xaplb3cdidJiLZA53ip6F2E8clkLoP3-NECWiQQcG~QuzM4RlLShg2kfvrjsI7m580is0q4W01UfIm~pdGFhmRknighD1ED9y3cWIp3UeoCwBfpP9CRmdOMMOTNoNiLqEdaTn78q4EtSAgU5neCvED3Z-pQrCVs2w9rZa7klQJMoOsfusbeDY~RVPTVAiAKpWe8l8tAbWCe9oZtdybZipXv1MJ42qGg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    createdAt: new Date().toISOString(),
    updatedAt: null,
  },
  {
    id: generateUniqueId(),
    title: 'Uang Digital RI Akan Rilis Tahun Depan',
    slug: createSlug('Uang Digital RI Akan Rilis Tahun Depan'),
    excerpt: `Pembangunan dan pengembangan smart city sedang menjadi hal yang banyak dilakukan oleh daerah-daerah di Indonesia. Apalagi, pemerintah Indonesia memiliki program...`,
    content: `Pembangunan dan pengembangan smart city sedang menjadi hal yang banyak dilakukan oleh daerah-daerah di Indonesia. Apalagi, pemerintah Indonesia memiliki program Gerakan Menuju 100 smart city yang merupakan program bersama Kementerian Komunikasi dan Informatika, Kementerian Dalam Negeri, Kementerian PUPR, Bappenas dan Kantor Staf Kepresidenan.`,
    categories: ['Artikel', 'Nasional', 'Smart City'],
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/3ead/de21/715059ed3426f0878bef1c69f2334922?Expires=1695600000&Signature=gYMw92Vwrasop-FasE061AISK91v3IT9f-pllFfPUigb3hvk7zGT417MHrzyjEJc4Xbe-Or4fQjV5hwfgmIdsMlfUSYatqShWlmlJPlj2ZQDnzChESq9HfGA2KUjIzBpn8c1P38ISEdkV7oXUQeFyReHGd2U9tjDFgxVNQQGQbal5M6s32drL6pz6dsMVn4rqFqdlFDg4nwIDa-kC44UIJUULGX7hJ5iUBPIanYvrNZM0pj4Ap4C6WGzcSLUOnS9T9GyAQQqP2EyrkY-3Cc-SGSzr--zNezeRf-Sof2rbicNBIfTPQUDNG~HceVJi5JFWiyH7V7GkcruLK10xDOgcw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    createdAt: new Date().toISOString(),
    updatedAt: null,
  },
  {
    id: generateUniqueId(),
    title: 'Pemprov Jawa Barat Resmi Rilis Empat Aplikasi Besar untuk ASN',
    slug: createSlug(
      'Pemprov Jawa Barat Resmi Rilis Empat Aplikasi Besar untuk ASN'
    ),
    excerpt: `Pemerintah Provinsi Jawa Barat resmi luncurkan Smart Jabar, sebuah ekosistem teknologi untuk Jabar yang terdiri dari E–Office, Dashboard Jabar dan Jabar Skytrek. Launching aplikasi ini diresmikan langsung oleh Sekretaris Daerah Provinsi Jawa Barat...`,
    content: `Pemerintah Provinsi Jawa Barat resmi luncurkan Smart Jabar, sebuah ekosistem teknologi untuk Jabar yang terdiri dari E–Office, Dashboard Jabar dan Jabar Skytrek. Launching aplikasi ini diresmikan langsung oleh Sekretaris Daerah Provinsi Jawa Barat, Setiawan Wangsaatmaja, bertempat di Jabar Command Center, Gedung Sate, Kota Bandung, Rabu (5/4/2023).`,
    categories: ['Artikel', 'Nasional', 'Smart City'],
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/50e8/b7e3/d01ef7ce9776c225532c958b75f35f9f?Expires=1695600000&Signature=FN2aG9-Zd~9kgWXDnAvFGL354cK02JqcxUJsLh-reRR-sZJWYwqgGlbSxz8RAZuxwk~eDB0EeRO4Eml7B0if~5CUNsRl6svOS0gyHkWaTQdfkolksSwmSDakmymG4uIRP0~k45JhHQYC2IRb806OjzmqJH4GIfUX27FOHSsMPZCs8rdau5YqS3JgiH2k7FqkQIs50NkFn5bA5bJzfT0vn-w8wVS6R1CvZssKQfM~cX9bDfkf0mqD1vHf9nPkpbpfGAfCm9r2Jk682T4Hm0COQxL9mKCWkE9A57z2bIS1hpNF5UT1NxAyIt~a7gt9ACoFNTIUsS6Rj0hAzHBCrzVpNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    createdAt: new Date().toISOString(),
    updatedAt: null,
  },
  {
    id: generateUniqueId(),
    title: 'Implementasi Smart Branding, Tidak Hanya Soal Wisata',
    slug: createSlug('Implementasi Smart Branding, Tidak Hanya Soal Wisata'),
    excerpt: `Smart branding merupakan salah satu pilar dari pendekatan smart city yang memiliki definisi...`,
    content: `Smart branding merupakan salah satu pilar dari pendekatan smart city yang memiliki definisi strategi memasarkan sebuah kota atau wilayah sehingga mampu menarik ekosistem sekitar, baik itu warga, masyarakat umum, ataupun pelaku bisnis.    `,
    categories: ['Artikel', 'Nasional', 'Smart City'],
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/8be4/029a/ffe32bf641c9dae627cfbe7dc1724c3a?Expires=1695600000&Signature=ZuMzwBhCA9ahwb~4Xy-3IEFs1nqFy23nCQZNzEt3L6-lcAmdhqBH~ABZ0IOtI3pwiV6Zf5LFc-74ZjI-mzZH6Y~3RiaUmXe-prmlf8jWFsZOQ2TxLoRCArubRN6NxD~QKaAqODc3mv9udZsgDwACPBcnh9rBFUhmi1sYVei3cqoSGF-eN08j1rtuHi9ByXc0I8TJ5s2tW1~TU~I6HOIHlo2jKvZcDk0BGTe0Xu5LOrBsf389Xw0~MEXISbV-o0vefz4wiKBZA1C2ZGySSPSFO1vjU-Ri2kTIgmUKiOyBMQW6A5WCeOSsg9zVTr0IL30uPbttC93JeZ8dhZpGHi3DpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    createdAt: new Date().toISOString(),
    updatedAt: null,
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
    categories: ['Artikel', 'Nasional', 'Smart City'],
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/8d76/d5b8/8949094df2533c9e64c0bc55ae352e0d?Expires=1695600000&Signature=SjqnubkJBtUaHH6~nzHOWwSYHR6C9m6qHhvqWq7M1DaYP9vPIbmCMtZSEpWsAp5WaRLdROmTzX2VhrRafGxoLNIGR2aXzmwHiXganyArlFOVrd3tITROpBUNvAlb8yIVx7kKzHiS9PTT~VMXEKrt2nMM0n-kWQFIxK0iklSowZDHuB6MKLyoslzuT26JNX35OKzTXWm6kUb2~Sk~SIu9Jd6Y-cxtfFxShP~ADGiM4U43~iT6Uc5VxxBZstJjT-vOUtcBUULl3lbbPN4Lzujlsh6I5JJmoWOG88n~oAmZheKZPvg40SsV8XX2zVTNuh6CZaBC10dTQkxZ-q57RXgprA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    createdAt: new Date().toISOString(),
    updatedAt: null,
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
    categories: ['Artikel', 'Nasional', 'Smart City'],
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/fed1/1fb5/3ae4e8a31339533688a483c54e564dfc?Expires=1695600000&Signature=HgW7HhNy50WM6s3E2kEA5P~qYeAThiL0gEqQMI9ZWKt7BzAb6E2GUSDIPVf95ZxuGcxtmIwsbkRoRMkp14DJ9QmIaKksC8Bij8qK-0RNN8VicyibF19B1DJ7SR6CFZNd0kc6Sk2pU15OBi78uj2VwlfM0CCvKOKgSq5UVLczDjbHbe~gDte83nFZGuQCQmxCljYwIVAyog9QX8Sr4TzfcVBaIuCBRH~EepoNhX871T-aHzgoni0rpPF9y5ZaAtUW5UoKqxRLQMyM9D7XO5brWY5v~6c3AHX0QOGCRaoUTLS73Yxk1~fcDnu3DPrCFT8Nln3CQloDGmlWq8PAuUmadQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    createdAt: new Date().toISOString(),
    updatedAt: null,
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
    categories: ['Artikel', 'Nasional', 'Smart City'],
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/3947/c926/9ad23ea579c994f82e0367996313af54?Expires=1695600000&Signature=hSS7X4LfSlvpzlijW86XnP~5GRJ~H5IzzJk2J3IMSlNhXByZ2GPzdnLeyHAJqWRILk8jvOQLoJC3KS8khRE2G6oJLW5ZJRHiKTEZ2PrbdWEe0Nps~HAqGuU9co46eBUPNcrAwLXohHnTE2bkkKbl2BNGqwtaEnTqyEyKW1jdPXaWYEwKn6Y5SPZTDnGFoIKrGTPs8F5O9jeM3xtWOcf-z~da7ivwKCshzhA1KDnL5EF4yxt5xnyhNvJWnqqdcLTapt4v6ItUKpU7nyLCPpiU8ADmNvk2IQHRJUgzi570QO3-8WzmIGjhrOS~fZ0luu-ktrWKOam791mbBe2nuETyLQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    createdAt: new Date().toISOString(),
    updatedAt: null,
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
    categories: ['Artikel', 'Nasional', 'Smart City'],
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/0587/bbcc/ed2473469afed9b191fbac73e951db16?Expires=1695600000&Signature=TfY4OYSAH0jlw99331339szvbeR8O0yzrgI1zDLRSCfuh~7ZizkVS3zOpuoOzlFVTfV12LA2Uazze9r9x3pnswv0ktYtHpO3cl98dQjPf9fmNnFx70jgSTXoQcssAop4jFM1brnJRHa-esSUAyjD-qG4YqEdLy9R~~k67bqRAtQs5-~1AFuXufrodhuU4OkZ~nTVwYs7x8M5lRUo5WC0h~0pm2f~4tk7~NRM4Hi-p4WmXM8jiPUC0yTCSevp-6XaM-zOcd8ix06XFGwYrjnA1Z1MVJNxXCngGYDEDgC3RPhW9oNUqAt3kMFVFYRB-qG5PXoxd6JuQyvmhKZNQlI78A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    createdAt: new Date().toISOString(),
    updatedAt: null,
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
    categories: ['Artikel', 'Nasional', 'Smart City'],
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/e0ec/d24d/c57a2b959ad326f85ab3e65f6d2186fb?Expires=1695600000&Signature=C6mmm6HBkIQ5qQ-J6eHQq6STxKyNJZ7Oq5sZHRyqHh-VYSPL3kvkzEdmEDbCVn8t2xmCIjco9CH3Ra8jWwVv35UJ6X82QBil19UwIWxni4y0IHsx0CoHa-ZtCM0RzMcSpdh3eEyi8kNIk4WTtYi-wB7y1WuQrCXbGeGJNVBI3gtfEMsr81FdEEW-JUWX7Oa3pimdztFQqrAVEU1L0T36NTaKZJQPXs4fMbNP4z3J8L7-Qckh3FjmPNLb2Lim5wbprRqNGjTyAFe7GI3AwnCkjyb5oar1FkAugU35SYqCiXKD8Ml0O2cYsjdb4~aVRF7MsEDpEvd4uDBSkAAsR0mp4w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    createdAt: new Date().toISOString(),
    updatedAt: null,
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
    categories: ['Artikel', 'Nasional', 'Smart City'],
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/fd23/6775/8d9da79dc1b8d3d310078b56c67fa4ca?Expires=1695600000&Signature=WfOsYTjPxOcnKafokLBlbG79yK3SW9qEfaIRoA0wJd69LfIMX3NEwDS~roqrJBKozGFFM1DvTgbHj9kXic621aThJCWSKDeOANSDecInmaqGvepaXWmIXNOPianLTfmVvv5qU02PZ3UWyU1ytI4y7UShghFFTFgjqCBxzrrTy2Zy45Md2pLvZctPjEvXBaVa42Fcas3S~8ouP4AYDdFIkxMgraoWmJMehxdeOuCUIfRja87sSj7qLLsFf273wpCy~0y3jWx5vnD11ll~8bTg5mXUXo6bKx3jSSMAmWSx9STcl~dQ9KT5hbTXPbHF7GPgRoFcRjXLY2m1F8AcEdpO4A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    createdAt: new Date().toISOString(),
    updatedAt: null,
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
    categories: ['Artikel', 'Nasional', 'Smart City'],
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/6411/a7af/53556a90d5d081f33c20584dc06b27fb?Expires=1695600000&Signature=oGOEHxJLoEwV-WkxW6nYvBvRyJvSKVanT9ueGirL34vVL7WAG6fMvo5GtHMCQ9oVorDFbtgVcqNFL5mVsyT1u0xfzjEtzAxHJM1zb3FMTTk-vz6xquEv0-1nq0~Gy~KbBC2sWHfLzZR5rPF3D14FTIJ~6kmFPPC5JBfRsoVXkxiGWAJcQBYjrqcgmV0VqeUz0WVYYqyOp3XK-YPJpqBl8QhHg8rh3wq5JRTxalMcU2BJvZjMLnL44Z6RjYl0i77wOL3RbzL5bj~Na2evvqWx2vySZEdJacLwNR7G9cAsKRn7AyzowA0-9qLafOPqOjjNKdiyt1Z-RKlYrXM6nCs6UQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    createdAt: new Date().toISOString(),
    updatedAt: null,
  },
  {
    id: generateUniqueId(),
    title: 'Kabupaten Bantul Raih Predikat SPBE Terbaik',
    slug: createSlug('Kabupaten Bantul Raih Predikat SPBE Terbaik'),
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eaque?...`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt qui beatae ullam nulla ratione odio! Quo dolorem, debitis error repudiandae corporis ea minima, consectetur minus praesentium, omnis eaque nihil quia quod maiores! Sapiente, id. Minima adipisci dolores eius ullam sunt eligendi facere officia enim unde ab, repudiandae doloremque ea voluptatum velit saepe beatae. Unde dicta deleniti soluta consequuntur consequatur quia porro magni recusandae mollitia hic. Voluptate fugiat illum quaerat obcaecati reiciendis cumque, porro aperiam eligendi maxime voluptatem, non distinctio tenetur ducimus. Molestias et, voluptate veniam, sapiente dolor repudiandae cumque eaque sed impedit repellat saepe, voluptas repellendus ut voluptates vel?
    `,
    categories: ['Artikel', 'Nasional', 'Smart City'],
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/ab68/2cb4/792d80b32a211eea51f6ee6c3b32abcc?Expires=1695600000&Signature=qMsBghSQOF5QIwm8-~APUoiifAaAXrpZaHfWzXK2niwtzzXr6-UI2~kI0g0wjEiWI~ZCXAuyAfpae5GcXROmPdJhoG7-po3G7j98ZfdX9V0cTbxKGdhk1ebbVvaN5PrxyaKvmnTOoksjtzq8epXPiwqcD5jbfcNW5If5OblKZ9e508bGjMEyfpBifk6IZ9App76PPbgouv2Vecn5YUmR7U7EtclAwoMTdBk9ZZVwbfr~edkS52isGyMwdE8CIHhm95GY-6VJes3GViR6dHM8-GC-Rbgh0gKBG0RslaMZ25Pn0OsLGV1qQ-RljJjDZJk5ab1ddNZ-vO-tbMCRzzKhQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    createdAt: new Date().toISOString(),
    updatedAt: null,
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
    categories: ['Artikel', 'Nasional', 'Smart City'],
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/8d76/d5b8/8949094df2533c9e64c0bc55ae352e0d?Expires=1695600000&Signature=SjqnubkJBtUaHH6~nzHOWwSYHR6C9m6qHhvqWq7M1DaYP9vPIbmCMtZSEpWsAp5WaRLdROmTzX2VhrRafGxoLNIGR2aXzmwHiXganyArlFOVrd3tITROpBUNvAlb8yIVx7kKzHiS9PTT~VMXEKrt2nMM0n-kWQFIxK0iklSowZDHuB6MKLyoslzuT26JNX35OKzTXWm6kUb2~Sk~SIu9Jd6Y-cxtfFxShP~ADGiM4U43~iT6Uc5VxxBZstJjT-vOUtcBUULl3lbbPN4Lzujlsh6I5JJmoWOG88n~oAmZheKZPvg40SsV8XX2zVTNuh6CZaBC10dTQkxZ-q57RXgprA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    createdAt: new Date().toISOString(),
    updatedAt: null,
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
    categories: ['Artikel', 'Nasional', 'Smart City'],
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/134c/7aa8/7d090dfc5df1f3daa1a28dd5614c0ac4?Expires=1695600000&Signature=IzAgdQjBq0rFXM-88MljpLX2-PQNs29ouaQAvzbfeAatmPUbD~4E-w28iarZzUesT7~~SCbg0ek49tMMt9xlpw-tu9iBU87YwEt-kWsvevgIAi8Xs3geu5L3oENleC1e~-yGHY6gAG2LL2DfzGF2A3DT7eFZ7IAz4AMmZ95g5u2aZv1DDpWVZ~ioRSWC8vtEUtL64jVBHyKeyI1V-aH2fiz5xZ9SG0Mcbtn6K7uBWCdHcZvjjUI9ynT6V~5UqheflAmVhvY4pNTVmEQFw9gJtiszQoctrVBzkymalKSKbA2U5HNeq2w7P8uoEDkVfyLiWIktCQD-Rr1eU2znQajvew__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    createdAt: new Date().toISOString(),
    updatedAt: null,
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
    categories: ['Artikel', 'Nasional', 'Smart City'],
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/4b81/2137/f7085aaee6571f28232926daf83067cb?Expires=1695600000&Signature=KqEjADpQtC3rKZesoJc0IQs-~vw5LiyJeJZWM8qh4kj8ev5dWf4WM002uDdsmxlnrvmTAf9n69s3ueKzZjdQuYUYUnNPOzoGv-5DefF5EWyWshVfthXzcqEksAYRYbtiQs9VM2X8Sib8yB5FOPfUBr4hR7~69N1Tme8HrnSmKUo0R3PQvTeoNPLsb-ZJa2UrgQigwp~nRziSndzQQmOB-br0E7AiTwVyuZnSDK8cqbLzSgO3MZSuLzXLcDvQ7H7UtdfX4wbUf4g2nhYpW7OsKPBxVS-roW2GE6QTtAl7ogvcd-XNwrbpkKW8f~hvB4xyOAFWjdYifPDGYCxb0IWtjQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    createdAt: new Date().toISOString(),
    updatedAt: null,
  },
  {
    id: generateUniqueId(),
    title: 'Konsep Forest Smart City Menjadi Energi Terbarukan di IKN',
    slug: createSlug(
      'Konsep Forest Smart City Menjadi Energi Terbarukan di IKN'
    ),
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eaque?...`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt qui beatae ullam nulla ratione odio! Quo dolorem, debitis error repudiandae corporis ea minima, consectetur minus praesentium, omnis eaque nihil quia quod maiores! Sapiente, id. Minima adipisci dolores eius ullam sunt eligendi facere officia enim unde ab, repudiandae doloremque ea voluptatum velit saepe beatae. Unde dicta deleniti soluta consequuntur consequatur quia porro magni recusandae mollitia hic. Voluptate fugiat illum quaerat obcaecati reiciendis cumque, porro aperiam eligendi maxime voluptatem, non distinctio tenetur ducimus. Molestias et, voluptate veniam, sapiente dolor repudiandae cumque eaque sed impedit repellat saepe, voluptas repellendus ut voluptates vel?
    `,
    categories: ['Artikel', 'Nasional', 'Smart City'],
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/9b64/d8fa/3e6c9dc5f33518141119855ad0f78bee?Expires=1695600000&Signature=ppv00Txk~mGjLxLbLNXaPAGmg5ulCyczIX9RUIJ596UlzJicvl1u~1XUqZi7KUsJ7d0V1ILVsdURHyjsUidEtBo2Eq88Pg1~D8xkU6jAfNdpebakKcslsihqZHt5tWlDCS5-Q4XxNQzJZMNt2tN4oE9jOO-V0UiSFkfTMdyO9462ouPm4ap5LFwyKJaxMm4zmYdcHycsj2ZK5JhBM5NUfIb1yCFKt5SZBaV6hhZe7JE5cLX2ixsg7NEWqS0qZMvY8CPgbvMPe6azAPaFYsO7wuX9BO-29qxo~QgcKRoeaHYGaO89rEzJCndd7~PI8ZL0iZ9~K06ln2EdPO1JVpDZ0Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    createdAt: new Date().toISOString(),
    updatedAt: null,
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
    categories: ['Artikel', 'Nasional', 'Smart City'],
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/dad3/d3e5/621b9dfa540b86ae152c86e092df406e?Expires=1695600000&Signature=hvhi~LwrNfArB5NPC9EwgxHlbDQONsds4I9UYrMQwFbNCuGxcsqYPWEwCtTEcBaD9Pg4ErM6DvJIEI1bYPPv3SHzM~VKC~T85wiCsabhnT8Zj1sGnjmQx4OxhZPocAZvrb-2v3eGj5crKZ7LYc6qOq0cRZueMcH86-GohGnd4dmJJPZe1vHUXqfWyUBp5kUxThMJ3Mh9GjYEZWAuq2Ntiss5tEUoo1cQBj7FXPEhx9cox6ALYIiDf0hdBdj8noC7opVaWKzaVsEheSwtjmcazR8kXzGwKBhyHIGzXBOZda4x5Ivs96V5fXWVF5cFxSKBEupFSZRuTQoQRSYKQnXbbA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    createdAt: new Date().toISOString(),
    updatedAt: null,
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
    categories: ['Artikel', 'Nasional', 'Smart City'],
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/b937/d0fb/0ab968f5216bf6f5e0d7d531e5c5d3b1?Expires=1695600000&Signature=ISOZQjTTZ15lRMlhm6yh5bB0pt2hYaFwdxACCpxYUVXOxAs9~5u0oKedKrlR5OVWs9nscpOetSw3s27QFdGb8ZHpiFqhFcWmrchlJ6aiNGvtukzf7P~c6fXCzWzSiXzn1jdnPtPddsJc25gF0geNOl6BzJ8qPTzpxiRRWpL5GarHVTvQto66pzff4Y06yazrfP3wo0h-whkuFWk76LLeYGiOGbEzdvHfKvRPaNaEgY9sKH5KeEMEnkzXnFuJmaQM~6HMRmQdajNpUk07v9h8eCi8H2oljGTuJokGh6GOCCEeiCRhNIOoRxfcKNBSpdFp-AeaAvifXRIU7Ns8RdVbMQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    createdAt: new Date().toISOString(),
    updatedAt: null,
  },
  {
    id: generateUniqueId(),
    title: 'Inovasi Metaverse untuk Smart Branding',
    slug: createSlug('Inovasi Metaverse untuk Smart Branding'),
    excerpt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, eaque?...`,
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deserunt qui beatae ullam nulla ratione odio! Quo dolorem, debitis error repudiandae corporis ea minima, consectetur minus praesentium, omnis eaque nihil quia quod maiores! Sapiente, id. Minima adipisci dolores eius ullam sunt eligendi facere officia enim unde ab, repudiandae doloremque ea voluptatum velit saepe beatae. Unde dicta deleniti soluta consequuntur consequatur quia porro magni recusandae mollitia hic. Voluptate fugiat illum quaerat obcaecati reiciendis cumque, porro aperiam eligendi maxime voluptatem, non distinctio tenetur ducimus. Molestias et, voluptate veniam, sapiente dolor repudiandae cumque eaque sed impedit repellat saepe, voluptas repellendus ut voluptates vel?
    `,
    categories: ['Artikel', 'Nasional', 'Smart City'],
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/f2ba/ef80/86204f1d200e00df8793050a21058494?Expires=1695600000&Signature=WQ~d5Gk1aJhDkKKoLGkfblIKKdrUVt5A1oNnA78GBRfDHEmzQqLpY7lpK0cOIvrhMnfbM1cnfZWtGJEPACzDDcSdVDo3ZRtXvG6h1fUDspUjtn0b5MXY8ZUqLCYuo2V56EQ3yxsBXimyEjsfWxbHZn8OYwHAl8DztJfJUSKOtBz4qlbjn1VUWGSKO~HfmzRi2OZ9v6Gh15DB~Ty81QDeeCzvybKd~Dh7MdJYgE5eFHacri5sbsG8RYEF0OAqrqqHfxSqwyK3t9pJKlis08SUcTIhvKV6NzkgVg3MjqLaVww2HVhwSR0iR-wG0IdKBx~6bBfa7a7LSha3jbvUuXlngg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    createdAt: new Date().toISOString(),
    updatedAt: null,
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
    categories: ['Artikel', 'Nasional', 'Smart City'],
    thumbnail:
      'https://s3-alpha-sig.figma.com/img/f3b0/261a/fc6d9405f79ab06fb381206b7fd6a9e8?Expires=1695600000&Signature=nyMnDDX~jDcLgBKya51AgLnEHvGeRvZKR84cIERtVA4J6PbbRCVOVMVIuhwgLXFXmYngmT3xObI77ZWmP~xCEpJTbKlm4kz0P-~Esnti-gGcQUgdumZ1GElEGmO2qoAwvSbjOuuXHdot8yXyA0Z8dlpz~~S415Cr-MYtMMvCgS0hmOUYenPMdZyA104WYp-IaCVTrTq0xmormoX6bHqoIY2um62Cls5~0SKuJ93d0Pk8~J7byk38r3nAcM-Gag6h~RcxBBdewy12uuZODISWYkrz5dpF9xywgW4JD~DN0cxHUMT9YpD34eL3CM2lZQmp6AZwLeP4TRitBRaStut2yQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    createdAt: new Date().toISOString(),
    updatedAt: null,
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
