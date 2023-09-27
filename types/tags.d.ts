type Tags = {
  id: number;
  count: number;
  description: string | undefined | null;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  meta: [];
  _links: {
    self: [
      {
        href: 'https://smartnation.id/wp-json/wp/v2/tags/127';
      }
    ];
    collection: [
      {
        href: 'https://smartnation.id/wp-json/wp/v2/tags';
      }
    ];
    about: [
      {
        href: 'https://smartnation.id/wp-json/wp/v2/taxonomies/post_tag';
      }
    ];
    'wp:post_type': [
      {
        href: 'https://smartnation.id/wp-json/wp/v2/posts?tags=127';
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
