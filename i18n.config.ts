import enLang from "./lang/en.lang"
import esLang from "./lang/es.lang"

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: enLang,
    es: esLang,
  },
  locales: [
    {
      code: 'en',
      iso: 'en-US'
    },
    {
      code: 'es',
      iso: 'es-ES'
    },
  ],
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'nook_lang',
    redirectOn: 'root',
  },
}))
