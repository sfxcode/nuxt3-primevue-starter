<script setup>
const config = useRuntimeConfig()
</script>

<template>
  <div class="layout-footer mt-4">
    <span class="ml-2 font-medium">{{ config.public.APP_NAME }} - {{ config.public.APP_VERSION }}</span>
  </div>
</template>

<style lang="scss" scoped></style>
