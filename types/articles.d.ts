type Articles = {
  id: string | number;
  title: string;
  content: string;
  category: string[];
  cover: string;
  createdAt: string | number | boolean | null | undefined | symbol | Date;
  updatedAt: string | number | boolean | null | undefined | symbol | Date;
};

type Category =
  | 'Berita'
  | 'Artikel'
  | 'Citiasia inc'
  | 'Daerah'
  | 'Goverment'
  | 'Healt'
  | 'Insight'
  | 'Internasional'
  | 'Nasional'
  | 'ISNA';
