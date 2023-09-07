type GetPosts = {
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
  categories: number[];
  tags: number[];
  _links: {
    self: [
      {
        href: 'https://smartnation.id/wp-json/wp/v2/posts/10220';
      }
    ];
    collection: [
      {
        href: 'https://smartnation.id/wp-json/wp/v2/posts';
      }
    ];
    about: [
      {
        href: 'https://smartnation.id/wp-json/wp/v2/types/post';
      }
    ];
    author: [
      {
        embeddable: true;
        href: 'https://smartnation.id/wp-json/wp/v2/users/6';
      }
    ];
    replies: [
      {
        embeddable: true;
        href: 'https://smartnation.id/wp-json/wp/v2/comments?post=10220';
      }
    ];
    'version-history': [
      {
        count: 3;
        href: 'https://smartnation.id/wp-json/wp/v2/posts/10220/revisions';
      }
    ];
    'predecessor-version': [
      {
        id: 10232;
        href: 'https://smartnation.id/wp-json/wp/v2/posts/10220/revisions/10232';
      }
    ];
    'wp:featuredmedia': [
      {
        embeddable: true;
        href: 'https://smartnation.id/wp-json/wp/v2/media/10223';
      }
    ];
    'wp:attachment': [
      {
        href: 'https://smartnation.id/wp-json/wp/v2/media?parent=10220';
      }
    ];
    'wp:term': [
      {
        taxonomy: 'category';
        embeddable: true;
        href: 'https://smartnation.id/wp-json/wp/v2/categories?post=10220';
      },
      {
        taxonomy: 'post_tag';
        embeddable: true;
        href: 'https://smartnation.id/wp-json/wp/v2/tags?post=10220';
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

type Media = {
  id: number;
  date: string | number | boolean | null | undefined | symbol | Date;
  date_gmt: string | number | boolean | null | undefined | symbol | Date;
  guid: { rendered: string };
  modified: string | number | boolean | null | undefined | symbol | Date;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: { rendered: string };
  author: number;
  comment_status: string;
  ping_status: string;
  template: string | null | undefined;
  meta: {
    _mi_skip_tracking: boolean | null | undefined;
    cybocfi_hide_featured_image: string | null | undefined;
  };
  description: { rendered: string };
  caption: { rendered: string | null | undefined };
  alt_text: string;
  media_type: string;
  mime_type: string;
  media_details: {
    width: number;
    height: number;
    file: string;
    filesize: number;
    sizes: {
      medium: {
        file: string;
        width: number;
        height: number;
        filesize: number;
        mime_type: string;
        source_url: string;
      };
      large: {
        file: string;
        width: number;
        height: number;
        filesize: number;
        mime_type: string;
        source_url: string;
      };
      thumbnail: {
        file: string;
        width: number;
        height: number;
        filesize: number;
        mime_type: string;
        source_url: string;
      };
      medium_large: {
        file: string;
        width: number;
        height: number;
        filesize: number;
        mime_type: string;
        source_url: string;
      };
      disto_justify_feature: {
        file: string;
        width: number;
        height: number;
        filesize: number;
        mime_type: string;
        source_url: string;
      };
      disto_small_feature: {
        file: string;
        width: number;
        height: number;
        filesize: number;
        mime_type: string;
        source_url: string;
      };
      disto_large_feature_image: {
        file: string;
        width: number;
        height: number;
        filesize: number;
        mime_type: string;
        source_url: string;
      };
      disto_slider_grid_large: {
        file: string;
        width: number;
        height: number;
        filesize: number;
        mime_type: string;
        source_url: string;
      };
      disto_grid_single: {
        file: string;
        width: number;
        height: number;
        filesize: number;
        mime_type: string;
        source_url: string;
      };
      disto_slider_grid_small: {
        file: string;
        width: number;
        height: number;
        filesize: number;
        mime_type: string;
        source_url: string;
      };
      disto_carousel_small: {
        file: string;
        width: number;
        height: number;
        filesize: number;
        mime_type: string;
        source_url: string;
      };
      full: {
        file: string;
        width: number;
        height: number;
        filesize: number;
        mime_type: string;
        source_url: string;
      };
    };
    image_meta: {
      aperture: string | undefined | null;
      credit: string | undefined | null;
      camera: string | undefined | null;
      caption: string | undefined | null;
      created_timestamp: string | undefined | null;
      copyright: string | undefined | null;
      focal_length: string | undefined | null;
      iso: string | undefined | null;
      shutter_speed: string | undefined | null;
      title: string | undefined | null;
      orientation: string | undefined | null;
      keywords: string[];
    };
  };
  post: number;
  source_url: string;
  _links: {
    self: [
      {
        href: 'https://smartnation.id/wp-json/wp/v2/media/10223';
      }
    ];
    collection: [
      {
        href: 'https://smartnation.id/wp-json/wp/v2/media';
      }
    ];
    about: [
      {
        href: 'https://smartnation.id/wp-json/wp/v2/types/attachment';
      }
    ];
    author: [
      {
        embeddable: true;
        href: 'https://smartnation.id/wp-json/wp/v2/users/6';
      }
    ];
    replies: [
      {
        embeddable: true;
        href: 'https://smartnation.id/wp-json/wp/v2/comments?post=10223';
      }
    ];
  };
};
