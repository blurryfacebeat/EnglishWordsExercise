// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxtjs/axios'],

  app: {
    head: {
      title: 'English Words Exercise',
      meta: [{ name: 'description', content: 'Clone of Duolingo english words exercise' }],
    },
  },

  typescript: {
    strict: true,
  },
});
