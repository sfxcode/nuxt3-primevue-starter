import { defineConfig } from 'histoire'
import { HstNuxt } from '@histoire/plugin-nuxt'

export default defineConfig({
  plugins: [
    HstNuxt(),
  ],
  // workaround -  unocss integration from nuxt did not work ...
  setupFile: 'histoire.setup.ts',
})
