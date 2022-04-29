<script setup lang="ts">
const { data } = await useFetch('/api/pageview')
const time = useTimeAgo(computed(() => data.value.startAt))
</script>

<template>
  <div class="text-gray:80 text-2xl">
    <span font-500 text-gray>{{ data.pageview }}</span>
    page views since
    <span text-gray>{{ time }}</span>
  </div>
</template>
