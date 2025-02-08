<script lang="ts" setup>
const route = useRoute()
const path = route.path.replace('/cms', '')
const { data: page } = await useAsyncData(`page-${path}`, () => {
  return queryCollection('content').path(path).first()
})
</script>

<template>
  <div class="card">
    <h2>{{ page?.title }}</h2>
    <p>{{ page?.description }}</p>
    <p class="font-bold">
      Author: {{ page?.meta.author }}
    </p>
    <hr>

    <ContentRenderer v-if="page" :value="page" />

    <footer><!-- ... --></footer>
  </div>
</template>
