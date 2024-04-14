<script setup lang='ts'>
import AppMenuItem from './AppMenuItem.vue'
import { useNavigationMenu } from '~/composables/navigation'

const { navigationMenu } = useNavigationMenu()
const model = navigationMenu()
</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in model" :key="item">
      <AppMenuItem v-if="!item.separator" :item="item" :index="i" />
      <li v-if="item.separator" class="menu-separator" />
    </template>
  </ul>
</template>

<style lang="scss" scoped></style>
