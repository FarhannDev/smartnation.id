// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: { strict: true },
  devtools: { enabled: true },
  ssr: true,

  // Nuxt.js modules
  modules: [
    '@nuxt/image',
    '@nuxtjs/robots',
    'nuxt-bootstrap-icons',
    'nuxt-swiper',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
  ],

  // Initiaze plugins or configuration package
  plugins: [
    { src: '~/plugins/useBootstrap.client.ts', mode: 'client', ssr: false },
    {
      src: '~/plugins/useAnimateOnScroll.client.ts',
      mode: 'client',
      ssr: false,
    },
  ],

  components: ['~/components'],

  css: [
    '~/assets/css/index.css',
    '~/assets/css/custom-scrollbar.css',
    '~/assets/css/custom-swiper-navigation.css',
    '~/assets/css/custom-swiper-pagination.css',
    '~/assets/css/themes/dark-mode.theme.css',
    '~/node_modules/bootstrap/dist/css/bootstrap.min.css',
    '~/node_modules/aos/dist/aos.css',
  ],

  app: {
    head: {
      meta: [
        { name: 'charset', content: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#fff' },
        {
          name: 'description',
          content:
            'Citiasia Center for Smart Nation (CCSN) merupakan salah satu sayap strategis dari Citiasia Inc. dalam menyebarkan semangat membangun bangsa menuju Indonesia Smart Nation',
        },
        { name: 'keywords', content: 'Sarana Berita Smart City Terkini' },
        { name: 'author', content: 'Smart Nation' },
      ],
      titleTemplate: '%s - Smart Nation',
      // titleTemplate: (titleChunk) => {
      //   return titleChunk ? `${titleChunk} - Site Title` : 'Site Title';
      // },
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/logo-smartnation-id-03.png',
        },
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css',
        },
      ],
    },
  },

  googleFonts: {
    display: 'swap',
    preconnect: false,
    families: {
      Poppins: {
        wght: [300, 400, 500, 600, 700],
        ital: [300, 400, 500, 600, 700],
      },
      OpenSans: {
        wght: [300, 400, 500, 600],
        ital: [300, 400, 500, 600],
      },
    },
  },

  image: {
    inject: true,
    quality: 100,
    format: ['webp', 'png'],
    domains: ['https://smartnation.id'],
  },

  // Nuxt.js Color Mode configuration
  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_CCSN_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-ccsn-color-mode',
  },

  robots: {
    /* module options */
    rules: [
      { UserAgent: '*' },
      { Disallow: '/' },
      { BlankLine: true },
      { Comment: 'Comment here' },
      // Be aware that this will NOT work on target: 'static' mode
      { Sitemap: (req: any) => `https://${req.headers.host}/sitemap.xml` },
    ],
  },
});
