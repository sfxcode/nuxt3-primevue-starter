<script setup>
useHead({
  title: 'Nuxt 3 PrimeVue Starter',
  link: [
    {
      id: 'theme-link', rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/primevue@3.15.0/resources/themes/vela-blue/theme.css',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang='scss'>
@import 'App.scss';
</style>

