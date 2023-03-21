import { defineSetupVue3 } from '@histoire/plugin-vue'

export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {
  app.provide('test', 'hello')
  const externalScript = document.createElement('script')
  externalScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/@unocss/runtime/attributify.global.js')
  document.head.appendChild(externalScript)

  const link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = 'https://cdn.jsdelivr.net/npm/primevue@3.15.0/resources/themes/vela-blue/theme.css'

  document.head.appendChild(link)
})
