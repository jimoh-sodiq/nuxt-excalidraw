// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/devtools",
    "@vueuse/nuxt",
    "@nuxt/ui",
    "nuxt-icon",
    "@vite-pwa/nuxt",
  ],
  ssr: false,
  pwa: {
    manifest: {
      name: "Nuxt Excalidraw",
      short_name: "NuxtCalidraw",
      start_url: "/",
      display: "standalone",
      theme_color: "#ffffff",
      background_color: "#ffffff",
      description: "A Clone of Excalidraw",
      orientation: "natural",
      icons: [
        {
          src: "pwa-64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any",
        },
        {
          src: "maskable-icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
});
