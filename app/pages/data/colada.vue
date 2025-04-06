<script setup lang='ts'>
const { catsFacts } = useCatsStore()
const { d } = useI18n()
</script>

<template>
  <div class="card">
    <h2>Pinia Colada</h2>
    <p>The Data Fetching layer for Pinia</p>
    <h3>Some facts about cats</h3>
    <div class="pt-4 w-1/2">
      <div v-for="item in catsFacts" :key="item.fact" class="card">
        <h2>{{ item.fact.replace(/ .*/, '') }} ...</h2>
        <span>{{ item.fact }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
