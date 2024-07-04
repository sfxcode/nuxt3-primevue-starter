<script setup lang='ts'>
defineProps({
  text: {
    type: String,
    default: '',
  },
  href: {
    type: String,
    default: '#',
  },
})
</script>

<template>
  <a v-tooltip.bottom="href" :href="href" target="_blank">{{ text }}</a>
</template>
