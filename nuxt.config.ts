// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/i18n", "@nuxt/ui", "@nuxt/image"],

  colorMode: {
    preference: "dark",
  },

  i18n: {
    vueI18n: "./i18n.config.ts",
  },

  ssr: false,

  experimental: {
    viewTransition: true,
  },

  nitro: {
    static: true,
  },

  compatibilityDate: "2024-09-04",
});
