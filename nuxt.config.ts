// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/ui',
    '@nuxt/image',
    'nuxt-twemoji'
  ],
  colorMode: {
    preference: 'dark'
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  ssr: true,
  nitro: {
    preset: 'node-server'
  }
})
