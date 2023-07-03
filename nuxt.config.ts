// https://nuxt.com/docs/getting-started/configuration
export default defineNuxtConfig({
  // https://nuxt.com/docs/api/configuration/nuxt-config
  app: {
    head: {
      title: "Nuxt 3 with TailwindCSS Template",
      meta: [
        {
          name: "description",
          content: "Default description for this website",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
    // https://nuxt.com/docs/getting-started/transitions
    pageTransition: { name: "page", mode: "out-in" },
  },
  devtools: { enabled: true },
  // https://tailwindcss.nuxtjs.org/getting-started/setup
  modules: ["@nuxtjs/tailwindcss"],
});
