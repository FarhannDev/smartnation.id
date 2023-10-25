import useGenerateUniqueId from "~/composables/useGenerateUniqueId";

interface Teams {
  id: number | string;
  name: string;
  jobs: string;
  description: string;
  thumbnail: string;
}

const teams: Teams[] = [
  {
    id: useGenerateUniqueId(),
    name: "Dr. Ir. Cahyana Ahmadjayadi",
    jobs: "Co-Founder & Chairman",
    description:
      "Dr. Cahyana pernah menjadi pejabat eselon satu di 3 kementrian( Kementrian Otda, Kemendagri, Kominfo), pernah menjadi direktur dan komisaris di beberapa BUMN dan perusahaan swasta (PT. Pos, Bank Mandiri, Lintas Artha), dan seorang figur terkemuka di bidang TIK. Dr. Cahyana merupakan lulusan Insitut Teknologi Bandung yang mengambil Doktor di bidang Cyber Security.",
    thumbnail: "/images/teams/dr-ir-cahyana-ahmadjayadi.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "Farid Subkhan",
    jobs: "Co-Founder & Chairman",
    description:
      "Farid Subkhan telah berpengalaman memimpin tim perencanaan dan implementasi proyek konsultansi berskala nasional dan internasional selama lebih dari useGenerateUniqueId()5 tahun. Sebelum bergabung dengan Citiasia, Farid menjadi executive di konsultan manajemen terbesar di Indonesia dan berpengalaman menjalankan proyek branding untuk berbagai perusahaan dan instansi pemerintah. Farid memiliki dua gelar master, dari University of Turin (Italia) dan dari Fakultas Ekonomi Universitas Indonesia.",
    thumbnail: "/images/teams/farid-subkhan.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "Rosidi Wiradinata",
    jobs: "Co-Founder",
    description:
      "Mr. Rosidi memiliki pengalaman yang luas selama lebih dari 30 tahun di bidang Telekomunikasi dan industri ICT. Mr. Rosidi memperoleh M.Sc Teleinformatics dari École Nationale des telekomunikasi, Perancis dan M.Sc Informatika dari Université de Technologie de Compiègne, Prancis.",
    thumbnail: "/images/teams/rosidi-wiradinata.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "Fitrah Rachmat Kautsar",
    jobs: "Chief Operationg Officer",
    description:
      "Fitrah Rachmat Kautsar mengambil Master Ekonomi di Universitas Indonesia dan sejak 20useGenerateUniqueId()0, sebelum bergabung dengan Citiasia, menjadi staf ahli Bappenas yang memfasilitasi penyusunan RPJMD, Renstra, master plan dan blueprint CSR, e-gov, dan IT, ranperda terkait perencanaan, di lebih dari useGenerateUniqueId()5 provinsi dan kabupaten/kota. Fitrah juga memimpin proyek penulisan Buku “Revolusi Digital Menuju Indonesia Smart Nation” dan Studi Tahunan tentang Indeks Kesiapan Daerah Pintar.",
    thumbnail: "/images/teams/fitrah-rachmat-kautsar.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "Hari Kusdaryanto",
    jobs: "Chief Strategy Officer",
    description:
      "Hari Kusdaryanto memiliki 15 tahun pengalaman dalam mengelola program-program dari berbagai lembaga pembangunan internasional seperti USAID, AUSAID, CIDA Kanada, World Bank, British Embassy, terkait dengan riset, bantuan teknis, dan pengembangan kapasitas untuk kementrian, pemerintah daerah, universitas, atau LSM/CSOs. Hari adalah pemegang Master of Development dari University of Turin, Italia, serta pernah mengenyam pendidikan di National University of Singapore.",
    thumbnail: "/images/teams/hari-kusdaryanto.png",
  },
];

export default defineEventHandler((event) => {
  const data = {
    toJSON() {
      return teams.sort((a, b) => a.name.localeCompare(b.name));
    },
  };

  return data;
});
