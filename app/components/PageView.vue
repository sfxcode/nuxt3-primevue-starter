<script setup lang="ts">
const { data } = await useFetch('/api/pageview')
const time = useTimeAgo(computed(() => data.value?.startAt))
const pageview = data.value?.pageview
</script>

<template>
  <div class="text-2xl text-gray:80">
    <span text-gray font-500>{{ pageview }}</span>
    page views since
    <span text-gray>{{ time }}</span>
  </div>
</template>
