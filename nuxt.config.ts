import { fileURLToPath } from "url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '~/src/styles/main.scss'
  ],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        {
         src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'
        }
      ],
      link: [
        {
          rel: "preconnect",
          href: "'https://cdn.jsdelivr.net"
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com"
        },
        {
          rel: "preconnect",
          href: "ttps://fonts.gstatic.com"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        }
      ]
    }
  },

  runtimeConfig: {
    public: {
      siteName: 'Default Nuxt App'
    }
  },

  modules: ["@nuxtjs/robots", "@nuxtjs/sitemap"],
  robots: {
    allow: ['/'],
  },
  alias: {
    "@": fileURLToPath(new URL("./src/", import.meta.url))
  }
})