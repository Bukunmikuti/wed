// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  css: ["@/assets/css/main.less"],

  vite: {
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import './assets/css/theme.less';`,
        },
      },
    },
  },

  app: {
    head: {
      link: [
        { rel: "preload", as: "image", href: "./assets/images/img1.jpg" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,200..900&family=Poppins:wght@400;500;600;700;900&family=Raleway:wght@400;800&display=swap",
        },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#F2C4F2" },
        { charset: "utf-8" },
      ],
    },
  },

  modules: ["nuxt-icon", "nuxt-primevue"],
});
