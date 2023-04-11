<script setup lang='ts'>
const config = useRuntimeConfig()
</script>

<template>
  <div class="mt-4 layout-footer">
    <span class="font-medium ml-2">{{ config.public['APP_NAME'] }} - {{ config.public['APP_VERSION'] }}</span>
  </div>
</template>

<style scoped>

</style>
