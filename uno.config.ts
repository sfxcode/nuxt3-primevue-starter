// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

function convert(color: string) {
  return `color-mix(in srgb, ${color} calc(100% * <alpha-value>), transparent)`
}

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
  ],
  theme: {
    colors: {
      'primary': convert('var(--p-primary-color)'),
      'primary-emphasis': convert('var(--p-primary-hover-color)'),
      'primary-emphasis-alt': convert('var(--p-primary-active-color)'),
      'primary-contrast': convert('var(--p-primary-contrast-color)'),
      'primary-50': convert('var(--p-primary-50)'),
      'primary-100': convert('var(--p-primary-100)'),
      'primary-200': convert('var(--p-primary-200)'),
      'primary-300': convert('var(--p-primary-300)'),
      'primary-400': convert('var(--p-primary-400)'),
      'primary-500': convert('var(--p-primary-500)'),
      'primary-600': convert('var(--p-primary-600)'),
      'primary-700': convert('var(--p-primary-700)'),
      'primary-800': convert('var(--p-primary-800)'),
      'primary-900': convert('var(--p-primary-900)'),
      'primary-950': convert('var(--p-primary-950)'),
      'surface-0': convert('var(--p-surface-0)'),
      'surface-50': convert('var(--p-surface-50)'),
      'surface-100': convert('var(--p-surface-100)'),
      'surface-200': convert('var(--p-surface-200)'),
      'surface-300': convert('var(--p-surface-300)'),
      'surface-400': convert('var(--p-surface-400)'),
      'surface-500': convert('var(--p-surface-500)'),
      'surface-600': convert('var(--p-surface-600)'),
      'surface-700': convert('var(--p-surface-700)'),
      'surface-800': convert('var(--p-surface-800)'),
      'surface-900': convert('var(--p-surface-900)'),
      'surface-950': convert('var(--p-surface-950)'),
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },

  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
