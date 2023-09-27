type Posts = {
  id: number;
  date: string | number | boolean | null | undefined | symbol | Date;
  date_gmt: string | number | boolean | null | undefined | symbol | Date;
  guid: { rendered: string };
  modified: string | number | boolean | null | undefined | symbol | Date;
  modified_gmt: string | number | boolean | null | undefined | symbol | Date;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean | null | undefined;
  };
  excerpt: {
    rendered: string;
    protected: boolean | null | undefined;
  };
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean | null | undefined;
  template: string | undefined;
  format: string;
  meta: {
    _mi_skip_tracking: boolean | null | undefined;
    cybocfi_hide_featured_image: string | undefined;
    footnotes: string | undefined;
  };
  categories: Array<number>;
  tags: Array<number>;
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
    author: [
      {
        embeddable: boolean | undefined | null;
        href: string;
      }
    ];
    replies: [
      {
        embeddable: boolean | undefined | null;
        href: string;
      }
    ];
    'version-history': [
      {
        count: number;
        href: string;
      }
    ];
    'predecessor-version': [
      {
        id: number;
        href: string;
      }
    ];
    'wp:featuredmedia': [
      {
        embeddable: boolean | undefined | null;
        href: string;
      }
    ];
    'wp:attachment': [
      {
        href: string;
      }
    ];
    'wp:term': [
      {
        taxonomy: string;
        embeddable: boolean | undefined | null;
        href: string;
      },
      {
        taxonomy: 'post_tag';
        embeddable: boolean | undefined | null;
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
