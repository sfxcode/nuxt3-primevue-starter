<template>
  <div class='card'>
    <h5>Store Settings</h5>
    <h5 class='font-bold text-2xl mb-4 text-blue-600'>Primevue Theme Store</h5>
    <div class='grid grid-cols-2  gap-4'>
      <div>Theme Name</div>
      <div>{{ themeStore.themeName }}</div>
      <div>Theme Color</div>
      <div>{{ themeStore.themeColor }}</div>
    </div>

    <h5 class='font-bold text-2xl mb-4 text-blue-600'>Data Store</h5>
    <span class='text-xs'>Example of a Cached Pinia Store, data is cached in local storage ...</span>
    <div class='grid grid-cols-2 mt-6 gap-4'>
      <div>Customers</div>
      <div>{{ dataStore.customers.length }}</div>
      <div>Products</div>
      <div>{{ dataStore.products.length }}</div>
    </div>

  </div>
</template>

<script setup lang='ts'>

import { useDataStore, useThemeStore } from '@/stores';
const themeStore = useThemeStore();
const dataStore = useDataStore();

onMounted(async () => {
  await dataStore.initData()
})

</script>

<style scoped></style>
