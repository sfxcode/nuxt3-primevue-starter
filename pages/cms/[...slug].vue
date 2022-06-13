<script setup lang='ts'>
const route = useRoute()
const slug = route.params.slug.toString()
</script>

<template>
  <div class="markdown">
    <ContentDoc :path="slug">
      <!-- Slot if document is not found -->
      <template #not-found>
        <h1 class="text-2xl">
          Content Page ({{ slug }}) not found
        </h1>
      </template>
    </contentdoc>
  </div>
</template>

<style scoped></style>
