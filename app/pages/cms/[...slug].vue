<script setup lang='ts'>
const route = useRoute()
const slug = route.params.slug?.toString()
</script>

<template>
  <div class="markdown">
    <ContentDoc :path="slug">
      <template #default="{ doc }">
        <div class="card">
          <h2>{{ doc.title }}</h2>
          <p>{{ doc.description }}</p>
          <p class="font-bold">
            Author: {{ doc.author }}
          </p>
          <hr>
          <ContentRenderer :value="doc" />
        </div>
      </template>
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
