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
    '@nuxtjs/color-mode',
    'nuxt-bootstrap-icons',
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
    // options
    inject: true,
    quality: 80,
    format: ['webp'],
  },

  googleFonts: {
    families: {
      Poppins: [300, 400, 500, 600],
    },
    // options...
  },

  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode',
  },
});
