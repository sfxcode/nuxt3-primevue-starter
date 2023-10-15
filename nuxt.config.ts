import pkg from './package.json'

export default defineNuxtConfig({
  devtools: true,
  ssr: true,
  runtimeConfig: {
    public: {
      APP_VERSION: pkg.version,
      APP_NAME: pkg.name,
      APP_MODE: process.env?.NODE_ENV
    }
  },
  modules: [
    '@formkit/nuxt',
    '@sfxcode/nuxt-primevue',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@vueuse/nuxt'
  ],
  content: {
    highlight: {
      theme: 'one-dark-pro',
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue']
    }
    // Options
  },
  i18n: {
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    locales: [
      { code: 'en', file: 'en.json', name: 'English' },
      { code: 'de', file: 'de.json', name: 'German' }
    ],

    vueI18n: './vue-i18n.options.ts'

  },
  primevue: {
    config: {
      ripple: true
    }
  },
  css: [
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    '@sfxcode/formkit-primevue/dist/sass/formkit-primevue.scss'
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore' // import { defineStore } from 'pinia'
    ]
  },
  build: {
    transpile: ['nuxt', 'primevue', 'formkit-primevue']
  },
  sourcemap: {
    client: false,
    server: true
  }
})
