export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      appName: process.env.APP_NAME || "Aplicación por defecto"
    }
  }, // <- Aquí faltaba la coma
  modules: ['@nuxt/image', '@nuxt/ui', '@nuxt/icon'],
  css: ["~/styles/style.css", "bootstrap-icons/font/bootstrap-icons.css"],
  plugins: [{ src: "~/plugins/vue-echarts", mode: "client" }],
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
