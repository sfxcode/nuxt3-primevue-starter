<template>
  <div class='layout-menu-container'>
    <AppSubmenu :items='model' class='layout-menu' :root='true' @menuitem-click='onMenuItemClick' />
  </div>
</template>

<script setup lang='ts'>
import AppSubmenu from './AppSubmenu.vue';

const props = defineProps<{
  model: Array<any>
}>();

const emit = defineEmits(['menuitem-click']);

function onMenuItemClick(event: any) {
  emit('menuitem-click', event);
}
</script>


<style scoped>

</style>
