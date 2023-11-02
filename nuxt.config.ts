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

  // Nuxt.js modules
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "@nuxtjs/robots",
    "nuxt-bootstrap-icons",
    "nuxt-swiper",
    "@nuxtjs/color-mode",
    "@vite-pwa/nuxt",
  ],

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      // titleTemplate: "%s - Smart Nation",
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} - Site Title` : "Site Title";
      },
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/logo-smartnation-id-03.png",
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

  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "Smart Nation",
      short_name: "Smart Nation",
      description:
        "Citiasia Center for Smart Nation (CCSN) merupakan salah satu sayap strategis dari Citiasia Inc. dalam menyebarkan semangat membangun bangsa menuju Indonesia Smart Nation",
      display: "standalone",
      start_url: "/",
      background_color: "#fff",
      theme_color: "#fff",
      icons: [
        {
          src: "/logo-smartnation-id_64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "/logo-smartnation-id_192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/logo-smartnation-id_512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "/logo-smartnation-id_512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
      runtimeCaching: [
        {
          handler: "NetworkOnly",
          urlPattern: /\/api\/.*\/*.json/,
          method: "POST",
          options: {
            backgroundSync: {
              name: "smartnationQueueName",
              options: {
                maxRetentionTime: 24 * 60,
              },
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
      type: "module",
    },
  },

  robots: {
    /* module options */
    rules: [
      { UserAgent: "*" },
      { Disallow: "/" },
      { BlankLine: true },
      { Comment: "Comment here" },
      // Be aware that this will NOT work on target: 'static' mode
      { Sitemap: (req: any) => `https://${req.headers.host}/sitemap.xml` },
    ],
  },
});
