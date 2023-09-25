// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: { strict: false },
  devtools: { enabled: true },
  ssr: true,

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

  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxtjs/robots',
    'nuxt-bootstrap-icons',
    'nuxt-swiper',
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
