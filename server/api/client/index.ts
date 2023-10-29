import useGenerateUniqueId from "~/composables/useGenerateUniqueId";

interface Client {
  id: number | string;
  name: string;
  logo: string;
}

const clients: Client[] = [
  {
    id: useGenerateUniqueId(),
    name: "DPR",
    logo: "/images/client/dpr.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "OXFORD",
    logo: "/images/client/oxford.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "SHAPE",
    logo: "/images/client/shape.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "BAPPENAS",
    logo: "/images/client/bappenas.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "INDOSAT",
    logo: "/images/client/indosat.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "TELKOM",
    logo: "/images/client/telkom.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "DATACOMM",
    logo: "/images/client/datacomm.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "SOFTWARE ONE",
    logo: "/images/client/software_one.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "ORACLE",
    logo: "/images/client/oracle.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "QLUE",
    logo: "/images/client/qlue.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "VOLTRAS",
    logo: "/images/client/voltras.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "DOT SOLUTION",
    logo: "/images/client/dot_solution.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "iNEWS",
    logo: "/images/client/i_news.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "SINDO TRIJAYA",
    logo: "/images/client/sindo_trijaya.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "KORAN SINDO",
    logo: "/images/client/koran_sindo.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "TOYOTA",
    logo: "/images/client/toyota.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "PERTAMINA",
    logo: "/images/client/pertamina.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "INFOMEDIA",
    logo: "/images/client/infomedia.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "PEGADAIAN",
    logo: "/images/client/pergadaian.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "MANDOM",
    logo: "/images/client/mandom.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "PEKANBARU",
    logo: "/images/client/pekanbaru.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "BANDUNG",
    logo: "./images/client/bandung.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "SAMARINDA",
    logo: "/images/client/samarinda.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "APEKSI",
    logo: "/images/client/apeksi.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "Muara Enim Smart Regency Kabupaten Muara Enim",
    logo: "/images/client/muara_enim.png",
  },
  {
    id: useGenerateUniqueId(),
    name: "Jeneponto Smart Branding Kabupaten Jeneponto",
    logo: "/images/client/jeneponto.png",
  },
];

export default defineEventHandler((event) => {
  const data = {
    toJSON() {
      return clients.sort((a, b) => b.name.localeCompare(a.name));
    },
  };

  return data;
});
