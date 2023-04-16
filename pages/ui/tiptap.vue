<script setup lang="ts">
import TipTap from '~/components/tiptap/TipTap.vue'
const startText = '<p>I’m running Tiptap with Vue.js and Nuxt. 🎉</p>'
const editorValue = ref(startText)

function resetText () {
  editorValue.value = startText
}
</script>

<template>
  <div class="card">
    <h5>TipTap as alternative Editor</h5>

    <div class="pb-2">
      <Button size="small" label="Reset" @click="resetText" />
    </div>
    <TipTap v-model="editorValue" />
  </div>
</template>

<style scoped></style>
