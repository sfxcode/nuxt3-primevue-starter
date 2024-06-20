export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('sfxcode')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  watch(name, () => {
    count.value = 0
  })

  return { count, name, doubleCount, increment }
})
