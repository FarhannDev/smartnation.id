// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  typescript: { strict: true },
  devtools: { enabled: true },
  ssr: true,
  experimental: {
    inlineSSRStyles: true, // or a function to determine inlining
    clientFallback: true,
    crossOriginPrefetch: true,
    viewTransition: true,
    writeEarlyHints: true,
    payloadExtraction: true,
    emitRouteChunkError: 'automatic', // or 'manual' or false.
    inlineRouteRules: true,
    renderJsonPayloads: true,
  },
  webpack: {
    extractCSS: true,
    optimization: {
      splitChunks: {
        layouts: true,
        pages: true,
        commons: true,
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  },

  // Nuxt.js modules
  modules: [
    '@nuxt/image',
    '@nuxtjs/robots',
    'nuxt-bootstrap-icons',
    'nuxt-swiper',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt',
  ],

  plugins: [
    { src: '~/plugins/useBootstrap.client.ts', mode: 'client', ssr: false },
    {
      src: '~/plugins/useAnimateOnScroll.client.ts',
      mode: 'client',
      ssr: false,
    },
  ],

  css: [
    '~/assets/css/index.css',
    '~/assets/css/custom-scrollbar.css',
    '~/node_modules/bootstrap/dist/css/bootstrap.min.css',
    '~/node_modules/aos/dist/aos.css',
  ],

  hooks: {
    'build:manifest': (manifest) => {
      // find the app entry, css list
      const css = manifest['node_modules/nuxt/dist/app/entry.js']?.css;
      if (css) {
        // start from the end of the array and go to the beginning
        for (let i = css.length - 1; i >= 0; i--) {
          // if it starts with 'entry', remove it from the list
          if (css[i].startsWith('entry')) css.splice(i, 1);
        }
      }
    },
  },

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
      // titleTemplate: "%s - Smart Nation",
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - Site Title` : 'Site Title';
      },
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/logo-smartnation-id-03.png',
        },

        // CDN https://fonts.google.com
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap',
        },

        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css',
        },
      ],

      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js',
          integrity:
            'sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r',
          crossorigin: 'anonymous',
          async: 'true',
        },
      ],
    },
  },

  image: {
    inject: true,
    quality: 75,
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

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Smart Nation',
      short_name: 'Smart Nation',
      description:
        'Citiasia Center for Smart Nation (CCSN) merupakan salah satu sayap strategis dari Citiasia Inc. dalam menyebarkan semangat membangun bangsa menuju Indonesia Smart Nation',
      display: 'standalone',
      start_url: '/',
      background_color: '#fff',
      theme_color: '#fff',
      icons: [
        {
          src: '/logo-smartnation-id_64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: '/logo-smartnation-id_192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/logo-smartnation-id_512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: '/logo-smartnation-id_512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{png,svg,ico}'],
      runtimeCaching: [
        {
          urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'google-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
          handler: 'CacheFirst',
          options: {
            cacheName: 'gstatic-fonts-cache',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
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
