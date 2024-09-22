<script setup lang='ts'>
const themeStore = useThemeStore()
const dataStore = useDataStore()
const counterStore = useCounterStore()

onMounted(async () => {
  await dataStore.initData()
})
</script>

<template>
  <div class="card">
    <h2>Store Settings</h2>
    <h5 class="font-bold text-2xl mb-4">
      Primevue Theme Store
    </h5>
    <div class="grid grid-cols-2  gap-4">
      <div>Theme Name</div>
      <div>{{ themeStore.themeName }}</div>
      <div>Theme Color</div>
      <div>{{ themeStore.themeColor }}</div>
    </div>

    <h5 class="font-bold text-2xl mb-4">
      Data Store (Option Store)
    </h5>
    <span class="text-xs">Example of a Data Store</span>
    <div class="grid grid-cols-2 mt-6 gap-4">
      <div>Products</div>
      <div>{{ dataStore.products.length }}</div>
    </div>

    <h5 class="font-bold text-2xl mb-4">
      Counter Store (Setup Store)
    </h5>
    <span class="text-xs">Example of a Data Store</span>
    <div class="mt-6">
      <div>
        <InputText v-model="counterStore.name" />
      </div>
    </div>
    <div class="mt-3">
      {{ counterStore.name }} clicked {{ counterStore.count }} times. Doubled value: {{ counterStore.doubleCount }}
    </div>
    <div class="mt-3">
      <Button :label="counterStore.name" @click="counterStore.increment()" />
    </div>
  </div>
</template>

<style lang='scss' scoped>
h5 {
  color: var(--p-primary-color)
}
</style>
