<script setup lang="ts">
const { data } = await useFetch('/api/pageview')
const time = useTimeAgo(computed(() => data.value?.startAt))
const pageview = data.value?.pageview
</script>

<template>
  <div class="text-gray:80 text-2xl">
    <span font-500 text-gray>{{ pageview }}</span>
    page views since
    <span text-gray>{{ time }}</span>
  </div>
</template>
