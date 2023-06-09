// https://nuxt.com/docs/api/configuration/nuxt-config
import { I18N_LOCALE } from './i18n/i18n.types';

export default defineNuxtConfig({
  css: ['@/assets/styles/main.scss'],

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    'nuxt-svgo',
    '@nuxt/image-edge',
    ['@vee-validate/nuxt', { autoImports: true }],
  ],

  typescript: {
    strict: true,
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'English Words Exercise',
      meta: [{ name: 'description', content: 'English Words Exercise application' }],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @import "@/assets/styles/_variables.scss";
          @import "@/assets/styles/_mixins.scss";
          `,
        },
      },
    },
  },

  pinia: {
    autoImports: [['defineStore', 'definePiniaStore']],
  },

  i18n: {
    locales: Object.values(I18N_LOCALE),
    defaultLocale: I18N_LOCALE.EN,
    vueI18n: './i18n/i18n.config.ts',
  },
});
