import { acceptHMRUpdate, defineStore } from 'pinia'

export function updateTheme(themeName: string, themeColor: string) {
  return `/themes/${themeName}-${themeColor}/theme.css`
}

export const useThemeStore = defineStore('theme', {
  // a function that returns a fresh state
  state: () => ({
    themeName: 'aura-dark',
    themeColor: 'green',
    link: '/themes/aura-dark-green/theme.css',
  }),
  // optional getters
  getters: {
    theme: (state) => {
      return `${state.themeName}-${state.themeColor}`
    },
    isDarkMode: state => state.themeName === 'lara-dark',
  },
  // optional actions
  actions: {

    setTheme(themeName: string) {
      this.themeName = themeName
      this.link = updateTheme(this.themeName, this.themeColor)
    },
    setColor(colorName: string) {
      this.themeColor = colorName
      this.link = updateTheme(this.themeName, this.themeColor)
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot))
