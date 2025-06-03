export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      appName: process.env.APP_NAME || "Aplicación por defecto",
      volttimeKey: process.env.VOLTTIME_KEY,
    }
  }, 
  modules: ['@nuxt/image', '@nuxt/ui', '@nuxt/icon'],
  css: ["~/styles/style.css", "bootstrap-icons/font/bootstrap-icons.css", 'leaflet/dist/leaflet.css', "@fortawesome/fontawesome-free/css/all.min.css"],
  plugins: ["~/plugins/pinia.js", { src: "~/plugins/vue-echarts", mode: "client" }],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css",
        },
      ],
    },
  },
});
