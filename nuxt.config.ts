// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  typescript: { strict: true },
  devtools: { enabled: true },
  ssr: true,

  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: '123',
    // Public keys that are exposed to the client
    public: {
      apiBase:
        process.env.NUXT_PUBLIC_API_BASE ||
        'https://smartnation.id/wp-json/wp/v2',
    },
  },

  // Nuxt.js modules
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxtjs/robots',
    'nuxt-bootstrap-icons',
    'nuxt-swiper',
    '@nuxtjs/color-mode',
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s - SmartNation',
    },
  },
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
    '~/node_modules/bootstrap/dist/css/bootstrap.css',
    '~/node_modules/aos/dist/aos.css',
  ],

  googleFonts: {
    display: 'swap', // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
    prefetch: true,
    preconnect: true,
    preload: true,
    useStylesheet: true,
    families: { Poppins: [300, 400, 500, 600, 700] },
  },

  image: { inject: true },

  // Nuxt.js Color Mode configuration
  colorMode: {
    preference: 'light', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode',
  },
});
