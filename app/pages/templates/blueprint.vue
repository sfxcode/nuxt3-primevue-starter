<script setup lang='ts'>
import ToDo from '~/components/ToDo.vue'
</script>

<template>
  <div class="card">
    <h2>Blueprint</h2>
    <p>Use this page to start from scratch and place your custom content !</p>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
    <div>
      <ToDo text="Work in Progress" />
    </div>
  </div>
</template>

<style scoped></style>
