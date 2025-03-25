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
    <h5>
      Primevue Theme Store
    </h5>
    <div class="gap-4 grid grid-cols-2">
      <div>Theme Name</div>
      <div>{{ themeStore.themeName }}</div>
      <div>Theme Color</div>
      <div>{{ themeStore.themeColor }}</div>
    </div>

    <h5>
      Data Store (Option Store)
    </h5>
    <span class="text-xs">Example of a Data Store</span>
    <div class="mt-6 gap-4 grid grid-cols-2">
      <div>Products</div>
      <div>{{ dataStore.products.length }}</div>
    </div>

    <h5>
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
  color: var(--p-primary-color);
}
</style>
