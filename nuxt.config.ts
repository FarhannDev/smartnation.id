// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: { strict: true },
  devtools: { enabled: true },
  ssr: true,

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
});
