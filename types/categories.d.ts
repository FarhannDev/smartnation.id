type Category = {
  id: number;
  count: number;
  description: string | null;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: null;
  meta: any[];
  _links: {
    self: [
      {
        href: string;
      }
    ];
    collection: [
      {
        href: string;
      }
    ];
    about: [
      {
        href: string;
      }
    ];
    'wp:post_type': [
      {
        href: string;
      }
    ];
    curies: [
      {
        name: string;
        href: string;
        templated: boolean | undefined | null;
      }
    ];
  };
};
