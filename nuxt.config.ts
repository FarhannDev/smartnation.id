// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: { strict: false },
  devtools: { enabled: true },
  ssr: true,
  $production: {
    routeRules: {
      '/**': { isr: true },
      
    },
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxtjs/robots',
    'nuxt-bootstrap-icons',
    'nuxt-swiper',
  ],

  plugins: [
    {
      src: '~/plugins/useBootstrap.client.ts',
      mode: 'client',
    },
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s - SmartNation',
    },
  },

  css: ['~/assets/css/global.css'],

  // Configuration modules
  image: {
    inject: true,
    quality: 75,
    format: ['webp'],
  },

  googleFonts: {
    display: 'swap', // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
    prefetch: true,
    preconnect: true,
    preload: true,
    useStylesheet: true,
    families: {
      Poppins: [300, 400, 500, 600, 700],
    },
    // options...
  },
});
