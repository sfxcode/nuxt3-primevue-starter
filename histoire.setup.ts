import { defineSetupVue3 } from '@histoire/plugin-vue'

export const setupVue3 = defineSetupVue3(() => {
  // workaround -  unocss integration from nuxt did not work ...
  const externalScript = document.createElement('script')
  externalScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/@unocss/runtime/attributify.global.js')
  document.head.appendChild(externalScript)
})
