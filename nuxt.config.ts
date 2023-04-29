// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/styles/main.scss'],

  modules: ['@pinia/nuxt'],

  typescript: {
    strict: true,
  },

  app: {
    head: {
      title: 'English Words Exercise',
      meta: [{ name: 'description', content: 'Clone of Duolingo english words exercise' }],
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
});
