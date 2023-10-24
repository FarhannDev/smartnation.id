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
    description: "",
    name: "Artikel",
    slug: "artikel",
    taxonomy: "category",
    parent: 0,
  },
  {
    id: 82,
    count: 222,
    description: "",
    name: "Berita",
    slug: "berita",
    taxonomy: "category",
    parent: 0,
  },
  {
    id: 83,
    count: 30,
    description: "",
    name: "Citiasia Inc",
    slug: "citiasiainc",
    taxonomy: "category",
    parent: 82,
  },
  {
    id: 84,
    count: 28,
    description: "",
    name: "Daerah",
    slug: "daerah",
    taxonomy: "category",
    parent: 82,
  },
  {
    id: 88,
    count: 6,
    description: "",
    name: "Events",
    slug: "events",
    taxonomy: "category",
    parent: 0,
  },
  {
    id: 145,
    count: 19,
    description: "",
    name: "Government",
    slug: "gov",
    taxonomy: "category",
    parent: 0,
  },
  {
    id: 117,
    count: 3,
    description: "",
    name: "Health",
    slug: "health",
    taxonomy: "category",
    parent: 0,
  },
  {
    id: 101,
    count: 21,
    description: "",
    name: "Insight",
    slug: "insight",
    taxonomy: "category",
    parent: 0,
  },
  {
    id: 85,
    count: 7,
    description: "",
    name: "Internasional",
    slug: "internasional",
    taxonomy: "category",
    parent: 82,
  },
  {
    id: 89,
    count: 0,
    description: "",
    name: "ISCIF",
    slug: "iscif-events",
    taxonomy: "category",
    parent: 88,
  },

  {
    id: 90,
    count: 9,
    description: "",
    name: "ISNA",
    slug: "isna-events",
    taxonomy: "category",
    parent: 88,
  },

  {
    id: 91,
    count: 27,
    description: "",
    name: "ISNA 2015",
    slug: "isna-2015",
    taxonomy: "category",
    parent: 90,
  },
  {
    id: 92,
    count: 0,
    description: "",
    name: "ISNA 2016",
    slug: "isna-2016",
    taxonomy: "category",
    parent: 90,
  },
  {
    id: 93,
    count: 2,
    description: "",
    name: "ISNA 2018",
    slug: "isna-2018",
    taxonomy: "category",
    parent: 90,
  },
  {
    id: 94,
    count: 11,
    description: "",
    name: "ISNA 2020",
    slug: "isna-2020",
    taxonomy: "category",
    parent: 90,
  },
  {
    id: 155,
    count: 11,
    description: "",
    name: "ISNA 2022",
    slug: "isna-2022",
    taxonomy: "category",
    parent: 90,
  },

  {
    id: 86,
    count: 45,
    description: "",
    name: "Nasional",
    slug: "nasional",
    taxonomy: "category",
    parent: 82,
  },

  {
    id: 139,
    count: 64,
    description: "",
    name: "Smart City",
    slug: "smartcity",
    taxonomy: "category",
    parent: 0,
  },

  {
    id: 154,
    count: 16,
    description: "",
    name: "Smartnation 2022",
    slug: "smartnation-2022",
    taxonomy: "category",
    parent: 0,
  },
  {
    id: 137,
    count: 27,
    description: "",
    name: "Technology",
    slug: "tech",
    taxonomy: "category",
    parent: 0,
  },

  {
    id: 129,
    count: 3,
    description: "",
    name: "Training",
    slug: "training",
    taxonomy: "category",
    parent: 0,
  },

  {
    id: 112,
    count: 5,
    description: "",
    name: "World",
    slug: "world",
    taxonomy: "category",
    parent: 0,
  },
];

export { categories };
