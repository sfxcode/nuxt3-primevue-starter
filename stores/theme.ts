import { acceptHMRUpdate, defineStore } from 'pinia'

export function updateTheme(themeName: string, themeColor: string) {
  const newValue = `https://cdn.jsdelivr.net/npm/primevue@3.15.0/resources/themes/${themeName}-${themeColor}/theme.css`
  const relElements = Array.prototype.slice.call(document.getElementsByTagName('link'))
  relElements.forEach((element: HTMLElement) => {
    if (element.getAttribute('href') && element.getAttribute('href').includes('/themes/'))
      element.setAttribute('href', newValue)
  })
}

export const useThemeStore = defineStore('theme', {
  // a function that returns a fresh state
  state: () => ({
    themeName: 'vela',
    themeColor: 'blue',
  }),
  // optional getters
  getters: {
    theme: (state) => {
      return `${state.themeName}-${state.themeColor}`
    },
    isDarkMode: state => state.themeName !== 'saga',
  },
  // optional actions
  actions: {
    setDark() {
      this.themeName = 'arya'
      updateTheme(this.themeName, this.themeColor)
    },
    setDim() {
      this.themeName = 'vela'
      updateTheme(this.themeName, this.themeColor)
    },
    setLight() {
      this.themeName = 'saga'
      updateTheme(this.themeName, this.themeColor)
    },
    setColor(colorName: string) {
      this.themeColor = colorName
      updateTheme(this.themeName, this.themeColor)
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot))
