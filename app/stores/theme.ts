import { acceptHMRUpdate, defineStore } from 'pinia'

export function updateTheme(themeName: string, themeColor: string) {
  return `/themes/${themeName}-${themeColor}/theme.css`
}

export const useThemeStore = defineStore('theme', {
  // a function that returns a fresh state
  state: () => ({
    themeName: 'aura',
    themeColor: 'green',
  }),
  // optional getters
  getters: {
    theme: (state) => {
      return `${state.themeName}-${state.themeColor}`
    },
  },
  // optional actions
  actions: {
    setTheme(themeName: string) {
      this.themeName = themeName
    },
    setColor(colorName: string) {
      this.themeColor = colorName
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot))
