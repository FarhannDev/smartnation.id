type Categories = {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  meta: [];
  _links: {
    self: [
      {
        href: 'https://smartnation.id/wp-json/wp/v2/categories/148';
      }
    ];
    collection: [
      {
        href: 'https://smartnation.id/wp-json/wp/v2/categories';
      }
    ];
    about: [
      {
        href: 'https://smartnation.id/wp-json/wp/v2/taxonomies/category';
      }
    ];
    'wp:post_type': [
      {
        href: 'https://smartnation.id/wp-json/wp/v2/posts?categories=148';
      }
    ];
    curies: [
      {
        name: 'wp';
        href: 'https://api.w.org/{rel}';
        templated: true;
      }
    ];
  };
};
