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
    emitRouteChunkError: "automatic", // or 'manual' or false.
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
            name: "styles",
            test: /\.(css|vue)$/,
            chunks: "all",
            enforce: true,
          },
        },
      },
    },
  },
  hooks: {
    "build:manifest": (manifest) => {
      // find the app entry, css list
      const css = manifest["node_modules/nuxt/dist/app/entry.js"]?.css;
      if (css) {
        // start from the end of the array and go to the beginning
        for (let i = css.length - 1; i >= 0; i--) {
          // if it starts with 'entry', remove it from the list
          if (css[i].startsWith("entry")) css.splice(i, 1);
        }
      }
    },
  },

  // Nuxt.js modules
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxtjs/robots",
    "nuxt-bootstrap-icons",
    "nuxt-swiper",
    "@nuxtjs/color-mode",
  ],

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      titleTemplate: "%s - SmartNation",
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",
        },
      ],
    },
  },
  plugins: [
    { src: "~/plugins/useBootstrap.client.ts", mode: "client", ssr: false },
    {
      src: "~/plugins/useAnimateOnScroll.client.ts",
      mode: "client",
      ssr: false,
    },
  ],
  css: [
    "~/assets/css/index.css",
    "~/node_modules/bootstrap/dist/css/bootstrap.min.css",
    "~/node_modules/aos/dist/aos.css",
  ],

  googleFonts: {
    display: "swap", // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
    prefetch: true,
    preconnect: true,
    preload: true,
    useStylesheet: true,
    families: { Poppins: [300, 400, 500, 600, 700] },
  },

  image: {
    inject: true,
    quality: 80,
    format: ["webp", "png"],
    domains: ["https://smartnation.id"],
  },

  // Nuxt.js Color Mode configuration
  colorMode: {
    preference: "light", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_CCSN_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-ccsn-color-mode",
  },
});
