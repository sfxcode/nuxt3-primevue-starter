import { acceptHMRUpdate, defineStore } from 'pinia'

export function updateTheme (themeName: string, themeColor: string) {
  return `/themes/${themeName}-${themeColor}/theme.css`
}

export const useThemeStore = defineStore('theme', {
  // a function that returns a fresh state
  state: () => ({
    themeName: 'vela',
    themeColor: 'blue',
    link: '/themes/vela-blue/theme.css'
  }),
  // optional getters
  getters: {
    theme: (state) => {
      return `${state.themeName}-${state.themeColor}`
    },
    isDarkMode: state => state.themeName !== 'saga'
  },
  // optional actions
  actions: {
    setDark () {
      this.themeName = 'arya'
      this.link = updateTheme(this.themeName, this.themeColor)
    },
    setDim () {
      this.themeName = 'vela'
      this.link = updateTheme(this.themeName, this.themeColor)
    },
    setLight () {
      this.themeName = 'saga'
      this.link = updateTheme(this.themeName, this.themeColor)
    },
    setColor (colorName: string) {
      this.themeColor = colorName
      this.link = updateTheme(this.themeName, this.themeColor)
    }
  }
})

if (import.meta.hot) { import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot)) }
