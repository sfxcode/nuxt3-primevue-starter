<script setup lang='ts'>

const props = defineProps<{
  header: String
  icon: String
  color?: String
}>()

</script>

<template>
  <div class="mb-4 px-5">
    <span class="p-3 shadow-2 mb-1 inline-block" style="border-radius: 10px">
      <span :class="'text-2xl text-' + color + ' i-' + icon" />
    </span>
    <div :class="'mb-3 text-2xl text-' + color">
      {{ header }}
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
