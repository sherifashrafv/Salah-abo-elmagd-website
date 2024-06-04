// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  typescript: { shim: false },
  ssr: false,
  anime: {
    provide: true,
  },
  modules: [
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@bg-dev/nuxt-naiveui",
    "@hypernym/nuxt-anime",
    "nuxt-swiper",
    "@nuxtjs/tailwindcss",
  ],
  css: ["@/assets/styles/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  colorMode: {
    classSuffix: "",
    preference: "dark",
    fallback: "dark",
  },
  tailwindcss: {
    cssPath: "@/assets/styles/tailwind.module.scss",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    viewer: true,
    injectPosition: 0,
    config: {},
  },
  experimental: {
    defaults: {
      nuxtLink: {
        componentName: "NuxtLink",
        externalRelAttribute: "noopener noreferrer",
        activeClass: "router-link-active",
        exactActiveClass: "router-link-exact-active",
        prefetchedClass: undefined,
        trailingSlash: undefined,
      },
    },
  },
});
