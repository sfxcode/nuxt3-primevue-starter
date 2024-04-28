<script setup lang='ts'>
const props = defineProps({
  text: {
    type: String,
    default: 'TODO',
  },
})
</script>

<template>
  <div>
    <div class="todo m-4 flex gap-2">
      <i class="i-mdi-information text-3xl text-[color:var(--primary-color)]" />
      <div data-testid="test_todo" class="text-2xl">
        {{ text }}
      </div>
    </div>
    <div class="pt-4 pl-1">
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>
