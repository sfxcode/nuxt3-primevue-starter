<script setup lang='ts'>
defineProps({
  header: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: null,
  },
})
</script>

<template>
  <div class="mb-4 p-4 px-5 shadow-xs">
    <span class="mb-1 p-3 inline-block" style="border-radius: 10px">
      <span :class="`text-2xl text-${color} i-${icon}`" />
    </span>
    <div :class="`mb-3 text-2xl text-${color}`">
      {{ header }}
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
