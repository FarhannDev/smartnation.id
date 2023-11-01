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
      rendered: `<span style="font-weight: 400;">Pembangunan dan pengembangan </span><i><span style="font-weight: 400;">smart city </span></i><span style="font-weight: 400;">sedang menjadi hal yang banyak dilakukan oleh daerah-daerah di Indonesia. Apalagi, pemerintah Indonesia memiliki program Gerakan Menuju 100 </span><i><span style="font-weight: 400;">smart city </span></i><span style="font-weight: 400;">yang merupakan program bersama Kementerian Komunikasi dan Informatika, Kementerian Dalam Negeri, Kementerian PUPR, Bappenas dan Kantor Staf Kepresidenan.&nbsp;</span>`,
    },
    content: {
      rendered: `<span style="font-weight: 400;">Pembangunan dan pengembangan </span><i><span style="font-weight: 400;">smart city </span></i><span style="font-weight: 400;">sedang menjadi hal yang banyak dilakukan oleh daerah-daerah di Indonesia. Apalagi, pemerintah Indonesia memiliki program Gerakan Menuju 100 </span><i><span style="font-weight: 400;">smart city </span></i><span style="font-weight: 400;">yang merupakan program bersama Kementerian Komunikasi dan Informatika, Kementerian Dalam Negeri, Kementerian PUPR, Bappenas dan Kantor Staf Kepresidenan.&nbsp;</span>\n\n<span style="font-weight: 400;">Badan Standardisasi Nasional (BSN) mengembangkan Standar Nasional Indonesia (SNI) dalam mendukung suksesnya program terkait </span><i><span style="font-weight: 400;">smart city </span></i><span style="font-weight: 400;">yaitu SNI ISO 37120:2018, yang merupakan pembangunan perkotaan dan masyarakat berkelanjutan yang berisi indikator untuk pelayanan perkotaan dan kualitas hidup. SNI tersebut merupakan dasar dari pelaksanaan kota cerdas dan berisi indikator, cara mengukur dan kriteria yang terdapat dalam </span><i><span style="font-weight: 400;">smart city.&nbsp;</span></i>\n\n<span style="font-weight: 400;">Standar ini berupaya membantu pemerintah daerah, baik kota ataupun kabupaten agar lebih efektif dalam menerapkan pembangunan berkelanjutan. BSN juga berharap adanya SNI terkait </span><i><span style="font-weight: 400;">smart city </span></i><span style="font-weight: 400;">seluruh kabupaten atau kota di Indonesia bisa memiliki rujukan yang sama dalam membangun kota cerdas.</span>\n\n<span style="font-weight: 400;">Selain itu, terdapat 19 indikator yang merupakan dasar dalam pelaksanaan </span><i><span style="font-weight: 400;">smart city </span></i><span style="font-weight: 400;">dan enam diantaranya adalah pendidikan, kesehatan, populasi dan kondisi sosial, perumahan, ekonomi serta keamanan.&nbsp;</span>\n\n<span style="font-weight: 400;">Melihat dukungan dari BSN, pengembangan kota cerdas sangat didukung oleh pemerintah Indonesia. Sudah saatnya kota dan daerah Anda juga mulai menyusun </span><i><span style="font-weight: 400;">master plan </span></i><span style="font-weight: 400;">untuk menjadi salah satu kota cerdas di Indonesia. Jika Anda butuh konsultasi dan bimbingan terkait penyusunan </span><i><span style="font-weight: 400;">master plan, </span></i><span style="font-weight: 400;">silahkan kunjungi akun Instagram @citiasiainc untuk informasi lebih lanjut.&nbsp;</span>\n\n<a href="https://smartnation.id/apakah-anda-tahu-bahwa-ada-standar-nasional-indonesia-sni-untuk-smart-city/"><strong>Referensi</strong></a>`,
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
        '<p style="text-align: justify;"><span style="color: #000000;"><span style="font-weight: 400;">Kementerian Kelautan dan Perikanan (KKP) melalui Badan Riset dan Sumber Daya Manusia Kelautan dan Perikanan menciptakan inovasi di bidang perikanan melalui&nbsp; </span><i><span style="font-weight: 400;">Smart Fisheries Village </span></i><span style="font-weight: 400;">(SFV). Program </span><span style="font-weight: 400;">SFV diluncurkan oleh Menteri Kelautan dan Perikanan pada 2 Agustus 2022 di Rapat Kerja Teknis BRSDM, memiliki dua konsep yakni yakni SFV Desa dan SFV UPT.&nbsp;</span></span></p>',
    },
    content: {
      rendered:
        '<p style="text-align: justify;"><span style="color: #000000;"><span style="font-weight: 400;">Kementerian Kelautan dan Perikanan (KKP) melalui Badan Riset dan Sumber Daya Manusia Kelautan dan Perikanan menciptakan inovasi di bidang perikanan melalui&nbsp; </span><i><span style="font-weight: 400;">Smart Fisheries Village </span></i><span style="font-weight: 400;">(SFV). Program </span><span style="font-weight: 400;">SFV diluncurkan oleh Menteri Kelautan dan Perikanan pada 2 Agustus 2022 di Rapat Kerja Teknis BRSDM, memiliki dua konsep yakni yakni SFV Desa dan SFV UPT.&nbsp;</span></span></p>\n<p style="text-align: justify;"><span style="color: #000000;"><i><span style="font-weight: 400;">Smart Fisheries Village</span></i><span style="font-weight: 400;"> (SFV) merupakan konsep pembangunan desa atau kawasan perikanan berbasis teknologi informasi dan komunikasi manajemen berkelanjutan guna mendukung pengembangan potensi lokal.&nbsp;</span></span></p>\n<p style="text-align: justify;"><span style="color: #000000;"><span style="font-weight: 400;">Dalam pembangunannya, SFV telah meningkatkan daya saing desa dan kapasitas sumber daya manusia (SDM), termasuk dalam percepatan pemanfaatan sarana teknologi digital, sehingga </span><span style="font-weight: 400;">kegiatan ekonomi di dalamnya menjadi lebih beragam, seperti adanya spot wisata hingga produksi produk UMKM.</span><span style="font-weight: 400;">&nbsp;</span></span></p>\n<p style="text-align: justify;"><span style="font-weight: 400; color: #000000;">Inovasi ini membutuhkan dukungan dari lintas sektoral, baik dari kementerian maupun lembaga, pemerintah daerah dan perbankan serta swasta. Hal ini menjadi salah satu peningkatan perekonomian melalui inisiatif strategis berbasis agro-maritim.&nbsp;</span></p>\n<p style="text-align: justify;"><span style="color: #000000;"><i><span style="font-weight: 400;">Smart Fisheries Village</span></i><span style="font-weight: 400;"> (SFV) dalam meningkatkan digitalisasi korporasi yang memiliki visi dan misi, sebagai berikut:&nbsp;</span></span></p>\n\n<ol>\n \t<li style="font-weight: 400; text-align: justify;" aria-level="1"><span style="font-weight: 400; color: #000000;">Mempercepat pembangunan infrastruktur dan platform digital cerdas yang berkelanjutan, ekonomi, dan dapat diakses oleh semua kalangan;</span></li>\n \t<li style="font-weight: 400; text-align: justify;" aria-level="1"><span style="font-weight: 400; color: #000000;">Mengembangkan talenta digital untuk mendorong kemampuan serta tingkat adopsi digital masyarakat;</span></li>\n \t<li style="font-weight: 400; text-align: justify;" aria-level="1"><span style="font-weight: 400; color: #000000;">Memimpin pembentukan ekosistem digital yang memberi pengalaman terbaik bagi pengguna.</span></li>\n</ol>\n<a href="https://smartnation.id/terapkan-smart-fisheries-village-sfv-pada-industri-kelautan-di-indonesia/"><strong><em>Reference</em></strong></a>',
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
        'Teknologi Video Assistant Referee (VAR) dalam Pertandingan Sepak Bola Piala Dunia 2022\n\n<span style="font-weight: 400;">Teknologi telah berkembang dengan sangat pesat, bahkan sudah merambah di bidang olahraga yaitu sepak bola.</span>\n\n<span style="font-weight: 400;">Piala Dunia 2022 yang diselenggarakan oleh negara Qatar telah menggunakan teknologi </span><i><span style="font-weight: 400;">Video Assistant Referee</span></i><span style="font-weight: 400;"> (VAR) dalam menentukan posisi </span><i>',
    },
    content: {
      rendered:
        ' Teknologi Video Assistant Referee (VAR) dalam Pertandingan Sepak Bola Piala Dunia 2022\n\n<span style="font-weight: 400;">Teknologi telah berkembang dengan sangat pesat, bahkan sudah merambah di bidang olahraga yaitu sepak bola.</span>\n\n<span style="font-weight: 400;">Piala Dunia 2022 yang diselenggarakan oleh negara Qatar telah menggunakan teknologi </span><i><span style="font-weight: 400;">Video Assistant Referee</span></i><span style="font-weight: 400;"> (VAR) dalam menentukan posisi </span><i><span style="font-weight: 400;">offside</span></i><span style="font-weight: 400;">.</span>\n\n<i><span style="font-weight: 400;">Video Assistant Referee</span></i><span style="font-weight: 400;"> (VAR) adalah prosedur bantuan teknologi untuk membantu asisten wasit meninjau tayangan ulang sebuah insiden dalam permainan sepak bola, sebagai bahan pertimbangan untuk wasit utama. Fungsi VAR dalam sepak bola adalah untuk menegakan maupun menegakkan peraturan pertandingan sepak bola (</span><i><span style="font-weight: 400;">Laws of the Game</span></i><span style="font-weight: 400;">) semaksimal mungkin, seperti dikutip dari panduan Dewan Asosiasi Sepak Bola Internasional (IFAB).</span>\n\n<b>Bagaimana cara kerja sistem VAR?</b>\n\n<i><span style="font-weight: 400;">Video Assistant Referee</span></i><span style="font-weight: 400;"> (VAR) telah membantu wasit dalam beberapa situasi penting, hal inilah yang akhirnya membuat sistem VAR digunakan oleh FIFA dalam menentukan poin dalam permainan sepak bola. Adapun cara kerja dari sistem ini, sebagai berikut:</span>\n<ol>\n \t<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Dapat memeriksa siaran televisi atau rekaman pertandingan secara langsung untuk melihat insiden dalam sebuah pertandingan sepak bola;</span></li>\n \t<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Teknologi VAR dapat meninjau tayangan siaran pertandingan secara normal atau memakai tayangan ulang dengan kecepatan diperlambat (</span><i><span style="font-weight: 400;">slow motion</span></i><span style="font-weight: 400;">) dari berbagai sudut;&nbsp;</span></li>\n \t<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Teknologi VAR memiliki akses ke 33 kamera televisi, diantaranya terdapat 8 kamera yang menerapkan super </span><i><span style="font-weight: 400;">slow motion</span></i><span style="font-weight: 400;"> dan empat ultra slow-motion. Selain itu, tim VAR juga terhubung ke dua kamera </span><i><span style="font-weight: 400;">offside</span></i><span style="font-weight: 400;">.</span></li>\n</ol>\n<span style="font-weight: 400;">Hal-hal yang dapat ditinjau dalam penggunaan </span><i><span style="font-weight: 400;">Video Assistant Referee</span></i><span style="font-weight: 400;"> (VAR) </span><span style="font-weight: 400;">&nbsp;di pertandingan sepak bola FIFA, sebagai berikut:</span>\n<ol>\n \t<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Meninjau proses terjadinya gol, jika ada kemungkinan pelanggaran, </span><i><span style="font-weight: 400;">handball, </span></i><span style="font-weight: 400;">atau </span><i><span style="font-weight: 400;">offside;</span></i></li>\n \t<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Meninjau terjadinya pinalti, melihat kemungkinan terjadinya pelanggaran, handball, dan diving yang sengaja dilakukan untuk mencari keuntungan;</span></li>\n \t<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Meninjau pelanggaran yang berpotensi hukuman kartu merah, misalnya ketika insiden perkelahian antar pemain atau adanya pelecehan dari gestur pemain;</span></li>\n \t<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Memeriksa ulang kesalahan identifikasi dari wasit, guna memastikan pemberian kartu kuning atau merah.</span></li>\n</ol>\n<span style="font-weight: 400;">Dengan begitu, teknologi </span><i><span style="font-weight: 400;">Video Assistant Referee</span></i><span style="font-weight: 400;"> (VAR) telah meningkatkan kenyamanan dan kepercayaan seluruh elemen yang terlibat dalam pertandingan sepak bola. Perselisihan dan keraguan dari pemain bola, klub, panitia, supporter dalam menilai keputusan wasit kini bisa diminimalisir.</span>\n\n<a href="https://smartnation.id/teknologi-var-dalam-pertandingan-sepak-bola-piala-dunia-2022/" data-wplink-edit="true"><strong>Referensi</strong></a>',
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
    categories: [82, 83, 145, 101, 86, 139, 137, 117],
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
        '<p style="text-align: justify;"><span style="font-weight: 400;">Dante Saksono, Wakil Menteri Kesehatan Republik Indonesia ingin para ahli medis dan peneliti kesehatan untuk mengembangkan riset dan melakukan inovasi teknologi dalam mewujudkan transformasi sistem kesehatan di Indonesia. Dukungan ini sejalan dengan pilar-pilar penopang transformasi kesehatan nasional, yaitu pilar ketiga yang berisi transformasi ketahanan kesehatan dan pilar keenam berupa transformasi teknologi kesehatan. </span></p>',
    },
    content: {
      rendered:
        '<p style="text-align: justify;"><span style="font-weight: 400;">Dante Saksono, Wakil Menteri Kesehatan Republik Indonesia ingin para ahli medis dan peneliti kesehatan untuk mengembangkan riset dan melakukan inovasi teknologi dalam mewujudkan transformasi sistem kesehatan di Indonesia. Dukungan ini sejalan dengan pilar-pilar penopang transformasi kesehatan nasional, yaitu pilar ketiga yang berisi transformasi ketahanan kesehatan dan pilar keenam berupa transformasi teknologi kesehatan. </span></p>\n<p style="text-align: justify;"><span style="font-weight: 400;">Dalam dukungan ini, terdapat kebijakan-kebijakan yang sudah diatur dari riset serta perkembangan produk, melakukan inovasi dan memproduksi alat kesehatan maupun obat di dalam negeri hingga jaminan pasar.</span></p>\n<p style="text-align: justify;"><span style="font-weight: 400;">Inovasi teknologi yang banyak diharapkan kehadirannya adalah alat skrining atau alat pendeteksi dini yang mampu mendeteksi penyakit dan menghindari tingkat keparahan suatu penyakit. </span></p>\n<p style="text-align: justify;"><span style="font-weight: 400;">Kementerian Kesehatan sudah melakukan inisiasi dengan menghadirkan bioteknologi bernama Biomedical dan Genome Science Initiative (BGSI). Inisiatif tersebut mendorong integrasi data genom hasil sekuensing dari seluruh ekosistem kesehatan nasional mulai dari universitas hingga rumah sakit. </span></p>\n<p style="text-align: justify;"><span style="font-weight: 400;">“Hasil riset berupa alat deteksi dini yang akurat dan terjangkau serta diharapkan bisa digunakan di layanan primer seperti puskesmas. Mudah-mudahan kita bisa bersama membangun sistem kesehatan Indonesia yang lebih kuat.” kata Dante saat memberikan materi “Riset dan Inovasi untuk Mendukung Transformasi Sistem Kesehatan” pada Sabtu, 10 Desember 2022 di Hotel Raffless Jakarta.</span></p>\n<p style="text-align: justify;"><span style="font-weight: 400;">Hadirnya banyak inovasi kesehatan di Indonesia, diharapkan mampu memberikan ketahanan pada sistem kesehatan di dalam negeri. Dukungan ini juga bertujuan untuk meningkatkan riset maupun inovasi teknologi di bidang kesehatan agar selaras dengan dorongan penyerapan produk di dalam negeri. </span></p>\n<p style="text-align: justify;"><span style="font-weight: 400;">Selain itu, dukungan untuk terus melakukan inovasi teknologi di bidang kesehatan adalah bentuk upaya mewujudkan </span><i><span style="font-weight: 400;">smart health, </span></i><span style="font-weight: 400;">yaitu pelayanan kesehatan terpadu menggunakan teknologi digital untuk memudahkan hidup masyarakat di bidang kesehatan. </span></p>\n<p style="text-align: justify;"><span style="font-weight: 400;">Jika Anda butuh konsultasi mengenai penerapan </span><i><span style="font-weight: 400;">smart city </span></i><span style="font-weight: 400;">di kota Anda, silahkan kunjungi akun Instagram @citiasiainc untuk informasi lebih lanjut.</span></p>\n<a href="https://smartnation.id/wp-admin/post.php?post=10100&amp;action=edit"><em><strong>Reference</strong></em></a>',
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
        '<span style="font-weight: 400;">Bank Indonesia (BI) dikabarkan sudah memiliki </span><i><span style="font-weight: 400;">timeline </span></i><span style="font-weight: 400;">untuk menerbitkan Central Bank Digital Currency (CDBC) alias rupiah digital. Direktur Departemen Kebijakan Sistem Pembayaran BI, Fitria Irmi menjelaskan bahwa digital rupiah akan menjadi pembayaran yang sah di Indonesia. Selain itu, rupiah digital akan mendukung pelaksanaan tugas BI di bidang moneter, makroprudensial, dan juga sistem pembayaran di era digital. </span> ',
    },
    content: {
      rendered:
        '<span style="font-weight: 400;">Bank Indonesia (BI) dikabarkan sudah memiliki </span><i><span style="font-weight: 400;">timeline </span></i><span style="font-weight: 400;">untuk menerbitkan Central Bank Digital Currency (CDBC) alias rupiah digital. Direktur Departemen Kebijakan Sistem Pembayaran BI, Fitria Irmi menjelaskan bahwa digital rupiah akan menjadi pembayaran yang sah di Indonesia. Selain itu, rupiah digital akan mendukung pelaksanaan tugas BI di bidang moneter, makroprudensial, dan juga sistem pembayaran di era digital. </span>\r\n\r\n<span style="font-weight: 400;">Rupiah digital ini juga mendukung pengembangan sistem keuangan dan integrasi ekonomi keuangan digital secara nasional. Apalagi, kajian-kajian tentang rupiah digital secara komprehensif sudah tertulis di dalam sebuah </span><i><span style="font-weight: 400;">white paper </span></i><span style="font-weight: 400;">yang akan diterbitkan tahun depan. </span>\r\n\r\n<span style="font-weight: 400;">Menjawab pertanyaan apakah uang digital akan terbit pada 2023, pihak BI belum bisa memberikan informasi lengkapnya. Namun, semua rencana dan proses sudah ditulis di </span><i><span style="font-weight: 400;">timeline</span></i><span style="font-weight: 400;"> yang sudah dibuat. </span>\r\n\r\n<span style="font-weight: 400;">Hadirnya uang digital di Indonesia tidak akan berpengaruh terlalu banyak terhadap sektor keuangan dan proses pemulihan ekonomi saat ini. Tapi, kebijakan sistem pembayaran selalu diikuti oleh inovasi dan risiko ke depan, BI sudah memitigasi risiko tersebut. </span>\r\n\r\n<span style="font-weight: 400;">"Standarnya, fitur-fiturnya sudah dilengkapi dengan fitur keamanan yang ada dan pasarnya juga tentunya sudah akan dipersiapkan. Jadi, penerbitannya sendiri mempertimbangkan dampak ekonomi, dampak moneter, dan sebagainya," jelas Fitria, </span><span style="font-weight: 400;">Direktur Departemen Kebijakan Sistem Pembayaran BI.</span>\r\n\r\n<span style="font-weight: 400;">Terkait keberadaan uang rupiah digital ke depannya, pihak BI mengatakan penggunaan uang baik uang kertas maupun koin yang saat ini masih digunakan dalam proses transaksi tidak akan dimusnahkan. Artinya, </span><span style="font-weight: 400;">penerbitan uang digital akan dihitung dengan kondisi kebutuhan uang beredar saat itu. Operasi moneter akan menghitung likuiditas, ketika digital rupiah hadir, uang kartal akan berdampingan. </span>\r\n\r\n<b>Uang Digital adalah Salah Satu Bentuk </b><b><i>Smart Economy</i></b>\r\n\r\n<span style="font-weight: 400;">Seperti yang kita tahu, pembangunan ekonomi adalah salah satu hal yang penting bagi suatu negara. </span><i><span style="font-weight: 400;">Smart economy </span></i><span style="font-weight: 400;">adalah pengembangan perekonomian yang menantang dan adaptif untuk menciptakan ekosistem yang mendukung kegiatan ekonomi masyarakat yang sejalan dengan perekonomian daerah unggulan. Apalagi, inovasi uang digital ini membantu kemudahan masyarakat dalam melakukan transaksi, tujuan ini selaras dengan salah satu dimensi </span><i><span style="font-weight: 400;">smart economy </span></i><span style="font-weight: 400;">yaitu kesejahteraan rakyat. </span>\r\n\r\n<span style="font-weight: 400;">Jika Anda ingin melakukan inovasi </span><i><span style="font-weight: 400;">smart economy </span></i><span style="font-weight: 400;">untuk daerah Anda, mari kunjungi akun Instagram @citiasiainc untuk mendapatkan informasi lebih lanjut.</span>\r\n\r\n<a href="https://smartnation.id/uang-digital-ri-akan-rilis-tahun-depan/"><strong>Referensi</strong></a> ',
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
        '<h5><b>Referensi</b></h5>\r\n<span style="font-weight: 400;">Amanda, G. (2022, Desember 01). </span><i><span style="font-weight: 400;">Kadin Kominfo Muba Hadiri Seminar dan Pameran Gerakan Menuju Smart City Tahun 2022</span></i><span style="font-weight: 400;">. Retrieved from republika.co.id: </span><a href="https://www.republika.co.id/berita/rm77wc423/kadin-kominfo-muba-hadiri-seminar-dan-pameran-gerakan-menuju-smart-city-tahun-2022"><span style="font-weight: 400;">https://www.republika.co.id/berita/rm77wc423/kadin-kominfo-muba-hadiri-seminar-dan-pameran-gerakan-menuju-smart-city-tahun-2022</span> ',
    },
    content: {
      rendered:
        '<h5><b>Referensi</b></h5>\r\n<span style="font-weight: 400;">Amanda, G. (2022, Desember 01). </span><i><span style="font-weight: 400;">Kadin Kominfo Muba Hadiri Seminar dan Pameran Gerakan Menuju Smart City Tahun 2022</span></i><span style="font-weight: 400;">. Retrieved from republika.co.id: </span><a href="https://www.republika.co.id/berita/rm77wc423/kadin-kominfo-muba-hadiri-seminar-dan-pameran-gerakan-menuju-smart-city-tahun-2022"><span style="font-weight: 400;">https://www.republika.co.id/berita/rm77wc423/kadin-kominfo-muba-hadiri-seminar-dan-pameran-gerakan-menuju-smart-city-tahun-2022</span></a>\r\n\r\n<span style="font-weight: 400;">Fitriana, S. N. (2022, Oktober 22). </span><i><span style="font-weight: 400;">Tingkatkan Kualitas SDM, Pemkot Bitung Ajak Pemuda Ikut Seminar Smart City</span></i><span style="font-weight: 400;">. Retrieved from detik.com: </span><a href="https://www.detik.com/sulsel/berita/d-6363138/tingkatkan-kualitas-sdm-pemkot-bitung-ajak-pemuda-ikut-seminar-smart-city"><span style="font-weight: 400;">https://www.detik.com/sulsel/berita/d-6363138/tingkatkan-kualitas-sdm-pemkot-bitung-ajak-pemuda-ikut-seminar-smart-city</span></a>, ',
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
        '<span style="font-weight: 400;">Referensi:</span><span style="font-weight: 400;">\n</span><span style="font-weight: 400;">Ditjen PP Kemenhumham. </span><a href="https://ditjenpp.kemenkumham.go.id/index.php?option=com_content&amp;view=article&amp;id=667:upaya-pemberantasan-korupsi-seiring-kemajuan-teknologi-informasi&amp;catid=107:hukum-teknologi-informasi&amp;Itemid=187"><span style="font-weight: 400;">UPAYA PEMBERANTASAN KORUPSI SEIRING KEMAJUAN TEKNOLOGI INFORMASI</span></a>',
    },
    content: {
      rendered:
        '<span style="font-weight: 400;">Referensi:</span><span style="font-weight: 400;">\n</span><span style="font-weight: 400;">Ditjen PP Kemenhumham. </span><a href="https://ditjenpp.kemenkumham.go.id/index.php?option=com_content&amp;view=article&amp;id=667:upaya-pemberantasan-korupsi-seiring-kemajuan-teknologi-informasi&amp;catid=107:hukum-teknologi-informasi&amp;Itemid=187"><span style="font-weight: 400;">UPAYA PEMBERANTASAN KORUPSI SEIRING KEMAJUAN TEKNOLOGI INFORMASI</span></a><span style="font-weight: 400;">. </span><a href="https://ditjenpp.kemenkumham.go.id/index.php?option=com_content&amp;view=article&amp;id=667:upaya-pemberantasan-korupsi-seiring-kemajuan-teknologi-informasi&amp;catid=107:hukum-teknologi-informasi&amp;Itemid=187"><span style="font-weight: 400;">https://ditjenpp.kemenkumham.go.id/index.php?option=com_content&amp;view=article&amp;id=667:upaya-pemberantasan-korupsi-seiring-kemajuan-teknologi-informasi&amp;catid=107:hukum-teknologi-informasi&amp;Itemid=187</span></a><span style="font-weight: 400;">&nbsp;</span>\n\n<span style="font-weight: 400;">Times Indonesia. (2022, 06 Desember). KPK Sebut Pelayanan Publik Kota dan Kabupaten Rentan Korupsi. </span><a href="https://timesindonesia.co.id/peristiwa-daerah/439246/kpksebutpelayanan-publikkota-dan-kabupatenrentan-korupsi"><span style="font-weight: 400;">https://timesindonesia.co.id/peristiwa-daerah/439246/kpksebutpelayanan-publikkota-dan-kabupatenrentan-korupsi</span></a>',
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
        'Reference:\n\n<span style="font-weight: 400;">CNN Indonesia. (2022, November 04). </span><i><span style="font-weight: 400;">Jerat Motor Tanpa Pelat Nomor, Polisi Gunakan Deteksi Wajah Pengendara</span></i><span style="font-weight: 400;">. Retrieved from cnnindonesia.com: https://www.cnnindonesia.com/otomotif/20221104155405-579-869610/jerat-motor-tanpa-pelat-nomor-polisi-gunakan-deteksi-wajah-pengendara</span>',
    },
    content: {
      rendered:
        'Reference:\n\n<span style="font-weight: 400;">CNN Indonesia. (2022, November 04). </span><i><span style="font-weight: 400;">Jerat Motor Tanpa Pelat Nomor, Polisi Gunakan Deteksi Wajah Pengendara</span></i><span style="font-weight: 400;">. Retrieved from cnnindonesia.com: https://www.cnnindonesia.com/otomotif/20221104155405-579-869610/jerat-motor-tanpa-pelat-nomor-polisi-gunakan-deteksi-wajah-pengendara</span>\n\n<span style="font-weight: 400;">Finaka, A. W. (2022, Februari). </span><i><span style="font-weight: 400;">Plat Nomor Kendaraan Bakal Pakai Teknologi RFID</span></i><span style="font-weight: 400;">. Retrieved from indonesiabaik.id: https://indonesiabaik.id/videografis/plat-nomor-kendaraan-bakal-pakai-teknologi-rfid</span>\n\n<span style="font-weight: 400;">Nainggolan, R. U. (2022, September 22). </span><i><span style="font-weight: 400;">Pelat Kendaraan Bermotor Warna Dasar Putih Akan Dilengkapi Teknologi RFID, Apakah Pengertiannya?</span></i><span style="font-weight: 400;"> Retrieved from suara.com: https://www.suara.com/otomotif/2022/09/22/193943/pelat-kendaraan-bermotor-warna-dasar-putih-akan-dilengkapi-teknologi-rfid-apakah-pengertiannya</span>',
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
        '<span style="font-weight: 400;">Kementerian Komunikasi dan Informatika mendorong peran serta dunia usaha untuk ikut terlibat dalam inisiatif pembangunan </span><i><span style="font-weight: 400;">smart city, </span></i><span style="font-weight: 400;">sehingga inisiatif pengembangan kota cerdas juga dikerjakan oleh pemerintah daerah, investor dan sektor swasta. Ketika ketiga hal tersebut berkolaborasi dengan baik, diharapkan masyarakat akan mendapat pelayanan publik yang lebih baik.</span>',
    },
    content: {
      rendered:
        '<span style="font-weight: 400;">Kementerian Komunikasi dan Informatika mendorong peran serta dunia usaha untuk ikut terlibat dalam inisiatif pembangunan </span><i><span style="font-weight: 400;">smart city, </span></i><span style="font-weight: 400;">sehingga inisiatif pengembangan kota cerdas juga dikerjakan oleh pemerintah daerah, investor dan sektor swasta. Ketika ketiga hal tersebut berkolaborasi dengan baik, diharapkan masyarakat akan mendapat pelayanan publik yang lebih baik.</span>\n\n<span style="font-weight: 400;">Direktur </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;">Layanan Aplikasi Informatika Pemerintahan (</span><span style="font-weight: 400;">LAIP) Ditjen Aptika, Bambang Dwi Anggono memberi contoh mal pelayanan publik yang tidak hanya diselenggarakan oleh pemerintah, namun juga bekerjasama dengan </span><i><span style="font-weight: 400;">fintech, marketplace, </span></i><span style="font-weight: 400;">dan sebagainya. </span>\n\n<span style="font-weight: 400;">Sistem </span><i><span style="font-weight: 400;">ticketing </span></i><span style="font-weight: 400;">juga sudah banyak yang terintegrasi dan </span><i><span style="font-weight: 400;">smart transportation </span></i><span style="font-weight: 400;">pun sudah mulai dikolaborasikan. Inisiatif-inisiatif tersebut banyak muncul di tahun 2022 ini, </span><span style="font-weight: 400;">jelasnya usai acara Forum SPBE sebagai Perwujudan Pemerintahan yang Adaptif, Kolaboratif dan Berkelanjutan, Sahid Jaya Hotel, Jakarta Pusat, Rabu (30/11/2022).</span>\n\n<span style="font-weight: 400;">Menurut Direktur LAIP, saat ini terdapat sekitar 200 daerah yang turut serta menjadi bagian dalam program </span><i><span style="font-weight: 400;">smart city</span></i><span style="font-weight: 400;"> dan akan terus bertambah sebanyak 50 kabupaten/kota di tahun 2023 mendatang.</span>\n\n<span style="font-weight: 400;">“Jadi ada di seluruh provinsi. Dalam program Smart City itu, Kominfo mendorong harmonisasi perencanaan di daerah supaya mereka memiliki suatu fokus pembangunan untuk kepentingan masyarakat luas,” tuturnya</span><span style="font-weight: 400;">.</span>\n\n<span style="font-weight: 400;">Fokus pembangunan </span><i><span style="font-weight: 400;">smart city</span></i><span style="font-weight: 400;"> didampingi Kemkominfo bersama kementerian/lembaga terkait, seperti Kementerian PUPR, Kementerian Dalam Negeri, Kementerian Keuangan, Kemenpan RB, dan Bappenas, agar program-program unggulan itu bisa lebih optimal memberikan manfaat kepada masyarakat.</span>\n\n<span style="font-weight: 400;">“Cukup banyak inisiatif yang dihasilkan oleh pemerintah daerah seperti inisiatif di sektor pendidikan, penanganan lingkungan, pengolahan energi untuk masyarakat, peningkatan kesejahteraan, pemberdayaan pemuda, serta pemberdayaan anak,” tambah </span><span style="font-weight: 400;">Bambang.</span>\n<h3><b>Susun Master Plan, Perluas Jangkauan Kota Cerdas</b></h3>\n<span style="font-weight: 400;">Direktur LAIP Ditjen Aptika, </span><span style="font-weight: 400;">Bambang Dwi Anggono, </span><span style="font-weight: 400;">menyatakan saat ini Kementerian Kominfo juga telah memperluas program Menuju 100 Smart City tahun 2022 untuk kawasan Destinasi Pariwisata Super Prioritas (DPSP), menjadi kawasan pariwisata prioritas nasional (KPPN) dan Ibu Kota Negara (IKN) baru.</span>\n\n<span style="font-weight: 400;">“Jadi kita tidak hanya membuat </span><i><span style="font-weight: 400;">master plan</span></i><span style="font-weight: 400;"> IKN-nya saja, tetapi membangun daerah-daerah penyangganya menjadi satu ekosistem rencana induk. Itu sudah kita laksanakan di tahun ini, implementasinya pun sudah kita pantau,” jelas </span><span style="font-weight: 400;">Bambang.</span>\n\n<span style="font-weight: 400;">Inisiatif-inisiatif tersebut akan diharmonisasikan antar kota administrasi yang berbeda di wilayah IKN, sehingga daerah binaan menjadi satu kesatuan langkah untuk memperkuat program kerja, APBD dan sektor industri swasta. Bambang juga mengatakan bahwa Kementerian Komunikasi dan Informatika telah menyiapkan rencana </span><i><span style="font-weight: 400;">smart city</span></i><span style="font-weight: 400;"> IKN yang kebetulan bekerja sama dengan lingkungan/perkotaan di lingkungan IKN.</span>\n\n<span style="font-weight: 400;">Jadi, itulah rencana dan dorongan Kominfo dalam pengembangan </span><i><span style="font-weight: 400;">smart city </span></i><span style="font-weight: 400;">di Indonesia. Jika Anda tertarik untuk mencoba menyusun </span><i><span style="font-weight: 400;">master plan </span></i><span style="font-weight: 400;">atau butuh konsultasi terkait kota cerdas wilayah Anda, silahkan kunjungi akun Instagram @citiasiainc untuk informasi lebih lanjut. </span>\n\n<strong><a href="https://smartnation.id/kominfo-ingin-dunia-usaha-ikut-mendorong-kolaborasi-dalam-inisiatif-smart-city/">Referensi</a></strong>,',
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
        '<strong>Referensi:</strong>\n\n<span style="font-weight: 400;">Adikara, B. (2022, Oktober 4). </span><i><span style="font-weight: 400;">Sempat Stop 2 Tahun, Integrated Technology Event Kembali Digelar</span></i><span style="font-weight: 400;">. Retrieved from jawapos.com: https://www.jawapos.com/oto-dan-tekno/teknologi/04/10/2022/sempat-stop-2-tahun-integrated-technology-event-kembali-digelar/?amp</span>',
    },
    content: {
      rendered:
        '<strong>Referensi:</strong>\n\n<span style="font-weight: 400;">Adikara, B. (2022, Oktober 4). </span><i><span style="font-weight: 400;">Sempat Stop 2 Tahun, Integrated Technology Event Kembali Digelar</span></i><span style="font-weight: 400;">. Retrieved from jawapos.com: https://www.jawapos.com/oto-dan-tekno/teknologi/04/10/2022/sempat-stop-2-tahun-integrated-technology-event-kembali-digelar/?amp</span>\n\n<span style="font-weight: 400;">Wijayanto, N. (2022, Oktober 3). </span><i><span style="font-weight: 400;">Libatkan Industri Energi Terbarukan, Indonesia Gelar Pameran Teknologi Smart City</span></i><span style="font-weight: 400;">. Retrieved from ekbis.sindonews.com: https://ekbis.sindonews.com/read/902791/34/libatkan-industri-energi-terbarukan-indonesia-gelar-pameran-teknologi-smart-city-1664842205/10</span>',
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
        '<strong>Reference:</strong>\n\n<span style="font-weight: 400;">Commercial Acer. (2022, Januari 4). </span><span style="font-weight: 400;">Smart Living, Konsep Hidup Cerdas yang Dihadirkan Teknologi IoT. </span><a href="https://commercial.acerid.com/support/articles/smart-living-konsep-hidup-cerdas-yang-dihadirkan-teknologi-iot/"><span style="font-weight: 400;">https://commercial.acerid.com/support/articles/smart-living-konsep-hidup-cerdas-yang-dihadirkan-teknologi-iot/</span></a><span style="font-weight: 400;">&nbsp;</span>\n\n<span style="font-weight: 400;">Binus University. (2020, September</span><span style="font-weight: 400;">). Konsep Smart – Living Untuk Meningkatkan Produktivitas Karyawan. </span><a href="https://binus.ac.id/malang/2020/09/konsep-smart-living-untuk-meningkatkan-produktivitas-karyawan/"><span style="font-weight: 400;">https://binus.ac.id/malang/2020/09/konsep-smart-living-untuk-meningkatkan-produktivitas-karyawan/</span></a><span style="font-weight: 400;">&nbsp;</span>\n\n<span style="font-weight: 400;">Rumah 123.com. (2022, Oktober 22). </span><span style="font-weight: 400;">Mengenal Konsep Smart Living dan Rekomendasi Huniannya. </span><a href="https://www.rumah123.com/panduan-properti/tips-properti-100595-smart-living-id.html"><span style="font-weight: 400;">https://www.rumah123.com/panduan-properti/tips-properti-100595-smart-living-id.html</span></a><span style="font-weight: 400;">&nbsp;</span',
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
        '<i><span style="font-weight: 400;">Sponge City</span></i><span style="font-weight: 400;"> atau dikenal dengan Kota Spons merupakan wilayah yang berperan mampu menahan air hujan agar tidak langsung melimpas ke saluran-saluran drainase dan mampu meningkatkan peresapan ke dalam tanah sehingga tidak menyebabkan banjir, selain itu dapat mempengaruhi kualitas dan kuantitas air melalui penyaringan tanah dan penyimpanan dalam tanah (akuifer). </span>',
    },
    content: {
      rendered:
        '<i><span style="font-weight: 400;">Sponge City</span></i><span style="font-weight: 400;"> atau dikenal dengan Kota Spons merupakan wilayah yang berperan mampu menahan air hujan agar tidak langsung melimpas ke saluran-saluran drainase dan mampu meningkatkan peresapan ke dalam tanah sehingga tidak menyebabkan banjir, selain itu dapat mempengaruhi kualitas dan kuantitas air melalui penyaringan tanah dan penyimpanan dalam tanah (akuifer). </span>\r\n\r\n<i><span style="font-weight: 400;">Sponge City</span></i><span style="font-weight: 400;"> merupakan gambaran yang telah dibuat oleh pemerintah dalam pembangunan Ibu Kota Nusantara (IKN) melalui Rencana Induk IKN yang tertuang di Undang-Undang Nomor 3 Tahun 2022 tentang IKN. </span>\r\n\r\n<span style="font-weight: 400;">Rencana Induk IKN menjelaskan bahwa IKN akan memadukan tiga konsep perkotaan, meliputi IKN sebagai kota hutan (</span><i><span style="font-weight: 400;">forest city</span></i><span style="font-weight: 400;">), kota spons (</span><i><span style="font-weight: 400;">sponge city)</span></i><span style="font-weight: 400;"> dan kota cerdas (</span><i><span style="font-weight: 400;">smart city</span></i><span style="font-weight: 400;">). Rencana Induk tersebut bertujuan untuk membangun ibu kota dengan meminimalisir dampak negatif terhadap lingkungan sekitar.</span>\r\n\r\n<span style="font-weight: 400;">Untuk mendukung perencanaan ini, IKN dirancang dengan ruang terbuka hijau yang luas, terdistribusi merata, dan tersambung dalam satu-kesatuan tata hidrologis untuk menahan dan menyimpan air serta meningkatkan kualitas ekosistem perkotaan dan keanekaragaman hayati sehingga menciptakan ruang budaya dan rekreasi yang nyaman.</span>\r\n\r\n<span style="font-weight: 400;">“Secara keseluruhan, kota menjadi lebih hijau, memiliki cadangan air dan menciptakan</span><i><span style="font-weight: 400;"> micro climate</span></i><span style="font-weight: 400;"> kawasan yang lebih </span><i><span style="font-weight: 400;">livable</span></i><span style="font-weight: 400;">”, kata Bernadus Ketua Majelis Kode Etik Ikatan Ahli Perencanaan Kota (IAP), Rabu (2/3/2022).</span>\r\n\r\n<span style="font-weight: 400;">Pemerintah memberikan fasilitas, seperti atap hijau (</span><i><span style="font-weight: 400;">green rooftop</span></i><span style="font-weight: 400;">) skala mikro pada bangunan-bangunan dan gedung-gedung untuk menahan air hujan sebelum diserap oleh tanah atau sebelum menjadi limpasan ke saluran drainase dan sungai. Adapun teknologi yang digunakan dalam pembangunan ini yaitu menggunakan material p</span><span style="font-weight: 400;">enerapan jalan dan trotoar berpori, </span><i><span style="font-weight: 400;">biosengkedan</span></i><span style="font-weight: 400;">, dan sistem </span><i><span style="font-weight: 400;">bioretensi. </span></i><span style="font-weight: 400;"> </span>\r\n\r\n<span style="font-weight: 400;">Oleh karena itu, implementasi </span><i><span style="font-weight: 400;">sponge city</span></i><span style="font-weight: 400;"> di Ibu Kota Nusantara (IKN) dapat membuat kota semakin cerdas dengan menerapkan fungsi manajemen air dan prevensi bencana banjir. Sehingga, banjir harus 100 persen teratasi, </span><span style="font-weight: 400;">artinya investasi harus dilakukan dengan membangun infrastruktur besar dalam pengamanan air.</span>',
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
        '<span style="font-weight: 400;">Setelah dinanti-nanti, piala dunia 2022 akhirnya dilaksanakan di Qatar sejak 20 November lalu dan diikuti oleh 32 negara. Selain pembukaan piala dunia yang menjadi perbincangan hangat karena menyatukan berbagai budaya, Qatar juga menarik perhatian publik dengan penerapan teknologi Artificial Intelligence (AI) di Piala Dunia 2022 yang canggih.&nbsp;</span>',
    },
    content: {
      rendered:
        '<span style="font-weight: 400;">Setelah dinanti-nanti, piala dunia 2022 akhirnya dilaksanakan di Qatar sejak 20 November lalu dan diikuti oleh 32 negara. Selain pembukaan piala dunia yang menjadi perbincangan hangat karena menyatukan berbagai budaya, Qatar juga menarik perhatian publik dengan penerapan teknologi Artificial Intelligence (AI) di Piala Dunia 2022 yang canggih.&nbsp;</span>\n\n<span style="font-weight: 400;">Teknologi kecerdasan buatan atau </span><i><span style="font-weight: 400;">artificial intelligence </span></i><span style="font-weight: 400;">digunakan oleh Qatar selama kejuaraan Piala Dunia berlangsung. Kabarnya, lebih dari 100 teknisi dipekerjakan Qatar untuk memonitor berjalannya pertandingan Piala Dunia 2022. Selain itu, terdapat sebuah ruangan di Ibukota Qatar, Doha yang berisi ratusan layar yang memperlihatkan penonton menyaksikan pertandingan Piala Dunia 2022.&nbsp;</span>\n\n<span style="font-weight: 400;">Lebih dari 1,2 juta penggemar diharapkan hadir di Qatar untuk Piala Dunia. Qatar telah mendirikan perangkat teknologi yang menggunakan kecerdasan buatan untuk mengawasi penonton, memprediksi gelombang massa, bahkan mengontrol suhu stadion.</span>\n\n<span style="font-weight: 400;">Teknisi akan bekerja sepanjang waktu di Aspire Command dan Control Center untuk memantau dengan cermat gambar yang berkedip di layar mereka melalui 200.000 unit data yang terintegrasi dari 22.000 kamera keamanan yang tersebar di delapan stadion Piala Dunia. Teknologi inilah yang membuat Qatar dapat mengoperasikan gerbang masuk, memastikan ada air yang mengalir, dan menjaga agar AC tetap berdengung dengan lancar.</span>\n\n<span style="font-weight: 400;">Teknologi pengenalan wajah akan memungkinkan kru memperbesar masing-masing 80.000 kursi di Stadion Lusail yang akan menjadi tuan rumah 10 pertandingan, termasuk final.</span>\n\n<span style="font-weight: 400;">Kamera keamanan di semua area stadion akan memastikan bahwa kontrol misi dapat memeriksa bagaimana setiap tempat beroperasi sebelum, selama, dan setelah acara.</span>\n\n<span style="font-weight: 400;">“Dengan satu klik Anda dapat beralih dari satu stadion ke stadion lainnya, karena kami memiliki semuanya terintegrasi melalui </span><i><span style="font-weight: 400;">platform </span></i><span style="font-weight: 400;">terpusat kami, dalam hal manajemen fasilitas, keamanan, kesehatan dan keselamatan, dan operasi ICT (teknologi informasi dan komunikasi),” kata Hamad Ahmed al-Mohannadi, Direktur Pusat keamanan.</span>\n\n<span style="font-weight: 400;">Teknologi AI juga digunakan untuk memantau kerumunan, yang membantu teknisi memprediksi lonjakan kerumunan dan mengatasi kepadatan yang nantinya informasi tersebut akan dibagikan dengan petugas keamanan. Tujuannya adalah untuk menghindari kekacauan seperti pada bulan Mei di Stade de France di Paris, saat polisi menggunakan gas air mata dan semprotan merica pada penggemar yang mencoba masuk ke final Liga Champions antara Liverpool dan Real Madrid.&nbsp;</span>\n\n<span style="font-weight: 400;">Tim teknis pusat Qatar mengatakan bahwa agregasi data memungkinkan mereka memperkirakan pola keramaian. Karena mereka mengetahui jumlah pasti orang yang diharapkan berdasarkan penjualan tiket, mereka dapat memprediksi lonjakan penonton. Lonjakan diprediksi berdasarkan waktu kedatangan, titik masuk atau bahkan pergerakan orang pada waktu tertentu.</span>\n\n<span style="font-weight: 400;">Qatar dengan bantuan AI dapat menghitung jumlah orang dalam suatu ruang dan menerapkan ambang batas. Jika ada lebih dari 100 orang di area tertentu, teknisi dapat melihat kemacetan, memeriksa kinerja gerbang masuk dan memastikan kelancaran arus orang masuk dan keluar stadion, jelas Abdulrahiman.</span>\n\n<span style="font-weight: 400;">Semua stadion pun ber-AC. Jika ada perbedaan suhu di dalam venue, sensor dari pusat komando dapat mengambil data dan meminta penyesuaian.</span>\n<h6><b>Qatar Menjadi Contoh Bahwa </b><b><i>Smart Branding </i></b><b>Tidak Hanya Soal Tempat Wisata</b></h6>\n<span style="font-weight: 400;">Qatar tidak hanya memberikan pembukaan Piala Dunia 2022 yang luar biasa dalam penerapan </span><i><span style="font-weight: 400;">smart branding</span></i><span style="font-weight: 400;">. Namun, Qatar juga menunjukkan sisi “negara maju” pada dunia dengan menerapkan teknologi canggih untuk menyalurkan informasi dengan cepat untuk siap siaga mengatasi masalah yang akan datang.&nbsp;</span>\n\n<span style="font-weight: 400;">Jika Anda butuh konsultansi penerapan </span><i><span style="font-weight: 400;">smart branding </span></i><span style="font-weight: 400;">untuk kota Anda, silahkan kunjungi akun Instagram @citiasiainc untuk informasi lebih lanjut.</span>\n\n<a href="https://smartnation.id/qatar-gunakan-serba-ai-di-piala-dunia-2022/"><strong>Referensi</strong></a>,',
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
      rendered: `<span style=\"font-weight: 400;\">Smart branding </span></><span style=\"font-weight: 400;\">merupakan salah satu pilar dari pendekatan </span><i><span style=\"font-weight: 400;\">smart city </span></i><span style=\"font-weight: 400;\">yang memiliki definisi strategi memasarkan sebuah kota atau wilayah sehingga mampu menarik ekosistem sekitar, baik itu warga, masyarakat umum, ataupun pelaku bisnis.&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Aspek </span><i><span style=\"font-weight: 400;\">smart branding </span></i><span style=\"font-weight: 400;\">tidak hanya terbatas pada pengembangan </span><i><span style=\"font-weight: 400;\">smart branding </span></i><span style=\"font-weight: 400;\">di area pariwisata. Menurut Hari Kusdaryanto, CIO Citiasia, ekosistem bisnis dan ekonomi kreatif juga menarik untuk dikembangkan.&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Ketika memilih area pariwisata untuk dikembangkan sebagai </span><i><span style=\"font-weight: 400;\">smart branding, </span></i><span style=\"font-weight: 400;\">Hari melihat masih banyak daerah yang implementasinya kurang tepat karena masih terlalu fokus pada destinasi yang sebenarnya bisa lebih dari itu.</span>\n\n<span style=\"font-weight: 400;\">Hari menjelaskan penilaian </span><i><span style=\"font-weight: 400;\">smart branding</span></i><span style=\"font-weight: 400;\"> di pagelaran Indonesia Smart Nation Awards (ISNA) pada 17 November 2022 lalu, “Kalau hanya ‘jualan’ air terjun, akan selalu ada air terjun yang lebih indah,” tambah Hari.&nbsp;</span>`,
    },
    content: {
      rendered: `<span style=\"font-weight: 400;\">Smart branding </span></i><span style=\"font-weight: 400;\">merupakan salah satu pilar dari pendekatan </span><i><span style=\"font-weight: 400;\">smart city </span></i><span style=\"font-weight: 400;\">yang memiliki definisi strategi memasarkan sebuah kota atau wilayah sehingga mampu menarik ekosistem sekitar, baik itu warga, masyarakat umum, ataupun pelaku bisnis.&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Aspek </span><i><span style=\"font-weight: 400;\">smart branding </span></i><span style=\"font-weight: 400;\">tidak hanya terbatas pada pengembangan </span><i><span style=\"font-weight: 400;\">smart branding </span></i><span style=\"font-weight: 400;\">di area pariwisata. Menurut Hari Kusdaryanto, CIO Citiasia, ekosistem bisnis dan ekonomi kreatif juga menarik untuk dikembangkan.&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Ketika memilih area pariwisata untuk dikembangkan sebagai </span><i><span style=\"font-weight: 400;\">smart branding, </span></i><span style=\"font-weight: 400;\">Hari melihat masih banyak daerah yang implementasinya kurang tepat karena masih terlalu fokus pada destinasi yang sebenarnya bisa lebih dari itu.</span>\n\n<span style=\"font-weight: 400;\">Hari menjelaskan penilaian </span><i><span style=\"font-weight: 400;\">smart branding</span></i><span style=\"font-weight: 400;\"> di pagelaran Indonesia Smart Nation Awards (ISNA) pada 17 November 2022 lalu, “Kalau hanya ‘jualan’ air terjun, akan selalu ada air terjun yang lebih indah,” tambah Hari.&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Objek wisata air terjun akan lebih diminati wisatawan jika tersedia amenitas atau fasilitas pendukung yang memadai. “Contohnya perjalanan ke sana mudah, ada tempat ganti yang layak di lokasi, dan lain sebagainya,” tambah Hari mencontohkan</span><span style=\"font-weight: 400;\">.</span>\n\n<span style=\"font-weight: 400;\">Keterlibatan masyarakat juga penting dalam menyukseskan </span><i><span style=\"font-weight: 400;\">smart branding. </span></i><span style=\"font-weight: 400;\">Hari mengambil contoh Kabupaten Banyuwangi yang berhasil mengajak warga untuk berpartisipasi melalui program Smart Kampung. Melalui program tersebut, warga mendapat akses internet dan literasi digital agar mampu mengembangkan diri. </span><span style=\"font-weight: 400;\">&nbsp;</span><span style=\"font-weight: 400;\">“Sehingga warga desa atau karang taruna di sana mampu melakukan </span><i><span style=\"font-weight: 400;\">branding </span></i><span style=\"font-weight: 400;\">sendiri terhadap kampungnya,” tambah Hari.&nbsp;&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Karena selain memperkaya daya tarik sebuah wilayah, inovasi yang lahir dari warga itu sendiri lebih terjaga keberlanjutannya sehingga pemerintah dapat fokus mengerjakan amenitas besar seperti membuat bandara, pelebaran jalan, dan lain-lain.&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Pemerintah daerah seharusnya juga aktif melakukan kerjasama atau </span><i><span style=\"font-weight: 400;\">co-creation</span></i><span style=\"font-weight: 400;\"> dengan pelaku usaha. Contohnya untuk menjual produk unggulan UMKM secara online, pemerintah dapat melakukan kerjasama dengan marketplace yang sudah ada.&nbsp;</span>\n\n<span style=\"font-weight: 400;\">“Cara ini lebih efektif dibanding membangun e-</span><i><span style=\"font-weight: 400;\">commerce</span></i><span style=\"font-weight: 400;\"> sendiri,” tambah Hari. Pemerintah daerah juga bisa mengambil peran dengan memberi kemudahan pengusaha dalam mendapatkan izin usaha atau pendaftaran merek.</span>\n\n<span style=\"font-weight: 400;\">Pemerintah daerah lebih baik fokus pada tugas pokok dan fungsinya, seperti kebijakan, infrastruktur, dan literasi warga. Dengan begitu, keberlanjutan inisiatif </span><i><span style=\"font-weight: 400;\">smart branding</span></i><span style=\"font-weight: 400;\"> pun dapat selalu terjaga.&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Jadi, saat akan menerapkan </span><i><span style=\"font-weight: 400;\">smart branding </span></i><span style=\"font-weight: 400;\">sebaiknya sebuah daerah tidak hanya terpaku pada pariwisata dan memperhatikan aspek lain yang bisa menjadi potensi. Jika Anda butuh konsultansi, silahkan kunjungi akun Instagram @citiasiainc untuk informasi lebih lanjut.</span>\n\n<a href=\"https://smartnation.id/implementasi-smart-branding-tidak-hanya-soal-wisata/\"><em><strong>Reference</strong></em></a>`,
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
        '<p style="text-align: justify;"><span style="font-weight: 400;">Indonesia Smart Nation Award (ISNA) 2022 kembali diadakan secara langsung setelah dua tahun lamanya. ISNA diadakan oleh Citiasia Center For Smart Nation yang sebelumnya telah berhasil menggelar ISNA 2015, 2016, 2019, 2020, dan akan diselenggarakan tahun ini pada hari Kamis, 17 November 2022 di Garuda Main Hall 1 (First Floor) - ICE BSD, Tangerang.</span></p>\n<p style="text-align: justify;"><span style="font-weight: 400;">Pada tahun ini, ISNA membawa tema talkshow “Smart City Innovation for Post-Pandemic Economic Recovery”. Tema ini dibawa dengan harapan berbagai daerah di Indonesia dapat menunjukkan inisiatif dan upaya pemulihan ekonomi setelah pandemi COVID-19. ISNA 2022 juga diharapkan menjadi kesempatan pemerintah untuk mendorong ekosistem inovasi ekonomi. Selain itu, rangkaian acara ISNA 2022 meliputi Indobuildtech Expo, Talkshow, dan Awarding.</span></p>\n<p style="text-align: justify;"><span style="font-weight: 400;">Dari 34 provinsi, 93 kota, 416 kabupaten di Indonesia, hanya 35 daerah yang menerima penghargaan ISNA 2020 lalu. Kira-kira tahun ini, daerah mana saja yang akan menjadi pemenang ISNA?&nbsp;</span></p>\n<p style="text-align: justify;"><span style="font-weight: 400;">Ikuti terus perkembangan ISNA di akun Instagram @citiasiainc dan @smartnation.id&nbsp; </span></p>',
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
        '<span style="font-weight: 400;">Pemerintah Kabupaten Batang terpilih sebagai penerima apresiasi The 4th ISNA 2020 melalui pengembangan inovasi layanan </span><i><span style="font-weight: 400;">Drive Thru</span></i><span style="font-weight: 400;"> di Mal Pelayanan Publik (MPP) Batang, (Infopublik.id, 2020). MPP Batang merupakan yang ketiga di Jawa Tengah sebagai percontohan, dikarenakan </span><span style="font-weight: 400;">MPP Batang menjadi MPP pertama di Indonesia yang memiliki layanan </span><i><span style="font-weight: 400;">Drive Thru</span></i><span style="font-weight: 400;"> perpanjangan SIM A dan SIM B.</span>\n\n<span style="font-weight: 400;">Adanya inovasi ini menjadi solusi cerdas dalam memberikan pelayanan publik di era revolusi 5.0, maka tak heran jika layanan </span><i><span style="font-weight: 400;">Drive Thru</span></i><span style="font-weight: 400;"> terpilih sebagai pemenang yang diberikan langsung oleh </span><span style="font-weight: 400;">Kementerian Pendayagunaan Aparatur Negara, Reformasi Birokrasi (Kemenpan RB) Republik Indonesia dan Citiasia, Inc.&nbsp;</span>\n\n<span style="font-weight: 400;">Menurut Kadis Penanaman Modal dan Pelayanan Terpadu Satu Pintu (DMPTSP) Kabupaten Batang, Sri Purwaningsih menyatakan bahwa layanan </span><i><span style="font-weight: 400;">Drive Thru</span></i><span style="font-weight: 400;"> di Provinsi Jawa Timur itu cuma melayani SIM C tetapi di Kabupaten Batang ini dikembangkan lagi, selain melayani SIM C juga melayani&nbsp; SIM A. Layanan ini hanya ada satu di seluruh Indonesia yakni di Kabupaten Batang. Pengembangan inovasi ini merupakan kerjasama antara Pemerintah Daerah Kabupaten Batang dengan Polres Batang yang telah mempunyai komunikasi baik, (Rahmat, 2020).</span>\n\n<span style="font-weight: 400;">Masyarakat telah menerima dampak positif dengan adanya inovasi layanan</span><i><span style="font-weight: 400;"> Drive Thru</span></i><span style="font-weight: 400;"> dalam pembuatan SIM, hal ini terlihat bahwa di Mal Pelayanan Publik (MPP) Batang terus bertambah hingga 329 layanan dari 23 instansi. Pelayanannya dilakukan pada hari Senin dan Selasa dengan jumlah pengunjung fluktuatif.&nbsp;</span>\n\n<span style="font-weight: 400;">Adapun beberapa instansi yang memberikan layanan di MPP Batang di antaranya adalah DPMPTSP, DPRKP, Dishub, DLH, Polres Batang, KPP Pratama, dan Disdukcapil. Selain itu, BPN, Taspen, DPMPTSP Jawa Tengah, Kantor Imigrasi, BNP2TKI Jateng, BPJS, dan beberapa perbankan,&nbsp; (Radarsemarang, 2021).</span>\n\n<span style="font-weight: 400;">Penganugerahan apresiasi</span><i><span style="font-weight: 400;"> Indonesia Smart Nation Awards </span></i><span style="font-weight: 400;">(ISNA) terhadap inovasi-inovasi yang dilakukan oleh Kabupaten dan Kota di Indonesia diselenggarakan oleh Citiasia, Inc. yang merupakan sebuah perusahaan konsultan manajemen dan pembangunan </span><i><span style="font-weight: 400;">smart city.</span></i><span style="font-weight: 400;"> Citiasia, Inc. memiliki visi untuk mendukung kemajuan pembangunan di Indonesia melalui Gerakan Indonesia Smart Nation yang telah digagas sejak tahun 2015.</span>\n\n<span style="font-weight: 400;">Pada tahun </span><span style="font-weight: 400;">2022 </span><span style="font-weight: 400;">Citiasia, Inc. bersama </span><i><span style="font-weight: 400;">Citiasia Center For Smart Nation</span></i><span style="font-weight: 400;"> (CCSN) akan melaksanakan penganugerahan apresiasi </span><i><span style="font-weight: 400;">Indonesia Smart Nation Awards</span></i><span style="font-weight: 400;"> (ISNA) terhadap inovasi-inovasi yang dilakukan oleh kabupaten dan kota di Indonesia.</span>\n\n<span style="font-weight: 400;">P</span><span style="font-weight: 400;">emerintah Kabupaten Batang membuat </span><span style="font-weight: 400;">layanan </span><i><span style="font-weight: 400;">Drive Thru</span></i><span style="font-weight: 400;"> di Mal Pelayanan Publik (MPP) agar memudahkan masyarakat dalam membuat SIM, memperpanjang SIM dan sebagainya. Hal ini juga sebagai contoh agar kabupaten/kota lainnya dapat memberikan inovasi-inovasi lain serta berlomba-lomba dalam berinovasi lebih baik lagi.</span>\n\n<strong><a href="https://smartnation.id/inovasi-layanan-drive-thru-kabupaten-batang-sebagai-pemenang-isna-2020/">Referensi</a></strong>',
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
        "TRIBUNJATIM.COM, BANYUWANGI - Kabupaten Banyuwangi meraih penghargaan Indonesia Smart Nation Award (ISNA) 2020.\n\nBanyuwangi meraih award kategori Smart Society berupa inovasi penggunaan TIK dalam penanganan dampak sosial virus Corona ( Covid-19 ).\n\nPenghargaan tersebut diselenggarakan oleh Citiasia Center for Smart Nation (CCSN) dan tahun ini merupakan penyelenggaraan ke-4. Pada tahun ini, ISNA mengusung tema “Smart City 2020: Driving Innovation &amp; Productivity During The Global Pandemic”. ",
    },
    content: {
      rendered:
        'TRIBUNJATIM.COM, BANYUWANGI - Kabupaten Banyuwangi meraih penghargaan Indonesia Smart Nation Award (ISNA) 2020.\n\nBanyuwangi meraih award kategori Smart Society berupa inovasi penggunaan TIK dalam penanganan dampak sosial virus Corona ( Covid-19 ).\n\nPenghargaan tersebut diselenggarakan oleh Citiasia Center for Smart Nation (CCSN) dan tahun ini merupakan penyelenggaraan ke-4. Pada tahun ini, ISNA mengusung tema “Smart City 2020: Driving Innovation &amp; Productivity During The Global Pandemic”.\n\nInovasi yang berhasil membawa Banyuwangi meraih penghargaan kategori Smart Society adalah Cek Bantuan Sosial (Bansos) dalam Penanganan Covid-19.\n\nPada tahun 2020 ini, CCSN telah melakukan riset terhadap lebih dari 180 inovasi yang diinisiasi oleh pemerintah kota dan kabupaten dalam penanganan Covid-19 yang melibatkan lebih dari 500 partisipasi kabupaten dan kota di seluruh Indonesia.\n\nBupati Banyuwangi, Abdullah Azwar Anas menyampaikan terima kasih atas penghargaan yang diterima.\n\nDia menjelaskan, Banyuwangi melakukan penanganan yang sangat serius dalam melakukan pendataan bansos bagi warga yang terdampak pandemi.\n\n“Bansos ini sangat dibutuhkan oleh mereka yang terdampak. Sejumlah langkah dilakukan Banyuwangi untuk memastikan bansos dari pusat hingga daerah tersalur secara merata dan tepat sasaran kepada warga yang terdampak,” kata Abdullah Azwar Anas, Rabu (7/10/2020).\n\nUntuk keperluan tersebut, Banyuwangi membuka pelaporan online bantuan sosial (bansos) bagi warga terdampak pandemi Covid-19. Sistem pelaporan ini digunakan untuk menampung warga yang belum terdaftar di skema jaring pengaman sosial, baik dari pemerintah pusat, provinsi maupun kabupaten. Selain itu, warga bisa mengecek para penerima bansos dari pusat, provinsi, maupun kabupaten.\n\n“Kami menyadari situasi sangat dinamis saat awal pandemi. Ada kemungkinan warga terdampak belum menerima bantuan. Untuk itu, kami menyediakan pelaporan online, di samping warga bisa juga lapor ke desa atau kelurahan atau kecamatan,” ujarnya.\n\nPelaporan online tersebut terintegrasi dalam sebuah program Smart Kampung. Smart kampung yang digagas Pemkab Banyuwangi sejak 2016 ini memberikan banyak kemudahan dalam penanganan Covid-19, termasuk dalam pendataan penerima bantuan sosial (bansos).\n\nSelama ini, pemkab Banyuwangi telah melakukan pendataan warga miskin penerima bantuan dari pemerintah yang di-input ke dalam program Smart Kampung yang perekamannya by name by address by NIK.\n\n"Dari data yang sudah ada, kami tinggal kategorisasikan mana yang bantuan pusat, provinsi, maupun kabupaten. Karena datanya terintegrasi, yang sudah mendapat bantuan pusat tidak akan bisa mendapatkan bantuan provinsi. Kemungkinan terjadi penerima ganda sangat kecil," kata Abdullah Azwar Anas.\n\nDia melanjutkan, dalam pelaporan bansos online tersebut terdapat dua fitur. Pertama, pelaporan warga yang belum menerima bantuan. Warga bisa melaporkan dirinya sendiri atau melaporkan orang lain yang dinilai layak dibantu.\n\n”Basisnya adalah nomor induk kependudukan (NIK) yang kami silangkan dengan Smart Kampung yang telah mempunyai basis data lengkap semua penerima bantuan. Jadi misal si A melaporkan tetangganya, si B, nah padahal si B ternyata sudah terdaftar sebagai penerima bantuan, maka otomatis tertolak,” ujarnya.\n\nFitur kedua adalah pengecekan penerima bansos. Warga cukup memasukkan NIK untuk mengetahui apakah sudah termasuk daftar penerima bantuan atau belum.\n\n"Tinggal masukkan NIK, akan ketahuan sudah atau belum mendapatkan bantuan," kata Abdullah Azwar Anas.\n\nLaporan warga yang masuk akan diverifikasi dengan dua tahap. Pertama, NIK disilangkan dengan basis data Pemkab Banyuwangi di Smart Kampung. Jika NIK terdeteksi sebagai penerima bantuan, maka otomatis tertolak. Smart Kampung sendiri adalah sistem digitalisasi pelayanan publik hingga tingkat desa yang dikembangkan Pemkab Banyuwangi.\n\nVerifikasi kedua, ketika warga yang melapor memang belum menerima bansos lainnya, maka tim akan menilai kelayakannya.\n\n”Jika dinyatakan layak, maka bantuan disalurkan. Kami membikin SOP, bantuan tersalurkan paling lambat seminggu sejak dinyatakan layak,” ujarnya.\n\nEditor: Dwi Prastika\n\n&nbsp;\n\n<em>sumber: https://jatim.tribunnews.com/2020/10/07/inovasi-cek-bantuan-sosial-covid-19-banyuwangi-raih-indonesia-smart-nation-award-2020?page=2</em>',
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
      rendered: `READ.ID – Indonesia Smart City Investment Forum (ISCIF) talkshow kembali digelar oleh Citiasia Center for Smart Nation (CCSN) yang bermitra dengan PT Debindo – ITE dan didukung oleh PT Telkom Indonesia.\n\nDalam gelaran ini dibarengi dengan penganugerahan daerah-daerah pemenang The 4th Indonesia Smart Nation Award (ISNA) yang diselenggarakan secara daring pada Senin (5/10/2020) dengan tema Smart City 2020 yakni Driving Innovation and Productivity During The Global Pandemic.`,
    },
    content: {
      rendered: `READ.ID – Indonesia Smart City Investment Forum (ISCIF) talkshow kembali digelar oleh Citiasia Center for Smart Nation (CCSN) yang bermitra dengan PT Debindo – ITE dan didukung oleh PT Telkom Indonesia.\n\nDalam gelaran ini dibarengi dengan penganugerahan daerah-daerah pemenang The 4th Indonesia Smart Nation Award (ISNA) yang diselenggarakan secara daring pada Senin (5/10/2020) dengan tema Smart City 2020 yakni Driving Innovation and Productivity During The Global Pandemic.\n\nISCIF Talkshow dan penganugerahan ISNA 2020 melalui aplikasi Zoom dan live streaming YouTube diikuti oleh sekitar 600 peserta berbagai kalangan dari berbagai penjuru Nusantara, menjadi bagian dari hajatan besar tahunan IndoBuildTech Digital Fair 2020.\n\nDalam kesempatan itu, Citiasia juga mengumumkan 37 daerah penerima anugerah ISNA 2020. Inovasi-inovasi layanan daerah di masa pandemi diseleksi melalui kombinasi metode analisis Big data dan expert judgment, dengan kerangka smart city dan parameter mencakup ekonomi, Kesehatan, kualitas hidup, pelayanan, edukasi dan keberlanjutan.\n\nPada even bergengsi ini, Kabupatenen Blitar meraih penghargaan kategori Smart Branding dengan Inovasi Layanan Izin Usaha dan Investasi Bisa Dari Rumah Jemput Online Single Submission (OSS) Malam Hari Bisa atau disingkat Ini Baru Joss Banget Mas, yaitu satu inovasi layanan Dinas Penanaman Modal Pelayanan Terpadu Satu Pintu (DPMPTSP).\n\nKepala DPMPTSP Rully Wahyu Prasetyowanto mengungkapkan, Ini Baru Joss Banget Mas adalah inovasi pelayanan DPMPTSP Kabupaten Blitar di tengah pandemi Covid-19. Melalui inovasi ini, pelayanan secara online dengan memanfaatkan media sosial atau WhatsApp center.\n\n“Ternyata inovasi Ini Baru Joss Banget Mas yang sudah dipublikasikan pada media sosial dan internet beberapa bulan lalu menjadi perhatian dan penilaian dari Tim Indonesia Smart Nation Award (ISNA) 2020”, terang Rully, Jum’at (9/10/2020).\n\nIa menambahkan, layanan Ini Baru Joss Banget Mas adalah inovasi pelayanan DPMPTSP Kabupaten Blitar di tengah situasi pandemi Covid-19 berdasarkan petunjuk dan arahan Bupati, Sekda serta masukkan dari OPD terkait sehingga pelayanan dapat dilakukan secara online dengan memanfaatkan media sosial atau WhatsApp center.\n\n“Alhamdulillah, inovasi Ini Baru Joss Banget Mas mendapatkan apresiasi kategori Smart Branding di ajang ISNA 2020. Hal ini tentu memberikan semangat kepada kami untuk terus berinovasi memberikan pelayanan perizinan yang terbaik kepada masyarakat”, pungkasnya.\n\n(Adv/kmf/didik)\n\n<em>Sumber : https://www.read.id/dpmptsp-kabupaten-blitar-raih-penghargaan-smart-branding-2020/</em>\n<div id=\"gtx-trans\" style=\"position: absolute; left: -31px; top: 20px;\"></div>`,
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
      rendered: `<strong>KANIGARAN</strong>&nbsp;- Kota Probolinggo kembali mengukir prestasi. Kali ini Kota Probolinggo&nbsp; dinobatkan sebagai Smart Society Penguatan Kampung Tangguh, dalam ajang penghargaan Indonesia Smart Nation Award (ISNA) 2020, Senin (5/10), yang dilakukan secara virtual.\n\nPenghargaan yang diterima Wakil Wali (Wawali) Kota Probolinggo Mochammad Soufis Subri itu berdasarkan inovasi yang diciptakan Pemerintah Kota Probolinggo. Dalam penghargaan The 4th ISNA itu, kota ini berhasil menjadi daerah dengan peringkat terbaik melalui inovasi kategori penghargaan, Smart Society, bersanding dengan 5 kabupaten/kota lainnya sebagai daerah nominasi.\n\n<img src=\"https://portal.probolinggokota.go.id/images/berita/2020/IMG-20201005-WA0032.jpg\" alt=\"IMG 20201005 WA0032\">\n\nDari 514 kabupaten/kota, mengerucut menjadi 175 kabupaten/kota yang memiliki inovasi, totalnya 248 inovasi. Dan kembali mengerucut menjadi 183 inovasi yang berkaitan dengan COVID-19. Dari 183 inovasi ini juga diseleksi kembali dan ditemukan 60 inovasi murni dari Pemerintah Daerah dan ditetapkan 30 inovasi terbaik di ragam kategori; Smart Economy, Smart Goverment, Smart Branding, Smart Society, Smart Living, Smart Mention.\n\nPopulasi penelitiannya sendiri berdasarkan interest based sub-region pada kata kunci “COVID” dan “Inovasi” sebagai Proxy, atas citizen awareness pada issue COVID-19. Sekaligus sebagai proxy atas digital readiness masyarakat serta 100 kabupaten/kota G100SCN &amp; 63 kabupaten/kota Pemenang Lomba Tatanan New Normal sebagai variabel kontrol.\n\n“Untuk kategori Smart Society terbaik hanya ada lima daerah se-Indonesia. Yaitu Kota Probolinggo, Banyuwangi, Denpasar, Kabupaten Kendal dan Kabupaten Tegal,” ujarnya.\n\nPada Platfrom Smart Society atau Masyarakat Cerdas, Kota Probolinggo sangat konsen di sektor Penguatan Kampung Tangguh di tengah pandemi COVID-19. Meski masih dalam situasi dan kondisi pandemi, proses kehidupan bermasyarakat nyatanya tak terganggu. “Adanya kampung tangguh juga mendorong masyarakat untuk lebih taat dan tertib dalam menjalankan protokol kesehatan di lingkungannya,” terangnya.\n\nDi Kota Probolinggo, ada 33 kampung tangguh yang tersebar di 29 kelurahan sehingga penerapan ketangguhan secara menyeluruh dapat dilakukan secara maksimal. Wawali Subri menambahkan, kehadiran kampung tangguh merupakan inovasi Pemkot Probolinggo dengan tujuan masyarakat aware (peduli) dengan pencegahan penyebaran COVID-19.\n\nDimana ketangguhan itu sendiri, lanjut Subri, tidak hanya boleh dimiliki satu dua kelurahan saja, melainkan semua kelurahan yang ada. Tentu dengan didukung kerja sama yang baik antara Pemkot, TNI dan Polri. Sehingga kampung tangguh yang ada di Kota Probolinggo tidak hanya tangguh terkait penanganan COVID-19, tapi juga bergerak bagaimana menghidupkan sektor&nbsp; ekonomi sekaligus menyelesaikan dampak sosial yang muncul.\n\n“Dalam kesempatan ini, izinkan kami juga mengucapkan terima kasih dan apresiasi yang setinggi-tingginya, kepada TNI-Polri, relawan kampung tangguh di tiap-tiap RT/RW sampai kecamatan bahkan relawan di tingkat kota, yang selalu memberikan dukungan pada kami sehingga suasana kondusif dapat terjaga di tengah situasi pandemi. Sekaligus melalui penghargaan ini, semoga menjadi triger dan motivasi kami untuk membangun Kota Probolinggo lebih baik lagi,” tandasnya.\n\n<img src=\"https://portal.probolinggokota.go.id/images/berita/2020/IMG-20201005-WA0034.jpg\" alt=\"IMG 20201005 WA0034\">\n\nTak hanya sebagai ajang penghargaan semata, ISNA 2020 juga diisi dengan giat seperti Bussiness Presentation oleh Telkom Indonesia dan 2 sesi talkshow Indonesia Smart City Investment Forum 2020 dengan menggandeng narasumber di bidangnya masing-masing.\n\nSebagai sebuah penghargaan yang diberikan kepada daerah-daerah dengan pencapaian terbaik dalam pelaksanaan smart city / smart region sesuai framework yang dikembangkan oleh Citiasia Inc., ISNA 2020 dilaksanakan dengan melalui beberapa tahapan, yaitu proses penilaian indeks dan penjurian oleh para pakar di bidang smart city di Indonesia.\n\nSementara itu, Chairman Citiasia, Cahyana Ahmadjayadi, menyampaikan selamat bagi daerah yang berprestasi. Ia mengatakan, banyak daerah yang terus berpacu dan berinovasi menuju smart city. “Selamat bagi daerah pemenang. Melalui ISNA, semua daerah konsisten meningkatkan daya saing melalui smart city,” ujarnya.\n\nPenghargaan bergengsi ini sudah empat kali digelar sejak 2015 lalu. Melalui Gerakan Bangsa Cerdas, Citiasia terus berkomitmen untuk menjaga semangat Bangsa Indonesia Cerdas dengan memberikan apresiasi terhadap inovasi terbaik di masa yang bergejolak di tahun 2020. “Dengan banyaknya inovasi di sektor digital ini semoga Visi Indonesia Smart Nation segera terwujud,” pungkasnya.<strong><em>&nbsp;(Sonea)</em></strong>\n\n&nbsp;\n\n<em>sumber:&nbsp;https://portal.probolinggokota.go.id/index.php/k2/k2-category/1766-penguatan-kampung-tangguh-di-kota-probolinggo-mendapat-apresiasi-isna-2020</em>`,
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
      rendered: `PAREPARE, BACAPESAN.COM – Kota Parepare kembali mendapat penghargaan prestesius di tingkat nasional. Kali ini dalam ajang “Indonesia Smart Nation Award (ISNA) 2020”.\n\nPenghargaan yang disaksikan secara virtual oleh Walikota Parepare melalui Wakilnya, Pangerang Rahim, Senin, (5/10/2020) diberikan lantaran Kota Parepare terpilih sebagai penerima apresiasi atas inovasi Penerapan New Normal pada Wisata Salo’ Karajae.`,
    },
    content: {
      rendered: `PAREPARE, BACAPESAN.COM – Kota Parepare kembali mendapat penghargaan prestesius di tingkat nasional. Kali ini dalam ajang “Indonesia Smart Nation Award (ISNA) 2020”.\n\nPenghargaan yang disaksikan secara virtual oleh Walikota Parepare melalui Wakilnya, Pangerang Rahim, Senin, (5/10/2020) diberikan lantaran Kota Parepare terpilih sebagai penerima apresiasi atas inovasi Penerapan New Normal pada Wisata Salo’ Karajae.\n\nSebagai pemrakarsa, Direktur Utama Citisia Inc, Farid Subkhan mengatakan, Pemerintah Kota Parepare di bawah nakhoda Walikota Parepare Taufan Pawe sukses mendorong lahirnya inovasi dan produktivitas khususnya pada bidang kepariwisataan di masa pandemi.\n\nMeskipun di tengah gempuran Corona Virus Disease 2019 (Covid-19), namun Kota Parepare dinilai mampu menjaga eksistensi kepariwisataannya melalui inovasi penerapan New Normal yang dilakukan instansi Dinas Pemuda, Olahraga, dan Pariwisata (Disporapar) Parepare.\n\nDalam event tahunan keempat kalinya tersebut, Kota Parepare merupakan satu dari 30 kota dan kabupaten terbaik di Indonesia yang meraih penghargaan dengan kategori berbeda. Khusus kategori Apresiasi Smart Branding, Kota Parepare menerima penghargaan kategori itu bersama tiga daerah lainnya di Indonesia, yakni Kabupaten Blitar, Kota Pekalongan dan Kabupaten Trenggalek.\n\n“Penyeleksian kita lakukan secara ketat dan selektif dengan melibatkan kementerian, lembanga pemerintahan dan organisasi internasional serta pemerintah daerah di Indonesia,” ujar Farid Subkhan.\n\nInovasi tersebut lanjut dia, diharapkan dapat menjadi contoh terhadap pemerintah kota dan kabupaten lain di Indonesia dalam mengembangkan ide serta kreativitas terhadap penanganan Covid-19.\n\nTerpisah, Wali Kota Parepare, HM Taufan Pawe mengaku bangga atas capaian itu. Menurut Taufan, meskipun pandemi namun inovasi dan kreatifitas tidak boleh terpuruk. Bahkan Taufan mengharapkan semua SKPD terus berinovasi dalam memulihkan ekonomi, meskipun pandemi masih belum melandai.\n\n“Walaupun kondisi Covid-19 tetapi ekonomi kita di Parepare masih cukup stabil. Salah satu pendorong stabilnya ekonomi kita ada pada pilar kepariwisataan dan penghargaan yang diterima hari ini adalah bukti bahwa Pemerintah Kota Parepare selalu ada dan selalu berkarya,” ujar Taufan Pawe.\n\n<em>sumber:&nbsp;https://bacapesan.com/2020/10/05/pemkot-parepare-raih-penghargaan-smart-nation-award-2020/</em>`,
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
      rendered: `Batam (gokepri.com) – Dua aplikasi milik Pemko&nbsp;<a href=\"http://batam.go.id/\">Batam</a>&nbsp;dianugerahi Indonesian Smart Nation Award 2020. Batam dianggap sebagai kota yang berinovasi menjadi kota pintar atau smart city.\n\nDua penghargaan itu adalah Smart Economy dan Platfrom Belajar Mengajar Terbaik. Penghargaan tersebut diterima langsung oleh Sekretaris Daerah (Sekda) Kota Batam, Jefridin Hamid, melalui virtual di Kantor Wali Kota Batam, Senin (5/10/2020).`,
    },
    content: {
      rendered: `Batam (gokepri.com) – Dua aplikasi milik Pemko&nbsp;<a href=\"http://batam.go.id/\">Batam</a>&nbsp;dianugerahi Indonesian Smart Nation Award 2020. Batam dianggap sebagai kota yang berinovasi menjadi kota pintar atau smart city.\n\nDua penghargaan itu adalah Smart Economy dan Platfrom Belajar Mengajar Terbaik. Penghargaan tersebut diterima langsung oleh Sekretaris Daerah (Sekda) Kota Batam, Jefridin Hamid, melalui virtual di Kantor Wali Kota Batam, Senin (5/10/2020).\n\nDalam penghargaan The 4th Indonesia Smart Nation Award (ISNA) ini, Batam berhasil menjadi terbaik melalui inovasi Aplikasi Bakulan dan memiliki Platfrom Belajar dan Mengajar terbaik. Inovasi yang dimiliki Batam dinilai menjadi contoh semua daerah se-Indonesia untuk mengembangkan ide serta kreativitas terutama saat Covid-19.\n\n“Pimpinan terus mendorong kita berinovasi, dan alhamdulillah inovasi yang kita buat mendapat apresiasi dan menguatkan Batam sebagai ‘smart city’,” kata Sekretaris Daerah Kota Batam Jefridin Hamid usai menerima penghargaan secara virtual di Batam, Senin (5/10/2020).\n\nIa menyatakan, penghargaan itu berdasarkan inovasi yang dirancang Pemkot Batam yaitu Aplikasi Bakulan untuk Smart Economy dan platfrom belajar dan mengajar.\n\nAplikasi Bakulan merupakan inovasi Pemkot Batam yang diluncurkan melalui Dinas Ketahanan Pangan dan Pertanian (DKPP) Kota Batam.\n\nAplikasi berbasis android tersebut merupakan layanan daring penjualan produk pertanian Batam yang dihasilkan kelompok tani setempat.\n\nIa mengatakan, aplikasi itu dirancang untuk memudahkan masyarakat memperoleh bahan pangan, juga guna mendukung usaha pertanian lokal agar punya wadah untuk menjual hasil pertaniannya.\n\nDengan berbelanja di Bakulan, juga mendukung para petani dan peternak.\n\n“Konsumen juga dimudahkan karena tak perlu ke luar rumah, barang yang dibutuhkan diantar langsung ke alamat. Apalagi di masa COVID-19 harus meminimalisir kontak fisik, tentu sangat membantu,” kata dia.\n\n&nbsp;\n\n<em>sumber:&nbsp;https://gokepri.com/penghargaan-aplikasi-bakulan-dan-platform-belajar-kota-batam-jadi-yang-terbaik/</em>`,
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
      rendered: `<b>LAMONGAN</b>&nbsp;- Pemerintah Kabupaten Lamongan dibawah kepemimpinan Bupati Fadeli banyak mendapatkan penghargaan dan apresiasi dari berbagai instansi tingkat provinsi dan nasional.\n\nDan yang terbaru terpilih sebagai salah satu penerima apresiasi The 4th&nbsp;<i>Indonesian Smart Nation Award</i>&nbsp;(ISNA) 2020 melalui inovasi Pasar Online Lamongan (POL) kategori&nbsp;<i>smart economy.</i>`,
    },
    content: {
      rendered: `<b>LAMONGAN</b>&nbsp;- Pemerintah Kabupaten Lamongan dibawah kepemimpinan Bupati Fadeli banyak mendapatkan penghargaan dan apresiasi dari berbagai instansi tingkat provinsi dan nasional.\n\nDan yang terbaru terpilih sebagai salah satu penerima apresiasi The 4th&nbsp;<i>Indonesian Smart Nation Award</i>&nbsp;(ISNA) 2020 melalui inovasi Pasar Online Lamongan (POL) kategori&nbsp;<i>smart economy.</i>\n\nISNA merupakan gerakan yang telah digagas oleh&nbsp;<i>Citiasia Inc&nbsp;</i>guna mendorong kemajuan dan menghidupkan inovasi-inovasi smart city pada tingkat kota dan kabupaten di Indonesia.\n\nPOL sendiri merupakan inovasi yang memanfaatkan aplikasi berbasis Android untuk membantu transaksi antara pedagang pasar tradisional dengan pembeli tanpa harus bertatap muka. POL dipilih Lamongan sebagai inovasi yang sesuai untuk dihidupkan pada masa pandemi COVID-19.\n\n“Metode pembayaran pembeli saat menggunakan jasa POL juga fleksibel, pembeli dapat memilih transaksi secara non tunai melalui mobile banking, scan kode batang QRIS ataupun tunai,” ujar Pj Sekkab Lamongan Herry Pranoto saat menghadiri The 4th Indonesia Smart Nation Award (ISNA) 2020 secara virtual di Command Center Pemkab Lamongan, Senin malam (5/10).\n\nDengan adanya POL, lanjutnya, transaksi jual beli pedagang tradisional dapat tetap berjalan dengan menggunakan sarana digital.\n\n\"POL ini selain menjadi solusi di masa pandemi, juga sebagai bagian inovasi untuk mendukung Kabupaten Lamongan sebagai smart city,\" ungkapnyaAmongan,\n\nLebih lanjut, Heri juga berharap semoga apresiasi ini bisa menjadi penyemangat dan inspirasi untuk terus berinovasi dan memberikan pelayanan yang terbaik bagi masyarakat Lamongan.\n\n&nbsp;\n\n<em>Sumber:&nbsp;https://suaraindonesia.co.id/news/pemerintahan/5f7bd103c7f38/wujudkan-smart-city-pasar-online-lamongan-terima-apresiasi-dari-isna</em>`,
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "Citiasia bersama Oracle Memberikan Beasiswa TI Senilai Rp 2,3 Miliar kepada Mahasiswa di Indonesia"
    ),
    date_gmt: new Date("1 July 2022").toISOString(),
    modified_gmt: new Date("1 July 2022").toISOString(),
    status: "publish",
    categories: [148, 82, 83, 85, 86, 129],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2022/07/cover_artikel_13-1536x896.jpg",
    comment_status: "open",
    title: {
      rendered:
        "Citiasia bersama Oracle Memberikan Beasiswa TI Senilai Rp 2,3 Miliar kepada Mahasiswa di Indonesia",
    },
    excerpt: {
      rendered: `span style=\"font-weight: 400;\">Semakin canggihnya perkembangan teknologi menjadikan bidang teknologi informatika menjadi salah satu bidang paling diminati anak muda yang sudah familiar dengan dunia teknologi. Sehingga, Citiasia Institute dan&nbsp; Oracle University Indonesia meluncurkan program beasiswa yang diberi nama Citiasia – Oracle Scholarship 2016, senilai lebih dari Rp 2,3 miliar.</span>`,
    },
    content: {
      rendered: `<span style=\"font-weight: 400;\">Semakin canggihnya perkembangan teknologi menjadikan bidang teknologi informatika menjadi salah satu bidang paling diminati anak muda yang sudah familiar dengan dunia teknologi. Sehingga, Citiasia Institute dan&nbsp; Oracle University Indonesia meluncurkan program beasiswa yang diberi nama Citiasia – Oracle Scholarship 2016, senilai lebih dari Rp 2,3 miliar.</span>\n\n<span style=\"font-weight: 400;\">Program beasiswa ini diberikan bersama dengan dimulainya secara resmi paket-paket program sertifikasi internasional Oracle Unviersity, beasiswa ini diperuntukkan bagi mahasiswa dari perguruan tinggi di seluruh Indonesia yang dikelola oleh Citiasia Institute.</span>\n\n<span style=\"font-weight: 400;\">Program yang ditawarkan pada sertifikasi Oracle University di antaranya adalah </span><i><span style=\"font-weight: 400;\">applications database</span></i><span style=\"font-weight: 400;\">, </span><i><span style=\"font-weight: 400;\">enterprise management</span></i><span style=\"font-weight: 400;\">, serta </span><i><span style=\"font-weight: 400;\">java and middleware</span></i><span style=\"font-weight: 400;\">. Lalu, </span><span style=\"font-weight: 400;\">paket beasiswa yang ditawarkan adalah 225 paket </span><i><span style=\"font-weight: 400;\">training </span></i><span style=\"font-weight: 400;\">elektronik (</span><i><span style=\"font-weight: 400;\">e-kit</span></i><span style=\"font-weight: 400;\">) gratis dan 1.975 paket </span><i><span style=\"font-weight: 400;\">training </span></i><span style=\"font-weight: 400;\">elektronik (</span><i><span style=\"font-weight: 400;\">e-kit</span></i><span style=\"font-weight: 400;\">) dengan potongan harga untuk menu </span><i><span style=\"font-weight: 400;\">training </span></i><span style=\"font-weight: 400;\">Oracle Database 11g (</span><i><span style=\"font-weight: 400;\">Introduction to SQL 2.0 dan Administration Workshop I 2.0</span></i><span style=\"font-weight: 400;\">) dan </span><i><span style=\"font-weight: 400;\">Java Programming Language</span></i><span style=\"font-weight: 400;\"> (Java SE 6, 1.1). Selain itu, Citiasia Institute juga menyediakan paket Ujian Gratis (</span><i><span style=\"font-weight: 400;\">free examination</span></i><span style=\"font-weight: 400;\">) untuk sertifikasi Oracle bagi peserta-peserta terbaik.</span>\n\n<span style=\"font-weight: 400;\">Farid Subkhan, CEO Citiasia, Inc. menyatakan bahwa tujuan dari pemberian sertifikasi ini adalah untuk membuat mahasiswa siap terjun ke dunia kerja.</span>\n\n<span style=\"font-weight: 400;\">\"Kelebihan sertifikasi pada beasiswa ini adalah adanya </span><i><span style=\"font-weight: 400;\">skill</span></i><span style=\"font-weight: 400;\">. Dengan </span><i><span style=\"font-weight: 400;\">skill</span></i><span style=\"font-weight: 400;\"> penguasaan kompetensi yang di dapat dari Oracle maka akan setara dengan mereka yang telah disertifikasi dari India maupun Singapura,\" ungkap Farid Subkhan di Warung Daun, Jakarta, Selasa (9/2/2016).</span>\n\n<span style=\"font-weight: 400;\">Dr. Cahyana Ahmadjayadi, </span><i><span style=\"font-weight: 400;\">Chairman dan Founder</span></i><span style=\"font-weight: 400;\"> Citiasia mengingatkan bonus demografi Indonesia hanya akan berarti bila anak-anak muda memiliki </span><i><span style=\"font-weight: 400;\">knowledge</span></i><span style=\"font-weight: 400;\"> serta </span><i><span style=\"font-weight: 400;\">skill</span></i><span style=\"font-weight: 400;\"> yang dibutuhkan pasar kerja masa depan, khususnya untuk menjadi pemenang dalam mengarungi era ekonomi </span><i><span style=\"font-weight: 400;\">digital</span></i><span style=\"font-weight: 400;\">.</span>\n\n<span style=\"font-weight: 400;\">\"TIK menjadi </span><i><span style=\"font-weight: 400;\">enabler</span></i><span style=\"font-weight: 400;\"> penting untuk mewujudkan cita-cita masyarakat madani. Apalagi Indonesia saat ini mempunyai hampir 60 juta </span><i><span style=\"font-weight: 400;\">digital native</span></i><span style=\"font-weight: 400;\">, yakni generasi muda yang familiar dengan teknologi </span><i><span style=\"font-weight: 400;\">digital</span></i><span style=\"font-weight: 400;\"> dan aktif berselancar di dunia maya,” Ujar&nbsp; Dr. Cahyana Ahmadjayadi.</span>\n\n<span style=\"font-weight: 400;\">Sebagai </span><i><span style=\"font-weight: 400;\">official partner</span></i><span style=\"font-weight: 400;\"> dari Oracle University melalui kerangka </span><i><span style=\"font-weight: 400;\">Workforce Development Program</span></i><span style=\"font-weight: 400;\"> untuk berbagai program </span><i><span style=\"font-weight: 400;\">training </span></i><span style=\"font-weight: 400;\">dan sertifikasi Oracle meyakini, sertifikasi ini akan memberi nilai tambah bagi mahasiswa atau tenaga kerja.</span>\n\n<span style=\"font-weight: 400;\">\"Ini disebabkan piranti lunak produk Oracle menjadi pilihan utama perusahaan-perusahaan serta organisasi terkemuka dunia,\" lanjut Dr. Cahyana Ahmadjayadi.</span>\n\n<span style=\"font-weight: 400;\">Menurut Farid Subkhan, beasiswa yang diberikan serta program sertifikasi Oracle yang ditawarkan merefleksikan visi Citiasia Institute untuk menyediakan program </span><i><span style=\"font-weight: 400;\">training </span></i><span style=\"font-weight: 400;\">SDM yang berkualitas dan berstandar internasional.</span>\n\n<span style=\"font-weight: 400;\">\"Juga menunjukkan komitmen Citiasia sebagai penggagas Gerakan Indonesia Smart Nation, yang berkontribusi untuk mewujudkan </span><i><span style=\"font-weight: 400;\">smart regions</span></i><span style=\"font-weight: 400;\"> melalui paket </span><i><span style=\"font-weight: 400;\">training </span></i><span style=\"font-weight: 400;\">elektronik </span><i><span style=\"font-weight: 400;\">(e-kit</span></i><span style=\"font-weight: 400;\">) sehingga bisa diakses oleh mahasiswa-mahasiswa di seluruh penjuru nusantara,\" ucap Faridh Subkhan.</span>\n\n<span style=\"font-weight: 400;\">Larasati Sedaryawan, Director Oracle University Indonesia mengatakan, program sertifikasi Oracle mendapatkan </span><i><span style=\"font-weight: 400;\">feedback</span></i><span style=\"font-weight: 400;\"> yang sangat positif dari peserta di seluruh dunia dengan tingkat kepuasan hampir 100&nbsp; persen.</span>\n\n<span style=\"font-weight: 400;\">\"Survei kami juga menyebutkan sertifikasi Oracle berkontribusi signifikan untuk peningkatan karir dan pendapatan di tempat kerja masing-masing,\" ujar Larasati Sedaryawan.</span>`,
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug("Bimtek Smart City Branding 2018"),
    date_gmt: new Date("3 November 2018").toISOString(),
    modified_gmt: new Date("3 November 2018").toISOString(),
    status: "publish",
    categories: [83, 88, 129],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2018/11/2018-11-12_144620-750x460-1-750x450.jpg",
    comment_status: "open",
    title: {
      rendered: "Bimtek Smart City Branding 2018",
    },
    excerpt: {
      rendered: `JAKARTA. APEKSI dan CITIASIA menyelenggarakan Bimbingan Teknis Smart City Branding tanggal 1-3 November 2018 dalam rangka peningkatan kapasitas pemerintah kota dalam mengoptimalkan branding daerah melalui Pariwisata, Bisnis dan Wajah Kota serta sebagai bereaupreneur yang handal dalam meningkatkan daya saing melalui strategi Smart City Branding.`,
    },
    content: {
      rendered: `JAKARTA. APEKSI dan CITIASIA menyelenggarakan Bimbingan Teknis Smart City Branding tanggal 1-3 November 2018 dalam rangka peningkatan kapasitas pemerintah kota dalam mengoptimalkan branding daerah melalui Pariwisata, Bisnis dan Wajah Kota serta sebagai bereaupreneur yang handal dalam meningkatkan daya saing melalui strategi Smart City Branding.\n\n[caption id=\"\" align=\"alignnone\" width=\"1200\"]<img class=\"size-medium\" src=\"https://apeksi.net/images/apeksi/2018/bimtek-smartbranding-1.jpg\" alt=\"Bambang Dwi Anggono - Plt Direktur E-Government Kementerian Komunikasi dan Informasi menyampaikan materi Smart City Branding.\" width=\"1200\" height=\"675\"> <em>Bambang Dwi Anggono - Plt Direktur E-Government Kementerian Komunikasi dan Informasi menyampaikan materi Smart City Branding.</em>[/caption]\n\n&nbsp;\n\nTema yang disampaikan adalah Strategi Pengembangan dan Pemasaran Pariwisata, Investasi dan Citra Kota Berkelas Dunia. Dengan narasumber: Kementerian Komunikasi dan Informasi, Perencanaan dan Perancangan Kota ITB dan CITIASIA yang selama ini sudah mendampingi beberapa kota dan kabupaten.\n\n&nbsp;\n\n[caption id=\"\" align=\"alignnone\" width=\"1200\"]<img class=\"size-medium\" src=\"https://apeksi.net/images/apeksi/2018/bimtek-smartbranding-2.jpg\" alt=\"Peserta bimtek, antara lain dari: Kota Tual, Kota Cirebon, Kota Probolinggo, Kabupaten Sleman, Bappenas dan Lembaga Swadaya Masyarakat.\" width=\"1200\" height=\"800\"> Peserta bimtek, antara lain dari: Kota Tual, Kota Cirebon, Kota Probolinggo, Kabupaten Sleman, Bappenas dan Lembaga Swadaya Masyarakat.[/caption]`,
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "Bimbingan Teknis “Smart City Branding Untuk Aparatur Pemda"
    ),
    date_gmt: new Date("7 November 2016").toISOString(),
    modified_gmt: new Date("7 November 2016").toISOString(),
    status: "publish",
    categories: [82, 129],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2016/11/web-training-01-750x460-1-750x450.jpg",
    comment_status: "open",
    title: {
      rendered: "Bimbingan Teknis “Smart City Branding Untuk Aparatur Pemda”",
    },
    excerpt: {
      rendered: `<b>LAMONGAN</b>&nbsp;- Pemerintah Kabupaten Lamongan dibawah kepemimpinan Bupati Fadeli banyak mendapatkan penghargaan dan apresiasi dari berbagai instansi tingkat provinsi dan nasional.\n\nDan yang terbaru terpilih sebagai salah satu penerima apresiasi The 4th&nbsp;<i>Indonesian Smart Nation Award</i>&nbsp;(ISNA) 2020 melalui inovasi Pasar Online Lamongan (POL) kategori&nbsp;<i>smart economy.</i>`,
    },
    content: {
      rendered: `<b>LAMONGAN</b>&nbsp;- Pemerintah Kabupaten Lamongan dibawah kepemimpinan Bupati Fadeli banyak mendapatkan penghargaan dan apresiasi dari berbagai instansi tingkat provinsi dan nasional.\n\nDan yang terbaru terpilih sebagai salah satu penerima apresiasi The 4th&nbsp;<i>Indonesian Smart Nation Award</i>&nbsp;(ISNA) 2020 melalui inovasi Pasar Online Lamongan (POL) kategori&nbsp;<i>smart economy.</i>\n\nISNA merupakan gerakan yang telah digagas oleh&nbsp;<i>Citiasia Inc&nbsp;</i>guna mendorong kemajuan dan menghidupkan inovasi-inovasi smart city pada tingkat kota dan kabupaten di Indonesia.\n\nPOL sendiri merupakan inovasi yang memanfaatkan aplikasi berbasis Android untuk membantu transaksi antara pedagang pasar tradisional dengan pembeli tanpa harus bertatap muka. POL dipilih Lamongan sebagai inovasi yang sesuai untuk dihidupkan pada masa pandemi COVID-19.\n\n“Metode pembayaran pembeli saat menggunakan jasa POL juga fleksibel, pembeli dapat memilih transaksi secara non tunai melalui mobile banking, scan kode batang QRIS ataupun tunai,” ujar Pj Sekkab Lamongan Herry Pranoto saat menghadiri The 4th Indonesia Smart Nation Award (ISNA) 2020 secara virtual di Command Center Pemkab Lamongan, Senin malam (5/10).\n\nDengan adanya POL, lanjutnya, transaksi jual beli pedagang tradisional dapat tetap berjalan dengan menggunakan sarana digital.\n\n\"POL ini selain menjadi solusi di masa pandemi, juga sebagai bagian inovasi untuk mendukung Kabupaten Lamongan sebagai smart city,\" ungkapnyaAmongan,\n\nLebih lanjut, Heri juga berharap semoga apresiasi ini bisa menjadi penyemangat dan inspirasi untuk terus berinovasi dan memberikan pelayanan yang terbaik bagi masyarakat Lamongan.\n\n&nbsp;\n\n<em>Sumber:&nbsp;https://suaraindonesia.co.id/news/pemerintahan/5f7bd103c7f38/wujudkan-smart-city-pasar-online-lamongan-terima-apresiasi-dari-isna</em>`,
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "Presiden Jokowi Usung Konsep Smart City dan Smart Living di Ibu Kota Negara Baru!"
    ),
    date_gmt: new Date("2 November 2022").toISOString(),
    modified_gmt: new Date("2 November 2022").toISOString(),
    status: "publish",
    categories: [148, 82, 145, 101, 85, 86, 139, 137, 112],
    tags: [],
    author: 1,
    featured_media:
      "https://drive.google.com/uc?export=download&id=1EEIpHvPJ-a8lCAXGxVQWlk1bIVkmyybB",
    comment_status: "open",
    title: {
      rendered:
        "Presiden Jokowi Usung Konsep Smart City dan Smart Living di Ibu Kota Negara Baru!",
    },
    excerpt: {
      rendered: `<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Indonesia tengah bersiap untuk pindah ke Ibukota baru yang nantinya akan berlokasi di Penajam Paser Utara, Kalimantan Timur. Dilansir dari Nusa Daily dari detikFinance, Jokowi mengatakan bahwa Ibukota Negara Baru (IKN) akan menerapkan konsep </span><i><span style=\"font-weight: 400;\">smart city </span></i><span style=\"font-weight: 400;\">dan </span><i><span style=\"font-weight: 400;\">smart living</span></i><span style=\"font-weight: 400;\"> sehingga kendaraan yang digunakan harus ramah lingkungan dan identik dengan masa depan. Sementara, sumber energi yang dipakai berasal dari </span><i><span style=\"font-weight: 400;\">renewable</span></i><span style=\"font-weight: 400;\"> industri.&nbsp;</span></p>`,
    },
    content: {
      rendered: `<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Indonesia tengah bersiap untuk pindah ke Ibukota baru yang nantinya akan berlokasi di Penajam Paser Utara, Kalimantan Timur. Dilansir dari Nusa Daily dari detikFinance, Jokowi mengatakan bahwa Ibukota Negara Baru (IKN) akan menerapkan konsep </span><i><span style=\"font-weight: 400;\">smart city </span></i><span style=\"font-weight: 400;\">dan </span><i><span style=\"font-weight: 400;\">smart living</span></i><span style=\"font-weight: 400;\"> sehingga kendaraan yang digunakan harus ramah lingkungan dan identik dengan masa depan. Sementara, sumber energi yang dipakai berasal dari </span><i><span style=\"font-weight: 400;\">renewable</span></i><span style=\"font-weight: 400;\"> industri.&nbsp;</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Kemudian, Jokowi juga memastikan hanya kendaraan listrik yang boleh digunakan di sana.&nbsp;</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">“80 persen sumber energinya adalah berasal dari renewable industri, mobil di sana nanti harus mobil listrik,” kata Jokowi saat Pre Market Sounding Proyek IKN di Jakarta, Selasa, 18 Oktober 2022.&nbsp;</span></p><img class=\" wp-image-9915\" src=\"http://smartnation.id/wp-content/uploads/2022/10/jokowi.png\" alt=\"\" width=\"847\" height=\"487\"> Presiden Jokowi saat menghadiri Pre-Market Sounding Proyek Ibukota Negara<br>Sumber: Rekaman Youtube KompasTV Live[/caption]\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Selain kendaraan yang menggunakan listrik, Jokowi juga ingin transportasi umum yang digunakan sebagai mobilisasi di IKN hampir seluruhnya sudah otonom alias tanpa supir.&nbsp;</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">“Kemudian, 80 persen transportasi umum adalah </span><i><span style=\"font-weight: 400;\">autonomous vehicle </span></i><span style=\"font-weight: 400;\">(otonom) tanpa awak, tanpa sopir,” ujarnya.&nbsp;</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Pejalan kaki dan pengguna sepeda akan menjadi prioritas di IKN Nusantara. Dengan begitu, kawasan tersebut terbebas dari macet seperti yang terjadi di DKI Jakarta.&nbsp;</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Selain itu, aksesibilitas di IKN baru akan memberi kemudahan bagi penduduknya, ia mengatakan jarak tempuh ke lokasi strategis hanya memerlukan waktu sekitar 10 menit.&nbsp;</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Bagaimana, hebat bukan? Dengan menerapkan </span><i><span style=\"font-weight: 400;\">smart city </span></i><span style=\"font-weight: 400;\">dan </span><i><span style=\"font-weight: 400;\">smart living </span></i><span style=\"font-weight: 400;\">di Ibukota Negara Baru nanti, kualitas hidup masyarakat pastinya akan meningkat dan serba cepat. Selain itu, berbagai kemudahan dan kesejahteraan masyarakat pun akan dirasakan.</span></p>\n<a href=\"https://smartnation.id/presiden-jokowi-usung-konsep-smart-city-dan-smart-living-di-ibu-kota-negara-baru/\"><em><strong>Reference</strong></em></a>`,
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "Beberapa Teknologi Penanganan Banjir di Sejumlah Negara, Apakah Indonesia Punya?"
    ),
    date_gmt: new Date("21 October 2022").toISOString(),
    modified_gmt: new Date("21 October 2022").toISOString(),
    status: "publish",
    categories: [148, 82, 145, 101, 85, 86, 139, 137, 112],
    tags: [],
    author: 1,
    featured_media:
      "https://drive.google.com/uc?export=download&id=1K6l_pk7XQYPRhKO38QnNtnWCRVrauPZd",
    comment_status: "open",
    title: {
      rendered:
        "Beberapa Teknologi Penanganan Banjir di Sejumlah Negara, Apakah Indonesia Punya?",
    },
    excerpt: {
      rendered: `<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Akhir-akhir ini, banjir kembali menjadi topik hangat. Terutama, banjir di Jakarta akibat intensitas hujan yang cukup tinggi sejak hari Kamis, 13 Oktober 2022. Selain karena disebabkan hujan, hal yang membuat Jakarta rentan banjir adalah letak geografisnya yang berada di </span><span style=\"font-weight: 400;\">dataran rendah yaitu di antara hulu sungai dan pesisir. Beberapa waktu lalu, Korea Selatan juga dilanda banjir bandang yang disebabkan oleh curah hujan yang tinggi. </span></p>`,
    },
    content: {
      rendered: `<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Akhir-akhir ini, banjir kembali menjadi topik hangat. Terutama, banjir di Jakarta akibat intensitas hujan yang cukup tinggi sejak hari Kamis, 13 Oktober 2022. Selain karena disebabkan hujan, hal yang membuat Jakarta rentan banjir adalah letak geografisnya yang berada di </span><span style=\"font-weight: 400;\">dataran rendah yaitu di antara hulu sungai dan pesisir. Beberapa waktu lalu, Korea Selatan juga dilanda banjir bandang yang disebabkan oleh curah hujan yang tinggi. </span></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Lantas, untuk menangani banjir, apa teknologi yang digunakan negara untuk mengatasi banjir?</span></p>\n<span style=\"color: #000000;\"><b>G-Cans, Tokyo</b></span>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Bicara soal teknologi, Jepang adalah ahlinya. Jepang memiliki teknologi yang digunakan untuk mengatasi persoalan banjir di Tokyo dengan nama proyek G-Cans.</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">G-Cans adalah kanal penampungan air bawah tanah di Kasukabe, Tokyo yang memiliki tinggi 2,54 meter atau setara dengan gedung enam lantai. Proyek ini sudah dimulai dari tahun 1993 sampai 2006 dan menghabiskan biaya sebesar US$2,6 miliar. </span></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Kanal banjir G-Cans memiliki puluhan menara silinder setinggi 70 meter dan memiliki lima ruangan slinder, dan katanya G-Cans ini bisa menampung hingga 13 juta galon air lho!</span></p>\n<span style=\"color: #000000;\"><b>Thames Barrier, London</b></span>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Teknologi yang digunakan di Inggris untuk menangani banjir adalah Thames Barrier yang dibangun pada 1974 dan selesai delapan tahun setelahnya. Thames Barrier melintang selebar 520 meter di sungai Thames dan bisa melindungi sekitar 125 meter kota London.</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Kanal Thames Barrier terdiri dari 10 gerbang baja dan masing-masing memiliki lubang lebih dari 20 meter dan berat 3.700 ton yang bisa tertutup dan terbuka. Thames Barrier bisa menahan beban air lebih dari 9.000 ton.</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Saat terjadi badai atau air pasang, Thames Barrier akan otomatis tertutup berkat adanya sensor yang tertanam di masing-masing gerbang. Tujuan penutupan gerbang ini agar aliran air dari hulu sungai berhenti dan tidak mengalir ke pusat kota.</span></p>\n\n<h6><span style=\"color: #000000;\"><b>SMART, Malaysia</b></span></h6>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Malaysia negara tetangga kita juga memiliki teknologi penanggulangan banjir bernama Stormwater Management and Road Tunnel (SMART). SMART adalah terowongan yang dibangun secara khusus untuk mengendalikan luapan air dari sungai di sekitar kota Kuala Lumpur.</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">SMART sudah dibangun sejak 2003 dan empat tahun setelahnya terowongan SMART yang memiliki diameter 13,2 meter dan panjang 9,7 kilometer tersebut dianggap cukup efektif mengendalikan bencana banjir di Malaysia karena memiliki wadah penampung air berkapasitas 3 juta meter kubik.</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Menariknya, terowongan SMART juga berfungsi untuk mengurangi tingkat kemacetan di Malaysia. Sebab, apabila curah hujan tidak tinggi, terowongan yang pembangunannya dikabarkan memakan biaya hingga Rp 7 triliun tersebut berfungsi sebagai jalan tol bagi pengendara transportasi darat.</span></p>\n\n<h4><b>Apakah Indonesia Memiliki Teknologi untuk Menangani Banjir? </b></h4>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Indonesia sendiri sudah mulai menciptakan inovasi-inovasi baru untuk menangani banjir, seperti situs Petabencana.id yang </span><span style=\"font-weight: 400;\">memanfaatkan penggunaan media sosial dalam situasi darurat untuk mengumpulkan, menyortir, dan menampilkan informasi risiko secara waktu-nyata (</span><i><span style=\"font-weight: 400;\">real-time</span></i><span style=\"font-weight: 400;\">).</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Selain itu, terdapat aplikasi-aplikasi untuk memantau banjir di Indonesia yang mulai berkembang sebagai langkah awal untuk penanganan banjir. Nah, Citiasia pun juga memiliki teknologi canggih untuk mengatasi permasalahan banjir, yaitu fitur </span><i><span style=\"font-weight: 400;\">water level monitoring (flood management) </span></i><span style=\"font-weight: 400;\">yang merupakan salah satu fitur dari PJU Pintar yang tidak hanya sebagai solusi penerangan aktivitas di malam hari, tapi juga berfungsi sebagai sensor banjir. </span></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Jadi, itulah contoh teknologi penanganan banjir di dunia dan juga Indonesia. Jika Anda tertarik dengan fitur sensor banjir dari produk PJU Pintar kami, silahkan kunjungi akun Instagram @citiasainc untuk mendapatkan informasi lebih lanjut.</span></p>\n<a href=\"https://smartnation.id/beberapa-teknologi-penanganan-banjir-di-sejumlah-negara-apakah-indonesia-punya/\"><em><strong>Reference</strong></em></a>`,
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug("Inovasi Metaverse untuk Smart Branding"),
    date_gmt: new Date("30 September 2022").toISOString(),
    modified_gmt: new Date("30 September 2022").toISOString(),
    status: "publish",
    categories: [148, 82, 145, 101, 85, 86, 139, 137, 112],
    tags: [],
    author: 1,
    featured_media:
      "https://drive.google.com/uc?export=download&id=1ZC_bP2Pn8FppePARz0ZunSpsQXTFKPqV",
    comment_status: "open",
    title: {
      rendered: "Inovasi Metaverse untuk Smart Branding",
    },
    excerpt: {
      rendered: `<i><span style=\"font-weight: 400;\">Smart city </span></i><span style=\"font-weight: 400;\">memiliki 6 dimensi, salah satunya adalah </span><i><span style=\"font-weight: 400;\">smart branding. Smart branding </span></i><span style=\"font-weight: 400;\">adalah sebuah upaya membangun </span><i><span style=\"font-weight: 400;\">branding </span></i><span style=\"font-weight: 400;\">daerah yang lebih pintar sesuai dengan potensi dan peluang pengembangan daerah. Dalam meningkatkan daya saing daerah, </span><i><span style=\"font-weight: 400;\">smart city </span></i><span style=\"font-weight: 400;\">mengedepankan tiga sub-dimensi, yaitu pariwisata, bisnis, dan daerah.</span>`,
    },
    content: {
      rendered: `<i><span style=\"font-weight: 400;\">Smart city </span></i><span style=\"font-weight: 400;\">memiliki 6 dimensi, salah satunya adalah </span><i><span style=\"font-weight: 400;\">smart branding. Smart branding </span></i><span style=\"font-weight: 400;\">adalah sebuah upaya membangun </span><i><span style=\"font-weight: 400;\">branding </span></i><span style=\"font-weight: 400;\">daerah yang lebih pintar sesuai dengan potensi dan peluang pengembangan daerah. Dalam meningkatkan daya saing daerah, </span><i><span style=\"font-weight: 400;\">smart city </span></i><span style=\"font-weight: 400;\">mengedepankan tiga sub-dimensi, yaitu pariwisata, bisnis, dan daerah.</span>\n\n<i><span style=\"font-weight: 400;\">City branding </span></i><span style=\"font-weight: 400;\">adalah strategi pemasaran suatu kota untuk membuat </span><i><span style=\"font-weight: 400;\">positioning </span></i><span style=\"font-weight: 400;\">yang besar dan kuat dalam regional maupun secara global. Dilansir dari </span><i><span style=\"font-weight: 400;\">smart city </span></i><span style=\"font-weight: 400;\">Kulon Progo, </span><i><span style=\"font-weight: 400;\">smart branding </span></i><span style=\"font-weight: 400;\">bertujuan memberikan identitas dari kota yang memasarkan segala aktivitas dari kota terutama potensi pengembangan daerah, seperti wisata, budaya, produk lokal, dan landmark kota.</span>\n\n<span style=\"font-weight: 400;\">Dalam industri K-pop, terdapat sebuah inovasi </span><i><span style=\"font-weight: 400;\">smart branding </span></i><span style=\"font-weight: 400;\">yang penerapannya dilakukan menggunakan teknologi metaverse untuk mempromosikan musik mereka.&nbsp;</span>\n<h4><b>Manfaat Metaverse untuk </b><b><i>Smart Branding</i></b><b> Industri Musik K-Pop</b></h4>\n<span style=\"font-weight: 400;\">Dilansir dari CNBC Indonesia, Metaverse adalah sebuah ruang virtual, tempat seseorang membuat dan menjelajah bersama pengguna internet lainnya yang tidak berada pada ruang fisik yang sama dengan orang tersebut.</span>\n\n<span style=\"font-weight: 400;\">K-pop menggunakan metaverse untuk meningkatkan pengalaman penggemar dalam berinteraksi dengan artis, seperti pergi ke konser virtual, membeli </span><i><span style=\"font-weight: 400;\">merchandise</span></i><span style=\"font-weight: 400;\">, berinteraksi dengan artis atau melihat karya mereka. Artis K-pop yang menggunakan metaverse dalam penerapan musiknya adalah Aespa dari SM Entertainment.&nbsp;&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Aespa adalah </span><i><span style=\"font-weight: 400;\">girl group </span></i><span style=\"font-weight: 400;\">yang beranggotakan empat orang perempuan ditambah empat anggota avatar. Nama Aespa sendiri merupakan gabungan dari “ae” yang berarti</span><i><span style=\"font-weight: 400;\"> avatar x experience </span></i><span style=\"font-weight: 400;\">yang berarti pengalaman. Kemudian, kata ini dikolaborasi dengan kata dalam bahasa inggris yaitu </span><i><span style=\"font-weight: 400;\">aspect </span></i><span style=\"font-weight: 400;\">yang berarti aspek. Secara bahasa, Aespa berarti bertemu dengan dirimu yang lain sebagai avatar dan mengawali dunia baru.&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Secara tidak langsung, melalui penggunaan metaverse dalam musiknya, Aespa melakukan </span><i><span style=\"font-weight: 400;\">smart branding </span></i><span style=\"font-weight: 400;\">untuk negara asalnya, Korea Selatan. Sebab, promosi musik mereka juga dilakukan di Amerika Serikat, hal itu membantu Korea Selatan menjalin bisnis internasional dengan Amerika Serikat.&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Aespa juga menjadi perpanjangan tangan politik pemerintah Korsel yang diundang Persatuan Bangsa-Bangsa (PBB) untuk Pembangunan Berkelanjutan. Mereka membawakan pidato yang berjudul “Generasi Berikutnya ke Level Berikutnya”.&nbsp;&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Hal ini tentu membantu Korea Selatan untuk memperkuat citra mereka di ranah internasional, selain itu hal ini juga meningkatkan sumber utama ekspor Korea Selatan yaitu musik, film, televisi dan budaya.&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Apalagi, pemerintah Seoul juga melakukan pengembangan proyek metaverse, mereka berambisi untuk menjadikan Seoul sebagai pusat global untuk teknologi baru. Hal ini selaras dengan kehadiran Aespa sebagai grup K-Pop yang menggunakan teknologi metaverse</span>\n<h4><b>Keuntungan Metaverse dalam Industri K-Pop</b></h4>\n<span style=\"font-weight: 400;\">Keuntungan utama dari metaverse adalah fleksibilitas dan pilihan tak terbatas dari teknologi tersebut. Tidak ada batasan dalam menciptakan dunia virtual untuk karakter virtual yang akhirnya akan memperluas kreativitas untuk perusahaan dalam mengembangkan konsep.&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Metaverse juga menghapus batasan </span><i><span style=\"font-weight: 400;\">online performing. </span></i><span style=\"font-weight: 400;\">Terlebih saat pandemi yang mengurangi interaksi tatap muka antara penggemar dan artis, teknologi </span><i><span style=\"font-weight: 400;\">metaverse </span></i><span style=\"font-weight: 400;\">dapat membuat penggemar berinteraksi lebih canggih di dunia virtual.</span>\n<h4><b>Kekurangan Metaverse dalam Industri K-Pop.</b></h4>\n<span style=\"font-weight: 400;\">Terdapat kekurangan dan kekhawatiran tentang penerapan metaverse di industri K-Pop. Seperti isu </span><i><span style=\"font-weight: 400;\">deepfake porn </span></i><span style=\"font-weight: 400;\">yaitu video dan gambar tidak pantas yang diubah secara digital dimana pelaku mengganti wajah dalam video/gambar dengan wajah lain.&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Ancaman kejahatan gender berbasis </span><i><span style=\"font-weight: 400;\">online</span></i><span style=\"font-weight: 400;\"> juga bisa muncul, apalagi anggota virtual akan lebih rentan karena mereka bukan orang asli. Karena penyanyi virtual ini tidak nyata, mungkin hal ini menjadi mudah bagi pelaku untuk melakukannya.&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Masalah ini sebenarnya dapat dilihat bahkan sekarang, seperti dalam kasus Aespa, dimana para avatar mendapat pakaian yang lebih terbuka.</span><i><span style=\"font-weight: 400;\">&nbsp;</span></i>\n\n<span style=\"font-weight: 400;\">Itulah penjelasan mengenai </span><i><span style=\"font-weight: 400;\">inovasi </span></i><span style=\"font-weight: 400;\">metaverse untuk </span><i><span style=\"font-weight: 400;\">smart branding </span></i><span style=\"font-weight: 400;\">serta contoh penerapannya dalam industri musik K-Pop. Bagaimana menurut Anda?</span>\n\n<a href=\"https://smartnation.id/inovasi-metaverse-untuk-smart-branding/\"><em><strong>Reference</strong></em></a>`,
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "Asyik, Teknologi 6G Sudah Disiapkan. Apa Saja Manfaatnya?"
    ),
    date_gmt: new Date("22 September 2022").toISOString(),
    modified_gmt: new Date("22 September 2022").toISOString(),
    status: "publish",
    categories: [148, 82, 145, 101, 85, 86, 139, 137, 112],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2022/09/Artikel_23_Sept-1-1536x896.png",
    comment_status: "open",
    title: {
      rendered: "Asyik, Teknologi 6G Sudah Disiapkan. Apa Saja Manfaatnya?",
    },
    excerpt: {
      rendered: `<span style=\"font-weight: 400;\">Teknologi 6G mulai disiapkan oleh sejumlah negara, seperti China, Korea Selatan dan lain sebagainya. Tidak hanya itu, berbagai ahli pun berlomba-lomba melakukan penelitian untuk menemukan keunggulan jaringan 6G dan meluncurkannya. Hal ini dikarenakan seiring berkembang dan majunya teknologi, kebutuhan manusia pu n terus berubah.&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Tapi sebenarnya, apa itu teknologi 6G dan apa manfaatnya untuk sisi kehidupan?</span>\n<h3><b>Mengenal Teknologi 6G</b></h3>\n<span style=\"font-weight: 400;\">Sebelumnya, mungkin teknologi atau sinyal 5G jadi juara dan tercepat. Tapi sekarang, telah muncul teknologi 6G yang siap menggantikannya.&nbsp;</span>`,
    },
    content: {
      rendered: `<span style=\"font-weight: 400;\">Teknologi 6G mulai disiapkan oleh sejumlah negara, seperti China, Korea Selatan dan lain sebagainya. Tidak hanya itu, berbagai ahli pun berlomba-lomba melakukan penelitian untuk menemukan keunggulan jaringan 6G dan meluncurkannya. Hal ini dikarenakan seiring berkembang dan majunya teknologi, kebutuhan manusia pu n terus berubah.&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Tapi sebenarnya, apa itu teknologi 6G dan apa manfaatnya untuk sisi kehidupan?</span>\n<h3><b>Mengenal Teknologi 6G</b></h3>\n<span style=\"font-weight: 400;\">Sebelumnya, mungkin teknologi atau sinyal 5G jadi juara dan tercepat. Tapi sekarang, telah muncul teknologi 6G yang siap menggantikannya.&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Dilansir dari techtarget.com, teknologi 6G adalah generasi penerus teknologi seluler 5G. Jaringan 6G akan dapat menggunakan frekuensi yang lebih tinggi daripada jaringan 5G dan menyediakan kapasitas yang jauh lebih tinggi dan latensi yang jauh lebih rendah. Salah satu tujuan internet 6G adalah untuk mendukung komunikasi latensi satu mikrodetik. Kecepatan 6G bisa mencapai 1 TB per detik atau sekitar 8.000 kali lipat dari jaringan 5G.&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Teknologi 6G dapat meningkatkan kinerja teknologi 5G, hal ini juga akan memperluas cakupan kemampuan untuk mendukung aplikasi baru dan inovatif dalam konektivitas nirkabel, kognisi, penginderaan, dan pencitraan.</span>\n<h3><b>Keunggulan Jaringan 6G</b></h3>\n<span style=\"font-weight: 400;\">Keunggulan dari teknologi 6G ialah mampu menyediakan kapasitas yang lebih tinggi dan latensi yang jauh lebih rendah. Misalnya dalam mendukung komunikasi latensi satu mikrodetik, akan terasa seribu kali lebih cepat daripada </span><i><span style=\"font-weight: 400;\">throughput </span></i><span style=\"font-weight: 400;\">satu milidetik. Lalu tingkat kapasitas dan latensi akan mendukung konektivitas nirkabel, kognisi, penginderaan, dan pencitraan.&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Titik akses akan mampu melayani banyak akses ganda pembagian frekuensi orthogonal secara bersamaan dengan 6G.&nbsp; Jaringan </span><span style=\"font-weight: 400;\">6G menawarkan kelebihan terhadap 5G setidaknya berupa kecepatan transfer data, </span><i><span style=\"font-weight: 400;\">area traffic capacity</span></i><span style=\"font-weight: 400;\">, dan kepadatan koneksi yang jauh lebih baik.</span>\n<h3><b>Alasan Kita Membutuhkan Jaringan 6G</b></h3>\n<b>Konvergensi Teknologi</b>\n\n<span style=\"font-weight: 400;\">Jaringan seluler generasi keenam akan mengintegrasikan teknologi yang berbeda dengan sebelumnya, seperti pembelajaran mendalam dan analitik data besar. Pengenalan 5G telah membuka jalan bagi sebagian besar konvergensi ini.</span>\n\n<b>Komputasi Tepi</b>\n\n<span style=\"font-weight: 400;\">Kebutuhan untuk menerapkan komputasi tepi untuk memastikan </span><i><span style=\"font-weight: 400;\">throughput </span></i><span style=\"font-weight: 400;\">keseluruhan dan latensi rendah untuk solusi komunikasi yang sangat andal merupakan pendorong penting 6G.</span>\n\n<b><i>Internet of Things (IoT)</i></b>\n\n<span style=\"font-weight: 400;\">Kekuatan pendorong lainnya adalah kebutuhan untuk mendukung komunikasi mesin-ke-mesin pada IoT.</span>\n\n<b>Komputasi Kinerja Tinggi</b>\n\n<span style=\"font-weight: 400;\">Hubungan yang kuat telah diidentifikasi antara 6G dan HPC (</span><i><span style=\"font-weight: 400;\">High Performance Computing</span></i><span style=\"font-weight: 400;\">). Sementara sumber daya komputasi tepi akan menangani beberapa IoT dan data teknologi seluler, sebagian besar akan membutuhkan sumber daya HPC yang lebih terpusat untuk melakukan pemrosesan.</span>\n<h3><b>Jaringan 6G untuk </b><b><i>Smart City</i></b></h3>\n<span style=\"font-weight: 400;\">Selain untuk mempermudah hidup sehari-hari, jaringan 6G juga berpotensi untuk mendorong kemajuan </span><i><span style=\"font-weight: 400;\">smart city </span></i><span style=\"font-weight: 400;\">karena </span><i><span style=\"font-weight: 400;\">smart city </span></i><span style=\"font-weight: 400;\">selalu membutuhkan data untuk mencari solusi dan melakukan pengembangan.&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Kecepatan jaringan 6G akan membuat laju pengiriman, penerimaan serta pertukaran data menjadi lebih masif sehingga </span><i><span style=\"font-weight: 400;\">big data </span></i><span style=\"font-weight: 400;\">akan tercipta. Dengan begitu, segala proses data untuk </span><i><span style=\"font-weight: 400;\">smart city </span></i><span style=\"font-weight: 400;\">akan lebih cepat sehingga setiap kota juga lebih mudah dan cepat untuk memecahkan sesuatu.&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Selain itu, jaringan 6G akan memiliki implikasi besar pada pemerintah dan industri, seperti deteksi kejahatan, monitoring kesehatan, fitur pengenalan wajah, pengambilan keputusan di bidang-bidang penegakan hukum dan sistem kredit sosial, dan pengukuran kualitas udara.</span>\n\n<span style=\"font-weight: 400;\">Meskipun jaringan 6G masih disiapkan, manfaat-manfaat jaringan sinyal 6G sudah terlihat untuk kehidupan yang lebih baik. Bagaimana menurut Anda?</span>\n\n<a href=\"https://smartnation.id/asyik-teknologi-6g-sudah-disiapkan-apa-saja-manfaatnya/\"><em><strong>Reference</strong></em></a>`,
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug("Peran Big Data dalam Pembangunan Smart City"),
    date_gmt: new Date("16 September 2022").toISOString(),
    modified_gmt: new Date("16 September 2022").toISOString(),
    status: "publish",
    categories: [148, 82, 101, 139, 137, 112],
    tags: [],
    author: 1,
    featured_media:
      "https://drive.google.com/uc?export=download&id=11K7mQX_Oke7mSwk4ZaS-vCn8iTC30Ll-",
    comment_status: "open",
    title: {
      rendered: "Peran Big Data dalam Pembangunan Smart City",
    },
    excerpt: {
      rendered: `<span style=\"font-weight: 400;\">Seperti yang kita tahu, </span><i><span style=\"font-weight: 400;\">smart city</span></i><span style=\"font-weight: 400;\"> merupakan kota yang menggunakan sensor dan perangkat untuk memanfaatkan teknologi informasi dan internet secara maksimal dalam pengelolaan aset dalam suatu kota. Kemudian, perangkat dan sensor tersebut digunakan untuk mengumpulkan dan menganalisis data yang nanti hasilnya untuk mengoptimalkan pengelolaan kota, sumber daya, dan meningkatkan kualitas hidup.&nbsp;</span>`,
    },
    content: {
      rendered: `<span style=\"font-weight: 400;\">Seperti yang kita tahu, </span><i><span style=\"font-weight: 400;\">smart city</span></i><span style=\"font-weight: 400;\"> merupakan kota yang menggunakan sensor dan perangkat untuk memanfaatkan teknologi informasi dan internet secara maksimal dalam pengelolaan aset dalam suatu kota. Kemudian, perangkat dan sensor tersebut digunakan untuk mengumpulkan dan menganalisis data yang nanti hasilnya untuk mengoptimalkan pengelolaan kota, sumber daya, dan meningkatkan kualitas hidup.&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Dalam pembangunan </span><i><span style=\"font-weight: 400;\">smart city, </span></i><span style=\"font-weight: 400;\">terdapat inovasi teknologi yang memiliki peran penting yang bernama </span><i><span style=\"font-weight: 400;\">big data</span></i><span style=\"font-weight: 400;\">.</span>\n\n<span style=\"font-weight: 400;\">Sebelum meluncur lebih dalam tentang peran</span><i><span style=\"font-weight: 400;\"> big data</span></i><span style=\"font-weight: 400;\"> dalam pembangunan </span><i><span style=\"font-weight: 400;\">smart city, </span></i><span style=\"font-weight: 400;\">akan lebih baik kalau kamu tahu lebih dulu apa definisi dari </span><i><span style=\"font-weight: 400;\">big data</span></i><span style=\"font-weight: 400;\">.&nbsp;</span>\n<h4><b>Apa itu </b><b><i>big data</i></b><b>?</b></h4>\n<span style=\"font-weight: 400;\">Dilansir dari Binar Academy, </span><i><span style=\"font-weight: 400;\">big data </span></i><span style=\"font-weight: 400;\">adalah serangkaian proses yang terdiri dari data bervolume besar yang tidak terstruktur maupun terstruktur dan dipakai untuk mendukung aktivitas bisnis.&nbsp;</span>\n<h4><b>Bagaimana peran </b><b><i>big data</i></b><b> dalam pembangunan </b><b><i>smart city?</i></b></h4>\n<span style=\"font-weight: 400;\">Dilansir dari Blog GamaTechno, sebuah kota dapat dikatakan sebagai kota ‘cerdas’ apabila kota tersebut memiliki ciri seperti </span><i><span style=\"font-weight: 400;\">resilient city</span></i><span style=\"font-weight: 400;\"> (berdaya tahan), </span><i><span style=\"font-weight: 400;\">efficient city</span></i><span style=\"font-weight: 400;\"> (efisien), </span><i><span style=\"font-weight: 400;\">sustainable city</span></i><span style=\"font-weight: 400;\"> (berkelanjutan), </span><i><span style=\"font-weight: 400;\">eco city</span></i><span style=\"font-weight: 400;\"> (ramah lingkungan), </span><i><span style=\"font-weight: 400;\">liveable city</span></i><span style=\"font-weight: 400;\"> (layak hidup) dan lain sebagainya.Untuk memenuhi ciri-ciri tersebut, kebutuhan akan data menjadi salah satu isu utama. </span><i><span style=\"font-weight: 400;\">Big data </span></i><span style=\"font-weight: 400;\">adalah teknologi yang mampu menganalisis, mengintegrasi, sekaligus bekerja secara </span><i><span style=\"font-weight: 400;\">real time</span></i><span style=\"font-weight: 400;\"> demi mendukung kinerja sebuah kota cerdas. Karena itu, </span><i><span style=\"font-weight: 400;\">smart city </span></i><span style=\"font-weight: 400;\">membutuhkan </span><i><span style=\"font-weight: 400;\">big data.</span></i><span style=\"font-weight: 400;\">Dalam pembangunan </span><i><span style=\"font-weight: 400;\">smart city, </span></i><span style=\"font-weight: 400;\">cara penerapan dan bagaimana </span><i><span style=\"font-weight: 400;\">big data </span></i><span style=\"font-weight: 400;\">berperan sebagai berikut:</span>\n\n<b>1. Manajemen Transportasi yang Lebih Baik.</b>\n\n<span style=\"font-weight: 400;\">Adanya penerapan big data akan mempermudah proses pengolahan data dalam jumlah banyak dengan waktu yang cukup singkat. Artinya, hal tersebut akan menghemat waktu dan pengelolaan </span><i><span style=\"font-weight: 400;\">smart city </span></i><span style=\"font-weight: 400;\">pun berjalan dengan baik.&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Mengelola lalu lintas di kota-kota modern menjadi tugas yang menantang, namun big data memungkinkan pemerintah untuk mempelajari data transportasi masa lalu, informasi tersebut membantu kota mengetahui tren apa saja yang dapat mengurangi kemacetan lalu lintas dan&nbsp; untuk mengurangi jumlah kecelakaan melalui aplikasi sistem navigasi, kontrol sinyal, dan kartu pintar untuk pengemudi.</span>\n\n<b>2. Pengambilan Keputusan Lebih Cepat</b>\n\n<span style=\"font-weight: 400;\">Data yang dihasilkan dari pengolahan big data menghasilkan analisis data yang dapat memberikan data pendukung yang akurat dalam pengambilan keputusan. Hasil analisis tersebut akan dijadikan pemerintah sebagai dasar untuk mengambil keputusan dan langkah yang tepat akan sesuatu yang dikerjakan. Contohnya, Jakarta memiliki aplikasi Pantau Banjir untuk memantau debit air di kawasan Jakarta. Jadi, saat Jakarta ada di siaga banjir, pemerintah dapat melakukan antisipasi sebelum terlambat.</span>\n\n<b>3. Lingkungan Menjadi Sejuk dan Bersih</b>\n\n<span style=\"font-weight: 400;\">Karena konsep </span><i><span style=\"font-weight: 400;\">smart city </span></i><span style=\"font-weight: 400;\">adalah kota sejuk, rapi dan bersih, maka dari itu big data memiliki peran dalam pembangunannya. Misalnya dengan big data, polusi udara dapat dipantau melalui aplikasi Udarakita sehingga pemerintah mengetahui tingkat polusi udara setiap harinya. Setelah itu, pemerintah akan melakukan pencegahan atau cara untuk mengurangi polusi agar kadar udara tetap sehat.</span>\n\n<b>4. Keamanan Terjamin</b>\n\n<span style=\"font-weight: 400;\">Agar kota tetap tumbuh, orang-orang yang tinggal di dalamnya harus memastikan bahwa mereka aman. </span><span style=\"font-weight: 400;\">Menganalisis data besar di kota-kota membantu pihak berwenang untuk memahami informasi historis dan geografis daerah yang rentan terhadap kejahatan. Jadi, menjadi lebih mudah bagi kota untuk mengetahui di mana harus berinvestasi lebih banyak dan membuat area tersebut aman bagi semua orang.</span>\n\n<b>5. Energi Efisiensi</b>\n\n<span style=\"font-weight: 400;\">Dari energi listrik, bahan bakar hingga penggunaan air bersih dapat dimonitor setiap saat. Hal ini tentu mampu mengontrol penggunaan energi dan berbagai sumber daya agar tetap efisien. Kota-kota menggunakan data dengan konsumsi air dan energi, analis ini membantu pihak berwenang untuk mengatur persediaan dan menghindari pemborosan. Misalnya, PDAM menggunakan sistem </span><i><span style=\"font-weight: 400;\">monitoring </span></i><span style=\"font-weight: 400;\">air dalam rumah tangga dengan </span><span style=\"font-weight: 400;\">Mikrokontroler NODEMCU berbasis </span><i><span style=\"font-weight: 400;\">smartphone </span></i><span style=\"font-weight: 400;\">android.</span>\n\n<span style=\"font-weight: 400;\">Nah, jadi hal-hal di atas merupakan peran big data dalam pembangunan </span><i><span style=\"font-weight: 400;\">smart city. </span></i><span style=\"font-weight: 400;\">Menurut Anda, manfaat apa yang paling berpengaruh di hidup Anda sehari-hari?</span>\n\n<a href=\"https://smartnation.id/peran-big-data-dalam-pembangunan-smart-city/\"><span style=\"text-decoration: underline;\"><em><strong>Reference</strong></em></span></a>`,
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "Peran Smart Health dalam Kehidupan Masyarakat Indonesia Melawan Covid-19"
    ),
    date_gmt: new Date("23 September 2022").toISOString(),
    modified_gmt: new Date("23 September 2022").toISOString(),
    status: "publish",
    categories: [148, 117, 139],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2022/09/revisimobilhealth-1536x1536.jpg",
    comment_status: "open",
    title: {
      rendered:
        "Peran Smart Health dalam Kehidupan Masyarakat Indonesia Melawan Covid-19",
    },
    excerpt: {
      rendered: `<span style=\"font-weight: 400;\">Masa pandemi COVID-19 di Indonesia mengakibatkan ketakutan masyarakat untuk melakukan konsultasi kesehatan di fasilitas-fasilitas kesehatan, terlebih lagi himbauan dari pemerintah untuk melakukan </span><i style=\"font-size: revert; color: initial;\"><span>social distancing </span></i><span style=\"font-weight: 400;\">dan PSBB. Salah satu cara yang dapat dilakukan dalam membantu memberikan solusi penanganan pandemi COVID-19 selain dengan PSBB yaitu menerapkan konsep </span><i style=\"font-size: revert; color: initial;\"><span>smart health.</span></i>`,
    },
    content: {
      rendered: `<span style=\"font-weight: 400;\">Masa pandemi COVID-19 di Indonesia mengakibatkan ketakutan masyarakat untuk melakukan konsultasi kesehatan di fasilitas-fasilitas kesehatan, terlebih lagi himbauan dari pemerintah untuk melakukan </span><i style=\"font-size: revert; color: initial;\"><span>social distancing </span></i><span style=\"font-weight: 400;\">dan PSBB. Salah satu cara yang dapat dilakukan dalam membantu memberikan solusi penanganan pandemi COVID-19 selain dengan PSBB yaitu menerapkan konsep </span><i style=\"font-size: revert; color: initial;\"><span>smart health.</span></i>\n<h5><b>Apa itu </b><b><i>Smart Health</i></b><b>?</b></h5>\n<i><span style=\"font-weight: 400;\">Smart health</span></i><span style=\"font-weight: 400;\"> adalah suatu kondisi kota yang bersih, nyaman, aman, dan sehat untuk dihuni penduduk yang dicapai melalui terselenggaranya penerapan beberapa tatanan kegiatan terintegrasi yang disepakati masyarakat dan pemerintah daerah, dengan terlaksananya program ini dapat meningkatkan saran produktivitas, dan perekonomian masyarakat. Berikut adalah beberapa ciri dari konsep </span><i><span style=\"font-weight: 400;\">smart health</span></i><span style=\"font-weight: 400;\">, yaitu (Nadya Fatrah Balqis, 2020):</span>\n<ul>\n \t<li style=\"font-weight: 400;\" aria-level=\"1\"><span style=\"font-weight: 400;\">Pendekatan sesuai dengan permasalahan yang dihadapi;</span></li>\n \t<li style=\"font-weight: 400;\" aria-level=\"1\"><span style=\"font-weight: 400;\">Berasal dari kebutuhan masyarakat, dikelola oleh masyarakat, sedangkan pemerintah sebagai regulator dan fasilitator;</span></li>\n \t<li style=\"font-weight: 400;\" aria-level=\"1\"><span style=\"font-weight: 400;\">Mengutamakan pendekatan proses daripada target, tidak mempunyai batas waktu, berkembang sesuai yang diinginkan masyarakat sehingga dicapai secara bertahap;</span></li>\n \t<li style=\"font-weight: 400;\" aria-level=\"1\"><span style=\"font-weight: 400;\">Penyelenggaraan kegiatan didasarkan kesepakatan dari masyarakat (tokoh masyarakat, LSM setempat) bersama pemerintah pusat maupun pemerintah daerah;</span></li>\n \t<li style=\"font-weight: 400;\" aria-level=\"1\"><span style=\"font-weight: 400;\">Kegiatan dapat melalui proses dan komitmen pimpinan daerah, kegiatan inovatif dari berbagai sektor yang dilakukan melalui partisipasi masyarakat dan kerjasama;</span></li>\n \t<li style=\"font-weight: 400;\" aria-level=\"1\"><span style=\"font-weight: 400;\">Dalam pelaksanaan kegiatan harus terintegrasi kondisi fisik, ekonomi, dan budaya setempat.</span></li>\n</ul>\n<h5><b>Aplikasi <i>Smart Health</i></b></h5>\n<span style=\"font-weight: 400;\">Melalui konsep </span><i><span style=\"font-weight: 400;\">smart health </span></i><span style=\"font-weight: 400;\">diharapkan dapat meningkatkan kesehatan dan kesadaran masyarakat, hal tersebut dapat mengoptimalkan layanan kesehatan dalam mewujudkan</span> <span style=\"font-weight: 400;\">generasi Indonesia sehat dalam penanganan COVID-19. Adapun penerapan konsep </span><i><span style=\"font-weight: 400;\">smart health</span></i><span style=\"font-weight: 400;\"> dengan mengimplementasikan aplikasi pelayanan kesehatan, sebagai berikut (Nadya Fatrah Balqis, 2020):</span>\n<h6><b>1) INDONESEHAT</b></h6>\n<span style=\"font-weight: 400;\">INDONESEHAT merupakan portal </span><i><span style=\"font-weight: 400;\">online </span></i><span style=\"font-weight: 400;\">di bidang kesehatan yang menyediakan informasi untuk membantu pengguna hidup sehat. Aplikasi pelayanan kesehatan INDONESEHAT dihadirkan oleh pihak-pihak terkait seperti Kementrian Kesehatan Republik Indonesia, BNPB (Badan Nasional Penanggulangan Bencana), Kementerian Komunikasi dan Informatika, Kementerian Perhubungan, dan juga IDI (Ikatan Dokter Indonesia). Program ini berkomitmen untuk membantu setiap orang mendapatkan layanan kesehatan dan juga informasi kesehatan berkualitas di rumah melalui platform teknologi kesehatan pintar yang terintegrasi. Adapun berbagai fitur kesehatan dalam aplikasi INDONESEHAT, sebagai berikut  (Nadya Fatrah Balqis, 2020): </span>\n<ul>\n \t<li><b>Konsultasi Dokter </b></li>\n</ul>\n<p style=\"padding-left: 40px;\"><span style=\"font-weight: 400;\">Pada fitur ini dapat mempermudah pengguna konsultasi kesehatan dengan dokter terpercaya secara daring atau online. </span></p>\n\n<ul>\n \t<li style=\"font-weight: 400;\" aria-level=\"1\"><b>Update Kesehatan</b><span style=\"font-weight: 400;\"> </span></li>\n</ul>\n<p style=\"padding-left: 40px;\"><span style=\"font-weight: 400;\">Pada fitur ini memberikan update kesehatan terbaru kepada pengguna informasi yang disediakan seperti data ODP, PDP, Positif COVID-19, Sembuh COVID-19, Meninggal, dan juga update zona-zona merah persebaran COVID-19.</span></p>\n\n<ul>\n \t<li aria-level=\"1\"><b>Artikel Kesehatan </b></li>\n</ul>\n<p style=\"padding-left: 40px;\"><span style=\"font-weight: 400;\">Pada fitur ini memberikan informasi terkait COVID-19. Seperti keterangan pelengkap pada wilayah</span><i><span style=\"font-weight: 400;\"> red zone</span></i><span style=\"font-weight: 400;\"> atau zona merah seperti aspek fisik (suhu udara, kelembapan udara, dll), aspek sosial (jumlah penduduk, kepadatan penduduk, dll), aspek ekonomi ( titik perdagangan informal, pasar, dll), serta jalur alternatif tercepat dalam menghindari zona merah COVID-19, selain itu juga terdapat informasi moda transportasi yang tersedia.</span></p>\n\n<ul>\n \t<li aria-level=\"1\"><b>Tips Kesehatan </b></li>\n</ul>\n<p style=\"padding-left: 40px;\"><span style=\"font-weight: 400;\">Pada fitur ini memberikan informasi kepada pengguna tentang tips-tips kesehatan dalam menjaga imun tubuh dan lain sebagainya agar pengguna terhindar dari penularan COVID-19.</span><b></b></p>\n\n<h6><b>2) Halodoc</b></h6>\n<span style=\"font-weight: 400;\">Halodoc merupakan platform yang memberikan layanan konsultasi kesehatan secara virtual. Tujuan dibentuknya Halodoc adalah untuk menyederhanakan akses kesehatan dengan memanfaatkan layanan kesehatan berbasis online serta dilengkapi dengan berbagai spesialis yang berbeda-beda dan ahli dibidangnya. Halodoc tidak hanya memberikan fitur berinteraksi, namun memberikan fitur pelayanan </span><i><span style=\"font-weight: 400;\">Pharmacy Delivery </span></i><span style=\"font-weight: 400;\">yakni layanan untuk membeli obat dan bisa langsung diantarkan dalam waktu dalam waktu singkat,  kurang dari satu jam (Halodoc.com, 2017).</span><b></b>\n<h6><b>3) Medi-Call</b></h6>\n<span style=\"font-weight: 400;\">MEDI-CALL merupakan platform aplikasi mobile Online to Offline (O2O) dengan sistem </span><i><span style=\"font-weight: 400;\">location based </span></i><span style=\"font-weight: 400;\">yang hadir sebagai solusi untuk mengatasi permasalahan pasien yang mengalami kondisi immobilitas. Khususnya, dalam masa pandemi COVID-19 yang berisiko pada penularan penyakit di fasilitas layanan kesehatan (RS / Klinik). Hal inilah yang membuat masyarakat membutuhkan alternatif layanan medis di rumah agar lebih aman dan nyaman bagi pasien. </span>\n\n<span style=\"font-weight: 400;\">MEDI-CALL dapat diakses oleh seluruh pengguna </span><i><span style=\"font-weight: 400;\">smartphone</span></i><span style=\"font-weight: 400;\"> yang dapat menghubungkan antara pasien dengan layanan </span><i><span style=\"font-weight: 400;\">home car</span></i><span style=\"font-weight: 400;\">e / visit dokter, perawat, bidan, dan fisioterapi di lokasi pasien. Kelebihan dari aplikasi  MEDI-CALL adalah mampu memberikan layanan sesuai standar dan yang tercepat untuk pasien, dengan tarif layanan yang paling kompetitif dibandingkan provider konvensional. </span>\n\n<span style=\"font-weight: 400;\">Kecepatan dapat dicapai karena layanan MEDI-CALL menggunakan teknologi GPS. Sedangkan efisiensi biaya dapat dicapai karena MEDI-CALL menghilangkan peran pihak ketiga yang sebelumnya mengambil keuntungan yang besar dari tenaga medis. Saat ini MEDI-CALL memiliki lebih dari 2500 </span><i><span style=\"font-weight: 400;\">partner </span></i><span style=\"font-weight: 400;\">tenaga medis yang tersebar di seluruh Indonesia dengan indeks kepuasan mencapai 95%. Pertumbuhan bisnis MEDI-CALL lebih pesat saat ini dengan pencapaian GMV hingga lebih dari 10 Miliar pada Q3 tahun 2020 ini, (Indohcf, 2020).</span>\n<h6><b>4) Grab Health powered by Good Doctor</b></h6>\n<span style=\"font-weight: 400;\">Bekerja sama dengan Grab, Good Doctor menyediakan berbagai pelayanan kesehatan bagi pasien rawat jalan dengan memberikan layanan konsultasi, tanya jawab, pembelian obat atau vitamin, dan lainnya. </span><i><span style=\"font-weight: 400;\">Good Doctor</span></i><span style=\"font-weight: 400;\"> juga bekerja sama dengan Kementerian Kesehatan RI dalam menangani COVID-19 agar tidak menyebar luas.</span><b></b>\n<h6><b>5) KlikDokter</b></h6>\n<span style=\"font-weight: 400;\">Pandemi COVID-19 membuat masyarakat dihimbau untuk tetap melaksanakan aktivitas dari rumah, termasuk dalam melakukan konsultasi kesehatan. Dalam hal ini, adanya aplikasi KlikDokter dapat memudahkan akses masyarakat mendapatkan layanan kesehatan dengan mudah dan cepat. </span><span style=\"font-weight: 400;\">Kemudahan dan kepraktisan yang dihadirkan menjadi faktor pendorong banyaknya masyarakat yang memanfaatkan layanan KlikDokter. </span>\n\n<span style=\"font-weight: 400;\">KlikDokter merupakan aplikasi telemedicine yang </span><span style=\"font-weight: 400;\">menyediakan layanan konsultasi dengan dokter umum dan spesialis yang berpengalaman dibidangnya. Fasilitas konsultasi dokter di Klikdokter dapat d iakses selama 24 jam melalui Live Chat untuk memudahkan pasien dan dokter berkomunikasi secara online. Adapun fitur-fitur yang dapat digunakan selama melakukan Live Chat, yaitu (Kompas.com, 2021):</span>\n<ul>\n \t<li aria-level=\"1\"><b> Mendapatkan diagnosis, kondisi kesehatan terkini, dan tips </b></li>\n</ul>\n<p style=\"padding-left: 40px;\"><span style=\"font-weight: 400;\">Aplikasi Klikdokter, dapat digunakan sebagai layanan konsultasi terkait masalah kesehatan, mendiskusikan kondisi kesehatan terkini, dan menanyakan tips seputar gaya hidup sehat. Lewat layanan Live Chat Klikdokter, Anda bisa mengetahui rekomendasi obat, rujukan ke rumah sakit, atau sekadar tips hidup sehat untuk mencegah terserang penyakit.</span></p>\n\n<ul>\n \t<li style=\"font-weight: 400;\" aria-level=\"1\"><b> Dokter umum dan spesialis yang berpengalaman</b><span style=\"font-weight: 400;\"> </span></li>\n</ul>\n<p style=\"padding-left: 40px;\"><span style=\"font-weight: 400;\">Aplikasi Klikdokter menyediakan layanan konsultasi dengan dokter umum serta dokter spesialis yang berpengalaman. Informasi yang diperoleh dari hasil konsultasi pun dapat dipertanggungjawabkan. Pasalnya, Klikdokter menjalin hubungan kerja sama dengan berbagai organisasi kesehatan di Indonesia, seperti Konsil Kedokteran Indonesia (KKI), Ikatan Alumni Fakultas Kedokteran Indonesia (ILUNI FK), Ikatan Alumni Fakultas Kedokteran Gigi Indonesia (ILUNI FKG), dan Ikatan Dokter Indonesia (IDI).</span></p>\n\n<ul>\n \t<li style=\"font-weight: 400;\" aria-level=\"1\"><b>Privasi tetap terjaga</b><span style=\"font-weight: 400;\"> </span></li>\n</ul>\n<p style=\"padding-left: 40px;\"><span style=\"font-weight: 400;\">Aplikasi Klikdokter dapat menjamin privasi saat berkonsultasi dengan dokter secara online. Setiap percakapan yang dilakukan pada website dan aplikasi Klikdokter akan terjaga kerahasiaannya. Begitu pula dengan diagnosis yang dokter berikan. Jadi, Anda tidak perlu was-was dan ragu untuk berkonsultasi. </span></p>\n\n<ul>\n \t<li aria-level=\"1\"><b>Informasi menarik seputar kesehatan </b></li>\n</ul>\n<p style=\"padding-left: 40px;\"><span style=\"font-weight: 400;\">Aplikasi Klikdokter tidak hanya menyediakan layanan telemedicine, tetapi juga berbagai informasi menarik seputar kesehatan melalui artikel-artikel di dalam aplikasi. </span></p>\n<span style=\"font-weight: 400;\">Dengan demikian, inilah peran </span><i><span style=\"font-weight: 400;\">smart health</span></i><span style=\"font-weight: 400;\"> dalam kehidupan masyarakat, sehingga masyarakat dapat terus menjaga kesehatannya di rumah selama masa pandemi COVID-19. </span>\n\n<a href=\"http://smartnation.id/peran-smart-health-dalam-kehidupan-masyarakat-indonesia-melawan-covid-19/\"><strong>Referensi</strong></a>`,
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug("Ini Dia Deretan Startup Healthtech di Indonesia"),
    date_gmt: new Date("13 October 2021").toISOString(),
    modified_gmt: new Date("13 October 2021").toISOString(),
    status: "publish",
    categories: [148, 117],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2021/10/websitesmartnation_12102021_Mia-Patricia-Rizky-Sabilurrasyid_1-Mia-Patricia-780x450.png",
    comment_status: "open",
    title: {
      rendered: "Ini Dia Deretan Startup Healthtech di Indonesia",
    },
    excerpt: {
      rendered: `<p>Di masa pandemi ini, kebanyakan kegiatan dilakukan secara <em>online</em>. Bagaimana perasaan Smart People ketika tubuh kurang <em>fit</em> namun takut untuk pergi keluar? Sangat khawatir bukan? Teknologi kini bahkan sudah masuk ke dalam sektor kesehatan. Dulu kita harus datang ke rumah sakit dan menunggu antrian sekarang hanya perlu mengunduh aplikasi dan dalam sekejap Kamu dapat melakukan konsultasi dengan dokter perihal keluhanmu.</p>`,
    },
    content: {
      rendered: `<!-- wp:html -->\n<div class=\"wp-block-image\"><figure class=\"aligncenter size-large\"><a href=\"https://smartnation.id/wp-content/uploads/2021/10/websitesmartnation_12102021_Mia-Patricia-Rizky-Sabilurrasyid_2-Mia-Patricia.jpg\"><img src=\"https://smartnation.id/wp-content/uploads/2021/10/websitesmartnation_12102021_Mia-Patricia-Rizky-Sabilurrasyid_2-Mia-Patricia-1024x678.jpg\" alt=\"\" class=\"wp-image-3591\"></a><figcaption style=\"font-size:12px\">Pasien yang sedang mendengarkan penjelasan dokter | Sumber: NerdWallet</figcaption></figure></div>\n<!-- /wp:html -->\n\n<!-- wp:paragraph -->\n<p>Di masa pandemi ini, kebanyakan kegiatan dilakukan secara <em>online</em>. Bagaimana perasaan Smart People ketika tubuh kurang <em>fit</em> namun takut untuk pergi keluar? Sangat khawatir bukan? Teknologi kini bahkan sudah masuk ke dalam sektor kesehatan. Dulu kita harus datang ke rumah sakit dan menunggu antrian sekarang hanya perlu mengunduh aplikasi dan dalam sekejap Kamu dapat melakukan konsultasi dengan dokter perihal keluhanmu.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:html -->\n<div class=\"wp-block-image\"><figure class=\"aligncenter size-large\"><a href=\"https://smartnation.id/wp-content/uploads/2021/10/websitesmartnation_12102021_Mia-Patricia-Rizky-Sabilurrasyid_3-Mia-Patricia.jpg\"><img src=\"https://smartnation.id/wp-content/uploads/2021/10/websitesmartnation_12102021_Mia-Patricia-Rizky-Sabilurrasyid_3-Mia-Patricia-1024x678.jpg\" alt=\"\" class=\"wp-image-3592\"></a><figcaption style=\"font-size:12px\">Konsultasi antara pasien dengan dokter secara <em>virtual </em>| Sumber: HealthExec</figcaption></figure></div>\n<!-- /wp:html -->\n\n<!-- wp:paragraph -->\n<p>Kemudahan ini didatangkan oleh <em>startup</em> healthtech. <em>Startup healthtech</em> adalah perusahaan rintisan yang menyediakan teknologi digital di segmen layanan kesehatan <em>(healthtech)</em> dengan menggunakan layanan medis berbasis online <em>(telemedicine). </em>Taufiq Nur, peneliti Lembaga Manajemen FEB Universitas Indonesia, menyampaikan, penggunaan <em>healthtech</em> bertumbuh sekitar empat kali lipat dibandingkan sebelum masa pandemi covid-19 atau sejak bulan Januari 2020 lalu. Kehadiran <em>startup healthtech</em> tak hanya memberikan kemudahan akses namun juga menjadi bagian dari pengembangan kesehatan nasional.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>Lalu, apa saja <em>startup healthtech</em> yang ada di Indonesia? Mari simak informasi di bawah ini.&nbsp;</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list {\"ordered\":true} -->\n<ol><li>GoodDoctorTechnology</li></ol>\n<!-- /wp:list -->\n\n<!-- wp:paragraph -->\n<p>Perusahaan penyedia layanan kesehatan berbasis teknologi ini juga bekerja sama dengan Grab untuk memungkinkan dalam penyediaan akses konsultasi dokter bagi seluruh keluarga di Indonesia.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list {\"ordered\":true,\"start\":2} -->\n<ol start=\"2\"><li>Dokter.id</li></ol>\n<!-- /wp:list -->\n\n<!-- wp:paragraph -->\n<p>Dokter.id adalah portal kesehatan yang menyediakan solusi terintegrasi bagi penggunanya dengan akses melalui <em>desktop</em> ataupun <em>mobile</em>. Beberapa layanan yang diberikan adalah konsultasi online gratis, cek gejala penyakit, direktori rumah sakit dan dokter, serta informasi dan tips kesehatan terkini.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list {\"ordered\":true,\"start\":3} -->\n<ol start=\"3\"><li>KlikDokter.com</li></ol>\n<!-- /wp:list -->\n\n<!-- wp:paragraph -->\n<p>Perusahaan yang dioperasikan oleh PT Medika Komunika Teknologi ini menjalin kerjasama dengan KKI (Konsil Kedokteran Indonesia), ILUNI FK (Ikatan Alumni Fakultas Kedokteran Indonesia), ILUNI FKG (Ikatan Alumni Fakultas Kedokteran Gigi Indonesia), IDI (Ikatan Dokter Indonesia) dan organisasi medis lainnya.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list {\"ordered\":true,\"start\":4} -->\n<ol start=\"4\"><li>Alodokter</li></ol>\n<!-- /wp:list -->\n\n<!-- wp:paragraph -->\n<p>Hadir sejak tahun 2014, Alodokter merupakan salah satu perusahaan kesehatan digital ternama di Indonesia yang telah memiliki 18 juta pengguna aktif. Alodokter berhasil mengubah poros layanan kesehatan dengan signifikan dalam menyediakan informasi dunia medis yang mudah dipahami masyarakat.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list {\"ordered\":true,\"start\":5} -->\n<ol start=\"5\"><li>Halodoc</li></ol>\n<!-- /wp:list -->\n\n<!-- wp:paragraph -->\n<p>Berhasil menjadi “<em>The Most Innovative Startup</em>” dari Galen Growth Asia pada tahun 2018, kini Halodoc sudah menjalin kerjasama dengan berbagai pihak, antara lain dengan:&nbsp; Badan Penyelenggara Jaminan Sosial (BPJS) Kesehatan dalam memperluas akses dan layanan kesehatan secara digital bagi masyarakat;&nbsp; Kerjasama riset dengan Ikatan Dokter Indonesia (IDI); Di bidang pencegahan penularan&nbsp; Covid-19, kerja sama dengan Kementerian Kesehatan dan Gojek; Kerja sama dengan jaringan laboratorium Prodia.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>Bendahara Asosiasi Modal Ventura dan Startup Indonesia (Amsevindo) Edward Ismawan Wihardja mengungkapkan investor asing tetap miliki minat tinggi pada startup kesehatan atau healthtech. Berdasarkan data statistik pada April 2021, total pendanaan industri kesehatan digital di seluruh dunia pada tahun 2020 adalah US$ 21,6 Miliar. Di Indonesia, aplikasi kesehatan digital paling terkemuka per Februari 2021 adalah Halodoc dengan persentase 71 persen, Alodokter 56 persen dan Good Doctor 13 persen.&nbsp;</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>Dengan kemajuan teknologi, kegiatan manusia dapat menjadi lebih efisien. Pandemi mengantarkan kita pada akselerasi teknologi yang luar biasa, masa depan yang serba digital rasanya semakin dekat dengan kita. Menurut Smart People, <em>startup</em> di bidang apalagi yang akan membantu aktivitas kita?&nbsp;</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph {\"style\":{\"typography\":{\"fontSize\":\"12px\"}}} -->\n<p style=\"font-size:12px\">Penulis: Mia Patricia | Illustrator: Rizky Sabilurrasyid</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph {\"style\":{\"typography\":{\"fontSize\":\"12px\"}}} -->\n<p style=\"font-size:12px\">Referensi:</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:list {\"ordered\":true,\"style\":{\"typography\":{\"fontSize\":\"12px\"}}} -->\n<ol style=\"font-size:12px\"><li><a href=\"https://m.bisnis.com/amp/read/20210905/266/1438285/startup-kesehatan-tetap-mencuri-perhatian-investor-asing\">https://m.bisnis.com/amp/read/20210905/266/1438285/startup-kesehatan-tetap-mencuri-perhatian-investor-asing</a></li><li><a href=\"https://newssetup.kontan.co.id/news/penggunaan-platform-healthtech-melonjak-hingga-empat-kali-lipat-di-tengah-pandemi?page=all\">https://newssetup.kontan.co.id/news/penggunaan-platform-healthtech-melonjak-hingga-empat-kali-lipat-di-tengah-pandemi?page=all</a></li><li>https://siar.com/mengenal-sebelas-startup-healthtech-di-indonesia/ </li></ol>\n<!-- /wp:list -->`,
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "Talkshow ISNA 2022: Implementasi Smart City Bagi Kemajuan Indonesia Bersama PEMDA"
    ),
    date_gmt: new Date("24 November 2022").toISOString(),
    modified_gmt: new Date("24 November 2022").toISOString(),
    status: "publish",
    categories: [83, 84, 155, 139, 154],
    tags: [],
    author: 1,
    featured_media:
      "https://drive.google.com/uc?export=download&id=1d0wI2odXwBnWexOvBvjMFYtoxGqdLIeZ",
    comment_status: "open",
    title: {
      rendered:
        "Talkshow ISNA 2022: Implementasi Smart City Bagi Kemajuan Indonesia Bersama PEMDA",
    },
    excerpt: {
      rendered: `<span style=\"font-weight: 400;\">Citiasia Inc. merupakan lembaga konsultasi yang berkomitmen mendorong penghargaan </span><i><span style=\"font-weight: 400;\">smart city </span></i><span style=\"font-weight: 400;\">di Indonesia. Dalam perkembangannya, perusahaan Citiasia Inc. memiliki program besar, salah satunya Indonesian Smart Nation Award (ISNA) yang merupakan ajang penghargaan bagi pemerintah daerah (Pemda) Kota/Kabupaten di Indonesia yang menciptakan inovasi </span><i><span style=\"font-weight: 400;\">smart city </span></i><span style=\"font-weight: 400;\">terbaik bagi masyarakatnya. Citiasia Inc. resmi menggelar ISNA 2022 berlangsung di ICE BSD, Tangerang, pada Kamis (17/11/22). </span>`,
    },
    content: {
      rendered: `<span style=\"font-weight: 400;\">Citiasia Inc. merupakan lembaga konsultasi yang berkomitmen mendorong penghargaan </span><i><span style=\"font-weight: 400;\">smart city </span></i><span style=\"font-weight: 400;\">di Indonesia. Dalam perkembangannya, perusahaan Citiasia Inc. memiliki program besar, salah satunya Indonesian Smart Nation Award (ISNA) yang merupakan ajang penghargaan bagi pemerintah daerah (Pemda) Kota/Kabupaten di Indonesia yang menciptakan inovasi </span><i><span style=\"font-weight: 400;\">smart city </span></i><span style=\"font-weight: 400;\">terbaik bagi masyarakatnya. Citiasia Inc. resmi menggelar ISNA 2022 berlangsung di ICE BSD, Tangerang, pada Kamis (17/11/22). </span>\n\n<span style=\"font-weight: 400;\">Citiasia Inc. telah berhasil menggelar ajang penghargaan ISNA dari tahun 2015 hingga 2022. Untuk tahun ini, ISNA 2022 mengusung tema “Smart City Innovation: For Post-Pandemic Economic Recovery”.</span>\n\n<span style=\"font-weight: 400;\">“Ini sudah sampai kali yang kelima ISNA dilaksanakan. Kali yang kelima kami secara konsisten mengumpulkan inovasi-inovasi, pembelajaran-pembelajaran cerdas yang baik, yang kemudian bisa kita sampaikan kepada Indonesia dan kemudian bisa menjadi pembelajaran-pembelajaran untuk kita mewujudkan </span><i><span style=\"font-weight: 400;\">smart city, smart regency</span></i><span style=\"font-weight: 400;\">, nantinya </span><i><span style=\"font-weight: 400;\">smart province,</span></i><span style=\"font-weight: 400;\"> dan akhirnya menjadi </span><i><span style=\"font-weight: 400;\">smartnation</span></i><span style=\"font-weight: 400;\">,” ujar Fitrah R. Kautsar (CEO Citiasia), dalam sambutannya.</span>\n\n<span style=\"font-weight: 400;\">Penghargaan ISNA 2022 ini difokuskan pada pemerintah daerah yang berhasil mengimplementasikan dua pilar utama dari</span><i><span style=\"font-weight: 400;\"> smart city</span></i><span style=\"font-weight: 400;\">, yakni</span><i><span style=\"font-weight: 400;\"> smart branding</span></i><span style=\"font-weight: 400;\"> dan </span><i><span style=\"font-weight: 400;\">smart economy</span></i><span style=\"font-weight: 400;\">. </span><i><span style=\"font-weight: 400;\">Smart Branding </span></i><span style=\"font-weight: 400;\">adalah peningkatan daya saing daerah dengan penataan wajah kota dan pemasaran potensi daerah baik dalam lingkup lokal, nasional, maupun internasional. Sedangkan, </span><i><span style=\"font-weight: 400;\">smart economy </span></i><span style=\"font-weight: 400;\">adalah mewujudkan ekosistem yang mendukung aktivitas ekonomi masyarakat yang selaras dengan sektor ekonomi unggulan daerah yang adaptif terhadap perubahan di era reformasi saat ini, serta meningkatkan </span><i><span style=\"font-weight: 400;\">financial literacy </span></i><span style=\"font-weight: 400;\">masyarakat melalui berbagai program diantaranya mewujudkan </span><i><span style=\"font-weight: 400;\">less-cash society.</span></i>\n\n<img class=\"alignnone size-full wp-image-9992\" src=\"http://smartnation.id/wp-content/uploads/2022/11/framework-e1669186724308.png\" alt=\"\" width=\"1406\" height=\"499\" />\n\n<span style=\"font-weight: 400;\">Pola penilaian Citiasia Inc. untuk Kota/Kabupaten dilakukan melalui riset komprehensif yang dilakukan menggunakan data tahun 2020-2022 dengan parameter khusus yang memperhitungkan berbagai faktor yaitu penilaian inovasi yang telah dilakukan pemerintah daerah serta data quick win dari setiap Masterplan</span><i><span style=\"font-weight: 400;\"> Smart City</span></i><span style=\"font-weight: 400;\"> pemerintah daerah yang terlibat dalam Gerakan Menuju </span><i><span style=\"font-weight: 400;\">Smart City</span></i><span style=\"font-weight: 400;\">.  Data tersebut selanjutnya dikombinasikan dengan hasil evaluasi dari Kompetisi Inovasi Pelayanan Publik (KIPP) dari Kemenpan-RB serta hasil penilaian Kemendagri untuk Indonesia Government Award (IGA) yang telah dilaksanakan terlebih dahulu. Penilaian ini juga memanfaatkan sampling respon masyarakat melalui  survei langsung serta analisis di media sosial.</span>\n\n<span style=\"font-weight: 400;\">“Parameter yang digunakan dalam penilaian antara lain adalah terkait pasca implementasi (manfaat, keberlanjutan, akuntabilitas), implementasi (pembiayaan, kemitraan/kolaborasi, adopsi teknologi), perencanaan (kesesuaian dengan dokumen perencanaan), serta profil inovasi (kreativitas dan keunikan),” terangnya.</span>\n\n<span style=\"font-weight: 400;\">Dalam penilaian dan penganugerahan ISNA 2022, Citiasia Inc. melibatkan Founder dan Co-Founder Citiasia Inc. sebagai juri, yaitu Dr. Cahyana Ahmadjayadi (Chairman Citiasia Inc.), Dr. Ashwin Sasongko (LIPI Research), Farid Subkhan (Digital Business Expert), Izzudin Al Farraz Adha (INDEF Research), dan Hari Kusdaryanto (Chief Innovation Officer Citiasia Inc.). Oleh karena itu, adanya inovasi ini dapat memajukan Kota/Kabupaten di Indonesia menjadi lebih baik. Selain itu, program ini dapat memudahkan masyarakat dalam menunjang perekonomian dalam </span><i><span style=\"font-weight: 400;\">branding</span></i><span style=\"font-weight: 400;\"> wilayahnya agar dikenal oleh khalayak umum.</span>\n\n<span style=\"font-weight: 400;\">Ikuti terus Informasi ISNA di akun instagram @citiasiainc dan @smartnation.id</span>`,
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "Smart City Semakin di Depan, Pemprov Jatim Dukung Program Kota Cerdas Kabupaten/Kota di Jawa Timur"
    ),
    date_gmt: new Date("28 October 2022").toISOString(),
    modified_gmt: new Date("28 October 2022").toISOString(),
    status: "publish",
    categories: [148, 82, 84, 139],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2022/10/Desain_Artikel_26_Oktober-01-1536x896.png",
    comment_status: "open",
    title: {
      rendered:
        "Smart City Semakin di Depan, Pemprov Jatim Dukung Program Kota Cerdas Kabupaten/Kota di Jawa Timur",
    },
    excerpt: {
      rendered: `<span style=\"font-weight: 400;\">Pada hari Kamis tanggal 13 Oktober lalu, telah diselenggarakan Sosialisasi Program Gerakan Menuju Provinsi Cerdas (</span><i><span style=\"font-weight: 400;\">Smart Province) </span></i><span style=\"font-weight: 400;\">di Provinsi Jawa Timur. Acara sosialisasi ini disampaikan oleh Hari Kusdaryanto sebagai tenaga ahli kominfo dari PT. Citiasia Internasional dan juga dihadiri oleh Kepala Bidang Aptika, Achmad Fadlil Chusni yang mewakili Kadis Kominfo Jatim. </span>\r\n\r\n<span style=\"font-weight: 400;\">Melalui program </span><i><span style=\"font-weight: 400;\">smart province </span></i><span style=\"font-weight: 400;\">ini, harapannya pelayanan sektor publik dapat ditingkatkan dengan menyatukan beberapa elemen yang ada seperti pemerintahan, ekonomi, pendidikan, kesehatan, lingkungan, sumber daya manusia dan transportasi.</span>`,
    },
    content: {
      rendered: `<span style=\"font-weight: 400;\">Pada hari Kamis tanggal 13 Oktober lalu, telah diselenggarakan Sosialisasi Program Gerakan Menuju Provinsi Cerdas (</span><i><span style=\"font-weight: 400;\">Smart Province) </span></i><span style=\"font-weight: 400;\">di Provinsi Jawa Timur. Acara sosialisasi ini disampaikan oleh Hari Kusdaryanto sebagai tenaga ahli kominfo dari PT. Citiasia Internasional dan juga dihadiri oleh Kepala Bidang Aptika, Achmad Fadlil Chusni yang mewakili Kadis Kominfo Jatim. </span>\r\n\r\n<span style=\"font-weight: 400;\">Melalui program </span><i><span style=\"font-weight: 400;\">smart province </span></i><span style=\"font-weight: 400;\">ini, harapannya pelayanan sektor publik dapat ditingkatkan dengan menyatukan beberapa elemen yang ada seperti pemerintahan, ekonomi, pendidikan, kesehatan, lingkungan, sumber daya manusia dan transportasi.</span>\r\n\r\n<span style=\"font-weight: 400;\">Kemudian, Achmad Fadli Chusni juga mengungkapkan sudah terdapat 34 Kabupaten Kota di Jatim yang sudah mempunyai dokumen perencanaan pembangunan </span><i><span style=\"font-weight: 400;\">smart city </span></i><span style=\"font-weight: 400;\">sebagai langkah awal. Sebab itu, upaya </span><i><span style=\"font-weight: 400;\">smart province </span></i><span style=\"font-weight: 400;\">pun akan lebih mudah karena sudah ada landasan yang kuat di kabupaten kota.</span>\r\n\r\n<span style=\"font-weight: 400;\">Hal yang lebih penting dalam pembangunan </span><i><span style=\"font-weight: 400;\">smart city </span></i><span style=\"font-weight: 400;\">adalah program ini harus dilandasi kerja sama antar kabupaten dan kota untuk mewujudkan integrasi pelayanan masyarakat, seperti </span><i><span style=\"font-weight: 400;\">smart government </span></i><span style=\"font-weight: 400;\">yang bisa terwujud melalui ekosistem pemerintahan berbasis elektronik serta kompetensi sumber daya manusia. </span>\r\n\r\n<i><span style=\"font-weight: 400;\">Smart environment </span></i><span style=\"font-weight: 400;\">yaitu penatakelolaan lingkungan antar ekosistem, </span><i><span style=\"font-weight: 400;\">smart living </span></i><span style=\"font-weight: 400;\">untuk menjamin kenyamanan dan keamanan dari layanan teknologi informasi dan komunikasi, </span><i><span style=\"font-weight: 400;\">smart economy </span></i><span style=\"font-weight: 400;\">untuk tersambungnya interkoneksi sektor ekonomi dari mikro, medium, dan makro yang terlindungi dan </span><i><span style=\"font-weight: 400;\">smart branding </span></i><span style=\"font-weight: 400;\">untuk membangun citra kota yang tertib, teratur, aman, dan mengembangkan pusat inovasi.</span>\r\n\r\n<span style=\"font-weight: 400;\">Jika program </span><i><span style=\"font-weight: 400;\">smart city </span></i><span style=\"font-weight: 400;\">di Jatim berjalan dengan baik, maka perwujudan </span><i><span style=\"font-weight: 400;\">East Java Smart Province </span></i><span style=\"font-weight: 400;\">akan segera terealisasi, ungkapnya.</span>\r\n\r\n<a href=\"https://smartnation.id/smart-city-semakin-di-depan-pemprov-jatim-dukung-program-kota-cerdas-kabupaten-kota-di-jawa-timur/\">Referensi</a>`,
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "Jateng Dorong Terobosan dalam Meningkatkan Kemudahan, Ketepatan dan Kepercayaan Masyarakat sebagai Langkah Menuju “Smart Province”"
    ),
    date_gmt: new Date("14 October 2022").toISOString(),
    modified_gmt: new Date("14 October 2022").toISOString(),
    status: "publish",
    categories: [148, 82, 84, 145, 101, 137],
    tags: [],
    author: 1,
    featured_media:
      "https://drive.google.com/uc?export=download&id=1rZOg76e7FR5_8rGa3dP-fHKcPDhSMk6D",
    comment_status: "open",
    title: {
      rendered:
        "Jateng Dorong Terobosan dalam Meningkatkan Kemudahan, Ketepatan dan Kepercayaan Masyarakat sebagai Langkah Menuju “Smart Province”",
    },
    excerpt: {
      rendered: `<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Pada hari Senin, 10 Oktober 2022 telah diadakan Sosialisasi Program Gerakan Menuju Provinsi Cerdas (</span><i><span style=\"font-weight: 400;\">Smart Province) </span></i><span style=\"font-weight: 400;\">yang diselenggarakan di Hotel Novotel Semarang, Jawa Tengah. Acara sosialisasi ini dibawakan oleh Hari Kusdaryanto selaku tenaga ahli </span><i><span style=\"font-weight: 400;\">smart city </span></i><span style=\"font-weight: 400;\">dan Chief Innovation Officer PT. Citiasia Internasional dan dihadiri oleh Kepala Dinas Komunikasi dan Informatika (Diskominfo) Jawa Tengah, Riena Retnaningrum, Direktur Jenderal Aplikasi Komputer (Aptika) Kementerian Komunikasi dan Informatika RI, Semuel Abrijani Pangerapan dan OPD dari berbagai daerah di Provinsi Jawa Tengah.</span></p>`,
    },
    content: {
      rendered: `<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Pada hari Senin, 10 Oktober 2022 telah diadakan Sosialisasi Program Gerakan Menuju Provinsi Cerdas (</span><i><span style=\"font-weight: 400;\">Smart Province) </span></i><span style=\"font-weight: 400;\">yang diselenggarakan di Hotel Novotel Semarang, Jawa Tengah. Acara sosialisasi ini dibawakan oleh Hari Kusdaryanto selaku tenaga ahli </span><i><span style=\"font-weight: 400;\">smart city </span></i><span style=\"font-weight: 400;\">dan Chief Innovation Officer PT. Citiasia Internasional dan dihadiri oleh Kepala Dinas Komunikasi dan Informatika (Diskominfo) Jawa Tengah, Riena Retnaningrum, Direktur Jenderal Aplikasi Komputer (Aptika) Kementerian Komunikasi dan Informatika RI, Semuel Abrijani Pangerapan dan OPD dari berbagai daerah di Provinsi Jawa Tengah.</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Acara ini berisi tentang pemanfaatan kemajuan teknologi dan informasi dalam pelayanan publik sebagai upaya memberikan pelayanan terbaik untuk masyarakat untuk meminimalisir praktik pungutan liar atau pungli oleh oknum pemerintah. Dengan penerapan tersebut, cita-cita dan tujuan sebuah daerah menjadi </span><i><span style=\"font-weight: 400;\">smart province </span></i><span style=\"font-weight: 400;\">atau provinsi cerdas untuk meningkatkan kualitas hidup masyarakat dapat tercapai.&nbsp;</span></p>\n<p style=\"text-align: justify;\"><i><span style=\"font-weight: 400;\">Smart province</span></i><span style=\"font-weight: 400;\"> bertujuan memberikan pelayanan terbaik bagi masyarakat yang berbasis digital, sehingga program menjadi lebih efisien dan transparan, baik di bidang pendidikan, kesehatan, dan infrastruktur. </span><i><span style=\"font-weight: 400;\">Smart province </span></i><span style=\"font-weight: 400;\">juga membentuk perilaku dan budaya masyarakat digital melalui pemanfaatan teknologi informasi dan komunikasi (TIK). Saat ini, pemerintah Jawa Tengah sedang berproses mewujudkan </span><i><span style=\"font-weight: 400;\">smart province </span></i><span style=\"font-weight: 400;\">dengan menerapkan tata kelola pemerintahan dan pelayanan publik berbasis TIK, seperti mengintegrasikan data, aplikasi, dan infrastruktur TIK serta memperluas publikasi informasi dan komunikasi maupun penguatan pengamanan informasi.&nbsp;</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Dalam perwujudan </span><i><span style=\"font-weight: 400;\">smart province </span></i><span style=\"font-weight: 400;\">ada sembilan langkah awal yang dapat dilakukan, yaitu pelayanan publik yang mudah dan efisien. Kemudian, lingkungan tempat tinggal yang layak dan nyaman, sistem keamanan masyarakat yang terjamin, pengembangkan tata kelola hutan, sampah, limbah serta energi. Sasaran lainnya adalah keseimbangan ekosistem lingkungan, peningkatan taraf ekonomi masyarakat, serta daya tarik Provinsi Jawa Tengah yang meningkat, melalui pariwisata dan investasi.</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Penerapan teknologi tidak hanya semata-mata mengikuti tren yang berkembang saat ini, namun harus bisa dimanfaatkan untuk kepentingan yang jauh lebih bermanfaat kepada masyarakat. Inovasi yang direncanakan harus benar-benar ditujukan untuk memberikan kemudahan, meningkatkan kepercayaan masyarakat terhadap pelayanan publik melalui </span><i><span style=\"font-weight: 400;\">smart province.&nbsp;</span></i></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Maka dari itu, pemerintah harus terus melakukan sinkronisasi pengembangan </span><i><span style=\"font-weight: 400;\">smart province</span></i><span style=\"font-weight: 400;\"> dengan s</span><i><span style=\"font-weight: 400;\">mart city</span></i><span style=\"font-weight: 400;\"> (kota cerdas) seluruh kabupaten/ kota di Jawa Tengah. Kolaborasi dan koordinasi adalah kunci untuk mencapai </span><i><span style=\"font-weight: 400;\">smart province</span></i><span style=\"font-weight: 400;\"> yang efisien dan efektif untuk meningkatkan kualitas hidup masyarakat.</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Direktur Jenderal Aplikasi Komputer (Aptika) Kementerian Komunikasi dan Informatika RI, Semuel Abrijani Pangerapan, secara </span><i><span style=\"font-weight: 400;\">online</span></i><span style=\"font-weight: 400;\"> juga mengatakan bahwa ruang digital telah menjadi bagian dari kehidupan sehari-hari. Padahal, per Januari 2022, warga Indonesia menggunakan sekitar 8 jam waktu untuk mengakses internet. Ini merupakan peluang sekaligus tantangan untuk menyediakan layanan digital terintegrasi.&nbsp;</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Sejak tahun 2017 sampai tahun 2022, Kementerian Komunikasi dan Informatika telah mendorong 191 kabupaten dan kota di Indonesia menjadi kota pintar, termasuk penyusunan </span><i><span style=\"font-weight: 400;\">smart city master plan </span></i><span style=\"font-weight: 400;\">terkait seluruh aspek kehidupan masyarakat. Keberhasilan program tersebut mendorong Kementerian Komunikasi dan Informatika mencanangkan Gerakan Menuju Provinsi Cerdas.</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Tujuan dari penyusunan </span><i><span style=\"font-weight: 400;\">master plan </span></i><span style=\"font-weight: 400;\">tersebut agar provinsi dapat mengelola dan mengembangkan berbagai sumber daya strategisnya, melalui inovasi yang terpadu dan berkelanjutan, untuk menyelesaikan berbagai permasalahan yang dihadapi.&nbsp;</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Sementara itu, Hari Kusdaryanto selaku tenaga ahli </span><i><span style=\"font-weight: 400;\">smart city </span></i><span style=\"font-weight: 400;\">dan Chief Innovation Officer PT. Citiasia Internasional menjelaskan pembangunan </span><i><span style=\"font-weight: 400;\">smart province</span></i><span style=\"font-weight: 400;\"> tidak hanya melahirkan inovasi pembangunan di tingkat negara bagian, tetapi juga mengkoordinasikan pengembangan </span><i><span style=\"font-weight: 400;\">smart city</span></i><span style=\"font-weight: 400;\"> di tingkat kabupaten/kota. Koordinasi mencakup enam aspek kota cerdas yang menjadi domain otoritas negara: tata kelola yang cerdas, </span><i><span style=\"font-weight: 400;\">branding </span></i><span style=\"font-weight: 400;\">yang cerdas, ekonomi yang cerdas, kehidupan yang cerdas, masyarakat yang cerdas, dan lingkungan yang cerdas.</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Pemerintah provinsi juga harus memfasilitasi upaya untuk berbagi sumber daya dan mengintegrasikan data lintas kabupaten dan kota untuk memecahkan masalah terpadu, tambah Hari.&nbsp;</span></p>\n<p style=\"text-align: justify;\"><span style=\"font-weight: 400;\">Jadi, itulah langkah awal Jawa Tengah untuk menerapkan </span><i><span style=\"font-weight: 400;\">smart city. </span></i><span style=\"font-weight: 400;\">Jika Anda butuh konsultasi untuk mulai melangkah pembangunan </span><i><span style=\"font-weight: 400;\">smart city </span></i><span style=\"font-weight: 400;\">di kota Anda, silahkan kunjungi akun Instagram @citiasiainc untuk informasi lebih lanjut.</span></p>\n<a href=\"http://smartnation.id/jateng-dorong-terobosan-dalam-meningkatkan-kemudahan-ketepatan-dan-kepercayaan-masyarakat-sebagai-langkah-menuju-smart-province/\"><em><strong>Reference</strong></em></a>`,
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug(
      "Konsep Smart Branding pada Kesenian Reog Kabupaten Ponorogo"
    ),
    date_gmt: new Date("12 October 2022").toISOString(),
    modified_gmt: new Date("12 October 2022").toISOString(),
    status: "publish",
    categories: [148, 83, 84, 145],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2022/10/12okt-1536x896.jpg",
    comment_status: "open",
    title: {
      rendered: "Konsep Smart Branding pada Kesenian Reog Kabupaten Ponorogo",
    },
    excerpt: {
      rendered: `<span style=\"font-weight: 400;\">Sistem Pemerintahan Berbasis Elektronik (SPBE) merupakan penyelenggaraan pemerintahan yang memanfaatkan </span><span style=\"font-weight: 400;\">informasi dan komunikasi untuk memberikan layanan kepada pengguna SPBE, baik tingkat masyarakat maupun pemerintah itu sendiri, (Diskominfo Bantul, 2022).&nbsp;</span>`,
    },
    content: {
      rendered: `<span style=\"font-weight: 400;\">Sistem Pemerintahan Berbasis Elektronik (SPBE) merupakan penyelenggaraan pemerintahan yang memanfaatkan </span><span style=\"font-weight: 400;\">informasi dan komunikasi untuk memberikan layanan kepada pengguna SPBE, baik tingkat masyarakat maupun pemerintah itu sendiri, (Diskominfo Bantul, 2022).&nbsp;</span>\n\n<span style=\"font-weight: 400;\">SPBE menjadi komitmen Pemkab Bantul dalam menciptakan budaya digital pada sistem pemerintahan. Terlihat bahwa Kabupaten Bantul masuk ke dalam 100 kabupaten/kota cerdas (</span><i><span style=\"font-weight: 400;\">smart city</span></i><span style=\"font-weight: 400;\">) di Indonesia, </span><span style=\"font-weight: 400;\">(Diskominfo Bantul,</span><span style=\"font-weight: 400;\"> 2022).&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Bupati Bantul Abdul Halim Muslih mengatakan, sebagai pemerintah daerah harus bertransformasi menjadi pemerintah yang cepat dan tanggap. Pemerintah perlu pengembangan inovasi dan implementasi</span><i><span style=\"font-weight: 400;\"> smart city </span></i><span style=\"font-weight: 400;\">agar dapat menjadi</span> <span style=\"font-weight: 400;\">solusi mudah masyarakat mendapatkan informasi secara tepat dan cepat, ujarnya dalam acara workshop tindak lanjut peningkatan Sistem Pemerintah Berbasis Elektronik (SPBE) (</span><span style=\"font-weight: 400;\">jogja.antaranews</span><span style=\"font-weight: 400;\">, 2018).&nbsp;&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Komitmen tersebut tentu terus diupayakan mengingat masyarakat kini bergantung pada SPBE. Tanggung jawab ini kian meningkat usai Kabupaten Bantul mendapat predikat sangat baik saat hasil evaluasi SPBE tahun 2021 dalam skala nasional,&nbsp; </span><span style=\"font-weight: 400;\">(Bantul Kab, 2022).</span>\n\n<span style=\"font-weight: 400;\">Sekretaris Dinas Komunikasi dan Informatika Kabupaten Bantul Dra. Annihayah M.Eng dalam laporannya menyampaikan bahwa Kabupaten Bantul mendapatkan capaian indeks Sangat Baik dalam Evaluasi SPBE tahun 2021 yang diselenggarakan oleh Kementerian Pendayagunaan Aparatur Negara dan Reformasi Birokrasi RI. “Kemenpan-RB menetapkan perolehan Indeks SPBE Kabupaten Bantul mencapai angka 3,62 dengan predikat Sangat Baik, capaian ini tertinggi untuk tingkat Kabupaten/Kota di Indonesia,” ucap Sekretaris Diskominfo </span><span style=\"font-weight: 400;\">(Bantul Kab, 2022).</span>\n\n<span style=\"font-weight: 400;\">Indeks pendukung dari Kabupaten Bantul mencapai prestasi terbaik dapat dilihat dari capain 6 dimensi</span><i><span style=\"font-weight: 400;\"> smart city </span></i><span style=\"font-weight: 400;\">Bantul. Dimensi </span><i><span style=\"font-weight: 400;\">Smart Governance</span></i><span style=\"font-weight: 400;\"> dari 100% program, ini terealisasi 96,2% dan 3,8% belum berjalan, </span><i><span style=\"font-weight: 400;\">Smart Brandin</span></i><span style=\"font-weight: 400;\">g 83,3% berjalan dan 16,7% belum berjalan, </span><i><span style=\"font-weight: 400;\">Smart Economy</span></i><span style=\"font-weight: 400;\"> 100% berjalan,</span><i><span style=\"font-weight: 400;\"> Smart Society </span></i><span style=\"font-weight: 400;\">berjalan 100%, </span><i><span style=\"font-weight: 400;\">Smart Living</span></i><span style=\"font-weight: 400;\"> 90,9% berjalan dan 9,1% belum berjalan, serta </span><i><span style=\"font-weight: 400;\">Smart Environment</span></i><span style=\"font-weight: 400;\"> 100% berjalan dengan baik, </span><span style=\"font-weight: 400;\">(Bantul Kab, 2022)</span><span style=\"font-weight: 400;\">.</span>\n\n<span style=\"font-weight: 400;\">Oleh karena itu, </span><span style=\"font-weight: 400;\">Pemkab Bantul akan terus berupaya dan&nbsp; bersinergi untuk mendukung kemajuan Bantul dalam menghadapi era globalisasi dan perkembangan teknologi digitalisasi era industri 4.0.</span>\n\n<a href=\"https://smartnation.id/kabupaten-bantul-raih-predikat-spbe-terbaik/\"><strong>Referensi</strong></a>`,
    },
  },

  {
    id: useGenerateUniqueId(),
    slug: useCreateSlug("Kabupaten Bantul Raih Predikat SPBE Terbaik"),
    date_gmt: new Date("14 October 2022").toISOString(),
    modified_gmt: new Date("14 October 2022").toISOString(),
    status: "publish",
    categories: [148, 82, 84, 139],
    tags: [],
    author: 1,
    featured_media:
      "https://smartnation.id/wp-content/uploads/2022/10/14okt-1536x896.jpg",
    comment_status: "open",
    title: {
      rendered: "Kabupaten Bantul Raih Predikat SPBE Terbaik",
    },
    excerpt: {
      rendered: `<span style=\"font-weight: 400;\">Sistem Pemerintahan Berbasis Elektronik (SPBE) merupakan penyelenggaraan pemerintahan yang memanfaatkan </span><span style=\"font-weight: 400;\">informasi dan komunikasi untuk memberikan layanan kepada pengguna SPBE, baik tingkat masyarakat maupun pemerintah itu sendiri, (Diskominfo Bantul, 2022).&nbsp;</span>\n\n<span style=\"font-weight: 400;\">SPBE menjadi komitmen Pemkab Bantul dalam menciptakan budaya digital pada sistem pemerintahan. Terlihat bahwa Kabupaten Bantul masuk ke dalam 100 kabupaten/kota cerdas (</span><i><span style=\"font-weight: 400;\">smart city</span></i><span style=\"font-weight: 400;\">) di Indonesia, </span><span style=\"font-weight: 400;\">(Diskominfo Bantul,</span><span style=\"font-weight: 400;\"> 2022).&nbsp;</span`,
    },
    content: {
      rendered: `<span style=\"font-weight: 400;\">Sistem Pemerintahan Berbasis Elektronik (SPBE) merupakan penyelenggaraan pemerintahan yang memanfaatkan </span><span style=\"font-weight: 400;\">informasi dan komunikasi untuk memberikan layanan kepada pengguna SPBE, baik tingkat masyarakat maupun pemerintah itu sendiri, (Diskominfo Bantul, 2022).&nbsp;</span>\n\n<span style=\"font-weight: 400;\">SPBE menjadi komitmen Pemkab Bantul dalam menciptakan budaya digital pada sistem pemerintahan. Terlihat bahwa Kabupaten Bantul masuk ke dalam 100 kabupaten/kota cerdas (</span><i><span style=\"font-weight: 400;\">smart city</span></i><span style=\"font-weight: 400;\">) di Indonesia, </span><span style=\"font-weight: 400;\">(Diskominfo Bantul,</span><span style=\"font-weight: 400;\"> 2022).&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Bupati Bantul Abdul Halim Muslih mengatakan, sebagai pemerintah daerah harus bertransformasi menjadi pemerintah yang cepat dan tanggap. Pemerintah perlu pengembangan inovasi dan implementasi</span><i><span style=\"font-weight: 400;\"> smart city </span></i><span style=\"font-weight: 400;\">agar dapat menjadi</span> <span style=\"font-weight: 400;\">solusi mudah masyarakat mendapatkan informasi secara tepat dan cepat, ujarnya dalam acara workshop tindak lanjut peningkatan Sistem Pemerintah Berbasis Elektronik (SPBE) (</span><span style=\"font-weight: 400;\">jogja.antaranews</span><span style=\"font-weight: 400;\">, 2018).&nbsp;&nbsp;</span>\n\n<span style=\"font-weight: 400;\">Komitmen tersebut tentu terus diupayakan mengingat masyarakat kini bergantung pada SPBE. Tanggung jawab ini kian meningkat usai Kabupaten Bantul mendapat predikat sangat baik saat hasil evaluasi SPBE tahun 2021 dalam skala nasional,&nbsp; </span><span style=\"font-weight: 400;\">(Bantul Kab, 2022).</span>\n\n<span style=\"font-weight: 400;\">Sekretaris Dinas Komunikasi dan Informatika Kabupaten Bantul Dra. Annihayah M.Eng dalam laporannya menyampaikan bahwa Kabupaten Bantul mendapatkan capaian indeks Sangat Baik dalam Evaluasi SPBE tahun 2021 yang diselenggarakan oleh Kementerian Pendayagunaan Aparatur Negara dan Reformasi Birokrasi RI. “Kemenpan-RB menetapkan perolehan Indeks SPBE Kabupaten Bantul mencapai angka 3,62 dengan predikat Sangat Baik, capaian ini tertinggi untuk tingkat Kabupaten/Kota di Indonesia,” ucap Sekretaris Diskominfo </span><span style=\"font-weight: 400;\">(Bantul Kab, 2022).</span>\n\n<span style=\"font-weight: 400;\">Indeks pendukung dari Kabupaten Bantul mencapai prestasi terbaik dapat dilihat dari capain 6 dimensi</span><i><span style=\"font-weight: 400;\"> smart city </span></i><span style=\"font-weight: 400;\">Bantul. Dimensi </span><i><span style=\"font-weight: 400;\">Smart Governance</span></i><span style=\"font-weight: 400;\"> dari 100% program, ini terealisasi 96,2% dan 3,8% belum berjalan, </span><i><span style=\"font-weight: 400;\">Smart Brandin</span></i><span style=\"font-weight: 400;\">g 83,3% berjalan dan 16,7% belum berjalan, </span><i><span style=\"font-weight: 400;\">Smart Economy</span></i><span style=\"font-weight: 400;\"> 100% berjalan,</span><i><span style=\"font-weight: 400;\"> Smart Society </span></i><span style=\"font-weight: 400;\">berjalan 100%, </span><i><span style=\"font-weight: 400;\">Smart Living</span></i><span style=\"font-weight: 400;\"> 90,9% berjalan dan 9,1% belum berjalan, serta </span><i><span style=\"font-weight: 400;\">Smart Environment</span></i><span style=\"font-weight: 400;\"> 100% berjalan dengan baik, </span><span style=\"font-weight: 400;\">(Bantul Kab, 2022)</span><span style=\"font-weight: 400;\">.</span>\n\n<span style=\"font-weight: 400;\">Oleh karena itu, </span><span style=\"font-weight: 400;\">Pemkab Bantul akan terus berupaya dan&nbsp; bersinergi untuk mendukung kemajuan Bantul dalam menghadapi era globalisasi dan perkembangan teknologi digitalisasi era industri 4.0.</span>\n\n<a href=\"https://smartnation.id/kabupaten-bantul-raih-predikat-spbe-terbaik/\"><strong>Referensi</strong></a>`,
    },
  },
];

export { posts };
