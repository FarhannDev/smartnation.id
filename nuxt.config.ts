// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: { strict: false },
  devtools: { enabled: true },
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
      titleTemplate: '%s - Smartnation',
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
      Roboto: true,
      Inter: [400, 700],
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100],
      },
      Poppins: [300, 400, 500, 600, 700],
    },
    // options...
  },
});
