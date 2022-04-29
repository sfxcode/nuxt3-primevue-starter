import consola from 'consola'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const useDataStore = defineStore({
  id: 'data',

  state: () => ({
    appVersion: import.meta.env.VITE_APP_VERSION as string | undefined,
    customers: [],
    products: [],
  }),
  actions: {
    async initData() {
      if (this.customers.length === 0) {
        consola.debug('fetching data ...')

        await fetch('/data/customers-medium.json').then(res => res.json()).then((d) => {
          this.customers = d.data
        })
          .catch(error => consola.error(error))

        await fetch('/data/products.json').then(res => res.json()).then((d) => {
          this.products = d.data
        })
          .catch(error => consola.error(error))
      }
    },
  },

},
)

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useDataStore, import.meta.hot))
